import React, { useState } from "react"
import { BsTelephone } from "react-icons/bs";


const ContactCard = ({data})=>{

    const [isHover, setIsHover] = useState(false)

    return(
        <div
        onMouseEnter={()=>setIsHover(curr=>!curr)}
        onMouseLeave={()=>setIsHover(curr=>!curr)}
        className="w-[320px] h-[140px] rounded-md hover:-translate-y-2 ease-in-out duration-500 shadow-custom-light  flex gap-4 px-6  items-center">

            <div className={`w-[60px] h-[60px] ${isHover?"bg-indigo-500":"bg-gray-50"} ease-in-out duration-500 rounded-full flex justify-center items-center`}>
                <data.icon size={24} color={`${isHover?"white":"blue"}`} />
            </div>
            
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
                {data.values.map((item)=>(
                    <p key={item} className="text-gray-500 hover:text-indigo-500">{item}</p>
                ))}
                
            </div>

        </div>
        
    )
}

export default ContactCard