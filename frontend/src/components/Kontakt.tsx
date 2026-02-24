import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCookieConsent } from '../coockies/CookieContext';
import kontaktHero from '../assets_komp/kontaktHero.webp';
import { MapPin } from 'lucide-react';

// ─── Google Maps Consent-Placeholder ──────────────────────────────────────────
// Zeigt sich wenn der User noch keine Analyse-Cookies akzeptiert hat.
// Google Maps sendet Daten an Google → braucht Consent.

interface MapsPlaceholderProps {
    title: string;
    address: string;
    onAccept: () => void;
}

const MapsPlaceholder: React.FC<MapsPlaceholderProps> = ({ title, address, onAccept }) => (
    <div
        style={{
            width: '100%',
            height: '300px',
            background: '#f3f4f6',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            padding: '24px',
            textAlign: 'center',
        }}
    >
        <div
            style={{
                width: '52px',
                height: '52px',
                background: '#1e3767',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <MapPin size={24} color="#ffffff" />
        </div>
        <div>
            <p style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 600, color: '#1e3767' }}>
                {title}
            </p>
            <p style={{ margin: '0 0 4px', fontSize: '13px', color: '#6b7280' }}>
                {address}
            </p>
            <p style={{ margin: '0 0 16px', fontSize: '12px', color: '#9ca3af', maxWidth: '320px', lineHeight: '1.5' }}>
                Google Maps sendet Daten an Google. Bitte akzeptieren Sie Analyse-Cookies, um die Karte zu laden.
            </p>
        </div>
        <button
            onClick={onAccept}
            style={{
                padding: '8px 20px',
                borderRadius: '6px',
                border: 'none',
                background: '#d97539',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
            }}
        >
            Karte laden
        </button>
    </div>
);

// ─── Hauptkomponente ──────────────────────────────────────────────────────────

