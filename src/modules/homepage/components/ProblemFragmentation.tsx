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
        <section className="py-24 md:py-32 bg-neutral-50">
            <div className="container mx-auto px-6 md:px-12">

                {/* 1. Header */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 items-start">
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold font-display tracking-tight text-neutral-900 leading-[1.1]"
                        >
                            {PROBLEM_FRAGMENTATION.headline}
                        </motion.h2>
                    </div>
                    <div className="lg:w-1/2 flex items-center">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xl md:text-2xl text-neutral-500 leading-relaxed font-light"
                        >
                            {PROBLEM_FRAGMENTATION.subheadline}
                        </motion.p>
                    </div>
                </div>

                {/* 2. Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">

                    {PROBLEM_FRAGMENTATION.problems.map((problem, index) => {
                        const Icon = iconMap[problem.icon as keyof typeof iconMap];
                        const isFirst = index === 0;

                        return (
                            <motion.div
                                key={problem.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`${isFirst
                                        ? 'bg-gradient-to-br from-red-50 to-orange-50'
                                        : 'bg-[#1A1A1A]'
                                    } rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[300px]`}
                            >
                                <div>
                                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${isFirst ? 'text-neutral-900' : 'text-white'
                                        }`}>
                                        {problem.title}
                                    </h3>
                                    <p className={`leading-relaxed ${isFirst ? 'text-neutral-600 text-lg' : 'text-neutral-400'
                                        }`}>
                                        {problem.description}
                                    </p>
                                </div>
                                <div className={`mt-8 self-end ${isFirst ? '' : 'p-4 bg-white/5 rounded-2xl'}`}>
                                    <Icon
                                        className={isFirst ? 'text-orange-500' : 'text-purple-400'}
                                        size={isFirst ? 48 : 32}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}

                </div>

                {/* 3. Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center max-w-3xl mx-auto"
                >
                    <p className="text-2xl md:text-3xl font-medium text-neutral-700 leading-relaxed">
                        {PROBLEM_FRAGMENTATION.closingStatement}
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
