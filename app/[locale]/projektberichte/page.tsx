import { Suspense } from 'react';
import { setRequestLocale } from 'next-intl/server';
import Projektberichte from '@/components/Projektberichte';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
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
  );
}
