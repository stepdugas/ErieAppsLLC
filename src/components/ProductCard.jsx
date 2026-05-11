import { useRef, useState } from 'react'

export default function ProductCard({ product }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateY = ((x - centerX) / centerX) * 8
    const rotateX = ((centerY - y) / centerY) * 8

    setTilt({ rotateX, rotateY })
    setSpotlight({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    })
  }

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl overflow-hidden transition-shadow duration-500"
      style={{
        perspective: '1000px',
        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: isHovered
          ? 'transform 0.1s ease-out'
          : 'transform 0.5s ease-out, box-shadow 0.5s ease-out',
        boxShadow: isHovered
          ? `0 0 40px ${product.color}20, 0 0 80px ${product.color}10`
          : 'none',
      }}
    >
      {/* Animated border sweep on hover — top edge */}
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
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, ${product.color}08 0%, transparent 60%)`,
        }}
      />

      {/* Card content */}
      <div className="relative z-[2] bg-surface border border-border rounded-2xl p-6 h-full flex flex-col gap-4">
        {/* Icon + Status row */}
        <div className="flex items-start justify-between">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
            style={{ backgroundColor: `${product.color}15`, color: product.color }}
          >
            {product.icon}
          </div>
          <span
            className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border"
            style={{
              color: product.status === 'Live' ? '#00ff87' : 'rgba(255,255,255,0.42)',
              borderColor:
                product.status === 'Live'
                  ? 'rgba(0,255,135,0.3)'
                  : 'rgba(255,255,255,0.06)',
            }}
          >
            {product.status}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-headline text-lg">{product.name}</h3>

        {/* Description */}
        <p className="font-body text-sm text-text-secondary font-light leading-relaxed flex-1">
          {product.description}
        </p>

        {/* URL link */}
        <a
          href={`https://${product.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group font-mono text-xs text-text-muted hover:text-accent-green transition-colors duration-200 flex items-center gap-1.5 mt-auto"
        >
          {product.url}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  )
}
