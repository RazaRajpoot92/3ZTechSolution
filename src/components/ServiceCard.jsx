import React from 'react'

const ServiceCard = ({data}) => {
    const {title,description,iconBgColor} = data
  return (
    <div data-aos="zoom-in"  className={`w-[350px] hover:scale-105 hover:bg-purple-200/50 ease-out duration-500 bg-gray-100 rounded-lg flex justify-center items-center p-5 py-10 flex-col gap-6`}>
       
       <div className={`w-20 h-20 rounded-full flex items-center justify-center ${iconBgColor}`} >
        {<data.icon size={40} color="white"/>}

       </div>
       
        <h1 className='hover:text-purple-500 cursor-pointer ease-out duration-300 font-semibold sm:text-2xl'>{title}</h1>
        <p className='text-center text-gray-500'>{description}</p>

    </div>
  )
}

export default ServiceCard;