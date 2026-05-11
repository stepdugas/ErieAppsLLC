import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false)
      window.addEventListener('scroll', close, { passive: true })
      return () => window.removeEventListener('scroll', close)
    }
  }, [menuOpen])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled || menuOpen ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(24px)' : 'none',
        borderBottom:
          scrolled || menuOpen
            ? '1px solid rgba(255,255,255,0.06)'
            : '1px solid transparent',
      }}
    >
      <div className="px-10 sm:px-14 lg:px-24 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-0 font-headline text-xl select-none">
          <span className="text-accent-green">erie</span>
          <span className="text-accent-green">apps</span>
          <span className="ml-1 w-2 h-2 rounded-full bg-accent-green animate-pulse" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {['Products', 'About', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-widest text-text-secondary transition-colors duration-200 hover:text-accent-green"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-[1.5px] bg-accent-green transition-all duration-200"
            style={{
              transform: menuOpen ? 'rotate(45deg) translateY(4.5px)' : 'none',
            }}
          />
          <span
            className="block w-5 h-[1.5px] bg-accent-green transition-all duration-200"
            style={{
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-[1.5px] bg-accent-green transition-all duration-200"
            style={{
              transform: menuOpen ? 'rotate(-45deg) translateY(-4.5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-border px-8 py-6 flex flex-col gap-5">
          {['Products', 'About', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm uppercase tracking-widest text-text-secondary transition-colors duration-200 hover:text-accent-green"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
