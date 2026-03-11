import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'IFS Broker',
  description: 'Planificación financiera internacional: seguros de vida, salud y retiro.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ifsbroker.com',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ifsbroker.com'}/ifs_insurance.png`,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang = '${locale}';`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  );
}
