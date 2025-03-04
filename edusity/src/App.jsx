import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
    <div className="container">
    <Title subTitle="Our PROGRAM" title="What We Offer" />
      <Program/>
      </div>
    </div>
  )
}

export default App
