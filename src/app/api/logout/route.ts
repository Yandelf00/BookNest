import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    console.log("Logout request received");

    // Get the session ID from the cookie
    const cookieStore = await cookies()
    const sessionId = cookieStore.get(lucia.sessionCookieName)?.value;
    console.log("Session ID:", sessionId);

    // Invalidate the session if it exists
    if (sessionId) {
      console.log("Invalidating session:", sessionId);
      await lucia.invalidateSession(sessionId);
      console.log("Session invalidated");
    }

    // Create a blank session cookie to clear the existing one
    const sessionCookie = lucia.createBlankSessionCookie();
    console.log("Blank session cookie created:", sessionCookie);

    // Redirect to the login page and set the blank session cookie
    const response = NextResponse.redirect(new URL("/login", "http://localhost:3000"), {
      headers: {
        "Set-Cookie": sessionCookie.serialize(), // Clear the session cookie
      },
    });

    console.log("Logout successful");
    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}