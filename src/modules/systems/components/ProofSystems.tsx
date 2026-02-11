'use client';

import { PROOF_SYSTEMS } from '../content/systems';

/**
 * ProofSystems - Tech Stack Marquee
 * 
 * Distinctive design with Urbanist typography and dual-row infinite marquee.
 * Features continuous scrolling tech cards with descriptors.
 */
export function ProofSystems() {
    // Split tech stack into two rows for dual marquee
    const midpoint = Math.ceil(PROOF_SYSTEMS.techStack.length / 2);
    const row1 = PROOF_SYSTEMS.techStack.slice(0, midpoint);
    const row2 = PROOF_SYSTEMS.techStack.slice(midpoint);

    return (
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-20 px-6 animate-fadeIn">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-emerald-400 font-bold text-sm uppercase tracking-[0.2em]"
                            style={{ fontFamily: "var(--font-manrope)" }}>
                            Technology Stack
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight"
                        style={{ fontFamily: "var(--font-manrope)" }}>
                        {PROOF_SYSTEMS.headline}
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                        style={{ fontFamily: "var(--font-manrope)" }}>
                        {PROOF_SYSTEMS.subheadline}
                    </p>
                </div>

                {/* Dual Marquee Rows */}
                <div className="space-y-6 mb-16">
                    {/* Row 1 - Scrolls Left */}
                    <div className="relative overflow-hidden">
                        <div className="flex gap-6 animate-marquee-left">
                            {/* Duplicate items for seamless loop */}
                            {[...row1, ...row1, ...row1].map((tech, index) => (
                                <div
                                    key={`row1-${index}`}
                                    className="flex-shrink-0 group"
                                >
                                    <div className="relative px-8 py-6 rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 backdrop-blur-sm hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500 min-w-[280px]">
                                        {/* Category Badge */}
                                        <div className="absolute -top-3 left-6">
                                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full"
                                                style={{ fontFamily: "var(--font-manrope)" }}>
                                                {tech.category}
                                            </span>
                                        </div>

                                        {/* Tech Name */}
                                        <h3 className="text-2xl font-bold text-white mb-2 mt-2 group-hover:text-emerald-400 transition-colors duration-300"
                                            style={{ fontFamily: "var(--font-manrope)" }}>
                                            {tech.name}
                                        </h3>

                                        {/* Descriptor */}
                                        <p className="text-sm text-slate-400"
                                            style={{ fontFamily: "var(--font-manrope)" }}>
                                            {tech.descriptor}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - Scrolls Right */}
                    <div className="relative overflow-hidden">
                        <div className="flex gap-6 animate-marquee-right">
                            {/* Duplicate items for seamless loop */}
                            {[...row2, ...row2, ...row2].map((tech, index) => (
                                <div
                                    key={`row2-${index}`}
                                    className="flex-shrink-0 group"
                                >
                                    <div className="relative px-8 py-6 rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 backdrop-blur-sm hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-500 min-w-[280px]">
                                        {/* Category Badge */}
                                        <div className="absolute -top-3 left-6">
                                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full"
                                                style={{ fontFamily: "var(--font-manrope)" }}>
                                                {tech.category}
                                            </span>
                                        </div>

                                        {/* Tech Name */}
                                        <h3 className="text-2xl font-bold text-white mb-2 mt-2 group-hover:text-emerald-400 transition-colors duration-300"
                                            style={{ fontFamily: "var(--font-manrope)" }}>
                                            {tech.name}
                                        </h3>

                                        {/* Descriptor */}
                                        <p className="text-sm text-slate-400"
                                            style={{ fontFamily: "var(--font-manrope)" }}>
                                            {tech.descriptor}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Statement */}
                <div className="text-center max-w-4xl mx-auto px-6 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                    <div className="inline-flex items-start gap-4 px-8 py-6 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-slate-600/50 rounded-2xl backdrop-blur-sm">
                        <svg className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-lg text-slate-200 leading-relaxed text-left"
                            style={{ fontFamily: "var(--font-manrope)" }}>
                            {PROOF_SYSTEMS.trustStatement}
                        </p>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes marquee-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                @keyframes marquee-right {
                    0% {
                        transform: translateX(-33.333%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-marquee-left {
                    animation: marquee-left 40s linear infinite;
                }

                .animate-marquee-right {
                    animation: marquee-right 40s linear infinite;
                }

                .animate-marquee-left:hover,
                .animate-marquee-right:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
