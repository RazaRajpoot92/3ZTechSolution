import React from 'react'
import HeroCom from '../components/HeroCom'
import contactImg from "../assets/contact.jpg"
import ContactInfoCon from '../components/ContactInfoCon'
import FormContainer from '../components/FormContainer'

const ContactUs = () => {
  const data = {
    img:contactImg,
    title:"Contact Us",
    description:"Have questions or need assistance? Get in touch with us today. We're here to help you every step of the way!"
  }
  return (
    <div>
      <HeroCom data={data} />
      <ContactInfoCon />
      <FormContainer />
    </div>
  )
}

export default ContactUs