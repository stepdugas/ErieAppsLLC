import { Link } from 'react-router-dom'

export default function LegalFooter() {
  return (
    <footer className="relative border-t border-border px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="font-sans text-sm font-600 text-text-primary">
            Erie Apps
          </Link>
          <span className="text-[11px] text-text-muted">
            &copy; 2026 Erie Apps LLC
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="/privacy"
            className="text-[11px] text-text-muted uppercase tracking-widest transition-colors duration-200 hover:text-text-primary"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-[11px] text-text-muted uppercase tracking-widest transition-colors duration-200 hover:text-text-primary"
          >
            Terms of Service
          </Link>
          <Link
            to="/support"
            className="text-[11px] text-text-muted uppercase tracking-widest transition-colors duration-200 hover:text-text-primary"
          >
            Support
          </Link>
        </div>
      </div>
    </footer>
  )
}
