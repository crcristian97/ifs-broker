import type { Metadata } from 'next'
import './globals.css'

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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
