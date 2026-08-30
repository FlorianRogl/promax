import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo-config';

export default function robots(): MetadataRoute.Robots {
  return {
    // Kein Disallow für /rechtliches: die Seite trägt ein noindex-Meta-Tag.
    // Würde robots.txt das Crawlen verbieten, könnte Google das noindex nie
    // lesen – die URL landet dann trotzdem (ohne Snippet) im Index.
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
