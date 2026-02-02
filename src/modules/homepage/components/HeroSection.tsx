'use client';

import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../content';
import { ArrowRight, Zap, Shield, Cpu } from 'lucide-react';
import Link from 'next/link';

/**
 * HeroSection - Redesigned to match "USD Bloom" reference
 * Features: Purple/blue gradient, organic shapes, centered layout, feature cards
 */
export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col pt-32 pb-20 overflow-hidden bg-[#f8f7ff]">
            {/* Background Gradients & Shapes */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Top Center Glow */}
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-purple-200/30 rounded-full blur-[120px] mix-blend-multiply" />

                {/* Abstract Organic Shapes (CSS Blobs) */}
                <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-float" />
                <div className="absolute top-[20%] right-[15%] w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-[20%] left-[20%] w-96 h-96 bg-indigo-200/20 rounded-full blur-[100px]" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 flex-1 flex flex-col items-center justify-center text-center">

                {/* Top Badge/Icon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/50 backdrop-blur-md border border-purple-100 rounded-full shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse"></span>
                        <span className="text-xs font-medium text-purple-900 tracking-wide uppercase">AI Integration Partner</span>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tight text-gray-900 mb-6 max-w-5xl mx-auto leading-tight"
                >
                    Where Innovation <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                        Scales & Grows
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    A programmable, utility-driven ecosystem designed for native value accrual and seamless integration into your business.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-20"
                >
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white rounded-full text-lg font-medium transition-all hover:scale-105 hover:shadow-xl shadow-lg shadow-purple-900/20">
                        Start Building
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>

                {/* Feature Cards Grid (Reference Style) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto text-left"
                >
                    {/* Card 1 */}
                    <div className="bg-gradient-to-br from-[#e0e7ff] to-[#f3e8ff] p-8 rounded-3xl border border-white/50 shadow-xl shadow-purple-900/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Capital that grows</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Earn passive income through our AI-driven optimization strategies.
                            </p>
                        </div>
                        <div className="absolute right-[-20px] bottom-[-20px] opacity-20 group-hover:opacity-30 transition-opacity">
                            <Zap size={100} className="text-purple-600" />
                        </div>
                    </div>

                    {/* Card 2 (Dark Style from Ref) */}
                    <div className="bg-[#1e1b4b] p-8 rounded-3xl shadow-xl shadow-purple-900/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">Always liquid, always stable</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Fully dollar-pegged with instant access to your funds—no lockups or delays.
                            </p>
                        </div>
                        <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:opacity-20 transition-opacity">
                            <Shield size={100} className="text-white" />
                        </div>
                    </div>

                    {/* Card 3 (Dark Style from Ref) */}
                    <div className="bg-[#1e1b4b] p-8 rounded-3xl shadow-xl shadow-purple-900/10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">100% Hands-Free</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                We manage strategies manually and with AI. You just watch it grow.
                            </p>
                        </div>
                        <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:opacity-20 transition-opacity">
                            <Cpu size={100} className="text-white" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
