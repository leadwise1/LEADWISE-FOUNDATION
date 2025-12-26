'use client'
const navItems = [
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#impact', label: 'Impact' },
  {
    href: 'https://services.letsleadwise.org/resume-builder',
    label: 'Resume Builder',
    external: true,
  },
  {
    href: 'https://services.letsleadwise.org/courses',
    label: 'Free Courses',
    external: true,
  },
  { href: '#team', label: 'Team' },
  { href: '#donate', label: 'Donate' },
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

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault()
    const element = document.querySelector(target)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
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

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cta={item.label}
                      className="text-cream hover:text-peach transition-colors duration-300 font-oswald uppercase tracking-wide"
                    >
                      {item.label}
                    </a>
                  ) : item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleAnchorClick(e, item.href)}
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

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden text-cream hover:text-peach"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <button
  className="md:hidden text-cream hover:text-peach"
  onClick={() => setMobileOpen(!mobileOpen)}
  aria-label="Toggle menu"
>
  {mobileOpen ? <X size={28} /> : <Menu size={28} />}
</button>

{mobileOpen && (
  <div className="md:hidden z-50 bg-navy/95 backdrop-blur-md border-t border-white/10 px-6 py-4 space-y-4 absolute left-0 right-0 top-full shadow-xl h-screen">
    {navItems.map((item) =>
      item.external ? (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
          className="block text-cream hover:text-peach font-oswald uppercase tracking-wide text-lg py-2 border-b border-white/5"
        >
          {item.label}
        </a>
      ) : item.href.startsWith('#') ? (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => handleAnchorClick(e, item.href)}
          className="block text-cream hover:text-peach font-oswald uppercase tracking-wide text-lg py-2 border-b border-white/5"
        >
          {item.label}
        </a>
      ) : (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setMobileOpen(false)}
          className="block text-cream hover:text-peach font-oswald uppercase tracking-wide text-lg py-2 border-b border-white/5"
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
