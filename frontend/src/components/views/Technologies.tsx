import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import tech1 from '../../assets/tech1_gekauft.jpg';
import tech3 from '../../assets/3dLaser_gekauft.jpg';
import tech4 from '../../assets/vrBrilleEcht.jpg';
import titelbild from '../../assets/neuesBildTechnologie.jpg';

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
                    const offset = window.innerWidth < 768 ? 60 : 80;
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
        <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif" }}>

            {/* Hero Section */}
            <section
                id="hero-section"
                className="relative w-full flex flex-col items-center justify-center bg-cover bg-center"
                style={{
                    height: '115vh',
                    minHeight: '115vh',
                    backgroundImage: `linear-gradient(rgba(30, 55, 103, 0.7), rgba(30, 55, 103, 0.7)), url('${titelbild}')`,
                    backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>

                <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
                    <div className="opacity-0 translate-y-8 animate-fade-in-up">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-light text-white mb-3 sm:mb-4 md:mb-6 leading-tight" style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}>
                            {t('technologies.heroTitle')}
                            <span className="block font-semibold text-[#d97539] mt-1 sm:mt-2" style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}>{t('technologies.heroSubtitle')}</span>
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

            {/* Main Technologies Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Planungssoftware */}
                    <div id="planungssoftware" className="mb-16 sm:mb-20 md:mb-24 pt-16 sm:pt-20 -mt-16 sm:-mt-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                            {/* Content - Links auf Desktop */}
                            <div className="order-2 lg:order-1">
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left mb-6 sm:mb-8">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#1e3767] rounded-lg sm:rounded-xl flex items-center justify-center mb-4 lg:mb-0 lg:mr-4 lg:mr-6 flex-shrink-0">
                                        <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0 w-full lg:w-auto">
                                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#1e3767] mb-3 lg:mb-2 break-words">
                                            {t('technologies.planningTitle')}
                                        </h2>
                                        <div className="w-16 sm:w-20 h-1 bg-[#d97539] mx-auto lg:mx-0"></div>
                                    </div>
                                </div>

                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 break-words">
                                    {t('technologies.planningIntro')}
                                </p>

                                <div className="mb-6 sm:mb-8">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1e3767] mb-3 sm:mb-4 break-words">
                                        {t('technologies.planningFeaturesTitle')}
                                    </h3>
                                    <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-600">
                                        <li className="flex items-start">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span className="break-words">{t('technologies.planningFeature1')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span className="break-words">{t('technologies.planningFeature2')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span className="break-words">{t('technologies.planningFeature3')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span className="break-words">{t('technologies.planningFeature4')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span className="break-words">{t('technologies.planningFeature5')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span className="break-words">{t('technologies.planningFeature6')}</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1e3767] mb-3 sm:mb-4 break-words">
                                        {t('technologies.planningProgramsTitle')}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 text-sm sm:text-base md:text-lg text-gray-600">
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>AutoCAD</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>AutoCAD Plant3D</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>Advance Steel</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>Inventor</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>Navisworks</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>Recap</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>3ds Max</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>Faro Scene</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>Intergraph Smart 3D</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>E3D</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>Point Cloud Manager</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>Edge Wise</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>ROHR2</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>ROHR2fesu</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>ROHR2flange</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>SINETZ</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>PROBAD</span>
                                        </div>
                                        <div className="flex items-start break-words">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span>Software-Erweiterungen</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image - Rechts auf Desktop */}
                            <div className="order-1 lg:order-2">
                                <img
                                    src={tech1}
                                    alt="3D CAD Planungssoftware im Einsatz"
                                    className="w-full h-48 sm:h-64 md:h-80 lg:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop';
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Separator */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-16 sm:mb-20 md:mb-24"></div>

                    {/* Berechnungssoftware */}


                    {/* Separator */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-16 sm:mb-20 md:mb-24"></div>

                    {/* 3D-Laserscanning */}
                    <div id="laserscanning" className="mb-16 sm:mb-20 md:mb-24 pt-16 sm:pt-20 -mt-16 sm:-mt-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                            {/* Image - Links auf Desktop */}
                            <div className="order-1 lg:order-1">
                                <img
                                    src={tech3}
                                    alt="3D Laserscanning Technologie"
                                    className="w-full h-48 sm:h-64 md:h-80 lg:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop';
                                    }}
                                />
                            </div>

                            {/* Content - Rechts auf Desktop */}
                            <div className="order-2 lg:order-2">
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left mb-6 sm:mb-8">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#1e3767] rounded-lg sm:rounded-xl flex items-center justify-center mb-4 lg:mb-0 lg:mr-4 lg:mr-6 flex-shrink-0">
                                        <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0 w-full lg:w-auto">
                                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#1e3767] mb-3 lg:mb-2 break-words">
                                            {t('technologies.scanningTitle')}
                                        </h2>
                                        <div className="w-16 sm:w-20 h-1 bg-[#d97539] mx-auto lg:mx-0"></div>
                                    </div>
                                </div>

                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 break-words">
                                    {t('technologies.scanningDesc1')}
                                </p>

                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 break-words">
                                    {t('technologies.scanningDesc2')}
                                </p>

                                <div>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1e3767] mb-3 sm:mb-4 break-words">
                                        {t('technologies.scanningSpecsTitle')}
                                    </h3>
                                    <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-600">
                                        <li className="flex items-start">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span className="break-words">{t('technologies.scanningSpec1')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span className="break-words">{t('technologies.scanningSpec2')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span className="break-words">{t('technologies.scanningSpec3')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span className="break-words">{t('technologies.scanningSpec4')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span className="break-words">{t('technologies.scanningSpec5')}</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#d97539] mr-2 flex-shrink-0">•</span>
                                            <span className="break-words">{t('technologies.scanningSpec6')}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Separator */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-16 sm:mb-20 md:mb-24"></div>

                    {/* Virtual & Augmented Reality */}
                    <div id="virtual-reality" className="pt-16 sm:pt-20 -mt-16 sm:-mt-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                            {/* Image */}


                            {/* Content */}
                            <div className="lg:order-1">
                                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left mb-6 sm:mb-8">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#1e3767] rounded-lg sm:rounded-xl flex items-center justify-center mb-4 lg:mb-0 lg:mr-4 lg:mr-6 flex-shrink-0">
                                        <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0 w-full lg:w-auto">
                                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#1e3767] mb-3 lg:mb-2 break-words">
                                            {t('technologies.vrTitle')}
                                        </h2>
                                        <div className="w-16 sm:w-20 h-1 bg-[#d97539] mx-auto lg:mx-0"></div>
                                    </div>
                                </div>

                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 break-words">
                                    {t('technologies.vrIntro')}
                                </p>

                                <div className="mb-6">
                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#1e3767] mb-3 break-words">
                                        {t('technologies.vrSubtitle')}
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed break-words">
                                        {t('technologies.vrDesc')}
                                    </p>
                                </div>

                                <div className="mb-6 sm:mb-8">
                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#1e3767] mb-3 break-words">
                                        {t('technologies.arSubtitle')}
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed break-words">
                                        {t('technologies.arDesc')}
                                    </p>
                                </div>

                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed break-words">
                                    {t('technologies.vrConclusion')}
                                </p>
                            </div>
                            <div className="lg:order-2">
                                <img
                                    src={tech4}
                                    alt="Ingenieur nutzt Augmented Reality Headset"
                                    className="w-full h-48 sm:h-64 md:h-80 lg:h-[500px] object-cover rounded-xl sm:rounded-2xl shadow-2xl"
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
            {/* Keyframe Animation */}
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
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                
                /* Besserer Textumbruch */
                * {
                    word-break: normal;
                    overflow-wrap: normal;
                    hyphens: none;
                }
            `}</style>
        </div>
    );
};

export default Technologies;