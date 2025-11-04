import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import tech1 from '../assets/tech1.jpg';
import tech2 from '../assets/ROHR2.jpg';
import tech3 from '../assets/tech3.jpg';
import tech4 from '../assets/tech4.jpg';



const Technologies = () => {
    const { t } = useTranslation();

    useEffect(() => {
        // Scroll to section if hash exists in URL
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 300);
            }
        }
    }, []);

    return (
        <>
            <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif" }}>

                {/* Hero Section with Parallax */}
                <section
                    id="hero-section"
                    className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(30, 55, 103, 0.7), rgba(30, 55, 103, 0.7)), url('https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=1600&h=900&fit=crop')`,
                        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>

                    <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                        <div className="animate-fade-in-up">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-white mb-4 sm:mb-6">
                                {t('technologies.heroTitle')}
                            </h1>
                            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-[#d97539] leading-relaxed">
                                {t('technologies.heroSubtitle')}
                            </p>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                        </div>
                    </div>
                </section>

                {/* Main Technologies Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

                        {/* Planungssoftware */}
                        <div id="planungssoftware" className="mb-24 pt-20 -mt-20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                {/* Content */}
                                <div>
                                    <div className="flex items-center mb-8">
                                        <div className="w-16 h-16 bg-[#1e3767] rounded-xl flex items-center justify-center mr-6">
                                            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-4xl font-light text-[#1e3767] mb-2">{t('technologies.planningTitle')}</h2>
                                            <div className="w-16 h-1 bg-[#d97539]"></div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        {t('technologies.planningIntro')}
                                    </p>

                                    <div className="mb-8">
                                        <h3 className="text-2xl font-semibold text-[#1e3767] mb-4">{t('technologies.planningFeaturesTitle')}</h3>
                                        <ul className="space-y-2 text-gray-600 text-lg">
                                            <li className="flex items-start">
                                                <span className="text-[#d97539] mr-2">•</span>
                                                {t('technologies.planningFeature1')}
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#d97539] mr-2">•</span>
                                                {t('technologies.planningFeature2')}
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#d97539] mr-2">•</span>
                                                {t('technologies.planningFeature3')}
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#d97539] mr-2">•</span>
                                                {t('technologies.planningFeature4')}
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#d97539] mr-2">•</span>
                                                {t('technologies.planningFeature5')}
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#d97539] mr-2">•</span>
                                                {t('technologies.planningFeature6')}
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-semibold text-[#1e3767] mb-4">{t('technologies.planningProgramsTitle')}</h3>
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-600 text-lg">
                                            <div>• AutoCAD</div>
                                            <div>• E3D</div>
                                            <div>• AutoCAD Plant3D</div>
                                            <div>• Point Cloud Manager</div>
                                            <div>• Advance Steel</div>
                                            <div>• Edge Wise</div>
                                            <div>• Inventor</div>
                                            <div>• ROHR2</div>
                                            <div>• Navisworks</div>
                                            <div>• ROHR2fesu</div>
                                            <div>• Recap</div>
                                            <div>• ROHR2flange</div>
                                            <div>• 3ds Max</div>
                                            <div>• SINETZ</div>
                                            <div>• Faro Scene</div>
                                            <div>• PROBAD</div>
                                            <div>• Intergraph Smart 3D</div>
                                            <div>• Software-Erweiterungen</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Images */}
                                <div className="space-y-4">
                                    <img
                                        src={tech1}
                                        alt="Betonproduktionslinie - 3D Modellierung"
                                        className="w-full h-[300px] object-cover rounded-2xl shadow-2xl"
                                        loading="lazy"
                                    />
                                    <img
                                        src={tech2}
                                        alt="ROHR2 Rohrleitungsberechnung"
                                        className="w-full h-auto rounded-2xl shadow-2xl"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop';
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Separator */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-24"></div>

                        {/* 3D-Laserscanning */}
                        <div id="laserscanning" className="mb-24 pt-20 -mt-20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Image */}
                                <div className="lg:order-1">
                                    <img
                                        src={tech3}
                                        alt="3D Laserscanning auf der Baustelle"
                                        className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content */}
                                <div className="lg:order-2">
                                    <div className="flex items-center mb-8">
                                        <div className="w-16 h-16 bg-[#d97539] rounded-xl flex items-center justify-center mr-6">
                                            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-4xl font-light text-[#1e3767] mb-2">{t('technologies.scanningTitle')}</h2>
                                            <div className="w-16 h-1 bg-[#d97539]"></div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                        {t('technologies.scanningDesc1')}
                                    </p>

                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        {t('technologies.scanningDesc2')}
                                    </p>

                                    <div>
                                        <h3 className="text-2xl font-semibold text-[#1e3767] mb-4">{t('technologies.scanningSpecsTitle')}</h3>
                                        <ul className="space-y-2 text-gray-600 text-lg">
                                            <li className="flex items-start">
                                                <span className="text-[#d97539] mr-2">•</span>
                                                {t('technologies.scanningSpec1')}
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#d97539] mr-2">•</span>
                                                {t('technologies.scanningSpec2')}
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#d97539] mr-2">•</span>
                                                {t('technologies.scanningSpec3')}
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#d97539] mr-2">•</span>
                                                {t('technologies.scanningSpec4')}
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#d97539] mr-2">•</span>
                                                {t('technologies.scanningSpec5')}
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-[#d97539] mr-2">•</span>
                                                {t('technologies.scanningSpec6')}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Separator */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-24"></div>

                        {/* Virtual & Augmented Reality */}
                        <div id="virtual-reality" className="pt-20 -mt-20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Content */}
                                <div>
                                    <div className="flex items-center mb-8">
                                        <div className="w-16 h-16 bg-[#1e3767] rounded-xl flex items-center justify-center mr-6">
                                            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h2 className="text-4xl font-light text-[#1e3767] mb-2">{t('technologies.vrTitle')}</h2>
                                            <div className="w-16 h-1 bg-[#d97539]"></div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        {t('technologies.vrIntro')}
                                    </p>

                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold text-[#1e3767] mb-3">{t('technologies.vrSubtitle')}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {t('technologies.vrDesc')}
                                        </p>
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold text-[#1e3767] mb-3">{t('technologies.arSubtitle')}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {t('technologies.arDesc')}
                                        </p>
                                    </div>

                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {t('technologies.vrConclusion')}
                                    </p>
                                </div>

                                {/* Image */}
                                <div>
                                    <img
                                        src={tech4}
                                        alt="Ingenieur nutzt Augmented Reality Headset"
                                        className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&h=600&fit=crop';
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

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
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
            `}</style>
        </>
    );
};

export default Technologies;