import prisma from "@/lib/db";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

// const client = new PrismaClient();


export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Find the user by email
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        {
        status: 400,
        headers: {
            "Content-Type": "application/json",
        },
        }
    ); // Added the missing closing parenthesis here
    }

  // Validate the password
  const isValidPassword = await bcrypt.compare(password, user.hashedPassword || "");
  if (!isValidPassword) {
    return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        {
        status: 400,
        headers: {
            "Content-Type": "application/json",
        },
        }
    ); // Added the missing closing parenthesis here
    }


  // Create a session for the user
  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  // Set the session cookie
  const cookieStore = await cookies()
  cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  return new Response(JSON.stringify({ message: "Logged in successfully" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}