import React from 'react'
import TeamCard from './TeamCard'

import { teamData } from '../data/teamData'

const TeamSec = () => {
  return (
    <div className='py-20 flex flex-col items-center'>
        
        <div data-aos="fade-up" className='flex flex-col items-center gap-8'>
            <h1 className='font-bold text-3xl md:text-5xl'>Meet Our <span className='text-indigo-600'>Expert</span> Team</h1>
            <p className='text-center text-sm md:text-lg w-[95%] md:w-[70%] lg:w-[60%] text-gray-500 mb-4'>
                Meet our expert team of innovators and problem-solvers, dedicated to shaping the future of technology.
                Committed to excellence, we collaborate seamlessly to deliver cutting-edge solutions tailored to your business needs.
            </p>
        </div>

        <div className='flex flex-wrap mt-10 gap-5 justify-center 2xl:w-[80%]'>
               {
                teamData.map((data,)=>(
                    <TeamCard key={data.name} data={data} />
                ))
               }
        </div>

    </div>
  )
}

export default TeamSec