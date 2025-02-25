import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const privateRoutes = new Set(["/assets"]);
  const path = req.nextUrl.pathname;
  const isAuthenticated = !!req.auth; // Check if user is authenticated

  if (privateRoutes.has(path) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (path === "/login" && isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect authenticated users to home or dashboard
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/login", "/assets"],
};
