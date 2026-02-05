"use client";

import { useEffect } from "react";
import { useScrollSections, Section } from "@/context/scroll-section-context";

export default function HomeScrollRegistrar() {
    const { setSections } = useScrollSections();

    useEffect(() => {
        const sections: Section[] = [
            {
                id: "hero",
                label: "Home",
                description: "Your solution partner.",
                gradient: "from-purple-600 to-indigo-600"
            },
            {
                id: "problem-context",
                label: "The Challenge",
                description: "Problems we solve.",
                gradient: "from-blue-600 to-indigo-500"
            },
            {
                id: "ecosystem",
                label: "Our Ecosystem",
                description: "Divisions and capabilities.",
                gradient: "from-emerald-600 to-teal-600"
            },
            {
                id: "what-we-build",
                label: "What We Build",
                description: "Solutions we deliver.",
                gradient: "from-amber-500 to-orange-600"
            },
            {
                id: "how-we-work",
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
                id: "featured-case",
                label: "Case Study",
                description: "Real results.",
                gradient: "from-violet-600 to-purple-600"
            },
            {
                id: "products",
                label: "Products",
                description: "Future vision.",
                gradient: "from-fuchsia-600 to-pink-600"
            },
            {
                id: "testimonials",
                label: "Testimonials",
                description: "What clients say.",
                gradient: "from-indigo-600 to-purple-600"
            },
            {
                id: "faq",
                label: "FAQ",
                description: "Common questions.",
                gradient: "from-purple-600 to-pink-600"
            }
        ];

        setSections(sections);

        return () => setSections([]);
    }, [setSections]);

    return null;
}
