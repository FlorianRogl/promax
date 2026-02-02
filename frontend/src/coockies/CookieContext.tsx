import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type ConsentCategory = 'necessary' | 'analytics' | 'marketing';

export interface CookieConsent {
    necessary: boolean;   // immer true, kann nicht geändert werden
    analytics: boolean;   // Google Analytics, Microsoft Clarity, Vercel Analytics
    marketing: boolean;   // Google AdWords Conversion Tracking
}

export interface CookieContextType {
    consent: CookieConsent;
    consentGiven: boolean;          // hat der User überhaupt schon eine Entscheidung getroffen?
    showBanner: boolean;
    showSettings: boolean;
    setShowSettings: (show: boolean) => void;
    acceptAll: () => void;
    rejectAll: () => void;
    saveSettings: (consent: CookieConsent) => void;
}

// ─── Window Extensions ────────────────────────────────────────────────────────

interface WindowWithAnalytics extends Window {
    clarity?: unknown;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
}

declare const window: WindowWithAnalytics;

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_CONSENT: CookieConsent = {
    necessary: true,
    analytics: false,
    marketing: false,
};

const STORAGE_KEY = 'promax_cookie_consent';
const CONSENT_VERSION = '1'; // Erhöhe diese Zahl wenn sich die Cookie-Kategorien ändern

// ─── Context ──────────────────────────────────────────────────────────────────

const CookieContext = createContext<CookieContextType | undefined>(undefined);

// ─── Helper: localStorage ─────────────────────────────────────────────────────

interface StoredConsent {
    consent: CookieConsent;
    version: string;
    timestamp: number;
}

function loadConsent(): { consent: CookieConsent; consentGiven: boolean } {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return { consent: DEFAULT_CONSENT, consentGiven: false };

        const stored: StoredConsent = JSON.parse(raw);

        // Wenn die Version sich geändert hat → nochmal fragen
        if (stored.version !== CONSENT_VERSION) {
            return { consent: DEFAULT_CONSENT, consentGiven: false };
        }

        return { consent: stored.consent, consentGiven: true };
    } catch {
        return { consent: DEFAULT_CONSENT, consentGiven: false };
    }
}

function persistConsent(consent: CookieConsent): void {
    const stored: StoredConsent = {
        consent,
        version: CONSENT_VERSION,
        timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}

// ─── Script Loader / Unloader ─────────────────────────────────────────────────

// Microsoft Clarity
// Das Inline-Snippet ist self-loading (erstellt das Script intern),
// daher brauchen wir kein separates Script-Element.
function loadClarity(): void {
    if (document.getElementById('clarity-inline')) return;
    const inline = document.createElement('script');
    inline.id = 'clarity-inline';
    inline.textContent = `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/vapan0juwg";
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "vapan0juwg");
    `;
    document.head.appendChild(inline);
}

function removeClarity(): void {
    // Das vom Snippet eingefügte clarity.js Script entfernen
    const clarityScript = document.querySelector('script[src="https://www.clarity.ms/clarity.js"]');
    clarityScript?.remove();
    document.getElementById('clarity-inline')?.remove();
    if (window.clarity) {
        delete window.clarity;
    }
}

// Google Analytics (GA4) – du musst DEINE Measurement-ID einsetzen!
// Platzhalter: G-XXXXXXXXXX → ersetze mit deiner echten ID
const GA_MEASUREMENT_ID = 'G-TJCV36JKVB';

function loadGoogleAnalytics(): void {
    if (document.getElementById('ga-script')) return;

    // gtag inline setup
    const inline = document.createElement('script');
    inline.id = 'ga-inline';
    inline.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(inline);

    // GA4 Script laden
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.google.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
}

function removeGoogleAnalytics(): void {
    document.getElementById('ga-script')?.remove();
    document.getElementById('ga-inline')?.remove();
    // dataLayer/gtag nur löschen wenn AdWords auch nicht läuft (shared globals)
    if (!document.getElementById('adwords-script')) {
        if (window.dataLayer) {
            window.dataLayer = [];
        }
        if (window.gtag) {
            delete window.gtag;
        }
    }
}

// Google AdWords Conversion Tracking
// Platzhalter: AW-XXXXXXXXX → ersetze mit deiner echten AdWords-Account-ID
const ADWORDS_ACCOUNT_ID = 'AW-XXXXXXXXX';

function loadAdWords(): void {
    if (document.getElementById('adwords-script')) return;

    // gtag setup (shared mit GA, aber sicher nochmal initialisieren)
    const inline = document.createElement('script');
    inline.id = 'adwords-inline';
    inline.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ADWORDS_ACCOUNT_ID}');
    `;
    document.head.appendChild(inline);

    // AdWords gtag.js laden
    const script = document.createElement('script');
    script.id = 'adwords-script';
    script.async = true;
    script.src = `https://www.google.com/gtag/js?id=${ADWORDS_ACCOUNT_ID}`;
    document.head.appendChild(script);
}

