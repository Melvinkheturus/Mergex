'use client';

import { motion } from 'framer-motion';
import { PROBLEM_FRAGMENTATION } from '../content';
import { Users, Clock, Brain, Link } from 'lucide-react';

/**
 * ProblemFragmentation - The Problem With Fragmentation
 * Explains vendor fragmentation, disconnected tools, slow execution, and AI hype
 * BENTO GRID DESIGN (Matches ProblemContext)
 */
export function ProblemFragmentation() {
    const iconMap = {
        users: Users,
        clock: Clock,
        brain: Brain,
        link: Link,
    };

    return (
        <section className="py-24 md:py-32 bg-white border-t border-neutral-100">
            <div className="container mx-auto px-6 md:px-12">

                {/* 1. Header */}
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-neutral-500 font-semibold tracking-wide uppercase text-sm mb-6 block"
                    >
                        The Friction
                    </motion.span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-neutral-900 leading-[1.1] lg:w-1/2 flex-shrink-0"
                        >
                            {PROBLEM_FRAGMENTATION.headline}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-neutral-500 leading-relaxed font-light lg:w-1/2 lg:pt-2"
                        >
                            {PROBLEM_FRAGMENTATION.subheadline}
                        </motion.p>
                    </div>
                </div>

                {/* 2. Bento Grid Layout */}
                {/* 
                    Left Column: 
                    - Row 1: 2 Small Cards (Problem 0, 1)
                    - Row 2: 1 Medium Card (Problem 2)
                    
                    Right Column:
                    - 1 Large Card (Problem 3)
                */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">

                    {/* LEFT COLUMN (Span 7) */}
                    <div className="lg:col-span-7 flex flex-col gap-6">

                        {/* Row 1: Two Small Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white border border-neutral-200 rounded-[2rem] p-8 flex flex-col justify-between min-h-[280px] hover:border-neutral-300 transition-colors duration-300"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-4xl font-light text-neutral-200 font-display">01</span>
                                    <Users size={24} className="text-neutral-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                                        {PROBLEM_FRAGMENTATION.problems[0].title}
                                    </h3>
                                    <p className="text-sm text-neutral-600 leading-relaxed">
                                        {PROBLEM_FRAGMENTATION.problems[0].description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white border border-neutral-200 rounded-[2rem] p-8 flex flex-col justify-between min-h-[280px] hover:border-neutral-300 transition-colors duration-300"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-4xl font-light text-neutral-200 font-display">02</span>
                                    <Link size={24} className="text-neutral-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                                        {PROBLEM_FRAGMENTATION.problems[1].title}
                                    </h3>
                                    <p className="text-sm text-neutral-600 leading-relaxed">
                                        {PROBLEM_FRAGMENTATION.problems[1].description}
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Row 2: Medium Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-neutral-50 border border-neutral-100 rounded-[2rem] p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left hover:bg-neutral-100 transition-colors duration-300"
                        >
                            <div className="flex-shrink-0">
                                <span className="block text-5xl font-light text-neutral-300 font-display mb-2">03</span>
                                <Clock size={32} className="text-neutral-400 mx-auto lg:mx-0" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                                    {PROBLEM_FRAGMENTATION.problems[2].title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    {PROBLEM_FRAGMENTATION.problems[2].description}
                                </p>
                            </div>
                        </motion.div>

                    </div>

                    {/* RIGHT COLUMN (Span 5) - Large Vertical Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-5 bg-neutral-900 text-white rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-between relative overflow-hidden group"
                    >
                        {/* Animated Gradient Blobs */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                    rotate: [0, -45, 0]
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-[10%] -right-[10%] w-[350px] h-[350px] bg-purple-500/20 blur-[80px] rounded-full"
                            />
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.1, 0.3, 0.1],
                                    y: [0, 40, 0]
                                }}
                                transition={{
                                    duration: 18,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-indigo-500/10 blur-[90px] rounded-full"
                            />
                        </div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-5xl font-light text-neutral-700 font-display">04</span>
                                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                                    <Brain size={24} className="text-white" />
                                </div>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                {PROBLEM_FRAGMENTATION.problems[3].title}
                            </h3>
                            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                                {PROBLEM_FRAGMENTATION.problems[3].description}
                            </p>
                        </div>
                    </motion.div>

                </div>

                {/* 3. Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center max-w-3xl mx-auto"
                >
                    <p className="text-2xl md:text-3xl font-medium text-neutral-900 leading-relaxed">
                        {PROBLEM_FRAGMENTATION.closingStatement}
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
