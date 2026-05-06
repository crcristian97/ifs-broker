import type { Metadata } from 'next';
import './globals.css';
import { LenisSmoothScroll } from '@/components/lenis-smooth-scroll';
import { WhatsAppFab } from '@/components/layout/whatsapp-fab';

const gtmId = 'GTM-5N7M3MP2';

const speculationRules = {
  prerender: [
    {
      where: {
        and: [
          {
            or: [
              { href_matches: '/' },
              { href_matches: '/es' },
              { href_matches: '/en' },
              { href_matches: '/es/seguros-de-vida' },
              { href_matches: '/en/seguros-de-vida' },
              { href_matches: '/es/salud-internacional' },
              { href_matches: '/en/salud-internacional' },
              { href_matches: '/es/fondos-de-retiro' },
              { href_matches: '/en/fondos-de-retiro' },
              { href_matches: '/es/servicios-complementarios' },
              { href_matches: '/en/servicios-complementarios' },
            ],
          },
          { not: { href_matches: '/logout' } },
          { not: { selector_matches: '[rel~=nofollow]' } },
          { not: { selector_matches: '[data-no-prerender]' } },
        ],
      },
      eagerness: 'moderate',
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ifsbroker.com'),
  title: {
    default: 'IFS Broker - Planificación Financiera Internacional',
    template: '%s | IFS Broker',
  },
  description: 'Acompañamos a personas y empresas en la toma de decisiones financieras clave, combinando seguros, inversión y salud con una visión a largo plazo y respaldo internacional.',
  openGraph: {
    siteName: 'IFS Broker',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ifsbroker',
    creator: '@ifsbroker',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/ifs_insurance.png',
    apple: '/ifs_insurance.png',
  },
  verification: {
    google: 'Y9f7mjyfdCKe8HxclpcS6xOrU3odEVZ-FSEVJT4DmMY',
  },
};

// Root layout - Next.js requires <html> and <body> tags
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zalando+Sans:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speculationRules) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
          }}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <LenisSmoothScroll />
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}
