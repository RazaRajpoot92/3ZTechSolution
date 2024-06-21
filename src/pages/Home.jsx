import React from 'react'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import ServiceDetailContainer from '../components/ServiceDetailContainer.jsx'
import AboutUs from '../components/AboutUs.jsx'
import TestimonialSec from '../components/TestimonialSec.jsx'
import TeamSec from '../components/TeamSec.jsx'
import GetStartedbanner from '../components/GetStartedbanner.jsx'

const Home = () => {
  return (
    <div>
        <Hero />
        <Services />
        <ServiceDetailContainer />
        <AboutUs />
        <TestimonialSec />
        <TeamSec />
        <GetStartedbanner />
    </div>
  )
}

export default Home