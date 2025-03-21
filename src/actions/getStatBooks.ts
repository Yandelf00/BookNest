"use server"
import { validateRequest } from "@/lib/auth"
import prisma from "@/lib/db";
import { Trykker } from "next/font/google";


export async function getPieData()
{
   const { user } = await validateRequest();
   if (!user) 
   {
        return {
            message : "Unauthorize : user not logged in",
        };
   }

   try {
        const data = await prisma.book.findMany({
            where : {
                userId : user.id
            },
        });
        const mapGenre = new Map();
        for(const el of data)
        {
            const genre = el.genre;
            if(mapGenre.has(genre)){
                mapGenre.set(genre, mapGenre.get(genre)+1)
            }else{
                mapGenre.set(genre, 1)
            }
        } 
        const genreCounts = Array.from(mapGenre, ([genre, count]) => ({ name: genre, value: count }));

        return genreCounts
    
   } catch (error) {
        console.log(error) 
        return {
            message : "there was an error",
        };
   }

}

export async function getRadarData()
{
    const { user } = await validateRequest();
    if (!user) 
    {
        return {
            message : "Unauthorize : user not logged in",
        };
    }

    try {
        const data = await prisma.book.findMany({
            where : {
                userId : user.id,
            },
        })        
        const mapGenre = new Map();
        for(const el of data)
        {
            const language = el.language;
            if(mapGenre.has(language)){
                mapGenre.set(language, mapGenre.get(language)+1)
            }else{
                mapGenre.set(language, 1)
            }
        } 
        const languageCounts = Array.from(mapGenre, ([language, count]) => ({ language: language, B: count }));
        
        return languageCounts
    } catch (error) {
        console.log(error) 
        return {
            message : "there was an error",
        }
    }
}