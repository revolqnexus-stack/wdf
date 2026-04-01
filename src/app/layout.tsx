import type { Metadata } from 'next'
import { Bebas_Neue, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Cursor from '@/components/ui/Cursor'
import Loader from '@/components/ui/Loader'

const bebas = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const grotesk = Space_Grotesk({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'REVOLQ — Digital Agency, Kerala',
  description: 'Web development, AI automation, SEO, and brand strategy for Kerala businesses.',
  keywords: ['digital agency kerala', 'web development kerala', 'AI automation', 'SEO kerala'],
  openGraph: {
    title: 'REVOLQ',
    description: 'We build digital systems that work while you sleep.',
    locale: 'en_IN',
    type: 'website',
    url: 'https://revolq.in',
  },
  metadataBase: new URL('https://revolq.in'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${grotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'REVOLQ',
              description: 'Digital agency providing web development, AI automation, SEO, and brand strategy services',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Kerala',
                addressCountry: 'IN',
              },
              telephone: '+91 79956 17374',
              url: 'https://revolq.in',
              email: 'hello@revolq.in',
              foundingDate: '2025',
              serviceType: [
                'Web Development',
                'AI Automation',
                'SEO Services',
                'Brand Strategy',
              ],
            }),
          }}
        />
      </head>
      <body>
        <Loader />
        <Cursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
