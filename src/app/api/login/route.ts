import { PrismaClient } from "@prisma/client";
import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

const client = new PrismaClient();
const adapter = new PrismaAdapter(client.session, client.user);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      username: attributes.username,
    };
  },
});

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Find the user by email
  const user = await client.user.findUnique({
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