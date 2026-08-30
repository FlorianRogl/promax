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
        width: 1000,
        height: 323
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
            availableLanguage: ['de', 'en'],
            areaServed: 'AT'
        }
    ],
    // sameAs beschreibt Profile DIESER Organisation. Vorher stand hier das
    // persönliche LinkedIn-Profil von Andreas Rogl – eine andere Entität.
    sameAs: [
        'https://www.linkedin.com/company/promax-project-management'
    ],
    hasMap: `https://maps.google.com/?q=Parkring+18,+8074+Raaba-Grambach`
};

// ─── Locale-aware global structured data ──────────────────────────────────────
// Returns WebSite + Organization objects with locale-appropriate descriptions.
export function getGlobalStructuredData(locale: string): object[] {
    const isEn = locale === 'en';
    const website = {
        ...WEBSITE_STRUCTURED_DATA,
        description: isEn
            ? 'Project management in industrial plant construction – over 25 years of experience, ISO 9001:2015 certified.'
            : WEBSITE_STRUCTURED_DATA.description,
        inLanguage: isEn ? 'en' : 'de',
    };
    const organization = {
        ...ORGANIZATION_STRUCTURED_DATA,
        description: isEn
            ? 'Project management in industrial plant construction. Comprehensive engineering, 3D modelling, laser scanning and operational project support.'
            : ORGANIZATION_STRUCTURED_DATA.description,
    };
    return [website, organization];
}

// ─── LocalBusiness Structured Data (two locations) ────────────────────────────
// openingHours + geo werden ergänzt, sobald von der Firma / Google Business Profile bestätigt
export const LOCALBUSINESS_STRUCTURED_DATA: object[] = [
    {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${BASE_URL}/#localbusiness-hq`,
        name: 'PROMAX Project Management GesmbH',
        url: BASE_URL,
        telephone: '+43-316-241393',
        email: 'office@promax.at',
        image: `${BASE_URL}/og/logo.png`,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Parkring 18/F',
            postalCode: '8074',
            addressLocality: 'Raaba-Grambach',
            addressCountry: 'AT'
        },
        areaServed: 'AT',
        hasMap: `https://maps.google.com/?q=Parkring+18,+8074+Raaba-Grambach`
    },
    {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${BASE_URL}/#localbusiness-vienna`,
        name: 'PROMAX Project Management GesmbH – Niederlassung Wien',
        url: BASE_URL,
        telephone: '+43-1-710-7748',
        image: `${BASE_URL}/og/logo.png`,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Löwengasse 3/5',
            postalCode: '1030',
            addressLocality: 'Wien',
            addressCountry: 'AT'
        },
        areaServed: 'AT',
        branchOf: {
            '@type': 'Organization',
            '@id': `${BASE_URL}/#organization`
        }
    }
];

// ─── SiteNavigationElement Structured Data ────────────────────────────────────
// FIX: Korrektes Schema für Google Sitelinks – Array von SiteNavigationElement.
// @type: SiteNavigationElement ist der offizielle Schema.org-Standard.
// Wird als Array übergeben damit jedes Element ein eigenes JSON-LD-Block wird.
type NavEntry = { slug: string; de: { name: string; description: string }; en: { name: string; description: string } };

