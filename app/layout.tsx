import './globals.css'
import { Cinzel, Oswald } from 'next/font/google'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${oswald.variable}`}>
      <body className="font-oswald bg-cream text-navy overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}