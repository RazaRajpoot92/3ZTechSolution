import React from 'react'


const HeroCom = ({data}) => {
  return (
    <div className='bg-center bg-cover h-[400px] 2xl:h-[500px] relative' style={{backgroundImage:`url(${data.img})`}}>
        <div className='absolute inset-0 bg-slate-900/70'></div>

        <div data-aos="zoom-out" className='relative text-white flex flex-col gap-4 items-center justify-center h-full z-10'>
            <h1 className='text-5xl font-bold'>{data.title}</h1>
            <p className='text-slate-100 w-[70%] lg:w-[40%] text-center'>{data.description}</p>

        </div>
    </div>
  )
}

export default HeroCom