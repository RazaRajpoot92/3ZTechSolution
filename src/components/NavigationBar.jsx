import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { navItems } from '../data/navItems';
import { Link } from 'react-router-dom';
import logo from '../assets/logohd.png'

const NavigationBar = () => {
    const [mobMenu, setMobMenu] = useState(false);

    return (
        <div className='px-5 2xl:px-40 py-3  bg-gray-900 sticky top-0 z-50  flex items-center justify-between  '>
            {/* logo */}
            <div className='flex items-center gap-3'>
                <img src={logo} className='w-[60px] h-[50px]' alt="" />
                {/* <h2 className='text-white font-semibold text-2xl'>3Z Tech Solution</h2> */}
            </div>

            {/* Nav items, lg screen navbar */}
            <div className='hidden md:flex font-[500] gap-8 text-[16px] text-white items-center'>
                {navItems.map((page)=>(
                    <Link to={page.path} className='hover:text-indigo-500' key={page.name} href="">{page.name}</Link>
                ))}
                <Link to={"/contact-us"} className='py-2 px-4 ease-in duration-300 border border-blue-700 bg-blue-700 text-white rounded-full hover:bg-transparent' >Contact Us</Link>
            </div>

            {/* Mobile navbar */}
            <div className='md:hidden relative'>
                <IoMenu onClick={() => setMobMenu(!mobMenu)} size={38} color='white' />

                <div className={`transition-all duration-300 ease-in-out ${mobMenu ? "opacity-100 scale-100" : "opacity-0 scale-95"} absolute z-50 top-full right-0 w-40 py-2 rounded-md flex flex-col font-[500] gap-5 text-[16px] bg-gray-700 bg-opacity-90 text-white items-center transform origin-top`}>
                    <button onClick={() => setMobMenu(false)} className="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {navItems.map((page)=>(
                        <Link to={page.path} className='hover:text-blue-500' key={page.name} href="">{page.name}</Link>
                        ))}
                    <a className='py-2 px-4 bg-gradient-to-tr hover:bg-transparent from-indigo-700 to-purple-400 text-white rounded-lg' href="#">Contact Us</a>
                </div>

            </div>
        </div>
    )
}

export default NavigationBar;
