import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-4 sm:px-6 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-headline text-sm text-accent-green select-none">
            erieapps
          </span>
          <span className="font-mono text-[11px] text-text-muted">
            © 2026 Erie Apps LLC
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
          <Link
            to="/privacy"
            className="font-mono text-[10px] sm:text-[11px] text-text-muted uppercase tracking-widest transition-colors duration-200 hover:text-text-secondary"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="font-mono text-[10px] sm:text-[11px] text-text-muted uppercase tracking-widest transition-colors duration-200 hover:text-text-secondary"
          >
            Terms
          </Link>
          <a
            href="mailto:stephanie@erie-apps.com"
            className="font-mono text-[10px] sm:text-[11px] text-text-muted uppercase tracking-widest transition-colors duration-200 hover:text-text-secondary"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  )
}
