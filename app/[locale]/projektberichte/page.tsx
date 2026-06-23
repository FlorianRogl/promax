import type { Metadata } from 'next';
import { Suspense } from 'react';
import { setRequestLocale } from 'next-intl/server';
import Projektberichte from '@/components/Projektberichte';
import { StructuredData } from '@/components/StructuredData';
import { getSEOForRoute } from '@/lib/seo-config';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata('/projektberichte', locale);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const seo = getSEOForRoute('/projektberichte');
  return (
    <>
      {seo.structuredData && <StructuredData data={seo.structuredData} />}
      <Suspense fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1e3767] mx-auto mb-4"></div>
            <p className="text-gray-600">Projekt wird geladen...</p>
          </div>
        </div>
      }>
        <Projektberichte />
      </Suspense>
    </>
  );
}
