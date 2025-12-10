import React, { useState, useEffect } from 'react';

// TypeScript Interfaces
interface Branch {
    id: number;
    title: string;
    description: string;
    detailedDescription: string;
    services: string[];
    expertise: string[];
    technologies: string[];
}

interface VisibilityState {
    [key: string]: boolean;
}

const BranchesOverview: React.FC = () => {
    const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
    const [isVisible, setIsVisible] = useState<VisibilityState>({});

    useEffect(() => {
        // Set initial visibility
        setIsVisible({
            hero: true,
            about: true,
            services: true,
            additional: true
        });
    }, []);

    const branches: Branch[] = [
        {
            id: 1,
            title: "Chemie",
            description: "Industrieller Anlagenbau für die chemische Industrie mit Expertise in Verfahrenstechnik und Prozessoptimierung. Innovative Lösungen für thermische Verfahren und komplexe Produktionsanlagen.",
            detailedDescription: "PROMAX verfügt über jahrzehntelange Expertise im industriellen Anlagenbau für Chemieunternehmen. Unsere Ingenieure entwickeln innovative Lösungen für komplexe verfahrenstechnische Prozesse unter Berücksichtigung höchster Sicherheits- und Umweltstandards. Von der ersten Konzeptphase bis zur erfolgreichen Inbetriebnahme begleiten wir Ihre Chemieanlagen-Projekte mit fundiertem Know-how in Verfahrenstechnik, Anlagenplanung und Projektmanagement. Unsere Kompetenz erstreckt sich über thermische Verfahren, chemische Reaktoren, Destillationsanlagen und komplexe Produktionsprozesse.",
            services: ["Layoutplanung", "Stahlbauleitplanung", "Rohrleitungsdetailplanung", "ROHR 2 Berechnung", "Montageüberwachung", "Qualitätskontrolle"],
            expertise: [
                "Verfahrenstechnische Konzeptentwicklung für chemische Prozesse",
                "Sicherheitsanalysen und HAZOP-Studien",
                "Anlagenoptimierung und Prozessverbesserung",
                "Genehmigungsplanung nach Chemikaliengesetz",
                "Ex-Schutz Planung und Zoneneinteilung",
                "Emissionsminderung und Umweltschutz",
                "Basic und Detail Engineering für Chemieanlagen",
                "Inbetriebnahmebegleitung und Commissioning"
            ],
            technologies: ["AutoCAD Plant 3D", "PDMS", "E3D", "ChemCAD", "Aspen Plus", "3D-Laserscanning"]
        },
        {
            id: 2,
            title: "Energie & Umwelt",
            description: "Zukunftsweisende Energielösungen und Umwelttechnik für nachhaltige Industrieanlagen. Fokus auf Energieeffizienz und umweltschonende Technologien für klimaneutrale Produktionsprozesse.",
            detailedDescription: "Im Bereich Energie & Umwelt entwickelt PROMAX zukunftsweisende Lösungen für nachhaltige Industrieanlagen. Unsere Expertise umfasst Energieeffizienz-Konzepte, Emissionsminderungstechnologien und umweltschonende Anlagenkonzepte. Wir unterstützen Unternehmen bei der Transformation zu klimaneutralen Produktionsprozessen durch innovative Energiesysteme, Abwärmerückgewinnung und regenerative Energieintegration.",
            services: ["Kanal und Rohrleitungstechnik", "Ausschreibungsunterlagen", "Angebotsvergleiche", "Layout Planung", "Rohrleitungsplanung"],
            expertise: [
                "Energieauditierung und Energiemanagement-Systeme",
                "CO2-Bilanzierung und Klimaneutralitäts-Strategien",
                "Abwärmerückgewinnung und Kraft-Wärme-Kopplung",
                "Umweltverträglichkeitsprüfungen (UVP)",
                "Genehmigungsplanung nach Umweltrecht",
                "Luftreinhaltung und Abluftreinigung",
                "Wasseraufbereitung und Abwasserbehandlung",
                "Kreislaufwirtschaft und Ressourceneffizienz"
            ],
            technologies: ["Energiesimulations-Software", "CFD-Modellierung", "SCADA-Systeme", "IoT-Sensortechnik"]
        },
        {
            id: 3,
            title: "Pharma",
            description: "GMP-konforme Anlagenplanung für die pharmazeutische Industrie. Spezialisiert auf sterile Produktionsbereiche mit höchsten Qualitäts- und Sicherheitsstandards nach internationalen Richtlinien.",
            detailedDescription: "Die pharmazeutische Industrie stellt höchste Anforderungen an Anlagenplanung und -qualifizierung. PROMAX verfügt über umfassende Expertise in GMP-konformer Planung und Projektabwicklung für Pharmaunternehmen. Unsere Ingenieure sind geschult in FDA-, EMA- und ICH-Richtlinien und begleiten Projekte von der Konzeptentwicklung über die Detail-Engineering bis zur erfolgreichen Qualifizierung.",
            services: ["Anlagentechnische Projektleitung", "Schema- und Layout-Planung", "Lieferantenmonitoring", "User requirement specifications (URS)", "Herstellerüberwachung", "Qualifizierungsassistenz"],
            expertise: [
                "GMP-konforme Anlagenplanung und -qualifizierung",
                "Cleanroom-Design und Kontaminationsschutz",
                "Validierung und Qualifizierung (IQ/OQ/PQ)",
                "Risikoanalysen nach ICH Q9",
                "Change Control und Deviation Management",
                "Computerized System Validation (CSV)",
                "Regulatory Affairs und Behördenkommunikation",
                "Technology Transfer und Scale-up"
            ],
            technologies: ["DeltaV", "Siemens PCS 7", "GAMP 5", "TrackWise", "Veeva Vault", "SAP"]
        },
        {
            id: 4,
            title: "Papier & Zellstoff",
            description: "Umfassende Projektbetreuung für die Papier- und Zellstoffindustrie. Expertise in nachhaltigen Produktionsverfahren, Recycling-Technologien und Energierückgewinnung.",
            detailedDescription: "PROMAX besitzt langjährige Erfahrung in der Papier- und Zellstoffindustrie mit fundierten Kenntnissen aller Produktionsprozesse von der Holzaufbereitung bis zur fertigen Papierproduktion. Unsere Ingenieure verstehen die komplexen Anforderungen der Zellstoffgewinnung, Bleichprozesse und Papiermaschinenoptimierung.",
            services: ["Detailkonstruktion", "Rohrleitungstechnik", "Montageaufsicht", "Anlagenlayout", "Simulation"],
            expertise: [
                "Zellstoffgewinnung und Aufschlussprozesse",
                "Bleichsequenzen und ECF/TCF-Verfahren",
                "Papiermaschinen-Engineering und Optimization",
                "Altpapier-Aufbereitung und De-Inking",
                "Energieintegration und Dampfkreisläufe",
                "Abwasserbehandlung und Kreislaufschließung",
                "Prozessautomatisierung und Qualitätskontrolle",
                "Emissionsminderung und Geruchsreduzierung"
            ],
            technologies: ["Honeywell Experion PKS", "ABB 800xA", "Valmet DNA", "Process Simulation"]
        }
    ];

    return (
        <>
            <div style={{ fontFamily: 'Arial, sans-serif', color: '#1e3767' }}>
                {/* Modal */}
                {selectedBranch && (
                    <div className="fixed inset-0 z-[1100] flex items-start justify-center pt-[110px] p-4 sm:p-6 md:p-8">
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity duration-300"
                            onClick={() => setSelectedBranch(null)}
                        ></div>

                        {/* Modal Content */}
                        <div className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[calc(100vh-130px)] overflow-y-auto shadow-xl transform transition-all duration-500">
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedBranch(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center transition-colors shadow-md border border-gray-200"
                            >
                                <span className="text-gray-600 text-xl">×</span>
                            </button>

                            {/* Modal Header */}
                            <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-t-2xl" style={{ backgroundColor: '#1e3767' }}>
                                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
                                        {selectedBranch.title}
                                    </h3>
                                    <p className="text-lg sm:text-xl opacity-90 font-light leading-relaxed max-w-2xl">
                                        Branchenspezifische Expertise und maßgeschneiderte Lösungen
                                    </p>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 sm:p-8 md:p-10">
                                {/* Beschreibung */}
                                <div className="mb-8">
                                    <h4 className="text-xl sm:text-2xl font-bold mb-4 pb-2 border-b-2" style={{ color: '#1e3767', borderColor: '#d1d8dc' }}>
                                        Branchenexpertise
                                    </h4>
                                    <p className="leading-relaxed text-base sm:text-lg" style={{ color: '#1e3767' }}>
                                        {selectedBranch.detailedDescription}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
                                    {/* Kernleistungen */}
                                    <div className="rounded-xl p-6 sm:p-8" style={{ backgroundColor: '#d1d8dc' }}>
                                        <h4 className="text-lg sm:text-xl font-bold mb-4 pb-2 border-b-2" style={{ color: '#1e3767', borderColor: '#9ba8b3' }}>
                                            Kernleistungen
                                        </h4>
                                        <ul className="space-y-3">
                                            {selectedBranch.services.map((service, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="w-2 h-2 rounded-full mr-3 flex-shrink-0 mt-2" style={{ backgroundColor: '#1e3767' }}></span>
                                                    <span className="text-sm sm:text-base leading-relaxed" style={{ color: '#1e3767' }}>{service}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Expertise */}
                                    <div className="rounded-xl p-6 sm:p-8" style={{ backgroundColor: 'rgba(217, 117, 57, 0.1)' }}>
                                        <h4 className="text-lg sm:text-xl font-bold mb-4 pb-2 border-b-2" style={{ color: '#1e3767', borderColor: '#d97539' }}>
                                            Fachexpertise
                                        </h4>
                                        <ul className="space-y-3">
                                            {selectedBranch.expertise.slice(0, 6).map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="w-2 h-2 rounded-full mr-3 flex-shrink-0 mt-2" style={{ backgroundColor: '#d97539' }}></span>
                                                    <span className="text-sm sm:text-base leading-relaxed" style={{ color: '#1e3767' }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Technologien */}
                                <div className="grid grid-cols-1 gap-6 sm:gap-8">
                                    <div className="bg-white border rounded-xl p-6 sm:p-8" style={{ borderColor: '#9ba8b3' }}>
                                        <h4 className="text-lg sm:text-xl font-bold mb-4" style={{ color: '#1e3767' }}>
                                            Technologien & Tools
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedBranch.technologies.map((tech, index) => (
                                                <span key={index} className="px-3 py-1 rounded-lg text-sm font-medium" style={{ backgroundColor: '#d1d8dc', color: '#1e3767' }}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Hero Section */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                    <div
                        className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)', lineHeight: '1.2' }} className="font-light text-gray-900 mb-3 sm:mb-4 md:mb-6">
                            Engineering Excellence.
                            <span className="block font-semibold text-[#d97539] mt-1 sm:mt-2">Branchen.</span>
                        </h1>
                        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', lineHeight: '1.6' }} className="text-gray-600 mb-6 sm:mb-8 md:mb-12 max-w-3xl">
                            Spezialisierte Engineering-Expertise für unterschiedlichste Industriezweige.
                            Von der chemischen Industrie über Pharma bis hin zu Energie- und Umwelttechnik —
                            wir entwickeln maßgeschneiderte Lösungen für komplexe Anlagenprojekte mit höchsten
                            Qualitäts- und Sicherheitsstandards.
                        </p>
                    </div>
                </div>

                {/* About Section */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div
                            className={`transition-all duration-1000 delay-300 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                        >
                            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.2' }} className="font-light text-gray-900 mb-3 sm:mb-4 md:mb-6">
                                Branchenexpertise ist unser Erfolgsrezept
                            </h2>
                            <div className="w-20 h-1 bg-[#d97539] mb-4 sm:mb-6 md:mb-8"></div>
                            <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.125rem)', lineHeight: '1.7' }} className="text-gray-600 mb-3 sm:mb-4 md:mb-6">
                                Wir verstehen die spezifischen Anforderungen jeder Branche und entwickeln darauf aufbauend
                                maßgeschneiderte Engineering-Lösungen. Von der chemischen Industrie bis zur Pharmabranche —
                                unser tiefgreifendes Fachwissen in den jeweiligen Industriezweigen ist die Basis für erfolgreiche Projekte.
                            </p>
                            <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.125rem)', lineHeight: '1.7' }} className="text-gray-600">
                                Diese branchenspezifische Spezialisierung ermöglicht es uns, auch bei komplexesten
                                Anforderungen die optimale Lösung zu finden und termingerecht umzusetzen.
                            </p>
                        </div>
                        <div
                            className={`transition-all duration-1000 delay-500 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                        >
                            <div className="h-64 sm:h-72 md:h-80 overflow-hidden rounded-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&auto=format"
                                    alt="Engineering Team bei der Arbeit - PROMAX Industrieanlagenbau"
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    width="800"
                                    height="600"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                    <div
                        className={`transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.2' }} className="font-light text-gray-900 mb-3 sm:mb-4">
                            Unser{' '}
                            <span className="text-[#1e3767] font-semibold">Leistungsangebot</span>
                        </h2>
                        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }} className="text-gray-600 max-w-2xl mb-8 sm:mb-12 md:mb-16">
                            Ganzheitliche Lösungen für Ihre Industrieprojekte
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
                        {branches.map((branch, index) => (
                            <div
                                key={branch.id}
                                className={`cursor-pointer hover:transform hover:scale-105 transition-all duration-700 ${
                                    isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                                onClick={() => setSelectedBranch(branch)}
                            >
                                <div className="mb-4 sm:mb-6">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 sm:mb-4 rounded-lg transition-colors duration-300 hover:bg-opacity-80"
                                         style={{ backgroundColor: '#d1d8dc' }}>
                                        {index === 0 && (
                                            <svg className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#1e3767' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Chemie Icon">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#1e3767' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Energie Icon">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#1e3767' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Pharma Icon">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                            </svg>
                                        )}
                                        {index === 3 && (
                                            <svg className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: '#1e3767' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Papier Icon">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)' }} className="font-semibold mb-3 sm:mb-4 text-gray-900">
                                        {branch.title}
                                    </h3>
                                </div>
                                <p style={{ fontSize: 'clamp(0.85rem, 1.2vw, 0.875rem)', lineHeight: '1.6' }} className="text-gray-600">
                                    {branch.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Industries Section */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
                    <div
                        className={`transition-all duration-1000 ${isVisible.additional ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: '1.2' }} className="font-light text-gray-900 mb-4 sm:mb-6">
                            Darüber hinaus bearbeiten wir Projekte in weiteren Industriezweigen
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.125rem)', lineHeight: '1.7' }}>
                            <div
                                className={`transition-all duration-1000 delay-300 text-gray-600 ${isVisible.additional ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                            >
                                <p className="mb-4 sm:mb-6">
                                    In der <strong>Lebensmittelindustrie</strong> entwickeln wir hygienische Anlagenkonzepte nach HACCP-Standards.
                                    Von der Getränkeproduktion über Molkerei- und Käsetechnik bis hin zur Fleisch- und Wurstverarbeitung
                                    realisieren wir maßgeschneiderte Produktionsanlagen.
                                </p>

                                <p className="mb-4 sm:mb-6">
                                    Im Bereich <strong>Recycling und Kreislaufwirtschaft</strong> planen wir innovative Sortier- und
                                    Aufbereitungsanlagen für Kunststoff-Recycling und Elektroschrott-Aufbereitung. Nachhaltigkeit
                                    und Ressourceneffizienz stehen dabei im Mittelpunkt unserer Planungsphilosophie.
                                </p>
                            </div>

                            <div
                                className={`transition-all duration-1000 delay-500 text-gray-600 ${isVisible.additional ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                            >
                                <p className="mb-4 sm:mb-6">
                                    Weitere Kompetenzen umfassen <strong>Bergbau und Metallurgie</strong>, die <strong>Automobilindustrie</strong>
                                    mit Fokus auf Zuliefererbetriebe sowie die <strong>Elektronik- und Halbleiterindustrie</strong>.
                                    Auch in der Kosmetik- und Consumer Goods-Branche entwickeln wir innovative Fertigungslösungen.
                                </p>

                                <p>
                                    Unsere interdisziplinären Teams passen bewährte Engineering-Methoden flexibel an spezifische
                                    Branchenanforderungen an und entwickeln innovative Lösungsansätze für individuelle technische Herausforderungen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BranchesOverview;