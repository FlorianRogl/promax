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
export const DEFAULT_OG_IMAGE = `${BASE_URL}/og/og-home.jpg`;

// ─── Website-weites Structured Data ───────────────────────────────────────────
export const WEBSITE_STRUCTURED_DATA = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'PROMAX Project Management',
    url: BASE_URL,
    description: 'Projektmanagement im Industrieanlagenbau – über 25 Jahre Erfahrung, ISO 9001:2015 zertifiziert.',
    inLanguage: 'de',
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
    }
};

// ─── Organisation Structured Data ─────────────────────────────────────────────
// FIX: subjectOf entfernt – kein Google-Standard für Sitelinks
export const ORGANIZATION_STRUCTURED_DATA = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'PROMAX Project Management GesmbH',
    alternateName: 'PROMAX',
    url: BASE_URL,
    logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/og/logo.png`,
        width: 300,
        height: 100
    },
    description: 'Projektmanagement im Industrieanlagenbau. Umfassende Ingenieurplanung, 3D-Modellierung, Laserscanning und operative Projektunterstützung.',
    foundingDate: '1999',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Parkring 18/F',
        addressLocality: 'Raaba-Grambach',
        postalCode: '8074',
        addressCountry: 'AT'
    },
    contactPoint: [
        {
            '@type': 'ContactPoint',
            telephone: '+43-316-241393',
            contactType: 'customer service',
            email: 'office@promax.at',
            availableLanguage: 'de',
            areaServed: 'AT'
        }
    ],
    sameAs: [
        'https://at.linkedin.com/in/andreas-rogl-936860141'
    ],
    hasMap: `https://maps.google.com/?q=Parkring+18,+8074+Raaba-Grambach`
};

// ─── SiteNavigationElement Structured Data ────────────────────────────────────
// FIX: Korrektes Schema für Google Sitelinks – Array von SiteNavigationElement.
// @type: SiteNavigationElement ist der offizielle Schema.org-Standard.
// Wird als Array übergeben damit jedes Element ein eigenes JSON-LD-Block wird.
export const SITE_NAVIGATION_STRUCTURED_DATA = [
    {
        '@context': 'https://schema.org',
        '@type': 'SiteNavigationElement',
        '@id': `${BASE_URL}/#nav-unternehmen`,
        name: 'Unternehmen',
        description: 'Über PROMAX: Geschichte, Team, Zertifizierungen und Unternehmenskultur.',
        url: `${BASE_URL}/unternehmen`
    },
    {
        '@context': 'https://schema.org',
        '@type': 'SiteNavigationElement',
        '@id': `${BASE_URL}/#nav-leistungen`,
        name: 'Leistungen',
        description: 'Ingenieurplanung, 3D-Modellierung, Projektbetreuung und Bauüberwachung.',
        url: `${BASE_URL}/leistungen`
    },
    {
        '@context': 'https://schema.org',
        '@type': 'SiteNavigationElement',
        '@id': `${BASE_URL}/#nav-technologien`,
        name: 'Technologien',
        description: 'AutoCAD Plant 3D, Laserscanning, Virtual & Augmented Reality.',
        url: `${BASE_URL}/technologien`
    },
    {
        '@context': 'https://schema.org',
        '@type': 'SiteNavigationElement',
        '@id': `${BASE_URL}/#nav-karriere`,
        name: 'Karriere',
        description: 'Offene Stellen: CAD-Konstrukteure, Ingenieure und Projektmanager gesucht.',
        url: `${BASE_URL}/karriere`
    },
    {
        '@context': 'https://schema.org',
        '@type': 'SiteNavigationElement',
        '@id': `${BASE_URL}/#nav-kontakt`,
        name: 'Kontakt',
        description: 'Parkring 18/F, 8074 Raaba-Grambach | office@promax.at | +43 316 241 393',
        url: `${BASE_URL}/kontakt`
    }
];

