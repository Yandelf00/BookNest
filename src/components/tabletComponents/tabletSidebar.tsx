"use client"

import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



export default function TabletSidebar() {
    const pathname = usePathname()

    return (
        <section className='hidden sm:flex items-center justify-center w-[5rem] h-full
        lg:w-[25rem]'>
            <div className='w-[300px] h-[90%]  bg-[#081C14] rounded-md flex flex-col justify-between'>
                <div className='flex flex-col justify-center items-center pt-5 gap-8 '>
                    <div className='lg:w-full lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-3'>
                        <Image src={'/assets/logo-white.png'} alt='logo' height={40} width={30} />
                        <h1 className='text-white hidden lg:block'>BookNest</h1>
                    </div>
                    {/* <div className='lg:w-full lg:h-10 mt-20 lg:flex lg:flex-row lg:justify-start lg:items-center lg:gap-3 lg:pl-8
                    cursor-pointer hover:bg-[rgba(255,255,255,0.5)] '>
                        <IoHome color='white' className='size-7'/>
                        <h1 className='text-white hidden lg:block'>Home</h1>
                    </div> */}
                    <Link href={'/'} className={`lg:w-full mt-20 lg:h-10 lg:flex lg:flex-row lg:justify-start lg:items-center lg:gap-3 lg:pl-8
                        cursor-pointer ${pathname === '/' ? 'bg-white rounded-md lg:rounded-full' : 'hover:bg-[rgba(255,255,255,0.5)] '} `}>
                        <IoHome className={`size-7 ${pathname === '/' ? 'text-[#081C14]' : 'text-white' } `} />
                        <h1 className={`hidden lg:block ${pathname === '/' ? 'text-[#081C14]' : 'text-white'} `}>Home</h1>
                    </Link>
                    <Link href={'/viewbooks'} className={`lg:w-full lg:h-10 lg:flex lg:flex-row lg:justify-start lg:items-center lg:gap-3 lg:pl-8
                        cursor-pointer ${pathname === '/viewbooks' ? 'bg-white rounded-md lg:rounded-full' : 'hover:bg-[rgba(255,255,255,0.5)] '} `}>
                        <FaBook className={`size-7 ${pathname === '/viewbooks' ? 'text-[#081C14]' : 'text-white' } `} />
                        <h1 className={`hidden lg:block ${pathname === '/viewbooks' ? 'text-[#081C14]' : 'text-white'} `}>My Books</h1>
                    </Link>
                    <Link href={'/addbooks'} className={`lg:w-full lg:h-10 lg:flex lg:flex-row lg:justify-start lg:items-center lg:gap-3 lg:pl-8
                        cursor-pointer ${pathname === '/addbooks' ? 'bg-white rounded-md lg:rounded-full' : 'hover:bg-[rgba(255,255,255,0.5)] '} `}>
                        <FaPlus className={`size-7 ${pathname === '/addbooks' ? 'text-[#081C14]' : 'text-white' } `} />
                        <h1 className={`hidden lg:block ${pathname === '/addbooks' ? 'text-[#081C14]' : 'text-white'} `}>Add Books</h1>
                    </Link>
                </div>
                <div className='flex items-center justify-center pb-5'>
                    <form action={'/api/logout'} method='POST' className='bg-[#FF7474]  w-9 h-9 flex items-center justify-center rounded-md
                    lg:w-[10rem]'>
                        <button type='submit' className='cursor-pointer lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-2'>
                            <IoLogOutOutline color='white' className='size-7'/>
                            <p className='hidden lg:block text-white'>Log out</p>
                        </button>
                    </form>
                </div> 
            </div>
        </section>
    )
}