const NAV_ENTRIES: NavEntry[] = [
    {
        slug: 'unternehmen',
        de: { name: 'Unternehmen', description: 'Über PROMAX: Geschichte, Team, Zertifizierungen und Unternehmenskultur.' },
        en: { name: 'Company', description: 'About PROMAX: history, team, certifications and corporate culture.' }
    },
    {
        slug: 'leistungen',
        de: { name: 'Leistungen', description: 'Ingenieurplanung, 3D-Modellierung, Projektbetreuung und Bauüberwachung.' },
        en: { name: 'Services', description: 'Engineering planning, 3D modelling, project support and construction supervision.' }
    },
    {
        slug: 'technologien',
        de: { name: 'Technologien', description: 'AutoCAD Plant 3D, Laserscanning, Virtual & Augmented Reality.' },
        en: { name: 'Technologies', description: 'AutoCAD Plant 3D, laser scanning, virtual & augmented reality.' }
    },
    {
        slug: 'karriere',
        de: { name: 'Karriere', description: 'Offene Stellen: CAD-Konstrukteure, Ingenieure und Projektmanager gesucht.' },
        en: { name: 'Career', description: 'Open positions: CAD designers, engineers and project managers wanted.' }
    },
    {
        slug: 'kontakt',
        de: { name: 'Kontakt', description: 'Parkring 18/F, 8074 Raaba-Grambach | office@promax.at | +43 316 241 393' },
        en: { name: 'Contact', description: 'Parkring 18/F, 8074 Raaba-Grambach | office@promax.at | +43 316 241 393' }
    }
];

// Locale-abhängig: sonst tragen die EN-Seiten deutsche Menünamen und URLs
// ohne /en-Präfix (die dann per 308 umleiten).
export function getSiteNavigationStructuredData(locale: string): object[] {
    const lang = locale === 'en' ? 'en' : 'de';
    return NAV_ENTRIES.map((entry) => ({
        '@context': 'https://schema.org',
        '@type': 'SiteNavigationElement',
        '@id': `${BASE_URL}/${lang}#nav-${entry.slug}`,
        name: entry[lang].name,
        description: entry[lang].description,
        url: `${BASE_URL}/${lang}/${entry.slug}`
    }));
}