// ─── Seitenspezifische SEO-Konfiguration ──────────────────────────────────────
export const seoConfig: SEOConfig = {
    // FIX: Canonical ohne trailing slash – konsistent mit allen anderen Seiten
    '/': {
        title: 'PROMAX Project Management – Industrieanlagenbau & Engineering in Graz',
        description: 'Ihr Partner für Projektmanagement im Industrieanlagenbau. Über 25 Jahre Erfahrung in Engineering, 3D-Planung und Projektabwicklung. ISO 9001:2015 zertifiziert. Standorte in Graz und Wien.',
        keywords: 'Industrieanlagenbau, Projektmanagement, Engineering, Graz, Österreich, ISO 9001, Anlagenplanung, Verfahrenstechnik, 3D Modellierung',
        canonical: `${BASE_URL}`,
        ogImage: `${BASE_URL}/og/og-home.jpg`,
        ogType: 'website',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${BASE_URL}/#webpage`,
            url: BASE_URL,
            name: 'PROMAX Project Management – Industrieanlagenbau & Engineering',
            isPartOf: { '@id': `${BASE_URL}/#website` },
            about: { '@id': `${BASE_URL}/#organization` },
            description: 'Umfassende Planung und Konzeptentwicklung für Industrieanlagen mit modernsten Methoden und Tools.',
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Start', item: BASE_URL }
                ]
            }
        }
    },

    '/unternehmen': {
        title: 'Unternehmen – Über PROMAX Project Management | 25+ Jahre Erfahrung',
        description: 'Seit 1999 Ihr verlässlicher Partner für Projektmanagement im Industrieanlagenbau. 100+ Experten, ISO 9001:2015 zertifiziert, 250+ erfolgreich abgeschlossene Projekte in Europa.',
        keywords: 'PROMAX Unternehmen, Unternehmensgeschichte, ISO Zertifizierung, Industrieanlagenbau Graz, Engineering Team, Andreas Rogl',
        canonical: `${BASE_URL}/unternehmen`,
        ogImage: `${BASE_URL}/og/og-unternehmen.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            '@id': `${BASE_URL}/unternehmen#webpage`,
            url: `${BASE_URL}/unternehmen`,
            name: 'Unternehmen – Über PROMAX Project Management',
            description: 'Geschichte, Team, ISO-Zertifizierungen und Unternehmenskultur der PROMAX Project Management GesmbH.',
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Start', item: BASE_URL },
                    { '@type': 'ListItem', position: 2, name: 'Unternehmen', item: `${BASE_URL}/unternehmen` }
                ]
            }
        }
    },

    '/leistungen': {
        title: 'Leistungen – Engineering, Planung & Projektmanagement | PROMAX',
        description: 'Ingenieurplanung, 3D-Modellierung & Berechnung, LaserScan-Technologie und operative Projektunterstützung für den Industrieanlagenbau. PROMAX – Ihr Engineering-Partner.',
        keywords: 'Engineering Services, 3D Planung, AutoCAD Plant 3D, Rohrleitungsplanung, Projektmanagement, Ingenieurplanung, Anlagenkonzeption',
        canonical: `${BASE_URL}/leistungen`,
        ogImage: `${BASE_URL}/og/og-leistungen.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `${BASE_URL}/leistungen#service`,
            url: `${BASE_URL}/leistungen`,
            name: 'Leistungen – PROMAX Engineering Services',
            description: 'Umfassende Ingenieurleistungen für Industrieanlagen: Planung, 3D-Modellierung, Projektbetreuung und Bauüberwachung.',
            serviceType: 'Industrial Plant Engineering',
            provider: {
                '@type': 'Organization',
                name: 'PROMAX Project Management GesmbH',
                url: BASE_URL
            },
            areaServed: { '@type': 'Country', name: 'Austria' },
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Engineering-Leistungen',
                itemListElement: [
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Ingenieurplanung',
                            description: 'Anlagenkonzeption, 3D-Modellierung und LaserScan-Technologie'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Operative Projektunterstützung',
                            description: 'Projektabwicklung, Ausschreibung und Fachbauüberwachung'
                        }
                    }
                ]
            },
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Start', item: BASE_URL },
                    { '@type': 'ListItem', position: 2, name: 'Leistungen', item: `${BASE_URL}/leistungen` }
                ]
            }
        }
    },

    '/technologien': {
        title: 'Technologien – 3D-CAD, Laserscanning & VR/AR | PROMAX',
        description: 'Modernste Engineering-Software: AutoCAD Plant 3D, PDMS, E3D, Intergraph Smart 3D. Dazu 3D-Laserscanning und Virtual & Augmented Reality für präzise Industrieplanung.',
        keywords: 'AutoCAD Plant 3D, PDMS, E3D, 3D Laserscanning, ROHR2, Inventor, Virtual Reality, Augmented Reality, Faro Scene',
        canonical: `${BASE_URL}/technologien`,
        ogImage: `${BASE_URL}/og/og-technologien.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${BASE_URL}/technologien#webpage`,
            url: `${BASE_URL}/technologien`,
            name: 'Technologien – 3D-CAD, Laserscanning & VR/AR | PROMAX',
            description: 'Übersicht der eingesetzten Engineering-Software und Technologien bei PROMAX.',
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Start', item: BASE_URL },
                    { '@type': 'ListItem', position: 2, name: 'Technologien', item: `${BASE_URL}/technologien` }
                ]
            }
        }
    },

    '/karriere': {
        title: 'Karriere bei PROMAX – Jobs im Industrieanlagenbau Graz & Wien',
        description: 'Jetzt bewerben bei PROMAX! Offene Stellen für 3D CAD-Konstrukteure, Ingenieure und Projektmanager in Raaba-Grambach, Wien und Bruck an der Leitha.',
        keywords: 'Jobs Graz, Karriere Industrieanlagenbau, Ingenieur Jobs, CAD Konstrukteur, Projektmanager, Engineering Jobs Österreich, PROMAX Stellenangebote',
        canonical: `${BASE_URL}/karriere`,
        ogImage: `${BASE_URL}/og/og-karriere.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${BASE_URL}/karriere#webpage`,
            url: `${BASE_URL}/karriere`,
            name: 'Karriere bei PROMAX – Jobs im Industrieanlagenbau',
            description: 'Offene Stellenangebote bei PROMAX Project Management GesmbH in Graz und Wien.',
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Start', item: BASE_URL },
                    { '@type': 'ListItem', position: 2, name: 'Karriere', item: `${BASE_URL}/karriere` }
                ]
            }
        }
    },

    '/kontakt': {
        title: 'Kontakt – PROMAX Project Management Graz & Wien',
        description: 'Nehmen Sie Kontakt mit PROMAX auf. Hauptsitz: Parkring 18/F, 8074 Raaba-Grambach. Niederlassung Wien: Löwengasse 3/5, 1030 Wien. Tel: +43 316 241 393',
        keywords: 'PROMAX Kontakt, Adresse Graz, Standort Wien, Projektanfrage, Engineering Anfrage, office@promax.at',
        canonical: `${BASE_URL}/kontakt`,
        ogImage: `${BASE_URL}/og/og-kontakt.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            '@id': `${BASE_URL}/kontakt#webpage`,
            url: `${BASE_URL}/kontakt`,
            name: 'Kontakt – PROMAX Project Management',
            description: 'Kontaktinformationen und Standorte der PROMAX Project Management GesmbH in Graz und Wien.',
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Start', item: BASE_URL },
                    { '@type': 'ListItem', position: 2, name: 'Kontakt', item: `${BASE_URL}/kontakt` }
                ]
            }
        }
    },

    '/rechtliches': {
        title: 'Impressum & Datenschutz – PROMAX Project Management',
        description: 'Impressum, Datenschutzerklärung und AGB der PROMAX Project Management GesmbH, Parkring 18/F, 8074 Raaba-Grambach.',
        canonical: `${BASE_URL}/rechtliches`,
        noindex: true,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Impressum & Datenschutz – PROMAX',
            url: `${BASE_URL}/rechtliches`
        }
    },

    '/projektberichte': {
        title: 'Projektberichte – Referenzen & Projekte | PROMAX',
        description: 'Ausgewählte Referenzprojekte und Projektberichte der PROMAX Project Management GesmbH aus dem Industrieanlagenbau.',
        canonical: `${BASE_URL}/projektberichte`,
        ogImage: `${BASE_URL}/og/og-home.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${BASE_URL}/projektberichte#webpage`,
            url: `${BASE_URL}/projektberichte`,
            name: 'Projektberichte – Referenzen & Projekte | PROMAX',
            description: 'Ausgewählte Referenzprojekte und Projektberichte der PROMAX Project Management GesmbH aus dem Industrieanlagenbau.',
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Start', item: BASE_URL },
                    { '@type': 'ListItem', position: 2, name: 'Projektberichte', item: `${BASE_URL}/projektberichte` }
                ]
            }
        }
    }
};

