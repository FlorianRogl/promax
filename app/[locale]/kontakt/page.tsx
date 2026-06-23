import { setRequestLocale } from 'next-intl/server';
import Kontakt from '@/components/Kontakt';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Kontakt />;
}
