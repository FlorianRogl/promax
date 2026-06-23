import { setRequestLocale } from 'next-intl/server';
import Rechtliches from '@/components/Rechtliches';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Rechtliches />;
}
