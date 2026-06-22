'use client';
import { Analytics } from '@vercel/analytics/react';
import { useCookieConsent } from '@/components/cookies/CookieContext';

export default function ConditionalAnalytics() {
  const { consent } = useCookieConsent();
  if (!consent.analytics) return null;
  return <Analytics />;
}
