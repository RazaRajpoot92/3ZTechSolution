import React from 'react'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import ServiceDetailContainer from '../components/ServiceDetailContainer.jsx'
import AboutUs from '../components/AboutUs.jsx'

const Home = () => {
  return (
    <div>
        <Hero />
        <Services />
        <ServiceDetailContainer />
        <AboutUs />
    </div>
  )
}

export default Home