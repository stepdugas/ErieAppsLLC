import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import SectionReveal from '../components/SectionReveal'
import Container from '../components/Container'

export default function Products() {
  return (
    <section id="products" className="relative py-12 md:py-16">
      <Container>
        <SectionReveal>
          <p className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-3">
            Products
          </p>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-700 tracking-tight">
            What we build
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl text-lg">
            Tools that solve real problems for real people — from AI-powered reports to habit tracking.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {products.map((product, i) => (
            <SectionReveal key={product.name} delay={i * 0.06}>
              <ProductCard product={product} />
            </SectionReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
