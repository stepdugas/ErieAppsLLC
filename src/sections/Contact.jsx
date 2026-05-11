import SectionReveal from '../components/SectionReveal'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-20 md:py-32 px-6 sm:px-10 lg:px-16">
      <div className="mx-auto text-center" style={{ maxWidth: '900px' }}>
        <SectionReveal>
          <span className="font-mono text-xs text-accent-green uppercase tracking-widest">
            03 // Contact
          </span>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl mt-4 mb-8 sm:mb-10">
            Let's build something.
          </h2>
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <a
            href="mailto:stephanie@erie-apps.com"
            className="group inline-block font-body text-base sm:text-xl md:text-2xl text-text-secondary font-light transition-colors duration-200 hover:text-accent-green break-all sm:break-normal"
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
