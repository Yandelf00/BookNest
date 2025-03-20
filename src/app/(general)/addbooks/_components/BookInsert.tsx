"use client"
import React from 'react'
import { useActionState } from 'react'
import { insertBooks } from '@/actions/insertBook'


export default function BookInsert() {
    const [state, formAction] = useActionState(insertBooks, null)
    return (
        <div className='w-full h-full relative'>
            <form action={formAction} className='flex flex-col gap-5 lg:gap-8'>
                <div className='flex flex-col mt-5 lg:mt-10 gap-1'>
                    <div className='w-full flex justify-between'>
                        <label htmlFor="name">Name</label>
                        {state?.errors?.name && (
                            <p className='text-red-500'>*</p>
                        )}
                    </div>
                    <input type="text" id='name' name='name' 
                    className={`border-1 focus:outline-none focus:ring-1 focus:ring-blue-500
                    border-black rounded-sm`} />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-full flex justify-between'>
                        <label htmlFor="authorName">Author</label>
                        {state?.errors?.authorName&& (
                            <p className='text-red-500'>*</p>
                        )}
                    </div>
                    <input type="text" id='authorName' name='authorName' className='rounded-sm border-1 border-black 
                    focus:ring-1 focus:ring-blue-500 focus:outline-none ' />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-full justify-between flex'>
                        <label htmlFor="genre">Genre</label>
                        {state?.errors?.genre && (
                            <p className='text-red-500'>*</p>
                        )}
                    </div>
                    <input type="text" id='genre' name='genre' className='rounded-sm border-1 border-black 
                    focus:outline-none focus:ring-1 focus:ring-blue-500' />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-full flex justify-between'>
                        <label htmlFor="language">Language</label>
                        {state?.errors?.language && (
                            <p className='text-red-500'>*</p>
                        )}
                    </div>
                    <input type="text" id='language' name='language' className='rounded-sm border-1 border-black
                    focus:outline-none focus:ring-1 focus:ring-blue-500' />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-full flex justify-between'>
                        <label htmlFor="Description">Description</label>
                        {state?.errors?.Description && (
                            <p className='text-red-500'>*</p>
                        )}
                    </div>
                    <textarea id='Description' name='Description' className='rounded-sm border-1 border-black 
                    resize-none h-20 focus:outline-none focus:ring-1 focus:ring-blue-500' />
                </div>
                <div className='flex flex-col gap-5 
                sm:flex-row sm:justify-between sm:gap-0 '>
                    <div className='sm:w-[49%] w-full flex flex-col gap-1'>
                        <label htmlFor="numberOfPages">Number of pages</label>
                        <input type="text" id='numberOfPages' name='numberOfPages' className='border-1 border-black rounded-sm
                        focus:outline-none focus:ring-1 focus:ring-blue-500' />
                        {state?.errors?.numberOfPages && (
                            <p className='text-red-500 text-[11px]'>{state.errors.numberOfPages.join()}</p>
                        )}
                    </div>
                    <div className='sm:w-[49%] w-full flex flex-col gap-1'>
                        <label htmlFor="pageAt">The page you are at</label>
                        <input type="text" id='pageAt' name='pageAt' className='border-1 border-black rounded-sm
                        focus:outline-none focus:ring-1 focus:ring-blue-500' />
                        {state?.errors?.pageAt && (
                            <p className='text-red-500 text-[11px]'>{state.errors.pageAt.join()}</p>
                        )}
                    </div>
                </div>
                <button type='submit' className='absolute inset-x-0 bottom-5 
                 bg-[#00824e] h-7 text-white rounded-sm cursor-pointer
                 hover:bg-[#61ad8f] transition ease-in-out duration-200'>Insert book</button>
            </form>
        </div>
    )
}
