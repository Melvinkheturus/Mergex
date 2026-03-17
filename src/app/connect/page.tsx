import type { Metadata } from "next";
import ConnectCard from "@/modules/connect/components/ConnectCard";

export const metadata: Metadata = {
    title: "Connect - Mergex",
    description:
        "Mergex digital visiting card. One system. Zero friction. Structured business systems that eliminate scattered workflows and accelerate growth.",
    openGraph: {
        title: "Connect - Mergex",
        description:
            "One system. Zero friction. Structured business systems that eliminate scattered workflows and accelerate growth.",
        url: "https://connect.mergex.in",
        siteName: "Mergex",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Connect - Mergex",
        description:
            "One system. Zero friction. Structured business systems built under one architecture.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ConnectPage() {
    return <ConnectCard />;
}
