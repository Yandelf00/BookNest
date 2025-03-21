import { NextResponse } from "next/server"
import prisma from "@/lib/db"
import { validateRequest } from "@/lib/auth";

export async function GET(req : Request)
{
    const { user } = await validateRequest(); 

    if (!user) {
        return NextResponse.json(
            { message: "Unauthorized: User not logged in" },
            { status: 401 }
        );
    }

    const {searchParams} = new URL(req.url);
    const category = searchParams.get('category');
    try {
        const books = await prisma.book.findMany({
            where : {
                userId : user.id,
                ...(category && {genre : category}),
            },
            
        })
        return NextResponse.json(books, {status:200})
    } catch (error) {
        console.log("there has been an error", error) 
        
        return NextResponse.json(
            {message : 'failed to fetch the books'},
            {status : 500},
        )
    }

}