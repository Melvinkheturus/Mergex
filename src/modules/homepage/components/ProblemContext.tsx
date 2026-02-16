'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PROBLEM_CONTEXT } from '../content';
import { Users, Clock, Brain, Link as LinkIcon, ArrowRight } from 'lucide-react';

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
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-purple-50/50 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* 1. Header */}
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-600 font-semibold tracking-wide uppercase text-sm mb-6 block"
                    >
                        Challenge Overview
                    </motion.span>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-neutral-900 leading-[1.1] lg:w-1/2 flex-shrink-0"
                        >
                            {PROBLEM_CONTEXT.headline}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-neutral-500 leading-relaxed font-light lg:w-1/2 lg:pt-2"
                        >
                            {PROBLEM_CONTEXT.subheadline}
                        </motion.p>
                    </div>
                </div>

                {/* 2. Asymmetrical Grid */}
                {/* Desktop: Left: 1 Large | Right: 1 Medium + 2 Small */}
                {/* Mobile: Horizontal Scroll Carousel */}
                <div className="max-w-7xl mx-auto">
                    {/* Desktop Grid (hidden on mobile) */}
                    <div className="hidden lg:grid lg:grid-cols-12 gap-6">
                        {/* LEFT COLUMN - Large Card (Problem 0) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-6 bg-gradient-to-b from-violet-400 to-violet-900 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between min-h-[550px] relative overflow-hidden group shadow-xl shadow-purple-900/20"
                        >
                            {/* Animated Gradient Blobs */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3],
                                        rotate: [0, 45, 0]
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute -top-[20%] -right-[20%] w-[400px] h-[400px] bg-purple-400/30 blur-[80px] rounded-full"
                                />
                                <motion.div
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.2, 0.4, 0.2],
                                        x: [0, -30, 0]
                                    }}
                                    transition={{
                                        duration: 15,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute -bottom-[10%] -left-[10%] w-[300px] h-[300px] bg-indigo-400/30 blur-[60px] rounded-full"
                                />
                            </div>

                            <div className="relative z-10">
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white mb-8 border border-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                                    <Users size={24} />
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                                    {PROBLEM_CONTEXT.problems[0].title}
                                </h3>
                                <p className="text-lg md:text-xl text-purple-100 leading-relaxed font-light">
                                    {PROBLEM_CONTEXT.problems[0].description}
                                </p>
                            </div>

                            {/* Decorative Bottom */}
                            <Link href="/systems#our-solutions" className="mt-8 pt-8 border-t border-white/20 flex items-center text-white font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="mr-2">Learn more</span> <ArrowRight size={16} />
                            </Link>
                        </motion.div>

                        {/* RIGHT COLUMN */}
                        <div className="lg:col-span-6 flex flex-col gap-6">
                            {/* Top: Medium Card (Problem 1) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden group shadow-lg shadow-purple-50/50 hover:shadow-purple-200 transition-shadow duration-300"
                                style={{
                                    background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #a78bfa, #4c1d95) border-box',
                                    border: '2px solid transparent',
                                }}
                            >
                                <div className="bg-neutral-50 p-4 rounded-2xl group-hover:bg-purple-50 transition-colors duration-300">
                                    <Clock size={32} className="text-violet-500 group-hover:text-purple-600 transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                                        {PROBLEM_CONTEXT.problems[1].title}
                                    </h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        {PROBLEM_CONTEXT.problems[1].description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Bottom: 2 Small Cards (Problem 2 & 3) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                                {/* Small Card 1 (Problem 2) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="rounded-[2rem] p-8 flex flex-col justify-between group h-full shadow-lg shadow-purple-50/50 hover:shadow-purple-200 transition-shadow duration-300"
                                    style={{
                                        background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #a78bfa, #4c1d95) border-box',
                                        border: '2px solid transparent',
                                    }}
                                >
                                    <div>
                                        <div className="mb-6 w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                                            <Brain size={20} className="text-violet-500 group-hover:text-purple-600 transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                            {PROBLEM_CONTEXT.problems[2].title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 leading-relaxed">
                                            {PROBLEM_CONTEXT.problems[2].description}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Small Card 2 (Problem 3) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="rounded-[2rem] p-8 flex flex-col justify-between group h-full shadow-lg shadow-purple-50/50 hover:shadow-purple-200 transition-shadow duration-300"
                                    style={{
                                        background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #a78bfa, #4c1d95) border-box',
                                        border: '2px solid transparent',
                                    }}
                                >
                                    <div>
                                        <div className="mb-6 w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                                            <LinkIcon size={20} className="text-violet-500 group-hover:text-purple-600 transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                            {PROBLEM_CONTEXT.problems[3].title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 leading-relaxed">
                                            {PROBLEM_CONTEXT.problems[3].description}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Carousel (visible on mobile) */}
                    <div className="lg:hidden overflow-x-auto overflow-y-visible pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
                        <div className="flex gap-4 min-w-max">
                            {/* Large Card - Featured */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-b from-violet-400 to-violet-900 rounded-[2rem] p-8 flex flex-col justify-between min-h-[450px] w-[90vw] relative overflow-hidden shadow-xl shadow-purple-900/20 snap-center flex-shrink-0"
                            >
                                {/* Animated Gradient Blobs */}
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.3, 0.5, 0.3],
                                            rotate: [0, 45, 0]
                                        }}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute -top-[20%] -right-[20%] w-[300px] h-[300px] bg-purple-400/30 blur-[60px] rounded-full"
                                    />
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.2, 0.4, 0.2],
                                            x: [0, -30, 0]
                                        }}
                                        transition={{
                                            duration: 15,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute -bottom-[10%] -left-[10%] w-[200px] h-[200px] bg-indigo-400/30 blur-[40px] rounded-full"
                                    />
                                </div>

                                <div className="relative z-10">
                                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white mb-6 border border-white/20 backdrop-blur-sm">
                                        <Users size={24} />
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                                        {PROBLEM_CONTEXT.problems[0].title}
                                    </h3>
                                    <p className="text-base md:text-lg text-purple-100 leading-relaxed font-light">
                                        {PROBLEM_CONTEXT.problems[0].description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-6 border-t border-white/20 flex items-center text-white font-medium opacity-80">
                                    <span className="mr-2">Learn more</span> <ArrowRight size={16} />
                                </div>
                            </motion.div>

                            {/* Medium Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="rounded-[1.5rem] p-6 flex flex-col gap-4 w-[80vw] snap-center flex-shrink-0 shadow-lg shadow-purple-50/50"
                                style={{
                                    background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #a78bfa, #4c1d95) border-box',
                                    border: '2px solid transparent',
                                }}
                            >
                                <div className="bg-neutral-50 p-3 rounded-xl w-fit">
                                    <Clock size={24} className="text-violet-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                        {PROBLEM_CONTEXT.problems[1].title}
                                    </h3>
                                    <p className="text-sm text-neutral-600 leading-relaxed">
                                        {PROBLEM_CONTEXT.problems[1].description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Small Card 1 */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="rounded-[1.5rem] p-6 flex flex-col justify-between w-[80vw] snap-center flex-shrink-0 shadow-lg shadow-purple-50/50"
                                style={{
                                    background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #a78bfa, #4c1d95) border-box',
                                    border: '2px solid transparent',
                                }}
                            >
                                <div>
                                    <div className="mb-4 w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center">
                                        <Brain size={20} className="text-violet-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                        {PROBLEM_CONTEXT.problems[2].title}
                                    </h3>
                                    <p className="text-sm text-neutral-600 leading-relaxed">
                                        {PROBLEM_CONTEXT.problems[2].description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Small Card 2 */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="rounded-[1.5rem] p-6 flex flex-col justify-between w-[80vw] snap-center flex-shrink-0 shadow-lg shadow-purple-50/50"
                                style={{
                                    background: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #a78bfa, #4c1d95) border-box',
                                    border: '2px solid transparent',
                                }}
                            >
                                <div>
                                    <div className="mb-4 w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center">
                                        <LinkIcon size={20} className="text-violet-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                        {PROBLEM_CONTEXT.problems[3].title}
                                    </h3>
                                    <p className="text-sm text-neutral-600 leading-relaxed">
                                        {PROBLEM_CONTEXT.problems[3].description}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
