'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white z-40 overflow-y-auto"
                >
                    <div className="px-6 py-6 space-y-4">
                        {/* Products */}
                        <div>
                            <button
                                onClick={() => toggleSection('products')}
                                className="w-full flex items-center justify-between py-3 text-foreground font-medium"
                            >
                                Products
                                <svg
                                    className={`w-5 h-5 transition-transform ${expandedSection === 'products' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {expandedSection === 'products' && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="pl-4 space-y-3 overflow-hidden"
                                    >
                                        <Link href="/products/unisynk" className="block py-2 text-gray-600" onClick={onClose}>
                                            Unisynk
                                        </Link>
                                        <div className="block py-2 text-gray-400">Coming Soon</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Services */}
                        <div>
                            <button
                                onClick={() => toggleSection('services')}
                                className="w-full flex items-center justify-between py-3 text-foreground font-medium"
                            >
                                Services
                                <svg
                                    className={`w-5 h-5 transition-transform ${expandedSection === 'services' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {expandedSection === 'services' && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="pl-4 space-y-3 overflow-hidden"
                                    >
                                        <Link href="/services/software" className="block py-2 text-gray-600" onClick={onClose}>
                                            Mergex Software
                                        </Link>
                                        <Link href="/services/labs" className="block py-2 text-gray-600" onClick={onClose}>
                                            Mergex Labs
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Explore */}
                        <div>
                            <button
                                onClick={() => toggleSection('explore')}
                                className="w-full flex items-center justify-between py-3 text-foreground font-medium"
                            >
                                Explore
                                <svg
                                    className={`w-5 h-5 transition-transform ${expandedSection === 'explore' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {expandedSection === 'explore' && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="pl-4 space-y-3 overflow-hidden"
                                    >
                                        <Link href="/explore/portfolio" className="block py-2 text-gray-600" onClick={onClose}>
                                            Portfolio
                                        </Link>
                                        <Link href="/explore/case-studies" className="block py-2 text-gray-600" onClick={onClose}>
                                            Case Studies
                                        </Link>
                                        <Link href="/explore/blog" className="block py-2 text-gray-600" onClick={onClose}>
                                            Blog
                                        </Link>
                                        <Link href="/academy" className="block py-2 text-gray-600" onClick={onClose}>
                                            Academy
                                        </Link>
                                        <Link href="/about" className="block py-2 text-gray-600" onClick={onClose}>
                                            About
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Resources */}
                        <div>
                            <button
                                onClick={() => toggleSection('resources')}
                                className="w-full flex items-center justify-between py-3 text-foreground font-medium"
                            >
                                Resources
                                <svg
                                    className={`w-5 h-5 transition-transform ${expandedSection === 'resources' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {expandedSection === 'resources' && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="pl-4 space-y-3 overflow-hidden"
                                    >
                                        <Link href="/resources/templates" className="block py-2 text-gray-600" onClick={onClose}>
                                            Templates
                                        </Link>
                                        <Link href="/resources" className="block py-2 text-gray-600" onClick={onClose}>
                                            Free Resources
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Direct Links */}
                        <Link
                            href="/partners"
                            className="block py-3 text-foreground font-medium"
                            onClick={onClose}
                        >
                            Partner With Us
                        </Link>
                    </div>

                    {/* Fixed CTA at Bottom */}
                    <div className="fixed bottom-0 left-0 w-full p-6 bg-white border-t border-border">
                        <Link
                            href="/contact"
                            className="block w-full py-3 bg-primary hover:bg-primary-hover text-white text-center rounded-full font-medium transition-colors"
                            onClick={onClose}
                        >
                            Book a Strategy Call
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
