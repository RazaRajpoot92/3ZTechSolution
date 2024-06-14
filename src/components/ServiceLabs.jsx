import React, { useState } from 'react'
import { TiTick } from "react-icons/ti";


const ServiceLabs = ({title}) => {

    const [isHover, setIsHover] = useState(false)

  return (
    <div 
    onMouseEnter={()=>setIsHover((curr)=>!curr)}
    onMouseLeave={()=>setIsHover((curr)=>!curr)}
    className=' w-64 2xl:w-72 p-2 py-3 duration-300 ease-in hover:bg-indigo-200 text-slate-700 gap-2  border rounded-md bg-white flex items-center'>
        <i className={`h-6 w-6 flex duration-300 ease-in justify-center items-center rounded-full ${isHover?"bg-white":"bg-indigo-500"} `} >
            <TiTick size={18} color={`${isHover?"blue":"white"}`} />
        </i>
        <h2>{title}</h2>
    </div>
  )
}

export default ServiceLabs