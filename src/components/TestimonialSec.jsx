import React from 'react'
import TestimoCard from './TestimoCard'
import { testimonialData } from '../data/testimonial'

import Slider from "react-slick";

const TestimonialSec = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        adaptiveHeight:true,
        slidesToShow: 4,
        arrows:false,
        autoplay:true,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 1080,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
        
          ]
      };

  return (
    <div className='py-20 my-10 flex flex-col items-center justify-center bg-gradient-to-tr from-blue-300 to-gray-200 '>
        
        <h1 data-aos="zoom-out" className='text-center text-slate-700 text-5xl font-semibold'>What Clients Say</h1>
        <p data-aos="zoom-out" className=' w-full text-center md:w-[70%] 2xl:w-1/2 text-sm md:text-[18px] leading-6 text-slate-500 my-10'>Client testimonials speak volumes about our commitment to delivering exceptional IT solutions. 
        Whether it's optimizing financial processes, boosting brand awareness, or revolutionizing sales strategies, our team's dedication shines through in every project.
        Discover why businesses trust us to innovate and elevate their operations.</p>
        
        <div className='slider-container w-full 2xl:w-[80%] px-5'>
            <Slider {...settings}>    
            
                {
                    testimonialData.map((data)=>(
                        <TestimoCard key={data.name} data={data} />
                    ))
                }
            
            </Slider>
        </div>
    </div>
  )
}

export default TestimonialSec