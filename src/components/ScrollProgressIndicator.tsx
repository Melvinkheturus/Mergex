"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLenisScroll } from "@/lib/lenis-provider";

import { useScrollSections } from "@/context/scroll-section-context";

// Removed props as we now use context

export default function ScrollProgressIndicator() {
    const { sections } = useScrollSections();
    const [activeSection, setActiveSection] = useState(0);
    const [hoveredSection, setHoveredSection] = useState<number | null>(null);
    const scrollTo = useLenisScroll();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

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
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    const scrollToSection = (sectionId: string) => {
        scrollTo(`#${sectionId}`, { offset: 0, duration: 1.5 });
    };

    // Hide on hero section
    if (sections.length === 0 || activeSection === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:block" // Lowered z-index to be below megamenu
        >
            <div className="flex flex-col items-end gap-6 py-6">
                {sections.map((section, index) => {
                    const isBigDash = index % 2 === 0;
                    const isCurrent = index === activeSection;
                    const isHovered = index === hoveredSection;
                    const isFilled = index <= activeSection;

                    return (
                        <div
                            key={section.id}
                            className="relative flex items-center justify-end group"
                            onMouseEnter={() => setHoveredSection(index)}
                            onMouseLeave={() => setHoveredSection(null)}
                        >
                            {/* HOVER LABEL */}
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: -10 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-full mr-2 pointer-events-none"
                                    >
                                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-gray-100">
                                            <p className="text-xs font-semibold text-gray-900 whitespace-nowrap">
                                                {section.label}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* NAVIGATION DOT/BUTTON */}
                            <motion.button
                                onClick={() => scrollToSection(section.id)}
                                className="relative flex items-center justify-start h-4 w-6 focus:outline-none" // Aligned to start to match original
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
                                        // Current position: refined dot with gradient (Original Style)
                                        <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-b from-violet-400 to-violet-900 shadow-lg shadow-violet-900/30 border-2 border-white transition-all duration-300 relative z-10" />
                                    ) : (
                                        // Bolder dashes with gradient for filled (Original Style)
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
