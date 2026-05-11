import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.06)'
          : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-0 font-headline text-xl select-none">
          <span className="text-accent-green">erie</span>
          <span className="text-accent-green">apps</span>
          <span className="ml-1 w-2 h-2 rounded-full bg-accent-green animate-pulse" />
        </Link>

        <div className="flex items-center gap-8">
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
      </div>
    </nav>
  )
}
