import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Beverage.fyi | Industry Insights, Beer, Sake & Beverage Education',
    template: '%s | Beverage.fyi',
  },
  description:
    'The beverage industry newsroom and education hub. Industry analysis, beer and sake deep dives, coffee and tea guides, and professional insights for enthusiasts and industry professionals.',
  verification: {
    google: 'XtzDajMfGelxcGh6xsY1NKglVwHODsMZ4mXipOC-nTA',
  },
  keywords: [
    'beverage industry news',
    'beverage industry insights',
    'beer education',
    'sake guide',
    'coffee and tea',
    'beverage knowledge',
    'drink industry analysis',
    'beer styles',
    'sake education',
    'beverage professional resources',
  ],
  authors: [{ name: 'Derek Engles' }],
  creator: 'Derek Engles',
  publisher: 'Beverage.fyi',
  metadataBase: new URL('https://beverage.fyi'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://beverage.fyi',
    siteName: 'Beverage.fyi',
    title: 'Beverage.fyi | Industry Insights, Beer, Sake & Beverage Education',
    description:
      'The beverage industry newsroom and education hub. Industry analysis, beer and sake deep dives, and professional insights.',
    images: [
      {
        url: '/beverage-socialcard.png',
        width: 1200,
        height: 630,
        alt: 'Beverage.fyi — Industry Insights & Beverage Education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beverage.fyi | Industry Insights, Beer, Sake & Beverage Education',
    description:
      'The beverage industry newsroom and education hub. Industry analysis, beer and sake deep dives, and professional insights.',
    images: ['/beverage-socialcard.png'],
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
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to Sanity CDN for faster image loading */}
        <link rel="preconnect" href="https://cdn.sanity.io" />
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-87NHCW30CX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-87NHCW30CX');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}