import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Footer.module.css';
import {
    MapPin,
    Phone,
    Mail,
    ArrowUp
} from 'lucide-react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        const handleScroll = () => {
            setShowScrollTop(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (footerRef.current) observer.unobserve(footerRef.current);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const contactInfo = [
        { icon: MapPin, text: 'Parkring 18/F, 8074 Raaba-Grambach' },
        { icon: Phone, text: '+43 (0) 316 / 241 393' },
        { icon: Mail, text: 'office@promax.at' }
    ];

    const legalLinks = [
        { name: 'Impressum', path: '/Rechtliches#impressum' },
        { name: 'Datenschutz', path: '/Rechtliches#datenschutz' },
        { name: 'AGB', path: '/Rechtliches#agb' }
    ];

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        (e.target as HTMLAnchorElement).style.color = '#d97539';
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        (e.target as HTMLAnchorElement).style.color = '#e5e5e5';
    };

    const handleButtonMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        target.style.transform = 'scale(1.1)';
        target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
    };

    const handleButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        target.style.transform = 'scale(1)';
        target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
    };

    return (
        <>
            <footer
                ref={footerRef}
                className={`${styles.footer} ${isVisible ? styles.footerVisible : ''}`}
                style={{ backgroundColor: '#1e3767', padding: '40px 0' }}
            >
                {/* Orange Gradient Line */}
                <div style={{
                    height: '4px',
                    background: 'linear-gradient(90deg, #d97539 0%, #f4a261 100%)',
                    marginBottom: '30px'
                }}></div>

                {/* Main Footer Content */}
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '60px'
                }}>
                    {/* Contact Section */}
                    <div className={`${isVisible ? styles.animateUp : ''}`}>
                        <h4 style={{
                            color: 'white',
                            fontSize: '18px',
                            marginBottom: '20px',
                            fontWeight: '600'
                        }}>
                            Kontaktieren Sie uns
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        color: '#e5e5e5',
                                        fontSize: '14px'
                                    }}
                                    className={`${isVisible ? styles.animateFadeIn : ''}`}
                                >
                                    <item.icon size={16} color="#d97539" />
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className={`${isVisible ? styles.animateUp : ''}`}>
                        <h4 style={{
                            color: 'white',
                            fontSize: '18px',
                            marginBottom: '20px',
                            fontWeight: '600'
                        }}>
                            Rechtliches
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {legalLinks.map((link, linkIndex) => (
                                <Link
                                    key={linkIndex}
                                    to={link.path}
                                    style={{
                                        color: '#e5e5e5',
                                        textDecoration: 'none',
                                        fontSize: '14px',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className={`${isVisible ? styles.animateFadeIn : ''}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    marginTop: '30px',
                    paddingTop: '20px',
                    textAlign: 'center'
                }} className={`${isVisible ? styles.animateUp : ''}`}>
                    <p style={{
                        color: '#b0b0b0',
                        fontSize: '13px',
                        margin: 0
                    }}>
                        &copy; 2025 PROMAX Project Management GesmbH. Alle Rechte vorbehalten.
                    </p>
                </div>

                {/* Scroll to Top Button */}
                {showScrollTop && (
                    <button
                        style={{
                            position: 'fixed',
                            bottom: '30px',
                            right: '30px',
                            backgroundColor: '#d97539',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            zIndex: 1000
                        }}
                        onClick={scrollToTop}
                        onMouseEnter={handleButtonMouseEnter}
                        onMouseLeave={handleButtonMouseLeave}
                        className={`${styles.animateBounceIn}`}
                        aria-label="Nach oben scrollen"
                    >
                        <ArrowUp size={20} />
                    </button>
                )}
            </footer>
        </>
    );
};

export default Footer;