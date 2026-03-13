"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/modules/shared/components/TextReveal";
import { ArrowRight, Zap } from "lucide-react";

// ── Priority Access Payment Link ───────────────────────────────────────────────
// TODO: Replace with your live Razorpay/Stripe link before going live
const PRIORITY_LINK = "https://rzp.io/l/mergex-priority";
const FREE_CALL_LINK = "https://cal.com/mergex/discovery";

export default function ContactDirectCall() {
    return (
        <section className="w-full">
            {/* Section header */}
            <div className="mb-8">
                <TextReveal>
                    <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground tracking-tight">
                        Ready to Connect?
                    </h2>
                </TextReveal>
                <TextReveal delay={0.1}>
                    <p className="text-muted-foreground mt-2">
                        Choose how you'd like to engage with our team.
                    </p>
                </TextReveal>
            </div>

            {/* Two-card layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Card 1 — Free Discovery Call */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="mb-4">
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Standard</p>
                        <h3 className="text-xl font-semibold text-foreground">Discovery Call</h3>
                        <p className="text-2xl font-bold text-foreground mt-1">Free</p>
                    </div>

                    <ul className="flex flex-col gap-2 text-sm text-muted-foreground mb-6 flex-1">
                        <li className="flex items-start gap-2"><span className="text-foreground mt-0.5">•</span>Schedule a call with our team</li>
                        <li className="flex items-start gap-2"><span className="text-foreground mt-0.5">•</span>Ideal for most projects</li>
                        <li className="flex items-start gap-2"><span className="text-foreground mt-0.5">•</span>We typically respond within 12 hours</li>
                    </ul>

                    <a
                        href={FREE_CALL_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-subtle transition-all"
                    >
                        Schedule a Call
                        <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </motion.div>

                {/* Card 2 — Priority Architect Access */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative flex flex-col rounded-2xl border border-violet-200 bg-gradient-to-b from-violet-50/60 to-background p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                    {/* Subtle glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(167,139,250,0.08)_0%,transparent_60%)] pointer-events-none" />

                    <div className="mb-4 relative z-10">
                        <div className="flex items-center gap-2 mb-1">
                            <p className="text-xs font-bold text-violet-500 uppercase tracking-widest">Priority</p>
                            <span className="text-[10px] font-semibold text-violet-600 bg-violet-100 px-2 py-0.5 rounded-full">Skip the queue</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Priority Architect Access</h3>
                        <p className="text-2xl font-bold text-foreground mt-1">₹299</p>
                    </div>

                    <ul className="flex flex-col gap-2 text-sm text-muted-foreground mb-3 flex-1 relative z-10">
                        <li className="flex items-start gap-2"><span className="text-violet-500 mt-0.5">•</span>Immediate attention from our team</li>
                        <li className="flex items-start gap-2"><span className="text-violet-500 mt-0.5">•</span>Direct access to a Mergex architect</li>
                        <li className="flex items-start gap-2"><span className="text-violet-500 mt-0.5">•</span>Skip the queue</li>
                    </ul>

                    <p className="text-xs text-muted-foreground mb-5 relative z-10">
                        <strong className="text-foreground">₹299 is fully credited toward your project</strong> if we work together.
                    </p>

                    <a
                        href={PRIORITY_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative z-10 inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background hover:opacity-90 transition-all shadow-md"
                    >
                        <Zap size={14} className="fill-current" />
                        Unlock Priority Access
                    </a>

                    <p className="text-[11px] text-muted-foreground mt-3 text-center relative z-10">
                        We only accept a limited number of projects each month.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