// ─── Seitenspezifische SEO-Konfiguration ──────────────────────────────────────
export const seoConfig: SEOConfig = {
    // FIX: Canonical ohne trailing slash – konsistent mit allen anderen Seiten
    '/': {
        title: 'PROMAX Project Management – Industrieanlagenbau Graz',
        description: 'Projektmanagement & Engineering im Industrieanlagenbau – über 25 Jahre Erfahrung, ISO 9001 zertifiziert. Standorte in Graz und Wien.',
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
        title: 'Unternehmen – PROMAX Project Management | 25+ Jahre',
        description: 'Seit 1999 Ihr Partner für Projektmanagement im Industrieanlagenbau: 35 Experten, ISO 9001:2015 zertifiziert, 1000+ Projekte in Europa.',
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
        title: 'Leistungen – Engineering & Planung | PROMAX',
        description: 'Ingenieurplanung, 3D-Modellierung, LaserScan-Technologie und operative Projektunterstützung für den Industrieanlagenbau.',
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
        description: 'Engineering-Software: AutoCAD Plant 3D, PDMS, E3D, Smart 3D. Dazu 3D-Laserscanning und Virtual & Augmented Reality für die Industrieplanung.',
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
        title: 'Karriere bei PROMAX – Jobs im Anlagenbau Graz & Wien',
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

};

// ─── English SEO configuration ────────────────────────────────────────────────
export const seoConfigEn: SEOConfig = {
    '/': {
        title: 'PROMAX Project Management – Industrial Plant Engineering',
        description: 'Project management & engineering for industrial plant construction – 25+ years\' experience, ISO 9001 certified. Offices in Graz & Vienna.',
        keywords: 'Industrial Plant Construction, Project Management, Engineering, Graz, Austria, ISO 9001, Plant Planning, Process Engineering, 3D Modeling',
        canonical: `${BASE_URL}/en`,
        ogImage: `${BASE_URL}/og/og-home.jpg`,
        ogType: 'website',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${BASE_URL}/#webpage`,
            url: BASE_URL,
            name: 'PROMAX Project Management – Industrial Plant Engineering',
            isPartOf: { '@id': `${BASE_URL}/#website` },
            about: { '@id': `${BASE_URL}/#organization` },
            description: 'Comprehensive planning and concept development for industrial plants using the latest methods and tools.',
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Start', item: BASE_URL }
                ]
            }
        }
    },
    '/unternehmen': {
        title: 'Company – PROMAX Project Management | 25+ Years',
        description: 'Your partner for industrial plant project management since 1999: 35 experts, ISO 9001:2015 certified, 1000+ projects across Europe.',
        keywords: 'PROMAX Company, Company History, ISO Certification, Industrial Plant Construction Graz, Engineering Team, Andreas Rogl',
        canonical: `${BASE_URL}/en/unternehmen`,
        ogImage: `${BASE_URL}/og/og-unternehmen.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            '@id': `${BASE_URL}/unternehmen#webpage`,
            url: `${BASE_URL}/unternehmen`,
            name: 'Company – About PROMAX Project Management',
            description: 'History, team, ISO certifications and corporate culture of PROMAX Project Management GesmbH.',
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Start', item: BASE_URL },
                    { '@type': 'ListItem', position: 2, name: 'Company', item: `${BASE_URL}/en/unternehmen` }
                ]
            }
        }
    },
    '/leistungen': {
        title: 'Services – Engineering & Planning | PROMAX',
        description: 'Engineering planning, 3D modeling, laser scan technology and operational project support for industrial plant construction.',
        keywords: 'Engineering Services, 3D Planning, AutoCAD Plant 3D, Piping Planning, Project Management, Engineering Planning, Plant Conception',
        canonical: `${BASE_URL}/en/leistungen`,
        ogImage: `${BASE_URL}/og/og-leistungen.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `${BASE_URL}/leistungen#service`,
            url: `${BASE_URL}/leistungen`,
            name: 'Services – PROMAX Engineering Services',
            description: 'Comprehensive engineering services for industrial plants: planning, 3D modelling, project support and construction supervision.',
            serviceType: 'Industrial Plant Engineering',
            provider: {
                '@type': 'Organization',
                name: 'PROMAX Project Management GesmbH',
                url: BASE_URL
            },
            areaServed: { '@type': 'Country', name: 'Austria' },
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Engineering Services',
                itemListElement: [
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Engineering Planning',
                            description: 'Plant conception, 3D modelling and laser scan technology'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Operational Project Support',
                            description: 'Project execution, tendering and specialist construction supervision'
                        }
                    }
                ]
            },
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Start', item: BASE_URL },
                    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/en/leistungen` }
                ]
            }
        }
    },
    '/technologien': {
        title: 'Technologies – 3D CAD, Laser Scanning & VR/AR | PROMAX',
        description: 'Engineering software: AutoCAD Plant 3D, PDMS, E3D, Smart 3D. Plus 3D laser scanning and virtual & augmented reality for industrial planning.',
        keywords: 'AutoCAD Plant 3D, PDMS, E3D, 3D Laser Scanning, ROHR2, Inventor, Virtual Reality, Augmented Reality, Faro Scene',
        canonical: `${BASE_URL}/en/technologien`,
        ogImage: `${BASE_URL}/og/og-technologien.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${BASE_URL}/technologien#webpage`,
            url: `${BASE_URL}/technologien`,
            name: 'Technologies – 3D CAD, Laser Scanning & VR/AR | PROMAX',
            description: 'Overview of engineering software and technologies used at PROMAX.',
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Start', item: BASE_URL },
                    { '@type': 'ListItem', position: 2, name: 'Technologies', item: `${BASE_URL}/en/technologien` }
                ]
            }
        }
    },
    '/karriere': {
        title: 'Career at PROMAX – Engineering Jobs Graz & Vienna',
        description: 'Apply now at PROMAX! Open positions for 3D CAD designers, engineers and project managers in Raaba-Grambach, Vienna and Bruck an der Leitha.',
        keywords: 'Jobs Graz, Career Industrial Plant Construction, Engineer Jobs, CAD Designer, Project Manager, Engineering Jobs Austria, PROMAX Vacancies',
        canonical: `${BASE_URL}/en/karriere`,
        ogImage: `${BASE_URL}/og/og-karriere.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${BASE_URL}/karriere#webpage`,
            url: `${BASE_URL}/karriere`,
            name: 'Career at PROMAX – Jobs in Industrial Plant Construction',
            description: 'Open job listings at PROMAX Project Management GesmbH in Graz and Vienna.',
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Start', item: BASE_URL },
                    { '@type': 'ListItem', position: 2, name: 'Career', item: `${BASE_URL}/en/karriere` }
                ]
            }
        }
    },
    '/kontakt': {
        title: 'Contact – PROMAX Project Management Graz & Vienna',
        description: 'Get in touch with PROMAX. Headquarters: Parkring 18/F, 8074 Raaba-Grambach. Vienna branch: Löwengasse 3/5, 1030 Vienna. Tel: +43 316 241 393',
        keywords: 'PROMAX Contact, Address Graz, Vienna Location, Project Inquiry, Engineering Inquiry, office@promax.at',
        canonical: `${BASE_URL}/en/kontakt`,
        ogImage: `${BASE_URL}/og/og-kontakt.jpg`,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            '@id': `${BASE_URL}/kontakt#webpage`,
            url: `${BASE_URL}/kontakt`,
            name: 'Contact – PROMAX Project Management',
            description: 'Contact information and locations of PROMAX Project Management GesmbH in Graz and Vienna.',
            breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Start', item: BASE_URL },
                    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/en/kontakt` }
                ]
            }
        }
    },
    '/rechtliches': {
        title: 'Legal Notice & Privacy Policy – PROMAX Project Management',
        description: 'Legal notice, privacy policy and general terms and conditions of PROMAX Project Management GesmbH, Parkring 18/F, 8074 Raaba-Grambach.',
        canonical: `${BASE_URL}/en/rechtliches`,
        noindex: true,
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Legal Notice & Privacy Policy – PROMAX',
            url: `${BASE_URL}/en/rechtliches`
        }
    },
};

// ─── Locale-Präfix in JSON-LD-URLs ────────────────────────────────────────────
// Die structuredData-Blöcke oben sind ohne /de bzw. /en notiert. Ohne Korrektur
// zeigen url/@id auf URLs, die es gar nicht gibt (sie leiten mit 308 um) und
// widersprechen damit dem Canonical-Tag der Seite. Zusätzlich hätten DE- und
// EN-Seite dieselbe @id – zwei Seiten, eine Entitäts-ID.

// Global im Layout ausgegebene Entitäten: sprachunabhängig, dürfen NICHT
// umgeschrieben werden, sonst laufen die isPartOf/about-Referenzen ins Leere.
const GLOBAL_ENTITY_IDS = new Set([`${BASE_URL}/#website`, `${BASE_URL}/#organization`]);

// Statische Assets liegen nicht unter einem Locale-Präfix.
const STATIC_PREFIXES = ['/og/', '/jobs/', '/documents/', '/_next/'];

const localizeUrl = (value: string, locale: string): string => {
    if (GLOBAL_ENTITY_IDS.has(value)) return value;
    if (!value.startsWith(BASE_URL)) return value;

    const rest = value.slice(BASE_URL.length);
    if (/^\/(de|en)(\/|#|$)/.test(rest)) return value; // bereits lokalisiert
    if (STATIC_PREFIXES.some((p) => rest.startsWith(p))) return value;

    return `${BASE_URL}/${locale}${rest}`;
};

const localizeStructuredData = (data: unknown, locale: string): unknown => {
    if (typeof data === 'string') return localizeUrl(data, locale);
    if (Array.isArray(data)) return data.map((d) => localizeStructuredData(d, locale));
    if (data && typeof data === 'object') {
        return Object.fromEntries(
            Object.entries(data).map(([k, v]) => [k, localizeStructuredData(v, locale)])
        );
    }
    return data;
};

// Helper: SEO-Daten für Route abrufen
export const getSEOForRoute = (path: string, locale: string = 'de'): SEOPageConfig => {
    const config = locale === 'en' ? seoConfigEn : seoConfig;
    const entry = config[path];
    if (entry) {
        return entry.structuredData
            ? { ...entry, structuredData: localizeStructuredData(entry.structuredData, locale) as object }
            : entry;
    }
    return {
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
