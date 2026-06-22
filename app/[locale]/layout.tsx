import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import '../globals.css';
import '../globals-extra.css';
import StyledComponentsRegistry from '../registry/StyledComponentsRegistry';
import EmotionRegistry from '../registry/EmotionRegistry';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { CookieProvider } from '@/components/cookies/CookieContext';
import CookieBanner from '@/components/cookies/CookieBanner';
import ConditionalAnalytics from '@/components/ConditionalAnalytics';
import { StructuredData } from '@/components/StructuredData';
import {
  WEBSITE_STRUCTURED_DATA,
  ORGANIZATION_STRUCTURED_DATA,
  SITE_NAVIGATION_STRUCTURED_DATA,
} from '@/lib/seo-config';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <StyledComponentsRegistry>
          <EmotionRegistry>
            <NextIntlClientProvider messages={messages}>
              <CookieProvider>
                <Navbar />
                <ScrollToTop />
                {children}
                <Footer />
                <CookieBanner />
                <ConditionalAnalytics />
                <StructuredData data={WEBSITE_STRUCTURED_DATA} />
                <StructuredData data={ORGANIZATION_STRUCTURED_DATA} />
                {SITE_NAVIGATION_STRUCTURED_DATA.map((d, i) => (
                  <StructuredData key={i} data={d} />
                ))}
              </CookieProvider>
            </NextIntlClientProvider>
          </EmotionRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
