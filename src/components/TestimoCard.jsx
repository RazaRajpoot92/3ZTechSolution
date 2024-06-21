import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";


const TestimoCard = ({data}) => {
  return (
    <div className='h-[300px] flex items-end justify-center'>
        <div className='relative w-[320px] md:w-[340px] h-[250px] flex flex-col items-center justify-center  rounded-3xl p-5 shadow-md   bg-white '>
            
            <div className='w-20 h-20 border-b-2 border-blue-600 absolute left-[38%] top-[-20%] flex justify-center items-center rounded-full bg-white shadow-lg'>
                <FaQuoteLeft size={28} color='blue' />

            </div>

            <div className=' flex flex-col items-center gap-2'>
                <p className='text-sm text-gray-500 '>{data.msg}</p>
                
                <div className=''>
                    <h2 className='text-xl font-bold text-blue-700'>{data.name}</h2>
                    <p className='text-sm text-gray-400'>{data.degnization}</p>
                </div>
                    
            </div>

        </div>
    </div>
  )
}

export default TestimoCard