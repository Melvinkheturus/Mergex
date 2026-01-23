'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const navLinks = [
        {
            id: 'products',
            label: 'Products',
            megaMenu: {
                columns: [
                    {
                        title: 'SaaS Products',
                        items: [
                            { name: 'Unisynk', description: 'AI-powered workflow & automation platform', href: '/products/unisynk' },
                            { name: 'Coming Soon', description: 'New tools from Mergex Labs', href: '/products' },
                        ],
                    },
                    {
                        title: 'Why Our Products',
                        items: [
                            { name: 'Built from real client problems', href: null },
                            { name: 'Designed for scale', href: null },
                            { name: 'AI-first architecture', href: null },
                        ],
                    },
                ],
                footerCTA: { label: 'View All Products →', href: '/products' },
            },
        },
        {
            id: 'services',
            label: 'Services',
            megaMenu: {
                columns: [
                    {
                        title: 'Mergex Software',
                        items: [
                            { name: 'Website Development', href: '/services/software#web' },
                            { name: 'Mobile App Development', href: '/services/software#mobile' },
                            { name: 'SaaS Development', href: '/services/software#saas' },
                            { name: 'Custom Platforms', href: '/services/software#custom' },
                        ],
                        cta: { label: 'View Mergex Software →', href: '/services/software' },
                    },
                    {
                        title: 'Mergex Labs',
                        items: [
                            { name: 'AI Automation', href: '/services/labs#automation' },
                            { name: 'AI Content Studio', href: '/services/labs#content' },
                            { name: 'Internal Tools & R&D', href: '/services/labs#rnd' },
                            { name: 'Process Optimization', href: '/services/labs#optimization' },
                        ],
                        cta: { label: 'Explore Mergex Labs →', href: '/services/labs' },
                    },
                    {
                        title: 'How We Work',
                        items: [
                            { name: 'Discovery & Strategy', href: null },
                            { name: 'Build & Iterate', href: null },
                            { name: 'Launch & Scale', href: null },
                            { name: 'Support & Growth', href: null },
                        ],
                    },
                ],
            },
        },
        {
            id: 'explore',
            label: 'Explore',
            megaMenu: {
                columns: [
                    {
                        title: 'Work',
                        items: [
                            { name: 'Portfolio', href: '/explore/portfolio' },
                            { name: 'Case Studies', href: '/explore/case-studies' },
                        ],
                    },
                    {
                        title: 'Insights',
                        items: [
                            { name: 'Blog', href: '/blog' },
                            { name: 'Tech Articles', href: '/blog/category/tech' },
                            { name: 'AI & Automation Insights', href: '/blog/category/ai' },
                        ],
                    },
                    {
                        title: 'Company',
                        items: [
                            { name: 'About Mergex', href: '/about' },
                            { name: 'Academy & Community', href: '/academy' },
                        ],
                    },
                ],
                footerCTA: { label: 'Explore Our Work →', href: '/explore/portfolio' },
            },
        },
        {
            id: 'resources',
            label: 'Resources',
            megaMenu: {
                columns: [
                    {
                        title: 'Templates',
                        subtitle: 'Ready-to-use assets',
                        items: [
                            { name: 'Website Templates', href: '/resources/templates/web' },
                            { name: 'UI / UX Kits', href: '/resources/templates/ui' },
                            { name: 'Landing Page Templates', href: '/resources/templates/landing' },
                        ],
                    },
                    {
                        title: 'Free Resources',
                        items: [
                            { name: 'Guides & Playbooks', href: '/resources/guides' },
                            { name: 'Checklists', href: '/resources/checklists' },
                            { name: 'Case PDFs', href: '/resources/case-pdfs' },
                        ],
                    },
                    {
                        title: 'For Builders',
                        items: [
                            { name: 'Open-source tools', href: '/resources/opensource' },
                            { name: 'Experiments', href: '/resources/experiments' },
                        ],
                    },
                ],
                footerCTA: { label: 'Browse All Resources →', href: '/resources' },
            },
        },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary font-display">Mergex</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.id}
                                className="relative"
                                onMouseEnter={() => setActiveDropdown(link.id)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors font-medium">
                                    {link.label}
                                    <ChevronDown className="w-4 h-4" />
                                </button>

                                {/* Mega Menu */}
                                {activeDropdown === link.id && link.megaMenu && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-screen max-w-4xl">
                                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-8">
                                            <div className={`grid grid-cols-${link.megaMenu.columns.length} gap-8`}>
                                                {link.megaMenu.columns.map((column, idx) => (
                                                    <div key={idx}>
                                                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4">
                                                            {column.title}
                                                        </h3>
                                                        {column.subtitle && (
                                                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{column.subtitle}</p>
                                                        )}
                                                        <ul className="space-y-3">
                                                            {column.items.map((item, itemIdx) => (
                                                                <li key={itemIdx}>
                                                                    {item.href ? (
                                                                        <Link
                                                                            href={item.href}
                                                                            className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary transition-colors block"
                                                                        >
                                                                            {item.name}
                                                                            {item.description && (
                                                                                <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                                                    {item.description}
                                                                                </span>
                                                                            )}
                                                                        </Link>
                                                                    ) : (
                                                                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        {column.cta && (
                                                            <Link
                                                                href={column.cta.href}
                                                                className="inline-block mt-4 text-sm font-bold text-primary hover:underline"
                                                            >
                                                                {column.cta.label}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                            {link.megaMenu.footerCTA && (
                                                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                                    <Link
                                                        href={link.megaMenu.footerCTA.href}
                                                        className="text-sm font-bold text-primary hover:underline"
                                                    >
                                                        {link.megaMenu.footerCTA.label}
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Partner Link */}
                        <Link href="/partners" className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors font-medium">
                            Partner With Us
                        </Link>

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="px-6 py-2 rounded-lg bg-primary text-white font-bold hover:bg-primary-hover transition-colors"
                        >
                            Book a Call
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-700 dark:text-gray-200"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu TODO: Implement full mobile slide-down drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="px-4 py-4 space-y-4">
                        <p className="text-sm text-gray-500">Mobile menu - To be implemented with slide-down drawer</p>
                    </div>
                </div>
            )}
        </nav>
    );
}
