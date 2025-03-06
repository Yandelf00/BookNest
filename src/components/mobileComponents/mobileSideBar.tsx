"use client"

import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import Link from 'next/link';


export default function MobileSideBar() {
  const pathname = usePathname()

  return (
    <section className='flex flex-row w-full h-[40px] mt-1 bg-[#081C14] items-center justify-between px-10 sm:hidden '> 
        <IoHome color='white' />
        <FaBook color='white'/>
        <Link href={'/addbooks'} className={`${pathname === '/addbooks' ? 'bg-white rounded-md' : ''} h-5 w-5 flex justify-center items-center `} >
          <FaPlus className={`${pathname === '/addbooks'? 'text-[#081C14] ' : 'text-white'} `} />
        </Link>
        <form action="/api/logout" method='POST'>
            <button type='submit' className='h-[33px] w-[33px] bg-[#FF7474] cursor-pointer flex justify-center items-center rounded-md pl-1 '>
                <IoLogOutOutline color='white'/>
            </button>
        </form>
    </section>
  )
}
