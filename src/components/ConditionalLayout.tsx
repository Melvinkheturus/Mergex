"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ConditionalLayoutProps {
    children: ReactNode;
}

/**
 * Wrapper that checks if we're on the studio route
 * If yes, renders children without layout components
 * If no, renders children (which will include layout components)
 */
export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
    const pathname = usePathname();
    const isStudioRoute = pathname.startsWith("/studio");

    // If studio route, just return children without any wrapper
    // The children will be just the NextStudio component
    if (isStudioRoute) {
        return <>{children}</>;
    }

    // For non-studio routes, return children normally
    // The children will include Navbar, Footer, etc from the layout
    return <>{children}</>;
}
