"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { LenisProvider } from "@/lib/lenis-provider";
import { ScrollSectionProvider } from "@/context/scroll-section-context";
import { Navbar } from "@/components/layout";
import Script from "next/script";

const specialRoutes = ["/studio", "/connect"];


const Footer = dynamic(() => import("@/components/Footer"), {
    ssr: true
});

interface LayoutContentProps {
    children: ReactNode;
}

/**
 * Client component that conditionally renders layout components
 * based on the current pathname. Studio routes get a clean layout
 * without navbar, footer, cursor, or scroll indicators.
 */
export default function LayoutContent({ children }: LayoutContentProps) {
    const pathname = usePathname();
    const isConnectSubdomain =
        typeof window !== "undefined" && window.location.hostname === "connect.mergex.in";
    const isSpecialRoute = specialRoutes.some(
        (route) => pathname === route || pathname?.startsWith(route + "/")
    );
    const isSystemsRoute = pathname === "/systems";

    // Add/remove data attribute on body for CSS targeting
    useEffect(() => {
        if (pathname?.startsWith("/studio")) {
            document.body.setAttribute("data-studio-route", "true");
        } else {
            document.body.removeAttribute("data-studio-route");
        }
        return () => {
            document.body.removeAttribute("data-studio-route");
        };
    }, [isSpecialRoute]);

    if (isSpecialRoute || isConnectSubdomain) {
        // Studio route: No navbar, footer, cursor, or scroll indicator
        return (
            <>
                <Script src="https://cdn.lordicon.com/lordicon.js" strategy="lazyOnload" />
                {children}
            </>
        );
    }

    // Main site routes: Include all layout components
    return (
        <LenisProvider>
            <ScrollSectionProvider>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <Script src="https://cdn.lordicon.com/lordicon.js" strategy="lazyOnload" />
                    {/* Main content takes remaining height, pushing footer to bottom naturally */}
                    <main
                        id="main-content"
                        className="flex-1 bg-background"
                        style={{ zIndex: 10 }}
                    >
                        {children}
                    </main>
                    {/* Natural document-flow footer */}
                    <Footer />
                </div>
            </ScrollSectionProvider>
        </LenisProvider>
    );
}
