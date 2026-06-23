import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Kontakt from '@/components/Kontakt';
import { StructuredData } from '@/components/StructuredData';
import { getSEOForRoute } from '@/lib/seo-config';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata('/kontakt', locale);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const seo = getSEOForRoute('/kontakt');
  return (
    <>
      {seo.structuredData && <StructuredData data={seo.structuredData} />}
      <Kontakt />
    </>
  );
}
