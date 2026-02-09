'use client';

import { motion } from 'framer-motion';
import { PROBLEM_CONTEXT } from '../content';
import { Users, Clock, Brain, Link, ArrowRight } from 'lucide-react';

/**
 * ProblemContext - Why We Exist
 * BENTO GRID DESIGN (Reference: USD Bloom)
 */
export function ProblemContext() {
    const iconMap = {
        users: Users,
        clock: Clock,
        brain: Brain,
        link: Link,
    };

    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 md:px-12">

                {/* 1. Header (Reference: Left Title + Button, Right Description) */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 items-start">
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold font-display tracking-tight text-neutral-900 leading-[1.1] mb-6"
                        >
                            {PROBLEM_CONTEXT.headline}
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <button className="bg-neutral-900 text-white rounded-full px-8 py-3 font-medium text-sm hover:bg-neutral-800 transition-colors inline-flex items-center gap-2 group">
                                Our Philosophy <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                    <div className="lg:w-1/2 flex items-center">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xl md:text-2xl text-neutral-500 leading-relaxed font-light"
                        >
                            {PROBLEM_CONTEXT.subheadline}
                        </motion.p>
                    </div>
                </div>

                {/* 2. Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">

                    {/* Item 1: HERO CARD (Light Theme - "Bloated Agency Models") */}
                    {/* Spans 4 columns on desktop (Wide) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 bg-[#EBE9FE] rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden flex flex-col justify-between min-h-[400px]"
                    >
                        <div className="relative z-10 max-w-lg">
                            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 tracking-tight">
                                {PROBLEM_CONTEXT.problems[0].title}
                            </h3>
                            <p className="text-xl text-neutral-600 leading-relaxed">
                                {PROBLEM_CONTEXT.problems[0].description}
                            </p>
                        </div>
                        {/* Abstract Visual Decor */}
                        <div className="absolute right-[-10%] bottom-[-20%] w-[300px] h-[300px] bg-purple-400/20 blur-[80px] rounded-full" />
                        <div className="absolute right-0 bottom-0 p-10 opacity-10">
                            <Users size={200} />
                        </div>
                    </motion.div>

                    {/* Item 2: DARK CARD ("Technical Stagnation") */}
                    {/* Spans 2 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2 bg-[#1A1A1A] rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[400px]"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {PROBLEM_CONTEXT.problems[1].title}
                            </h3>
                            <p className="text-neutral-400 leading-relaxed">
                                {PROBLEM_CONTEXT.problems[1].description}
                            </p>
                        </div>
                        <div className="mt-8 self-start p-4 bg-white/5 rounded-2xl">
                            <Clock className="text-purple-400" size={32} />
                        </div>
                    </motion.div>

                    {/* Item 3: DARK CARD ("AI Without Strategy") */}
                    {/* Spans 3 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-3 bg-[#111111] rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[300px]"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {PROBLEM_CONTEXT.problems[2].title}
                            </h3>
                            <p className="text-neutral-400 leading-relaxed max-w-sm">
                                {PROBLEM_CONTEXT.problems[2].description}
                            </p>
                        </div>
                        <div className="mt-8 self-end">
                            <Brain className="text-cyan-400" size={40} />
                        </div>
                    </motion.div>

                    {/* Item 4: DARK CARD ("Disconnected Systems") */}
                    {/* Spans 3 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-3 bg-[#1A1A1A] rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[300px]"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {PROBLEM_CONTEXT.problems[3].title}
                            </h3>
                            <p className="text-neutral-400 leading-relaxed max-w-sm">
                                {PROBLEM_CONTEXT.problems[3].description}
                            </p>
                        </div>
                        <div className="mt-8 self-end">
                            <Link className="text-emerald-400" size={40} />
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
