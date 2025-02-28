import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";

export async function middleware(request: Request) {
  const isAuth = await isAuthenticated();

  // If the user is not authenticated and tries to access protected routes, redirect to login
  if (!isAuth && !request.url.includes("/login") && !request.url.includes("/signup")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If the user is authenticated and tries to access login/signup, redirect to home
  if (isAuth && (request.url.includes("/login") || request.url.includes("/signup"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Specify the routes to protect
export const config = {
  matcher: ["/", "/login", "/signup"],
};