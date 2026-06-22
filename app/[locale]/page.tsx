import { setRequestLocale } from 'next-intl/server';
import Homepage from '@/components/Homepage/Homepage';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Homepage />;
}
