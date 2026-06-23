import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo-config';

const routes = ['', '/unternehmen', '/leistungen', '/technologien', '/karriere', '/kontakt', '/projektberichte'];

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['de', 'en'];
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' || route === '/karriere' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: { de: `${BASE_URL}/de${route}`, en: `${BASE_URL}/en${route}` },
        },
      });
    }
  }
  return entries;
}
