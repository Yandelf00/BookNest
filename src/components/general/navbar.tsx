import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <section className='w-20 hidden sm:flex sm:flex-row  sm:absolute top-2 right-2 
    justify-center items-center gap-5
    md:top-3 md:right-5 md:gap-8'>
      <Image src={"/assets/parameter-icon.png"} alt='parameter' className='md:hidden cursor-pointer' width={20} height={10}/>
      <Image src={"/assets/profile-icon.png"} alt='profile' className='md:hidden cursor-pointer' width={20} height={10}/>
      <Image src={"/assets/parameter-icon.png"} alt='parameter' className='hidden md:block cursor-pointer' width={25} height={12}/>
      <Image src={"/assets/profile-icon.png"} alt='profile' className='hidden md:block cursor-pointer' width={25} height={12}/>
    </section>
  )
}
