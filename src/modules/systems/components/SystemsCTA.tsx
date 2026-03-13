'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { TextReveal } from '@/modules/shared/components/TextReveal';

// ── Links ─────────────────────────────────────────────────────────────────────
const FREE_CALL_LINK = 'https://cal.com/mergex/discovery';
// TODO: Replace with your live Razorpay/Stripe link before going live
const PRIORITY_LINK = 'https://rzp.io/l/mergex-priority';

/**
 * SystemsCTA - Final conversion section with two-tier Priority Access funnel
 */
export function SystemsCTA() {
    return (
        <section className="py-20 md:py-32 bg-white text-gray-900 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-14">
                    <TextReveal>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-gray-900">
                            Ready to Build Something That Scales?
                        </h2>
                    </TextReveal>
                    <TextReveal delay={0.1}>
                        <p className="text-xl md:text-2xl text-gray-500">
                            Choose how you want to start the conversation.
                        </p>
                    </TextReveal>
                </div>

                {/* Two-card layout */}
                <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Card 1 — Free Call */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="mb-5">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Standard</p>
                            <h3 className="text-xl font-bold text-gray-900">Discovery Call</h3>
                            <p className="text-3xl font-bold text-gray-900 mt-1">Free</p>
                        </div>

                        <ul className="flex flex-col gap-2 text-sm text-gray-500 mb-7 flex-1">
                            <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">·</span>Schedule a call with our team</li>
                            <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">·</span>Ideal for most projects</li>
                            <li className="flex items-start gap-2"><span className="text-gray-900 font-bold mt-0.5">·</span>Typically within 12–24 hours</li>
                        </ul>

                        <a
                            href={FREE_CALL_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-all"
                        >
                            Schedule a Call
                            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Card 2 — Priority Access */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative flex flex-col rounded-2xl border border-violet-200 bg-gradient-to-b from-violet-50 to-white p-7 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_5%,rgba(167,139,250,0.1)_0%,transparent_65%)] pointer-events-none" />

                        <div className="mb-5 relative z-10">
                            <div className="flex items-center gap-2 mb-1">
                                <p className="text-xs font-bold text-violet-500 uppercase tracking-widest">Priority</p>
                                <span className="text-[10px] font-bold text-violet-600 bg-violet-100 px-2 py-0.5 rounded-full">Skip the queue</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Priority Architect Access</h3>
                            <p className="text-3xl font-bold text-gray-900 mt-1">₹299</p>
                        </div>

                        <ul className="flex flex-col gap-2 text-sm text-gray-500 mb-4 flex-1 relative z-10">
                            <li className="flex items-start gap-2"><span className="text-violet-500 font-bold mt-0.5">·</span>Immediate attention from our architects</li>
                            <li className="flex items-start gap-2"><span className="text-violet-500 font-bold mt-0.5">·</span>Skip the queue — no waiting</li>
                            <li className="flex items-start gap-2"><span className="text-violet-500 font-bold mt-0.5">·</span>Direct expert review of your project</li>
                        </ul>

                        <p className="text-xs text-gray-400 mb-5 relative z-10">
                            <strong className="text-gray-600">₹299 is fully credited</strong> toward your project if we work together.
                        </p>

                        <a
                            href={PRIORITY_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative z-10 inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-bold text-white hover:bg-gray-800 transition-all shadow-md"
                        >
                            <Zap size={14} className="fill-current" />
                            Unlock Priority Access
                        </a>

                        <p className="text-[11px] text-gray-400 mt-3 text-center relative z-10">
                            Limited spots each month.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
