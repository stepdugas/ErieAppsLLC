import { useRef, useState, useCallback } from 'react'
import {
  InspectIQIcon, ReplyIQIcon, DealershipIcon,
  StackedIcon, SecretPlaceIcon, HabitLinkIcon,
} from './ProductIcons'

const iconMap = {
  inspectiq: InspectIQIcon,
  replyiq: ReplyIQIcon,
  dealership: DealershipIcon,
  stacked: StackedIcon,
  secretplace: SecretPlaceIcon,
  habitlink: HabitLinkIcon,
}

export default function ProductCard({ product }) {
  const cardRef = useRef(null)
  const rafRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const spotlightRef = useRef({ x: 50, y: 50 })

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return

    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateY = ((x - centerX) / centerX) * 8
      const rotateX = ((centerY - y) / centerY) * 8

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

      spotlightRef.current = {
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
      }

      const spotlight = card.querySelector('[data-spotlight]')
      if (spotlight) {
        spotlight.style.background = `radial-gradient(circle at ${spotlightRef.current.x}% ${spotlightRef.current.y}%, ${product.color}08 0%, transparent 60%)`
      }
    })
  }, [product.color])

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const card = cardRef.current
    if (card) card.style.transform = 'rotateX(0deg) rotateY(0deg)'
    setIsHovered(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const IconComponent = iconMap[product.iconKey]

  return (
    <div style={{ perspective: '1000px' }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl overflow-hidden transition-shadow duration-500"
        style={{
          transition: isHovered
            ? 'transform 0.1s ease-out'
            : 'transform 0.5s ease-out, box-shadow 0.5s ease-out',
          boxShadow: isHovered
            ? `0 0 40px ${product.color}20, 0 0 80px ${product.color}10`
            : 'none',
        }}
      >
        {/* Animated border sweep on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] z-10"
          style={{
            background: isHovered
              ? `linear-gradient(90deg, transparent, ${product.color}, transparent)`
              : 'transparent',
            transition: 'background 0.5s ease',
          }}
        />

        {/* Spotlight overlay */}
        <div
          data-spotlight
          className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Card content */}
        <div className="relative z-[2] bg-surface border border-border rounded-2xl p-6 h-full flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${product.color}15` }}
            >
              {IconComponent && <IconComponent color={product.color} />}
            </div>
            <span
              className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border"
              style={{
                color: '#00ff87',
                borderColor: 'rgba(0,255,135,0.3)',
              }}
            >
              {product.status}
            </span>
          </div>

          <h3 className="font-headline text-lg">{product.name}</h3>

          <p className="font-body text-sm text-text-secondary font-light leading-relaxed flex-1">
            {product.description}
          </p>

          <a
            href={`https://${product.url}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${product.name} website`}
            className="group font-mono text-xs text-text-muted hover:text-accent-green focus-visible:text-accent-green focus-visible:outline-none transition-colors duration-200 flex items-center gap-1.5 mt-auto"
          >
            {product.url}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
