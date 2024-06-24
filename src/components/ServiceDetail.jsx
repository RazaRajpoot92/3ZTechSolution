import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import ServiceLabs from './ServiceLabs';



const ServiceDetail = ({data, sec}) => {
    const [sec1, setSec] = useState(sec%2===0?true:false)
 
  return (
    <div className={`flex flex-col ${sec1?"lg:flex-row":"lg:flex-row-reverse"}  2xl:px-52 ${sec1?"bg-gray-100":"bg-white"} py-20 px-5`} >
        {/* Detail service content */}
        <div className=' w-full lg:w-1/2 flex items-center flex-col gap-6'>
            <h1 className='font-bold text-2xl lg:text-4xl'>{data.serviceName}</h1>
            <p className='text-gray-500 text-sm md:text-lg px-10 lg:px-3 leading-6'> {data.description}</p>

            {/* Labels */}
            <div className='flex flex-wrap justify-center lg:justify-between gap-6'>
                
                {
                    data.labels.map((title)=>(
                        <ServiceLabs key={title} title={title} />
                    ))
                }             
            </div>

            <a href="#" className=' lg:self-start w-40 py-3 mt-6 duration-300 ease-in hover:bg-transparent hover:text-indigo-600 border font-semibold border-indigo-600 justify-center flex items-center gap-2 rounded-md text-white bg-indigo-600'>
                <RiMenu2Fill size={18} />

                Read More
                </a>
       
        </div>

        {/* Service Image */}

        <div className=' w-full flex justify-center lg:flex-1'>
            <img className='w-[600px] ' src={data.bannerImage} alt="" />
        </div>

    </div>
  )
}

export default ServiceDetail