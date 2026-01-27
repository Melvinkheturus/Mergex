'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard, DivisionCard } from '@/components/layout/megaMenu';

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
                                className="w-full flex items-center justify-between py-4 text-lg font-semibold text-foreground border-b border-gray-100"
                            >
                                Products
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${expandedSection === 'products' ? 'rotate-180 text-primary' : 'text-gray-400'}`}
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
                                        className="space-y-3 pt-4 overflow-hidden"
                                    >
                                        <div className="px-1 space-y-3">
                                            <ProductCard
                                                name="Unisynk"
                                                description="Event & operations platform"
                                                status="Live"
                                                href="/products/unisynk"
                                            />
                                            <ProductCard
                                                name="Kuthakai"
                                                description="Rental management SaaS"
                                                status="Beta"
                                                href="/products/kuthakai"
                                            />
                                            <ProductCard
                                                name="CHR"
                                                description="HR & compliance system"
                                                status="Coming Soon"
                                            />
                                            <ProductCard
                                                name="Retail Connect"
                                                description="Retail operations platform"
                                                status="Coming Soon"
                                            />
                                        </div>
                                        <Link
                                            href="/products"
                                            className="block py-3 text-center text-primary font-medium bg-primary/5 rounded-lg mt-4"
                                            onClick={onClose}
                                        >
                                            View All Products
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Services */}
                        <div>
                            <button
                                onClick={() => toggleSection('services')}
                                className="w-full flex items-center justify-between py-4 text-lg font-semibold text-foreground border-b border-gray-100"
                            >
                                Services
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${expandedSection === 'services' ? 'rotate-180 text-primary' : 'text-gray-400'}`}
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
                                        className="space-y-4 pt-4 overflow-hidden"
                                    >
                                        <div className="px-1 space-y-4">
                                            <DivisionCard
                                                name="Mergex Systems"
                                                tagline="Build & Automate"
                                                features={['Software', 'AI', 'Cloud']}
                                                ctaText="Enter Systems"
                                                ctaHref="/services/systems"
                                                accentColor="blue"
                                            />
                                            <DivisionCard
                                                name="Mergex Labs"
                                                tagline="Explore Innovation"
                                                features={['Content', 'R&D', 'Process']}
                                                ctaText="Enter Labs"
                                                ctaHref="/services/labs"
                                                accentColor="purple"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Explore */}
                        <div>
                            <button
                                onClick={() => toggleSection('explore')}
                                className="w-full flex items-center justify-between py-4 text-lg font-semibold text-foreground border-b border-gray-100"
                            >
                                Explore
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${expandedSection === 'explore' ? 'rotate-180 text-primary' : 'text-gray-400'}`}
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
                                        className="pl-2 pt-4 space-y-6 overflow-hidden"
                                    >
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-semibold text-gray-900">Proof</h4>
                                            <div className="space-y-2 pl-2 border-l-2 border-gray-100">
                                                <Link href="/explore/case-studies" className="block text-gray-600 py-1" onClick={onClose}>Case Studies</Link>
                                                <Link href="/explore/portfolio" className="block text-gray-600 py-1" onClick={onClose}>Selected Work</Link>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-semibold text-gray-900">Knowledge</h4>
                                            <div className="space-y-2 pl-2 border-l-2 border-gray-100">
                                                <Link href="/explore/blog" className="block text-gray-600 py-1" onClick={onClose}>Blog</Link>
                                                <Link href="/resources" className="block text-gray-600 py-1" onClick={onClose}>Resources</Link>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-semibold text-gray-900">Organization</h4>
                                            <div className="space-y-2 pl-2 border-l-2 border-gray-100">
                                                <Link href="/about" className="block text-gray-600 py-1" onClick={onClose}>About Mergex</Link>
                                                <Link href="/academy" className="block text-gray-600 py-1" onClick={onClose}>Academy</Link>
                                                <Link href="/careers" className="block text-gray-600 py-1" onClick={onClose}>Careers</Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Resources */}
                        <div>
                            <button
                                onClick={() => toggleSection('resources')}
                                className="w-full flex items-center justify-between py-4 text-lg font-semibold text-foreground border-b border-gray-100"
                            >
                                Resources
                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${expandedSection === 'resources' ? 'rotate-180 text-primary' : 'text-gray-400'}`}
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
                                        className="pl-2 pt-4 space-y-6 overflow-hidden"
                                    >
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-semibold text-gray-900">Templates</h4>
                                            <div className="space-y-2 pl-2 border-l-2 border-gray-100">
                                                <Link href="/resources/templates/website" className="block text-gray-600 py-1" onClick={onClose}>Website Templates</Link>
                                                <Link href="/resources/templates/ui" className="block text-gray-600 py-1" onClick={onClose}>UI / UX Kits</Link>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="text-sm font-semibold text-gray-900">Free Resources</h4>
                                            <div className="space-y-2 pl-2 border-l-2 border-gray-100">
                                                <Link href="/resources/guides" className="block text-gray-600 py-1" onClick={onClose}>Guides & Playbooks</Link>
                                                <Link href="/resources/checklists" className="block text-gray-600 py-1" onClick={onClose}>Checklists</Link>
                                            </div>
                                        </div>
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
