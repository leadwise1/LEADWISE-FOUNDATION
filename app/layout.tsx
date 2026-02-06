import './globals.css'
import Script from 'next/script'
import { Cinzel, Oswald } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

const cinzel = Cinzel({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel'
})

const oswald = Oswald({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-oswald'
})

export const metadata: Metadata = {
  title: 'LeadWise - Igniting Change Through Leadership',
  description: 'Transforming industries by addressing STEM leadership barriers and empowering marginalized voices.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={`${cinzel.variable} ${oswald.variable}`}>
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FY2TX3SEMV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FY2TX3SEMV');
          `}
        </Script>

        {/* Preconnects for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-oswald font-sans bg-cream text-navy overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
