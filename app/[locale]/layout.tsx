import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { GlobalSiteBackground } from '@/components/layout/global-site-background';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ifsbroker.com';

const logoImageObject = {
  '@type': 'ImageObject',
  '@id': `${BASE_URL}/#logo`,
  url: `${BASE_URL}/ifs_insurance.png`,
  contentUrl: `${BASE_URL}/ifs_insurance.png`,
  width: 512,
  height: 512,
  caption: 'IFS Broker',
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  '@id': `${BASE_URL}/#organization`,
  name: 'IFS Broker',
  description: 'Planificación financiera internacional: seguros de vida, salud y retiro.',
  url: BASE_URL,
  logo: logoImageObject,
  image: logoImageObject,
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'IFS Broker',
  description: 'Planificación financiera internacional: seguros de vida, salud y retiro.',
  publisher: { '@id': `${BASE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/es/blog?q={search_term_string}`,
    },
    'query-input': {
      '@type': 'PropertyValueSpecification',
      valueRequired: true,
      valueName: 'search_term_string',
    },
  },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <GlobalSiteBackground>{children}</GlobalSiteBackground>
      </NextIntlClientProvider>
    </>
  );
}
