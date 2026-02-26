'use client'
import Image from 'next/image'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // This is a mock submission. You would connect this to a newsletter service.
    console.log('Subscribing email:', email)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
    }, 4000)
  }

  return (
    <footer className="bg-navy text-cream py-12 mt-16" aria-labelledby="footer-heading">
      {/* Hidden heading for accessibility + SEO */}
      <h2 id="footer-heading" className="sr-only">LeadWise Foundation Footer</h2>

      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {/* Quick Links */}
        <nav aria-label="LeadWise Quick Links">
          <h3 className="font-cinzel text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 font-oswald text-cream/80">
            <li>
              <a href="/" className="hover:text-peach">Home</a>
            </li>
            <li>
              <a
                href="https://services.letsleadwise.org"
                className="hover:text-peach"
                target="_blank"
                rel="noopener noreferrer"
              >
                Programs
              </a>
            </li>
            <li>
              <a
                href="https://donation.letsleadwise.org/"
                className="hover:text-peach"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </li>
          </ul>
        </nav>

        {/* Resources */}
        <nav aria-label="LeadWise Resources">
          <h3 className="font-cinzel text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 font-oswald text-cream/80">
            <li>
              <a
                href="https://blog.letsleadwise.org/"
                className="hover:text-peach"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li>
              <a href="/ai-policy" className="hover:text-peach">Privacy Policy</a>
            </li>
            <li>
              <a href="/user-terms" className="hover:text-peach">Terms of Service</a>
            </li>
          </ul>
        </nav>

        {/* Connect With Us */}
        <nav aria-label="Contact and Social Links">
          <h3 className="font-cinzel text-lg font-semibold mb-4">Connect With Us</h3>
          <ul className="space-y-2 font-oswald text-cream/80">
            <li>
              <a href="mailto:mentor@letsleadwise.org" className="hover:text-peach">mentor@letsleadwise.org</a>
            </li>
            <li>
              <a href="tel:+14692151049" className="hover:text-peach">+1 (469) 215-1049</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/leadwisejvc" className="hover:text-peach" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </nav>

        {/* Newsletter / Subscribe */}
        <div>
          <h3 className="font-cinzel text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-sm text-cream/80 mb-2">
            Stay updated on our programs, blogs, and events.
          </p>
          {!isSubmitted ? (
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 rounded-md bg-cream text-navy focus:outline-none focus:ring-2 focus:ring-peach w-full font-oswald"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-peach text-navy px-4 py-2 rounded-md font-oswald font-semibold hover:bg-cream hover:text-navy transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="text-center bg-cream/10 rounded-md p-4 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h5 className="font-oswald font-semibold text-peach">Thank You!</h5>
              <p className="text-sm text-cream/80">You're on the list.</p>
            </div>
          )}
        </div>
      </div>

      {/* Logo below columns */}
      <div className="text-center mb-6">
        <a href="/" aria-label="LeadWise Foundation Home">
          <Image
            src="/images/logo.svg"
            alt="LeadWise Foundation Logo"
            width={180}
            height={45}
            className="mx-auto"
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/20 pt-6 text-center font-oswald text-cream/60 text-sm space-y-2">
        <p>
          © {new Date().getFullYear()} LeadWise Foundation. All rights reserved.
        </p>

        <p className="max-w-xl mx-auto text-xs text-peach/80 italic animate-fadeInUp">
          LeadWise Foundation is a 501(c)(3) nonprofit EIN: 39-3296280.
        </p>

        <p className="text-xs text-cream/50">
          Not affiliated with organizations using similar names in legal or consulting sectors.
        </p>
      </div>
    </footer>
  )
}

export default Footer
