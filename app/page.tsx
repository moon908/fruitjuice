import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Products from "../components/Products"
import Ingredients from "../components/Ingredients"

const Page = () => {
  return (
    <main className="min-h-screen bg-[#FFFBF0] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Ingredients />
    </main>
  )
}

export default Page