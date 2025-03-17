"use client"
import {
  useQuery,
} from '@tanstack/react-query'
import React, { useState } from 'react'
import BookDisplay from './bookDisplay'
import { Book } from '@prisma/client'

export default function BookGetter(category : {category : string}) {
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
      {data.map((item : Book, index:number) => (
        <BookDisplay 
        key={item.id}
        name={item.name} 
        id={item.id} 
        index={index}
        pageAt={item.pageAt} 
        totalPages={item.numberOfPages} 
        author={item.authorName} />
      ))}
    </div>
  )
}