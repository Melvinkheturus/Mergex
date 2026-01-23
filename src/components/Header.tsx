'use client';

import { useState } from 'react';
import Image from 'next/image';

const NAVIGATION_LINKS = [
    { label: 'Solutions', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Academy', href: '#' },
    { label: 'About', href: '#' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="px-4 md:px-10 py-3 max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3 text-gray-900">
                    <Image
                        src="/logo/typo-mergex.png"
                        alt="Mergex"
                        width={120}
                        height={40}
                        className="h-8 w-auto"
                        priority
                    />
                </div>

                <nav className="hidden md:flex items-center gap-9">
                    {NAVIGATION_LINKS.map((link) => (
                        <a
                            key={link.label}
                            className="text-gray-900 text-sm font-medium hover:text-primary transition-colors"
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button className="hidden sm:flex h-10 px-5 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                        Book Strategy Call
                    </button>
                    <button
                        className="sm:hidden p-2 text-gray-900"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile menu - can be enhanced later */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white py-4 px-4">
                    <nav className="flex flex-col gap-4">
                        {NAVIGATION_LINKS.map((link) => (
                            <a
                                key={link.label}
                                className="text-gray-900 text-sm font-medium hover:text-primary transition-colors"
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
