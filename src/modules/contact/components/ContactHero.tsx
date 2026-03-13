"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/modules/shared/components/TextReveal";

export default function ContactHero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
        }
    };

    return (
        <motion.div
            className="max-w-3xl flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <TextReveal delay={0.1} duration={1.6}>
                <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-foreground tracking-tight"
                >
                    Let&apos;s Build Something <br className="hidden md:block" />
                    <span className="text-muted">That Scales.</span>
                </h1>
            </TextReveal>

            <TextReveal delay={0.3} duration={1.2}>
                <p
                    className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
                >
                    Tell us about your project, challenge, or idea. If there&apos;s a system to build, we&apos;ll help architect it.
                </p>
            </TextReveal>

            <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mt-2"
            >
                <div className="flex items-center gap-2 text-sm text-muted">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                    </span>
                    We typically respond within 24 hours.
                </div>
            </motion.div>
        </motion.div>
    );
}
