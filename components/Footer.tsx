'use client'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-cream py-12 mt-16" aria-labelledby="footer-heading">
      {/* Hidden heading for accessibility + SEO */}
      <h2 id="footer-heading" className="sr-only">LeadWise Foundation Footer</h2>

      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {/* Quick Links */}
        <nav aria-label="LeadWise Quick Links">
          <h4 className="font-cinzel text-lg font-semibold mb-4">Quick Links</h4>
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
          <h4 className="font-cinzel text-lg font-semibold mb-4">Resources</h4>
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
          <h4 className="font-cinzel text-lg font-semibold mb-4">Connect With Us</h4>
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
          <h4 className="font-cinzel text-lg font-semibold mb-4">Subscribe</h4>
          <p className="text-sm text-cream/80 mb-2">
            Stay updated on our programs, blogs, and events.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md bg-cream text-navy focus:outline-none focus:ring-2 focus:ring-peach w-full"
            />
            <button
              type="submit"
              className="bg-peach text-navy px-4 py-2 rounded-md font-semibold hover:bg-cream hover:text-navy transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
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
          />
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/20 pt-6 text-center font-oswald text-cream/60 text-sm space-y-2">
        <p>
          © {new Date().getFullYear()} LeadWise Foundation. All rights reserved.
        </p>

        <p className="max-w-xl mx-auto text-xs text-peach/60 italic animate-fadeInUp">
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
