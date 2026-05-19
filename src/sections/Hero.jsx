import AnimatedWord from '../components/AnimatedWord'
import TypewriterText from '../components/TypewriterText'

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center" style={{ padding: 'clamp(24px, 5vw, 64px)' }}>
      {/* Badge */}
      <div className="flex items-center gap-3 mb-8">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" aria-hidden="true" />
        <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">
          Erie, PA — Est. 2026
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-700 text-center leading-[1.1] tracking-tight" style={{ maxWidth: '800px' }}>
        <span className="block">
          <AnimatedWord delay={0}>Software</AnimatedWord>{' '}
          <AnimatedWord delay={0.08}>for</AnimatedWord>{' '}
          <AnimatedWord delay={0.14}>the</AnimatedWord>
        </span>
        <span className="block mt-1">
          <AnimatedWord delay={0.2}>industries</AnimatedWord>{' '}
          <AnimatedWord delay={0.26}>others</AnimatedWord>{' '}
          <AnimatedWord delay={0.32}>overlook.</AnimatedWord>
        </span>
      </h1>

      {/* Rotating text */}
      <div className="mt-6 h-10 flex items-center">
        <span className="font-sans text-xl sm:text-2xl md:text-3xl font-500 text-text-secondary">
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
      </div>

      {/* Subheadline */}
      <p className="text-base sm:text-lg text-text-secondary text-center leading-relaxed mt-6" style={{ maxWidth: '520px' }}>
        Six products. One founder. All shipping.
        Erie Apps builds focused, AI-powered tools from Erie, Pennsylvania.
      </p>

      {/* Button */}
      <div className="mt-10">
        <a
          href="#products"
          className="text-sm font-500 px-8 py-3.5 bg-accent text-white rounded-full transition-all duration-200 hover:bg-accent-hover hover:shadow-lg"
        >
          View Products
        </a>
      </div>
    </section>
  )
}
