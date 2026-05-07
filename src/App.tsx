
import NavBar from "./components/ui/NavBar"
import Hero from "./components/ui/Hero"
import Features from "./sections/Features"
import Showcase from "./sections/Showcase"
import CTA from "./sections/CTA"
import Footer from "./sections/Footer"
import Languages from "./sections/Languages"
import AppPreview from "./sections/AppPreview"

function App() {

  return (
    <div className="bg-white text-black min-h-screen">
      <NavBar />
      <Hero />
      <Features />
      <AppPreview />
      <Showcase />
      <Languages />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
