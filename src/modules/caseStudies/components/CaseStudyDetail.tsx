'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '../types';
import { ArrowLeft, Sparkles, Zap, ShieldCheck, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { getRelatedCaseStudies } from '../data';

/* ─── Expandable Row (used in Layout 4) ─── */
function ExpandableRow({ metric, index }: { metric: NonNullable<CaseStudy['results']>[0]; index: number }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="border-b border-gray-100 last:border-b-0"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-8 px-2 group cursor-pointer"
            >
                <div className="flex items-center gap-8 lg:gap-16">
                    <span className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter font-satoshi group-hover:text-violet-600 transition-colors duration-300 w-[140px] lg:w-[200px] text-left">
                        {metric.prefix}{metric.value}{metric.suffix}
                    </span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest font-satoshi">
                        {metric.label}
                    </span>
                </div>
                <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 group-hover:text-violet-600 transition-colors"
                >
                    <ChevronDown size={20} />
                </motion.div>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 px-2 text-gray-500 text-base leading-relaxed font-satoshi max-w-2xl">
                            {metric.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ─── Results Section — 5 Layout Patterns ─── */
function ResultsSection({ study }: { study: CaseStudy }) {
    const results = study.results!;
    const layout = study.layoutType || 1;

    return (
        <div className="space-y-16">
            {/* Eyebrow */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
            >
                <span className="text-sm font-bold text-violet-600 uppercase tracking-[0.4em]">The Quantifiable Difference</span>
            </motion.div>

            {/* Layout 1 — Hero Metric + Supporting Stack */}
            {layout === 1 && (
                <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="text-[100px] md:text-[140px] lg:text-[180px] font-black text-gray-900 tracking-tighter leading-none mb-4 font-satoshi">
                            {results[0].prefix}{results[0].value}{results[0].suffix}
                        </div>
                        <div className="text-sm font-bold text-violet-600 uppercase tracking-widest font-satoshi">
                            {results[0].label}
                        </div>
                        <p className="mt-6 text-gray-500 text-lg max-w-md font-satoshi">{results[0].description}</p>
                    </motion.div>
                    <div className="flex-shrink-0 w-full lg:w-1/3 space-y-8">
                        {results.slice(1, 4).map((r, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="border-l-2 border-violet-100 pl-8"
                            >
                                <div className="text-3xl font-bold text-gray-900 tracking-tight font-satoshi">
                                    {r.prefix}{r.value}{r.suffix}
                                </div>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 font-satoshi">
                                    {r.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* Layout 2 — Sticky Scroll Metric Panel */}
            {layout === 2 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Sticky left panel — pinned primary metric */}
                    <div className="lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-950 rounded-[48px] p-12 lg:p-16 text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Zap size={100} className="fill-violet-500 text-violet-500" />
                            </div>
                            <span className="text-[10px] font-black text-violet-400 uppercase tracking-widest block mb-8 font-satoshi">Primary Outcome</span>
                            <div className="text-7xl lg:text-[100px] font-black tracking-tighter leading-none mb-6 font-satoshi">
                                {results[0].prefix}{results[0].value}{results[0].suffix}
                            </div>
                            <div className="text-sm font-bold text-white/60 uppercase tracking-widest mb-6 font-satoshi">
                                {results[0].label}
                            </div>
                            <p className="text-white/40 text-base leading-relaxed font-satoshi">{results[0].description}</p>
                        </motion.div>
                    </div>
                    {/* Scrollable right — supporting metrics */}
                    <div className="space-y-6">
                        {results.slice(1).map((r, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-violet-100 transition-all duration-500"
                            >
                                <div className="flex items-start justify-between gap-6">
                                    <div>
                                        <div className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 font-satoshi">{r.label}</div>
                                        <p className="text-gray-500 text-sm leading-relaxed font-satoshi">{r.description}</p>
                                    </div>
                                    <div className="text-4xl font-black text-gray-900 tracking-tighter font-satoshi flex-shrink-0">
                                        {r.prefix}{r.value}{r.suffix}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* Layout 3 — Metric Timeline Rail */}
            {layout === 3 && (
                <div className="relative pt-12 px-4">
                    {/* Connecting line */}
                    <div className="absolute top-0 left-[24px] md:left-0 md:top-4 md:w-full md:h-[2px] w-[2px] h-full bg-gradient-to-b md:bg-gradient-to-r from-violet-200 via-violet-400 to-violet-200" />
                    <div className="flex flex-col md:flex-row justify-between gap-16 relative">
                        {results.slice(0, 3).map((r, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative flex-1 pl-12 md:pl-0"
                            >
                                {/* Node */}
                                <div className="absolute -left-[1px] md:-top-[42px] md:left-0 top-0 w-5 h-5 rounded-full bg-white border-4 border-violet-600 shadow-[0_0_0_4px_rgba(139,92,246,0.1)]" />
                                <span className="text-[10px] font-black text-violet-600 uppercase tracking-widest mb-4 block font-satoshi">
                                    {i === 0 ? 'Phase 01' : i === 1 ? 'Phase 02' : 'Phase 03'}
                                </span>
                                <div className="text-5xl font-black text-gray-900 tracking-tighter mb-4 font-satoshi">
                                    {r.prefix}{r.value}{r.suffix}
                                </div>
                                <div className="text-sm font-bold text-gray-900 mb-4 font-satoshi">{r.label}</div>
                                <p className="text-sm text-gray-500 font-satoshi leading-relaxed">{r.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* Layout 4 — Expandable Impact Rows */}
            {layout === 4 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[48px] border border-gray-100 px-8 lg:px-12 py-4 shadow-sm"
                >
                    {results.slice(0, 4).map((r, i) => (
                        <ExpandableRow key={i} metric={r} index={i} />
                    ))}
                </motion.div>
            )}

            {/* Layout 5 — Executive Snapshot (Minimalist Stack) */}
            {layout === 5 && (
                <div className="max-w-4xl mx-auto space-y-20 py-8">
                    {results.slice(0, 3).map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="flex flex-col md:flex-row md:items-center gap-6 md:gap-20"
                        >
                            <div className="text-7xl md:text-[100px] font-black text-gray-900 tracking-tighter leading-none font-satoshi w-full md:w-[300px] flex-shrink-0">
                                {r.prefix}{r.value}{r.suffix}
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-black text-violet-600 uppercase tracking-[0.3em] mb-4 font-satoshi">
                                    {r.label}
                                </div>
                                <p className="text-xl text-gray-500 font-satoshi font-normal leading-relaxed">
                                    {r.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Layout 6 — Dark Horizontal Ticker (High Contrast) */}
            {layout === 6 && (
                <div className="bg-[#0a0a0f] rounded-[48px] overflow-hidden p-8 lg:p-12 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-[24px] overflow-hidden">
                        {results.slice(0, 4).map((r, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`
                                    p-10 relative group transition-all duration-300 hover:bg-violet-600/10
                                    border-white/10
                                    ${i % 2 === 0 ? 'md:border-r' : 'md:border-r-0'}
                                    ${i < 2 ? 'md:border-b' : 'md:border-b-0'}
                                    lg:border-b-0
                                    lg:[&:not(:last-child)]:border-r
                                    border-b last:border-b-0 md:last:border-b-0
                                `}
                            >
                                <span className="absolute top-6 right-8 text-[10px] font-black text-white/20 tracking-[0.2em] uppercase font-satoshi">
                                    0{i + 1}
                                </span>
                                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-6 font-satoshi">
                                    {r.label}
                                </div>
                                <div className={`text-6xl md:text-7xl font-black tracking-tighter mb-4 font-satoshi ${r.prefix === '+' ? 'text-[#6fffd4]' :
                                    r.prefix === '-' ? 'text-[#ff7eb6]' :
                                        'text-[#ffe06e]'
                                    }`}>
                                    {r.prefix}{r.value}{r.suffix}
                                </div>
                                <p className="text-sm text-white/50 font-satoshi leading-relaxed group-hover:text-white/80 transition-colors">
                                    {r.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* Layout 8 — Minimalist Dark Ticker (Tarus Motors Style) */}
            {layout === 8 && (
                <div className="bg-[#0a0a0f] rounded-[48px] overflow-hidden p-12 lg:p-20 shadow-2xl relative">
                    <div className="absolute top-0 right-0 -m-20 w-[600px] h-[600px] bg-violet-600/5 blur-[120px] rounded-full" />

                    <div className="relative z-10 mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight font-satoshi">
                            Results that speak<br />in numbers.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10 rounded-[32px] overflow-hidden relative z-10">
                        {results.slice(0, 3).map((r, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`
                                    p-12 relative group transition-all duration-500 hover:bg-violet-600/5
                                    border-white/10
                                    ${i < 2 ? 'lg:border-r' : ''}
                                    ${i === 0 ? 'md:border-r lg:border-r' : ''}
                                    ${i === 1 ? 'md:border-b-0 lg:border-b-0' : ''}
                                    border-b last:border-b-0 md:[&:nth-child(2)]:border-b-0
                                `}
                            >
                                <span className="absolute top-8 right-10 text-[11px] font-black text-white/10 tracking-[0.2em] uppercase font-satoshi transition-colors group-hover:text-violet-400/30">
                                    0{i + 1}
                                </span>
                                <div className="text-[11px] font-bold text-white/30 uppercase tracking-[0.15em] mb-10 font-satoshi group-hover:text-white/50 transition-colors">
                                    {r.label}
                                </div>
                                <div className={`text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 font-satoshi leading-none ${r.prefix === '+' ? 'text-[#6fffd4]' :
                                    r.prefix === '-' ? 'text-[#ff7eb6]' :
                                        'text-[#ffe06e]'
                                    }`}>
                                    {r.prefix}{r.value}{r.suffix}
                                </div>
                                <p className="text-base text-white/40 font-satoshi leading-relaxed group-hover:text-white/70 transition-colors max-w-[280px]">
                                    {r.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* Layout 7 — Editorial Timeline Scroll */}
            {layout === 7 && <TimelineLayout results={results} />}
        </div>
    );
}

/* ─── Timeline Layout Component (Layout 7) ─── */
function TimelineLayout({ results }: { results: NonNullable<CaseStudy['results']> }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const spineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className="relative py-20">

            {/* Timeline Wrap */}
            <div className="relative">
                {/* Central Spine (Continuous) - Wrapped in same padding as sections for perfect alignment */}
                <div className="absolute inset-0 px-6 pointer-events-none z-30">
                    <div className="relative h-full">
                        <div className="absolute top-0 bottom-0 left-[40%] w-[2px] bg-gray-100 z-0">
                            <motion.div
                                style={{ height: spineHeight }}
                                className="w-full bg-violet-600 origin-top"
                            />
                        </div>
                    </div>
                </div>

                {/* Metric Sections */}
                {results.map((r, i) => (
                    <TimelineSection key={i} metric={r} index={i} total={results.length} />
                ))}
            </div>
        </div>
    );
}

function TimelineSection({ metric, index, total }: { metric: NonNullable<CaseStudy['results']>[0]; index: number; total: number }) {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Vertical carousel with ghost previews at edges
    // Title never fully disappears — stays at 0.15 opacity so next/prev are visible
    const titleOpacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.15, 1, 1, 0.15]);
    const titleY = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [350, 0, 0, -350]);

    // Description fades fully — only the title acts as a preview
    const descOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.65, 1], [0, 1, 1, 0]);
    const descY = useTransform(scrollYProgress, [0.2, 0.5, 0.65, 1], [250, 0, 0, -250]);

    return (
        <div
            ref={sectionRef}
            className="relative h-[200vh] w-full"
            style={{ marginTop: index > 0 ? '-80vh' : undefined, zIndex: 20 + (total - index) }}
        >
            <div className="sticky top-0 h-screen w-full flex items-center">
                <div className="w-full grid grid-cols-[40%_2px_1fr] gap-0 items-center relative z-10 px-6">

                    {/* Left: Number */}
                    <div className="pr-4 md:pr-12 lg:pr-24 text-right">
                        <motion.div style={{ opacity: titleOpacity, y: titleY }} className="space-y-3">
                            <div className={`text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-none font-satoshi ${metric.prefix === '+' ? 'text-emerald-600' :
                                metric.prefix === '-' ? 'text-rose-600' : 'text-gray-950'
                                }`}>
                                {metric.prefix}{metric.value}{metric.suffix}
                            </div>
                            <div className="text-[10px] md:text-xs font-black text-gray-950 uppercase tracking-[0.1em] md:tracking-[0.3em] font-satoshi break-words">
                                {metric.label}
                            </div>
                        </motion.div>
                    </div>

                    {/* Central Column - Empty to let the spine show through without any bulge */}
                    <div className="relative h-20 flex items-center justify-center" />

                    {/* Right: Sequential Text Content */}
                    <div className="pl-4 md:pl-12 lg:pl-24">
                        <div className="max-w-md space-y-10">
                            {/* Title (appears first — rises from below) */}
                            <motion.h3
                                style={{ opacity: titleOpacity, y: titleY }}
                                className="text-xl md:text-3xl lg:text-4xl font-black text-gray-950 tracking-tight font-satoshi leading-tight break-words"
                            >
                                {metric.label} <br />
                                <span className="text-gray-950">Breakthrough</span>
                            </motion.h3>

                            {/* Description (follows — rises from below with slight delay) */}
                            <motion.div
                                style={{ opacity: descOpacity, y: descY }}
                                className="space-y-8"
                            >
                                <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-satoshi font-medium">
                                    {metric.description}
                                </p>
                                {metric.tag && (
                                    <div className="flex">
                                        <span className="inline-flex items-center px-6 py-2 rounded-full bg-gray-100 text-gray-950 text-[10px] font-black uppercase tracking-[0.2em] border border-gray-950 font-satoshi">
                                            {metric.tag}
                                        </span>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface CaseStudyDetailProps {
    study: CaseStudy;
}

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
    const relatedStudies = getRelatedCaseStudies(study.slug, 2);
    const { scrollY } = useScroll();

    // Force scroll to top on slug change (fixes inconsistent Next.js scroll restoration and Lenis conflicts)
    React.useLayoutEffect(() => {
        const resetScroll = () => {
            const lenis = (window as any).lenis;
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            } else {
                window.scrollTo(0, 0);
            }
        };

        resetScroll();
        // Safety fallback for late scroll restoration
        const timer = setTimeout(resetScroll, 50);
        return () => clearTimeout(timer);
    }, [study.slug]);

    // Fade in local nav only after scrolling past the main hero/navbar area
    const navOpacity = useTransform(scrollY, [100, 200], [0, 1]);
    const navY = useTransform(scrollY, [100, 200], [-20, 0]);

    return (
        <main className="bg-white min-h-screen selection:bg-violet-100">
            {/* Simple Top Nav - Only visible after scroll */}
            <motion.nav
                style={{
                    opacity: navOpacity,
                    y: navY,
                    pointerEvents: useTransform(scrollY, [150, 200], ['none', 'auto'])
                }}
                className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 bg-white/80 backdrop-blur-md border-b border-gray-100/50"
            >
                <div className="container mx-auto max-w-7xl flex justify-between items-center">
                    <Link
                        href="/case-studies"
                        className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-violet-600 transition-colors uppercase tracking-widest font-satoshi"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Showcase
                    </Link>
                    <div className="hidden md:block">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
                            Mergex / Case Study / {study.client.industry}
                        </span>
                    </div>
                </div>
            </motion.nav>

            <article className="pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    {/* Centered Large Header */}
                    <div className="flex flex-col items-center text-center mb-16 lg:mb-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mb-8"
                        >
                            <span className="text-[10px] md:text-xs font-bold text-violet-600 uppercase tracking-[0.15em] md:tracking-[0.4em] px-4 py-1.5 md:px-5 md:py-2.5 rounded-full bg-violet-600/5 border border-violet-600/10 backdrop-blur-sm font-satoshi inline-block">
                                {study.client.industry} Transformation
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-bold text-gray-900 mb-10 tracking-tighter leading-[1.1] font-satoshi max-w-5xl"
                        >
                            {study.title.split(':').map((part, i) => (
                                <span key={i} className={i === 1 ? 'block' : ''}>
                                    {part.trim()}
                                </span>
                            ))}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-500 max-w-3xl leading-relaxed font-normal font-satoshi"
                        >
                            {study.subtitle}
                        </motion.p>
                    </div>

                    {/* Content Componentry */}
                    <div className="space-y-40">
                        {/* Hero Visual & Metrics */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="lg:col-span-12 xl:col-span-8 relative group"
                            >
                                <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-tr from-gray-200 via-transparent to-gray-100 rounded-[52px] opacity-40" />
                                <div className="relative rounded-[48px] overflow-hidden bg-gray-900 border-[1px] border-gray-200/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] aspect-[3/2] md:aspect-[4/3] xl:aspect-[16/9]">
                                    <img
                                        src={study.heroImage}
                                        alt={study.heroImageAlt}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent xl:block hidden" />

                                    {/* Business Outcome Overlay - Desktop Only */}
                                    <div className="absolute bottom-12 left-12 hidden xl:flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white">
                                            <Zap size={24} className="fill-violet-500 text-violet-500" />
                                        </div>
                                        <div>
                                            <div className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1.5 font-satoshi">Business Outcome</div>
                                            <div className="text-lg font-semibold text-white tracking-tight font-satoshi">{study.outcome}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Business Outcome - Mobile Only (Below Image) */}
                                <div className="mt-8 xl:hidden flex items-start gap-4 p-6 rounded-3xl bg-gray-50 border border-gray-100">
                                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-violet-600/10 flex items-center justify-center text-violet-600">
                                        <Zap size={20} className="fill-current" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1 font-satoshi">Business Outcome</div>
                                        <div className="text-base font-semibold text-gray-900 leading-tight font-satoshi">{study.outcome}</div>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="lg:col-span-12 xl:col-span-4 space-y-10 mt-10 xl:mt-0">
                                {study.metrics && study.metrics.length > 0 ? (
                                    <div className="space-y-8">
                                        <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 font-satoshi">Strategic KPIs</h3>
                                        {study.metrics.map((metric, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + (i * 0.1) }}
                                                className="p-8 rounded-[32px] bg-[#219ebc]/5 border border-[#219ebc]/10 shadow-sm"
                                            >
                                                <div className="flex justify-between items-end mb-6">
                                                    <div>
                                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1 font-satoshi">Impact Factor</span>
                                                        <span className="text-sm font-semibold text-gray-600 font-satoshi">{metric.label}</span>
                                                    </div>
                                                    <div className="text-3xl font-bold text-gray-900 tracking-tighter font-satoshi">
                                                        {metric.value}<span className="text-violet-600">{metric.suffix}</span>
                                                    </div>
                                                </div>
                                                <div className="h-1.5 w-full bg-[#219ebc]/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${metric.progressBar}%` }}
                                                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                                        className="h-full bg-violet-600 rounded-full"
                                                    />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-12 rounded-[48px] bg-gray-950 text-white shadow-2xl relative overflow-hidden group h-full"
                                    >
                                        <div className="absolute top-0 right-0 -m-8 w-40 h-40 bg-violet-600/10 blur-[60px]" />
                                        <Sparkles className="text-violet-500 mb-8 opacity-60" size={32} />
                                        <h3 className="text-3xl font-semibold mb-6 tracking-tight font-satoshi">The <br /><span className="text-violet-500">Solution</span></h3>
                                        <p className="text-gray-400 text-lg leading-relaxed font-normal font-satoshi">
                                            {study.outcome}
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Growth Velocity (if present) */}
                        {study.growthVelocity && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gray-900 rounded-[56px] p-12 lg:p-20 text-white relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-12 opacity-10">
                                    <Zap size={100} className="fill-violet-500 text-violet-500" />
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-[11px] font-bold text-violet-400 uppercase tracking-[0.3em] mb-12 font-satoshi">Project Velocity</h4>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                                        <div>
                                            <h5 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter font-satoshi">
                                                {study.growthVelocity.title}
                                            </h5>
                                            <p className="text-gray-400 text-xl leading-relaxed font-satoshi">
                                                {study.growthVelocity.description}
                                            </p>
                                        </div>
                                        <div className="space-y-10">
                                            {study.growthVelocity.metrics.map((m, i) => (
                                                <div key={i} className="space-y-4">
                                                    <div className="flex justify-between items-end">
                                                        <span className="text-sm font-semibold text-gray-400 font-satoshi">{m.label}</span>
                                                        <span className="text-2xl font-bold font-satoshi">{m.value}</span>
                                                    </div>
                                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${m.progressBar}%` }}
                                                            className="h-full bg-violet-500"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Results Section — Dynamically Typed Layouts */}
                        {study.results && study.results.length > 0 && (
                            <ResultsSection study={study} />
                        )}

                        {/* Storytelling Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
                            <div className="space-y-12">
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-8 h-[2px] bg-gray-200" />
                                        <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em] font-satoshi">The Friction</h3>
                                    </div>
                                    <p className="text-3xl font-semibold text-gray-900 leading-tight tracking-tight font-satoshi">
                                        {study.problem.narrative}
                                    </p>
                                </div>

                                {study.stakes && study.stakes.length > 0 && (
                                    <div className="grid grid-cols-1 gap-4">
                                        {study.stakes.map((stake, i) => (
                                            <div key={i} className="flex gap-4 p-6 rounded-3xl bg-white border border-gray-100/60 shadow-sm">
                                                <div className="w-6 h-6 rounded-full bg-violet-600/5 flex items-center justify-center flex-shrink-0">
                                                    <ShieldCheck size={14} className="text-violet-600" />
                                                </div>
                                                <span className="text-xs font-semibold text-gray-500 leading-snug">{stake}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {study.transformationResult && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-[#219ebc]/8 border border-[#219ebc]/20 rounded-[40px] lg:rounded-[56px] p-10 lg:p-20 relative overflow-hidden transition-all duration-700 hover:border-[#219ebc]/40 hover:shadow-xl hover:bg-[#219ebc]/12"
                                >
                                    <div className="absolute top-0 right-0 p-12 opacity-5 text-gray-900">
                                        <Sparkles size={80} />
                                    </div>

                                    <h4 className="text-[11px] font-bold text-[#219ebc] uppercase tracking-[0.3em] mb-12 font-satoshi">Final Delivery</h4>
                                    <h5 className="text-4xl font-bold text-[#023047] mb-8 tracking-tighter font-satoshi">
                                        {study.transformationResult.title}
                                    </h5>
                                    <p className="text-[#023047]/60 leading-relaxed text-xl font-normal italic font-satoshi">
                                        "{study.transformationResult.description}"
                                    </p>

                                    <div className="mt-16 flex flex-wrap gap-3">
                                        {study.categories.map((cat, i) => (
                                            <span key={i} className="text-[10px] font-bold text-[#219ebc]/60 border border-[#219ebc]/20 px-5 py-2.5 rounded-full uppercase tracking-tighter font-satoshi">
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Work Section */}
            <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[10px] font-bold text-violet-600 uppercase tracking-[0.4em] block mb-4">Continue Exploring</span>
                            <h2 className="text-4xl font-bold text-gray-900 tracking-tight font-satoshi">Related Transformations</h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="hidden md:block"
                        >
                            <Link href="/case-studies" className="group flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-violet-600 pb-1 hover:text-violet-600 transition-all uppercase tracking-widest font-satoshi">
                                View All Work <ArrowLeft size={14} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {relatedStudies.map((s, i) => (
                            <RelatedCard key={s.id} study={s} index={i} />
                        ))}
                    </div>

                    {/* Mobile-only "View All Work" link below cards */}
                    <div className="md:hidden flex justify-center mt-10">
                        <Link href="/case-studies" className="group flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-violet-600 pb-1 hover:text-violet-600 transition-all uppercase tracking-widest font-satoshi">
                            View All Work <ArrowLeft size={14} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="bg-gray-950 py-32 text-center overflow-hidden relative">
                <div className="absolute top-0 right-0 -m-20 w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 -m-20 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 md:mb-12 tracking-tight font-satoshi max-w-4xl mx-auto leading-[1.1]">
                            Ready for your next <br />
                            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent italic">Strategic Breakthrough?</span>
                        </h2>
                        <Link href="/contact" className="group inline-flex items-center gap-4 bg-white text-gray-950 px-8 py-5 md:px-12 md:py-6 rounded-full font-bold text-lg md:text-xl hover:bg-violet-600 hover:text-white transition-all duration-500 font-satoshi shadow-2xl hover:shadow-violet-500/20">
                            Start Your Transformation
                            <ArrowLeft size={20} className="rotate-180 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

/**
 * Premium Related Card with 3D Tilt and Magnetic Effects
 */
function RelatedCard({ study, index }: { study: CaseStudy; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = React.useState(false);

    // Framer Motion Values for Tilt and Color
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Dynamic Color Transform (HSL Mix)
    // We map mouse position to a range of Hues (180 to 280: Cyan to Violet)
    const textColor = useTransform(
        [mouseX, mouseY],
        ([mX, mY]: any) => `hsl(${(mX + mY) * 50 + 200}, 80%, 60%)`
    );

    // Smooth Tilt Transformation
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mX = event.clientX - rect.left;
        const mY = event.clientY - rect.top;

        const rX = (mY / height - 0.5) * -10; // Degrees of tilt
        const rY = (mX / width - 0.5) * 10;

        rotateX.set(rX);
        rotateY.set(rY);
        mouseX.set(mX / width);
        mouseY.set(mY / height);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{ perspective: 1000 }}
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                className="relative h-full"
            >
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: 'preserve-3d',
                        isolation: 'isolate',
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                        clipPath: 'inset(0 round 48px)',
                        transform: 'translateZ(0)'
                    }}
                    className="h-full bg-[#EDEDED] rounded-[48px] overflow-hidden border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] transition-shadow duration-700 group will-change-transform"
                >
                    <Link
                        href={`/case-studies/${study.slug}`}
                        scroll={true}
                        className="flex flex-col h-full relative z-10 rounded-[48px] overflow-hidden isolation-auto"
                        style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                    >
                        {/* Image Container with subtle zoom */}
                        <div className="aspect-[16/10] overflow-hidden relative flex-shrink-0 rounded-t-[48px]">
                            <motion.img
                                src={study.heroImage}
                                alt={study.heroImageAlt}
                                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                                className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105"
                                animate={{ filter: isHovered ? 'grayscale(0%)' : 'grayscale(30%)' }}
                            />

                            {/* Glass overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Floating Metadata Badge */}
                            <div className="absolute top-8 left-8">
                                <span className="text-[9px] font-black text-white uppercase tracking-[0.4em] px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0 inline-block font-satoshi">
                                    {study.client.service}
                                </span>
                            </div>

                        </div>

                        {/* Content Area */}
                        <div className="p-10 lg:p-14 relative bg-[#EDEDED] flex flex-col flex-1 rounded-b-[48px]">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-6 h-[1px] bg-violet-600/30" />
                                <motion.span
                                    style={{ color: isHovered ? textColor : '#7C3AED' }}
                                    className="text-[10px] font-bold uppercase tracking-[0.4em] font-satoshi"
                                >
                                    Strategic Outcome
                                </motion.span>
                            </div>

                            <motion.h3
                                style={{ color: isHovered ? textColor : '#111827' }}
                                className="text-3xl font-bold mb-6 tracking-tight font-satoshi leading-[1.15] transition-colors duration-500"
                            >
                                {study.title}
                            </motion.h3>

                            <p className="text-gray-800 text-lg font-satoshi font-normal leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity line-clamp-2">
                                {study.subtitle}
                            </p>

                            {/* Animated Underline */}
                            <div className="mt-auto pt-10 border-t border-gray-400/20 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-gray-600 uppercase tracking-[0.2em] font-satoshi mb-1">Major Breakthrough</span>
                                    <motion.span
                                        style={{ color: isHovered ? textColor : '#111827' }}
                                        className="text-xs font-bold uppercase tracking-widest font-satoshi transition-colors duration-500"
                                    >
                                        {study.metrics?.[0]
                                            ? `${study.metrics[0].value}${study.metrics[0].suffix || ''} ${study.metrics[0].label}`
                                            : study.transformationResult?.title || "Full Transformation"
                                        }
                                    </motion.span>
                                </div>
                                <motion.div
                                    style={{ color: isHovered ? textColor : '#7C3AED' }}
                                    className="flex items-center gap-2 overflow-hidden transition-colors duration-500"
                                >
                                    <motion.span
                                        animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
                                        className="text-xs font-bold uppercase tracking-widest font-satoshi"
                                    >
                                        Read Deep-Dive
                                    </motion.span>
                                    <ArrowLeft size={16} className="rotate-180" />
                                </motion.div>
                            </div>
                        </div>
                    </Link>

                    {/* Visual Reflection / Sheen - NOW INSIDE TILT */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none rounded-[48px] bg-gradient-to-tr from-transparent via-white/5 to-transparent z-20"
                        style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            clipPath: 'inset(0 round 48px)',
                            WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                            transform: 'translateZ(0)'
                        }}
                        animate={{
                            background: isHovered ? 'linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)' : 'linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)'
                        }}
                    />
                </motion.div>

            </div>
        </motion.div>
    );
}
