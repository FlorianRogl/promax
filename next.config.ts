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
    const map: [string, string][] = [
      ['/Unternehmen', '/de/unternehmen'],
      ['/Leistungen', '/de/leistungen'],
      ['/Technologien', '/de/technologien'],
      ['/Karriere', '/de/karriere'],
      ['/Kontakt', '/de/kontakt'],
      ['/Projektberichte', '/de/projektberichte'],
      ['/Rechtliches', '/de/rechtliches'],
    ];
    return map.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default withNextIntl(nextConfig);
