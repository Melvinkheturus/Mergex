'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileNav } from '@/components/layout/MobileNav';


type MegaMenuKey = 'products' | 'services' | 'explore' | 'resources' | null;

export function Navbar() {
    const [activeMenu, setActiveMenu] = useState<MegaMenuKey>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden lg:block sticky top-0 z-50 bg-white border-b border-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="text-2xl font-bold text-primary">
                            Mergex
                        </Link>

                        {/* Center Menu */}
                        <div className="flex items-center gap-8">
                            <button
                                onMouseEnter={() => setActiveMenu('products')}
                                onMouseLeave={() => setActiveMenu(null)}
                                className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                                Products
                            </button>
                            <button
                                onMouseEnter={() => setActiveMenu('services')}
                                onMouseLeave={() => setActiveMenu(null)}
                                className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                                Services
                            </button>
                            <button
                                onMouseEnter={() => setActiveMenu('explore')}
                                onMouseLeave={() => setActiveMenu(null)}
                                className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                                Explore
                            </button>
                            <button
                                onMouseEnter={() => setActiveMenu('resources')}
                                onMouseLeave={() => setActiveMenu(null)}
                                className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                                Resources
                            </button>
                        </div>

                        {/* Right CTA */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="/partners"
                                className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                                Partner With Us
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-full font-medium transition-colors"
                            >
                                Book a Call
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mega Menus */}
                <AnimatePresence>
                    {activeMenu && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            onMouseEnter={() => setActiveMenu(activeMenu)}
                            onMouseLeave={() => setActiveMenu(null)}
                            className="absolute top-16 left-0 w-full bg-white border-b border-border shadow-lg"
                        >
                            <div className="max-w-7xl mx-auto px-6 py-8">
                                {activeMenu === 'products' && <ProductsMenu />}
                                {activeMenu === 'services' && <ServicesMenu />}
                                {activeMenu === 'explore' && <ExploreMenu />}
                                {activeMenu === 'resources' && <ResourcesMenu />}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Mobile Navbar */}
            <nav className="lg:hidden sticky top-0 z-50 bg-white border-b border-border">
                <div className="flex items-center justify-between h-16 px-6">
                    <Link href="/" className="text-2xl font-bold text-primary">
                        Mergex
                    </Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    );
}

function ProductsMenu() {
    return (
        <div className="grid grid-cols-2 gap-12">
            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">SaaS Products</h3>
                <div className="space-y-3">
                    <Link href="/products/unisynk" className="block group">
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                            Unisynk
                        </div>
                        <div className="text-sm text-gray-600">AI-powered workflow & automation platform</div>
                    </Link>
                    <div className="block">
                        <div className="font-medium text-gray-400">Coming Soon</div>
                        <div className="text-sm text-gray-500">New tools from Mergex Labs</div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Why Our Products</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li>Built from real client problems</li>
                    <li>Designed for scale</li>
                    <li>AI-first architecture</li>
                </ul>
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary-hover font-medium"
                >
                    View All Products →
                </Link>
            </div>
        </div>
    );
}

function ServicesMenu() {
    return (
        <div className="grid grid-cols-3 gap-12">
            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Mergex Software</h3>
                <div className="space-y-2 text-sm">
                    <Link href="/services/software/web" className="block text-gray-600 hover:text-primary">
                        Website Development
                    </Link>
                    <Link href="/services/software/mobile" className="block text-gray-600 hover:text-primary">
                        Mobile App Development
                    </Link>
                    <Link href="/services/software/saas" className="block text-gray-600 hover:text-primary">
                        SaaS Development
                    </Link>
                    <Link href="/services/software/custom" className="block text-gray-600 hover:text-primary">
                        Custom Platforms
                    </Link>
                </div>
                <Link
                    href="/services/software"
                    className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary-hover font-medium text-sm"
                >
                    View Mergex Software →
                </Link>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Mergex Labs</h3>
                <div className="space-y-2 text-sm">
                    <Link href="/services/labs/ai-automation" className="block text-gray-600 hover:text-primary">
                        AI Automation
                    </Link>
                    <Link href="/services/labs/content" className="block text-gray-600 hover:text-primary">
                        AI Content Studio
                    </Link>
                    <Link href="/services/labs/tools" className="block text-gray-600 hover:text-primary">
                        Internal Tools & R&D
                    </Link>
                    <Link href="/services/labs/optimization" className="block text-gray-600 hover:text-primary">
                        Process Optimization
                    </Link>
                </div>
                <Link
                    href="/services/labs"
                    className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary-hover font-medium text-sm"
                >
                    Explore Mergex Labs →
                </Link>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">How We Work</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                    <li>Discovery & Strategy</li>
                    <li>Build & Iterate</li>
                    <li>Launch & Scale</li>
                    <li>Support & Growth</li>
                </ul>
            </div>
        </div>
    );
}

