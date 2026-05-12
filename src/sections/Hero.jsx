import AnimatedWord from '../components/AnimatedWord'
import TypewriterText from '../components/TypewriterText'

export default function Hero() {
  return (
    <section className="grid-bg relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ padding: 'clamp(24px, 5vw, 64px)' }}>
      {/* Top right corner text */}
      <span className="absolute top-20 font-mono text-[10px] text-text-muted uppercase tracking-widest hidden md:block" style={{ right: 'clamp(24px, 5vw, 64px)' }}>
        EST. 2024 // ERIE PA
      </span>

      {/* Badge */}
      <div className="flex items-center gap-2 mb-6 sm:mb-8">
        <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse shrink-0" aria-hidden="true" />
        <span className="font-mono text-[10px] sm:text-[11px] text-text-secondary uppercase tracking-widest text-center">
          Solo Founded // AI-Powered // Bootstrapped
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center leading-[1.15]" style={{ maxWidth: '900px' }}>
        <span className="block">
          <AnimatedWord delay={0}>AI-powered</AnimatedWord>{' '}
          <AnimatedWord delay={0.1}>tools</AnimatedWord>{' '}
          <AnimatedWord delay={0.18}>for</AnimatedWord>
        </span>
        <span className="block mt-2 text-ghost">
          <AnimatedWord delay={0.26}>the</AnimatedWord>{' '}
          <AnimatedWord delay={0.32}>niches</AnimatedWord>{' '}
          <AnimatedWord delay={0.38}>enterprise</AnimatedWord>
        </span>
        <span className="block mt-2 text-ghost">
          <AnimatedWord delay={0.44}>software</AnimatedWord>{' '}
          <AnimatedWord delay={0.5}>ignores.</AnimatedWord>
        </span>
        <span className="block mt-4 text-accent-green text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
          <TypewriterText
            strings={[
              'Home inspectors.',
              'Car dealerships.',
              'Students.',
              'Local businesses.',
            ]}
            typingSpeed={70}
            deletingSpeed={35}
            pauseDuration={2200}
          />
        </span>
      </h1>

      {/* Subheadline */}
      <p className="font-body text-sm sm:text-base md:text-lg text-text-secondary font-light text-center leading-relaxed" style={{ maxWidth: '600px', marginTop: '2rem' }}>
        Six products. One founder. All shipping.
        Erie Apps LLC builds focused software from Erie, Pennsylvania.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 sm:mt-10 w-full sm:w-auto">
        <a
          href="#products"
          className="w-full sm:w-auto text-center font-mono text-xs uppercase tracking-widest px-10 py-4 bg-accent-green text-bg rounded-xl transition-all duration-200 hover:shadow-[4px_4px_0_#00ff87] hover:translate-x-[-2px] hover:translate-y-[-2px]"
        >
          Explore Products →
        </a>
        <a
          href="#about"
          className="w-full sm:w-auto text-center font-mono text-xs uppercase tracking-widest px-10 py-4 rounded-xl border border-border text-text-secondary transition-all duration-200 hover:border-border-hover hover:text-accent-green"
        >
          The Story
        </a>
      </div>

      {/* Scroll indicator — hidden on short screens */}
      <div className="absolute bottom-8 sm:bottom-10 flex-col items-center gap-3 hidden min-[700px]:flex">
        <div className="w-[1px] h-8 bg-text-muted" aria-hidden="true" />
        <span className="font-mono text-[10px] text-text-muted uppercase tracking-[0.3em]">
          Scroll
        </span>
      </div>
    </section>
  )
}
