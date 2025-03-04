import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

export default function TabletSidebar() {
  return (
    <section className='hidden sm:flex items-center justify-center w-[5rem] h-full  '>
        <div className='w-[70%] h-[90%] bg-[#081C14] rounded-md flex flex-col justify-between'>
            <div className='flex flex-col justify-center items-center pt-10 gap-16 '>
                <IoHome color='white' className='size-7'/>
                <FaBook color='white' className='size-7'/>
                <FaPlus color='white' className='size-7'/>
            </div>
            <div className='flex items-center justify-center pb-5'>
                <form action={'/api/logout'} method='POST' className='bg-[#FF7474] w-9 h-9 flex items-center justify-center rounded-md'>
                    <button type='submit' className=''>
                        <IoLogOutOutline color='white' className='size-7'/>
                    </button>
                </form>
            </div> 
        </div>
    </section>
  )
}
