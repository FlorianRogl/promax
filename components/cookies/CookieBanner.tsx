'use client';

import React from 'react';
import { useCookieConsent } from './CookieContext';
import CookieSettings from './CookieSettings';
import { Cookie } from 'lucide-react';
import Link from 'next/link';

const CookieBanner: React.FC = () => {
    const { showBanner, acceptAll, rejectAll, setShowSettings } = useCookieConsent();

    if (!showBanner) {
        return <CookieSettings />;
    }

    return (
        <>
            <style>{`
                @keyframes cookieBannerSlideUp {
                    from { transform: translateY(100%); opacity: 0; }
                    to   { transform: translateY(0);    opacity: 1; }
                }

                .cookie-banner {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background: #ffffff;
                    box-shadow: 0 -4px 32px rgba(0, 0, 0, 0.12);
                    border-top: 1px solid #e5e7eb;
                    animation: cookieBannerSlideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }

                .cookie-banner__inner {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px 24px;
                    display: flex;
                    align-items: flex-start;
                    gap: 20px;
                    flex-wrap: wrap;
                }

                .cookie-banner__content {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                    flex: 1 1 auto;
                    min-width: 0;
                }

                .cookie-banner__icon {
                    width: 44px;
                    height: 44px;
                    background: #1e3767;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .cookie-banner__text {
                    flex: 1;
                    min-width: 0;
                }

                .cookie-banner__title {
                    margin: 0 0 6px;
                    font-size: 16px;
                    font-weight: 600;
                    color: #1e3767;
                    font-family: 'Inter', 'Segoe UI', sans-serif;
                }

                .cookie-banner__description {
                    margin: 0;
                    font-size: 13px;
                    color: #4b5563;
                    line-height: 1.6;
                    font-family: 'Inter', 'Segoe UI', sans-serif;
                }

                .cookie-banner__link {
                    color: #d97539;
                    text-decoration: none;
                    font-weight: 500;
                }
                .cookie-banner__link:hover { text-decoration: underline; }

                .cookie-banner__actions {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    flex-wrap: wrap;
                    flex-shrink: 0;
                }

                .cookie-btn {
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    font-family: 'Inter', 'Segoe UI', sans-serif;
                    white-space: nowrap;
                    transition: background 0.2s, color 0.2s, border-color 0.2s;
                }

                .cookie-btn--reject {
                    border: 1.5px solid #1e3767;
                    background: transparent;
                    color: #1e3767;
                }
                .cookie-btn--reject:hover {
                    background: #1e3767;
                    color: #ffffff;
                }

                .cookie-btn--settings {
                    border: 1.5px solid #d1d5db;
                    background: #f9fafb;
                    color: #374151;
                }
                .cookie-btn--settings:hover {
                    background: #f3f4f6;
                    border-color: #9ca3af;
                }

                .cookie-btn--accept {
                    border: 1.5px solid #d97539;
                    background: #d97539;
                    color: #ffffff;
                }
                .cookie-btn--accept:hover { background: #c56830; }

                /* ── Mobile: stack everything vertically ── */
                @media (max-width: 600px) {
                    .cookie-banner__inner {
                        padding: 16px;
                        flex-direction: column;
                        gap: 14px;
                    }

                    .cookie-banner__icon {
                        width: 36px;
                        height: 36px;
                        border-radius: 10px;
                    }

                    .cookie-banner__title { font-size: 15px; }
                    .cookie-banner__description { font-size: 12px; }

                    .cookie-banner__actions {
                        width: 100%;
                        flex-direction: column;
                        gap: 8px;
                    }

                    .cookie-btn {
                        width: 100%;
                        text-align: center;
                        padding: 11px 16px;
                    }
                }

                /* ── Tablet: stack content + buttons vertically, buttons right-aligned ── */
                @media (min-width: 601px) and (max-width: 768px) {
                    .cookie-banner__inner {
                        flex-direction: column;
                        gap: 14px;
                    }

                    .cookie-banner__actions {
                        width: 100%;
                        justify-content: flex-end;
                    }
                }

                /* ── Desktop (769px+): single row, same as before ── */
                @media (min-width: 769px) {
                    .cookie-banner__inner {
                        flex-wrap: nowrap;
                        align-items: center;
                    }

                    .cookie-banner__actions {
                        flex-shrink: 0;
                    }
                }
            `}</style>

            <div role="dialog" aria-label="Cookie-Zustimmung" className="cookie-banner">
                <div className="cookie-banner__inner">

                    {/* Icon + Text */}
                    <div className="cookie-banner__content">
                        <div className="cookie-banner__icon">
                            <Cookie size={20} color="#ffffff" />
                        </div>

                        <div className="cookie-banner__text">
                            <h3 className="cookie-banner__title">Wir verwenden Cookies</h3>
                            <p className="cookie-banner__description">
                                Wir setzen Cookies ein, um Ihre Nutzererfahrung zu verbessern und unsere Website zu analysieren.
                                Dazu werden{' '}
                                <strong style={{ color: '#374151' }}>Analyse-Cookies</strong>{' '}
                                (Google Analytics, Microsoft Clarity, Vercel Analytics) und{' '}
                                <strong style={{ color: '#374151' }}>Marketing-Cookies</strong>{' '}
                                (Google AdWords) verwendet. Sie können Ihre Einstellungen jederzeit anpassen.
                                Weitere Informationen finden Sie in unserer{' '}
                                <Link href="/rechtliches#datenschutz" className="cookie-banner__link">
                                    Datenschutzerklärung
                                </Link>.
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="cookie-banner__actions">
                        <button onClick={rejectAll} className="cookie-btn cookie-btn--reject">
                            Ablehnen
                        </button>
                        <button onClick={() => setShowSettings(true)} className="cookie-btn cookie-btn--settings">
                            Einstellungen
                        </button>
                        <button onClick={acceptAll} className="cookie-btn cookie-btn--accept">
                            Alle akzeptieren
                        </button>
                    </div>
                </div>
            </div>

            <CookieSettings />
        </>
    );
};

export default CookieBanner;
