import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Unternehmen from '@/components/Unternehmen';
import { StructuredData } from '@/components/StructuredData';
import { getSEOForRoute } from '@/lib/seo-config';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata('/unternehmen', locale);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const seo = getSEOForRoute('/unternehmen');
  return (
    <>
      {seo.structuredData && <StructuredData data={seo.structuredData} />}
      <Unternehmen />
    </>
  );
}
