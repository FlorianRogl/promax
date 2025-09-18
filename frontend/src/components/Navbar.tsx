import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../css/Navbar.module.css';

import navLogo from '../assets/Final_V1-a.png'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hasInitiallyLoaded, setHasInitiallyLoaded] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Unternehmen', path: '/Unternehmen' },
        { name: 'Branchen', path: '/Branchen' },
        { name: 'Leistungen', path: '/Leistungen' },
        { name: 'Karriere', path: '/Karriere' },
        { name: 'Kontakt', path: '/Kontakt' }
    ];

    // Nur beim ersten Laden der Website die Animation aktivieren
    useEffect(() => {
        if (!hasInitiallyLoaded) {
            setHasInitiallyLoaded(true);
        }
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

        // Cleanup
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

    const handleNavClick = (e: React.MouseEvent<HTMLElement>) => {
        // Add click animation to the clicked element
        const target = e.currentTarget;
        target.classList.add(styles.navLinkClick);

        setTimeout(() => {
            target.classList.remove(styles.navLinkClick);
        }, 300);

        closeMobileMenu();
    };

    // Handle keyboard navigation for mobile menu
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape' && isMobileMenuOpen) {
            closeMobileMenu();
        }
    };

    return (
        <nav className={`${styles.navbar} ${hasInitiallyLoaded ? styles.navbarReload : ''}`} role="navigation" aria-label="Hauptnavigation">
            <div className={styles.container}>
                {/* Logo/Brand - Links positioniert */}
                <Link
                    to="/"
                    className={`${styles.brand} ${hasInitiallyLoaded ? styles.brandReload : ''}`}
                    onClick={(e) => handleNavClick(e)}
                    aria-label="PROMAX - Zur Startseite"
                >
                    <img
                        src={navLogo}
                        alt="PROMAX Logo"
                        className={styles.logoImage}
                    />
                </Link>

                {/* Navigation Wrapper - Zentral positioniert */}
                <div className={`${styles.navWrapper} ${isMobileMenuOpen ? styles.navWrapperOpen : ''}`}>
                    <ul className={`${styles.navList} ${hasInitiallyLoaded ? styles.navListReload : ''}`} role="menubar">
                        {navItems.map((item, index) => (
                            <li
                                key={item.name}
                                className={`${styles.navItem} ${hasInitiallyLoaded ? styles.navItemReload : ''}`}
                                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                                role="none"
                            >
                                <Link
                                    to={item.path}
                                    className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
                                    onClick={(e) => handleNavClick(e)}
                                    role="menuitem"
                                    aria-current={location.pathname === item.path ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Accessibility Controls - Rechts positioniert */}
                <div className={styles.navControls}>

                    {/* Mobile Menu Button */}
                    <button
                        className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.mobileMenuBtnOpen : ''} ${hasInitiallyLoaded ? styles.mobileMenuReload : ''}`}
                        onClick={toggleMobileMenu}
                        onKeyDown={handleKeyDown}
                        aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        <span className={styles.hamburger} aria-hidden="true"></span>
                        <span className={styles.hamburger} aria-hidden="true"></span>
                        <span className={styles.hamburger} aria-hidden="true"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className={styles.mobileOverlay}
                    onClick={closeMobileMenu}
                    onKeyDown={handleKeyDown}
                    aria-hidden="true"
                    tabIndex={-1}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;