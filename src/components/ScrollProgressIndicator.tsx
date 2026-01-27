"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Section = {
    id: string;
    label: string;
};

type ScrollProgressIndicatorProps = {
    sections: Section[];
};

import { useLenisScroll } from "@/lib/lenis-provider";

export default function ScrollProgressIndicator({ sections }: ScrollProgressIndicatorProps) {
    const [activeSection, setActiveSection] = useState(0);
    const scrollTo = useLenisScroll();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            // Find which section is currently in view
            sections.forEach((section, index) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(index);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    const scrollToSection = (sectionId: string) => {
        scrollTo(`#${sectionId}`, { offset: 0, duration: 1.5 });
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:block"
        >
            <div className="flex flex-col items-end gap-5 py-6">
                {sections.map((section, index) => {
                    const isBigDash = index % 2 === 0;
                    const isCurrent = index === activeSection;
                    const isFilled = index <= activeSection;

                    return (
                        <div key={section.id} className="flex items-center gap-4 group cursor-pointer">
                            {/* Hover Label */}
                            <motion.span
                                className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none"
                            >
                                <span className="px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm text-xs font-semibold text-gray-700 whitespace-nowrap uppercase tracking-wider">
                                    {section.label}
                                </span>
                            </motion.span>

                            <motion.button
                                onClick={() => scrollToSection(section.id)}
                                className="relative flex items-center justify-start h-4 w-6 focus:outline-none"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={`Go to ${section.label}`}
                            >
                                <div className="relative flex items-center justify-center w-4 h-4">
                                    {/* Glow effect for current */}
                                    {isCurrent && (
                                        <motion.div
                                            className="absolute inset-0 rounded-full"
                                            style={{
                                                boxShadow: '0 0 12px 3px rgba(139, 92, 246, 0.4)',
                                            }}
                                            animate={{
                                                scale: [1, 1.4, 1],
                                                opacity: [0.6, 0.2, 0.6],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    )}

                                    {isCurrent ? (
                                        // Current position: refined dot with gradient
                                        <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-b from-violet-400 to-violet-900 shadow-lg shadow-violet-900/30 border-2 border-white transition-all duration-300 relative z-10" />
                                    ) : (
                                        // Bolder dashes with gradient for filled
                                        <div
                                            className={`${isBigDash ? 'w-4' : 'w-2.5'} h-1 rounded-full transition-all duration-300 ${isFilled ? 'bg-gradient-to-b from-violet-400 to-violet-900 shadow-sm shadow-violet-900/20' : 'bg-gray-300 group-hover:bg-gray-400'
                                                }`}
                                        />
                                    )}
                                </div>
                            </motion.button>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}
