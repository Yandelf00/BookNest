"use client"
import {
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import  queryClient  from '@/lib/queryClient'
import React, { useState } from 'react'


export default function page() {
  const [category, setCategory] = useState<string>('')

  function handleCategoryChange(e : React.ChangeEvent<HTMLSelectElement>)
  {
    setCategory(e.target.value)
  }

  return (
    <QueryClientProvider client={queryClient}>

      <div className='w-full h-full flex justify-center items-center'>
          <div className='h-full w-full sm:w-[90%] sm:h-[80%] flex flex-col gap-5 justify-center items-start sm:items-center bg-white sm:rounded-lg '>
              <h1>filter data</h1>
              <select value={category} onChange={handleCategoryChange}>
                <option value="">All</option>
                <option value="philosophy">philosophy</option>
                <option value="something">something</option>
              </select>
              <BookGetter category={category} />
          </div>
      </div>
    </QueryClientProvider>
  )
}


function BookGetter(category : {category : string}) {
  const fetchData = async (filter : string)=>{
    const params = new URLSearchParams();
    if(filter) params.set('category', filter);
    const response = await fetch(`api/viewbooks?${params.toString()}`)
    
    if(!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  }

  const { isPending, error, data } = useQuery({
    queryKey: ['books', category],
    queryFn: () => fetchData(category.category),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  return (
    <div>
      {data.map((item:any) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}