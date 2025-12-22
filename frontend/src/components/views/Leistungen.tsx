import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import leistungHero from '../../assets/LeistungenPic.jpg';


const Leistungen = () => {
    const { t } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        // Scroll to section if hash exists in URL
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    const offset = window.innerWidth < 768 ? 60 : 80;
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
        <div className="min-h-screen bg-white overflow-x-hidden" style={{
            fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
            wordBreak: 'normal',
            overflowWrap: 'break-word',
            hyphens: 'auto'
        }}>

            {/* Hero Section - Full Screen */}
            <section
                id="hero-section"
                style={{
                    position: 'relative',
                    height: '115vh',
                    minHeight: '115vh',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `linear-gradient(rgba(30, 55, 103, 0.7), rgba(30, 55, 103, 0.7)), url('${leistungHero}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
                }}
            >
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent, transparent, rgba(0,0,0,0.05))'
                }}></div>

                <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
                    <div className="opacity-0 translate-y-8 animate-fade-in-up">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-light text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                            {t('services.heroTitle')}
                            <span className="block font-semibold text-[#d97539] mt-1 sm:mt-2">{t('services.heroSubtitle')}</span>
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

            {/* Main Services Section */}
            <section style={{
                padding: 'clamp(3rem, 8vw, 6rem) 0',
                backgroundColor: 'white'
            }}>
                <div style={{
                    maxWidth: '80rem',
                    margin: '0 auto',
                    padding: '0 clamp(1rem, 4vw, 3rem)'
                }}>

                    {/* Ingenieurplanung */}
                    <div id="ingenieurplanung" style={{
                        marginBottom: 'clamp(4rem, 10vw, 6rem)',
                        paddingTop: 'clamp(4rem, 10vw, 5rem)',
                        marginTop: 'clamp(-4rem, -10vw, -5rem)'
                    }}>
                        <div className="grid grid-cols-1 lg:grid-cols-2" style={{
                            gap: 'clamp(2rem, 5vw, 3rem)',
                            alignItems: 'center'
                        }}>
                            {/* Content */}
                            <div className="order-2 lg:order-1">
                                {/* Header */}
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left" style={{
                                    marginBottom: 'clamp(1.5rem, 4vw, 2rem)'
                                }}>
                                    <div style={{
                                        width: 'clamp(3rem, 8vw, 4rem)',
                                        height: 'clamp(3rem, 8vw, 4rem)',
                                        backgroundColor: '#1e3767',
                                        borderRadius: 'clamp(0.5rem, 1.5vw, 0.75rem)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1rem',
                                        flexShrink: 0
                                    }} className="lg:mb-0 lg:mr-6">
                                        <svg style={{
                                            width: 'clamp(1.5rem, 4vw, 2.25rem)',
                                            height: 'clamp(1.5rem, 4vw, 2.25rem)',
                                            color: 'white'
                                        }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                        </svg>
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0, width: '100%' }}>
                                        <h2 style={{
                                            fontSize: 'clamp(1.25rem, 4vw, 2.25rem)',
                                            fontWeight: '300',
                                            color: '#1e3767',
                                            marginBottom: '0.5rem',
                                            wordBreak: 'break-word',
                                            hyphens: 'auto',
                                            padding: '0 0.5rem'
                                        }} className="lg:px-0">
                                            {t('services.engineeringTitle')}
                                        </h2>
                                    </div>
                                </div>

                                {/* Anlagenkonzeption und Design */}
                                <div style={{ marginBottom: 'clamp(1.5rem, 4vw, 2rem)' }}>
                                    <h3 style={{
                                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                                        fontWeight: '600',
                                        color: '#1e3767',
                                        marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                                        wordBreak: 'break-word',
                                        hyphens: 'auto'
                                    }}>
                                        {t('services.engineeringConceptTitle')}
                                    </h3>
                                    <p style={{
                                        fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                                        color: '#4b5563',
                                        lineHeight: '1.7',
                                        wordBreak: 'break-word'
                                    }}>
                                        {t('services.engineeringConceptText')}
                                    </p>
                                </div>

                                {/* 3D-Modellierung und Berechnung */}
                                <div style={{ marginBottom: 'clamp(1.5rem, 4vw, 2rem)' }}>
                                    <h3 style={{
                                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                                        fontWeight: '600',
                                        color: '#1e3767',
                                        marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                                        wordBreak: 'break-word',
                                        hyphens: 'auto'
                                    }}>
                                        {t('services.engineering3DTitle')}
                                    </h3>
                                    <p style={{
                                        fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                                        color: '#4b5563',
                                        lineHeight: '1.7',
                                        wordBreak: 'break-word'
                                    }}>
                                        {t('services.engineering3DText')}
                                    </p>
                                </div>

                                {/* LaserScan-Technologie */}
                                <div>
                                    <h3 style={{
                                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                                        fontWeight: '600',
                                        color: '#1e3767',
                                        marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                                        wordBreak: 'break-word',
                                        hyphens: 'auto'
                                    }}>
                                        {t('services.engineeringLaserTitle')}
                                    </h3>
                                    <p style={{
                                        fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                                        color: '#4b5563',
                                        lineHeight: '1.7',
                                        wordBreak: 'break-word'
                                    }}>
                                        {t('services.engineeringLaserText')}
                                    </p>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="order-1 lg:order-2">
                                <img
                                    src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop&auto=format"
                                    alt="Ingenieurplanung - 3D Modellierung und technische Planung"
                                    style={{
                                        width: '100%',
                                        height: 'clamp(12rem, 40vw, 31.25rem)',
                                        objectFit: 'cover',
                                        borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                                    }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Projektbetreuung */}
                    <div id="projektbetreuung" style={{
                        paddingTop: 'clamp(4rem, 10vw, 5rem)',
                        marginTop: 'clamp(-4rem, -10vw, -5rem)'
                    }}>
                        <div className="grid grid-cols-1 lg:grid-cols-2" style={{
                            gap: 'clamp(2rem, 5vw, 3rem)',
                            alignItems: 'center'
                        }}>
                            {/* Image */}
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format"
                                    alt="Projektbetreuung - Projektmanagement und Bauüberwachung"
                                    style={{
                                        width: '100%',
                                        height: 'clamp(12rem, 40vw, 31.25rem)',
                                        objectFit: 'cover',
                                        borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                                    }}
                                    loading="lazy"
                                />
                            </div>

                            {/* Content */}
                            <div>
                                {/* Header */}
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left" style={{
                                    marginBottom: 'clamp(1.5rem, 4vw, 2rem)'
                                }}>
                                    <div style={{
                                        width: 'clamp(3rem, 8vw, 4rem)',
                                        height: 'clamp(3rem, 8vw, 4rem)',
                                        backgroundColor: '#d97539',
                                        borderRadius: 'clamp(0.5rem, 1.5vw, 0.75rem)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1rem',
                                        flexShrink: 0
                                    }} className="lg:mb-0 lg:mr-6">
                                        <svg style={{
                                            width: 'clamp(1.5rem, 4vw, 2.25rem)',
                                            height: 'clamp(1.5rem, 4vw, 2.25rem)',
                                            color: 'white'
                                        }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0, width: '100%' }}>
                                        <h2 style={{
                                            fontSize: 'clamp(1.25rem, 4vw, 2.25rem)',
                                            fontWeight: '300',
                                            color: '#1e3767',
                                            marginBottom: '0.5rem',
                                            wordBreak: 'break-word',
                                            hyphens: 'auto',
                                            padding: '0 0.5rem'
                                        }} className="lg:px-0">
                                            {t('services.projectSupportTitle')}
                                        </h2>
                                    </div>
                                </div>

                                {/* Projektabwicklung */}
                                <div style={{ marginBottom: 'clamp(1.5rem, 4vw, 2rem)' }}>
                                    <h3 style={{
                                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                                        fontWeight: '600',
                                        color: '#1e3767',
                                        marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                                        wordBreak: 'break-word',
                                        hyphens: 'auto'
                                    }}>
                                        {t('services.projectExecutionTitle')}
                                    </h3>
                                    <p style={{
                                        fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                                        color: '#4b5563',
                                        lineHeight: '1.7',
                                        marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                                        wordBreak: 'break-word'
                                    }}>
                                        {t('services.projectExecutionText1')}
                                    </p>
                                    <p style={{
                                        fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                                        color: '#4b5563',
                                        lineHeight: '1.7',
                                        wordBreak: 'break-word'
                                    }}>
                                        {t('services.projectExecutionText2')}
                                    </p>
                                </div>

                                {/* Ausschreibung und Beschaffung */}
                                <div style={{ marginBottom: 'clamp(1.5rem, 4vw, 2rem)' }}>
                                    <h3 style={{
                                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                                        fontWeight: '600',
                                        color: '#1e3767',
                                        marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                                        wordBreak: 'break-word',
                                        hyphens: 'auto'
                                    }}>
                                        {t('services.tenderingTitle')}
                                    </h3>
                                    <p style={{
                                        fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                                        color: '#4b5563',
                                        lineHeight: '1.7',
                                        wordBreak: 'break-word'
                                    }}>
                                        {t('services.tenderingText')}
                                    </p>
                                </div>

                                {/* Fachbauüberwachung */}
                                <div>
                                    <h3 style={{
                                        fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                                        fontWeight: '600',
                                        color: '#1e3767',
                                        marginBottom: 'clamp(0.75rem, 2vw, 1rem)',
                                        wordBreak: 'break-word',
                                        hyphens: 'auto'
                                    }}>
                                        {t('services.supervisionTitle')}
                                    </h3>
                                    <p style={{
                                        fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                                        color: '#4b5563',
                                        lineHeight: '1.7',
                                        wordBreak: 'break-word'
                                    }}>
                                        {t('services.supervisionText')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

            {/* Keyframe Animation */}
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
                
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-0.5rem);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Leistungen;