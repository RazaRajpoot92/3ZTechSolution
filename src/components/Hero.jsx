import React from 'react'
import banner from "../assets/hero-banner1.jpg"
import heroImage from "../assets/hero-banner2-.png"

const Hero = () => {
  return (
    <div style={{backgroundImage: `url(${banner})`}} className='relative bg-cover bg-center mb-[200px] bg-black text-white h-screen'>
        
    <div className="absolute inset-0 bg-gradient-to-b from-black opacity-80 to-black"></div>

    <div className='relative z-[10] flex items-center h-full'>
        
        <div className='flex-1 py-20 pl-10 flex flex-col  h-full'>
            <h2 className=' '>Unleash Your Business's Potential with</h2>
            <h1 className='text-white font-bold text-[60px]'> 3Z Tech Solution</h1>
            <p className='text-gray-300 leading-6'>
                At 3Z Tech Solution, we don't just build software – we sculpt digital experiences that transform businesses and redefine industries. 
                Step into a realm where creativity meets functionality, 
                and possibilities are limitless.
            </p>
        </div>
       
        <div className='flex-1'>
            <img className='w-full' src={heroImage} alt="" />    
        </div>    
    </div>
        


   {/* Shape devider */}
    <div class="custom-shape-divider-bottom-1717760727">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div>


    </div>
  )
}

export default Hero