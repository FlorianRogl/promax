import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import navLogo from '../assets/Final_V1-a.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

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
            {/* Navbar */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
                }`}
            >
                <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <div className="flex items-center justify-between h-20 md:h-22 lg:h-20 xl:h-22 2xl:h-24">

                        {/* Logo - Links */}
                        <Link to="/" className="flex-shrink-0 z-50">
                            <img
                                src={navLogo}
                                alt="Logo"
                                className="h-12 md:h-14 lg:h-12 xl:h-13 2xl:h-14 w-auto object-contain transition-all duration-300"
                            />
                        </Link>

                        {/* Desktop Navigation - Zentral */}
                        <div className="hidden lg:flex items-center justify-center flex-1 mx-8 xl:mx-12 2xl:mx-16">
                            <ul className="flex items-center space-x-10 xl:space-x-12 2xl:space-x-16">
                                {navItems.map((item) => (
                                    <li key={item.path}>
                                        <Link
                                            to={item.path}
                                            className={`relative font-medium transition-colors duration-300 px-4 py-2 rounded-lg text-sm lg:text-base xl:text-lg 2xl:text-xl ${
                                                location.pathname === item.path
                                                    ? 'text-orange-600 bg-orange-50'
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Side - Language + Mobile Menu */}
                        <div className="flex items-center space-x-4 md:space-x-6">
                            {/* Language Switcher - Immer sichtbar */}
                            <div className="flex items-center space-x-1.5 md:space-x-2 text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg font-medium">
                                <button
                                    onClick={() => changeLanguage('de')}
                                    className={`transition-colors px-1.5 md:px-2 ${
                                        currentLang === 'de'
                                            ? 'text-blue-600 font-bold'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                    aria-label="Deutsch"
                                >
                                    DE
                                </button>
                                <span className="text-gray-400">|</span>
                                <button
                                    onClick={() => changeLanguage('en')}
                                    className={`transition-colors px-1.5 md:px-2 ${
                                        currentLang === 'en'
                                            ? 'text-blue-600 font-bold'
                                            : 'text-gray-500 hover:text-gray-700'
                                    }`}
                                    aria-label="English"
                                >
                                    EN
                                </button>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMobileMenu}
                                className="lg:hidden relative z-50 p-2 text-gray-700 hover:text-blue-600 transition-colors"
                                aria-label="Toggle menu"
                            >
                                <svg
                                    className="w-7 h-7 md:w-8 md:h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {isMobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-[300px] sm:w-[340px] bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full pt-28 pb-6 px-6">
                    {/* Mobile Navigation Links */}
                    <ul className="flex flex-col space-y-2">
                        {navItems.map((item, index) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={closeMobileMenu}
                                    className={`block py-4 px-5 rounded-lg text-lg sm:text-xl font-medium transition-all ${
                                        location.pathname === item.path
                                            ? 'bg-orange-50 text-orange-600'
                                            : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                    style={{
                                        animationDelay: `${index * 50}ms`
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Spacer für fixed navbar */}
            <div className="h-20 md:h-22 lg:h-20 xl:h-22 2xl:h-24" />
        </>
    );
};

export default Navbar;