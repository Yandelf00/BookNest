import prisma from "./db";
import { Lucia } from "lucia";
import { cookies } from "next/headers";
import { cache } from "react";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import type { Session, User } from "lucia";

const adapter = new PrismaAdapter(prisma.session, prisma.user);

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

export const validateRequest = cache(
  async (): Promise<{ user: User; session: Session } | { user: null; session: null }> => {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get(lucia.sessionCookieName)?.value ?? null;
    if (!sessionId) {
      return {
        user: null,
        session: null,
      };
    }

    const result = await lucia.validateSession(sessionId);
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id);
		const cookieStore = await cookies()
        cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie();
		const cookieStore = await cookies()
        cookieStore.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
      }
    } catch {}
    return result;
  }
);

// Helper function to check if the user is authenticated
export const isAuthenticated = async () => {
  const { user } = await validateRequest();
  return user !== null; // Explicitly check if user is not null
};;

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  id: string;
  username: string;
}