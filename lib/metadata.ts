import type { Metadata } from 'next';
import { getSEOForRoute, generateTitle, BASE_URL } from './seo-config';

export function buildMetadata(routeKey: string, locale: string): Metadata {
  const seo = getSEOForRoute(routeKey, locale);
  const path = routeKey === '/' ? '' : routeKey;
  const canonical = `${BASE_URL}/${locale}${path}`;
  return {
    title: generateTitle(seo.title),
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical,
      languages: {
        de: `${BASE_URL}/de${path}`,
        en: `${BASE_URL}/en${path}`,
        'x-default': `${BASE_URL}/de${path}`,
      },
    },
    // follow bleibt auch bei noindex aktiv: die Seite soll nicht in den Index,
    // ihre ausgehenden Links sollen aber weiterhin gewertet werden.
    robots: seo.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    verification: {
      google: 'bK85IfVXd0152XfJuoImUga2LRl0OxgKc9D9oZrErYI',
    },
    openGraph: {
      title: generateTitle(seo.title),
      description: seo.description,
      url: canonical,
      siteName: 'PROMAX Project Management',
      locale: locale === 'de' ? 'de_AT' : 'en_US',
      type: (seo.ogType as 'website') || 'website',
      images: seo.ogImage ? [{ url: seo.ogImage, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: generateTitle(seo.title),
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
    },
  };
}
