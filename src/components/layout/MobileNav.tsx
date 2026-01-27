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

                        {/* Center Content Area */}
                        <div className="flex-1 overflow-y-auto pointer-events-auto px-6 pb-40 pt-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeMenu}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    {activeMenu === 'services' && <ServicesMenuContent onClose={onClose} />}
                                    {activeMenu === 'labs' && <LabsMenuContent onClose={onClose} />}
                                    {activeMenu === 'explore' && <ExploreMenuContent onClose={onClose} />}
                                    {activeMenu === 'pricing' && <PricingMenuContent onClose={onClose} />}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Floating Bottom Navigation Bar */}
                        <motion.div
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            exit={{ y: 100 }}
                            transition={{ duration: 0.3, delay: 0.15 }}
                            className="pointer-events-auto p-4 pb-safe"
                        >
                            <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 border border-gray-200 px-4 py-4">
                                <div className="flex items-center justify-around max-w-md mx-auto">
                                    {menuItems.map((item) => {
                                        const Icon = item.icon;
                                        const isActive = activeMenu === item.key;
                                        return (
                                            <button
                                                key={item.key}
                                                onClick={() => setActiveMenu(item.key)}
                                                className="flex flex-col items-center gap-1.5 min-w-[70px] py-2 px-3 transition-all"
                                            >
                                                <div className={`p-2.5 rounded-xl transition-all ${isActive
                                                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                                                    : 'bg-gray-100 text-gray-600'
                                                    }`}>
                                                    <Icon className="w-5 h-5" strokeWidth={2.5} />
                                                </div>
                                                <span className={`text-xs font-medium transition-colors ${isActive ? 'text-violet-600' : 'text-gray-600'
                                                    }`}>
                                                    {item.label}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// Menu Content Components
function ServicesMenuContent({ onClose }: { onClose: () => void }) {
    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Services</h2>
                <p className="text-gray-600 text-sm">What we build for you</p>
            </div>

            <div className="space-y-4">
                <MenuSection title="Mergex Systems">
                    <MenuItem href="/services/software-development" label="Software Development" onClose={onClose} />
                    <MenuItem href="/services/ui-ux-design" label="UI/UX & Design" onClose={onClose} />
                    <MenuItem href="/services/ai-automation" label="AI Automation" onClose={onClose} />
                    <MenuItem href="/services/cloud-architecture" label="Cloud & Architecture" onClose={onClose} />
                </MenuSection>

                <MenuSection title="Digital Marketing">
                    <MenuItem href="/services/content-strategy" label="Content Strategy" onClose={onClose} />
                    <MenuItem href="/services/seo-growth" label="SEO & Growth Marketing" onClose={onClose} />
                    <MenuItem href="/services/brand-development" label="Brand Development" onClose={onClose} />
                </MenuSection>

                <Link
                    href="/services"
                    onClick={onClose}
                    className="block w-full py-3 mt-6 bg-violet-600 hover:bg-violet-700 text-white text-center rounded-xl font-medium transition-colors"
                >
                    View All Services
                </Link>
            </div>
        </div>
    );
}

function LabsMenuContent({ onClose }: { onClose: () => void }) {
    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Mergex Labs</h2>
                <p className="text-gray-600 text-sm">Innovation & R&D</p>
            </div>

            <div className="space-y-4">
                <MenuSection title="AI Content Studio">
                    <MenuItem href="/labs/generative-ai" label="Generative AI" onClose={onClose} />
                    <MenuItem href="/labs/visual-content" label="Visual Content Creation" onClose={onClose} />
                    <MenuItem href="/labs/process-optimization" label="Process Optimization" onClose={onClose} />
                </MenuSection>

                <MenuSection title="Experiments & R&D">
                    <MenuItem href="/labs/experiments" label="Latest Experiments" onClose={onClose} />
                    <MenuItem href="/labs/work" label="Work & Reels" onClose={onClose} />
                </MenuSection>

                <Link
                    href="/labs"
                    onClick={onClose}
                    className="block w-full py-3 mt-6 bg-violet-600 hover:bg-violet-700 text-white text-center rounded-xl font-medium transition-colors"
                >
                    Enter Labs
                </Link>
            </div>
        </div>
    );
}

function ExploreMenuContent({ onClose }: { onClose: () => void }) {
    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Explore</h2>
                <p className="text-gray-600 text-sm">Discover our work & insights</p>
            </div>

            <div className="space-y-4">
                <MenuSection title="Proof">
                    <MenuItem href="/explore/case-studies" label="Case Studies" onClose={onClose} />
                    <MenuItem href="/explore/portfolio" label="Selected Work" onClose={onClose} />
                </MenuSection>

                <MenuSection title="Knowledge">
                    <MenuItem href="/explore/blog" label="Blog" onClose={onClose} />
                    <MenuItem href="/resources" label="Resources" onClose={onClose} />
                </MenuSection>

                <MenuSection title="Organization">
                    <MenuItem href="/about" label="About Mergex" onClose={onClose} />
                    <MenuItem href="/academy" label="Academy" onClose={onClose} />
                    <MenuItem href="/careers" label="Careers" onClose={onClose} />
                </MenuSection>

                <MenuSection title="Future">
                    <MenuItem href="/products" label="Products (Coming Soon)" onClose={onClose} subtle />
                </MenuSection>
            </div>
        </div>
    );
}

function PricingMenuContent({ onClose }: { onClose: () => void }) {
    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Pricing</h2>
                <p className="text-gray-600 text-sm">Flexible engagement models</p>
            </div>

            <div className="space-y-4">
                <MenuSection title="Engagement Models">
                    <MenuItem href="/pricing/project-based" label="Project-Based" onClose={onClose} />
                    <MenuItem href="/pricing/monthly-retainer" label="Monthly Retainer" onClose={onClose} />
                    <MenuItem href="/pricing/bot" label="Build-Operate-Transfer" onClose={onClose} />
                </MenuSection>

                <Link
                    href="/contact"
                    onClick={onClose}
                    className="block w-full py-3 mt-6 bg-violet-600 hover:bg-violet-700 text-white text-center rounded-xl font-medium transition-colors"
                >
                    Get a Quote
                </Link>
            </div>
        </div>
    );
}

// Helper Components
function MenuSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">{title}</h3>
            <div className="space-y-2.5">
                {children}
            </div>
        </div>
    );
}

function MenuItem({ href, label, onClose, subtle }: { href: string; label: string; onClose: () => void; subtle?: boolean }) {
    return (
        <Link
            href={href}
            onClick={onClose}
            className={`block py-2.5 px-3 rounded-lg transition-all ${subtle
                ? 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                : 'text-gray-700 hover:bg-gray-100'
                }`}
        >
            {label}
        </Link>
    );
}
