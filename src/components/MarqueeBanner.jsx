const products = [
  'InspectIQ',
  'ReplyIQ',
  'Dealership SaaS',
  'Stacked',
  'The Secret Place',
  'HabitLink',
]

export default function MarqueeBanner() {
  // Double the items for seamless loop
  const items = [...products, ...products]

  return (
    <div
      className="w-full overflow-hidden py-4 border-t border-b border-border"
      style={{ background: 'rgba(0, 255, 135, 0.015)' }}
    >
      <style>{`
@keyframes marquee-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
      `}</style>
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marquee-scroll 30s linear infinite' }}
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
