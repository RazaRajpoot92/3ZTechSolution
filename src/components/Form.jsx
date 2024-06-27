import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const subjectRef = useRef(null)
  const messageRef = useRef(null)

  const formValidation=(name,email,phone)=>{

    const isValidName = /^.{4,}$/.test(name.current.value.trim())
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.current.value.trim())
    const isValidPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone.current.value.trim())

    if(!isValidName) return "Please enter at least 4 characters long name"
    if(!isValidEmail) return "Please enter valid email"
    if(!isValidPhone) return "Please enter valid phone number"

    return true
  }

  const handleSubmit = (e)=>{
    const toastSetting = {
      position:"top-center"
    }
    e.preventDefault()
    const message = formValidation(nameRef,emailRef,phoneRef)
    if(message===true){
      toast.success("Form has been submitted Successfully",toastSetting)
    }else{
      toast.error(message,toastSetting)
    }
    

  }


  return (
    <div className='border p-5 w-full 2xl:w-[75%]'>
      <ToastContainer />
        <form
        onSubmit={handleSubmit}
        action="" className=' '>
            <div className='flex flex-col gap-5'>
              
              <div className='flex flex-col md:flex-row gap-5 '>
                <input 
                ref={nameRef}
                required
                name='name'
                type="text" 
                placeholder="Enter your name"
                className=' w-full md:w-1/2 py-3  bg-gray-200 focus:bg-gray-50 focus:border-indigo-500 ease-in-out duration-500 border outline-none pl-4 rounded-md text-gray-500'
                />
                <input 
                required
                ref={emailRef}
                name='email'
                type="email" 
                placeholder="Enter your email"
                className=' w-full md:w-1/2 py-3  bg-gray-200 focus:bg-gray-50 focus:border-indigo-500 ease-in-out duration-500 border outline-none pl-4 rounded-md text-gray-500'
                />
              </div>
              <div className='flex flex-col md:flex-row gap-5'>  
                <input 
                ref={phoneRef}
                required
                name='phone number'
                type="tel" 
                placeholder="Enter your phone number"
                className=' w-full md:w-1/2 py-3  bg-gray-200 focus:bg-gray-50 focus:border-indigo-500 ease-in-out duration-500 border outline-none pl-4 rounded-md text-gray-500'
                />
                <input 
                required
                ref={subjectRef}
                name='subject'
                type="text" 
                placeholder="Subject"
                className=' w-full md:w-1/2 py-3  bg-gray-200 focus:bg-gray-50 focus:border-indigo-500 ease-in-out duration-500 border outline-none pl-4 rounded-md text-gray-500'
              
                />
              </div>
              <textarea name="message" id=""
              ref={messageRef}
              required
              placeholder='Enter your message here...'
              className='w-full min-h-[110px]  sm:min-h-[150px] rounded-md outline-none p-4  bg-gray-200 border focus:bg-gray-50  focus:border-indigo-500 ease-in-out duration-500 pl-4  text-gray-500'
              
              />
                <button className='border  self-center py-3 px-10 mt-5 rounded-md hover:bg-transparent hover:border-indigo-500 hover:text-indigo-500 bg-indigo-500 ease-in-out duration-500 text-white'>Send Message</button>

              </div>

        </form>
    </div>
  )
}

export default Form