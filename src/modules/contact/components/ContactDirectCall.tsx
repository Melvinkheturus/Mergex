"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/modules/shared/components/TextReveal";

export default function ContactDirectCall() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full relative overflow-hidden rounded-[2rem] p-10 sm:p-16 text-center border border-border shadow-sm flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-background to-subtle"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(167,139,250,0.06)_0%,transparent_60%)] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
                <div className="space-y-3">
                    <TextReveal>
                        <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground tracking-tight">
                            Prefer to Skip the Form?
                        </h2>
                    </TextReveal>
                    <TextReveal delay={0.1}>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Book a Call Directly.
                        </p>
                    </TextReveal>
                </div>

                <a
                    href="https://cal.com/mergex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-foreground px-8 font-medium text-background focus:outline-none focus:ring-2 focus:ring-foreground/50 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg active:scale-[0.98] mt-4"
                >
                    <span className="relative z-10">Schedule a Strategy Call</span>
                    {/* Hover subtle glow */}
                    <div className="absolute inset-0 z-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100 mix-blend-overlay"></div>
                </a>

                <TextReveal delay={0.5}>
                    <p className="text-sm text-muted-foreground mt-2">
                        Choose a time that works for you and we&apos;ll connect.
                    </p>
                </TextReveal>
            </div>
        </motion.div>
    );
}