function ExploreMenu() {
    return (
        <div className="grid grid-cols-3 gap-12">
            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Work</h3>
                <div className="space-y-2 text-sm">
                    <Link href="/explore/portfolio" className="block text-gray-600 hover:text-primary">
                        Portfolio
                    </Link>
                    <Link href="/explore/case-studies" className="block text-gray-600 hover:text-primary">
                        Case Studies
                    </Link>
                </div>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Insights</h3>
                <div className="space-y-2 text-sm">
                    <Link href="/explore/blog" className="block text-gray-600 hover:text-primary">
                        Blog
                    </Link>
                    <Link href="/explore/articles" className="block text-gray-600 hover:text-primary">
                        Tech Articles
                    </Link>
                    <Link href="/explore/ai-insights" className="block text-gray-600 hover:text-primary">
                        AI & Automation Insights
                    </Link>
                </div>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
                <div className="space-y-2 text-sm">
                    <Link href="/about" className="block text-gray-600 hover:text-primary">
                        About Mergex
                    </Link>
                    <Link href="/academy" className="block text-gray-600 hover:text-primary">
                        Academy & Community
                    </Link>
                </div>
                <Link
                    href="/explore"
                    className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary-hover font-medium text-sm"
                >
                    Explore Our Work →
                </Link>
            </div>
        </div>
    );
}

function ResourcesMenu() {
    return (
        <div className="grid grid-cols-3 gap-12">
            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Templates</h3>
                <div className="space-y-2 text-sm">
                    <Link href="/resources/templates/website" className="block text-gray-600 hover:text-primary">
                        Website Templates
                    </Link>
                    <Link href="/resources/templates/ui" className="block text-gray-600 hover:text-primary">
                        UI / UX Kits
                    </Link>
                    <Link href="/resources/templates/landing" className="block text-gray-600 hover:text-primary">
                        Landing Page Templates
                    </Link>
                </div>
                <p className="text-xs text-gray-500 mt-2">Ready-to-use assets</p>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Free Resources</h3>
                <div className="space-y-2 text-sm">
                    <Link href="/resources/guides" className="block text-gray-600 hover:text-primary">
                        Guides & Playbooks
                    </Link>
                    <Link href="/resources/checklists" className="block text-gray-600 hover:text-primary">
                        Checklists
                    </Link>
                    <Link href="/resources/case-pdfs" className="block text-gray-600 hover:text-primary">
                        Case PDFs
                    </Link>
                </div>
            </div>
            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">For Builders</h3>
                <div className="space-y-2 text-sm">
                    <Link href="/resources/open-source" className="block text-gray-600 hover:text-primary">
                        Open-source Tools
                    </Link>
                    <Link href="/resources/experiments" className="block text-gray-600 hover:text-primary">
                        Experiments
                    </Link>
                    <Link href="/resources/frameworks" className="block text-gray-600 hover:text-primary">
                        Internal Frameworks
                    </Link>
                </div>
                <Link
                    href="/resources"
                    className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary-hover font-medium text-sm"
                >
                    Browse All Resources →
                </Link>
            </div>
        </div>
    );
}
