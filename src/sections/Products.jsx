import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import SectionReveal from '../components/SectionReveal'
import GlitchText from '../components/GlitchText'

export default function Products() {
  const liveCount = products.filter((p) => p.status === 'Live').length
  const inProgressCount = products.length - liveCount

  return (
    <section id="products" className="relative z-10 py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
          <div>
            <SectionReveal>
              <span className="font-mono text-xs text-accent-green uppercase tracking-widest">
                01 // Products
              </span>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <h2 className="font-headline text-3xl md:text-5xl mt-4">
                Six products.{' '}
                <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>
                  <GlitchText text="All shipping." />
                </span>
              </h2>
            </SectionReveal>
          </div>

          {/* Stats block */}
          <SectionReveal delay={0.2}>
            <div className="font-mono text-[11px] text-text-muted uppercase tracking-widest space-y-1.5 md:text-right">
              <p>
                Total //{' '}
                <span className="text-text-primary">
                  {String(products.length).padStart(2, '0')}
                </span>
              </p>
              <p>
                Live //{' '}
                <span className="text-text-primary">
                  {String(liveCount).padStart(2, '0')}
                </span>
              </p>
              <p>
                In Progress //{' '}
                <span className="text-text-primary">
                  {String(inProgressCount).padStart(2, '0')}
                </span>
              </p>
            </div>
          </SectionReveal>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <SectionReveal key={product.name} delay={i * 0.08}>
              <ProductCard product={product} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
