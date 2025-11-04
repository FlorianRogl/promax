import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Leistungen = () => {
    const { t } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        // Scroll to section if hash exists in URL
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Longer timeout to ensure page is fully loaded
                setTimeout(() => {
                    const offset = 80; // Offset for fixed header
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 300);
            }
        }
    }, [location]);

    return (
        <>
            <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif" }}>

                {/* Hero Section with Parallax */}
                <section
                    id="hero-section"
                    className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(30, 55, 103, 0.7), rgba(30, 55, 103, 0.7)), url('/LeistungenPic.jpg')`,
                        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>

                    <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                        <div className="animate-fade-in-up">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-white mb-4 sm:mb-6">
                                {t('services.heroTitle')}
                            </h1>
                            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#d97539] leading-relaxed">
                                {t('services.heroSubtitle')}
                            </p>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                        </div>
                    </div>
                </section>

                {/* Main Services Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

                        {/* Ingenieurplanung */}
                        <div id="ingenieurplanung" className="mb-24 pt-20 -mt-20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Content */}
                                <div>
                                    <div className="flex items-center mb-8">
                                        <div className="w-16 h-16 bg-[#1e3767] rounded-xl flex items-center justify-center mr-6">
                                            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-4xl font-light text-[#1e3767] mb-2">{t('services.engineeringTitle')}</h2>
                                            <div className="w-16 h-1 bg-[#d97539]"></div>
                                        </div>
                                    </div>

                                    {/* Anlagenkonzeption und Design */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-semibold text-[#1e3767] mb-4">{t('services.engineeringConceptTitle')}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {t('services.engineeringConceptText')}
                                        </p>
                                    </div>

                                    {/* 3D-Modellierung und Berechnung */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-semibold text-[#1e3767] mb-4">{t('services.engineering3DTitle')}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {t('services.engineering3DText')}
                                        </p>
                                    </div>

                                    {/* LaserScan-Technologie */}
                                    <div>
                                        <h3 className="text-2xl font-semibold text-[#1e3767] mb-4">{t('services.engineeringLaserTitle')}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {t('services.engineeringLaserText')}
                                        </p>
                                    </div>
                                </div>

                                {/* Image */}
                                <div>
                                    <img
                                        src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop&auto=format"
                                        alt="Ingenieurplanung - 3D Modellierung und technische Planung"
                                        className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Separator */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-24"></div>

                        {/* Operative Projektunterstützung */}
                        <div id="operative-projektstuetzung" className="pt-20 -mt-20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Image */}
                                <div className="lg:order-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format"
                                        alt="Operative Projektunterstützung - Projektmanagement und Koordination"
                                        className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content */}
                                <div className="lg:order-2">
                                    <div className="flex items-center mb-8">
                                        <div className="w-16 h-16 bg-[#d97539] rounded-xl flex items-center justify-center mr-6">
                                            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-4xl font-light text-[#1e3767] mb-2">{t('services.projectSupportTitle')}</h2>
                                            <div className="w-16 h-1 bg-[#d97539]"></div>
                                        </div>
                                    </div>

                                    {/* Projektabwicklung */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-semibold text-[#1e3767] mb-4">{t('services.projectExecutionTitle')}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                            {t('services.projectExecutionText1')}
                                        </p>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {t('services.projectExecutionText2')}
                                        </p>
                                    </div>

                                    {/* Ausschreibung und Beschaffung */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-semibold text-[#1e3767] mb-4">{t('services.tenderingTitle')}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {t('services.tenderingText')}
                                        </p>
                                    </div>

                                    {/* Fachbauüberwachung */}
                                    <div>
                                        <h3 className="text-2xl font-semibold text-[#1e3767] mb-4">{t('services.supervisionTitle')}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {t('services.supervisionText')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Add required styles */}
            <style>{`
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
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
            `}</style>
        </>
    );
};

export default Leistungen;