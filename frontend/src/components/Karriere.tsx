import { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Users, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Mail, X } from 'lucide-react';
import planungImage from '../assets/klugeKöpfe.png';
import { jobService } from '../services/jobService';
import type { FormattedJob } from '../types/job.types';
import karrsiereHero from '../assets/karriereHero.jpg';


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

    const setSectionRef = (key: string) => (el: HTMLElement | null) => {
        sectionRefs.current[key] = el;
    };

    // Jobs von Sanity laden
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
    }, [currentLang, t]);

    // SEO Meta Tags
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

    // Intersection Observer
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

    // Carousel functions
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

    // Touch handling
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

    const featuredJobs = jobOpenings.slice(0, 3);
    const carouselJobs = jobOpenings.slice(3);

    const renderJobsSection = () => {
        if (loading) {
            return (
                <section ref={setSectionRef('jobs')} className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                    <div className="text-center">
                        <div className="animate-pulse">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gray-200 rounded"></div>
                            <div className="text-base sm:text-lg md:text-xl text-[#1e3767]">{t('career.jobsLoading')}</div>
                        </div>
                    </div>
                </section>
            );
        }

        if (error) {
            return (
                <section ref={setSectionRef('jobs')} className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                    <div className={`transition-all duration-1000 transform ${visibleSections.has('jobs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-[#1e3767]">
                            {t('career.jobsTitle')}
                        </h2>
                        <div className="text-center p-6 sm:p-8 bg-red-50 border border-red-200 rounded-lg">
                            <div className="text-sm sm:text-base text-red-600 mb-4">{error}</div>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-4 sm:px-6 py-2 sm:py-3 text-white bg-[#1e3767] rounded text-sm sm:text-base"
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
                <section ref={setSectionRef('jobs')} className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                    <div className={`transition-all duration-1000 transform ${visibleSections.has('jobs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-[#1e3767]">
                            {t('career.jobsTitle')}
                        </h2>
                        <div className="text-center p-6 sm:p-8 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-base sm:text-lg mb-3 sm:mb-4 text-[#1e3767] font-medium">
                                {t('career.jobsEmpty')}
                            </p>
                            <p className="text-sm sm:text-base text-gray-600">
                                {t('career.jobsEmptyText')}
                            </p>
                        </div>
                    </div>
                </section>
            );
        }

        return (
            <section ref={setSectionRef('jobs')} className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                <div className={`transition-all duration-1000 transform ${visibleSections.has('jobs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 text-[#1e3767]">
                        {t('career.jobsTitle')}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-12 md:mb-16 max-w-2xl text-gray-600">
                        {t('career.jobsSubtitle')}
                    </p>

                    {/* Featured Jobs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
                        {featuredJobs.map((job, index) => (
                            <div
                                key={job.id}
                                className="group relative bg-white p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col shadow-lg"
                                style={{
                                    transitionDelay: `${index * 100}ms`
                                }}
                                onClick={() => handleJobClick(job)}
                            >
                                <div
                                    className="absolute top-0 left-0 w-full h-1"
                                    style={{ backgroundColor: getDepartmentColor(job.department) }}
                                />

                                <div className="relative z-10 flex flex-col flex-1">
                                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                                        <div
                                            className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm font-semibold text-white"
                                            style={{ backgroundColor: getDepartmentColor(job.department) }}
                                        >
                                            {job.department}
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                                            <ArrowRight size={18} className="sm:w-5 sm:h-5" style={{ color: getDepartmentColor(job.department) }} />
                                        </div>
                                    </div>

                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 leading-tight text-[#1e3767] break-words">
                                        {job.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 opacity-80 line-clamp-3 flex-1 text-[#1e3767] break-words">
                                        {job.description}
                                    </p>

                                    <div className="space-y-2 sm:space-y-3 mt-auto">
                                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#1e3767]">
                                            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-gray-100">
                                                <MapPin size={12} className="flex-shrink-0" />
                                                <span className="font-medium break-words">{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-gray-100">
                                                <Clock size={12} className="flex-shrink-0" />
                                                <span className="font-medium break-words">{job.type}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-xs sm:text-sm text-[#1e3767]">
                                            <div className="flex items-center gap-1.5 sm:gap-2 opacity-70">
                                                <Users size={12} className="flex-shrink-0" />
                                                <span className="break-words">{t('career.jobTeam')}: {job.teamSize}</span>
                                            </div>
                                            <div className="opacity-70 text-right break-words">
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

                    {/* Carousel Jobs */}
                    {carouselJobs.length > 0 && (
                        <div>
                            <div className="flex items-center justify-between mb-6 sm:mb-8">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1e3767]">{t('career.jobsMorePositions')}</h3>
                                <div className="hidden sm:flex gap-3">
                                    <button
                                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 disabled:opacity-40 shadow-lg"
                                        style={{
                                            backgroundColor: canScrollLeft ? '#1e3767' : '#f8f9fa',
                                            color: canScrollLeft ? 'white' : '#1e3767'
                                        }}
                                        onClick={() => scrollCarousel('left')}
                                        disabled={!canScrollLeft}
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 disabled:opacity-40 shadow-lg"
                                        style={{
                                            backgroundColor: canScrollRight ? '#1e3767' : '#f8f9fa',
                                            color: canScrollRight ? 'white' : '#1e3767'
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
                                <div className="flex gap-4 sm:gap-6 md:gap-8 pb-4" style={{ width: 'max-content' }}>
                                    {carouselJobs.map((job) => (
                                        <div
                                            key={job.id}
                                            className="group relative bg-white p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col shadow-lg"
                                            style={{
                                                width: '280px',
                                                flexShrink: 0
                                            }}
                                            onClick={() => handleJobClick(job)}
                                        >
                                            <div
                                                className="absolute top-0 left-0 w-full h-1"
                                                style={{ backgroundColor: getDepartmentColor(job.department) }}
                                            />

                                            <div className="relative z-10 flex flex-col flex-1">
                                                <div className="flex items-start justify-between mb-4">
                                                    <div
                                                        className="px-3 py-1.5 text-xs font-semibold text-white"
                                                        style={{ backgroundColor: getDepartmentColor(job.department) }}
                                                    >
                                                        {job.department}
                                                    </div>
                                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                                                        <ArrowRight size={18} style={{ color: getDepartmentColor(job.department) }} />
                                                    </div>
                                                </div>

                                                <h3 className="text-base font-semibold mb-3 leading-tight text-[#1e3767] break-words">
                                                    {job.title}
                                                </h3>

                                                <p className="text-xs leading-relaxed mb-4 opacity-80 line-clamp-3 flex-1 text-[#1e3767] break-words">
                                                    {job.description}
                                                </p>

                                                <div className="space-y-2 mt-auto">
                                                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#1e3767]">
                                                        <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-100">
                                                            <MapPin size={12} className="flex-shrink-0" />
                                                            <span className="font-medium break-words">{job.location}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-100">
                                                            <Clock size={12} className="flex-shrink-0" />
                                                            <span className="font-medium break-words">{job.type}</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between text-xs text-[#1e3767]">
                                                        <div className="flex items-center gap-1.5 opacity-70">
                                                            <Users size={12} className="flex-shrink-0" />
                                                            <span className="break-words">{t('career.jobTeam')}: {job.teamSize}</span>
                                                        </div>
                                                        <div className="opacity-70 text-right break-words">
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
                            <div className="text-center mt-4 sm:mt-6 opacity-60 sm:hidden text-xs sm:text-sm text-[#1e3767]">
                                {t('career.jobsSwipeHint')}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    };

    return (
        <div className="overflow-x-hidden" style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif", color: '#1e3767', minHeight: '100vh' }}>
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative w-full flex flex-col items-center justify-center bg-cover bg-center"
                style={{
                    height: '105vh',
                    minHeight: '105vh',
                    backgroundImage: `linear-gradient(rgba(30, 55, 103, 0.7), rgba(30, 55, 103, 0.7)), url('${karrsiereHero}')`,
                    backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>

                <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
                    <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-light text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                            {t('career.heroTitle')}
                            <span className="block font-semibold text-[#d97539] mt-1 sm:mt-2">{t('career.heroSubtitle')}</span>
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

            {/* Intro Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
                <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 bg-gray-200">
                        <Sparkles size={14} className="sm:w-4 sm:h-4 text-[#1e3767]" />
                        <span className="text-xs sm:text-sm font-medium text-[#1e3767]">{t('career.hiring')}</span>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#1e3767] mb-4 sm:mb-6 md:mb-8 leading-relaxed break-words">
                        {t('career.introTitle')}
                    </h3>

                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-6 text-gray-600 break-words">
                        {t('career.introText1')}
                    </p>

                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-12 text-gray-600 break-words">
                        {t('career.introText2')}
                    </p>
                </div>
            </section>

            {/* Warum PROMAX Section */}
            <section ref={setSectionRef('values')} className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
                <div className={`transition-all duration-1000 transform ${visibleSections.has('values') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 md:mb-10 text-[#1e3767] leading-tight break-words">
                                {t('career.whyTitle')}
                            </h2>

                            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
                                <div className="flex items-start gap-2 sm:gap-3">
                                    <span className="text-[#d97539] font-semibold text-lg sm:text-xl flex-shrink-0">✓</span>
                                    <div className="break-words">
                                        <strong className="text-[#1e3767]">{t('career.whyFeature1Title')}</strong> {t('career.whyFeature1Text')}
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 sm:gap-3">
                                    <span className="text-[#d97539] font-semibold text-lg sm:text-xl flex-shrink-0">✓</span>
                                    <div className="break-words">
                                        <strong className="text-[#1e3767]">{t('career.whyFeature2Title')}</strong> {t('career.whyFeature2Text')}
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 sm:gap-3">
                                    <span className="text-[#d97539] font-semibold text-lg sm:text-xl flex-shrink-0">✓</span>
                                    <div className="break-words">
                                        <strong className="text-[#1e3767]">{t('career.whyFeature3Title')}</strong> {t('career.whyFeature3Text')}
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 sm:gap-3">
                                    <span className="text-[#d97539] font-semibold text-lg sm:text-xl flex-shrink-0">✓</span>
                                    <div className="break-words">
                                        <strong className="text-[#1e3767]">{t('career.whyFeature4Title')}</strong> {t('career.whyFeature4Text')}
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 sm:gap-3">
                                    <span className="text-[#d97539] font-semibold text-lg sm:text-xl flex-shrink-0">✓</span>
                                    <div className="break-words">
                                        <strong className="text-[#1e3767]">{t('career.whyFeature5Title')}</strong> {t('career.whyFeature5Text')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            src={planungImage}
                            alt="PROMAX Team bei der Projektplanung"
                            className="w-full h-64 sm:h-80 lg:h-full object-contain lg:object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            {renderJobsSection()}

            {/* CTA Section */}
            <section ref={setSectionRef('cta')} className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
                <div className={`text-center transition-all duration-1000 transform ${visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-[#1e3767] break-words px-2">
                        {t('career.ctaTitle')}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto text-gray-600 break-words px-2">
                        {t('career.ctaText')} <strong>{t('career.ctaTextHighlight')}</strong>.
                    </p>
                    <div className="bg-white border border-gray-300 p-6 sm:p-8 max-w-md mx-auto shadow-lg">
                        <div className="flex items-center justify-center mb-3 sm:mb-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#1e3767]">
                                <Mail size={20} className="sm:w-6 sm:h-6 text-white" />
                            </div>
                        </div>
                        <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[#1e3767]">{t('career.ctaEmailTitle')}</h4>
                        <a href="mailto:jasmin.pieber@promax.at" className="text-orange-500 hover:underline text-sm sm:text-base font-medium break-all">
                            jasmin.pieber@promax.at
                        </a>
                        <p className="text-xs sm:text-sm mt-3 sm:mt-4 text-[#1e3767] break-words">
                            {t('career.jobAttachments')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Job Modal */}
            {selectedJob && (
                <div className="fixed inset-0 z-[9999] bg-black bg-opacity-60 backdrop-blur-sm overflow-y-auto">
                    <div className="min-h-screen flex items-start sm:items-center justify-center p-0 sm:p-4">
                        <div className="relative bg-white w-full max-w-7xl min-h-screen sm:min-h-0 sm:max-h-[90vh] shadow-2xl flex flex-col">
                            {/* Header */}
                            <div className="flex justify-between items-start gap-3 p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
                                <div className="flex-1 min-w-0">
                                    <div
                                        className="inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-white mb-2"
                                        style={{ backgroundColor: getDepartmentColor(selectedJob.department) }}
                                    >
                                        {selectedJob.department}
                                    </div>
                                    <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1e3767] leading-tight break-words">
                                        {selectedJob.title}
                                    </h1>
                                </div>
                                <button
                                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 flex items-center justify-center rounded-full flex-shrink-0"
                                    onClick={closeModal}
                                >
                                    <X size={18} className="sm:w-5 sm:h-5 text-[#1e3767]" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
                                {/* Sidebar */}
                                <div className="w-full lg:w-80 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50">
                                    <button
                                        onClick={() => setIsMetaExpanded(!isMetaExpanded)}
                                        className="w-full p-4 flex items-center justify-between lg:hidden border-b border-gray-200 hover:bg-gray-100"
                                    >
                                        <span className="text-sm sm:text-base font-semibold text-[#1e3767]">
                                            {t('career.jobDetailsToggle')} {isMetaExpanded ? t('career.jobDetailsHide') : t('career.jobDetailsShow')}
                                        </span>
                                        <div className={`transform transition-transform duration-300 ${isMetaExpanded ? 'rotate-180' : ''}`}>
                                            <ChevronRight size={18} className="text-[#1e3767] rotate-90" />
                                        </div>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ${isMetaExpanded ? 'max-h-[2000px] lg:max-h-none' : 'max-h-0 lg:max-h-none'} lg:overflow-y-auto`}>
                                        <div className="p-4 sm:p-6">
                                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-[#1e3767]">
                                                <div>
                                                    <div className="font-semibold mb-1">{t('career.jobLocation')}</div>
                                                    <div className="opacity-70 break-words">{selectedJob.location}</div>
                                                </div>

                                                <div>
                                                    <div className="font-semibold mb-1">{t('career.jobType')}</div>
                                                    <div className="opacity-70 break-words">{selectedJob.type}</div>
                                                </div>

                                                <div>
                                                    <div className="font-semibold mb-1">{t('career.jobTeam')}</div>
                                                    <div className="opacity-70 break-words">{selectedJob.teamSize}</div>
                                                </div>

                                                <div>
                                                    <div className="font-semibold mb-1">{t('career.jobPosted')}</div>
                                                    <div className="opacity-70 break-words">{selectedJob.posted}</div>
                                                </div>

                                                <div className="col-span-2 lg:col-span-1">
                                                    <div className="font-semibold mb-1">{t('career.jobExperience')}</div>
                                                    <div className="opacity-70 break-words">{selectedJob.experience}</div>
                                                </div>
                                            </div>

                                            <div className="p-3 sm:p-4 bg-white border border-gray-200 shadow-sm">
                                                <h4 className="font-semibold mb-2 text-sm sm:text-base text-[#1e3767]">{t('career.jobDirectContact')}</h4>
                                                <p className="text-xs sm:text-sm text-gray-600 mb-1 break-words">{t('career.jobContactQuestion')}</p>
                                                <p className="text-xs sm:text-sm text-[#1e3767]">
                                                    <span className="font-medium">{t('career.jobHRTeam')}</span><br />
                                                    <a href="mailto:jasmin.pieber@promax.at" className="text-orange-500 hover:underline break-all">
                                                        jasmin.pieber@promax.at
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="flex-1 overflow-y-auto">
                                    <div className="p-4 sm:p-6 lg:p-8">
                                        <section className="mb-6 sm:mb-8">
                                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-[#1e3767]">{t('career.jobAboutPosition')}</h2>
                                            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-[#1e3767] break-words">
                                                {selectedJob.description}
                                            </p>
                                        </section>

                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                                            <section>
                                                <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-[#1e3767]">{t('career.jobResponsibilities')}</h2>
                                                <div className="space-y-2 sm:space-y-3">
                                                    {selectedJob.responsibilities.map((item, index) => (
                                                        <div key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white border border-gray-200 shadow-sm">
                                                            <div
                                                                className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                                                                style={{ backgroundColor: getDepartmentColor(selectedJob.department) }}
                                                            >
                                                                {index + 1}
                                                            </div>
                                                            <span className="text-xs sm:text-sm md:text-base leading-relaxed text-[#1e3767] break-words">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>

                                            <section>
                                                <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-[#1e3767]">{t('career.jobRequirements')}</h2>
                                                <div className="space-y-2 sm:space-y-3">
                                                    {selectedJob.requirements.map((item, index) => (
                                                        <div key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white border border-gray-200 shadow-sm">
                                                            <div
                                                                className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                                                                style={{ backgroundColor: getDepartmentColor(selectedJob.department) }}
                                                            >
                                                                {index + 1}
                                                            </div>
                                                            <span className="text-xs sm:text-sm md:text-base leading-relaxed text-[#1e3767] break-words">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        </div>

                                        <section className="mb-6">
                                            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-[#1e3767]">{t('career.jobBenefits')}</h2>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                                                {selectedJob.benefits.map((item, index) => (
                                                    <div key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white border border-gray-200 shadow-sm">
                                                        <div
                                                            className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                                                            style={{ backgroundColor: getDepartmentColor(selectedJob.department) }}
                                                        >
                                                            {index + 1}
                                                        </div>
                                                        <span className="text-xs sm:text-sm md:text-base leading-relaxed text-[#1e3767] break-words">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section className="border-t border-gray-200 pt-4 sm:pt-6">
                                            <div className="text-center">
                                                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-[#1e3767] break-words">
                                                    {t('career.jobInterested')}
                                                </h3>
                                                <p className="text-sm sm:text-base mb-4 sm:mb-6 text-gray-600 break-words px-2">
                                                    {t('career.jobInterestedText')}
                                                </p>
                                                <div className="bg-white border border-gray-200 p-4 sm:p-6 shadow-sm max-w-md mx-auto">
                                                    <div className="flex items-center justify-center mb-2 sm:mb-3">
                                                        <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#1e3767]">
                                                            <Mail size={18} className="sm:w-5 sm:h-5 text-white" />
                                                        </div>
                                                    </div>
                                                    <p className="font-medium text-sm sm:text-base md:text-lg mb-1 text-[#1e3767]">
                                                        <a href="mailto:jasmin.pieber@promax.at" className="text-orange-500 hover:underline break-all">
                                                            jasmin.pieber@promax.at
                                                        </a>
                                                    </p>
                                                    <p className="text-xs sm:text-sm text-gray-600 break-words">
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
            @keyframes fadeOut {
    0%, 50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        visibility: hidden;
    }
}
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