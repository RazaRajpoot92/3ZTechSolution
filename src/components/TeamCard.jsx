import { useState } from 'react';


const TeamCard = ({data}) => {
    const [showOverlay, setShowOverlay] = useState(false);

    const {name, degnization,img,socialLinks} = data
    return (
        <div 
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
            className='relative flex items-center  transition-all duration-500 gap-3 flex-col w-[250px] overflow-hidden'>
            
            {/* Image and overlay container */}
            <div className='relative'>
                <img className='w-full' src={img} alt="Team Member" />
                
                {/* Overlay with sliding animation */}
                <div 
                    className={`absolute flex gap-2 justify-center items-center inset-0 bg-gradient-to-br from-blue-500/60 to-purple-300 transform transition-transform duration-300 ${showOverlay ? 'translate-y-0' : '-translate-y-full'}`}
                >
                    {
                        socialLinks.map((item)=>(
                            <a 
                            key={item.name}
                            href={item.name === "email" ? `mailto:${item.url}` : item.url}
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='h-8 w-8 bg-indigo-600 hover:bg-blue-500 ease-in-out duration-500  flex items-center justify-center rounded-full'>
                                
                                <item.icon size={18} color='white' />
                            
                            </a> 
                        ))
                    }

                </div>
            </div>

            {/* Text content */}
            <div className='text-center'>
                <h2 className='font-semibold text-xl'>{name}</h2>
                <p className='text-gray-400 text-sm'>{degnization}</p>
            </div>
        
        </div>
    );
}

export default TeamCard;
