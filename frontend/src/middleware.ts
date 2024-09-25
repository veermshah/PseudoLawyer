import { type NextRequest, NextResponse } from "next/server";
import { authenticatedUser } from "./utils/amplify-server-utils";

export async function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const user = await authenticatedUser({ request, response });

    const isOnDashboard = request.nextUrl.pathname.startsWith("/chats");
    const isOnContracts = request.nextUrl.pathname.startsWith("/contracts");

    // // Redirect unauthenticated users trying to access /contracts
    // if ((isOnContracts && user === null) || user === undefined) {
    //     return NextResponse.redirect(
    //         new URL("/api/auth/login", request.nextUrl)
    //     );
    // }

    // // Allow access to the root ("/") whether authenticated or not
    // if (request.nextUrl.pathname === "/") {
    //     return response; // Let the user access the root directory
    // }

    // Otherwise, allow access to any other public pages
    return response;
}

export const config = {
    /*
     * Match all request paths except for the ones starting with
     */
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
