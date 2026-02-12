import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Beverage.fyi | Wine, Spirits, Beer & Sake Education',
    template: '%s | Beverage.fyi',
  },
  description:
    'Explore the world of wine, spirits, beer, and sake. In-depth articles, tasting guides, and professional insights for beverage enthusiasts and industry professionals.',
  verification: {
  google: 'XtzDajMfGelxcGh6xsY1NKglVwHODsMZ4mXipOC-nTA',
    },
    keywords: [
    'wine education',
    'spirits guide',
    'beer knowledge',
    'sake information',
    'beverage industry',
    'sommelier resources',
    'cocktail culture',
    'drink articles',
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
    title: 'Beverage.fyi | Wine, Spirits, Beer & Sake Education',
    description:
      'Explore the world of wine, spirits, beer, and sake. In-depth articles and professional insights.',
    images: [
      {
        url: '/beverage-socialcard.png',
        width: 1200,
        height: 630,
        alt: 'Beverage.fyi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beverage.fyi | Wine, Spirits, Beer & Sake Education',
    description:
      'Explore the world of wine, spirits, beer, and sake. In-depth articles and professional insights.',
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