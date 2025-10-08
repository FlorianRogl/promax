import { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin, Clock, Users, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Mail, X } from 'lucide-react';
import planungImage from '../assets/Fotolia_59046832_XS.jpg';
import { jobService } from '../services/jobService';
import type { FormattedJob } from '../types/job.types';

const getDepartmentColor = (department: string): string => {
    const colors: { [key: string]: string } = {
        'Engineering': '#1e3767',
        'Design': '#d97539',
        'Projektmanagement': '#2d4a73',
        'Automatisierung': '#e68545',
        'Management': '#1a2f5f'
    };
    return colors[department] || '#1e3767';
};

const Karriere: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selectedJob, setSelectedJob] = useState<FormattedJob | null>(null);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
    const [isMetaExpanded, setIsMetaExpanded] = useState<boolean>(false);

    // Sanity Integration States
    const [jobOpenings, setJobOpenings] = useState<FormattedJob[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Refs
    const heroRef = useRef<HTMLElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    // Helper function for section refs
    const setSectionRef = (key: string) => (el: HTMLElement | null) => {
        sectionRefs.current[key] = el;
    };

    // Jobs von Sanity laden
    useEffect(() => {
        const loadJobs = async (): Promise<void> => {
            try {
                setLoading(true);
                setError(null);
                const jobs = await jobService.getActiveJobs();
                setJobOpenings(jobs);
            } catch (err) {
                console.error('Fehler beim Laden der Jobs:', err);
                setError('Jobs konnten nicht geladen werden. Bitte versuchen Sie es später erneut.');
                setJobOpenings([]);
            } finally {
                setLoading(false);
            }
        };

        loadJobs();
    }, []);

    // SEO Meta Tags setzen
    useEffect(() => {
        document.title = 'Karriere bei PROMAX - Jobs im Industrieanlagenbau in Graz';

        const setMetaTag = (name: string, content: string, property = false): void => {
            const attribute = property ? 'property' : 'name';
            let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute(attribute, name);
                document.head.appendChild(meta);
            }
            meta.content = content;
        };

        setMetaTag('description', 'Karrieremöglichkeiten bei PROMAX in Graz. Offene Stellen für Verfahrensingenieure, CAD-Konstrukteure, Projektmanager und Automatisierungstechniker. Jetzt bewerben!');
        setMetaTag('keywords', 'Jobs Graz, Karriere Industrieanlagenbau, Verfahrensingenieur Jobs, CAD Konstrukteur, Projektmanager Anlagenbau, Automatisierungstechniker, PROMAX Karriere');
    }, []);

    // Intersection Observer für Scroll-Animationen
    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observerCallback = (entries: IntersectionObserverEntry[]): void => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('data-section');
                    if (sectionId === 'hero') {
                        setIsVisible(true);
                    } else if (sectionId) {
                        setVisibleSections(prev => {
                            const newSet = new Set(prev);
                            newSet.add(sectionId);
                            return newSet;
                        });
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        setTimeout(() => {
            if (heroRef.current) {
                heroRef.current.setAttribute('data-section', 'hero');
                observer.observe(heroRef.current);

                const rect = heroRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    setIsVisible(true);
                }
            }

            Object.entries(sectionRefs.current).forEach(([key, ref]) => {
                if (ref) {
                    ref.setAttribute('data-section', key);
                    observer.observe(ref);
                }
            });
        }, 100);

        return () => {
            observer.disconnect();
        };
    }, []);

    // Carousel scroll functions
    const scrollCarousel = useCallback((direction: 'left' | 'right'): void => {
        if (carouselRef.current) {
            const scrollAmount = 350;
            const currentScroll = carouselRef.current.scrollLeft;
            const targetScroll = direction === 'left'
                ? currentScroll - scrollAmount
                : currentScroll + scrollAmount;

            carouselRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    }, []);

    // Check if carousel can scroll
    const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
    const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

    const checkScrollability = useCallback((): void => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', checkScrollability);
            checkScrollability();

            window.addEventListener('resize', checkScrollability);

            return () => {
                carousel.removeEventListener('scroll', checkScrollability);
                window.removeEventListener('resize', checkScrollability);
            };
        }
    }, [checkScrollability, jobOpenings]);

    // Touch handling for mobile
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = (): void => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) scrollCarousel('right');
        if (isRightSwipe) scrollCarousel('left');
    };

    const handleJobClick = (job: FormattedJob): void => {
        setSelectedJob(job);
        setIsMetaExpanded(false);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = (): void => {
        setSelectedJob(null);
        setIsMetaExpanded(false);
        document.body.style.overflow = 'unset';
    };

    // Split jobs into featured and carousel
    const featuredJobs = jobOpenings.slice(0, 3);
    const carouselJobs = jobOpenings.slice(3);

    // Render Jobs Section based on state
    const renderJobsSection = () => {
        if (loading) {
            return (
                <section ref={setSectionRef('jobs')} className="max-w-6xl mx-auto px-6 py-20">
                    <div className="text-center">
                        <div className="animate-pulse">
                            <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded"></div>
                            <div style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)', color: '#1e3767' }}>Jobs werden geladen...</div>
                        </div>
                    </div>
                </section>
            );
        }

        if (error) {
            return (
                <section ref={setSectionRef('jobs')} className="max-w-6xl mx-auto px-6 py-20">
                    <div className={`transition-all duration-1000 transform ${visibleSections.has('jobs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 600, marginBottom: '1rem', color: '#1e3767' }}>
                            Offene Stellen
                        </h2>
                        <div className="text-center p-8 bg-red-50 border border-red-200 rounded-lg">
                            <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', color: '#ef4444', marginBottom: '1rem' }}>{error}</div>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-3 text-white hover:opacity-90 transition-opacity rounded"
                                style={{ backgroundColor: '#1e3767', fontSize: 'clamp(0.875rem, 2vw, 1rem)', fontWeight: 400 }}
                            >
                                Seite neu laden
                            </button>
                        </div>
                    </div>
                </section>
            );
        }

        if (jobOpenings.length === 0) {
            return (
                <section ref={setSectionRef('jobs')} className="max-w-6xl mx-auto px-6 py-20">
                    <div className={`transition-all duration-1000 transform ${visibleSections.has('jobs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 600, marginBottom: '1rem', color: '#1e3767' }}>
                            Offene Stellen
                        </h2>
                        <div className="text-center p-8 bg-blue-50 border border-blue-200 rounded-lg">
                            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', marginBottom: '1rem', color: '#1e3767', fontWeight: 500 }}>
                                Momentan sind keine offenen Stellen verfügbar.
                            </p>
                            <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#64748b', fontWeight: 400 }}>
                                Wir freuen uns aber jederzeit über Initiativbewerbungen!
                            </p>
                        </div>
                    </div>
                </section>
            );
        }

        return (
            <section ref={setSectionRef('jobs')} className="max-w-6xl mx-auto px-6 py-20">
                <div className={`transition-all duration-1000 transform ${visibleSections.has('jobs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 600, marginBottom: '1rem', color: '#1e3767' }}>
                        Offene Stellen
                    </h2>
                    <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', marginBottom: '4rem', maxWidth: '32rem', color: '#64748b', fontWeight: 400 }}>
                        Finden Sie Ihre perfekte Position in unserem wachsenden Unternehmen
                    </p>

                    {/* Featured Jobs - Angular Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {featuredJobs.map((job, index) => (
                            <div
                                key={job.id}
                                className="group relative bg-white p-8 cursor-pointer transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col"
                                style={{
                                    boxShadow: '0 8px 32px rgba(30, 55, 103, 0.12)',
                                    transitionDelay: `${index * 100}ms`
                                }}
                                onClick={() => handleJobClick(job)}
                            >
                                {/* Top accent line */}
                                <div
                                    className="absolute top-0 left-0 w-full h-1"
                                    style={{ backgroundColor: getDepartmentColor(job.department) }}
                                />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col flex-1">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div
                                            className="px-4 py-2 text-sm font-semibold text-white"
                                            style={{ backgroundColor: getDepartmentColor(job.department) }}
                                        >
                                            {job.department}
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                                            <ArrowRight size={20} style={{ color: getDepartmentColor(job.department) }} />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.3, color: '#1e3767' }}>
                                        {job.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="leading-relaxed mb-6 opacity-80 line-clamp-3 flex-1" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                        {job.description}
                                    </p>

                                    {/* Metadata - Fixed at bottom */}
                                    <div className="space-y-3 mt-auto">
                                        <div className="flex items-center gap-3" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-100">
                                                <MapPin size={12} />
                                                <span className="font-medium">{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-3 py-2 bg-gray-100">
                                                <Clock size={12} />
                                                <span className="font-medium">{job.type}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                            <div className="flex items-center gap-2 opacity-70">
                                                <Users size={12} />
                                                <span>Team: {job.teamSize}</span>
                                            </div>
                                            <div className="opacity-70">
                                                {job.posted}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                                    style={{ backgroundColor: getDepartmentColor(job.department) }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Carousel Jobs */}
                    {carouselJobs.length > 0 && (
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#1e3767' }}>Weitere Positionen</h3>
                                <div className="flex gap-3">
                                    <button
                                        className="w-12 h-12 flex items-center justify-center transition-all duration-300 disabled:opacity-40"
                                        style={{
                                            backgroundColor: canScrollLeft ? '#1e3767' : '#f8f9fa',
                                            color: canScrollLeft ? 'white' : '#1e3767',
                                            boxShadow: '0 4px 16px rgba(30, 55, 103, 0.2)'
                                        }}
                                        onClick={() => scrollCarousel('left')}
                                        disabled={!canScrollLeft}
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        className="w-12 h-12 flex items-center justify-center transition-all duration-300 disabled:opacity-40"
                                        style={{
                                            backgroundColor: canScrollRight ? '#1e3767' : '#f8f9fa',
                                            color: canScrollRight ? 'white' : '#1e3767',
                                            boxShadow: '0 4px 16px rgba(30, 55, 103, 0.2)'
                                        }}
                                        onClick={() => scrollCarousel('right')}
                                        disabled={!canScrollRight}
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>

                            <div
                                className="overflow-x-auto scrollbar-hide"
                                ref={carouselRef}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div className="flex gap-8 pb-4" style={{ width: 'max-content' }}>
                                    {carouselJobs.map((job) => (
                                        <div
                                            key={job.id}
                                            className="group relative bg-white p-8 cursor-pointer transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col"
                                            style={{
                                                width: '340px',
                                                flexShrink: 0,
                                                boxShadow: '0 8px 32px rgba(30, 55, 103, 0.12)'
                                            }}
                                            onClick={() => handleJobClick(job)}
                                        >
                                            {/* Top accent line */}
                                            <div
                                                className="absolute top-0 left-0 w-full h-1"
                                                style={{ backgroundColor: getDepartmentColor(job.department) }}
                                            />

                                            {/* Content */}
                                            <div className="relative z-10 flex flex-col flex-1">
                                                {/* Header */}
                                                <div className="flex items-start justify-between mb-6">
                                                    <div
                                                        className="px-4 py-2 text-sm font-semibold text-white"
                                                        style={{ backgroundColor: getDepartmentColor(job.department) }}
                                                    >
                                                        {job.department}
                                                    </div>
                                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                                                        <ArrowRight size={20} style={{ color: getDepartmentColor(job.department) }} />
                                                    </div>
                                                </div>

                                                {/* Title */}
                                                <h3 style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.3, color: '#1e3767' }}>
                                                    {job.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="leading-relaxed mb-6 opacity-80 line-clamp-3 flex-1" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                                    {job.description}
                                                </p>

                                                {/* Metadata - Fixed at bottom */}
                                                <div className="space-y-3 mt-auto">
                                                    <div className="flex items-center gap-3" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                                        <div className="flex items-center gap-2 px-3 py-2 bg-gray-100">
                                                            <MapPin size={12} />
                                                            <span className="font-medium">{job.location}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 px-3 py-2 bg-gray-100">
                                                            <Clock size={12} />
                                                            <span className="font-medium">{job.type}</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                                        <div className="flex items-center gap-2 opacity-70">
                                                            <Users size={12} />
                                                            <span>Team: {job.teamSize}</span>
                                                        </div>
                                                        <div className="opacity-70">
                                                            {job.posted}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Hover effect */}
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                                                style={{ backgroundColor: getDepartmentColor(job.department) }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="text-center mt-6 opacity-60 lg:hidden" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                ← Wischen Sie für weitere Stellen →
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    };

    return (
        <div style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif", color: '#1e3767', minHeight: '100vh' }}>
            {/* Hero Section mit originalem Firmentext */}
            <section ref={heroRef} className="max-w-6xl mx-auto px-6 py-20">
                <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8" style={{ backgroundColor: '#d1d8dc' }}>
                        <Sparkles size={16} style={{ color: '#1e3767' }} />
                        <span style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', fontWeight: 500, color: '#1e3767' }}>Wir stellen ein</span>
                    </div>

                    <h1 style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', fontWeight: 600, marginBottom: '1.5rem', color: '#1e3767', lineHeight: 1.1 }}>
                        Karriere bei PROMAX
                    </h1>

                    <h2 style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', fontWeight: 600, color: '#d97539', marginBottom: '2rem', lineHeight: 1.3 }}>
                        Ihre Zukunft im Industrieanlagenbau
                    </h2>

                    <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 500, color: '#1e3767', marginBottom: '2rem', lineHeight: 1.4 }}>
                        Unsere Projekte. Ihre Ideen. Gemeinsame Erfolge.
                    </h3>

                    <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1.1rem)', maxWidth: '48rem', lineHeight: 1.7, marginBottom: '1.5rem', color: '#64748b', fontWeight: 400 }}>
                        Als erfahrenes Ingenieurbüro im Industrieanlagenbau sind wir seit mehr als 25 Jahren ein verlässlicher Partner für namhafte Kunden aus verschiedenen Branchen. Unsere Arbeit verbindet technisches Know-how mit praxisnahen Lösungen. Dabei stehen Qualität, Sicherheit und Nachhaltigkeit stets im Mittelpunkt.
                    </p>

                    <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1.1rem)', maxWidth: '48rem', lineHeight: 1.7, marginBottom: '3rem', color: '#64748b', fontWeight: 400 }}>
                        Was uns besonders macht? Unser Team. Bei PROMAX arbeiten Ingenieurinnen und Ingenieure, Techniker*innen und Projektmanager*innen mit Leidenschaft, Präzision und Teamgeist an anspruchsvollen Aufgaben. Wir glauben: Nur gemeinsam können wir Spitzenleistungen erbringen.
                    </p>
                </div>
            </section>

            {/* Warum PROMAX Section */}
            <section ref={setSectionRef('values')} className="max-w-6xl mx-auto px-6 py-20">
                <div className={`transition-all duration-1000 transform ${visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 600, marginBottom: '2rem', color: '#1e3767', lineHeight: 1.2 }}>
                                Warum PROMAX?
                            </h2>

                            <div className="space-y-6" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.1rem)', lineHeight: 1.7, color: '#64748b' }}>
                                <div className="flex items-start gap-3">
                                    <span style={{ color: '#d97539', fontWeight: 600, fontSize: '1.2em', lineHeight: 1 }}>✓</span>
                                    <div>
                                        <strong style={{ color: '#1e3767' }}>Abwechslungsreiche Projekte</strong> in unterschiedlichsten Industrien – vom Mittelstand bis zum Großkonzern
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span style={{ color: '#d97539', fontWeight: 600, fontSize: '1.2em', lineHeight: 1 }}>✓</span>
                                    <div>
                                        <strong style={{ color: '#1e3767' }}>Ein kollegiales Miteinander</strong>, das auf Vertrauen, Offenheit und gegenseitiger Unterstützung basiert
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span style={{ color: '#d97539', fontWeight: 600, fontSize: '1.2em', lineHeight: 1 }}>✓</span>
                                    <div>
                                        <strong style={{ color: '#1e3767' }}>Weiterentwicklung:</strong> Fachliche und persönliche Weiterbildung ist bei uns keine Floskel, sondern gelebter Alltag.
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span style={{ color: '#d97539', fontWeight: 600, fontSize: '1.2em', lineHeight: 1 }}>✓</span>
                                    <div>
                                        <strong style={{ color: '#1e3767' }}>Modernes Arbeitsumfeld:</strong> Flexible Arbeitszeiten, moderne Tools und eine offene Unternehmenskultur.
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span style={{ color: '#d97539', fontWeight: 600, fontSize: '1.2em', lineHeight: 1 }}>✓</span>
                                    <div>
                                        <strong style={{ color: '#1e3767' }}>Sicherheit & Perspektive:</strong> Als etabliertes Unternehmen bieten wir langfristige Perspektiven und einen sicheren Arbeitsplatz.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative hidden lg:block">
                            <div className="w-full h-96 lg:h-[500px] shadow-2xl overflow-hidden"><img
                                src={planungImage}
                                alt="PROMAX Team bei der Projektplanung"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wen wir suchen Section */}
            <section ref={setSectionRef('seeking')} className="max-w-6xl mx-auto px-6 py-20">
                <div className={`text-center transition-all duration-1000 transform ${visibleSections.has('seeking') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 600, marginBottom: '2rem', color: '#1e3767', lineHeight: 1.2 }}>
                        Wen wir suchen
                    </h2>

                    <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1.1rem)', lineHeight: 1.7, marginBottom: '2rem', color: '#64748b', fontWeight: 400, maxWidth: '48rem', margin: '0 auto 2rem auto' }}>
                        Wir sind immer auf der Suche nach engagierten Persönlichkeiten, die Technik lieben, mitdenken und Verantwortung übernehmen möchten – z. B. in folgenden Bereichen:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white border rounded-lg p-6 text-center flex items-center justify-center" style={{ borderColor: '#d1d8dc', minHeight: '120px' }}>
                            <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 500, color: '#1e3767', margin: 0 }}>
                                Planung und Projektierung von Industrieanlagen
                            </h3>
                        </div>
                        <div className="bg-white border rounded-lg p-6 text-center flex items-center justify-center" style={{ borderColor: '#d1d8dc', minHeight: '120px' }}>
                            <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 500, color: '#1e3767', margin: 0 }}>
                                Maschinenbau
                            </h3>
                        </div>
                        <div className="bg-white border rounded-lg p-6 text-center flex items-center justify-center" style={{ borderColor: '#d1d8dc', minHeight: '120px' }}>
                            <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 500, color: '#1e3767', margin: 0 }}>
                                Projektmanagement
                            </h3>
                        </div>
                    </div>

                    <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1.1rem)', lineHeight: 1.7, color: '#64748b', fontWeight: 400, maxWidth: '36rem', margin: '0 auto' }}>
                        Ob Berufseinsteiger*in, Junior - oder Senior Engineers – bei uns finden Sie den passenden Einstieg.
                    </p>
                </div>
            </section>

            {/* Jobs Section - Dynamic Content */}
            {renderJobsSection()}

            {/* CTA Section mit originalem Firmentext */}
            <section ref={setSectionRef('cta')} className="max-w-6xl mx-auto px-6 py-20">
                <div className={`text-center transition-all duration-1000 transform ${visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 600, marginBottom: '1rem', color: '#1e3767' }}>
                        Jetzt bewerben – Werden Sie Teil unseres Teams
                    </h3>
                    <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', marginBottom: '2rem', maxWidth: '32rem', margin: '0 auto 2rem auto', color: '#64748b', fontWeight: 400 }}>
                        Sie möchten mit uns die Industrie von morgen gestalten? Dann freuen wir uns auf Ihre Bewerbung! Entdecken Sie unsere aktuellen Stellenangebote oder senden Sie uns Ihre <strong>Initiativbewerbung</strong>.
                    </p>
                    <div className="bg-white border p-8 max-w-md mx-auto" style={{ borderColor: '#d1d8dc' }}>
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#1e3767' }}>
                                <Mail size={24} color="white" />
                            </div>
                        </div>
                        <h4 style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)', fontWeight: 600, marginBottom: '0.5rem', color: '#1e3767' }}>E-Mail Bewerbung</h4>
                    <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', marginTop: '1rem', color: '#1e3767', fontWeight: 400 }}>
                        Bitte fügen Sie Lebenslauf, Anschreiben und relevante Zeugnisse bei.
                    </p>
                </div>
        </div>
</section>

    {/* Responsive Job Details Modal */}
    {selectedJob && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-60 backdrop-blur-sm">
            <div className="h-full flex items-start justify-center p-2 sm:p-4 lg:p-8 lg:items-center">
                <div className="relative bg-white w-full max-w-7xl max-h-[100vh] lg:max-h-[90vh] shadow-2xl flex flex-col">
                    {/* Header with Close Button */}
                    <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
                        <div className="flex-1 mr-4">
                            <div
                                className="inline-block px-3 py-1 text-sm font-semibold text-white mb-2"
                                style={{ backgroundColor: getDepartmentColor(selectedJob.department) }}
                            >
                                {selectedJob.department}
                            </div>
                            <h1 style={{ fontSize: 'clamp(1.125rem, 4vw, 1.5rem)', fontWeight: 600, color: '#1e3767', lineHeight: 1.2 }}>
                                {selectedJob.title}
                            </h1>
                        </div>
                        <button
                            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0"
                            onClick={closeModal}
                            style={{ borderRadius: '50%' }}
                        >
                            <X size={20} style={{ color: '#1e3767' }} />
                        </button>
                    </div>

                    {/* Content Area - Mobile First Layout */}
                    <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
                        {/* Mobile: Stacked Top / Desktop: Left Sidebar */}
                        <div className="w-full lg:w-80 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50">
                            {/* Mobile: Collapsible Header */}
                            <button
                                onClick={() => setIsMetaExpanded(!isMetaExpanded)}
                                className="w-full p-4 sm:p-6 flex items-center justify-between lg:hidden border-b border-gray-200 hover:bg-gray-100 transition-colors"
                            >
                                        <span style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', fontWeight: 600, color: '#1e3767' }}>
                                            Job-Details {isMetaExpanded ? 'ausblenden' : 'anzeigen'}
                                        </span>
                                <div className={`transform transition-transform duration-300 ${isMetaExpanded ? 'rotate-180' : ''}`}>
                                    <ChevronRight size={20} style={{ color: '#1e3767', transform: 'rotate(90deg)' }} />
                                </div>
                            </button>

                            {/* Collapsible Content */}
                            <div className={`overflow-hidden transition-all duration-300 ${isMetaExpanded ? 'max-h-[2000px] lg:max-h-none' : 'max-h-0 lg:max-h-none'} lg:overflow-y-auto`}>
                                <div className="p-4 sm:p-6">
                                    {/* Job Meta Info */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-6">
                                        <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                            <div className="font-semibold mb-1">Standort</div>
                                            <div className="opacity-70">{selectedJob.location}</div>
                                        </div>

                                        <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                            <div className="font-semibold mb-1">Arbeitszeit</div>
                                            <div className="opacity-70">{selectedJob.type}</div>
                                        </div>

                                        <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                            <div className="font-semibold mb-1">Team</div>
                                            <div className="opacity-70">{selectedJob.teamSize} Personen</div>
                                        </div>

                                        <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                            <div className="font-semibold mb-1">Veröffentlicht</div>
                                            <div className="opacity-70">{selectedJob.posted}</div>
                                        </div>

                                        <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                            <div className="font-semibold mb-1">Erfahrung</div>
                                            <div className="opacity-70">{selectedJob.experience}</div>
                                        </div>
                                    </div>

                                    {/* Quick Contact Info */}
                                    <div className="p-4 bg-white border border-gray-200 shadow-sm">
                                        <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#1e3767' }}>Direkter Kontakt</h4>
                                        <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#64748b', marginBottom: '0.25rem' }}>Haben Sie Fragen zu dieser Position?</p>
                                        <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                            <span className="font-medium">HR-Team:</span><br />
                                            <a href="mailto:jasmin.pieber@promax.at" className="text-orange-500 hover:underline">
                                                jasmin.pieber@promax.at
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="p-4 sm:p-6 lg:p-8">
                                {/* Job Description */}
                                <section className="mb-8">
                                    <h2 style={{ fontSize: 'clamp(1.125rem, 4vw, 1.5rem)', fontWeight: 600, marginBottom: '1.5rem', color: '#1e3767' }}>Über diese Position</h2>
                                    <div>
                                        <p style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.1rem)', lineHeight: 1.7, color: '#1e3767' }}>
                                            {selectedJob.description}
                                        </p>
                                    </div>
                                </section>

                                {/* Responsibilities and Requirements - Mobile Stacked / Desktop Side by Side */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
                                    {/* Responsibilities */}
                                    <section>
                                        <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 600, marginBottom: '1.25rem', color: '#1e3767' }}>Ihre Aufgaben</h2>
                                        <div className="space-y-3">
                                            {selectedJob.responsibilities.map((item, index) => (
                                                <div key={index} className="flex items-start gap-3 p-3 bg-white border border-gray-200 shadow-sm">
                                                    <div
                                                        className="w-6 h-6 flex items-center justify-center text-white font-bold mt-0.5 flex-shrink-0"
                                                        style={{ backgroundColor: getDepartmentColor(selectedJob.department), fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
                                                    >
                                                        {index + 1}
                                                    </div>
                                                    <span style={{ lineHeight: 1.6, fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', color: '#1e3767' }}>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Requirements */}
                                    <section>
                                        <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 600, marginBottom: '1.25rem', color: '#1e3767' }}>Ihr Profil</h2>
                                        <div className="space-y-3">
                                            {selectedJob.requirements.map((item, index) => (
                                                <div key={index} className="flex items-start gap-3 p-3 bg-white border border-gray-200 shadow-sm">
                                                    <div
                                                        className="w-6 h-6 flex items-center justify-center text-white font-bold mt-0.5 flex-shrink-0"
                                                        style={{ backgroundColor: getDepartmentColor(selectedJob.department), fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
                                                    >
                                                        {index + 1}
                                                    </div>
                                                    <span style={{ lineHeight: 1.6, fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', color: '#1e3767' }}>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>

                                {/* Benefits */}
                                <section className="mb-6">
                                    <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 600, marginBottom: '1.25rem', color: '#1e3767' }}>Was wir bieten</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {selectedJob.benefits.map((item, index) => (
                                            <div key={index} className="flex items-start gap-3 p-3 bg-white border border-gray-200 shadow-sm">
                                                <div
                                                    className="w-6 h-6 flex items-center justify-center text-white font-bold mt-0.5 flex-shrink-0"
                                                    style={{ backgroundColor: getDepartmentColor(selectedJob.department), fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}
                                                >
                                                    {index + 1}
                                                </div>
                                                <span style={{ lineHeight: 1.6, fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', color: '#1e3767' }}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Contact Information */}
                                <section className="border-t border-gray-200 pt-6">
                                    <div className="text-center">
                                        <h3 style={{ fontSize: 'clamp(1rem, 3vw, 1.125rem)', fontWeight: 600, marginBottom: '0.75rem', color: '#1e3767' }}>
                                            Interesse an dieser Position?
                                        </h3>
                                        <p style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', marginBottom: '1rem', color: '#64748b' }}>
                                            Senden Sie Ihre Bewerbungsunterlagen an unser HR-Team.
                                        </p>
                                        <div className="bg-white border border-gray-200 p-4 sm:p-6 shadow-sm max-w-md mx-auto">
                                            <div className="flex items-center justify-center mb-3">
                                                <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: '#1e3767' }}>
                                                    <Mail size={20} color="white" />
                                                </div>
                                            </div>
                                            <p style={{ fontWeight: 500, fontSize: 'clamp(1rem, 3vw, 1.125rem)', marginBottom: '0.25rem', color: '#1e3767' }}>
                                                <a href="mailto:jasmin.pieber@promax.at" className="text-orange-500 hover:underline">
                                                    jasmin.pieber@promax.at
                                                </a>
                                            </p>
                                            <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#64748b' }}>
                                                Bitte fügen Sie Lebenslauf, Anschreiben und relevante Zeugnisse bei.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
    <style>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .pl-13 {
                    padding-left: 3.25rem;
                }
            `}</style>
</div>
);
};

export default Karriere;