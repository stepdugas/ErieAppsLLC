import SectionReveal from '../components/SectionReveal'
import CountUp from '../components/CountUp'
import Container from '../components/Container'

const stats = [
  { end: 6, suffix: '', label: 'Products Built' },
  { end: 6, suffix: '', label: 'Live & Shipping' },
  { end: 100, suffix: '%', label: 'Bootstrapped' },
  { end: 1, suffix: '', label: 'Solo Founder' },
]

export default function Stats() {
  return (
    <section
      className="relative py-20 md:py-28 bg-surface-alt"
      aria-label="Company statistics"
    >
      <Container className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <SectionReveal key={stat.label} delay={i * 0.08} className="text-center">
            <p className="font-sans text-4xl sm:text-5xl md:text-6xl font-700 tracking-tight text-text-primary">
              <CountUp end={stat.end} duration={2} suffix={stat.suffix} />
            </p>
            <p className="font-mono text-[10px] sm:text-[11px] text-text-muted uppercase tracking-widest mt-2">
              {stat.label}
            </p>
          </SectionReveal>
        ))}
      </Container>
    </section>
  )
}
