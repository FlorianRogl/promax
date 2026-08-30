import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo-config';

const routes = ['', '/unternehmen', '/leistungen', '/technologien', '/karriere', '/kontakt'];

// Feste Datumsangaben je Route – bewusst NICHT `new Date()`: das stempelte bei
// jedem Deploy alle URLs auf die Build-Zeit, woraufhin Google <lastmod> ignoriert.
// Eintrag nur anpassen, wenn sich der Inhalt der Seite tatsächlich ändert.
const lastModified: Record<string, string> = {
  '': '2026-08-30',
  '/unternehmen': '2026-08-30',
  '/leistungen': '2026-08-30',
  '/technologien': '2026-08-30',
  '/karriere': '2026-08-30',
  '/kontakt': '2026-08-30',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['de', 'en'];
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: lastModified[route],
        changeFrequency: route === '' || route === '/karriere' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            de: `${BASE_URL}/de${route}`,
            en: `${BASE_URL}/en${route}`,
            'x-default': `${BASE_URL}/de${route}`,
          },
        },
      });
    }
  }
  return entries;
}
