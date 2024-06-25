import React from 'react'
import aboutBanner from "../assets/about-banner.jpg"

const AboutUs = () => {
  return (
    <div className='flex overflow-x-hidden flex-col items-center  lg:flex-row my-20 px-5 md:px-10 2xl:px-20'>
        {/* About content */}
        <div data-aos="fade-right" className=' lg:w-[70%] items-center lg:items-start p-5 lg:pr-16 flex flex-col justify-center gap-10'>
            
            <div className='flex flex-col items-center lg:items-start gap-3'>
                <h1 className=' text-3xl md:text-6xl font-bold'>About Us</h1>
                <p className='text-gray-500 '> 
                    We leverage our expertise in web and mobile development, digital marketing, 
                    to deliver comprehensive solutions that drive success in the digital realm.
                </p>
            </div>

            <div className='flex flex-col items-center lg:items-start gap-3'>
                <h1 className=' text-2xl md:text-4xl font-semibold'>Why Choose Us</h1>
                <p className='text-gray-500'> 
                Choose 3z Tech Solutions for our unparalleled expertise in web and mobile development, 
                digital marketing, and more. With a dedicated focus on delivering comprehensive solutions under 
                one roof, we streamline your project's success. Our proven track record and commitment to excellence ensure that your business thrives in the digital landscape.
                </p>
            </div>

            <div className='flex flex-col items-center lg:items-start gap-3'>
                <h1 className='font-semibold text-2xl md:text-4xl'>Our Mission</h1>
                <p className='text-gray-500 leading-7'> 
                Our mission is multifaceted: to redefine industry standards through cutting-edge web and mobile development and pioneering digital marketing strategies. We strive to cultivate a culture of innovation and excellence, driving businesses forward with tailored solutions that maximize their online potential. With a commitment to staying ahead of the curve, 
                we continuously evolve our practices to meet the dynamic demands of the digital landscape. Our mission is to empower businesses of all sizes, equipping them with the tools and strategies needed to thrive in an increasingly competitive market. 
                By combining our expertise in web and 
                mobile development with comprehensive digital marketing solutions, we aim to be the catalyst for our clients' success stories.
                </p>
            </div>
        
        </div>

        {/* About Image */}
        <div>
            <img data-aos="zoom-in" src={aboutBanner} className="rounded-lg w-[500px] " alt="" />
        </div>
    
    </div>
  )
}

export default AboutUs