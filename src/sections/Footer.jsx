import { Link } from 'react-router-dom'
import Container from '../components/Container'

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-10 mt-40">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <span className="font-sans text-sm font-600 text-text-primary">
            Erie Apps LLC
          </span>
          <a
            href="mailto:stephanie@erie-apps.com"
            className="text-sm text-text-muted transition-colors duration-200 hover:text-text-primary"
          >
            stephanie@erie-apps.com
          </a>
        </div>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          <Link
            to="/privacy"
            className="text-[11px] text-text-muted uppercase tracking-widest transition-colors duration-200 hover:text-text-primary"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="text-[11px] text-text-muted uppercase tracking-widest transition-colors duration-200 hover:text-text-primary"
          >
            Terms
          </Link>
          <Link
            to="/support"
            className="text-[11px] text-text-muted uppercase tracking-widest transition-colors duration-200 hover:text-text-primary"
          >
            Support
          </Link>
        </div>
      </Container>
      <Container>
        <p className="text-[11px] text-text-muted text-center sm:text-left mt-6">
          &copy; 2026 Erie Apps LLC. Erie, Pennsylvania.
        </p>
      </Container>
    </footer>
  )
}
