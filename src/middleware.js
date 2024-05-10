import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //   return NextResponse.redirect(new URL('/home', request.url))

  // this line is used for the taken login cookies from the browser.
  const loginToken = request.cookies.get("loginToken")?.value;

  if(request.nextUrl.pathname==="/api/login"){
    return;
  }

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";
    if(loggedInUserNotAccessPaths){
        if(loginToken){
           return NextResponse.redirect(new URL("/profile/users",request.url));
        }
    }else{
        // accessing secure routes.
        if(!loginToken){
            return NextResponse.redirect(new URL("/login",request.url));
        }
    }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-task",
    "/profile/:path*",
    "/api/:path*",
  ],
};
