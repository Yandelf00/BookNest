"use client"
import React from 'react'
import { useActionState } from 'react'
import { insertBooks } from '@/actions/insertBook'


export default function BookInsert() {
    const [state, formAction] = useActionState(insertBooks, null)
    return (
        <div>
            <form action={formAction} className='flex flex-col gap-2 lg:gap-5'>
                <div className='flex flex-col mt-5 lg:mt-10'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name' className='border-1 border-black' />
                    {state?.errors?.name && (
                        <p className='text-red-500 text-[11px] '>{state.errors.name.join()}</p>
                    )}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="authorName">Author</label>
                    <input type="text" id='authorName' name='authorName' className='border-1 border-black' />
                    {state?.errors?.authorName && (
                        <p className='text-red-500 text-[11px]'>{state.errors.authorName.join()}</p>
                    )}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="genre">Genre</label>
                    <input type="text" id='genre' name='genre' className='border-1 border-black' />
                    {state?.errors?.genre && (
                        <p className='text-red-500 text-[11px]'>{state.errors.genre.join()}</p>
                    )}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="language">Language</label>
                    <input type="text" id='language' name='language' className='border-1 border-black' />
                    {state?.errors?.language && (
                        <p className='text-red-500 text-[11px]'>{state.errors.language.join()}</p>
                    )}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="Description">Description</label>
                    <textarea id='Description' name='Description' className='border-1 border-black resize-none h-20' />
                    {state?.errors?.Description && (
                        <p className='text-red-500 text-[11px]'>{state.errors.Description.join()}</p>
                    )}
                </div>
                <div className='flex flex-col sm:flex-row sm:justify-between'>
                    <div className='sm:w-[49%] w-full flex flex-col'>
                        <label htmlFor="numberOfPages">Number of pages</label>
                        <input type="text" id='numberOfPages' name='numberOfPages' className='border-1 border-black' />
                        {state?.errors?.numberOfPages && (
                            <p className='text-red-500 text-[11px]'>{state.errors.numberOfPages.join()}</p>
                        )}
                    </div>
                    <div className='sm:w-[49%] w-full flex flex-col'>
                        <label htmlFor="pageAt">The page you are at</label>
                        <input type="text" id='pageAt' name='pageAt' className='border-1 border-black' />
                        {state?.errors?.pageAt && (
                            <p className='text-red-500 text-[11px]'>{state.errors.pageAt.join()}</p>
                        )}
                    </div>
                </div>
                <button type='submit' className='mt-8 lg:mt-10 cursor-pointer'>Insert book</button>
            </form>
        </div>
    )
}
