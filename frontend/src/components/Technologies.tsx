import React, { useState, useEffect, useRef } from 'react';
import {
    Cpu,
    Scan,
    Eye,
    ArrowRight
} from 'lucide-react';
import video from '../assets/JUBU_Video_Mit einem Übergang.mp4';

const Technologies = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [activeTech, setActiveTech] = useState(0);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    const technologies = [
        {
            title: "Planungssoftware",
            icon: Cpu,
            description: "Modernste CAD- und BIM-Software für präzise 3D-Modellierung und Konstruktion komplexer Industrieanlagen. Wir setzen auf bewährte Lösungen wie AutoCAD Plant 3D, Inventor und weitere spezialisierte Anwendungen für höchste Planungsqualität.",
            features: [
                "AutoCAD Plant 3D für Anlagenplanung",
                "Autodesk Inventor für Maschinenbau",
                "3D-Modellierung und Simulation",
                "Parametrische Konstruktion",
                "Kollisionsprüfung und Optimierung",
                "Automatisierte Zeichnungsableitung"
            ],
            image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            title: "LaserScan-Technologie",
            icon: Scan,
            description: "Hochpräzise 3D-Vermessung bestehender Anlagen mit modernster Laserscanning-Technologie. Millimetergenaue Bestandsaufnahme als Grundlage für Umbau-, Erweiterungs- und Modernisierungsprojekte.",
            features: [
                "3D-Punktwolken-Generierung",
                "Millimeter-Genauigkeit",
                "Reverse Engineering",
                "Digitale Bestandsdokumentation",
                "As-built Modellierung",
                "Vermessung komplexer Geometrien"
            ],
            image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            title: "Virtuelle Realität",
            icon: Eye,
            description: "Immersive VR-Technologie für realistische Anlagenvisualisierung, Mitarbeiterschulungen und Designreviews. Erleben Sie Ihre Industrieanlage bereits vor dem ersten Spatenstich in fotorealistischer Qualität.",
            features: [
                "Immersive Anlagenbegehung",
                "Design Review in VR",
                "Schulungssimulatoren",
                "Sicherheitstraining",
                "Wartungsszenarien",
                "Kollaborative Planung"
            ],
            image: "https://images.pexels.com/photos/3762940/pexels-photo-3762940.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Video Section */}
            <section className="relative h-screen overflow-hidden">
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                >
                    <source src={video} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">
                        Modernste Technologien
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                        Präzision und Innovation im Industrieanlagenbau
                    </p>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-promax-blue">Unsere Technologien</h2>
                        <div className="w-20 h-1 bg-promax-orange mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                            Innovative Technologien für präzise Planung und effiziente Projektabwicklung.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
                        {/* Technology Selection */}
                        <div className="lg:w-2/5">
                            <div className="space-y-3">
                                {technologies.map((tech, index) => {
                                    const Icon = tech.icon;
                                    const isActive = activeTech === index;

                                    return (
                                        <div
                                            key={index}
                                            onClick={() => setActiveTech(index)}
                                            className={`p-6 border-l-4 cursor-pointer transition-all duration-200 ${
                                                isActive
                                                    ? 'bg-promax-blue text-white border-promax-blue shadow-md'
                                                    : 'bg-gray-50 hover:bg-gray-100 text-gray-800 border-gray-300'
                                            }`}
                                        >
                                            <div className="flex items-center">
                                                <div className={`w-12 h-12 rounded ${
                                                    isActive ? 'bg-white text-promax-blue' : 'bg-promax-blue text-white'
                                                } flex items-center justify-center mr-4 flex-shrink-0`}>
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-semibold mb-1">{tech.title}</h3>
                                                    <p className={`text-sm ${
                                                        isActive ? 'text-gray-200' : 'text-gray-600'
                                                    }`}>
                                                        Professionelle Lösungen für moderne Industrieplanung
                                                    </p>
                                                </div>
                                                <ArrowRight className={`w-5 h-5 transition-transform duration-200 ${
                                                    isActive ? 'rotate-90 text-white' : 'text-gray-400'
                                                }`} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Technology Details */}
                        <div className="lg:w-3/5">
                            <div className="bg-white">
                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-promax-blue rounded flex items-center justify-center mr-4">
                                            {React.createElement(technologies[activeTech].icon, {
                                                className: "w-6 h-6 text-white"
                                            })}
                                        </div>
                                        <h3 className="text-2xl font-bold text-promax-blue">
                                            {technologies[activeTech].title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-700 mb-8 leading-relaxed">
                                        {technologies[activeTech].description}
                                    </p>

                                    {/* Features */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-promax-blue mb-4">
                                            Leistungsmerkmale:
                                        </h4>
                                        <div className="space-y-3">
                                            {technologies[activeTech].features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center text-gray-700">
                                                    <div className="w-2 h-2 bg-promax-blue rounded-full mr-3 flex-shrink-0"></div>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}




            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
                
                .bg-promax-blue {
                  background-color: #1e3767;
                }
                
                .bg-promax-orange {
                  background-color: #d97539;
                }
                
                .text-promax-blue {
                  color: #1e3767;
                }
                
                .text-promax-orange {
                  color: #d97539;
                }
                
                .border-promax-orange {
                  border-color: #d97539;
                }
                
                * {
                  font-family: 'Inter', sans-serif;
                }
            `}</style>
        </div>
    );
};

export default Technologies;