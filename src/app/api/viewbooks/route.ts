import { NextResponse } from "next/server"
import prisma from "@/lib/db"

export async function GET(req : Request)
{
    try {
        const books = await prisma.book.findMany()
        console.log(books)
        return NextResponse.json(books, {status:200})
    } catch (error) {
        console.log("there has been an error", error) 
        
        return NextResponse.json(
            {message : 'failed to fetch the books'},
            {status : 500},
        )
    }

}