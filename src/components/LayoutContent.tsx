"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { LenisProvider } from "@/lib/lenis-provider";
import { ScrollSectionProvider } from "@/context/scroll-section-context";
import { Navbar } from "@/components/layout";
import Script from "next/script";
import FooterRevealWrapper from "@/components/FooterRevealWrapper";


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
                <Navbar />
                <Script src="https://cdn.lordicon.com/lordicon.js" strategy="lazyOnload" />
                {/* Curtain: sits above fixed footer, margin-bottom equals footer height */}
                <main
                    id="main-content"
                    className="relative bg-background"
                    style={{ zIndex: 10, marginBottom: 'var(--footer-height, 0px)' }}
                >
                    {children}
                </main>
                {/* Footer is pinned behind main content (z-index: 1) */}
                <FooterRevealWrapper>
                    <Footer />
                </FooterRevealWrapper>
            </ScrollSectionProvider>
        </LenisProvider>
    );
}
