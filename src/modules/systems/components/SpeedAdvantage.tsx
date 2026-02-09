'use client';

import { motion } from 'framer-motion';
import { SPEED_ADVANTAGE } from '../content/systems';
import { CheckCircle, Zap, Clock, Activity } from 'lucide-react';

/**
 * SpeedAdvantage - High Velocity Edition
 * 
 * Deep black background with neon accents.
 * "Timeline Race" comparison visualization.
 * Light streak animations.
 */
export function SpeedAdvantage() {
    return (
        <section className="py-24 md:py-32 bg-[#050505] text-white relative overflow-hidden">

            {/* 1. Background Ambience & Light Streaks */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

                {/* Glowing Orbs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/20 blur-[120px] rounded-full mix-blend-screen" />

                {/* Animated Light Streak */}
                <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: '100%', opacity: [0, 1, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "linear"
                    }}
                    className="absolute top-[40%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_2px_rgba(6,182,212,0.5)]"
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 tracking-tight"
                        >
                            <span className="block text-white mb-2">{SPEED_ADVANTAGE.headline.split(' ').slice(0, -2).join(' ')}</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-400">
                                {SPEED_ADVANTAGE.headline.split(' ').slice(-2).join(' ')}
                            </span>
                        </motion.h2>
                        <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                            {SPEED_ADVANTAGE.subheadline}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">

                        {/* THE TIMELINE RACE */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-b from-neutral-800/50 to-transparent rounded-3xl blur-xl opacity-50" />
                            <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden">

                                {/* Label */}
                                <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                                    <Clock size={16} /> Time to Market Comparison
                                </h3>

                                {/* Lane 1: Traditional */}
                                <div className="mb-12 relative">
                                    <div className="flex justify-between text-sm text-neutral-500 mb-2 font-medium">
                                        <span>Traditional Agencies</span>
                                        <span>3-6 Months</span>
                                    </div>
                                    <div className="h-6 w-full bg-neutral-800 rounded-full overflow-hidden relative">
                                        {/* Static bar representing slow progress */}
                                        <div className="absolute top-0 left-0 h-full w-[100%] bg-neutral-700/50" />
                                        <div className="absolute top-0 left-0 h-full w-[85%] bg-gradient-to-r from-neutral-600 to-neutral-500 opacity-50" />
                                    </div>
                                </div>

                                {/* Lane 2: Mergex */}
                                <div>
                                    <div className="flex justify-between text-sm text-white mb-2 font-bold">
                                        <span className="text-cyan-400 flex items-center gap-2"><Zap size={14} className="fill-cyan-400" /> Mergex Systems</span>
                                        <span className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">2-4 Weeks</span>
                                    </div>
                                    <div className="h-6 w-full bg-neutral-800 rounded-full overflow-hidden relative shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                                        {/* Fast beam */}
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: "15%" }} /* Represents 2-4 weeks vs 3-6 months (approx 15-20%) */
                                            transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                                        >
                                            <div className="absolute top-0 right-0 h-full w-[10px] bg-white blur-[4px]" />
                                        </motion.div>
                                    </div>
                                    <p className="text-xs text-cyan-500/70 mt-3 font-mono">
                                        &gt; VEOCITY_MULTIPLIER: 6X
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* TEXT CONTENT / GRID */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                                <Activity className="text-purple-500" />
                                Engineered for Velocity
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {SPEED_ADVANTAGE.howWeDoIt.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group relative bg-[#0A0A0A] border border-white/5 hover:border-purple-500/50 rounded-xl p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                                        <div className="relative flex items-start gap-4">
                                            <div className="mt-1 p-1 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-colors">
                                                <CheckCircle size={18} className="text-purple-400 group-hover:text-purple-300" />
                                            </div>
                                            <span className="text-base text-neutral-300 font-medium group-hover:text-white transition-colors">
                                                {item}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-10 p-6 bg-gradient-to-r from-neutral-900 to-transparent border-l-4 border-cyan-500 rounded-r-xl">
                                <p className="text-neutral-400 italic">
                                    "We don't just write code faster. We eliminate the friction that slows software down."
                                </p>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
