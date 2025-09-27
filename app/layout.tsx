import './globals.css'
import { Cinzel, Oswald } from 'next/font/google'
import Head from 'next/head'

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

export const metadata = {
  title: 'LeadWise - Igniting Change Through Leadership',
  description: 'Transforming industries by addressing STEM leadership barriers and empowering marginalized voices.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={`${cinzel.variable} ${oswald.variable}`}>
      <Head>
        {/* Preconnects for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body className="font-oswald font-sans bg-cream text-navy overflow-x-hidden">
        {/* Root-level font variables: --font-cinzel and --font-oswald to be defined in globals.css */}
        {children}
      </body>
    </html>
  )
}