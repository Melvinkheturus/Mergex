"use client";

import { useEffect } from "react";
import { useScrollSections, Section } from "@/context/scroll-section-context";
import {
    LabsHero,
    WhatIsLabs,
    WhatWeCreate,
    ScrollZoomShowcase,
    WorkGallery,
    HowLabsWorks,
    WhyLabsExists,
    LabsCTA,
} from "@/modules/labs";

export default function LabsScrollRegistrar() {
    const { setSections } = useScrollSections();

    useEffect(() => {
        const sections: Section[] = [
            {
                id: "labs-hero",
                label: "Labs Studio",
                description: "Where creativity meets intelligence.",
                gradient: "from-purple-600 to-indigo-600",
                component: <LabsHero />
            },
            {
                id: "what-is-labs",
                label: "What Is Mergex Labs",
                description: "Redefining digital creativity.",
                gradient: "from-blue-600 to-indigo-500",
                component: <WhatIsLabs />
            },
            {
                id: "capabilities",
                label: "Capabilities",
                description: "What we can build together.",
                gradient: "from-emerald-600 to-teal-600",
                component: <WhatWeCreate />
            },
            {
                id: "featured-work",
                label: "Featured Work",
                description: "A glimpse into our experiments.",
                gradient: "from-amber-500 to-orange-600",
                component: <ScrollZoomShowcase />
            },
            {
                id: "work",
                label: "Selected Work",
                description: "Our portfolio of innovation.",
                gradient: "from-pink-600 to-rose-600",
                component: <WorkGallery />
            },
            {
                id: "process",
                label: "Our Process",
                description: "How we bring ideas to life.",
                gradient: "from-cyan-600 to-blue-600",
                component: <HowLabsWorks />
            },
            {
                id: "philosophy",
                label: "Philosophy",
                description: "Why we do what we do.",
                gradient: "from-violet-600 to-purple-600",
                component: <WhyLabsExists />
            },
            {
                id: "cta",
                label: "Start Building",
                description: "Ready to transform your brand?",
                gradient: "from-fuchsia-600 to-pink-600",
                component: <LabsCTA />
            }
        ];

        setSections(sections);

        return () => setSections([]);
    }, [setSections]);

    return null;
}
