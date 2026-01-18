import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Products from "../components/Products"
import Ingredients from "../components/Ingredients"
import Benefits from "../components/Benefits"
import Reviews from "../components/Reviews"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Page = () => {
  return (
    <main className="min-h-screen bg-[#FFFBF0] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Ingredients />
      <Benefits />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}

export default Page