'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#impact', label: 'Impact' },
  { href: '#team', label: 'Team' },
  { href: '#donate', label: 'Donate' },
  { href: '/services', label: 'Services' }, // Services page
]

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    const element = document.querySelector(target)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <>
      <Head>
        <title>LeadWise Foundation - Empowering Marginalized Communities with Mentorship and Career Growth</title>

        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="LeadWise Foundation provides mentorship, career growth programs, and resources to empower marginalized communities towards economic independence and success."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="LeadWise Foundation" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="LeadWise Foundation - Empowering Marginalized Communities" />
        <meta
          property="og:description"
          content="Join LeadWise Foundation to access mentorship, career development programs, and resources designed to help marginalized individuals achieve economic independence."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leadwise.foundation/" />
        <meta property="og:image" content="https://leadwise.foundation/images/og-image.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LeadWise Foundation - Empowering Marginalized Communities" />
        <meta
          name="twitter:description"
          content="Discover mentorship and career growth opportunities with LeadWise Foundation, supporting marginalized individuals in achieving economic independence."
        />
        <meta name="twitter:image" content="https://leadwise.foundation/images/og-image.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

      <header
        className={`fixed w-full top-0 z-50 transition-[background,backdrop-filter] duration-300 ${
          scrolled ? 'bg-navy/95 backdrop-blur-md' : 'bg-navy'
        }`}
      >
        <nav className="container-custom">
          <div className="flex justify-between items-center py-4">
            <Link href="/" aria-label="LeadWise Foundation Home">
              <Image
                src="/images/logo.svg"
                alt="LeadWise Foundation Logo"
                width={80}
                height={45}
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-cream hover:text-peach transition-colors duration-300 font-oswald uppercase tracking-wide"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-cream hover:text-peach transition-colors duration-300 font-oswald uppercase tracking-wide ${
                        pathname === item.href ? 'text-peach font-bold' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cream"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <i data-lucide="menu" size="28"></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="md:hidden glass border-t border-white/10 px-6 py-4 space-y-4">
              {navItems.map((item) =>
                item.href.startsWith('#') ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block text-cream hover:text-peach transition-colors duration-300 font-oswald uppercase tracking-wide"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-cream hover:text-peach transition-colors duration-300 font-oswald uppercase tracking-wide ${
                      pathname === item.href ? 'text-peach font-bold' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          )}
        </nav>
      </header>

      <SpeedInsights />
    </>
  )
}

export default Header
