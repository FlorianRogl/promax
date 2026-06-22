// Server component – no 'use client' needed
// Renders JSON-LD structured data script tags.
// Replaces react-helmet/Helmet usage from the old SPA version.

interface StructuredDataProps {
    data: object | object[];
}

export const StructuredData = ({ data }: StructuredDataProps) => {
    const items = Array.isArray(data) ? data : [data];

    return (
        <>
            {items.map((item, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
                />
            ))}
        </>
    );
};

// Vordefinierte Structured Data Templates
export const StructuredDataTemplates = {
    // Breadcrumb
    breadcrumb: (items: { name: string; url: string }[]) => ({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    }),

    // FAQ
    faq: (questions: { question: string; answer: string }[]) => ({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions.map(q => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: q.answer
            }
        }))
    }),

    // Article
    article: (config: {
        headline: string;
        description: string;
        author: string;
        datePublished: string;
        dateModified?: string;
        image?: string;
    }) => ({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: config.headline,
        description: config.description,
        author: {
            '@type': 'Organization',
            name: config.author
        },
        publisher: {
            '@type': 'Organization',
            name: 'PROMAX Project Management GesmbH',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.promax.at/og/logo.png'
            }
        },
        datePublished: config.datePublished,
        dateModified: config.dateModified || config.datePublished,
        ...(config.image && {
            image: {
                '@type': 'ImageObject',
                url: config.image
            }
        })
    }),

    // Job Posting
    jobPosting: (job: {
        title: string;
        description: string;
        datePosted: string;
        validThrough?: string;
        employmentType?: string;
        location?: string;
        baseSalary?: number;
    }) => ({
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: job.title,
        description: job.description,
        datePosted: job.datePosted,
        validThrough: job.validThrough || new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
        employmentType: job.employmentType || 'FULL_TIME',
        hiringOrganization: {
            '@type': 'Organization',
            name: 'PROMAX Project Management GesmbH',
            sameAs: 'https://www.promax.at'
        },
        jobLocation: {
            '@type': 'Place',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Parkring 18/F',
                addressLocality: job.location || 'Raaba-Grambach',
                postalCode: '8074',
                addressCountry: 'AT'
            }
        },
        ...(job.baseSalary && {
            baseSalary: {
                '@type': 'MonetaryAmount',
                currency: 'EUR',
                value: {
                    '@type': 'QuantitativeValue',
                    value: job.baseSalary,
                    unitText: 'YEAR'
                }
            }
        })
    }),

    // Local Business
    localBusiness: (location: 'graz' | 'wien') => {
        const locations = {
            graz: {
                name: 'PROMAX Project Management GesmbH - Hauptsitz Graz',
                address: {
                    streetAddress: 'Parkring 18/F',
                    addressLocality: 'Raaba-Grambach',
                    postalCode: '8074'
                },
                telephone: '+43-316-241393',
                geo: {
                    latitude: 47.0379,
                    longitude: 15.4461
                }
            },
            wien: {
                name: 'PROMAX Project Management GesmbH - Niederlassung Wien',
                address: {
                    streetAddress: 'Löwengasse 3/5',
                    addressLocality: 'Wien',
                    postalCode: '1030'
                },
                telephone: '+43-1-234567890',
                geo: {
                    latitude: 48.1951,
                    longitude: 16.3897
                }
            }
        };

        const loc = locations[location];

        return {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: loc.name,
            image: 'https://www.promax.at/og/og-home.jpg',
            '@id': `https://www.promax.at/#${location}`,
            url: 'https://www.promax.at',
            telephone: loc.telephone,
            priceRange: '€€€',
            address: {
                '@type': 'PostalAddress',
                ...loc.address,
                addressCountry: 'AT'
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: loc.geo.latitude,
                longitude: loc.geo.longitude
            },
            openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '17:00'
            },
            sameAs: [
                'https://www.linkedin.com/company/promax-project-management',
                'https://www.facebook.com/promaxat'
            ]
        };
    }
};

export default StructuredData;
