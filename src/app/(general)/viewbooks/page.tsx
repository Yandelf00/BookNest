"use client"
// import React from 'react'

// export default function page() {
//   return (
//     <div className='w-full h-full flex justify-center items-center'>
//         <div className='h-full w-[100%] sm:h-[90%] flex justify-center items-start sm:items-center '>
//         </div>
//     </div>
//   )
// }
import {
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import  queryClient  from '@/lib/queryClient'


export default function page() {
  return (
    <QueryClientProvider client={queryClient}>
     <div className='w-full h-full flex justify-center items-center'>
         <div className='h-full w-[100%] sm:h-[90%] flex justify-center items-start sm:items-center '>
          <Example />
         </div>
     </div>
    </QueryClientProvider>
  )
}

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ['books'],
    queryFn: () =>
      fetch('/api/viewbooks').then((res) =>
      {
        if(!res.json){
          throw new Error('Failed to fetch books');
        }
        return res.json()
      }),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  return (
    <div>
      <h1>{data[0].name}</h1>
      <p>{data[0].Description}</p>
    </div>
  )
}
