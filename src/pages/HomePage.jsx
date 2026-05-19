import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Products from '../sections/Products'
import Footer from '../sections/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
      </main>
      <Footer />
    </>
  )
}
