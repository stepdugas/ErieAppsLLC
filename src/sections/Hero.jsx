import AnimatedWord from '../components/AnimatedWord'
import TypewriterText from '../components/TypewriterText'

export default function Hero() {
  return (
    <section className="grid-bg relative min-h-screen flex flex-col items-center justify-center px-8 sm:px-12 lg:px-20 overflow-hidden">
      {/* Top right corner text */}
      <span className="absolute top-20 right-8 sm:right-12 lg:right-20 font-mono text-[10px] text-text-muted uppercase tracking-widest hidden md:block">
        EST. 2024 // ERIE PA
      </span>

      {/* Badge */}
      <div className="flex items-center gap-2 mb-6 sm:mb-8">
        <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse shrink-0" />
        <span className="font-mono text-[10px] sm:text-[11px] text-text-secondary uppercase tracking-widest text-center">
          Solo Founded // AI-Powered // Bootstrapped
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center leading-[1.15] max-w-4xl">
        <span className="block">
          <AnimatedWord delay={0}>We</AnimatedWord>{' '}
          <AnimatedWord delay={0.08}>build</AnimatedWord>{' '}
          <AnimatedWord delay={0.16}>focused</AnimatedWord>
        </span>
        <span className="block mt-2" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>
          <AnimatedWord delay={0.24}>software</AnimatedWord>{' '}
          <AnimatedWord delay={0.32}>&amp;</AnimatedWord>{' '}
          <AnimatedWord delay={0.36}>apps</AnimatedWord>
        </span>
        <span className="block mt-2">
          <AnimatedWord delay={0.4}>that</AnimatedWord>
        </span>
        <span className="block mt-2 text-accent-green">
          <TypewriterText
            strings={[
              'solve real problems.',
              'actually ship.',
              'make money.',
              'last.',
            ]}
            typingSpeed={70}
            deletingSpeed={35}
            pauseDuration={2200}
          />
        </span>
      </h1>

      {/* Subheadline */}
      <p className="font-body text-sm sm:text-base md:text-lg text-text-secondary font-light text-center max-w-2xl mt-6 sm:mt-8 leading-relaxed">
        Erie Apps LLC is a one-person software studio based in Erie, Pennsylvania.
        AI-powered tools for the niches enterprise software ignores.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 sm:mt-10 w-full sm:w-auto">
        <a
          href="#products"
          className="w-full sm:w-auto text-center font-mono text-xs uppercase tracking-widest px-8 py-4 bg-accent-green text-bg rounded-lg transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px]"
          style={{ boxShadow: 'none' }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '4px 4px 0 #00ff87' }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
        >
          View Products →
        </a>
        <a
          href="#about"
          className="w-full sm:w-auto text-center font-mono text-xs uppercase tracking-widest px-8 py-4 rounded-lg border border-border text-text-secondary transition-all duration-200 hover:border-border-hover hover:text-accent-green"
        >
          Our Story
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-10 flex flex-col items-center gap-3">
        <div className="w-[1px] h-8 bg-text-muted" />
        <span className="font-mono text-[10px] text-text-muted uppercase tracking-[0.3em]">
          Scroll
        </span>
      </div>
    </section>
  )
}
