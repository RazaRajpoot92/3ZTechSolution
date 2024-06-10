import React from 'react'
import banner from "../assets/hero-banner1.jpg"
import heroImage from "../assets/hero-banner2-.png"

const Hero = () => {
  return (
    <div style={{backgroundImage: `url(${banner})`}} className='relative bg-cover bg-center bg-black text-white 2xl:min-h-[80vh] min-h-screen'>
        
    <div className="absolute inset-0 bg-gradient-to-b from-black opacity-80 to-black"></div>

    <div className='relative p-10 lg:p-20 2xl:p-48 2xl:min-h-[80vh] z-[10] flex flex-col items-center justify-center lg:flex-row lg:justify-around lg:items-center min-h-full'>
        
        {/* Hero content */}
        <div className=' lg:w-[500px] xl:flex-1  mb-10 flex md:w-[80%] items-center flex-col gap-6'>
            <h2 className=' text-sm '>Unleash Your Business's Potential with</h2>
            <h1 className='text-white font-bold text-4xl sm:text-5xl lg:text-[50px] xl:text-[70px]'> 3Z Tech Solution</h1>
            <p className='text-gray-300 md:text-sm lg:text-[16px] lg:leading-7'>
                At 3Z Tech Solution, we don't just build software – we sculpt digital experiences that transform businesses and redefine industries. 
                Step into a realm where creativity meets functionality, 
                and possibilities are limitless.
            </p>
            <div className='mt-5 flex flex-col sm:flex-row gap-4'>
                <a href="#" className='  py-3 px-8 ease-in duration-200 hover:bg-transparent border border-indigo-500 rounded-sm bg-indigo-500 text-white'
                >Get started</a>
                <a href="#" className='py-3 px-8 hover:bg-purple-500 ease-in duration-300 rounded-sm border border-purple-500 text-white'
                >How it works</a>
            </div>
        </div>
       
       {/* Hero image */}
        <div className=' w-[400px]  md:w-[500px] xl:flex-1'>
            <img className='w-full' src={heroImage} alt="" />    
        </div>    
    
    </div>
        


   {/* Shape devider */}
    <div className="custom-shape-divider-bottom-1717760727">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
    </div>


    </div>
  )
}

export default Hero