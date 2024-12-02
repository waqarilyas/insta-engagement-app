import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

export async function middleware(req: NextRequest) {
  // const { JWT_SECRET_KEY } = process.env;
  // // Skip middleware for the Instagram callback route
  // if (req.nextUrl.pathname.startsWith("/auth/callback")) {
  //   return NextResponse.next();
  // }
  // // For login page, check if user is already authenticated
  // if (req.nextUrl.pathname === "/login") {
  //   const token = req.cookies.get("auth_token");
  //   if (token) {
  //     try {
  //       const secret = new TextEncoder().encode(JWT_SECRET_KEY);
  //       await jose.jwtVerify(token.value, secret);
  //       // If token is valid, redirect to dashboard
  //       return NextResponse.redirect(new URL("/dashboard", req.url));
  //     } catch (error) {
  //       console.log("🚀 ~ middleware ~ error:", error);
  //       // If token is invalid, continue to login page
  //       return NextResponse.next();
  //     }
  //   }
  //   return NextResponse.next();
  // }
  // // For protected routes
  // const token = req.cookies.get("auth_token");
  // if (!token) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
  // try {
  //   const secret = new TextEncoder().encode(JWT_SECRET_KEY);
  //   await jose.jwtVerify(token.value, secret);
  //   return NextResponse.next();
  // } catch (error) {
  //   console.error("Invalid Token:", error);
  //   // Clear invalid token
  //   const response = NextResponse.redirect(new URL("/login", req.url));
  //   response.cookies.delete("auth_token");
  //   return response;
  // }
}

export const config = {
  matcher: ["/login", "/dashboard", "/dashboard/:path*", "/auth/callback"],
};
