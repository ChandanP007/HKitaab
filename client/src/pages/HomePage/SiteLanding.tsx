
import Branding from "../../components/Landing/Branding"
import Hero from "../../components/Landing/Hero"
import Bot from "../../components/Landing/Bot"
import Footer from "../../components/Landing/Footer"



const Landing = () => {
  return (
    <main className="w-full">
      <Hero/>
      <Branding/> 
      <Bot />
      <Footer/>
    </main>
  )
}

export default Landing