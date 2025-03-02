"use server"
import { z } from "zod";


const Book = z.object({
    name: z.string().min(1, "Name is required"), 
    authorName: z.string().min(1, "Author name is required"),
    genre: z.string().min(1, "Genre is required"),
    language: z.string().min(1, "Language is required"),
    Description: z.string().min(1, "Description is required"),
    numberOfPages: z.number().int().positive("Number of pages must be a positive integer"),
    pageAt: z.number().int().positive("Page at must be a non-negative integer"),
});

export async function insertBooks(prevState : any, formData : FormData){
    const rawFormData = {
        name : formData.get("name"),
        authorName : formData.get("authorName"),
        genre : formData.get("genre"),
        language : formData.get("language"),
        Description : formData.get("Description"),
        numberOfPages : Number(formData.get("numberOfPages")),
        pageAt: Number(formData.get("pageAt")),
    }
    console.log(rawFormData)

    const result = Book.safeParse(rawFormData);

    if(!result.success){
        return {
            errors : result.error.flatten().fieldErrors,
            message : "validation failed"
        }
    }

    console.log(result)

    return {message : "book inserted successfully"};

}