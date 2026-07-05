import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: { unoptimized: true },
  async redirects() {
    // Alte großgeschriebene Routen der früheren Seite
    const legacyCaps: [string, string][] = [
      ['/Unternehmen', '/de/unternehmen'],
      ['/Leistungen', '/de/leistungen'],
      ['/Technologien', '/de/technologien'],
      ['/Karriere', '/de/karriere'],
      ['/Kontakt', '/de/kontakt'],
      ['/Projektberichte', '/de/projektberichte'],
      ['/Rechtliches', '/de/rechtliches'],
    ];

    // Altes "lccms"-CMS: Ordner-ID (_00XXX) identifiziert Seite + Sprache eindeutig.
    // Jede alte Seite wird auf die thematisch passende neue URL 301-weitergeleitet.
    const lccms: Record<string, string> = {
      // ── Deutsch ──────────────────────────────────────────────
      _00528: '/de/kontakt',        // Kontakt
      _00564: '/de/kontakt',        // Kontaktdaten
      _00574: '/de/leistungen',     // industrieller Anlagenbau / Project Management
      _00575: '/de/leistungen',     // Projektmanagement Industrieanlagenbau
      _00576: '/de/unternehmen',    // Anlagenbau Grundsätze
      _00577: '/de/kontakt',        // Projektmanagement Ansprechpartner
      _00579: '/de',                // Downloads
      _00580: '/de/leistungen',     // Leistungen
      _00581: '/de/leistungen',     // Projektierung
      _00583: '/de/leistungen',     // Projektmanagement
      _00585: '/de/leistungen',     // Industrieanlagenbau-Planung
      _00587: '/de/technologien',   // Planung PDMS
      _00588: '/de/technologien',   // Rohrleitungsberechnungen
      _00589: '/de/leistungen',     // Site-Service
      _00591: '/de/leistungen',     // Organisationsberatung
      _00594: '/de/kontakt',        // Kontakt
      _00595: '/de/rechtliches',    // Impressum
      _00605: '/de/kontakt',        // Kontaktformular
      _00613: '/de/leistungen',     // Chemieanlagen-Planung
      _00614: '/de/leistungen',     // Energie- und Umweltplanung
      _00615: '/de/leistungen',     // Pharmaindustrie-Planung
      _00616: '/de/leistungen',     // Papierindustrie-Anlagenbau
      _00617: '/de/leistungen',     // Industrieanlagenbau
      _00618: '/de/leistungen',     // Projektverfolgung
      _00620: '/de/unternehmen',    // History and Development
      _00621: '/de/karriere',       // Jobs u. Karriere
      _00622: '/de/kontakt',        // Kontaktformular
      _00625: '/de/leistungen',     // Säureschutzauskleidung
      _00629: '/de/leistungen',     // Chemie
      _00630: '/de/leistungen',     // Energie & Umwelt
      _00631: '/de/leistungen',     // Pharma
      _00632: '/de/leistungen',     // Papier & Zellstoff
      _00633: '/de/projektberichte',// Weitere Referenzen
      _00635: '/de/technologien',   // PDMS-Planung
      _00637: '/de/karriere',       // Who should be interested in
      _00640: '/de/leistungen',     // GMP-Beratung
      _00641: '/de/technologien',   // AutoCAD Plant 3D
      _00643: '/de/leistungen',     // Contract & Claims Management
      _00644: '/de/technologien',   // 3D-Laserscanning
      _00686: '/de/unternehmen',    // History and Development
      _00688: '/de/kontakt',        // Anfahrt
      // ── Englisch ─────────────────────────────────────────────
      _00645: '/en/leistungen',     // industrial plant / Project Management
      _00650: '/en/projektberichte',// Projektberichte
      _00651: '/en/leistungen',     // Säureschutzauskleidung
      _00655: '/en/leistungen',     // Projektierung
      _00656: '/en/leistungen',     // Projektmanagement
      _00660: '/en/technologien',   // Planung PDMS
      _00661: '/en/technologien',   // Rohrleitungsberechnungen
      _00662: '/en/technologien',   // AutoCAD Plant 3D
      _00667: '/en/leistungen',     // Anlagenbau Chemieunternehmen
      _00671: '/en/leistungen',     // Papierindustrie-Anlagenbau
      _00674: '/en/leistungen',     // Chemie
      _00675: '/en/leistungen',     // Energie & Umwelt
      _00677: '/en/leistungen',     // Papier & Zellstoff
      _00678: '/en/projektberichte',// Weitere Referenzen
      _00679: '/en/kontakt',        // Kontakt
      _00680: '/en/karriere',       // Jobs u. Karriere
      _00684: '/en/rechtliches',    // Impressum
      _00685: '/en/kontakt',        // Kontakt
    };

    return [
      ...legacyCaps.map(([source, destination]) => ({ source, destination, permanent: true })),
      ...Object.entries(lccms).map(([id, destination]) => ({
        source: `/_lccms_/${id}/:path*`,
        destination,
        permanent: true,
      })),
      // Alte Einstiegs-URLs
      { source: '/index.php', has: [{ type: 'query' as const, key: 'LANG', value: 'eng' }], destination: '/en', permanent: true },
      { source: '/index.php', destination: '/de', permanent: true },
      { source: '/branchen/:path*', destination: '/de/leistungen', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
