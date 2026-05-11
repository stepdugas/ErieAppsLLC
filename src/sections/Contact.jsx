import SectionReveal from '../components/SectionReveal'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionReveal>
          <span className="font-mono text-xs text-accent-green uppercase tracking-widest">
            03 // Contact
          </span>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <h2 className="font-headline text-3xl md:text-5xl mt-4 mb-10">
            Let's build something.
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <a
            href="mailto:stephanie@erie-apps.com"
            className="group inline-block font-body text-xl md:text-2xl text-text-secondary font-light transition-colors duration-200 hover:text-accent-green"
          >
            <span className="relative">
              stephanie@erie-apps.com
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-accent-green transition-all duration-300 group-hover:w-full" />
            </span>
          </a>
        </SectionReveal>
      </div>
    </section>
  )
}
