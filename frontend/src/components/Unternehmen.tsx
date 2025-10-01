import {useState, useEffect, JSX} from 'react';
import {useNavigate} from 'react-router-dom';
import '../index.css'
import rogl from '../assets/RoglAndreas.jpg';
import christian from '../assets/Christian.jpg';
import iso from '../assets/iso.png';
import iq from '../assets/iqZert.png';
import {Helmet} from "@vuer-ai/react-helmet-async";
import CheckIcon from "./CheckIcon.tsx";

interface Resource {
    title: string;
    type: string;
    size: string;
    icon: JSX.Element;
    color: 'blue' | 'orange';
}

const Unternehmen = () => {
    const navigate = useNavigate();
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    // Resources
    const resources: Resource[] = [
        {
            title: "ISO 9001:2015 Zertifikat",
            type: "PDF",
            size: "1.1 MB",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
            ),
            color: 'orange'
        },
        {
            title: "AGB Ingenieurbüros",
            type: "PDF",
            size: "485 KB",
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
            ),
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

    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Das Unternehmen - PROMAX Project Management",
                        "description": "PROMAX Project Management GesmbH wurde 1999 gegründet und beschäftigt derzeit ca. 35 Mitarbeiter. Spezialisiert auf Projektmanagement im Industrieanlagenbau.",
                        "url": "https://www.promax.at/Unternehmen",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "PROMAX Project Management GesmbH",
                            "foundingDate": "1999",
                            "employee": "35",
                            "description": "Dienstleistungsunternehmen im Industrieanlagenbau"
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://www.promax.at/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Das Unternehmen",
                                    "item": "https://www.promax.at/Unternehmen"
                                }
                            ]
                        }
                    })}
                </script>
                <title>Das Unternehmen - PROMAX Projektmanagement</title>
                <meta name="description" content="PROMAX bietet seit 1999 exzellentes Projektmanagement im Industrieanlagenbau. Erfahren Sie mehr über unsere Expertise in Papier, Zellstoff, Pharma und Chemie." />
                <link rel="canonical" href="https://www.promax.at/Unternehmen" />

                {/* Open Graph für Social Media */}
                <meta property="og:title" content="Das Unternehmen - PROMAX Projektmanagement" />
                <meta property="og:description" content="PROMAX bietet seit 1999 exzellentes Projektmanagement im Industrieanlagenbau." />
                <meta property="og:url" content="https://www.promax.at/Unternehmen" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.promax.at/og-image.jpg" />
                <meta property="og:locale" content="de_AT" />
                <meta property="og:site_name" content="PROMAX" />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Das Unternehmen - PROMAX" />
                <meta name="twitter:description" content="PROMAX bietet seit 1999 exzellentes Projektmanagement im Industrieanlagenbau." />
                <meta name="twitter:image" content="https://www.promax.at/og-image.jpg" />
            </Helmet>
            <div className="min-h-screen bg-white overflow-x-hidden">
                {/* Hero Section with Parallax */}
                <section
                    id="hero-section"
                    className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(30, 55, 103, 0.7), rgba(30, 55, 103, 0.7)), url('/unternehmenPic.jpg')`,
                        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>

                    <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                        <div className="animate-fade-in-up">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-white mb-4 sm:mb-6">
                                Knowhow und Leidenschaft für Ihre Projekte
                                <span className="block font-semibold text-[#d97539] mt-1 sm:mt-2">Seit 1999.</span>
                            </h1>
                        </div>
                    </div>

                    {/* Scroll indicator - hidden on mobile */}
                    <div className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                        </svg>
                    </div>
                </section>

                {/* Stats Section */}
                <section id="stats-section" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#1e3767] to-[#2a4a7f] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-pattern"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                            {[
                                { number: "25+", label: "Jahre Erfahrung" },
                                { number: "35", label: "Experten" },
                                { number: "500+", label: "Projekte" },
                                { number: "ISO", label: "Zertifiziert" }
                            ].map((stat, index) => (
                                <div
                                    key={stat.label}
                                    className={`text-center transition-all duration-700 ${
                                        visibleSections.has('stats-section')
                                            ? 'translate-y-0 opacity-100'
                                            : 'translate-y-8 opacity-0'
                                    }`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
                                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about-section" className="py-16 sm:py-20 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div className={`animate-fade-in-right ${visibleSections.has('about-section') ? 'opacity-100' : 'opacity-0'}`}>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6">
                                    Kompetenz trifft{' '}
                                    <span className="text-[#1e3767] font-semibold">Innovation</span>
                                </h2>
                                <div className="w-20 h-1 bg-[#d97539] mb-6 sm:mb-8"></div>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                                    PROMAX steht seit 1999 für professionelle Projektumsetzung im Industrieanlagenbau. Mit unserem 35-köpfigen Team aus erfahrenen Experten begleiten wir komplexe Projekte in den unterschiedlichsten Branchen – von der Planung bis zur Inbetriebnahme.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-[#d97539] rounded-full mt-2"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">International tätig</h4>
                                            <p className="text-xs sm:text-sm text-gray-600">Projekte weltweit</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-[#d97539] rounded-full mt-2"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">ISO 9001:2015</h4>
                                            <p className="text-xs sm:text-sm text-gray-600">Zertifizierte Qualität</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image - Hidden on mobile as requested */}
                            <div className={`hidden lg:block relative animate-fade-in-left ${visibleSections.has('about-section') ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#1e3767] to-[#d97539] rounded-lg opacity-10 blur-lg"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="PROMAX Office"
                                    className="relative rounded-lg shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="team-section" className="py-16 sm:py-20 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                                Ihre{' '}
                                <span className="text-[#1e3767] font-semibold">Ansprechpartner</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                                Erfahrene Experten für Ihre Projekte
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
                            {/* Ing. Andreas Rogl */}
                            <div
                                className={`bg-white rounded-lg p-6 sm:p-8 border border-transparent hover:border-[#1e3767] hover:shadow-2xl transition-all duration-300 ${
                                    visibleSections.has('team-section') ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                                }`}
                                style={{animationDelay: `0ms`}}
                            >
                                <div className="text-center">
                                    <div className="w-32 h-40 sm:w-48 sm:h-60 mx-auto mb-4 sm:mb-6 rounded-lg overflow-hidden bg-gray-100">
                                        <img
                                            src={rogl}
                                            alt="Ing. Andreas Rogl"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Ing. Andreas Rogl</h3>
                                    <p className="text-[#d97539] font-medium mb-2">Geschäftsführer</p>
                                    <p className="text-sm text-gray-600 mb-2">Zentrale Grambach</p>
                                    <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">andreas.rogl@promax.at</p>

                                    <div className="flex justify-center space-x-4">
                                        <a
                                            href="mailto:andreas.rogl@promax.at"
                                            className="text-gray-400 hover:text-[#1e3767] transition-colors"
                                        >
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-[#1e3767] transition-colors"
                                        >
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* DI Christian Walter */}
                            <div
                                className={`bg-white rounded-lg p-6 sm:p-8 border border-transparent hover:border-[#1e3767] hover:shadow-2xl transition-all duration-300 ${
                                    visibleSections.has('team-section') ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                                }`}
                                style={{animationDelay: `200ms`}}
                            >
                                <div className="text-center">
                                    <div className="w-32 h-40 sm:w-48 sm:h-60 mx-auto mb-4 sm:mb-6 rounded-lg overflow-hidden bg-gray-100">
                                        <img
                                            src={christian}
                                            alt="DI Christian Walter"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">DI Christian Walter</h3>
                                    <p className="text-sm text-gray-600 mb-2">Niederlassung Wien</p>
                                    <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">christian.walter@promax.at</p>
                                    <br/>

                                    <div className="flex justify-center space-x-4">
                                        <a
                                            href="mailto:christian.walter@promax.at"
                                            className="text-gray-400 hover:text-[#1e3767] transition-colors"
                                        >
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-[#1e3767] transition-colors"
                                        >
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Unternehmenskultur Section */}
                <section id="unternehmenskultur-section" className="py-16 sm:py-20 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Image - Hidden on mobile as requested */}
                            <div className="hidden lg:block relative animate-fade-in-left">
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#d97539] to-[#1e3767] rounded-lg opacity-10 blur-lg"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Unternehmenskultur bei PROMAX"
                                    className="relative rounded-lg shadow-2xl w-full h-[400px] object-cover"
                                />
                            </div>

                            <div className="animate-fade-in-right">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6">
                                    Wofür{' '}
                                    <span className="text-[#1e3767] font-semibold">PROMAX</span>{' '}
                                    steht
                                </h2>
                                <div className="w-20 h-1 bg-[#d97539] mb-6 sm:mb-8"></div>

                                <h3 className="text-xl sm:text-2xl font-medium text-[#1e3767] mb-4">
                                    Unsere Unternehmenskultur
                                </h3>

                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                                    Bei PROMAX Project Management GesmbH verbinden wir Teamgeist, offene Kommunikation und
                                    Vertrauen mit gezielter Gesundheitsförderung. Flache Hierarchien, ein kooperatives
                                    Arbeitsumfeld und Programme für das körperliche und geistige Wohlbefinden unserer
                                    Mitarbeiter schaffen Raum für Innovation, Motivation und nachhaltigen Erfolg.
                                </p>

                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                                    So entsteht eine Unternehmenskultur, die soziale Kompetenz, Wertschätzung und
                                    partnerschaftliche Zusammenarbeit in den Mittelpunkt stellt – für unsere Teams,
                                    Kunden und Partner.
                                </p>

                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d97539]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl sm:text-2xl">🤝</span>
                                        </div>
                                        <span className="text-sm sm:text-base text-gray-700 font-medium">Teamgeist & Zusammenarbeit</span>
                                    </div>
                                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d97539]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl sm:text-2xl">💬</span>
                                        </div>
                                        <span className="text-sm sm:text-base text-gray-700 font-medium">Offene Kommunikation</span>
                                    </div>
                                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d97539]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl sm:text-2xl">🎯</span>
                                        </div>
                                        <span className="text-sm sm:text-base text-gray-700 font-medium">Innovation & nachhaltiger Erfolg</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Certification Section */}
                <section id="certification" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6">
                                    Zertifizierte{' '}
                                    <span className="text-[#1e3767] font-semibold">Qualität</span>
                                </h2>
                                <div className="w-20 h-1 bg-[#d97539] mb-6 sm:mb-8"></div>
                                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                                    PROMAX Project Management GesmbH ist nach ISO 9001:2015 zertifiziert und
                                    gewährleistet damit höchste Qualitätsstandards in allen Bereichen unserer Dienstleistungen.
                                </p>

                                <div className="space-y-4 sm:space-y-6">
                                    {[
                                        {
                                            title: "Qualitätsmanagementsystem",
                                            description: "Systematische Prozesse für konstante Qualität und kontinuierliche Verbesserung"
                                        },
                                        {
                                            title: "Kundenorientierung",
                                            description: "Fokus auf Kundenzufriedenheit und Erfüllung von Kundenanforderungen"
                                        },
                                        {
                                            title: "Prozessverbesserung",
                                            description: "Regelmäßige Bewertung und Optimierung aller Geschäftsprozesse"
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                                            <div className="flex-shrink-0 mt-1">
                                                <CheckIcon />
                                            </div>
                                            <div>
                                                <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-1 sm:mb-2">{item.title}</h4>
                                                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-orange-400/5 rounded-2xl transform rotate-2"></div>
                                <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 space-y-4 sm:space-y-6">
                                    <div className="flex justify-center">
                                        <img
                                            src={iso}
                                            alt="Quality Austria ISO 9001:2015 Zertifizierung"
                                            className="h-20 sm:h-24 w-auto object-contain"
                                        />
                                    </div>

                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                                    <div className="flex justify-center">
                                        <img
                                            src={iq}
                                            alt="IQNet Certified Management System"
                                            className="h-12 sm:h-16 w-auto object-contain"
                                        />
                                    </div>

                                    <div className="text-center space-y-2 pt-2 sm:pt-4">
                                        <p className="text-xs sm:text-sm font-medium text-slate-700">ISO 9001:2015</p>
                                        <p className="text-xs text-slate-500">Qualitätsmanagementsystem</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resources/Downloads Section */}
                <section id="resources" className="py-16 sm:py-20 lg:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 text-center">
                                Resource{' '}
                                <span className="text-[#1e3767] font-semibold">Center</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto text-center">
                                Wichtige Dokumente und Informationen zum Download
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                            {resources.map((resource, index) => (
                                <div
                                    key={resource.title}
                                    className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 sm:p-8 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                                    style={{animationDelay: `${index * 100}ms`}}
                                >
                                    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                                        <div className={`w-12 h-12 sm:w-16 sm:h-16 ${
                                            resource.color === 'blue'
                                                ? 'bg-gradient-to-br from-[#1e3767] to-[#2a4a7f]'
                                                : 'bg-gradient-to-br from-[#d97539] to-[#e89050]'
                                        } rounded-lg flex items-center justify-center`}>
                                            {resource.icon}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center">{resource.title}</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm text-center">{resource.type} • {resource.size}</p>
                                        <div className={`flex items-center justify-center ${
                                            resource.color === 'blue' ? 'text-[#1e3767]' : 'text-[#d97539]'
                                        } font-medium pt-2 text-sm sm:text-base`}>
                                            <span>Download</span>
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8l-8 8-8-8"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#1e3767] to-[#2a4a7f] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-pattern"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6">
                            Bereit für Ihr nächstes <span className="font-semibold">Projekt?</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto">
                            Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen.
                            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => navigate('/Kontakt')}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#d97539] text-white rounded-full hover:bg-[#c56830] transform hover:scale-105 transition-all duration-300 font-medium text-base sm:text-lg shadow-lg hover:shadow-xl"
                            >
                                Projekt besprechen
                            </button>
                    </div>
            </div>
        </section>

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