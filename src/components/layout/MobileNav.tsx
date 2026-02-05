'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, FlaskConical, Compass, DollarSign, ArrowUpRight } from 'lucide-react';

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
        { key: 'services' as MobileMenuKey, label: 'Systems', icon: Briefcase },
        { key: 'labs' as MobileMenuKey, label: 'Labs', icon: FlaskConical },
        { key: 'explore' as MobileMenuKey, label: 'Explore', icon: Compass },
        { key: 'pricing' as MobileMenuKey, label: 'Pricing', icon: DollarSign },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                        onClick={onClose}
                    />

                    {/* Card Container */}
                    <motion.div
                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                        exit={{ clipPath: "inset(0 0 100% 0)" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed top-0 left-0 right-0 z-[61] p-2 flex flex-col pointer-events-none"
                    >
                        <div className="w-full h-auto max-h-[85vh] bg-white rounded-xl overflow-hidden flex flex-col pointer-events-auto shadow-2xl relative">

                            {/* Unified Header Row */}
                            <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 flex-shrink-0">
                                {/* Left: Logo Icon */}
                                <Link href="/" onClick={onClose} className="flex-shrink-0">
                                    <Image
                                        src="/logo/mergex-logo.png"
                                        alt="Mergex Logo"
                                        width={42}
                                        height={42}
                                        className="object-contain"
                                    />
                                </Link>

                                {/* Center: MERGEX Typo Logo */}
                                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                                    <Image
                                        src="/logo/typo-mergex-black.png"
                                        alt="Mergex"
                                        width={110}
                                        height={28}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Right: Close Button */}
                                <button
                                    onClick={onClose}
                                    className="p-2 -mr-2 text-gray-800 hover:text-black transition-colors"
                                    aria-label="Close menu"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Menu Content Area */}
                            <div className="flex-1 overflow-y-auto px-4 pb-32 pt-6 hide-scrollbar">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeMenu}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-6"
                                    >
                                        {activeMenu === 'services' && <MobileServicesContent onClose={onClose} />}
                                        {activeMenu === 'labs' && <MobileLabsContent onClose={onClose} />}
                                        {activeMenu === 'explore' && <MobileExploreContent onClose={onClose} />}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Bottom Navigation */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-auto">
                                <div className="flex items-center gap-1 bg-gray-100/80 backdrop-blur-xl border border-white/50 p-1.5 rounded-full shadow-lg">
                                    {menuItems.map((item) => {
                                        const isActive = activeMenu === item.key;

                                        if (item.key === 'pricing') {
                                            return (
                                                <Link
                                                    key={item.key}
                                                    href="/pricing"
                                                    onClick={onClose}
                                                    className="relative px-4 py-2.5 text-sm font-medium transition-all duration-300 ease-out z-10 text-gray-500 hover:text-black/70"
                                                >
                                                    {item.label}
                                                </Link>
                                            );
                                        }

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
                                                <span className={`relative z-10 transition-colors ${isActive ? 'text-black' : 'text-gray-500 hover:text-black/70'}`}>
                                                    {item.label}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// SYSTEMS TAB CONTENT
function MobileServicesContent({ onClose }: { onClose: () => void }) {
    return (
        <div className="space-y-6 pt-4">
            {/* Header */}
            <div className="px-2 space-y-1">
                <h3 className="text-2xl font-serif font-medium text-gray-900 leading-tight">
                    Build systems that scale.
                </h3>
                <p className="text-sm text-gray-500">
                    Product, platforms, and growth — built fast.
                </p>
            </div>

            {/* Simple Rows */}
            <div className="space-y-1">
                <SimpleMenuRow href="/services/design" label="Design & Brand Systems" onClose={onClose} />
                <SimpleMenuRow href="/services/web" label="Web & Digital Experiences" onClose={onClose} />
                <SimpleMenuRow href="/services/mvp" label="Product & Platform Building" onClose={onClose} />
                <SimpleMenuRow href="/services/growth" label="Growth & Automation" onClose={onClose} />
            </div>

            {/* Bottom CTA */}
            <div className="pt-2 px-2 space-y-4">
                <Link
                    href="/systems"
                    onClick={onClose}
                    className="block w-full py-4 bg-black text-white text-center rounded-xl font-medium text-base"
                >
                    Explore All Systems
                </Link>
                <Link
                    href="/contact"
                    onClick={onClose}
                    className="block text-center text-sm font-medium text-gray-600 underline underline-offset-4"
                >
                    Book a Discovery Call
                </Link>
            </div>
        </div>
    );
}

// LABS TAB CONTENT
function MobileLabsContent({ onClose }: { onClose: () => void }) {
    return (
        <div className="space-y-6 pt-4">
            {/* Header */}
            <div className="px-2 space-y-1">
                <h3 className="text-2xl font-serif font-medium text-gray-900 leading-tight">
                    Where creativity meets intelligence.
                </h3>
                <p className="text-sm text-gray-500">
                    AI-native content & experiments.
                </p>
            </div>

            {/* Simple Rows */}
            <div className="space-y-1">
                <SimpleMenuRow href="/labs/ai-content" label="Generative AI" onClose={onClose} />
                <SimpleMenuRow href="/labs/visual-content" label="Visual Content" onClose={onClose} />
                <SimpleMenuRow href="/labs/experiments" label="Experiments" onClose={onClose} />
            </div>

            {/* Bottom CTA */}
            <div className="pt-2 px-2 space-y-4">
                <Link
                    href="/labs"
                    onClick={onClose}
                    className="block w-full py-4 bg-black text-white text-center rounded-xl font-medium text-base"
                >
                    Explore Labs
                </Link>
                <Link
                    href="/labs/experiments"
                    onClick={onClose}
                    className="block text-center text-sm font-medium text-gray-600 underline underline-offset-4"
                >
                    View Experiments
                </Link>
            </div>
        </div>
    );
}

// EXPLORE TAB CONTENT
function MobileExploreContent({ onClose }: { onClose: () => void }) {
    return (
        <div className="space-y-6 pt-4">
            {/* Header */}
            <div className="px-2">
                <h3 className="text-2xl font-serif font-medium text-gray-900 leading-tight">
                    See how we think and build.
                </h3>
            </div>

            {/* Simple List */}
            <div className="space-y-4 px-2">
                <Link href="/explore/case-studies" onClick={onClose} className="block text-lg font-medium text-gray-900">Case Studies</Link>
                <Link href="/about" onClick={onClose} className="block text-lg font-medium text-gray-900">About Mergex</Link>
                <Link href="/partners" onClick={onClose} className="block text-lg font-medium text-gray-900">Partner With Us</Link>
                <Link href="/explore/blog" onClick={onClose} className="block text-lg font-medium text-gray-900">Blog</Link>
                <Link href="/careers" onClick={onClose} className="block text-lg font-medium text-gray-900">Careers</Link>
            </div>

            {/* Bottom CTA */}
            <div className="pt-2 px-2">
                <Link
                    href="/about"
                    onClick={onClose}
                    className="block text-sm font-medium text-gray-600 underline underline-offset-4"
                >
                    About Mergex →
                </Link>
            </div>
        </div>
    );
}



// Helper Components
function SimpleMenuRow({ href, label, onClose }: { href: string; label: string; onClose: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClose}
            className="flex items-center justify-between py-3 px-2 text-lg font-medium text-gray-900 border-b border-gray-100 last:border-0"
        >
            <span>{label}</span>
            <ArrowUpRight size={18} className="text-gray-400" />
        </Link>
    );
}
