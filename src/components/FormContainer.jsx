import React from 'react'
import Form from './Form'

const FormContainer = () => {
  return (
    <div>
        <div className='flex flex-col  items-center gap-4 mt-16'>
            <h1 className='text-5xl font-bold'>Get In Touch</h1>
            <p className='text-center w-[90%] md:w-[50%] text-gray-500'>
            Got a tech challenge or need assistance? Contact us for prompt and professional support.
            </p>
        </div>

        <div className='mt-10 flex justify-center px-10'>
            <Form />
        </div>
    </div>
  )
}

export default FormContainer