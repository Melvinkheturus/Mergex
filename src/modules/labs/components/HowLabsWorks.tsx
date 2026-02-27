'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HOW_LABS_WORKS } from '../content/labs';
import { Clipboard, Cpu, Edit, CheckCircle } from 'lucide-react';

/**
 * HowLabsWorks - Process demonstration with high-impact "Engineered" aesthetic
 */
export function HowLabsWorks() {
    const iconMap = {
        clipboard: Clipboard,
        cpu: Cpu,
        edit: Edit,
        check: CheckCircle,
    };

    return (
        <section className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.2]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                    }}
                />
                {/* Visual Accent: Blueprint Coordinate Lines */}
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
                <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
                <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />

                {/* Background Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-4 tracking-widest uppercase">
                        [ SYSTEM_PROCESS_001 ]
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display mb-6 text-white tracking-tight">
                        {HOW_LABS_WORKS.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        {HOW_LABS_WORKS.subheadline}
                    </p>
                </motion.div>

                {/* Process Steps (Staggered Layout) */}
                <div className="relative">
                    {/* SVG Connector Lines (Desktop) */}
                    <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none overflow-visible" fill="none">
                        <motion.path
                            d="M 210,120 Q 500,120 500,320"
                            stroke="rgba(168, 85, 247, 0.2)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                        <motion.path
                            d="M 500,520 Q 500,720 790,720"
                            stroke="rgba(168, 85, 247, 0.2)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 1.2 }}
                        />
                        <motion.path
                            d="M 790,920 Q 790,1120 1080,1120"
                            stroke="rgba(168, 85, 247, 0.2)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 1.9 }}
                        />
                    </svg>

                    <div className="flex flex-col gap-12 md:gap-24 lg:gap-0 lg:block lg:h-[1200px]">
                        {HOW_LABS_WORKS.steps.map((step, index) => {
                            const Icon = iconMap[step.icon as keyof typeof iconMap];

                            // Desktop Positions
                            const positions = [
                                'lg:top-0 lg:left-0',
                                'lg:top-[200px] lg:left-1/2 lg:-translate-x-1/2',
                                'lg:top-[600px] lg:right-0',
                                'lg:top-[1000px] lg:left-1/2 lg:-translate-x-1/2'
                            ];

                            return (
                                <StepCard
                                    key={index}
                                    step={step}
                                    index={index}
                                    Icon={Icon}
                                    className={`lg:absolute ${positions[index]}`}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Key Messages (Bottom Bar) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 md:mt-32 border-t border-purple-500/10 pt-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        {HOW_LABS_WORKS.keyMessages.map((message, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-purple-500/5 border border-purple-500/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 group-hover:border-purple-500/30 transition-all duration-300">
                                    <span className="text-purple-400 font-mono text-xs">0{index + 1}</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-white font-medium mb-1 tracking-wide">{message}</p>
                                    <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">Status: Verified</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function StepCard({ step, index, Icon, className }: any) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`w-full lg:w-[420px] ${className}`}
        >
            <div className={`
                relative group p-8 rounded-3xl transition-all duration-500
                bg-white/[0.03] backdrop-blur-xl border border-white/10
                hover:bg-white/[0.05] hover:border-purple-500/30
                ${isHovered ? 'shadow-[0_0_40px_-15px_rgba(168,85,247,0.3)]' : ''}
            `}>
                {/* Glassmorphism Shine */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Header Section */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex flex-col">
                        <span className="text-6xl font-black font-display text-white/5 group-hover:text-purple-500/10 transition-colors duration-500 leading-none">
                            {step.number}
                        </span>
                        <div className="flex items-center gap-2 mt-[-20px]">
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                                <Icon size={24} className="text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                                {step.title}
                            </h3>
                        </div>
                    </div>

                    {/* Technical Microcopy */}
                    <div className="text-right font-mono text-[10px] text-purple-400/50 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {step.microcopy}
                        <br />
                        <span className="text-white/20">READY_FOR_SYNC</span>
                    </div>
                </div>

                {/* Content */}
                <p className="text-gray-400 leading-relaxed font-light mb-6 transition-colors duration-300 group-hover:text-gray-300">
                    {step.description}
                </p>

                {/* Footer Tech Details (Animated on Hover) */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex gap-1">
                        {[1, 2, 3].map(i => (
                            <div key={i} className={`w-1 h-1 rounded-full ${isHovered ? 'bg-purple-500 animate-pulse' : 'bg-white/10'}`} style={{ animationDelay: `${i * 0.2}s` }} />
                        ))}
                    </div>
                    <span className="font-mono text-[10px] text-white/20 tracking-widest">
                        SECURE_PROCESS.EXE
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
