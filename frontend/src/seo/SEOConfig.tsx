// SEO Configuration für PROMAX
// Zentrale Verwaltung aller SEO-relevanten Daten

export interface SEOPageConfig {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    structuredData?: object;
    noindex?: boolean;
}

export interface SEOConfig {
    [key: string]: SEOPageConfig;
}

// Basis-URL der Website
export const BASE_URL = 'https://www.promax.at';

// Default OG Image
export const DEFAULT_OG_IMAGE = `${BASE_URL}/og-default.jpg`;

// SEO-Konfiguration für alle Seiten
export const seoConfig: SEOConfig = {
    // Homepage
    '/': {
        title: 'PROMAX Project Management - Industrieanlagenbau & Engineering in Graz',
        description: 'PROMAX ist Ihr Partner für Projektmanagement im Industrieanlagenbau. Über 25 Jahre Erfahrung in Engineering, Planung und Projektabwicklung. ISO 9001:2015 zertifiziert.',
        keywords: 'Industrieanlagenbau, Projektmanagement, Engineering, Graz, Österreich, ISO 9001, Anlagenplanung, Verfahrenstechnik',
        canonical: BASE_URL,
        ogImage: `${BASE_URL}/og-home.jpg`,
        ogType: 'website',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'PROMAX Project Management GesmbH',
            url: BASE_URL,
            logo: `${BASE_URL}/logo.png`,
            description: 'Projektmanagement im Industrieanlagenbau',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Parkring 18/F',
                addressLocality: 'Raaba-Grambach',
                postalCode: '8074',
                addressCountry: 'AT'
            },
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+43-316-241393',
                contactType: 'customer service',
                email: 'office@promax.at',
                availableLanguage: ['de', 'en']
            },
            sameAs: [
                'https://www.linkedin.com/company/promax-project-management',
                'https://www.facebook.com/promaxat'
            ],
            foundingDate: '1999',
            numberOfEmployees: {
                '@type': 'QuantitativeValue',
                value: 100
            }
        }
    },

    // Unternehmen
    '/Unternehmen': {
        title: 'Über PROMAX - 25+ Jahre Erfahrung im Industrieanlagenbau',
        description: 'Seit 1999 Ihr verlässlicher Partner für Projektmanagement im Industrieanlagenbau. 100+ Experten, ISO 9001:2015 zertifiziert, 250+ erfolgreich abgeschlossene Projekte.',
        keywords: 'PROMAX Geschichte, Unternehmensgeschichte, ISO Zertifizierung, Industrieanlagenbau Graz, Engineering Team',
        canonical: `${BASE_URL}/Unternehmen`,
        ogImage: `${BASE_URL}/og-unternehmen.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'Über PROMAX Project Management',
            description: 'Geschichte, Team und Zertifizierungen von PROMAX Project Management GesmbH',
            url: `${BASE_URL}/Unternehmen`,
            mainEntity: {
                '@type': 'Organization',
                name: 'PROMAX Project Management GesmbH',
                foundingDate: '1999',
                numberOfEmployees: '100+',
                awards: 'ISO 9001:2015 Zertifizierung'
            }
        }
    },

    // Leistungen
    '/Leistungen': {
        title: 'Leistungen - Engineering, Planung & Projektmanagement | PROMAX',
        description: 'Umfassende Engineering-Leistungen: 3D-Anlagenplanung, Rohrleitungsplanung, Verfahrenstechnik, Projektmanagement und Site Services für den Industrieanlagenbau.',
        keywords: 'Engineering Services, 3D Planung, AutoCAD Plant 3D, PDMS, Rohrleitungsplanung, Projektmanagement, Verfahrenstechnik',
        canonical: `${BASE_URL}/Leistungen`,
        ogImage: `${BASE_URL}/og-leistungen.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Industrial Plant Engineering',
            provider: {
                '@type': 'Organization',
                name: 'PROMAX Project Management GesmbH'
            },
            areaServed: {
                '@type': 'Country',
                name: 'Austria'
            },
            description: 'Komplette Engineering-Dienstleistungen für Industrieanlagen'
        }
    },

    // Technologien
    '/Technologien': {
        title: 'Technologien - 3D-CAD, Laserscanning & VR/AR | PROMAX',
        description: 'Modernste Engineering-Software: AutoCAD Plant 3D, PDMS, E3D, 3D-Laserscanning, Virtual & Augmented Reality für präzise Anlagenplanung.',
        keywords: 'AutoCAD Plant 3D, PDMS, E3D, 3D Laserscanning, ROHR2, Inventor, Virtual Reality Engineering, Augmented Reality',
        canonical: `${BASE_URL}/Technologien`,
        ogImage: `${BASE_URL}/og-technologien.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            headline: 'Engineering-Technologien bei PROMAX',
            description: 'Übersicht der eingesetzten Engineering-Software und -Technologien',
            author: {
                '@type': 'Organization',
                name: 'PROMAX Project Management GesmbH'
            }
        }
    },

    // Karriere
    '/Karriere': {
        title: 'Karriere bei PROMAX - Jobs im Industrieanlagenbau Graz',
        description: 'Karrierechancen bei PROMAX: Offene Stellen für Ingenieure, CAD-Konstrukteure, Projektmanager. Flexible Arbeitszeiten, spannende Projekte, internationale Teams.',
        keywords: 'Jobs Graz, Karriere Industrieanlagenbau, Ingenieur Jobs, CAD Konstrukteur, Projektmanager Stellenangebote, Engineering Jobs Österreich',
        canonical: `${BASE_URL}/Karriere`,
        ogImage: `${BASE_URL}/og-karriere.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'JobPosting',
            hiringOrganization: {
                '@type': 'Organization',
                name: 'PROMAX Project Management GesmbH',
                sameAs: BASE_URL
            },
            jobLocation: {
                '@type': 'Place',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Raaba-Grambach',
                    addressRegion: 'Steiermark',
                    addressCountry: 'AT'
                }
            },
            description: 'Karrieremöglichkeiten bei PROMAX im Industrieanlagenbau'
        }
    },

    // Kontakt
    '/Kontakt': {
        title: 'Kontakt - PROMAX Project Management Graz & Wien',
        description: 'Kontaktieren Sie PROMAX: Standorte in Graz & Wien. Tel: +43 316 241 393 | E-Mail: office@promax.at. Wir freuen uns auf Ihre Anfrage!',
        keywords: 'PROMAX Kontakt, Kontakt Graz, Standort Wien, Projektanfrage, Engineering Anfrage',
        canonical: `${BASE_URL}/Kontakt`,
        ogImage: `${BASE_URL}/og-kontakt.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Kontakt - PROMAX Project Management',
            description: 'Kontaktinformationen für PROMAX Project Management',
            url: `${BASE_URL}/Kontakt`
        }
    },

    // Rechtliches
    '/Rechtliches': {
        title: 'Impressum & Datenschutz - PROMAX Project Management',
        description: 'Impressum, Datenschutzerklärung und AGB der PROMAX Project Management GesmbH, Graz.',
        canonical: `${BASE_URL}/Rechtliches`,
        noindex: true, // Rechtliche Seiten nicht indexieren
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Rechtliche Informationen',
            url: `${BASE_URL}/Rechtliches`
        }
    },

    // FitImJob
    '/FitImJob': {
        title: 'Gesundheitspreis "fit im job" 2017 - PROMAX',
        description: 'PROMAX wurde 2017 mit dem steirischen Gesundheitspreis "fit im job" ausgezeichnet. Erfahren Sie mehr über unsere Unternehmenskultur.',
        keywords: 'fit im job, Gesundheitspreis, Betriebliche Gesundheitsförderung, Arbeitgeberauszeichnung',
        canonical: `${BASE_URL}/FitImJob`,
        ogImage: `${BASE_URL}/og-fitimjob.jpg`
    }
};

// Helper: SEO-Daten für Route abrufen
export const getSEOForRoute = (path: string): SEOPageConfig => {
    return seoConfig[path] || {
        title: 'PROMAX Project Management',
        description: 'Projektmanagement im Industrieanlagenbau',
        canonical: `${BASE_URL}${path}`
    };
};

// Helper: Generiere vollständigen Title
export const generateTitle = (pageTitle: string): string => {
    if (pageTitle.includes('PROMAX')) {
        return pageTitle;
    }
    return `${pageTitle} | PROMAX Project Management`;
};