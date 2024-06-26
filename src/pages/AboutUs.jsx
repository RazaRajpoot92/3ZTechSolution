import React from 'react'
import HeroCom from '../components/HeroCom'
import aboutImg from "../assets/hero-banner1.jpg"
import AboutUsCom from '../components/AboutUs'
import TeamSec from '../components/TeamSec'

const AboutUs = () => {
  const data = {
    img:aboutImg,
    title:"About Us",
    description:"we are dedicated to transforming innovative ideas into impactful solutions, driven by a passion for excellence and a commitment to empowering our clients and communities."

  }
  return (
    <div>
      <HeroCom data={data} />
      <AboutUsCom />
      <TeamSec />
    </div>
  )
}

export default AboutUs