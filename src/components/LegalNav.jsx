import { Link } from 'react-router-dom'

export default function LegalNav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-bg/92 backdrop-blur-xl border-b border-border"
    >
      <div className="h-16 flex items-center justify-between" style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(24px, 5vw, 64px)', paddingRight: 'clamp(24px, 5vw, 64px)' }}>
        <Link to="/" className="font-sans text-lg font-600 text-text-primary select-none">
          Erie Apps
        </Link>

        <Link
          to="/"
          className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
        >
          &larr; Back to Home
        </Link>
      </div>
    </nav>
  )
}