const Kontakt = () => {
    const { t } = useTranslation();
    const { consent, saveSettings } = useCookieConsent();
    const [isVisible, setIsVisible] = useState(false);

    // Lokaler State: der User kann per "Karte laden" nur Analyse akzeptieren
    // ohne dass der gesamte Banner nochmal kommt
    const [mapsConsented, setMapsConsented] = useState(consent.analytics);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Wenn consent.analytics sich ändert (z.B. über den Cookie-Banner) → aktualisieren
    useEffect(() => {
        setMapsConsented(consent.analytics);
    }, [consent.analytics]);

    // Wenn der User "Karte laden" klickt → Analyse-Consent geben
    const handleMapsAccept = () => {
        saveSettings({
            ...consent,
            analytics: true,
        });
        setMapsConsented(true);
    };

    return (
        <>
            <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif" }}>
                {/* Hero Section with Parallax */}
                <section
                    className="relative w-full flex flex-col items-center justify-center bg-cover bg-center"
                    style={{
                        height: '115vh',
                        minHeight: '115vh',
                        backgroundImage: `linear-gradient(rgba(30, 55, 103, 0.7), rgba(30, 55, 103, 0.7)), url('${kontaktHero}')`,
                        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>

                    <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
                        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-light text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                                {t('contact.heroTitle')}
                                <span className="block font-semibold text-[#d97539] mt-1 sm:mt-2">{t('contact.heroSubtitle')}</span>
                            </h1>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="mt-16 z-30">
                        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center animate-[fadeOut_6s_ease-in-out_forwards]">
                            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

                        {/* Linke Spalte - Kontaktinformationen */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Direkte Kontaktmöglichkeiten */}
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                                    {t('contact.reachUsTitle')}{' '}
                                    <span className="text-[#1e3767] font-semibold">{t('contact.reachUsTitleHighlight')}</span>
                                </h2>
                                <div className="w-20 h-1 bg-[#d97539] mb-8"></div>

                                <div className="space-y-8">
                                    {/* Telefon Graz */}
                                    <div className="group">
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{t('contact.phoneGraz')}</p>
                                        <a href="tel:+433162414393"
                                           className="text-lg text-[#1e3767] hover:text-[#d97539] transition-colors block font-medium">
                                            +43 316 241 4393
                                        </a>
                                    </div>

                                    {/* Telefon Wien */}
                                    <div className="group">
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{t('contact.phoneVienna')}</p>
                                        <a href="tel:+431234567890"
                                           className="text-lg text-[#1e3767] hover:text-[#d97539] transition-colors block font-medium">
                                            +43 1 234 567 890
                                        </a>
                                    </div>

                                    <div className="group">
                                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{t('contact.email')}</p>
                                        <a href="mailto:office@promax.at"
                                           className="text-lg text-[#1e3767] hover:text-[#d97539] transition-colors font-medium">
                                            office@promax.at
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Standorte */}
                            <div>
                                <h3 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                                    {t('contact.locationsTitle')}{' '}
                                    <span className="text-[#1e3767] font-semibold">{t('contact.locationsTitleHighlight')}</span>
                                </h3>
                                <div className="w-20 h-1 bg-[#d97539] mb-8"></div>

                                <div className="space-y-8">
                                    {/* Hauptsitz */}
                                    <div className="border-l-4 border-[#1e3767] pl-6 hover:border-[#d97539] transition-colors">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-2 h-2 bg-[#1e3767] rounded-full"></div>
                                            <h4 className="font-semibold text-[#1e3767] text-base">{t('contact.headquartersTitle')}</h4>
                                        </div>
                                        <address className="not-italic text-gray-600 text-sm leading-relaxed">
                                            PROMAX Project Management GesmbH<br/>
                                            Parkring 18/F<br/>
                                            8074 Raaba-Grambach<br/>
                                            Österreich
                                        </address>
                                    </div>

                                    {/* Wien */}
                                    <div className="border-l-4 border-[#d97539] pl-6 hover:border-[#1e3767] transition-colors">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-2 h-2 bg-[#d97539] rounded-full"></div>
                                            <h4 className="font-semibold text-[#1e3767] text-base">{t('contact.branchViennaTitle')}</h4>
                                        </div>
                                        <address className="not-italic text-gray-600 text-sm leading-relaxed">
                                            PROMAX Project Management GesmbH<br/>
                                            Löwengasse 3/5<br/>
                                            1030 Wien<br/>
                                            Österreich
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rechte Spalte - Anfahrt/Karten */}
                        <div className="lg:col-span-3">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
                                    {t('contact.routeTitle')}{' '}
                                    <span className="text-[#1e3767] font-semibold">{t('contact.routeTitleHighlight')}</span>
                                </h2>
                                <div className="w-20 h-1 bg-[#d97539] mb-8"></div>

                                <div className="space-y-6">
                                    {/* Graz Karte */}
                                    <div className="bg-white shadow-xl border border-gray-100 overflow-hidden rounded-lg">
                                        <div className="p-4 sm:p-6 bg-[#1e3767]">
                                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{t('contact.headquartersTitle')}</h3>
                                            <p className="text-white text-opacity-90 text-sm">Parkring 18/F, 8074 Raaba-Grambach</p>
                                        </div>
                                        {mapsConsented ? (
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.7289447742!2d15.4461!3d47.0379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e35925b8c0c71%3A0x5b8c0c71b8c0c71b!2sParkring%2018%2C%208074%20Raaba-Grambach%2C%20Austria!5e0!3m2!1sde!2sat!4v1"
                                                width="100%"
                                                height="300"
                                                style={{border: 0}}
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title="PROMAX Standort Graz"
                                                className="w-full"
                                            />
                                        ) : (
                                            <MapsPlaceholder
                                                title="Hauptsitz Graz"
                                                address="Parkring 18/F, 8074 Raaba-Grambach"
                                                onAccept={handleMapsAccept}
                                            />
                                        )}
                                    </div>

                                    {/* Wien Karte */}
                                    <div className="bg-white shadow-xl border border-gray-100 overflow-hidden rounded-lg">
                                        <div className="p-4 sm:p-6 bg-[#d97539]">
                                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{t('contact.branchViennaTitle')}</h3>
                                            <p className="text-white text-opacity-90 text-sm">Löwengasse 3/5, 1030 Wien</p>
                                        </div>
                                        {mapsConsented ? (
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.8234567891!2d16.3897!3d48.1951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d078c3c9e4d4d%3A0x1e3f1e3f1e3f1e3f!2sL%C3%B6wengasse%203%2C%201030%20Wien%2C%20Austria!5e0!3m2!1sde!2sat!4v1"
                                                width="100%"
                                                height="300"
                                                style={{border: 0}}
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title="PROMAX Standort Wien"
                                                className="w-full"
                                            />
                                        ) : (
                                            <MapsPlaceholder
                                                title="Niederlassung Wien"
                                                address="Löwengasse 3/5, 1030 Wien"
                                                onAccept={handleMapsAccept}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#1e3767] to-[#2a4a7f] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-pattern"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 sm:mb-4 md:mb-6 break-words hyphens-auto px-2">
                            {t('company.ctaTitle')} <span className="font-semibold">{t('company.ctaTitleHighlight')}</span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto break-words px-2">
                            {t('company.ctaText')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <a
                                href="mailto:office@promax.at"
                                className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#d97539] text-white rounded-full hover:bg-[#c56830] transform hover:scale-105 transition-all duration-300 font-medium text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl"
                            >
                                {t('company.ctaButton')}
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <style>{`
            @keyframes fadeOut {
    0%, 50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        visibility: hidden;
    }
}
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .bg-pattern {
                    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                }
            `}</style>
        </>
    );
};

export default Kontakt;