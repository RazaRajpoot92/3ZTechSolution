import React from 'react'
import HeroCom from '../components/HeroCom'
import img from "../assets/services.png"
import ServicesContainer from '../components/ServicesContainer'
import GetStartedbanner from '../components/GetStartedbanner'

const Services = () => {

  const data = {
    img:img,
    title:"Services",
    description:"Empowering businesses with innovative software solutions and unparalleled support to drive growth and efficiency."
  }


  return (
    <div>
      <HeroCom data={data} />
      <ServicesContainer />
      <GetStartedbanner />
    </div>
  )
}

export default Services