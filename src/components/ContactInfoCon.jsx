import React from 'react'
import ContactCard from './ContactCard'
import { contactData } from '../data/contactData'

const ContactInfoCon = () => {
  return (
    <div className='flex py-10 gap-3 justify-center'>
       
       {
        contactData.map((item)=>(
            <ContactCard key={item.title} data={item} />
        ))
       }
        

    </div>
  )
}

export default ContactInfoCon