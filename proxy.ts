// proxy.ts
// import { NextRequest, NextResponse } from "next/server"
// import { userService } from "./src/services/user.service"
// import { Roles } from "./src/constants/roles"

// export async function proxy(request: NextRequest) {
//   const pathName = request.nextUrl.pathname
//   let isAuthenticated = false
//   let isAdmin = false
  

//   const { data } = await userService.getSession()

//   if (data) {
//     isAuthenticated = true
//     isAdmin = data.user.role === Roles.admin
//   }

//   if (!isAuthenticated) {
//     return NextResponse.redirect(new URL("/login", request.url))
//   }

//   if (isAdmin && pathName.startsWith("/dashboard")) {
//     return NextResponse.redirect(new URL("/admin-dashboard", request.url))
//   }

//   if (!isAdmin && pathName.startsWith("/admin-dashboard")) {
//     return NextResponse.redirect(new URL("/dashboard", request.url))
//   }
  
//   return NextResponse.next()
// }

// export const config = {
//   matcher: ["/dashboard", "/dashboard/:path*", "/admin-dashboard", "/admin-dashboard/:path*"],
// }

import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for verify-email route
  if (pathname.startsWith("/verify-email")) {
    return NextResponse.next();
  }

  // Check for session token in cookies
  const sessionToken = request.cookies.get("better-auth.session_token");

  //* User is not authenticated at all
  if (!sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow access if session exists
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin-dashboard/:path*"],
};
