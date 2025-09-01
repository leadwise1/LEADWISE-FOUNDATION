'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'


const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault()
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <Head>
        <title>LeadWise Foundation - Empowering Marginalized Communities with Mentorship and Career Growth</title>
        {/* SEO Meta Tags */}
        <meta name="description" content="LeadWise Foundation provides mentorship, career growth programs, and resources to empower marginalized communities towards economic independence and success." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="LeadWise Foundation" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="LeadWise Foundation - Empowering Marginalized Communities" />
        <meta property="og:description" content="Join LeadWise Foundation to access mentorship, career development programs, and resources designed to help marginalized individuals achieve economic independence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leadwise.foundation/" />
        <meta property="og:image" content="https://leadwise.foundation/images/og-image.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LeadWise Foundation - Empowering Marginalized Communities" />
        <meta name="twitter:description" content="Discover mentorship and career growth opportunities with LeadWise Foundation, supporting marginalized individuals in achieving economic independence." />
        <meta name="twitter:image" content="https://leadwise.foundation/images/og-image.png" />

        {/* Favicon and Apple Touch Icon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-md' : 'bg-navy'
      }`}>
        <nav className="container-custom">
          <div className="flex justify-between items-center py-4">
            <Link href="/" aria-label="LeadWise Foundation Home">
              <Image
                src="/images/logo.svg"
                alt="LeadWise Foundation Logo"
                width={180}
                height={45}
                className="h-20 w-auto"
              />
            </Link>
            
            <ul className="hidden md:flex space-x-8">
              {[
                { href: '#about', label: 'About' },
                { href: '#programs', label: 'Programs' },
                { href: '#impact', label: 'Impact' },
                { href: '#team', label: 'Team' },
                { href: '#donate', label: 'Donate' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-cream hover:text-peach transition-colors duration-300 font-oswald uppercase tracking-wide"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header