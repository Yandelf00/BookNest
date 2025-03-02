"use client"
import React from 'react'
import { useActionState } from 'react'
import { insertBooks } from '@/actions/insertBook'


export default function InsertBook() {
    const [state, formAction] = useActionState(insertBooks, null)
    return (
        <div>
            <form action={formAction}>
                <label htmlFor="name">name</label>
                <input type="text" id='name' name='name' className='border-1 border-black' />
                {state?.errors?.name && (
                <p style={{ color: "red" }}>{state.errors.name.join(", ")}</p>
                )}
                <br />
                <label htmlFor="authorName ">author</label>
                <input type="text" id='authorName' name='authorName' className='border-1 border-black' />
                <br />
                <label htmlFor="genre">genre</label>
                <input type="text" id='genre' name='genre' className='border-1 border-black' />
                <br />
                <label htmlFor="language">language</label>
                <input type="text" id='language' name='language' className='border-1 border-black' />
                <br />
                <label htmlFor="Description">description</label>
                <input type="text" id='Description' name='Description' className='border-1 border-black' />
                <br />
                <label htmlFor="numberOfPages">number of pages</label>
                <input type="text" id='numberOfPages' name='numberOfPages' className='border-1 border-black' />
                <br />
                <label htmlFor="pageAt">the page you are at</label>
                <input type="text" id='pageAt' name='pageAt' className='border-1 border-black' />
                <br />
                <button type='submit'>insert book</button>
            </form>
        </div>
    )
}
