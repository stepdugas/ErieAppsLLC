import SectionReveal from '../components/SectionReveal'
import Container from '../components/Container'

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <Container>
        <SectionReveal>
          <p className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-3">
            About
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-700 tracking-tight mb-8">
            One person. Focused output.
          </h2>
        </SectionReveal>

        <div className="max-w-2xl space-y-5">
          <SectionReveal delay={0.1}>
            <p className="text-lg text-text-secondary leading-relaxed">
              Erie Apps LLC is a solo-founded software studio based in Erie, Pennsylvania.
              We build AI-powered tools for the industries that enterprise software overlooks
              — home inspectors, local businesses, students, and more.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.18}>
            <p className="text-lg text-text-secondary leading-relaxed">
              No venture capital. No bloated team. Just focused software that ships
              and solves real problems for real people.
            </p>
          </SectionReveal>
        </div>
      </Container>
    </section>
  )
}
