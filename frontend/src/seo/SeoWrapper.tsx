import React, { useEffect } from 'react';
import { Helmet } from '@vuer-ai/react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSEOForRoute, generateTitle, SEOPageConfig } from './SEOConfig';
import { StructuredData } from './StructuredData';

interface SEOWrapperProps {
    children?: React.ReactNode;
    customSEO?: Partial<SEOPageConfig>;
}

export const SEOWrapper: React.FC<SEOWrapperProps> = ({ children, customSEO }) => {
    const location = useLocation();

    // SEO-Daten für aktuelle Route holen
    const routeSEO = getSEOForRoute(location.pathname);

    // Custom SEO mit Route SEO mergen
    const seo: SEOPageConfig = {
        ...routeSEO,
        ...customSEO
    };

    // Scroll to top bei Route-Wechsel
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Generiere vollständigen Title
    const fullTitle = generateTitle(seo.title);

    return (
        <>
            <Helmet>
                {/* Basis Meta-Tags */}
                <title>{fullTitle}</title>
                <meta name="description" content={seo.description} />
                {seo.keywords && <meta name="keywords" content={seo.keywords} />}

                {/* Canonical URL */}
                <link rel="canonical" href={seo.canonical} />

                {/* Robots */}
                {seo.noindex ? (
                    <meta name="robots" content="noindex, nofollow" />
                ) : (
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                )}

                {/* Open Graph */}
                <meta property="og:locale" content="de_AT" />
                <meta property="og:type" content={seo.ogType || 'website'} />
                <meta property="og:title" content={fullTitle} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:url" content={seo.canonical} />
                <meta property="og:site_name" content="PROMAX Project Management" />
                {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
                {seo.ogImage && <meta property="og:image:width" content="1200" />}
                {seo.ogImage && <meta property="og:image:height" content="630" />}

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={fullTitle} />
                <meta name="twitter:description" content={seo.description} />
                {seo.ogImage && <meta name="twitter:image" content={seo.ogImage} />}

                {/* Additional SEO */}
                <meta name="author" content="PROMAX Project Management GesmbH" />
                <meta name="publisher" content="PROMAX Project Management GesmbH" />

                {/* Mobile */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
                <meta name="theme-color" content="#1e3767" />

                {/* Languages */}
                <link rel="alternate" hrefLang="de" href={seo.canonical} />
                <link rel="alternate" hrefLang="en" href={seo.canonical?.replace('.at', '.at/en')} />
                <link rel="alternate" hrefLang="x-default" href={seo.canonical} />
            </Helmet>

            {/* Structured Data */}
            {seo.structuredData && (
                <StructuredData data={seo.structuredData} />
            )}

            {children}
        </>
    );
};

export default SEOWrapper;