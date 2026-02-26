'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navItems = [
  {
    href: 'https://mentors.letsleadwise.org',
    label: 'Mentoring',
    external: true,
    ariaLabel: 'Join LeadWise Mentorship Programs (external site)',
  },
  { href: 'https://services.letsleadwise.org', label: 'Programs', external: true, ariaLabel: 'Explore LeadWise Programs (external site)' },
  { href: 'https://services.letsleadwise.org/resume', label: 'Resume Builder', external: true, ariaLabel: 'Access Resume Builder (external site)' },
  { href: 'https://services.letsleadwise.org/courses', label: 'Free Courses', external: true, ariaLabel: 'Access Free Courses (external site)' },
  { href: 'https://blog.letsleadwise.org', label: 'Blog', external: true, ariaLabel: 'Read LeadWise Blog (external site)' },
  { href: 'https://donation.letsleadwise.org', label: 'Donate', external: true, ariaLabel: 'Donate to LeadWise Foundation (external site)' },
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

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    const element = document.querySelector(target)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-md' : 'bg-navy'}`}>
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link href="/" aria-label="LeadWise Foundation Home">
              <Image src="/images/logo.svg" alt="LeadWise Foundation Logo" width={80} height={45} priority />
            </Link>
            <p className="text-xs text-cream/80 mt-1">
              Empowering learners with free career programs and mentorship
            </p>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex space-x-8 items-center">
            {navItems.map((item) =>
              item.external ? (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel} className="text-cream hover:text-peach transition-colors duration-300 font-oswald uppercase tracking-wide">
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.label}>
                  <Link href={item.href} className={`text-cream hover:text-peach transition-colors duration-300 font-oswald uppercase tracking-wide ${pathname === item.href ? 'text-peach font-bold' : ''}`}>
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button className="xl:hidden text-cream hover:text-peach" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-navy/95 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-4 absolute left-0 right-0 top-full shadow-xl h-screen">
            {navItems.map((item) =>
              item.external ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel} onClick={() => setMobileOpen(false)} className="block text-cream hover:text-peach font-oswald uppercase tracking-wide text-lg py-2 border-b border-white/5">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="block text-cream hover:text-peach font-oswald uppercase tracking-wide text-lg py-2 border-b border-white/5">
                  {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
