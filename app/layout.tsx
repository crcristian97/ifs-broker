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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
