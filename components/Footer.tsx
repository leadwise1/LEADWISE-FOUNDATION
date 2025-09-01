'use client'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-cream py-12 mt-16">
      {/* Four Columns */}
      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {/* Quick Links */}
        <div>
          <h4 className="font-cinzel text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 font-oswald text-cream/80">
            <li><Link href="/about" className="hover:text-peach">About Us</Link></li>
            <li><Link href="/programs" className="hover:text-peach">Programs</Link></li>
            <li><Link href="/contact" className="hover:text-peach">Contact</Link></li>
            <li><Link href="/donate" className="hover:text-peach">Donate</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-cinzel text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 font-oswald text-cream/80">
            <li><Link href="/blog" className="hover:text-peach">Blog</Link></li>
            <li><Link href="/events" className="hover:text-peach">Events</Link></li>
            <li><Link href="/privacy" className="hover:text-peach">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-peach">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h4 className="font-cinzel text-lg font-semibold mb-4">Connect With Us</h4>
          <ul className="space-y-2 font-oswald text-cream/80">
            <li><a href="mailto:info@letsleadwise.org" className="hover:text-peach">info@letsleadwise.org</a></li>
            <li><a href="tel:+1234567890" className="hover:text-peach">+1 (234) 567-890</a></li>
            <li><a href="https://twitter.com/letsleadwise" className="hover:text-peach" target="_blank">Twitter</a></li>
            <li><a href="https://linkedin.com/company/letsleadwise" className="hover:text-peach" target="_blank">LinkedIn</a></li>
          </ul>
        </div>

        {/* Newsletter / Subscribe */}
        <div>
          <h4 className="font-cinzel text-lg font-semibold mb-4">Subscribe</h4>
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
        <Link href="/" aria-label="LeadWise Foundation Home">
          <Image
            src="/images/logo.svg"
            alt="LeadWise Foundation Logo"
            width={180}
            height={45}
            className="mx-auto"
          />
        </Link>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/20 pt-6 text-center font-oswald text-cream/60 text-sm">
        © {new Date().getFullYear()} LeadWise Foundation. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer