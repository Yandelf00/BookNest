import prisma from "@/lib/db";
import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";



export async function POST(request: Request) {
  const { username, email, password } = await request.json();

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user in the database
  const user = await prisma.user.create({
    data: {
      username,
      email,
      hashedPassword,
    },
  });

  // Create a session for the user
  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);

  // Set the session cookie
  const cookieStore = await cookies()
  cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  return new Response(JSON.stringify({ message: "User created successfully" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}