'use client';

import React, { useMemo, useEffect } from 'react';
import { ArrowLeft, Beaker, FileText, Zap } from 'lucide-react';
import { useRouter } from '@/i18n/navigation';
import { useSearchParams } from 'next/navigation';

// TypeScript Interfaces
export interface ProjectSection {
    title: string;
    content: string;
}

export interface ProjectContent {
    sections: ProjectSection[];
}

export interface Project {
    id: number;
    title: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    excerpt: string;
    content: ProjectContent;
    tags: string[];
    icon?: React.ReactNode;
}

// Real project data based on your documents
const realProjects: Project[] = [
    {
        id: 1,
        title: "Säurefeste Auskleidungen mit zusätzlichen Abriebfestigkeitseigenschaften",
        category: "Chemische Industrie",
        date: "2024-03-15",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop",
        excerpt: "Entwicklung einer technisch und wirtschaftlich optimalen Lösung für einen 80 m³ Pufferbehälter mit chemisch aggressiven Abwässern bei Temperaturen bis 85°C.",
        icon: <Beaker className="w-5 h-5" />,
        content: {
            sections: [
                {
                    title: "1. Aufgabenstellung",
                    content: "In einem Pufferbehälter werden chemische Abwässer gesammelt. Mittels Direktdampfbeheizung werden die Abwässer auf Temperaturen bis 85 °C gebracht. Es wird im Behälter der pH Wert auf einen Wert von ca. 2 eingestellt (schwefelsauer). Eine kontinuierliche Durchmischung des Behälters ist durch ein Rührwerk gewährleistet.\n\nDas Behältervolumen ist 80 m³, um eine gewisse Pufferkapazität zu ermöglichen. Aus aufstellungstechnischen Gründen ist der Behälter mit einer Höhe der Oberkante von 4 Meter begrenzt. Dadurch ergibt sich eine Längenausdehnung des Behälters von ca. 6 mm.\n\nDie örtlich bedingten Umstände ergaben, dass ein betonierter Behälter die wirtschaftlichste Lösung darstellt. Um eine Behälterform mit wenig nichtdurchströmten Bereichen zu erhalten, ist die Auswahl auf ein 10 Eck Polygon in Fertigteilbauweise gefallen.\n\nDurch die chemische Aggressivität der Abwässer ist der Beton zu schützen. Darüber hinaus sind die im Abwasser nicht gelösten Inhaltsstoffe zu berücksichtigen, die einen Verschleiß verursachen."
                },
                {
                    title: "2. Technische Beschreibung des Systems und dessen Alternativen",
                    content: "Alternativvarianten, die bei der technischen Prüfung zur Auswahl stehen:\na) Stahlbehälter mit Innengummierung\nb) Betonbehälter mit\n   1) Auskleidung mit PP-Platten\n   2) Auskleidung mit glasfaserverstärktem Kunststoff und chemisch beständigem Inliner\n\nAd a) Stahlbehälter in Dimensionen, die einen Durchmesser von 4 m überschreiten, haben einen erhöhten Vorfertigungsaufwand. Deshalb wären zwei Behälter in kleineren Dimensionen umzusetzen gewesen, wobei sich der Aufwand der Rührtechnik verdoppelt. Verschleißschutz ist keiner gegeben.\n\nAd b)1) Auskleidungen mit PP-Platten sind lediglich bis max. 80 °C dauertemperaturbelastbar.\n\nAd b)2) Der temperaturbeständige GFK mit Inliner hat keinen Abriebschutz und bietet überdies auch nur einen bedingten chemischen Schutz."
                },
                {
                    title: "Technisch umgesetzte Ausführung",
                    content: "Auskleidung mit Gummierung und säurefester Vormauerung.\n\nDer Schichtaufbau dieses Säureschutzes beinhaltet ab der Betonwand:\n• leitfähige Spachtel\n• Gummierung Stellabutyl 2 mm\n• Vormauerung mit säurefesten Steinen 100 mm und Kitt auf Furanharzbasis\n\nDie Mauerung übernimmt somit zwei Funktionen: einerseits den Abriebschutz und andererseits einen zusätzlichen Temperaturschutz besonders an den Dampfeinleitstellen.\n\nBesonderes Augenmerk ist auf das Verfugen der Mauerung zu legen, da ein erhöhter Aufwand für den Zuschnitt der Steine zu beachten ist. Ein spezielles Detail sind die Wanddurchführungen. Besonders ist auch die Erdung des Behälters zu berücksichtigen."
                },
                {
                    title: "3. Wirtschaftlichkeit",
                    content: "Unter den örtlichen Gegebenheiten konnte neben der technisch besten Lösung auch die ausgeführte Umsetzung wirtschaftlich am günstigsten reüssieren."
                },
                {
                    title: "4. Zusammenfassung",
                    content: "Die Erkenntnis der intensiven Marktanalyse ist, dass zum Thema Säureschutz mehrere Lösungsansätze für Säureschutzmaßnahmen im Bereich des industriellen Anlagenbaus mit verschiedenen Herstellern angeboten werden.\n\nDies bietet einen großen Vorteil der Auswahlmöglichkeit. Um jedoch für einen bestimmten Anwendungsfall die technisch und wirtschaftlichste Lösung zu finden ist eine exakte Beschreibung der Aufgabenstellung erforderlich."
                }
            ]
        },
        tags: ["Säureschutz", "Betonbau", "Chemische Industrie", "Abriebschutz"]
    },
    {
        id: 2,
        title: "3D-Visualisiert Konstruieren & Planen mit Inventor",
        category: "Engineering & CAD",
        date: "2024-02-20",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        excerpt: "Erweiterte 3D-Konstruktionen und Berechnungen mit Inventor für Papier-/Zellstoff-, Kunststoff-, Automobil-, Fördertechnik und Pharmazie-Bereiche.",
        icon: <FileText className="w-5 h-5" />,
        content: {
            sections: [
                {
                    title: "3D-Visualisierung als MUST HAVE",
                    content: "Da die 3D-Visualisierung in der technischen Planung ein MUST HAVE geworden ist, erweitert PROMAX das Angebotsspektrum mit 3D Konstruktion in Inventor.\n\nUnser Ziel ist es die Wettbewerbsfähigkeit unserer Kunden durch Flexibilität und schnellere Reaktion auf deren Wünsche mittels 3D Planung in Inventor zu erhöhen."
                },
                {
                    title: "Unser Angebot",
                    content: "Konstruktionen und Berechnungen in den Bereichen von Papier-/Zellstoff-, Kunststoff-, Automobil-, Fördertechnik und Pharmazie über detaillierte Anlagenkonstruktionen bis hin zum Maschinenbau.\n\n• Neu-, Detail- und Variantenkonstruktionen\n• Einzel- bzw. Fertigungszeichnungen in 2D und 3D\n• Zusammenbau- Montage- und Explosionszeichnungen in 2D und 3D\n• 3D Körper zur Weiterbearbeitung in Berechnungs- und Simulationsprogrammen\n• Stücklisten und Belastungsanalysen von Einzelbauteilen nach ANSYS"
                },
                {
                    title: "Warum 3D-Inventor?",
                    content: "3D Darstellungen spielen bereits in der Projektierungs-Phase eine wichtige Rolle. Aussagekräftige Präsentationen und Konstruktionen in 3D erleichtern den Einblick in ein technisches Projekt, wodurch bessere Entscheidungsgrundlagen geschaffen werden.\n\nKonstruktionszyklen verkürzen sich, da vor allem div. Nebenkonstruktionen, Änderungen und Korrekturen schneller umgewandelt werden können.\n\nEin weiterer Umstand, der für eine 3D Planung spricht, ist die mehrfache Nutzbarkeit der Daten von 3D Modellen. Die Daten können sowohl als Geometrie für Abmessungen, als auch für Funktions- und Kollisionsanalysen, Automatisierungsprozesse, Gewichts- und Festigkeitsberechnungen und wirtschaftliche Kalkulationen verwendet werden."
                },
                {
                    title: "Dateiaustausch und Kompatibilität",
                    content: "Inventor bietet einen einfachen Austausch von Dateitypen, da die gängigsten Schnittstellen für Import und Export bereits integriert sind.\n\nImport:\n• 2D *.dwg (AutoCAD) und *.dxf für Skizzen\n• 3D *.step, *.iges, *.sat, *.prt (Pro/Engineer)\n\nExport:\n• *.iges (ANSYS), *.sat, *.step\n• *.stl, *.xgl, *.zgl\n• *.bmp"
                }
            ]
        },
        tags: ["3D-CAD", "Inventor", "Engineering", "Konstruktion"]
    },
    {
        id: 3,
        title: "3D-Planungen im Anlagenbau",
        category: "Anlagenbau",
        date: "2024-01-10",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        excerpt: "Leistungsfähige 3D-Visualisierung mit AVEVA VANTAGE PDMS und AUTODESK ACAD PLANT 3D für komplexe Anlagenplanungen.",
        icon: <Zap className="w-5 h-5" />,
        content: {
            sections: [
                {
                    title: "Moderne 3D-Planungstools",
                    content: "Neben herkömmlichen 2D-CAD-Systemen führen wir seit 2003 mit AVEVA VANTAGE PDMS und seit 2013 mit AUTODESK ACAD PLANT 3D überaus leistungsfähige Tools zur 3D-Visualisierung von Planungen im Anlagenbau.\n\nDie umfassende Funktionalität der Software macht sie vielseitig einsetzbar und einfach handhabbar. Damit können komplexe Anlagen 3-dimensional dargestellt und 2D-Pläne automatisch generiert werden."
                },
                {
                    title: "Datenbankbasierte Zusammenarbeit",
                    content: "Der Datenbank-basierende Aufbau ermöglicht es mehreren Planern gleichzeitig an ein und demselben 3D-Modell zu planen, was zu einer Effizienz-Steigerung in der Planung führt. Durch die Datenintegrität der Systeme werden Änderungen oder Anpassungen der Planung zu jeder Zeit im 3D-Modell aktualisiert.\n\nDie der 3D-Planung zugrundeliegende Datenbank enthält u.a. geometrische Informationen zu allen eingeplanten Bauteilen, sodass die Kollisionsüberprüfung der Strukturen automatisch durchgeführt werden kann."
                },
                {
                    title: "Automatisierte Dokumentenerstellung",
                    content: "Die automatisierte Verknüpfung der verschiedenen Planungswerkzeuge erhöht die Genauigkeit, der aus dem System generierbaren Fertigungs-, Montage- und Materialwirtschaftsdokumente. Gemeinsam mit unseren Kunden entwickeln wir Ausgabedokumente entsprechend spezifischer inhaltlicher und formatbezogener Anforderungen.\n\nDie Ausspielung von 2D-Dokumenten kann grundsätzlich in allen gängigen Zeichnungsformaten erfolgen."
                },
                {
                    title: "Zukunftssichere Lösungen",
                    content: "Für den Fall späterer Umbauten an der Anlage bietet die 3D-Planung eine gute Planungsbasis für Betreiber und Instandhalter.\n\nFür die Kompatibilität mit anderen Softwareprodukten sind auch kundenspezifische Datenformate generierbar. Damit wird für die weitere Bearbeitung der Daten nicht ausschließlich die Originalsoftware benötigt."
                }
            ]
        },
        tags: ["AVEVA PDMS", "AutoCAD Plant 3D", "Anlagenplanung", "3D-Visualisierung"]
    }
];

