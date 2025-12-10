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

            {/* Hero Section */}
            <section
                id="hero-section"
                style={{
                    position: 'relative',
                    height: '100vh',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `linear-gradient(rgba(30, 55, 103, 0.7), rgba(30, 55, 103, 0.7)), url('/LeistungenPic.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
                }}
            >
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent, transparent, rgba(255,255,255,0.1))'
                }}></div>

                <div style={{
                    position: 'relative',
                    zIndex: 10,
                    textAlign: 'center',
                    padding: '0 1rem',
                    maxWidth: '80rem',
                    margin: '0 auto',
                    width: '100%'
                }}>
                    <div className="opacity-0 translate-y-8 animate-fade-in-up">
                        <h1 style={{
                            fontSize: 'clamp(1.875rem, 5vw, 4.5rem)',
                            fontWeight: '300',
                            color: 'white',
                            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                            lineHeight: '1.2',
                            padding: '0 0.5rem',
                            wordBreak: 'break-word'
                        }}>
                            {t('services.heroTitle')}
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1.125rem, 3vw, 1.875rem)',
                            fontWeight: '500',
                            color: '#d97539',
                            lineHeight: '1.5',
                            padding: '0 1rem',
                            wordBreak: 'break-word'
                        }}>
                            {t('services.heroSubtitle')}
                        </p>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div style={{
                    marginTop: '4rem',
                    zIndex: 30
                }}>
                    <div style={{
                        width: '1.5rem',
                        height: '2.5rem',
                        border: '2px solid white',
                        borderRadius: '9999px',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            width: '0.25rem',
                            height: '0.75rem',
                            backgroundColor: 'white',
                            borderRadius: '9999px',
                            marginTop: '0.5rem',
                            animation: 'bounce 1s infinite'
                        }}></div>
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
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left" style={{
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
                                        <div style={{
                                            width: 'clamp(3rem, 8vw, 4rem)',
                                            height: '0.25rem',
                                            backgroundColor: '#d97539',
                                            margin: '0 auto'
                                        }} className="lg:mx-0"></div>
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

                    {/* Separator */}
                    <div style={{
                        width: '100%',
                        height: '1px',
                        background: 'linear-gradient(to right, transparent, #d1d5db, transparent)',
                        marginBottom: 'clamp(4rem, 10vw, 6rem)'
                    }}></div>

                    {/* Operative Projektunterstützung */}
                    <div id="operative-projektstuetzung" style={{
                        paddingTop: 'clamp(4rem, 10vw, 5rem)',
                        marginTop: 'clamp(-4rem, -10vw, -5rem)'
                    }}>
                        <div className="grid grid-cols-1 lg:grid-cols-2" style={{
                            gap: 'clamp(2rem, 5vw, 3rem)',
                            alignItems: 'center'
                        }}>
                            {/* Image */}
                            <div className="order-1">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format"
                                    alt="Operative Projektunterstützung - Projektmanagement und Koordination"
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
                            <div className="order-2">
                                {/* Header */}
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left" style={{
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
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
                                        <div style={{
                                            width: 'clamp(3rem, 8vw, 4rem)',
                                            height: '0.25rem',
                                            backgroundColor: '#d97539',
                                            margin: '0 auto'
                                        }} className="lg:mx-0"></div>
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

            {/* Keyframe Animation */}
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