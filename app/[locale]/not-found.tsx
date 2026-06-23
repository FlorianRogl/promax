import { Link } from '@/i18n/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Seite nicht gefunden</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
          Die gewünschte Seite wurde möglicherweise verschoben, umbenannt oder ist vorübergehend nicht verfügbar.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center text-blue-600">
          <Link href="/" className="hover:text-blue-800 hover:underline font-medium">Zur Startseite</Link>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Vielleicht helfen Ihnen diese Links weiter:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/unternehmen" className="text-blue-600 hover:text-blue-800 hover:underline">Unternehmen</Link>
            <Link href="/leistungen" className="text-blue-600 hover:text-blue-800 hover:underline">Leistungen</Link>
            <Link href="/kontakt" className="text-blue-600 hover:text-blue-800 hover:underline">Kontakt</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
