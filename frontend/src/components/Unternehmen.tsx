import {useState, useEffect, JSX} from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css'
import rogl from '../assets/RoglAndreas.jpg';
import christian from '../assets/Christian.jpg';
import iso from '../assets/iso.png';
import iq from '../assets/IQNet certification mark 2022.jpg';
import CheckIcon from "./CheckIcon.tsx";
import unternehmen1 from "../assets/unternehmen1.jpg";
import unternehmenHero from '../assets/unternehmenPic.jpg';

interface Resource {
    title: string;
    type: string;
    size: string;
    downloadUrl: string;
    icon: JSX.Element;
    color: 'blue' | 'orange';
}

const Unternehmen = () => {
    const { t } = useTranslation();
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    // Resources - dynamically translated
    const resources: Resource[] = [
        {
            title: t('company.resourceISOCert'),
            type: t('company.resourceTypePDF'),
            size: "1.1 MB",
            downloadUrl: "/documents/Deutsch_ZER_0040281_259073.PDF",
            icon: (<svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
            ),
            color: 'orange'
        },
        {
            title: t('company.resourceAGB'),
            type: t('company.resourceTypePDF'),
            size: "485 KB",
            downloadUrl: "/documents/PROMAX_AGB Ingenieurbüros 2021 November.pdf",
            icon: (<svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>),
            color: 'blue'
        }
    ];

    // Smooth scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        setVisibleSections(prev => new Set([...prev, sectionId]));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        const sections = document.querySelectorAll('[id$="-section"]');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    // Stats data
    const stats = [
        { number: t('company.statsYears'), label: t('company.statsYearsLabel') },
        { number: t('company.statsExperts'), label: t('company.statsExpertsLabel') },
        { number: t('company.statsProjects'), label: t('company.statsProjectsLabel') },
        { number: t('company.statsCert'), label: t('company.statsCertLabel') }
    ];

    // Certification features
    const certFeatures = [
        {
            title: t('company.certFeature1Title'),
            description: t('company.certFeature1Text')
        },
        {
            title: t('company.certFeature2Title'),
            description: t('company.certFeature2Text')
        },
        {
            title: t('company.certFeature3Title'),
            description: t('company.certFeature3Text')
        }
    ];

    return (
        <>
            <div className="min-h-screen bg-white overflow-x-hidden" style={{
                wordBreak: 'normal',
                overflowWrap: 'normal',
                hyphens: 'none'
            }}>
                {/* Hero Section with Parallax */}
                {/* Hero Section */}
                <section
                    id="hero-section"
                    className="relative w-full flex flex-col items-center justify-center bg-cover bg-center"
                    style={{
                        height: '115vh',
                        minHeight: '115vh',
                        backgroundImage: `linear-gradient(rgba(30, 55, 103, 0.7), rgba(30, 55, 103, 0.7)), url(${unternehmenHero})`,                        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>

                    <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
                        <div className="transition-all duration-1000 transform opacity-100 translate-y-0">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-light text-white mb-3 sm:mb-4 md:mb-6 leading-tight" style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}>
                                {t('company.heroTitle')}
                                <span className="block font-semibold text-[#d97539] mt-1 sm:mt-2" style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}>{t('company.heroSubtitle')}</span>
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

                {/* Stats Section */}
                <section id="stats-section" className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-r from-[#1e3767] to-[#2a4a7f] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-pattern"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={`text-center transition-all duration-700 ${
                                        visibleSections.has('stats-section')
                                            ? 'translate-y-0 opacity-100'
                                            : 'translate-y-8 opacity-0'
                                    }`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
                                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-1 sm:mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300 break-words px-2">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about-section" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                            <div className={`animate-fade-in-right ${visibleSections.has('about-section') ? 'opacity-100' : 'opacity-0'}`}>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words hyphens-auto">
                                    {t('company.aboutTitle')}{' '}
                                    <span className="text-[#1e3767] font-semibold">{t('company.aboutTitleHighlight')}</span>
                                </h2>
                                <div className="w-16 sm:w-20 h-1 bg-[#d97539] mb-4 sm:mb-6 md:mb-8"></div>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 break-words">
                                    {t('company.aboutText1')}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                                    <div className="flex items-start space-x-2 sm:space-x-3">
                                        <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                            <CheckIcon />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base break-words">{t('company.aboutFeature1Title')}</h4>
                                            <p className="text-xs sm:text-sm text-gray-600 break-words">{t('company.aboutFeature1Text')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-2 sm:space-x-3">
                                        <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                            <CheckIcon />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base break-words">{t('company.aboutFeature2Title')}</h4>
                                            <p className="text-xs sm:text-sm text-gray-600 break-words">{t('company.aboutFeature2Text')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image */}
                            <div className={`hidden lg:block relative animate-fade-in-left ${visibleSections.has('about-section') ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#1e3767] to-[#d97539] rounded-lg opacity-10 blur-lg"></div>
                                <img
                                    src={unternehmen1}
                                    alt="PROMAX Office"
                                    className="relative rounded-lg shadow-2xl w-full h-[300px] lg:h-[380px] xl:h-[420px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section - MAXIMALE BILDSCHÄRFE */}
                <section id="team-section" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8 sm:mb-12 md:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-3 sm:mb-4 break-words hyphens-auto px-2">
                                {t('company.teamTitle')}{' '}
                                <span className="text-[#1e3767] font-semibold">{t('company.teamTitleHighlight')}</span>
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto break-words px-4">
                                {t('company.teamSubtitle')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto">
                            {/* Ing. Andreas Rogl */}
                            <div
                                className={`bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-transparent hover:border-[#1e3767] hover:shadow-2xl transition-all duration-300 ${
                                    visibleSections.has('team-section') ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                                }`}
                                style={{ animationDelay: `0ms` }}
                            >
                                <div className="text-center">
                                    <div className="w-40 h-52 sm:w-48 sm:h-60 md:w-56 md:h-72 lg:w-64 lg:h-80 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-lg overflow-hidden bg-gray-100">
                                        <img
                                            src={rogl}
                                            alt="Ing. Andreas Rogl"
                                            className="w-full h-full object-cover object-top"
                                            style={{
                                                imageRendering: '-webkit-optimize-contrast',
                                                backfaceVisibility: 'hidden',
                                                transform: 'translateZ(0)',
                                                WebkitFontSmoothing: 'antialiased',
                                                filter: 'contrast(1.02) saturate(1.05)'
                                            }}
                                            loading="eager"
                                            decoding="sync"
                                        />
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2 break-words">Ing. Andreas Rogl</h3>
                                    <p className="text-[#d97539] font-medium mb-1 sm:mb-2 text-sm sm:text-base">{t('company.teamCEO')}</p>
                                    <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{t('company.teamHeadquarters')}</p>
                                    <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 md:mb-6 break-all">andreas.rogl@promax.at</p>

                                    <div className="flex justify-center space-x-3 sm:space-x-4">
                                        <a href="mailto:andreas.rogl@promax.at" className="text-gray-400 hover:text-[#1e3767] transition-colors">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                            </svg>
                                        </a>
                                        <a href="https://at.linkedin.com/in/andreas-rogl-936860141" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1e3767] transition-colors">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* DI Christian Walter */}
                            <div
                                className={`bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-transparent hover:border-[#1e3767] hover:shadow-2xl transition-all duration-300 ${
                                    visibleSections.has('team-section') ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                                }`}
                                style={{ animationDelay: `200ms` }}
                            >
                                <div className="text-center">
                                    <div className="w-40 h-52 sm:w-48 sm:h-60 md:w-56 md:h-72 lg:w-64 lg:h-80 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-lg overflow-hidden bg-gray-100">
                                        <img
                                            src={christian}
                                            alt="DI Christian Walter"
                                            className="w-full h-full object-cover object-top"
                                            style={{
                                                imageRendering: '-webkit-optimize-contrast',
                                                backfaceVisibility: 'hidden',
                                                transform: 'translateZ(0)',
                                                WebkitFontSmoothing: 'antialiased',
                                                filter: 'contrast(1.02) saturate(1.05)'
                                            }}
                                            loading="eager"
                                            decoding="sync"
                                        />
                                    </div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2 break-words">DI Christian Walter</h3>
                                    <p className="text-[#d97539] font-medium mb-1 sm:mb-2 text-sm sm:text-base">{t('company.teamBranchManager')}</p>
                                    <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{t('company.teamBranchVienna')}</p>
                                    <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 md:mb-6 break-all">christian.walter@promax.at</p>

                                    <div className="flex justify-center space-x-3 sm:space-x-4">
                                        <a href="mailto:christian.walter@promax.at" className="text-gray-400 hover:text-[#1e3767] transition-colors">
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Unternehmenskultur Section */}
                <section id="unternehmenskultur-section" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                            {/* Image */}
                            <div className="hidden lg:block relative animate-fade-in-left">
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#d97539] to-[#1e3767] rounded-lg opacity-10 blur-lg"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Unternehmenskultur bei PROMAX"
                                    className="relative rounded-lg shadow-2xl w-full h-[400px] object-cover"
                                />
                            </div>

                            <div className="animate-fade-in-right">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words hyphens-auto">
                                    {t('company.cultureTitle')}{' '}
                                    <span className="text-[#1e3767] font-semibold">{t('company.cultureTitleMiddle')}</span>{' '}
                                    {t('company.cultureSubtitle')}
                                </h2>
                                <div className="w-16 sm:w-20 h-1 bg-[#d97539] mb-4 sm:mb-6 md:mb-8"></div>

                                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#1e3767] mb-3 sm:mb-4 break-words">
                                    {t('company.cultureHeading')}
                                </h3>

                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 md:mb-8 break-words">
                                    {t('company.cultureText1')}
                                </p>

                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 md:mb-8 break-words">
                                    {t('company.cultureText2')}
                                </p>

                                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                                    <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                                        <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                            <CheckIcon />
                                        </div>
                                        <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium break-words flex-1">{t('company.cultureFeature1')}</span>
                                    </div>
                                    <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                                        <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                            <CheckIcon />
                                        </div>
                                        <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium break-words flex-1">{t('company.cultureFeature2')}</span>
                                    </div>
                                    <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                                        <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                            <CheckIcon />
                                        </div>
                                        <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium break-words flex-1">{t('company.cultureFeature3')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certification Section */}
                <section id="certification" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                            <div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-3 sm:mb-4 md:mb-6 break-words hyphens-auto">
                                    {t('company.certTitle')}{' '}
                                    <span className="text-[#1e3767] font-semibold">{t('company.certTitleHighlight')}</span>
                                </h2>
                                <div className="w-16 sm:w-20 h-1 bg-[#d97539] mb-4 sm:mb-6 md:mb-8"></div>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 md:mb-8 break-words">
                                    {t('company.certText')}
                                </p>

                                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                                    {certFeatures.map((item, index) => (
                                        <div key={index} className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                                            <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                                <CheckIcon />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-1 sm:mb-2 break-words">{item.title}</h4>
                                                <p className="text-xs sm:text-sm md:text-base text-gray-600 break-words">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-orange-400/5 rounded-2xl transform rotate-2"></div>
                                <div className="relative bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 md:space-y-6">
                                    <div className="flex justify-center">
                                        <img
                                            src={iso}
                                            alt="Quality Austria ISO 9001:2015 Zertifizierung"
                                            className="h-16 sm:h-20 md:h-24 w-auto object-contain"
                                        />
                                    </div>

                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                                    <div className="flex justify-center">
                                        <img
                                            src={iq}
                                            alt="IQNet Certified Management System"
                                            className="h-10 sm:h-12 md:h-16 w-auto object-contain"
                                        />
                                    </div>

                                    <div className="text-center space-y-1 sm:space-y-2 pt-2 sm:pt-4">
                                        <p className="text-xs sm:text-sm font-medium text-slate-700">ISO 9001:2015</p>
                                        <p className="text-xs text-slate-500">Qualitätsmanagementsystem</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resources/Downloads Section */}
                <section id="resources" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8 sm:mb-12 md:mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-3 sm:mb-4 text-center break-words hyphens-auto px-2">
                                {t('company.resourcesTitle')}{' '}
                                <span className="text-[#d97539] font-semibold">{t('company.resourcesTitleHighlight')}</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
                            {resources.map((resource, index) => (
                                <a
                                    key={resource.title}
                                    href={resource.downloadUrl}
                                    download
                                    className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-4 sm:p-6 md:p-8 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 block"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3 md:space-y-4">
                                        <div
                                            className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 ${
                                                resource.color === 'blue'
                                                    ? 'bg-gradient-to-br from-[#1e3767] to-[#2a4a7f]'
                                                    : 'bg-gradient-to-br from-[#d97539] to-[#e89050]'
                                            } rounded-lg flex items-center justify-center flex-shrink-0`}
                                        >
                                            {resource.icon}
                                        </div>
                                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 text-center break-words px-2">
                                            {resource.title}
                                        </h3>
                                        <p className="text-gray-600 text-xs sm:text-sm text-center break-words">
                                            {resource.type} • {resource.size}
                                        </p>
                                        <div
                                            className={`flex items-center justify-center ${
                                                resource.color === 'blue' ? 'text-[#1e3767]' : 'text-[#d97539]'
                                            } font-medium pt-1 sm:pt-2 text-xs sm:text-sm md:text-base`}
                                        >
                                            <span>{t('company.resourceDownload')}</span>
                                            <svg
                                                className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 4v16m8-8l-8 8-8-8"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            ))}
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

                {/* Add required styles */}
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
                    
                    @keyframes fade-in-right {
                        from {
                            opacity: 0;
                            transform: translateX(-30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                    
                    @keyframes fade-in-left {
                        from {
                            opacity: 0;
                            transform: translateX(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                    
                    .animate-fade-in-up {
                        animation: fade-in-up 0.8s ease-out forwards;
                    }
                    
                    .animate-fade-in-right {
                        animation: fade-in-right 0.8s ease-out forwards;
                    }
                    
                    .animate-fade-in-left {
                        animation: fade-in-left 0.8s ease-out forwards;
                    }
                    
                    .bg-pattern {
                        background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                    }
                    
                    .line-clamp-2 {
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                    
                    /* Mobile touch optimizations */
                    @media (max-width: 640px) {
                        .hover\\:scale-105:hover {
                            transform: none;
                        }
                        
                        .hover\\:-translate-y-1:hover {
                            transform: none;
                        }
                        
                        .hover\\:-translate-y-2:hover {
                            transform: none;
                        }
                    }
                    
                    /* Improve text legibility on mobile */
                    @media (max-width: 640px) {
                        body {
                            -webkit-text-size-adjust: 100%;
                        }
                    }
                `}</style>
            </div>
        </>
    );
};

export default Unternehmen;