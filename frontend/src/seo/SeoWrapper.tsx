import React, { useEffect } from 'react';
import { Helmet } from '@vuer-ai/react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
    getSEOForRoute,
    generateTitle,
    SEOPageConfig,
    WEBSITE_STRUCTURED_DATA,
    ORGANIZATION_STRUCTURED_DATA,
    SITE_NAVIGATION_STRUCTURED_DATA
} from './SEOConfig';
import { StructuredData } from './StructuredData';

interface SEOWrapperProps {
    children?: React.ReactNode;
    customSEO?: Partial<SEOPageConfig>;
}

export const SEOWrapper: React.FC<SEOWrapperProps> = ({ children, customSEO }) => {
    const location = useLocation();

    const routeSEO = getSEOForRoute(location.pathname);

    const seo: SEOPageConfig = {
        ...routeSEO,
        ...customSEO
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const fullTitle = generateTitle(seo.title);
    const canonicalUrl = seo.canonical || `https://www.promax.at${location.pathname}`;

    return (
        <>
            <Helmet>
                {/* ── Basis Meta-Tags ── */}
                <title>{fullTitle}</title>
                <meta name="description" content={seo.description} />
                {seo.keywords && <meta name="keywords" content={seo.keywords} />}

                {/* ── Canonical URL ── */}
                <link rel="canonical" href={canonicalUrl} />

                {/* ── Robots ── */}
                {seo.noindex ? (
                    <meta name="robots" content="noindex, nofollow" />
                ) : (
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                )}

                {/* ── Open Graph ── */}
                <meta property="og:locale" content="de_AT" />
                <meta property="og:type" content={seo.ogType || 'website'} />
                <meta property="og:title" content={fullTitle} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:site_name" content="PROMAX Project Management" />
                {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
                {seo.ogImage && <meta property="og:image:width" content="1200" />}
                {seo.ogImage && <meta property="og:image:height" content="630" />}
                {seo.ogImage && <meta property="og:image:alt" content={seo.title} />}

                {/* ── Twitter Card ── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={fullTitle} />
                <meta name="twitter:description" content={seo.description} />
                {seo.ogImage && <meta name="twitter:image" content={seo.ogImage} />}

                {/* ── Additional SEO ── */}
                <meta name="author" content="PROMAX Project Management GesmbH" />
                <meta name="publisher" content="PROMAX Project Management GesmbH" />
                <meta name="copyright" content="PROMAX Project Management GesmbH" />
                <meta name="theme-color" content="#1e3767" />

                {/* ── FIX: hreflang ──────────────────────────────────────────────────
                    Die Website ist nur auf Deutsch. Kein hreflang="en" da keine
                    separate englische URL existiert – das würde Google verwirren.
                    Nur x-default auf die deutsche Canonical-URL setzen.
                ─────────────────────────────────────────────────────────────────── */}
                <link rel="alternate" hrefLang="de" href={canonicalUrl} />
                <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
            </Helmet>

            {/* ── Globales Website Structured Data (auf jeder Seite) ── */}
            <StructuredData data={WEBSITE_STRUCTURED_DATA} />

            {/* ── Organisation Structured Data (auf jeder Seite) ── */}
            <StructuredData data={ORGANIZATION_STRUCTURED_DATA} />

            {/* ── FIX: SiteNavigationElement – jetzt korrekt importiert und gerendert ──
                Jedes Element wird als eigener JSON-LD Block ausgegeben.
                Das ist der offizielle Schema.org-Standard für Sitelinks-Signale.
            ─────────────────────────────────────────────────────────────────────── */}
            {SITE_NAVIGATION_STRUCTURED_DATA.map((navItem, index) => (
                <StructuredData key={index} data={navItem} />
            ))}

            {/* ── Seitenspezifisches Structured Data ── */}
            {seo.structuredData && (
                <StructuredData data={seo.structuredData} />
            )}

            {children}
        </>
    );
};

export default SEOWrapper;