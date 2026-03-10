import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IFS Broker - Planificación Financiera Internacional',
  description: 'Acompañamos a personas y empresas en la toma de decisiones financieras clave, combinando seguros, inversión y salud con una visión a largo plazo y respaldo internacional.',
  icons: {
    icon: '/ifs_insurance.png',
    apple: '/ifs_insurance.png',
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
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Zalando+Sans:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
