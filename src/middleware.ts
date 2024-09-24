import { type NextRequest, NextResponse } from "next/server";
import { authenticatedUser } from "./utils/amplify-server-utils";
// for user authorization don't touchy - veer
export async function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const user = await authenticatedUser({ request, response });

    const isOnContracts = request.nextUrl.pathname.startsWith("/contracts");
    const isOnChats = request.nextUrl.pathname.startsWith("/chats");

    // Redirect to login if accessing chats or contracts without being authenticated
    if ((isOnChats || isOnContracts) && !user) {
        return NextResponse.redirect(new URL("/api/auth/login", request.nextUrl));
    }

    // Optionally redirect authenticated users away from login page
    if (request.nextUrl.pathname.startsWith("/api/auth/login") && user) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    // Allow the request to proceed if no conditions were met for redirection
    return NextResponse.next();
}

export const config = {
    /*
     * Match all request paths except for the ones starting with
     */
    matcher: ["/chats", "/contracts"],
};
