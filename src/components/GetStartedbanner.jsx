import React from 'react'
import heroBanner from "../assets/hero-banner1.jpg"

const GetStartedbanner = () => {
  return (
    <div style={{backgroundImage:`url(${heroBanner})`}} className=' py-20 bg-cover text-white flex items-center justify-center relative bg-center   my-10 '>
        <div className='absolute inset-0 bg-gradient-to-tr from-blue-500/90 to-purple-400/90 '></div>

        <div className='relative z-10 flex flex-col items-center justify-center gap-10'>
            <h2 data-aos="fade-right" className=' text-2xl'>SO WHAT IS NEXT?</h2>
            <h1 data-aos="zoom-out" className='font-bold text-4xl leading-[50px]  md:leading-[80px] md:text-7xl w-[80%] text-center lg:leading-[90px]'>Are You Ready? Let's Get To Work!</h1>
            <a data-aos="fade-left" href="#" className='py-3 px-8 hover:bg-black hover:text-white ease-in-out duration-300 text-indigo-500 bg-white rounded-lg font-semibold'>CONTACT US</a>
        </div>


    </div>
  )
}

export default GetStartedbanner