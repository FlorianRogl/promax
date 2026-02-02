import React from 'react';
import { useCookieConsent } from './CookieContext';
import CookieSettings from './CookieSettings';
import { Cookie } from 'lucide-react';

const CookieBanner: React.FC = () => {
    const { showBanner, acceptAll, rejectAll, setShowSettings } = useCookieConsent();

    if (!showBanner) {
        // Auch wenn der Banner nicht sichtbar ist, muss das Settings-Modal noch rendern können
        return <CookieSettings />;
    }

    return (
        <>
            {/* ─── Banner ─────────────────────────────────────────────────── */}
            <div
                role="dialog"
                aria-label="Cookie-Zustimmung"
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    background: '#ffffff',
                    boxShadow: '0 -4px 32px rgba(0, 0, 0, 0.12)',
                    borderTop: '1px solid #e5e7eb',
                    animation: 'cookieBannerSlideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                }}
            >
                <div
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '20px 24px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '20px',
                        flexWrap: 'wrap',
                    }}
                >
                    {/* Icon + Text */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flex: '1 1 auto', minWidth: '260px' }}>
                        <div
                            style={{
                                width: '44px',
                                height: '44px',
                                background: '#1e3767',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}
                        >
                            <Cookie size={22} color="#ffffff" />
                        </div>

                        <div style={{ flex: 1 }}>
                            <h3
                                style={{
                                    margin: '0 0 6px',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    color: '#1e3767',
                                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                                }}
                            >
                                Wir verwenden Cookies
                            </h3>
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: '13px',
                                    color: '#4b5563',
                                    lineHeight: '1.6',
                                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                                    maxWidth: '580px',
                                }}
                            >
                                Wir setzen Cookies ein, um Ihre Nutzererfahrung zu verbessern und unsere Website zu analysieren.
                                Dazu werden{' '}
                                <strong style={{ color: '#374151' }}>Analyse-Cookies</strong> (Google Analytics, Microsoft Clarity, Vercel Analytics)
                                und{' '}
                                <strong style={{ color: '#374151' }}>Marketing-Cookies</strong> (Google AdWords) verwendet.
                                Sie können Ihre Einstellungen jederzeit anpassen. Weitere Informationen finden Sie in unserer{' '}
                                <a
                                    href="/Rechtliches#datenschutz"
                                    style={{
                                        color: '#d97539',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                    }}
                                    onMouseOver={(e) => (e.target as HTMLAnchorElement).style.textDecoration = 'underline'}
                                    onMouseOut={(e) => (e.target as HTMLAnchorElement).style.textDecoration = 'none'}
                                >
                                    Datenschutzerklärung
                                </a>.
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            flexWrap: 'wrap',
                            flexShrink: 0,
                        }}
                    >
                        {/* Ablehnen – DSGVO: gleich prominent wie Akzeptieren */}
                        <button
                            onClick={rejectAll}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '8px',
                                border: '1.5px solid #1e3767',
                                background: 'transparent',
                                color: '#1e3767',
                                fontSize: '14px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                fontFamily: "'Inter', 'Segoe UI', sans-serif",
                                whiteSpace: 'nowrap',
                                transition: 'background 0.2s, color 0.2s',
                            }}
                            onMouseOver={(e) => {
                                (e.currentTarget).style.background = '#1e3767';
                                (e.currentTarget).style.color = '#ffffff';
                            }}
                            onMouseOut={(e) => {
                                (e.currentTarget).style.background = 'transparent';
                                (e.currentTarget).style.color = '#1e3767';
                            }}
                        >
                            Ablehnen
                        </button>

                        {/* Einstellungen */}
                        <button
                            onClick={() => setShowSettings(true)}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '8px',
                                border: '1.5px solid #d1d5db',
                                background: '#f9fafb',
                                color: '#374151',
                                fontSize: '14px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                fontFamily: "'Inter', 'Segoe UI', sans-serif",
                                whiteSpace: 'nowrap',
                                transition: 'background 0.2s, border-color 0.2s',
                            }}
                            onMouseOver={(e) => {
                                (e.currentTarget).style.background = '#f3f4f6';
                                (e.currentTarget).style.borderColor = '#9ca3af';
                            }}
                            onMouseOut={(e) => {
                                (e.currentTarget).style.background = '#f9fafb';
                                (e.currentTarget).style.borderColor = '#d1d5db';
                            }}
                        >
                            Einstellungen
                        </button>

                        {/* Alle akzeptieren */}
                        <button
                            onClick={acceptAll}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '8px',
                                border: '1.5px solid #d97539',
                                background: '#d97539',
                                color: '#ffffff',
                                fontSize: '14px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                fontFamily: "'Inter', 'Segoe UI', sans-serif",
                                whiteSpace: 'nowrap',
                                transition: 'background 0.2s',
                            }}
                            onMouseOver={(e) => (e.currentTarget).style.background = '#c56830'}
                            onMouseOut={(e) => (e.currentTarget).style.background = '#d97539'}
                        >
                            Alle akzeptieren
                        </button>
                    </div>
                </div>
            </div>

            {/* Settings Modal */}
            <CookieSettings />

            <style>{`
                @keyframes cookieBannerSlideUp {
                    from {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
};

export default CookieBanner;
