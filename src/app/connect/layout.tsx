import type { ReactNode } from "react";

/**
 * Dedicated layout for /connect - intentionally minimal.
 * Overrides the root layout's LayoutContent so Navbar, Footer,
 * Lenis, and ScrollSectionProvider are never mounted here,
 * on any device, at any render phase (no hydration flash).
 */
export default function ConnectLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
