'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/* ─── Content ─── */

const PROCESS_STEPS = [
    {
        number: '01',
        title: 'Diagnose the System',
        description:
            'We begin with a deep Business DNA audit — understanding your market, revenue model, operations, and bottlenecks. Before we build anything, we define what must be fixed, optimized, or engineered.',
        purpose: 'Clarity before execution.',
    },
    {
        number: '02',
        title: 'Design the Architecture',
        description:
            'We blueprint the full growth infrastructure — positioning, automation layers, AI workflows, and scalable tech systems. Every component is aligned before development begins.',
        purpose: 'Structure before speed.',
    },
    {
        number: '03',
        title: 'Build & Deploy',
        description:
            'From MVPs to automation systems, we execute in focused sprints. Clean builds. Production-ready infrastructure. Delivered in weeks, engineered for years.',
        purpose: 'Speed with structure.',
    },
    {
        number: '04',
        title: 'Unify & Optimize',
        description:
            'We connect tools, workflows, data, and teams into a single integrated ecosystem. No fragmented vendors. No disconnected execution.',
        purpose: 'Integration over improvisation.',
    },
    {
        number: '05',
        title: 'Scale with Precision',
        description:
            'Once the foundation is stable, we optimize performance, automate growth loops, and expand capacity. Structured systems make predictable scale possible.',
        purpose: 'Growth without chaos.',
    },
] as const;

const SIDE_METRICS = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
            </svg>
        ),
        value: '2–4 Weeks',
        label: 'Average MVP Delivery',
        detail: 'Production-ready builds engineered for scale.',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        value: '48 Hour',
        label: 'Sprint Turnaround',
        detail: 'Focused execution cycles for fast iteration.',
    },
] as const;

/* ─── Component ─── */

export function HowWeWorkSystems() {
    const [expandedIndex, setExpandedIndex] = useState<number>(0);

    return (
        <section className="relative bg-white text-[#1A1A1A] py-24 lg:py-32">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">

                {/* ── HEADER ── */}
                <div className="grid md:grid-cols-12 gap-8 mb-20 lg:mb-28">
                    {/* Left label */}
                    <div className="md:col-span-3">
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
                            [04] Process
                        </p>
                    </div>
                    {/* Right headline + supporting text */}
                    <div className="md:col-span-9">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#1A1A1A]">
                            Engineered <span className="font-serif italic font-medium">Execution.</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl">
                            Every engagement follows a structured five-step framework designed to
                            reduce friction, align decisions, and deliver measurable outcomes. From
                            first call to scale-ready system, you&apos;ll always know what&apos;s next.
                        </p>
                    </div>
                </div>

                {/* ── MAIN CONTENT: Sidebar Metrics + Expandable Cards ── */}
                <div className="grid md:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Sidebar — metrics (hidden on mobile) */}
                    <div className="hidden md:flex md:col-span-3 flex-col justify-start gap-16 pr-8 border-r border-gray-200">
                        {SIDE_METRICS.map((metric, i) => (
                            <div key={i} className="space-y-3">
                                <div className="text-gray-400">{metric.icon}</div>
                                <h4 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
                                    {metric.value}
                                </h4>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {metric.detail}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right — Expandable Cards */}
                    {/* Desktop: flex row with hover expand */}
                    <div className="hidden md:flex md:col-span-9 gap-2 h-[500px] lg:h-[560px]">
                        {PROCESS_STEPS.map((step, index) => {
                            const isExpanded = expandedIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    className="relative rounded-md overflow-hidden cursor-pointer border border-gray-200 bg-[#F7F7F7]"
                                    onMouseEnter={() => setExpandedIndex(index)}
                                    onMouseLeave={() => setExpandedIndex(0)}
                                    animate={{ flex: isExpanded ? 3 : 1 }}
                                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                                >
                                    {/* Large rotated number (always visible) */}
                                    <span
                                        className={`absolute top-6 left-4 text-7xl lg:text-8xl font-bold transition-all duration-500 select-none leading-none ${isExpanded ? 'text-black/10' : 'text-black/5'
                                            }`}
                                        style={{
                                            writingMode: isExpanded ? 'horizontal-tb' : 'vertical-rl',
                                            transform: isExpanded ? 'none' : 'rotate(180deg)',
                                        }}
                                    >
                                        {step.number}
                                    </span>

                                    {/* Content revealed on expand */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 p-6 lg:p-8"
                                        initial={false}
                                        animate={{
                                            opacity: isExpanded ? 1 : 0,
                                            y: isExpanded ? 0 : 30,
                                        }}
                                        transition={{ duration: 0.4, delay: isExpanded ? 0.15 : 0 }}
                                    >
                                        <h3 className="text-xl lg:text-2xl font-bold text-[#1A1A1A] mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                            {step.description}
                                        </p>
                                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                                            {step.purpose}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Mobile — Horizontal scroll cards */}
                    <div className="md:hidden col-span-full">
                        {/* Mobile metrics row */}
                        <div className="flex gap-6 mb-8 pb-6 border-b border-gray-200">
                            {SIDE_METRICS.map((metric, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="text-gray-400">{metric.icon}</div>
                                    <h4 className="text-xl font-bold text-[#1A1A1A]">{metric.value}</h4>
                                    <p className="text-xs text-gray-500">{metric.detail}</p>
                                </div>
                            ))}
                        </div>

                        {/* Horizontal scrollable cards */}
                        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 hide-scrollbar snap-x snap-mandatory">
                            {PROCESS_STEPS.map((step, index) => (
                                <div
                                    key={index}
                                    className="snap-start shrink-0 w-[280px] h-[380px] rounded-md border border-gray-200 bg-[#F7F7F7] p-6 flex flex-col justify-between"
                                >
                                    <span className="text-6xl font-bold text-black/10 leading-none">
                                        {step.number}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-3">
                                            {step.description}
                                        </p>
                                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                                            {step.purpose}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
