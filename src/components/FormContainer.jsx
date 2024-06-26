import React from 'react'
import Form from './Form'

const FormContainer = () => {
  return (
    <div>
        <div className='flex flex-col  items-center gap-4 mt-16'>
            <h1 className='text-4xl font-bold'>Get In Touch</h1>
            <p className='text-center w-[90%] md:w-[50%] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className='mt-10 flex justify-center px-10'>
            <Form />
        </div>
    </div>
  )
}

export default FormContainer