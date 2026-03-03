import type { Metadata } from 'next'
import { Noto_Sans, Oxanium } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-noto-sans'
});

const oxanium = Oxanium({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-oxanium'
});

export const metadata: Metadata = {
  title: 'IFS Broker - Planificacion Financiera Internacional',
  description: 'Acompanamos a personas y empresas en la toma de decisiones financieras clave, combinando seguros, inversion y salud con una vision a largo plazo y respaldo internacional.',
  icons: {
    icon: '/ifs_insurance.png',
    apple: '/ifs_insurance.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${notoSans.variable} ${oxanium.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
