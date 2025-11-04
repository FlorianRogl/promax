import { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Users, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Mail, X } from 'lucide-react';
import planungImage from '../assets/klugeKöpfe.png';
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
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language as 'de' | 'en';

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

    // Jobs von Sanity laden - MIT SPRACH-UNTERSTÜTZUNG
    useEffect(() => {
        const loadJobs = async (): Promise<void> => {
            try {
                setLoading(true);
                setError(null);
                const jobs = await jobService.getActiveJobs(currentLang);
                setJobOpenings(jobs);
            } catch (err) {
                console.error('Fehler beim Laden der Jobs:', err);
                setError(t('career.jobsError'));
                setJobOpenings([]);
            } finally {
                setLoading(false);
            }
        };

        loadJobs();
    }, [currentLang, t]); // Neu laden wenn Sprache wechselt

    // SEO Meta Tags setzen
    useEffect(() => {
        const titles = {
            de: 'Karriere bei PROMAX - Jobs im Industrieanlagenbau in Graz',
            en: 'Career at PROMAX - Jobs in Industrial Plant Construction in Graz'
        };

        const descriptions = {
            de: 'Karrieremöglichkeiten bei PROMAX in Graz. Offene Stellen für Verfahrensingenieure, CAD-Konstrukteure, Projektmanager und Automatisierungstechniker. Jetzt bewerben!',
            en: 'Career opportunities at PROMAX in Graz. Open positions for process engineers, CAD designers, project managers and automation technicians. Apply now!'
        };

        document.title = titles[currentLang] || titles.de;

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

        setMetaTag('description', descriptions[currentLang] || descriptions.de);
    }, [currentLang]);

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
                            <div style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)', color: '#1e3767' }}>{t('career.jobsLoading')}</div>
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
                            {t('career.jobsTitle')}
                        </h2>
                        <div className="text-center p-8 bg-red-50 border border-red-200 rounded-lg">
                            <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', color: '#ef4444', marginBottom: '1rem' }}>{error}</div>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-3 text-white hover:opacity-90 transition-opacity rounded"
                                style={{ backgroundColor: '#1e3767', fontSize: 'clamp(0.875rem, 2vw, 1rem)', fontWeight: 400 }}
                            >
                                {t('career.jobsReload')}
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
                            {t('career.jobsTitle')}
                        </h2>
                        <div className="text-center p-8 bg-blue-50 border border-blue-200 rounded-lg">
                            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', marginBottom: '1rem', color: '#1e3767', fontWeight: 500 }}>
                                {t('career.jobsEmpty')}
                            </p>
                            <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#64748b', fontWeight: 400 }}>
                                {t('career.jobsEmptyText')}
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
                        {t('career.jobsTitle')}
                    </h2>
                    <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', marginBottom: '4rem', maxWidth: '32rem', color: '#64748b', fontWeight: 400 }}>
                        {t('career.jobsSubtitle')}
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
                                                <span>{t('career.jobTeam')}: {job.teamSize}</span>
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
                                <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#1e3767' }}>{t('career.jobsMorePositions')}</h3>
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
                                            {/* Similar content structure as featured jobs */}
                                            <div
                                                className="absolute top-0 left-0 w-full h-1"
                                                style={{ backgroundColor: getDepartmentColor(job.department) }}
                                            />

                                            <div className="relative z-10 flex flex-col flex-1">
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

                                                <h3 style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.3, color: '#1e3767' }}>
                                                    {job.title}
                                                </h3>

                                                <p className="leading-relaxed mb-6 opacity-80 line-clamp-3 flex-1" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                                    {job.description}
                                                </p>

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
                                                            <span>{t('career.jobTeam')}: {job.teamSize}</span>
                                                        </div>
                                                        <div className="opacity-70">
                                                            {job.posted}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                                                style={{ backgroundColor: getDepartmentColor(job.department) }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="text-center mt-6 opacity-60 lg:hidden" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                {t('career.jobsSwipeHint')}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    };

    return (
        <div style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif", color: '#1e3767', minHeight: '100vh' }}>
            {/* Hero Section with Parallax */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(30, 55, 103, 0.7), rgba(30, 55, 103, 0.7)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&auto=format')`,
                    backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>

                <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                    <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-white mb-4 sm:mb-6">
                            {t('career.heroTitle')}
                            <span className="block font-semibold text-[#d97539] mt-1 sm:mt-2">{t('career.heroSubtitle')}</span>
                        </h1>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                    </svg>
                </div>
            </section>

            {/* Intro Section */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8" style={{ backgroundColor: '#d1d8dc' }}>
                        <Sparkles size={16} style={{ color: '#1e3767' }} />
                        <span style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', fontWeight: 500, color: '#1e3767' }}>{t('career.hiring')}</span>
                    </div>

                    <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 500, color: '#1e3767', marginBottom: '2rem', lineHeight: 1.4 }}>
                        {t('career.introTitle')}
                    </h3>

                    <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1.1rem)', lineHeight: 1.7, marginBottom: '1.5rem', color: '#64748b', fontWeight: 400 }}>
                        {t('career.introText1')}
                    </p>

                    <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1.1rem)', lineHeight: 1.7, marginBottom: '3rem', color: '#64748b', fontWeight: 400 }}>
                        {t('career.introText2')}
                    </p>
                </div>
            </section>

            {/* Warum PROMAX Section */}
            <section ref={setSectionRef('values')} className="max-w-6xl mx-auto px-6 py-20">
                <div className={`transition-all duration-1000 transform ${visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 600, marginBottom: '2rem', color: '#1e3767', lineHeight: 1.2 }}>
                                {t('career.whyTitle')}
                            </h2>

                            <div className="space-y-6" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.1rem)', lineHeight: 1.7, color: '#64748b' }}>
                                <div className="flex items-start gap-3">
                                    <span style={{ color: '#d97539', fontWeight: 600, fontSize: '1.2em', lineHeight: 1 }}>✓</span>
                                    <div>
                                        <strong style={{ color: '#1e3767' }}>{t('career.whyFeature1Title')}</strong> {t('career.whyFeature1Text')}
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span style={{ color: '#d97539', fontWeight: 600, fontSize: '1.2em', lineHeight: 1 }}>✓</span>
                                    <div>
                                        <strong style={{ color: '#1e3767' }}>{t('career.whyFeature2Title')}</strong> {t('career.whyFeature2Text')}
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span style={{ color: '#d97539', fontWeight: 600, fontSize: '1.2em', lineHeight: 1 }}>✓</span>
                                    <div>
                                        <strong style={{ color: '#1e3767' }}>{t('career.whyFeature3Title')}</strong> {t('career.whyFeature3Text')}
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span style={{ color: '#d97539', fontWeight: 600, fontSize: '1.2em', lineHeight: 1 }}>✓</span>
                                    <div>
                                        <strong style={{ color: '#1e3767' }}>{t('career.whyFeature4Title')}</strong> {t('career.whyFeature4Text')}
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span style={{ color: '#d97539', fontWeight: 600, fontSize: '1.2em', lineHeight: 1 }}>✓</span>
                                    <div>
                                        <strong style={{ color: '#1e3767' }}>{t('career.whyFeature5Title')}</strong> {t('career.whyFeature5Text')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            src={planungImage}
                            alt="PROMAX Team bei der Projektplanung"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Jobs Section - Dynamic Content */}
            {renderJobsSection()}

            {/* CTA Section */}
            <section ref={setSectionRef('cta')} className="max-w-6xl mx-auto px-6 py-20">
                <div className={`text-center transition-all duration-1000 transform ${visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 600, marginBottom: '1rem', color: '#1e3767' }}>
                        {t('career.ctaTitle')}
                    </h3>
                    <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', marginBottom: '2rem', maxWidth: '32rem', margin: '0 auto 2rem auto', color: '#64748b', fontWeight: 400 }}>
                        {t('career.ctaText')} <strong>{t('career.ctaTextHighlight')}</strong>.
                    </p>
                    <div className="bg-white border p-8 max-w-md mx-auto" style={{ borderColor: '#d1d8dc' }}>
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#1e3767' }}>
                                <Mail size={24} color="white" />
                            </div>
                        </div>
                        <h4 style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)', fontWeight: 600, marginBottom: '0.5rem', color: '#1e3767' }}>{t('career.ctaEmailTitle')}</h4>
                        <a href="mailto:jasmin.pieber@promax.at" className="text-orange-500 hover:underline" style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', fontWeight: 500 }}>
                            jasmin.pieber@promax.at
                        </a>
                        <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', marginTop: '1rem', color: '#1e3767', fontWeight: 400 }}>
                            {t('career.jobAttachments')}
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
                                            {t('career.jobDetailsToggle')} {isMetaExpanded ? t('career.jobDetailsHide') : t('career.jobDetailsShow')}
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
                                                    <div className="font-semibold mb-1">{t('career.jobLocation')}</div>
                                                    <div className="opacity-70">{selectedJob.location}</div>
                                                </div>

                                                <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                                    <div className="font-semibold mb-1">{t('career.jobType')}</div>
                                                    <div className="opacity-70">{selectedJob.type}</div>
                                                </div>

                                                <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                                    <div className="font-semibold mb-1">{t('career.jobTeam')}</div>
                                                    <div className="opacity-70">{selectedJob.teamSize}</div>
                                                </div>

                                                <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                                    <div className="font-semibold mb-1">{t('career.jobPosted')}</div>
                                                    <div className="opacity-70">{selectedJob.posted}</div>
                                                </div>

                                                <div style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                                    <div className="font-semibold mb-1">{t('career.jobExperience')}</div>
                                                    <div className="opacity-70">{selectedJob.experience}</div>
                                                </div>
                                            </div>

                                            {/* Quick Contact Info */}
                                            <div className="p-4 bg-white border border-gray-200 shadow-sm">
                                                <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#1e3767' }}>{t('career.jobDirectContact')}</h4>
                                                <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#64748b', marginBottom: '0.25rem' }}>{t('career.jobContactQuestion')}</p>
                                                <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#1e3767' }}>
                                                    <span className="font-medium">{t('career.jobHRTeam')}</span><br />
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
                                            <h2 style={{ fontSize: 'clamp(1.125rem, 4vw, 1.5rem)', fontWeight: 600, marginBottom: '1.5rem', color: '#1e3767' }}>{t('career.jobAboutPosition')}</h2>
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
                                                <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 600, marginBottom: '1.25rem', color: '#1e3767' }}>{t('career.jobResponsibilities')}</h2>
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
                                                <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 600, marginBottom: '1.25rem', color: '#1e3767' }}>{t('career.jobRequirements')}</h2>
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
                                            <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 600, marginBottom: '1.25rem', color: '#1e3767' }}>{t('career.jobBenefits')}</h2>
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
                                                    {t('career.jobInterested')}
                                                </h3>
                                                <p style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', marginBottom: '1rem', color: '#64748b' }}>
                                                    {t('career.jobInterestedText')}
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
                                                        {t('career.jobAttachments')}
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
            `}</style>
        </div>
    );
};

export default Karriere;