// ─── English SEO configuration ────────────────────────────────────────────────
export const seoConfigEn: SEOConfig = {
    '/': {
        title: 'PROMAX Project Management – Industrial Plant Construction & Engineering in Graz',
        description: 'Your partner for project management in industrial plant construction. Over 25 years of experience in engineering, 3D planning and project execution. ISO 9001:2015 certified. Locations in Graz and Vienna.',
        keywords: 'Industrial Plant Construction, Project Management, Engineering, Graz, Austria, ISO 9001, Plant Planning, Process Engineering, 3D Modeling',
        canonical: `${BASE_URL}/en`,
        ogImage: `${BASE_URL}/og/og-home.jpg`,
        ogType: 'website',
        structuredData: seoConfig['/'].structuredData,
    },
    '/unternehmen': {
        title: 'Company – About PROMAX Project Management | 25+ Years of Experience',
        description: 'Since 1999 your reliable partner for project management in industrial plant construction. 100+ experts, ISO 9001:2015 certified, 250+ successfully completed projects across Europe.',
        keywords: 'PROMAX Company, Company History, ISO Certification, Industrial Plant Construction Graz, Engineering Team, Andreas Rogl',
        canonical: `${BASE_URL}/en/unternehmen`,
        ogImage: `${BASE_URL}/og/og-unternehmen.jpg`,
        structuredData: seoConfig['/unternehmen'].structuredData,
    },
    '/leistungen': {
        title: 'Services – Engineering, Planning & Project Management | PROMAX',
        description: 'Engineering planning, 3D modeling & calculation, laser scan technology and operational project support for industrial plant construction. PROMAX – your engineering partner.',
        keywords: 'Engineering Services, 3D Planning, AutoCAD Plant 3D, Piping Planning, Project Management, Engineering Planning, Plant Conception',
        canonical: `${BASE_URL}/en/leistungen`,
        ogImage: `${BASE_URL}/og/og-leistungen.jpg`,
        structuredData: seoConfig['/leistungen'].structuredData,
    },
    '/technologien': {
        title: 'Technologies – 3D CAD, Laser Scanning & VR/AR | PROMAX',
        description: 'State-of-the-art engineering software: AutoCAD Plant 3D, PDMS, E3D, Intergraph Smart 3D. Plus 3D laser scanning and virtual & augmented reality for precise industrial planning.',
        keywords: 'AutoCAD Plant 3D, PDMS, E3D, 3D Laser Scanning, ROHR2, Inventor, Virtual Reality, Augmented Reality, Faro Scene',
        canonical: `${BASE_URL}/en/technologien`,
        ogImage: `${BASE_URL}/og/og-technologien.jpg`,
        structuredData: seoConfig['/technologien'].structuredData,
    },
    '/karriere': {
        title: 'Career at PROMAX – Jobs in Industrial Plant Construction Graz & Vienna',
        description: 'Apply now at PROMAX! Open positions for 3D CAD designers, engineers and project managers in Raaba-Grambach, Vienna and Bruck an der Leitha.',
        keywords: 'Jobs Graz, Career Industrial Plant Construction, Engineer Jobs, CAD Designer, Project Manager, Engineering Jobs Austria, PROMAX Vacancies',
        canonical: `${BASE_URL}/en/karriere`,
        ogImage: `${BASE_URL}/og/og-karriere.jpg`,
        structuredData: seoConfig['/karriere'].structuredData,
    },
    '/kontakt': {
        title: 'Contact – PROMAX Project Management Graz & Vienna',
        description: 'Get in touch with PROMAX. Headquarters: Parkring 18/F, 8074 Raaba-Grambach. Vienna branch: Löwengasse 3/5, 1030 Vienna. Tel: +43 316 241 393',
        keywords: 'PROMAX Contact, Address Graz, Vienna Location, Project Inquiry, Engineering Inquiry, office@promax.at',
        canonical: `${BASE_URL}/en/kontakt`,
        ogImage: `${BASE_URL}/og/og-kontakt.jpg`,
        structuredData: seoConfig['/kontakt'].structuredData,
    },
    '/rechtliches': {
        title: 'Legal Notice & Privacy Policy – PROMAX Project Management',
        description: 'Legal notice, privacy policy and general terms and conditions of PROMAX Project Management GesmbH, Parkring 18/F, 8074 Raaba-Grambach.',
        canonical: `${BASE_URL}/en/rechtliches`,
        noindex: true,
        structuredData: seoConfig['/rechtliches'].structuredData,
    },
    '/projektberichte': {
        title: 'Project Reports – References & Projects | PROMAX',
        description: 'Selected reference projects and project reports from PROMAX Project Management GesmbH in industrial plant construction.',
        canonical: `${BASE_URL}/en/projektberichte`,
        ogImage: `${BASE_URL}/og/og-home.jpg`,
        structuredData: seoConfig['/projektberichte'].structuredData,
    },
};

// Helper: SEO-Daten für Route abrufen
export const getSEOForRoute = (path: string, locale: string = 'de'): SEOPageConfig => {
    const config = locale === 'en' ? seoConfigEn : seoConfig;
    return config[path] || {
        title: locale === 'en'
            ? 'PROMAX Project Management – Industrial Plant Construction & Engineering'
            : 'PROMAX Project Management – Industrieanlagenbau & Engineering',
        description: locale === 'en'
            ? 'Project management in industrial plant construction. Over 25 years of experience, ISO 9001:2015 certified.'
            : 'Projektmanagement im Industrieanlagenbau. Über 25 Jahre Erfahrung, ISO 9001:2015 zertifiziert.',
        canonical: `${BASE_URL}/${locale}${path}`
    };
};

// Helper: Generiere vollständigen Title
export const generateTitle = (pageTitle: string): string => {
    if (pageTitle.includes('PROMAX')) {
        return pageTitle;
    }
    return `${pageTitle} | PROMAX Project Management`;
};
