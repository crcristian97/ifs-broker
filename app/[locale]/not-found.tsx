import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import NotFoundClient from './NotFoundClient';

export default async function NotFound({
  params,
}: {
  params?: Promise<{ locale?: string }>;
}) {
  const resolved = params ? await params : {};
  const locale = resolved?.locale;
  const validLocale =
    locale && routing.locales.includes(locale as any)
      ? locale
      : routing.defaultLocale;

  const t = await getTranslations({ locale: validLocale, namespace: 'notFound' });

  return (
    <NotFoundClient 
      tTitle={t('title')}
      tDescription={t('description')}
      tButton={t('button')}
    />
  );
}
