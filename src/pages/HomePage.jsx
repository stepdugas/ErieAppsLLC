import Navbar from '../components/Navbar'
import MarqueeBanner from '../components/MarqueeBanner'
import Hero from '../sections/Hero'
import Products from '../sections/Products'
import Stats from '../sections/Stats'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <MarqueeBanner />
      </div>
      <Products />
      <Stats />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
