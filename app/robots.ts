import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/de/rechtliches', '/en/rechtliches'] }],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
