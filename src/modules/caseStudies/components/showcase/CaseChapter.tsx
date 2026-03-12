'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CaseStudy } from '../../types';
import { ArrowRight, Sparkles, Zap, ShieldCheck, AlertTriangle, AlertCircle } from 'lucide-react';

interface CaseChapterProps {
    study: CaseStudy;
    index: number;
}

export const CaseChapter: React.FC<CaseChapterProps> = ({ study, index }) => {
    const isAlternated = index % 2 !== 0;
    const isEven = index % 2 === 0;
    return (
        <div id={study.slug} className={`relative group/chapter border-b border-gray-200/50 ${isEven ? 'bg-white' : 'bg-[#F8F9FA]'}`}>
            {/* Pronounced Section Divider */}
            {index > 0 && (
                <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-gray-200/60" />
                    <div className="absolute flex items-center justify-center -translate-y-1/2">
                        <div className="flex items-center gap-4 bg-gray-50/80 px-6 py-2 rounded-full border border-gray-100 backdrop-blur-sm shadow-sm">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Chapter 0{index + 1}</span>
                            <div className="w-1 h-1 rounded-full bg-violet-600" />
                        </div>
                    </div>
                </div>
            )}

            <section
                className="relative min-h-[90vh] py-48 flex flex-col justify-center overflow-hidden transition-all duration-1000 bg-transparent"
            >
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    {/* Centered Large Header */}
                    <div className="flex flex-col items-center text-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <span className="text-[10px] font-semibold text-violet-600 uppercase tracking-[0.4em] px-5 py-2.5 rounded-full bg-violet-600/5 border border-violet-600/10 backdrop-blur-sm font-satoshi">
                                {study.client.industry} Transformation
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-6xl lg:text-8xl font-bold text-gray-900 mb-10 tracking-tighter leading-[0.95] font-satoshi"
                        >
                            {study.title.split(':').map((part, i) => (
                                <span key={i} className={i === 1 ? 'block mt-2' : ''}>
                                    {part}
                                </span>
                            ))}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl text-gray-400 max-w-3xl leading-relaxed font-normal font-satoshi"
                        >
                            {study.subtitle}
                        </motion.p>
                    </div>

                    {/* Content Componentry */}
                    <div className="space-y-40">
                        {/* Hero Visual & Metrics */}
                        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-start`}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`lg:col-span-12 xl:col-span-8 relative group ${isAlternated ? 'xl:order-2' : ''}`}
                            >
                                <div className="absolute -inset-2 bg-gradient-to-tr from-gray-200 via-transparent to-gray-100 rounded-[52px] opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative rounded-[48px] overflow-hidden bg-gray-900 border-[1px] border-gray-200/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] aspect-[16/9]">
                                    <img
                                        src={study.heroImage}
                                        alt={study.heroImageAlt}
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent" />

                                    {/* Subdued Client Tag */}
                                    <div className="absolute bottom-12 left-12 flex items-center gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white">
                                            <Zap size={24} className="fill-violet-500 text-violet-500" />
                                        </div>
                                        <div>
                                            <div className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1.5 font-satoshi">Business Outcome</div>
                                            <div className="text-lg font-semibold text-white tracking-tight font-satoshi">{study.outcome}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <div className={`lg:col-span-12 xl:col-span-4 space-y-10 ${isAlternated ? 'xl:order-1' : ''}`}>
                                {study.metrics && study.metrics.length > 0 ? (
                                    <div className="space-y-8">
                                        <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 font-satoshi">Strategic KPIs</h3>
                                        {study.metrics.map((metric, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: isAlternated ? 20 : -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + (i * 0.1) }}
                                                className="p-8 rounded-[32px] bg-[#219ebc]/5 border border-[#219ebc]/10 shadow-[0_10px_30px_-10px_rgba(33,158,188,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(33,158,188,0.2)] hover:border-[#219ebc]/30 transition-all group/kpi"
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
                                                        whileInView={{ width: `${metric.progressBar}%` }}
                                                        viewport={{ once: true }}
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
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="p-12 rounded-[48px] bg-gray-950 text-white shadow-2xl relative overflow-hidden group"
                                    >
                                        <div className="absolute top-0 right-0 -m-8 w-40 h-40 bg-violet-600/10 blur-[60px] group-hover:bg-violet-600/20 transition-colors duration-1000" />
                                        <Sparkles className="text-violet-500 mb-8 opacity-60" size={32} />
                                        <h3 className="text-3xl font-semibold mb-6 tracking-tight font-satoshi">The <br /><span className="text-violet-500">Solution</span></h3>
                                        <p className="text-gray-400 text-lg leading-relaxed font-normal font-satoshi">
                                            {study.outcome}
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        </div>

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
                                    className="bg-[#219ebc]/8 border border-[#219ebc]/20 rounded-[56px] p-16 lg:p-20 relative overflow-hidden transition-all duration-700 hover:border-[#219ebc]/40 hover:shadow-xl hover:bg-[#219ebc]/12"
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

                {/* Refined background texture */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
                />
            </section>
        </div>
    );
};
