import React from 'react'
import logo from "../assets/logohd.png"
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdCopyright } from "react-icons/md";
import { Link } from 'react-router-dom';




const Footer = () => {


  const year = new Date().getFullYear()
  
  const socialLinks = [{
    icon:FaSquareFacebook,
    link:"https://www.facebook.com"
    },
    {  
      icon: FaLinkedin ,
      link:"https://www.linkedin.com/company/3z-tech-solutions"
    },
    {
      icon:FaInstagramSquare,
      link:"https://www.instagram.com"
    },
    {
      icon:FaTwitterSquare,
      link:"https://www.twitter.com"
    }
  
  ]

  const links = [{
    name:"Home",
    path:"/"
    },
    {
      name:"Services",
      path:"/services",
    },
  
    {
      name:"About Us",
      path:'about-us'
    }
]

const getInTouch = [
  {
    name:"Address",
    icon:IoLocationSharp,
    values:["Wahdat Colony Lahore, Pakistan"]
  },
  {
    name:"mobile",
    icon:FaPhoneAlt,
    values:["+923704469890","+923265778232"]
  },
  {
    name:"mail",
    icon: IoMdMail,
    values:["nalainzahraofficial@gmail.com","zahra@3ztechsolutions.com"]
  }
]

  return (
    <footer className='mt-20 pt-5 overflow-x-hidden relative bg-black  text-white'>
            {/* Shape Divider */}
          <div className="custom-shape-divider-top-1719234983">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
            </svg>
          </div>

    {/* Upper footer, logo and description */}
        <div data-aos="zoom-out" className='flex flex-col items-center gap-5 py-10'>
            <img className='w-20 h-20 animate-move' src={logo} alt="logo" />
            <p className=' w-[95%] md:w-[60%] text-gray-300 text-center'>Empowering businesses with cutting-edge IT solutions, 3Z Tech Solution pioneers innovation.
            From scalable software development to seamless tech support, we redefine excellence in IT services.</p>
        </div>
    {/* Social Liks  */}
        <div data-aos="zoom-in" className='flex items-center justify-center gap-2'>
          <div className='w-[200px] rounded-full  h-[2px] bg-indigo-500'></div>
          <div className='flex gap-2'>
            {
              socialLinks.map((item)=>(
                <a 
                key={item.link}
                href={item.link} 
                target='_blank'
                className='hover:text-indigo-400  hover:scale-125 ease-in-out duration-300'
                rel='noopener noreferrer'
                >{<item.icon size={24}  />}</a>
              ))
            }
          </div>
          <div className='w-[200px] rounded-full h-[2px] bg-indigo-500'></div>
          
        </div>


{/* Middle footer, Explore and get in Touch  */}
        <div className='flex justify-between px-3 md:justify-around py-10'>
            <div data-aos="fade-right" className='flex gap-3 flex-col'>
              <h2 className='text-2xl '>Explore</h2>
              <div className='w-[80px] mt-[-10px] rounded-full h-[2px] bg-indigo-500'></div>

              {links.map((link)=>(
                <Link
                key={link.name}
                className='text-gray-200 hover:text-indigo-500 ease-in-out duration-300'
                to={link.path}>{link.name}</Link>
              ))}
            </div>

            <div data-aos="fade-left" className='flex gap-6 flex-col'>
              <h2 className='text-2xl'>Get in Touch</h2>
              <div className='w-[140px] mt-[-20px] rounded-full h-[2px] bg-indigo-500'></div>
              
              {getInTouch.map((data)=>(
                <div key={data.name} className='flex items-center gap-3'>
                  <span className='h-10 w-10 rounded-full bg-gradient-to-tr to-indigo-500 from-blue-500 flex items-center justify-center'>{<data.icon size={20} />}</span>
                  
                  <div className='flex flex-col gap-1'>
                    {data.values.map((value)=>(
                      <p key={value} className='text-sm'>{value}</p>
                    ))}
                  </div>
                
                </div>
              ))}
            </div>
        </div>
      {/* Lower footer, copyright section */}
        <div  className='h-[70px] flex justify-center items-center  text-white text-[14px] md:text-[16px] bg-indigo-500'>
              <p  className='flex items-center gap-1'>Copyright <MdCopyright /> <span>{year}</span> 3Z Tech Solution. All Rights Reserved. </p>
        </div>
    </footer>
)
}

export default Footer