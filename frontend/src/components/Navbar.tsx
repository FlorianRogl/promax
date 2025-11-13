import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import navLogo from '../assets/Final_V1-a.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [, setIsScrolled] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const navItems = [
        { name: t('nav.company'), path: '/Unternehmen' },
        { name: t('nav.services'), path: '/Leistungen' },
        { name: t('nav.technologies'), path: '/Technologien' },
        { name: t('nav.career'), path: '/Karriere' },
        { name: t('nav.contact'), path: '/Kontakt' }
    ];

    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
        setCurrentLang(lng);
        localStorage.setItem('language', lng);
    };

    // Scroll-Event für Navbar-Hintergrund
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Schließe Mobile Menu beim Route-Wechsel
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Verhindere Body-Scroll wenn Mobile Menu offen ist
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-shadow duration-300"
                role="navigation"
                aria-label="Hauptnavigation"
            >
                <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
                    <div className="flex justify-between items-center h-14 sm:h-16 md:h-[4.5rem]">

                        {/* Logo - Links */}
                        <Link
                            to="/"
                            onClick={closeMobileMenu}
                            className="flex items-center z-50 flex-shrink-0"
                            aria-label="PROMAX - Zur Startseite"
                        >
                            <img
                                src={navLogo}
                                alt="PROMAX Logo"
                                className="h-7 sm:h-8 md:h-10 lg:h-11 xl:h-12 w-auto object-contain"
                            />
                        </Link>

                        {/* Desktop Navigation - Zentral */}
                        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
                            <ul className="flex items-center space-x-1 xl:space-x-2">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.path}
                                            className={`
                                                px-3 xl:px-4 py-2 xl:py-2.5
                                                text-sm xl:text-base font-medium
                                                rounded-lg
                                                ${location.pathname === item.path
                                                ? 'text-[#d97539] bg-[#d97539]/10 font-semibold'
                                                : 'text-[#1e3767]'
                                            }
                                                whitespace-nowrap
                                            `}
                                            aria-current={location.pathname === item.path ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Accessibility Controls - Rechts */}
                        <div className="flex items-center gap-3 sm:gap-4 z-50">
                            {/* Language Switcher */}
                            <div className="flex items-center gap-2 sm:gap-2.5">
                                <button
                                    className={`
                                        px-2 sm:px-2.5 py-1 sm:py-1.5
                                        text-xs sm:text-sm font-semibold
                                        rounded-md
                                        ${currentLang === 'de'
                                        ? 'text-white bg-[#1e3767]'
                                        : 'text-[#1e3767] bg-gray-100'
                                    }
                                    `}
                                    onClick={() => changeLanguage('de')}
                                    aria-label="Deutsch"
                                >
                                    DE
                                </button>
                                <span className="text-gray-400 text-sm sm:text-base">|</span>
                                <button
                                    className={`
                                        px-2 sm:px-2.5 py-1 sm:py-1.5
                                        text-xs sm:text-sm font-semibold
                                        rounded-md
                                        ${currentLang === 'en'
                                        ? 'text-white bg-[#1e3767]'
                                        : 'text-[#1e3767] bg-gray-100'
                                    }
                                    `}
                                    onClick={() => changeLanguage('en')}
                                    aria-label="English"
                                >
                                    EN
                                </button>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMobileMenu}
                                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 sm:w-11 sm:h-11 focus:outline-none focus:ring-2 focus:ring-[#d97539] rounded-lg"
                                aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
                                aria-expanded={isMobileMenuOpen}
                                aria-controls="mobile-navigation"
                            >
                                <span className={`
                                    block w-6 sm:w-7 h-0.5 bg-[#1e3767] rounded-full transition-all duration-300 transform
                                    ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px] bg-[#d97539]' : ''}
                                `}></span>
                                <span className={`
                                    block w-6 sm:w-7 h-0.5 bg-[#1e3767] rounded-full my-1.5 transition-all duration-300
                                    ${isMobileMenuOpen ? 'opacity-0 -translate-x-5' : ''}
                                `}></span>
                                <span className={`
                                    block w-6 sm:w-7 h-0.5 bg-[#1e3767] rounded-full transition-all duration-300 transform
                                    ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px] bg-[#d97539]' : ''}
                                `}></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`
                    fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden
                    transition-opacity duration-300
                    ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
                onClick={closeMobileMenu}
                aria-hidden="true"
            ></div>

            {/* Mobile Menu Panel */}
            <div
                id="mobile-navigation"
                className={`
                    fixed top-0 right-0 h-screen w-[280px] sm:w-[320px] max-w-[85vw]
                    bg-gradient-to-br from-white to-gray-50
                    shadow-2xl z-40 lg:hidden
                    transform transition-transform duration-400 ease-out
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    overflow-y-auto
                `}
                style={{
                    height: '100vh',
                    //height: '100svh'
                }}
            >
                <nav className="pt-20 sm:pt-24 px-4 sm:px-6 pb-6">
                    {/* Mobile Navigation Links */}
                    <ul className="space-y-2">
                        {navItems.map((item, index) => (
                            <li
                                key={item.name}
                                className={`
                                    transform transition-all duration-400
                                    ${isMobileMenuOpen
                                    ? 'translate-x-0 opacity-100'
                                    : 'translate-x-8 opacity-0'
                                }
                                `}
                                style={{
                                    transitionDelay: isMobileMenuOpen ? `${100 + index * 50}ms` : '0ms'
                                }}
                            >
                                <Link
                                    to={item.path}
                                    onClick={closeMobileMenu}
                                    className={`
                                        block w-full px-4 sm:px-5 py-3 sm:py-3.5
                                        text-base sm:text-lg font-medium
                                        rounded-xl
                                        ${location.pathname === item.path
                                        ? 'text-[#d97539] bg-[#d97539]/10 font-semibold shadow-sm'
                                        : 'text-[#1e3767]'
                                    }
                                    `}
                                    aria-current={location.pathname === item.path ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Spacer für fixed navbar */}
            <div className="h-14 sm:h-16 md:h-[4.5rem]"></div>
        </>
    );
};

export default Navbar;