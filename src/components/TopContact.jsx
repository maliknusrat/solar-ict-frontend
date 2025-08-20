import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";

export default function TopContact() {
  return (
    <div className='w-full md:max-w-6xl mx-auto text-white py-6 px-3 md:px-0 flex items-center justify-between'>
       <div className='flex items-center justify-center gap-5'>
         <div className='text-xs md:text-sm flex items-center gap-1'>
            <IoMailOutline></IoMailOutline>
            <p>info@solar-ict.com</p>
        </div>
        <div className='text-xs md:text-sm flex items-center gap-1'>
            <IoCallOutline/>
            <p>+41 21 561 53 15</p>
        </div>
       </div>
       <div className='text-xs md:text-sm flex items-center justify-center gap-5'> 
         <div className='flex items-center gap-1'>
            <MdOutlineHeadsetMic/>
            <p>Support</p>
        </div>
        <div className='text-xs md:text-sm flex items-center gap-1'>
            <FiHelpCircle/>
            <p>Help</p>
        </div>
       </div>

    </div>
  )
}
