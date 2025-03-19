"use client"
import {
  QueryClientProvider,

} from '@tanstack/react-query'
import  queryClient  from '@/lib/queryClient'
import React, { useState } from 'react'
import GetBooks from './_components/GetBooks'


export default function page() {
  const [category, setCategory] = useState<string>('')

  function handleCategoryChange(e : React.ChangeEvent<HTMLSelectElement>)
  {
    setCategory(e.target.value)
  }

  return (
    <QueryClientProvider client={queryClient}>

      <div className='w-full h-full flex justify-center items-center'>
          <div className='h-full w-full sm:w-[90%] sm:h-[80%] flex flex-col gap-5 justify-start items-start sm:items-center bg-white sm:rounded-lg '>
              <div className='flex flex-col gap-3 sm:flex-row w-full p-4 justify-between sm:items-center'>
                <h1 className='hidden sm:block text-[1.5rem] pointer-events-none'>My books</h1>
                <div className='flex gap-2 w-full sm:w-[70%] md:w-auto flex-col sm:flex-row'>
                    <select value={category} onChange={handleCategoryChange} 
                    className='w-full sm:w-1/2 md:w-[12rem] lg:w-[14rem] h-7 border-1 border-black rounded-md'>
                      <option value="">All genres</option>
                      <option value="philosophy">philosophy</option>
                      <option value="something">something</option>
                    </select> 
                    <div className="relative w-full sm:w-1/2 md:w-[12rem] lg:w-[14rem]">
                      <input
                        placeholder="Search..."
                        type="text"
                        className="w-full h-7  pb-1 pl-8 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                      </div>
                    </div>
                </div>
              </div>
              <div className='w-full h-full '>
                <GetBooks category={category} />
              </div>
          </div>
      </div>
    </QueryClientProvider>
  )
}

