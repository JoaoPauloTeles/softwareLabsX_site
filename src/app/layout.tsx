import type { Metadata } from 'next'
import { Outfit, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Software Labs X | Transformando Ideias em Realidade Digital',
  description: 'Desenvolvemos soluções tecnológicas de ponta: aplicativos web, mobile, IA e visão computacional.',
  keywords: ['desenvolvimento de software', 'aplicativos', 'IA', 'inteligência artificial', 'visão computacional', 'mobile', 'web'],
  authors: [{ name: 'Software Labs X' }],
  openGraph: {
    title: 'Software Labs X | Transformando Ideias em Realidade Digital',
    description: 'Desenvolvemos soluções tecnológicas de ponta que capacitam empresas a prosperar em um mundo digital.',
    url: 'https://www.softwarelabsx.com',
    siteName: 'Software Labs X',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  )
}
