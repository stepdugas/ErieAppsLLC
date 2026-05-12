import { products } from '../data/products'

export default function MarqueeBanner() {
  const names = products.map((p) => p.name)
  const items = [...names, ...names]

  return (
    <div
      className="w-full py-4 border-t border-b border-border"
      style={{
        background: 'rgba(0, 255, 135, 0.015)',
        overflow: 'hidden',
        position: 'relative',
      }}
      aria-hidden="true"
    >
      <style>{`
@keyframes marquee-scroll {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}
      `}</style>
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: 'marquee-scroll 30s linear infinite',
          width: 'max-content',
        }}
      >
        {items.map((name, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-mono text-sm uppercase tracking-widest text-text-secondary px-6">
              {name}
            </span>
            <span className="text-accent-green text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
