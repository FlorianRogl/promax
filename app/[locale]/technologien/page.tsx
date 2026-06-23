import { setRequestLocale } from 'next-intl/server';
import Technologies from '@/components/Technologies';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Technologies />;
}
