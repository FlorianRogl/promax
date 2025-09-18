import { useEffect, useState, useRef } from 'react';
import { Beaker, Zap, Pill, FileText, Utensils, Factory, Atom, Grid3x3 } from 'lucide-react';
import VideoSection2 from "./VideoSection2.tsx";

const Homepage = () => {
    const [yearsCount, setYearsCount] = useState(0);
    const yearRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        let count = 0;
                        const target = 25;
                        const increment = target / 50;
                        const timer = setInterval(() => {
                            count += increment;
                            if (count >= target) {
                                setYearsCount(target);
                                clearInterval(timer);
                            } else {
                                setYearsCount(Math.floor(count));
                            }
                        }, 30);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (yearRef.current) {
            observer.observe(yearRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const industries = [
        { name: 'Chemie', icon: Beaker },
        { name: 'Energie & Umwelt', icon: Zap },
        { name: 'Pharma', icon: Pill },
        { name: 'Papier & Zellstoff', icon: FileText },
        { name: 'Lebensmittel', icon: Utensils },
        { name: 'Stahl', icon: Factory },
        { name: 'Nuklear', icon: Atom },
        { name: 'Weitere Branchen', icon: Grid3x3 }
    ];

    return (
        <div className="min-h-screen overflow-x-hidden">
            {/* Only VideoSection2 */}
            <VideoSection2 />

            {/* Services Section */}
            <section className="py-20 bg-gray-50 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-promax-blue">Unsere Leistungen</h2>
                        <div className="w-24 h-1 bg-promax-orange mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Ingenieurplanung Card */}
                        <div className="relative h-80 overflow-hidden rounded-lg group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            {/* Background Image */}
                            <img
                                src="https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                                alt="Engineering team working"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Blue Overlay */}
                            <div className="absolute inset-0 bg-promax-blue opacity-80"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8 z-10">
                                <div className="mb-4">
                                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Ingenieurplanung</h3>
                                <p className="text-sm mb-4 opacity-90 leading-relaxed">
                                    Umfassende Planung und Konzeptentwicklung für Ihre Industrieanlagen mit modernsten Methoden und Tools.
                                </p>
                                <ul className="text-left space-y-2 text-sm">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 rounded-full mr-3 bg-promax-orange flex-shrink-0"></span>
                                        Anlagenkonzeption & Design
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 rounded-full mr-3 bg-promax-orange flex-shrink-0"></span>
                                        3D-Modellierung & Berechnung
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 rounded-full mr-3 bg-promax-orange flex-shrink-0"></span>
                                        Laserscantechnologie
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Operative Projektunterstützung Card */}
                        <div className="relative h-80 overflow-hidden rounded-lg group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            {/* Background Image */}
                            <img
                                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                                alt="Business team meeting"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Orange Overlay */}
                            <div className="absolute inset-0 bg-promax-orange opacity-80"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8 z-10">
                                <div className="mb-4">
                                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Operative Projektunterstützung</h3>
                                <p className="text-sm mb-4 opacity-90 leading-relaxed">
                                    Individuelle Projektunterstützung von der Planung bis zur praktischen Umsetzung.
                                </p>
                                <ul className="text-left space-y-2 text-sm">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 rounded-full mr-3 bg-white flex-shrink-0"></span>
                                        Projektabwicklung
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 rounded-full mr-3 bg-white flex-shrink-0"></span>
                                        Ausschreibung und Beschaffung
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 rounded-full mr-3 bg-white flex-shrink-0"></span>
                                        Fachbauüberwachung
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full -mr-48 -mt-48 opacity-5 bg-promax-orange"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full -ml-48 -mb-48 opacity-5 bg-promax-blue"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-promax-blue">Unsere Branchen</h2>
                        <div className="w-24 h-1 mx-auto mb-6 bg-promax-orange"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Mit <span ref={yearRef} className="font-bold text-promax-blue">{yearsCount}</span> jahrzehntelanger Expertise bedienen wir anspruchsvolle Industrien und setzen hÃ¶chste Standards in Qualität und Sicherheit.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {industries.map((industry) => {
                            const Icon = industry.icon;
                            return (
                                <div key={industry.name} className="text-center">
                                    <div className="w-32 h-32 mx-auto mb-4 bg-white shadow-lg rounded-lg flex items-center justify-center">
                                        <Icon className="w-16 h-16 text-promax-blue" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-promax-blue">{industry.name}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="diagonal-clip py-32 relative bg-promax-blue">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ihr Partner für anspruchsvollen Industrieanlagenbau
                    </h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        Mit jahrzehntelanger Branchenkenntnis und Leidenschaft für Ihre Projekte
                    </p>
                    <button className="bg-promax-orange text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-2xl">
                        Projekt anfragen
                    </button>
                </div>
            </section>

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
                
                .border-b-promax-orange {
                  border-bottom-color: #d97539;
                }
                
                .diagonal-clip {
                  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
                }
                
                .nav-link {
                  position: relative;
                }
                
                .nav-link::after {
                  content: '';
                  position: absolute;
                  bottom: -5px;
                  left: 0;
                  width: 0;
                  height: 3px;
                  background-color: #d97539;
                  transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                  width: 100%;
                }
                
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                }
                
                .floating {
                  animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Homepage;