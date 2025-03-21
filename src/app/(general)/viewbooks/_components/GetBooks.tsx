"use client"
import {
  useQuery,
} from '@tanstack/react-query'
import React, { useState } from 'react'
import DisplayBooks from './DisplayBooks'
import { Book } from '@prisma/client'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";


export default function GetBooks(category : {category : string}) {
  const [start, setStart] = useState(0)

  const fetchData = async (filter : string)=>{
    const params = new URLSearchParams();
    if(filter) params.set('category', filter);
    const response = await fetch(`api/viewbooks?${params.toString()}`)
    
    if(!response.ok) {
      throw new Error('Network response was not ok')
    }
    setStart(0)
    return response.json()
  }

  const { isPending, error, data } = useQuery({
    queryKey: ['books', category],
    queryFn: () => fetchData(category.category),
  })


  function addStart(){
    if(start+12 <= data.length){
      setStart(start+12)
    }
  }
  function subStart(){
    if(start-12 >= 0){
      setStart(start-12)
    }
  }

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='w-full h-full relative'>
      {data.filter((item:Book, idx:number)=> idx>=start && idx<start+12).map((item : Book, index:number) => (
        <DisplayBooks
        key={item.id}
        name={item.name} 
        id={item.id} 
        index={index}
        pageAt={item.pageAt} 
        totalPages={item.numberOfPages} 
        author={item.authorName} />
      ))}
      <div className='absolute bottom-3 left-1/2 cursor-pointer gap-3 flex flex-row'>
        <FaLongArrowAltLeft onClick={subStart} className='size-6'/>
        <FaLongArrowAltRight onClick={addStart} className='size-6'/>
      </div>
    </div>
  )
}