'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

// 1. THIS ARRAY CONTROLS YOUR MENU ITEMS
// Ensure "Services" is listed here for it to appear on the screen.
const navItems = [
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#impact', label: 'Impact' },
  { href: '#team', label: 'Team' },
  { href: '#donate', label: 'Donate' },
  { href: '/services', label: 'Services' }, // <--- THIS LINK WAS LIKELY MISSING
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
    // Only intercept navigation for hash links (scroll anchors)
    if (target.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(target)
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileOpen(false)
    } else {
      // For standard pages like '/services', let Next.js Link handle it
      setMobileOpen(false)
    }
  }

  return (
    <>
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
                      className="text-cream hover:text-peach transition-colors duration-300 font-oswald uppercase tracking-wide cursor-pointer"
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
              className="md:hidden text-cream hover:text-peach transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="md:hidden bg-navy/95 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-4 absolute left-0 right-0 top-full shadow-xl h-screen">
              {navItems.map((item) =>
                item.href.startsWith('#') ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block text-cream hover:text-peach transition-colors duration-300 font-oswald uppercase tracking-wide text-lg py-2 border-b border-white/5 last:border-0"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-cream hover:text-peach transition-colors duration-300 font-oswald uppercase tracking-wide text-lg py-2 border-b border-white/5 last:border-0 ${
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
