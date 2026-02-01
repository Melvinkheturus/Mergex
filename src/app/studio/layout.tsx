import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sanity Studio - Mergex",
    description: "Content management system for Mergex",
};

export default function StudioLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // This layout wraps the studio route - the root layout handles html/body tags
    // We just need to ensure the studio content is rendered cleanly
    return <>{children}</>;
}
