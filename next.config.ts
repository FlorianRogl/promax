import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: { unoptimized: true },
};

export default withNextIntl(nextConfig);
