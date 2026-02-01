// Sitemap Generator für PROMAX
// Wird automatisch beim Build ausgeführt

import { BASE_URL } from '../seo/SEOConfig';

interface SitemapURL {
    loc: string;
    lastmod?: string;
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
}

// Statische Seiten
const staticPages: SitemapURL[] = [
    {
        loc: `${BASE_URL}/`,
        changefreq: 'weekly',
        priority: 1.0
    },
    {
        loc: `${BASE_URL}/Unternehmen`,
        changefreq: 'monthly',
        priority: 0.9
    },
    {
        loc: `${BASE_URL}/Leistungen`,
        changefreq: 'monthly',
        priority: 0.9
    },
    {
        loc: `${BASE_URL}/Technologien`,
        changefreq: 'monthly',
        priority: 0.8
    },
    {
        loc: `${BASE_URL}/Karriere`,
        changefreq: 'weekly',
        priority: 0.8
    },
    {
        loc: `${BASE_URL}/Kontakt`,
        changefreq: 'monthly',
        priority: 0.7
    },
    {
        loc: `${BASE_URL}/FitImJob`,
        changefreq: 'yearly',
        priority: 0.5
    },
    {
        loc: `${BASE_URL}/Rechtliches`,
        changefreq: 'yearly',
        priority: 0.3
    }
];

// Generiere XML Sitemap
export const generateSitemap = (additionalURLs: SitemapURL[] = []): string => {
    const allURLs = [...staticPages, ...additionalURLs];

    const urlEntries = allURLs.map(url => `
  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries}
</urlset>`;
};

// Beispiel: Projektberichte hinzufügen (wenn dynamisch)
export const addProjectReports = (projectIds: number[]): SitemapURL[] => {
    return projectIds.map(id => ({
        loc: `${BASE_URL}/Projektberichte?project=${id}`,
        changefreq: 'monthly',
        priority: 0.6
    }));
};

// Beispiel: Job-Postings hinzufügen (wenn dynamisch aus Sanity)
export const addJobPostings = (jobIds: string[]): SitemapURL[] => {
    return jobIds.map(id => ({
        loc: `${BASE_URL}/Karriere?job=${id}`,
        changefreq: 'weekly',
        priority: 0.7
    }));
};