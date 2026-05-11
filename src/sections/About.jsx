import SectionReveal from '../components/SectionReveal'

const infoRows = [
  { label: 'Location', value: 'Erie, Pennsylvania' },
  { label: 'Founded', value: '2024' },
  { label: 'Structure', value: 'Erie Apps LLC' },
  { label: 'Stack', value: 'Swift, Spring Boot, Vue, AI' },
  {
    label: 'GitHub',
    value: 'github.com/StepDugas',
    shortValue: 'StepDugas',
    href: 'https://github.com/StepDugas',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/stephanie-dugas',
    shortValue: 'stephanie-dugas',
    href: 'https://linkedin.com/in/stephanie-dugas',
  },
  {
    label: 'Contact',
    value: 'stephanie@erie-apps.com',
    shortValue: 'Email',
    href: 'mailto:stephanie@erie-apps.com',
  },
]

export default function About() {
  return (
    <section id="about" className="relative z-10 py-20 md:py-32 px-6 sm:px-10 lg:px-16">
      <div className="mx-auto" style={{ maxWidth: '1200px' }}>
        {/* Label + Headline */}
        <SectionReveal>
          <span className="font-mono text-xs text-accent-green uppercase tracking-widest">
            02 // About
          </span>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl mt-4 mb-10 md:mb-16">
            One person.{' '}
            <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>
              Focused output.
            </span>
          </h2>
        </SectionReveal>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — paragraphs */}
          <div className="space-y-6">
            <SectionReveal delay={0.15}>
              <p className="font-body text-sm sm:text-base md:text-lg text-text-secondary font-light leading-relaxed">
                Erie Apps LLC is a solo-founded software studio based in Erie, Pennsylvania.
                We build AI-powered tools for the niches that enterprise software ignores
                — home inspectors, local businesses, students, and Christians.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.25}>
              <p className="font-body text-sm sm:text-base md:text-lg text-text-secondary font-light leading-relaxed">
                No venture capital. No bloated team. No excuses. Just focused software that ships.
              </p>
            </SectionReveal>
          </div>

          {/* Right — info table */}
          <SectionReveal delay={0.2}>
            <div className="border border-border rounded-xl overflow-hidden">
              {infoRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 border-b border-border last:border-b-0 transition-colors duration-200 hover:bg-surface group"
                >
                  <span className="font-mono text-[10px] sm:text-[11px] text-text-muted uppercase tracking-widest shrink-0">
                    {row.label}
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={row.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="font-body text-xs sm:text-sm text-text-secondary transition-colors duration-200 group-hover:text-accent-green text-right truncate ml-4"
                    >
                      <span className="hidden sm:inline">{row.value}</span>
                      <span className="sm:hidden">{row.shortValue || row.value}</span>
                    </a>
                  ) : (
                    <span className="font-body text-xs sm:text-sm text-text-secondary text-right truncate ml-4">
                      {row.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
