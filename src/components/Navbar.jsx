import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        backgroundColor: scrolled || menuOpen ? 'rgba(250, 250, 249, 0.92)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        borderBottom:
          scrolled || menuOpen
            ? '1px solid var(--color-border)'
            : '1px solid transparent',
      }}
    >
      <div
        className="h-16 flex items-center justify-between"
        style={{
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 'clamp(24px, 5vw, 64px)',
          paddingRight: 'clamp(24px, 5vw, 64px)',
        }}
      >
        <Link to="/" className="font-sans text-lg font-600 text-text-primary select-none">
          Erie Apps
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#products"
            className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            Products
          </a>
          <Link
            to="/support"
            className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
          >
            Support
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col items-center justify-center gap-1.5"
          style={{ minWidth: '44px', minHeight: '44px' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className="block w-5 h-[1.5px] bg-text-primary transition-all duration-200"
            style={{
              transform: menuOpen ? 'rotate(45deg) translateY(4.5px)' : 'none',
            }}
          />
          <span
            className="block w-5 h-[1.5px] bg-text-primary transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-[1.5px] bg-text-primary transition-all duration-200"
            style={{
              transform: menuOpen ? 'rotate(-45deg) translateY(-4.5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-border flex flex-col gap-1 bg-bg"
          style={{ padding: 'clamp(16px, 5vw, 32px)' }}
        >
          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary py-3"
          >
            Products
          </a>
          <Link
            to="/support"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary py-3"
          >
            Support
          </Link>
        </div>
      )}
    </nav>
  )
}
