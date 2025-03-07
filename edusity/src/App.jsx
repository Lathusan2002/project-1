import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
    <div className="container">
    <Title subTitle="Our PROGRAM" title="What We Offer" />
      <Program/>
      <About/>
      <Title subTitle="Gallery" title="Campus photos" />
      <Campus/>
      <Title subTitle="Testimonials" title="What Students Says" />
      <Testimonials/>
      <Title subTitle="Contact us" title="Get in Touch" />
      <Contact/>
      
      </div>
    </div>
  )
}

export default App
