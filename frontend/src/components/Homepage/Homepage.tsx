import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Beaker, Zap, Pill, FileText, Utensils, Factory, Atom, Grid3x3 } from 'lucide-react';
import VideoSection2 from "./VideoSection2.tsx";

const Homepage = () => {
    const yearRef = useRef(null);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const industries = [
        { name: t('homepage.industry.chemistry'), icon: Beaker },
        { name: t('homepage.industry.energy'), icon: Zap },
        { name: t('homepage.industry.pharma'), icon: Pill },
        { name: t('homepage.industry.paper'), icon: FileText },
        { name: t('homepage.industry.food'), icon: Utensils },
        { name: t('homepage.industry.steel'), icon: Factory },
        { name: t('homepage.industry.nuclear'), icon: Atom },
        { name: t('homepage.industry.other'), icon: Grid3x3 }
    ];

    return (
        <div className="min-h-screen overflow-x-hidden" style={{
            wordBreak: 'normal',
            overflowWrap: 'normal',
            hyphens: 'none'
        }}>
            {/* Only VideoSection2 */}
            <VideoSection2 />

            {/* Services Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-promax-blue break-words" style={{ hyphens: 'none' }}>
                            {t('homepage.servicesTitle')}
                        </h2>
                        <div className="w-16 sm:w-20 md:w-24 h-1 bg-promax-orange mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                        {/* Ingenieurplanung Card */}
                        <div
                            onClick={() => navigate('/Leistungen#ingenieurplanung')}
                            className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-lg group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            {/* Background Image */}
                            <img
                                src="https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                                alt="Engineering team working"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Blue Overlay */}
                            <div className="absolute inset-0 bg-promax-blue opacity-80"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 sm:p-6 md:p-8 z-10">
                                <div className="mb-3 sm:mb-4">
                                    <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 break-words px-2 leading-tight" style={{ hyphens: 'none' }}>
                                    {t('homepage.engineeringTitle')}
                                </h3>
                                <p className="text-xs sm:text-sm mb-3 sm:mb-4 opacity-90 leading-relaxed break-words px-2" style={{ hyphens: 'none' }}>
                                    {t('homepage.engineeringDesc')}
                                </p>
                                <ul className="text-left space-y-1.5 sm:space-y-2 text-xs sm:text-sm w-full max-w-xs">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mr-2 sm:mr-3 bg-promax-orange flex-shrink-0 mt-1"></span>
                                        <span className="break-words flex-1" style={{ hyphens: 'none' }}>{t('homepage.engineeringFeature1')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mr-2 sm:mr-3 bg-promax-orange flex-shrink-0 mt-1"></span>
                                        <span className="break-words flex-1" style={{ hyphens: 'none' }}>{t('homepage.engineeringFeature2')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mr-2 sm:mr-3 bg-promax-orange flex-shrink-0 mt-1"></span>
                                        <span className="break-words flex-1" style={{ hyphens: 'none' }}>{t('homepage.engineeringFeature3')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Operative Projektunterstützung Card */}
                        <div
                            onClick={() => navigate('/Leistungen#operative-projektstuetzung')}
                            className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-lg group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            {/* Background Image */}
                            <img
                                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                                alt="Business team meeting"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Orange Overlay */}
                            <div className="absolute inset-0 bg-promax-orange opacity-80"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 sm:p-6 md:p-8 z-10">
                                <div className="mb-3 sm:mb-4">
                                    <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 break-words px-2 leading-tight" style={{ hyphens: 'none' }}>
                                    {t('homepage.operativeTitle')}
                                </h3>
                                <p className="text-xs sm:text-sm mb-3 sm:mb-4 opacity-90 leading-relaxed break-words px-4 max-w-md" style={{ hyphens: 'none' }}>
                                    {t('homepage.operativeDesc')}
                                </p>
                                <ul className="text-left space-y-1.5 sm:space-y-2 text-xs sm:text-sm w-full max-w-xs">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mr-2 sm:mr-3 bg-white flex-shrink-0 mt-1"></span>
                                        <span className="break-words flex-1" style={{ hyphens: 'none' }}>{t('homepage.operativeFeature1')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mr-2 sm:mr-3 bg-white flex-shrink-0 mt-1"></span>
                                        <span className="break-words flex-1" style={{ hyphens: 'none' }}>{t('homepage.operativeFeature2')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 rounded-full mr-2 sm:mr-3 bg-white flex-shrink-0 mt-1"></span>
                                        <span className="break-words flex-1" style={{ hyphens: 'none' }}>{t('homepage.operativeFeature3')}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-promax-blue break-words" style={{ hyphens: 'none' }}>
                            {t('homepage.industriesTitle')}
                        </h2>
                        <div className="w-16 sm:w-20 md:w-24 h-1 mx-auto mb-4 sm:mb-5 md:mb-6 bg-promax-orange"></div>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto break-words px-2" style={{ hyphens: 'none' }}>
                            <span ref={yearRef} className="font-bold text-promax-blue"></span> {t('homepage.industriesSubtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
                        {industries.map((industry) => {
                            const Icon = industry.icon;
                            return (
                                <div key={industry.name} className="text-center">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto mb-2 sm:mb-3 md:mb-4 bg-white shadow-lg rounded-lg flex items-center justify-center">
                                        <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-promax-blue" />
                                    </div>
                                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-promax-blue break-words px-1" style={{ hyphens: 'none' }}>
                                        {industry.name}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative bg-promax-blue">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5 md:mb-6 break-words px-2" style={{ hyphens: 'none' }}>
                        {t('homepage.ctaTitle')}
                    </h2>
                    <button
                        onClick={() => navigate('/Kontakt')}
                        className="bg-promax-orange text-white px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 text-base sm:text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-2xl rounded"
                    >
                        {t('homepage.ctaButton')}
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