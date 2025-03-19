import React from 'react'
import BookInsert from './_components/BookInsert'


export default function page() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='h-full w-[100%] sm:h-[90%] flex justify-center items-start sm:items-center '>
          <div className='w-full h-full 
          sm:w-[500px] sm:h-[700px] 
          lg:h-[800px] lg:w-[600px] 
          bg-white sm:rounded-xl sm:shadow-md sm:px-8
          flex flex-col p-4'>
            <h1 className='text-[#081C14] text-[25px] font-semibold'>Add a new book</h1>
            <BookInsert/>
          </div>
        </div>
    </div>
  )
}
