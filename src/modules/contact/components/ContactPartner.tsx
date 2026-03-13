"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { TextReveal } from "@/modules/shared/components/TextReveal";

export default function ContactPartner() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full relative overflow-hidden rounded-2xl p-8 sm:p-10 border border-primary/20 bg-background shadow-sm group"
        >
            {/* Subtle background element */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <BriefcaseBusiness className="w-6 h-6" />
                </div>

                <TextReveal delay={0.1}>
                    <h3 className="text-xl font-display font-medium text-foreground tracking-tight">
                        Looking to Collaborate?
                    </h3>
                </TextReveal>

                <TextReveal delay={0.2}>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        We partner with founders, agencies, and operators who want to build scalable systems, launch products, or create new ventures together.
                    </p>
                </TextReveal>

                <Link
                    href="/partner-with-us"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover group/link transition-colors mt-2"
                >
                    Explore Partnerships
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
}
