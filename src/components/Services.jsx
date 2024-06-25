import React from 'react'
import ServiceCard from './ServiceCard'
import { servicesData } from '../data/services'

const Services = () => {
  return (
    <div className='my-32'>
        {/* Service heading, content */}
        <div data-aos="fade-up" className=' flex flex-col gap-4 justify-center items-center'>
            <h2 className='text-5xl text-center font-bold'><span className='text-indigo-500'>Our</span> Services</h2>
            <p className=' px-3 md:w-[600px] text-center text-gray-500'>
                We offer a comprehensive range of services designed to bring your digital vision to life.
                We combine industry-leading expertise with innovative technologies to create high-quality software.
            </p>
        </div>
        
        <div className='p-10 mt-10 flex justify-center gap-8 flex-wrap'>
            {
                servicesData.map((service)=>(
                    <ServiceCard data={service} key={service.title} />
                ))
            }

        </div>
    </div>
  )
}

export default Services