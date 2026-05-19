export default function ProductCard({ product }) {
  const isAppIcon = product.logoType === 'png'

  return (
    <a
      href={`https://${product.url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
      style={{ backgroundColor: `${product.color}08`, border: `1px solid ${product.color}15` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `${product.color}14`
        e.currentTarget.style.borderColor = `${product.color}30`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = `${product.color}08`
        e.currentTarget.style.borderColor = `${product.color}15`
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`w-12 h-12 shrink-0 flex items-center justify-center overflow-hidden ${isAppIcon ? 'rounded-[12px] shadow-sm' : 'rounded-xl'}`}
          style={isAppIcon ? undefined : { backgroundColor: `${product.color}18` }}
        >
          <img
            src={product.logo}
            alt={`${product.name} logo`}
            className={isAppIcon ? 'w-full h-full object-cover' : 'w-8 h-8'}
          />
        </div>
        <div>
          <h3 className="font-sans text-lg font-600">{product.name}</h3>
          <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
            {product.type}
          </span>
        </div>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        {product.description}
      </p>

      <div className="flex items-center gap-1.5 text-sm text-text-muted group-hover:text-text-primary transition-colors duration-200">
        <span>{product.url}</span>
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
          &rarr;
        </span>
      </div>
    </a>
  )
}
