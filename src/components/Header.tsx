'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NAVIGATION_LINKS = [
    { label: 'Divisions', href: '#divisions' },
    { label: 'Work', href: '/work' },
    { label: 'Resources', href: '#resources' },
    { label: 'Partners', href: '/partners' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-6">
            <div className="max-w-7xl mx-auto">
                {/* Glassmorphism Navbar */}
                <div className="relative backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl shadow-2xl shadow-purple-500/10 px-6 md:px-8 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo/typo-mergex.png"
                                alt="Mergex"
                                width={140}
                                height={48}
                                className="h-9 w-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {NAVIGATION_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    className="text-foreground/80 text-sm font-medium hover:text-primary transition-colors relative group"
                                    href={link.href}
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                                </a>
                            ))}
                        </nav>

                        {/* CTA */}
                        <div className="flex items-center gap-4">
                            <button className="hidden sm:flex h-11 px-6 items-center justify-center rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/40">
                                Start Building
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                <span className="material-symbols-outlined">
                                    {mobileMenuOpen ? 'close' : 'menu'}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-3 backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl shadow-2xl p-6 animate-fade-in-up">
                        <nav className="flex flex-col gap-4">
                            {NAVIGATION_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    className="text-foreground/80 text-base font-medium hover:text-primary transition-colors py-2"
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <button className="mt-2 h-11 px-6 flex items-center justify-center rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-all">
                                Start Building
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
