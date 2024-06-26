import React from 'react'

const Form = () => {
  return (
    <div className='border p-5 w-full 2xl:w-[75%]'>
        <form
        onSubmit={(e)=>e.preventDefault()}
        action="" className=' '>
            <div className='flex flex-col gap-5'>
              
              <div className='flex flex-col md:flex-row gap-5 '>
                <input 
                type="text" 
                placeholder="Enter your name"
                className=' w-full md:w-1/2 py-3  bg-gray-200 focus:bg-gray-50 focus:border-indigo-500 ease-in-out duration-500 border outline-none pl-4 rounded-md text-gray-500'
                />
                <input 
                type="text" 
                placeholder="Enter your name"
                className=' w-full md:w-1/2 py-3  bg-gray-200 focus:bg-gray-50 focus:border-indigo-500 ease-in-out duration-500 border outline-none pl-4 rounded-md text-gray-500'
                />
              </div>
              <div className='flex flex-col md:flex-row gap-5'>  
                <input 
                type="text" 
                placeholder="Enter your name"
                className=' w-full md:w-1/2 py-3  bg-gray-200 focus:bg-gray-50 focus:border-indigo-500 ease-in-out duration-500 border outline-none pl-4 rounded-md text-gray-500'
                />
                <input 
                type="text" 
                placeholder="Enter your name"
                className=' w-full md:w-1/2 py-3  bg-gray-200 focus:bg-gray-50 focus:border-indigo-500 ease-in-out duration-500 border outline-none pl-4 rounded-md text-gray-500'
              
                />
              </div>
              <textarea name="" id=""
              placeholder='Enter your message here'
              className='w-full min-h-[110px]  sm:min-h-[150px] rounded-md outline-none p-4  bg-gray-200 border focus:bg-gray-50  focus:border-indigo-500 ease-in-out duration-500 pl-4  text-gray-500'
              
              />
                <button className='border  self-center py-3 px-10 mt-5 rounded-md hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500 bg-indigo-500 ease-in-out duration-500 text-white'>Send Message</button>

              </div>

        </form>
    </div>
  )
}

export default Form