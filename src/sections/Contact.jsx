import { Link } from 'react-router-dom'
import SectionReveal from '../components/SectionReveal'
import Container from '../components/Container'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-surface-alt">
      <Container className="text-center">
        <SectionReveal>
          <p className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-700 tracking-tight mb-6">
            Got a question?
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
            Reach out anytime. We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:stephanie@erie-apps.com"
              className="text-sm font-500 px-8 py-3.5 bg-accent text-white rounded-full transition-all duration-200 hover:bg-accent-hover hover:shadow-lg"
            >
              stephanie@erie-apps.com
            </a>
            <Link
              to="/support"
              className="text-sm font-500 px-8 py-3.5 rounded-full border border-border text-text-secondary transition-all duration-200 hover:border-text-muted hover:text-text-primary"
            >
              Support Form
            </Link>
          </div>
        </SectionReveal>
      </Container>
    </section>
  )
}
