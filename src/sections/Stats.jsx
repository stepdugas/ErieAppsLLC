import SectionReveal from '../components/SectionReveal'
import CountUp from '../components/CountUp'
import Container from '../components/Container'

const stats = [
  { end: 6, suffix: '', label: 'Products Built' },
  { end: 5, suffix: '', label: 'Live & Shipping' },
  { end: 100, suffix: '%', label: 'Bootstrapped' },
  { end: 1, suffix: '', label: 'Founder. All of it.' },
]

export default function Stats() {
  return (
    <section
      className="relative z-10 py-20 md:py-32 border-t border-b border-border"
      style={{ background: 'rgba(0, 255, 135, 0.015)' }}
    >
      <Container className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <SectionReveal key={stat.label} delay={i * 0.1} className="text-center">
            <p className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-accent-green">
              <CountUp end={stat.end} duration={2} suffix={stat.suffix} />
            </p>
            <p className="font-mono text-[10px] sm:text-[11px] text-text-muted uppercase tracking-widest mt-2 sm:mt-3">
              {stat.label}
            </p>
          </SectionReveal>
        ))}
      </Container>
    </section>
  )
}