const Projektberichte: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const projectId = searchParams.get('project');

    const selectedProject = useMemo<Project | null>(() => {
        if (!projectId) return null;
        return realProjects.find(p => p.id === parseInt(projectId)) ?? null;
    }, [projectId]);

    useEffect(() => {
        if (!projectId || selectedProject === null) {
            // If no project ID or not found, redirect to company page
            router.push('/unternehmen');
        }
    }, [projectId, selectedProject, router]);

    const handleBackToCompany = () => {
        router.push('/unternehmen');
    };

    const handleRelatedProject = (id: number) => {
        router.push(`/projektberichte?project=${id}`);
    };

    if (!selectedProject) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1e3767] mx-auto mb-4"></div>
                    <p className="text-gray-600">Projekt wird geladen...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Professional Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <button
                        onClick={handleBackToCompany}
                        className="inline-flex items-center text-[#1e3767] hover:text-[#2a4a7f] transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Zurück zur Übersicht</span>
                    </button>

                    <div className="mb-6">
                        <div className="flex items-center mb-4">
                            <span className="px-3 py-1 bg-[#1e3767] text-white rounded-full text-sm font-medium">
                                {selectedProject.category}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                            {selectedProject.title}
                        </h1>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-6 py-8">
                {/* Hero Image */}
                <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
                    <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-64 object-cover"
                    />
                </div>

                {/* Content Sections */}
                <div className="bg-white">
                    <div className="prose prose-lg max-w-none">
                        {selectedProject.content.sections.map((section: ProjectSection, index: number) => (
                            <div key={index} className="mb-12">
                                <h2 className="text-2xl font-semibold text-[#1e3767] mb-6 pb-3 border-b border-gray-200">
                                    {section.title}
                                </h2>
                                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {section.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                            Themen
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map((tag: string, index: number) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Related Projects */}
                <div className="mt-12 bg-gray-50 rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        Weitere Projekte
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {realProjects
                            .filter(p => p.id !== selectedProject.id)
                            .slice(0, 2)
                            .map((project) => (
                                <div
                                    key={project.id}
                                    className="flex items-center gap-4 p-4 bg-white rounded-lg cursor-pointer hover:shadow-md transition-all duration-200 group"
                                    onClick={() => handleRelatedProject(project.id)}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900 truncate group-hover:text-[#1e3767] transition-colors">
                                            {project.title}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {project.category}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </main>

            <style>{`
                .prose {
                    max-width: none;
                }

                .prose h2 {
                    margin-top: 0;
                    margin-bottom: 1.5rem;
                }

                .prose p {
                    margin-bottom: 1rem;
                }
            `}</style>
        </div>
    );
};

export default Projektberichte;
