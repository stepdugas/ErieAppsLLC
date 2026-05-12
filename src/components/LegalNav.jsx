import { Link } from 'react-router-dom'

export default function LegalNav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: 'rgba(8,8,8,0.92)',
        backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="h-16 flex items-center justify-between" style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(24px, 5vw, 64px)', paddingRight: 'clamp(24px, 5vw, 64px)' }}>
        <Link to="/" className="flex items-center gap-0 font-headline text-xl select-none">
          <span className="text-accent-green">erie</span>
          <span className="text-accent-green">apps</span>
          <span className="ml-1 w-2 h-2 rounded-full bg-accent-green animate-pulse" />
        </Link>

        <Link
          to="/"
          className="font-mono text-xs uppercase tracking-widest text-text-secondary transition-colors duration-200 hover:text-accent-green"
        >
          ← Back to Home
        </Link>
      </div>
    </nav>
  )
}
