'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LEGAL_CONTENT } from '../content/legal';

export const LegalContent: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>(LEGAL_CONTENT[0].id);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const activePolicy = LEGAL_CONTENT.find((p) => p.id === activeTab) || LEGAL_CONTENT[0];

    return (
        <section className="bg-white w-full py-12 lg:py-32 px-6 md:px-12 lg:px-24 min-h-screen relative overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-violet-50/30 to-transparent pointer-events-none" />
            
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Sidebar Navigation (Desktop) / Top Nav (Mobile) */}
                    <aside className="lg:w-1/4 lg:sticky lg:top-32 lg:h-fit z-30">
                        <div className="flex flex-col gap-8">
                            <div className="hidden lg:block">
                                <h2 className="font-(family-name:--font-playfair) text-2xl font-semibold text-[#1A1A1A] mb-2">Legal Center</h2>
                                <p className="text-sm text-gray-400 font-body">Compliance & Guidelines</p>
                            </div>

                            <nav className="flex lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0 gap-2 pb-4 lg:pb-0 border-b lg:border-none border-gray-100">
                                {LEGAL_CONTENT.map((policy) => (
                                    <button
                                        key={policy.id}
                                        onClick={() => setActiveTab(policy.id)}
                                        className={`relative group px-6 py-3 text-sm font-medium transition-all duration-300 rounded-xl flex items-center gap-3 whitespace-nowrap lg:whitespace-normal text-left ${
                                            activeTab === policy.id 
                                                ? 'text-white' 
                                                : 'text-gray-500 hover:text-[#1A1A1A] hover:bg-gray-50'
                                        }`}
                                    >
                                        {activeTab === policy.id && (
                                            <motion.div
                                                layoutId="activeSideTab"
                                                className="absolute inset-0 bg-[#1A1A1A] rounded-xl z-0 shadow-lg shadow-black/5"
                                                transition={{ type: 'spring', bounce: 0.15, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10">{policy.label}</span>
                                        {activeTab === policy.id && (
                                            <motion.span 
                                                initial={{ opacity: 0, x: -5 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="relative z-10 hidden lg:block ml-auto"
                                            >
                                                →
                                            </motion.span>
                                        )}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <main className="lg:w-3/4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="max-w-[800px]"
                            >
                                <header className="mb-16">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex items-center gap-4">
                                            <span className="h-px w-12 bg-violet-500/30" />
                                            <p className="text-xs font-mono text-violet-500 uppercase tracking-[0.2em] font-semibold">
                                                Version 2.0
                                            </p>
                                        </div>
                                        <h1 className="text-lg md:text-xl font-bold text-[#1A1A1A] font-(family-name:--font-playfair) leading-tight">
                                            {activePolicy.label}
                                        </h1>
                                        <div className="flex items-center gap-6 py-4 border-y border-gray-100">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Last Updated</span>
                                                <span className="text-sm text-gray-600 font-medium">{activePolicy.lastUpdated}</span>
                                            </div>
                                            <div className="w-px h-8 bg-gray-100" />
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Scope</span>
                                                <span className="text-sm text-gray-600 font-medium">Global Operations</span>
                                            </div>
                                        </div>
                                    </div>
                                </header>

                                <div className="space-y-16">
                                    {activePolicy.sections.map((section, idx) => (
                                        <motion.section 
                                            key={idx} 
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="group"
                                        >
                                            <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-4 font-(family-name:--font-playfair)">
                                                <span className="text-violet-500/20 font-mono text-sm group-hover:text-violet-500 transition-colors duration-300">
                                                    0{idx + 1}
                                                </span>
                                                {section.title}
                                            </h3>
                                            
                                            <div className="pl-8 border-l border-gray-50 group-hover:border-violet-100 transition-colors duration-500">
                                                {Array.isArray(section.content) ? (
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 p-0">
                                                        {section.content.map((item, i) => (
                                                            <li key={i} className="flex flex-col gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100">
                                                                <span className="w-6 h-6 rounded-full bg-violet-50 flex items-center justify-center text-[10px] text-violet-500 font-bold mb-1">
                                                                    ✓
                                                                </span>
                                                                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                                                    {item}
                                                                </p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : section.content ? (
                                                    <p className="text-gray-600 leading-relaxed text-lg font-body selection:bg-violet-100 selection:text-violet-900">
                                                        {section.content}
                                                    </p>
                                                ) : null}
                                            </div>
                                        </motion.section>
                                    ))}
                                </div>

                                <footer className="mt-24 pt-12 border-t border-gray-100">
                                    <div className="p-8 rounded-2xl bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="text-center md:text-left">
                                            <h4 className="font-semibold text-gray-900">Have questions?</h4>
                                            <p className="text-sm text-gray-500 mt-1">Our legal team is here to help clarify our policies.</p>
                                        </div>
                                        <a href="mailto:legal@mergex.app" className="px-8 py-3 bg-white border border-gray-200 rounded-xl font-medium text-sm hover:border-violet-500 hover:text-violet-600 transition-all duration-300 shadow-sm">
                                            Contact Legal Dept
                                        </a>
                                    </div>
                                </footer>
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </section>
    );
};

export default LegalContent;
