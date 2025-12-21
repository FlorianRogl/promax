import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import video from '../../assets/video_mit_wasserzeichen.mp4';

const VideoSection2 = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [yearsCount, setYearsCount] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const yearRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    useEffect(() => {
        const yearObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const duration = 2000;
                    const start = performance.now();
                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        setYearsCount(Math.round(easeOutQuart * 25));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.1 }
        );

        if (yearRef.current) {
            yearObserver.observe(yearRef.current);
        }

        return () => {
            if (yearRef.current) {
                yearObserver.unobserve(yearRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                width: '100%',
                height: '115vh',
                minHeight: '115vh',
                overflow: 'hidden'
            }}
        >
            {/* Background Video */}
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'black' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 10, backgroundColor: 'rgba(30, 55, 103, 0.7)' }}></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                    src={video}
                />
            </div>

            {/* Geometric Shapes */}
            <div
                style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    backgroundColor: '#d97539',
                    opacity: 0.1,
                    top: '-150px',
                    right: '-150px',
                    transform: `rotate(45deg) translateY(${scrollY * 0.5}px)`
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    backgroundColor: '#1e3767',
                    opacity: 0.1,
                    bottom: '-150px',
                    left: '-150px',
                    transform: `rotate(45deg) translateY(${scrollY * 0.5}px)`
                }}
            />

            {/* Hero Content */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 20,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 1rem'
                }}
            >
                <div
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        width: '100%',
                        maxWidth: '80rem',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                        transition: 'all 0.8s ease'
                    }}
                >
                    <h1
                        style={{
                            fontSize: 'clamp(1.5rem, 5vw, 4rem)',
                            fontWeight: 'bold',
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.2'
                        }}
                    >
                        {t('videoSection.title')}<br />
                        <span style={{color: '#d97539'}}>{t('videoSection.titleHighlight')}</span>
                    </h1>
                    <div
                        ref={yearRef}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1rem',
                            marginTop: '2rem'
                        }}
                    >
                        <div style={{
                            fontSize: 'clamp(2.5rem, 10vw, 6rem)',
                            fontWeight: 'bold'
                        }}>
                            {yearsCount}+
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontWeight: 300 }}>
                                {t('videoSection.years')}
                            </div>
                            <div style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontWeight: 300 }}>
                                {t('videoSection.experience')}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="mt-16 z-30">
                    <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center animate-[fadeOut_6s_ease-in-out_forwards]">
                        <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
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
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-0.5rem);
                    }
                }
                
                @media (min-width: 640px) {
                    .sm\\:w-6 {
                        width: 1.5rem;
                    }
                    .sm\\:h-10 {
                        height: 2.5rem;
                    }
                    .sm\\:h-3 {
                        height: 0.75rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default VideoSection2;