'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'


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
  )
}

export default Header