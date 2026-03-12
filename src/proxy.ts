import { NextRequest, NextResponse } from "next/server";

/**
 * Subdomain routing middleware.
 * Rewrites connect.mergex.in → /connect so the same codebase
 * serves both the main site and the digital visiting card.
 */
export function proxy(request: NextRequest) {
    const host = request.headers.get("host") ?? "";

    // Strip port for local testing (e.g. connect.localhost:3000)
    const hostname = host.split(":")[0];

    if (hostname.startsWith("connect.")) {
        const url = request.nextUrl.clone();
        url.pathname = "/connect";
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all paths EXCEPT:
         * - _next (static files, image optimization)
         * - api routes
         * - favicon, static assets
         */
        "/((?!_next|api|favicon|logo|assets|images|.*\\..*).*)",
    ],
};
