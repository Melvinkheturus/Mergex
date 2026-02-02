"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { LenisProvider } from "@/lib/lenis-provider";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import { ScrollSectionProvider } from "@/context/scroll-section-context";
import { Navbar } from "@/components/layout";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Script from "next/script";

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
    const isStudioRoute = pathname?.startsWith("/studio") ?? false;
    const isSystemsRoute = pathname === "/systems";

    // Add/remove data attribute on body for CSS targeting
    useEffect(() => {
        if (isStudioRoute) {
            document.body.setAttribute("data-studio-route", "true");
        } else {
            document.body.removeAttribute("data-studio-route");
        }
        return () => {
            document.body.removeAttribute("data-studio-route");
        };
    }, [isStudioRoute]);

    if (isStudioRoute) {
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
                {!isSystemsRoute && <Navbar />}
                <ScrollProgressIndicator />
                <Script src="https://cdn.lordicon.com/lordicon.js" strategy="lazyOnload" />
                {children}
                <Footer />
                <Cursor />
            </ScrollSectionProvider>
        </LenisProvider>
    );
}
