import React from 'react'
import Image from 'next/image'

export default function MobileNavbar() {
  return (
    <section className='w-full flex p-2 flex-row justify-between sm:hidden'>
        <div className='flex flex-row gap-1 items-center '>
            <Image src={'/assets/mobile-logo.png'} alt='mobile-logo' height={35} width={25}/>
            <h1 className='text-[#081C14] text-[13px] font-bold '>BookNest</h1>
        </div>
        <div className='flex flex-row gap-5 items-center'>
            <Image src={'/assets/parameter-icon.png'} alt='mobile-logo' height={27} width={17}/>
            <Image src={'/assets/profile-icon.png'} alt='mobile-logo' height={25} width={15}/>
        </div>
    </section>
  )
}
