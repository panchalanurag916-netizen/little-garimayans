import type { Metadata, Viewport } from 'next'
import { Poppins, Kalam, Lilita_One } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { CustomCursor } from '@/components/animations/CustomCursor'
import { ScrollProgressBar } from '@/components/animations/ScrollProgressBar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
})

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
  display: 'swap',
})

const lilita = Lilita_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-hero',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://littlegarimayans.in'),
  title: {
    default: 'The Little Garimayans — Where Little Dreams Begin',
    template: '%s | The Little Garimayans',
  },
  description:
    "India's premium preschool brand. Nurturing children through the SPACE framework — Social, Physical, Academic, Creative & Emotional development. Enroll your child or own a franchise.",
  keywords: [
    'preschool in india',
    'best preschool',
    'kindergarten school',
    'daycare school',
    'playgroup school',
    'nursery school',
    'preschool franchise',
    'daycare franchise',
    'early education franchise',
    'the little garimayans',
    'SPACE framework',
    'early childhood education',
  ],
  authors: [{ name: 'The Little Garimayans' }],
  creator: 'The Little Garimayans',
  publisher: 'The Little Garimayans Pvt. Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://littlegarimayans.in',
    siteName: 'The Little Garimayans',
    title: 'The Little Garimayans — Where Little Dreams Begin',
    description:
      "India's premium preschool brand nurturing children through the SPACE framework.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Little Garimayans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Little Garimayans — Where Little Dreams Begin',
    description: "India's premium preschool brand nurturing children through the SPACE framework.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon:    [{ url: '/favicon.ico' }, { url: '/icon.png', type: 'image/png' }],
    apple:   '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#99292D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${kalam.variable} ${lilita.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'The Little Garimayans',
              description: "India's premium preschool brand",
              url: 'https://littlegarimayans.in',
              logo: 'https://littlegarimayans.in/logo.png',
              sameAs: [
                'https://www.facebook.com/littlegarimayans',
                'https://www.instagram.com/littlegarimayans',
              ],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ScrollProgressBar />
        <CustomCursor />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
