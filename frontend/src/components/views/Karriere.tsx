import { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Download, Sparkles, Mail, FileText } from 'lucide-react';
import planungImage from '../assets_komp/klugeKöpfe.webp';

// PDF Job Inserate - diese Dateien müssen in src/assets/jobs/ liegen
import engineerPdf from '../assets/jobs/PROMAX_Inseratvorlage_Engineer_2025-08.pdf';
import juniorEngineerFeb from '../assets/jobs/PROMAX_Inseratvorlage_JuniorEngineer_2025-02.pdf';
import juniorEngineerMay from '../assets/jobs/PROMAX_Inseratvorlage_JuniorEngineer_2025-05.pdf';

interface JobPdf {
    id: string;
    title: string;
    location: string;
    date: string;
    pdfUrl: string;
}

const jobPdfsDE: JobPdf[] = [
    {
        id: '1',
        title: '3D CAD-Konstrukteur / Projektabwickler (m/w)',
        location: 'Wien & Bruck an der Leitha',
        date: 'August 2025',
        pdfUrl: engineerPdf
    },
    {
        id: '2',
        title: '3D CAD-Konstrukteure und Techniker (m/w)',
        location: 'Raaba-Grambach',
        date: 'Februar 2025',
        pdfUrl: juniorEngineerFeb
    },
    {
        id: '3',
        title: '3D CAD-Konstrukteur / Projektabwickler (m/w)',
        location: 'Wien & Bruck an der Leitha',
        date: 'Mai 2025',
        pdfUrl: juniorEngineerMay
    }
];

const jobPdfsEN: JobPdf[] = [
    {
        id: '1',
        title: '3D CAD Designer / Project Engineer (m/f)',
        location: 'Vienna & Bruck an der Leitha',
        date: 'August 2025',
        pdfUrl: engineerPdf
    },
    {
        id: '2',
        title: '3D CAD Designers and Technicians (m/f)',
        location: 'Raaba-Grambach',
        date: 'February 2025',
        pdfUrl: juniorEngineerFeb
    },
    {
        id: '3',
        title: '3D CAD Designer / Project Engineer (m/f)',
        location: 'Vienna & Bruck an der Leitha',
        date: 'May 2025',
        pdfUrl: juniorEngineerMay
    }
];

const Karriere: React.FC = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language as 'de' | 'en';

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    // Get jobs based on current language
    const jobPdfs = currentLang === 'en' ? jobPdfsEN : jobPdfsDE;

    // Refs
    const heroRef = useRef<HTMLElement>(null);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const setSectionRef = (key: string) => (el: HTMLElement | null) => {
        sectionRefs.current[key] = el;
    };

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

    const handleDownload = useCallback((pdfUrl: string, title: string): void => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `${title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, []);

    const renderJobsSection = () => {
        return (
            <section ref={setSectionRef('jobs')} className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                <div className={`transition-all duration-1000 transform ${visibleSections.has('jobs') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 text-[#1e3767]">
                        {t('career.jobsTitle')}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-12 md:mb-16 max-w-2xl text-gray-600">
                        {t('career.jobsSubtitle')}
                    </p>

                    {/* Job PDF Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {jobPdfs.map((job, index) => (
                            <div
                                key={job.id}
                                className="group relative bg-white p-4 sm:p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col shadow-lg"
                                style={{
                                    transitionDelay: `${index * 100}ms`
                                }}
                            >
                                <div
                                    className="absolute top-0 left-0 w-full h-1 bg-[#1e3767]"
                                />

                                <div className="relative z-10 flex flex-col flex-1">
                                    {/* PDF Icon */}
                                    <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 bg-[#1e3767]/10 rounded-lg">
                                        <FileText size={24} className="sm:w-7 sm:h-7 text-[#1e3767]" />
                                    </div>

                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 leading-tight text-[#1e3767] break-words">
                                        {job.title}
                                    </h3>

                                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
                                        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#1e3767]">
                                            <MapPin size={14} className="flex-shrink-0 opacity-70" />
                                            <span className="opacity-80 break-words">{job.location}</span>
                                        </div>
                                        <div className="text-xs sm:text-sm text-[#1e3767] opacity-70">
                                            {job.date}
                                        </div>
                                    </div>

                                    {/* Download Button */}
                                    <button
                                        onClick={() => handleDownload(job.pdfUrl, job.title)}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 bg-[#1e3767] text-white font-medium text-sm sm:text-base transition-all duration-300 hover:bg-[#2d4a73] group-hover:bg-[#d97539]"
                                    >
                                        <Download size={18} className="sm:w-5 sm:h-5" />
                                        <span>{currentLang === 'en' ? 'Download PDF' : 'PDF herunterladen'}</span>
                                    </button>
                                </div>

                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-[#1e3767]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    return (
        <div className="overflow-x-hidden" style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif", color: '#1e3767', minHeight: '100vh' }}>
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(30, 55, 103, 0.7), rgba(30, 55, 103, 0.7)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&auto=format')`,
                    backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
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

                <div className="hidden sm:block absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                    </svg>
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
        </div>
    );
};

export default Karriere;