function removeAdWords(): void {
    document.getElementById('adwords-script')?.remove();
    document.getElementById('adwords-inline')?.remove();
    // dataLayer/gtag nur löschen wenn GA auch nicht läuft (shared globals)
    if (!document.getElementById('ga-script')) {
        if (window.dataLayer) {
            window.dataLayer = [];
        }
        if (window.gtag) {
            delete window.gtag;
        }
    }
}

// ─── Hauptlogik: Skripte basierend auf Consent laden/entfernen ────────────────

function applyConsent(consent: CookieConsent): void {
    // ANALYSE
    if (consent.analytics) {
        loadClarity();
        loadGoogleAnalytics();
    } else {
        removeClarity();
        removeGoogleAnalytics();
    }

    // MARKETING
    if (consent.marketing) {
        loadAdWords();
    } else {
        removeAdWords();
    }
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [consent, setConsent] = useState<CookieConsent>(DEFAULT_CONSENT);
    const [consentGiven, setConsentGiven] = useState(false);
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [initialized, setInitialized] = useState(false);

    // Beim ersten Laden: aus localStorage lesen
    useEffect(() => {
        const loaded = loadConsent();
        setConsent(loaded.consent);
        setConsentGiven(loaded.consentGiven);
        setShowBanner(!loaded.consentGiven);
        setInitialized(true);

        // Wenn consent schon gegeben wurde → Skripte sofort laden
        if (loaded.consentGiven) {
            applyConsent(loaded.consent);
        }
    }, []);

    // Wenn consent sich ändert → Skripte anpassen
    useEffect(() => {
        if (initialized && consentGiven) {
            applyConsent(consent);
        }
    }, [consent, consentGiven, initialized]);

    const acceptAll = useCallback(() => {
        const fullConsent: CookieConsent = {
            necessary: true,
            analytics: true,
            marketing: true,
        };
        setConsent(fullConsent);
        setConsentGiven(true);
        setShowBanner(false);
        setShowSettings(false);
        persistConsent(fullConsent);
    }, []);

    const rejectAll = useCallback(() => {
        const minimalConsent: CookieConsent = {
            necessary: true,
            analytics: false,
            marketing: false,
        };
        setConsent(minimalConsent);
        setConsentGiven(true);
        setShowBanner(false);
        setShowSettings(false);
        persistConsent(minimalConsent);
    }, []);

    const saveSettings = useCallback((newConsent: CookieConsent) => {
        const finalConsent: CookieConsent = {
            ...newConsent,
            necessary: true, // kann nicht deaktiviert werden
        };
        setConsent(finalConsent);
        setConsentGiven(true);
        setShowBanner(false);
        setShowSettings(false);
        persistConsent(finalConsent);
    }, []);

    return (
        <CookieContext.Provider value={{
            consent,
            consentGiven,
            showBanner,
            showSettings,
            setShowSettings,
            acceptAll,
            rejectAll,
            saveSettings,
        }}>
            {children}
        </CookieContext.Provider>
    );
};

// ─── Hook ─────────────────────────────────────────────────────────────────────

export const useCookieConsent = (): CookieContextType => {
    const context = useContext(CookieContext);
    if (!context) {
        throw new Error('useCookieConsent must be used within a CookieProvider');
    }
    return context;
};

// ─── Export: gtag helper für AdWords Conversion Events ───────────────────────
// Verwende das in deinen Komponenten wo du eine Konversion tracken willst:
//   import { trackConversion } from '../context/CookieContext';
//   trackConversion('AW-XXXXXXXXX/deine-conversion-label');

export function trackConversion(conversionLabel: string, value?: number): void {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'conversion', {
        'send_to': conversionLabel,
        ...(value !== undefined && { value }),
    });
}