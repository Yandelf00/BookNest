"use server";
import { z } from "zod";
import prisma from "@/lib/db";
import { validateRequest } from "@/lib/auth";

const Book = z.object({
    name: z.string().min(1, "Name is required"),
    authorName: z.string().min(1, "Author name is required"),
    genre: z.string().min(1, "Genre is required"),
    language: z.string().min(1, "Language is required"),
    Description: z.string().min(1, "Description is required"),
    numberOfPages: z.number().int().positive("Number of pages must be a positive integer"),
    pageAt: z.number().int().positive("Page at must be a non-negative integer"),
});

type BookType = z.infer<typeof Book>;

interface InsertBookResult {
    res?: BookType;
    message: string;
    errors?: Record<string, string[]>;
}

export async function insertBooks(state: InsertBookResult | null, formData: FormData): Promise<InsertBookResult> {
    const { user } = await validateRequest();
    if (!user) {
        return {
            message: "Unauthorized: User not logged in",
        };
    }


    const rawFormData = {
        name: formData.get("name"),
        authorName: formData.get("authorName"),
        genre: formData.get("genre"),
        language: formData.get("language"),
        Description: formData.get("Description"),
        numberOfPages: Number(formData.get("numberOfPages")),
        pageAt: Number(formData.get("pageAt")),
    };

    const result = Book.safeParse(rawFormData);

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
            message: "Validation failed",
        };
    }

    try {
        const res = await prisma.book.create({
            data: {
                name: result.data.name,
                authorName: result.data.authorName,
                genre: result.data.genre,
                language: result.data.language,
                Description: result.data.Description,
                numberOfPages: result.data.numberOfPages,
                pageAt: result.data.pageAt,
                userId : user.id,
            },
        });
        return { res, message: "Book inserted successfully" };
    } catch (error) {
        console.log(error);
        return {
            message: "Couldn't insert book successfully",
        };
    }
}