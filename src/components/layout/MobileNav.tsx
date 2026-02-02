'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, FlaskConical, Compass, DollarSign } from 'lucide-react';

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
}

type MobileMenuKey = 'services' | 'labs' | 'explore' | 'pricing';

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
    const [activeMenu, setActiveMenu] = useState<MobileMenuKey>('services');

    // Prevent scrolling when menu is open
    useEffect(() => {
        const lenis = (window as any).lenis;

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            if (lenis) lenis.stop();
        } else {
            document.body.style.overflow = '';
            if (lenis) lenis.start();
        }

        return () => {
            document.body.style.overflow = '';
            if (lenis) lenis.start();
        };
    }, [isOpen]);

    const menuItems = [
        { key: 'services' as MobileMenuKey, label: 'Services', icon: Briefcase },
        { key: 'labs' as MobileMenuKey, label: 'Labs', icon: FlaskConical },
        { key: 'explore' as MobileMenuKey, label: 'Explore', icon: Compass },
        { key: 'pricing' as MobileMenuKey, label: 'Pricing', icon: DollarSign },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Light Blur Overlay - Starts below navbar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-20 bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-40"
                        onClick={onClose}
                    />

                    {/* Menu Content Container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="fixed top-20 bottom-0 left-0 right-0 z-40 flex flex-col pointer-events-none"
                    >

                        {/* Center Content Area - Mega Menu Content */}
                        <div className="flex-1 overflow-y-auto pointer-events-auto px-6 pb-48 pt-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeMenu}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    {/* Tagline */}
                                    <div className="text-center">
                                        <p className="text-2xl font-serif font-medium text-gray-900 leading-tight">
                                            {activeMenu === 'services' && 'Building production-ready systems.'}
                                            {activeMenu === 'labs' && 'AI-native content & experimentation.'}
                                            {activeMenu === 'explore' && 'See how we think & build.'}
                                            {activeMenu === 'pricing' && 'Transparent pricing for projects.'}
                                        </p>
                                    </div>

                                    {/* Menu Items */}
                                    <div className="space-y-2">
                                        {activeMenu === 'services' && (
                                            <>
                                                <MobileMenuItem href="/services/design" label="UI/UX Design" onClose={onClose} />
                                                <MobileMenuItem href="/services/branding" label="Branding" onClose={onClose} />
                                                <MobileMenuItem href="/services/mvp" label="MVP Development" onClose={onClose} />
                                                <MobileMenuItem href="/services/development" label="Full Stack Development" onClose={onClose} />
                                            </>
                                        )}
                                        {activeMenu === 'labs' && (
                                            <>
                                                <MobileMenuItem href="/labs/ai-content" label="Generative AI" onClose={onClose} />
                                                <MobileMenuItem href="/labs/visual-content" label="Visual Content" onClose={onClose} />
                                                <MobileMenuItem href="/labs/experiments" label="Experiments" onClose={onClose} />
                                            </>
                                        )}
                                        {activeMenu === 'explore' && (
                                            <>
                                                <MobileMenuItem href="/explore/case-studies" label="Case Studies" onClose={onClose} />
                                                <MobileMenuItem href="/explore/portfolio" label="Portfolio" onClose={onClose} />
                                                <MobileMenuItem href="/explore/blog" label="Blog" onClose={onClose} />
                                                <MobileMenuItem href="/resources" label="Resources" onClose={onClose} />
                                                <MobileMenuItem href="/about" label="About Us" onClose={onClose} />
                                                <MobileMenuItem href="/careers" label="Careers" onClose={onClose} />
                                            </>
                                        )}
                                        {activeMenu === 'pricing' && (
                                            <>
                                                <MobileMenuItem href="/pricing/startups" label="Founders & Early Teams" onClose={onClose} />
                                                <MobileMenuItem href="/contact" label="Scale-ups & Enterprise" onClose={onClose} />
                                            </>
                                        )}
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        href={
                                            activeMenu === 'services' ? '/services' :
                                                activeMenu === 'labs' ? '/labs' :
                                                    activeMenu === 'explore' ? '/explore' :
                                                        '/contact'
                                        }
                                        onClick={onClose}
                                        className="block w-full py-3.5 bg-gradient-to-b from-violet-400 to-violet-900 text-white text-center rounded-xl font-medium transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-violet-900/30"
                                    >
                                        {activeMenu === 'services' && 'View All Services'}
                                        {activeMenu === 'labs' && 'Enter Labs'}
                                        {activeMenu === 'explore' && 'Explore More'}
                                        {activeMenu === 'pricing' && 'Book a Discovery Call'}
                                    </Link>

                                    {/* Image Showcase Section */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 via-rose-100 to-pink-100 p-6 relative"
                                    >
                                        <Link href="/labs" onClick={onClose} className="block group">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-lg font-semibold text-gray-900">Work Showcase</h3>
                                                <motion.div
                                                    className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </motion.div>
                                            </div>
                                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-orange-200 to-rose-200">
                                                {/* Device Mockup */}
                                                <div className="absolute inset-x-8 bottom-[-20px] top-12 bg-gray-900 rounded-t-2xl shadow-2xl overflow-hidden">
                                                    <div className="w-full h-full bg-gradient-to-br from-orange-500 to-rose-500 opacity-50"></div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Glassmorphic Segmented Control Navigation */}
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.15 }}
                            className="pointer-events-auto fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
                        >
                            <div className="flex items-center gap-1 bg-gray-200/40 backdrop-blur-xl border border-white/40 p-1.5 rounded-full shadow-2xl shadow-black/10">
                                {menuItems.map((item) => {
                                    const isActive = activeMenu === item.key;
                                    return (
                                        <button
                                            key={item.key}
                                            onClick={() => setActiveMenu(item.key)}
                                            className="relative px-4 py-2.5 text-sm font-medium transition-all duration-300 ease-out z-10"
                                        >
                                            {isActive && (
                                                <motion.div
                                                    layoutId="active-mobile-nav"
                                                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                            <span className={`relative z-10 transition-colors ${isActive ? 'text-black' : 'text-gray-600 hover:text-black/80'}`}>
                                                {item.label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// Helper Component
function MobileMenuItem({ href, label, onClose }: { href: string; label: string; onClose: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClose}
            className="block py-3.5 px-4 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all font-medium"
        >
            {label}
        </Link>
    );
}
