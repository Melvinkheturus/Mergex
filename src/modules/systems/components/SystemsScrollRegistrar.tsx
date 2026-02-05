"use client";

import { useEffect } from "react";
import { useScrollSections, Section } from "@/context/scroll-section-context";

export default function SystemsScrollRegistrar() {
    const { setSections } = useScrollSections();

    useEffect(() => {
        const sections: Section[] = [
            {
                id: "systems-hero",
                label: "Systems",
                description: "Build systems that actually scale.",
                gradient: "from-purple-600 to-indigo-600"
            },
            {
                id: "pain-points",
                label: "What We Solve",
                description: "Pain points we address.",
                gradient: "from-blue-600 to-indigo-500"
            },
            {
                id: "solutions",
                label: "Our Solutions",
                description: "Service pillars.",
                gradient: "from-emerald-600 to-teal-600"
            },
            {
                id: "speed",
                label: "Speed Advantage",
                description: "Why we're faster.",
                gradient: "from-amber-500 to-orange-600"
            },
            {
                id: "process",
                label: "How We Work",
                description: "Our process.",
                gradient: "from-pink-600 to-rose-600"
            },
            {
                id: "proof",
                label: "Tech Stack",
                description: "Technologies we use.",
                gradient: "from-cyan-600 to-blue-600"
            },
            {
                id: "case-studies",
                label: "Case Studies",
                description: "Real results.",
                gradient: "from-violet-600 to-purple-600"
            },
            {
                id: "faq",
                label: "FAQ",
                description: "Common questions.",
                gradient: "from-fuchsia-600 to-pink-600"
            },
            {
                id: "engagement",
                label: "Engagement Model",
                description: "How we partner.",
                gradient: "from-indigo-600 to-purple-600"
            },
            {
                id: "cta",
                label: "Get Started",
                description: "Ready to build?",
                gradient: "from-purple-600 to-pink-600"
            }
        ];

        setSections(sections);

        return () => setSections([]);
    }, [setSections]);

    return null;
}
