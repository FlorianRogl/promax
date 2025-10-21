import { useEffect, useRef, useState } from 'react';

const VideoSection2 = () => {
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
        <>
            <style>{`
                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 2.5rem !important;
                    }
                    .hero-subtitle {
                        font-size: 2rem !important;
                    }
                    .years-display {
                        font-size: 4rem !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .hero-title {
                        font-size: 2rem !important;
                    }
                    .hero-subtitle {
                        font-size: 1.5rem !important;
                    }
                    .years-display {
                        font-size: 3rem !important;
                    }
                }
            `}</style>

            <section ref={sectionRef} className="relative h-screen overflow-hidden">
                <div className="absolute inset-0 bg-black">
                    <div className="absolute inset-0 z-10" style={{backgroundColor: 'rgba(30, 55, 103, 0.7)'}}></div>
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full"
                        style={{objectFit: 'cover'}}
                        src="/promaxstockvideo_VrMEem5A.mp4"
                    />
                </div>

                {/* Geometric Shapes */}
                <div
                    className="absolute w-[300px] h-[300px] opacity-10 transform rotate-45"
                    style={{
                        backgroundColor: '#d97539',
                        top: '-150px',
                        right: '-150px',
                        transform: `rotate(45deg) translateY(${scrollY * 0.5}px)`
                    }}
                />
                <div
                    className="absolute w-[300px] h-[300px] opacity-10 transform rotate-45"
                    style={{
                        backgroundColor: '#1e3767',
                        bottom: '-150px',
                        left: '-150px',
                        transform: `rotate(45deg) translateY(${scrollY * 0.5}px)`
                    }}
                />

                {/* Hero Content */}
                <div className="relative z-20 h-full flex items-center justify-center">
                    <div
                        className="text-center text-white px-6"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                            transition: 'all 0.8s ease'
                        }}
                    >
                        <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6 tracking-tight" style={{lineHeight: '1.2'}}>
                            Wir gestalten Zukunft im<br />
                            <span style={{color: '#d97539'}}>Industrieanlagenbau</span>
                        </h1>
                        <div ref={yearRef} className="flex items-center justify-center space-x-4 mt-8">
                            <div className="years-display text-7xl md:text-8xl font-bold">{yearsCount}+</div>
                            <div className="text-left">
                                <div className="text-2xl font-light">Jahre</div>
                                <div className="text-2xl font-light">Erfahrung</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VideoSection2;