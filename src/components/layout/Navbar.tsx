'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileNav } from '@/components/layout/MobileNav';
import { MegaMenuContainer, MegaMenuColumn, ProductCard, DivisionCard } from '@/components/layout/megaMenu';


type MegaMenuKey = 'products' | 'services' | 'explore' | 'resources' | null;

export function Navbar() {
    const [activeMenu, setActiveMenu] = useState<MegaMenuKey>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Handle scroll effect for transparency and hide/show
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Set scrolled state for transparency
            setScrolled(currentScrollY > 50);

            // Show navbar when scrolling up, hide when scrolling down
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down & past threshold
                setVisible(false);
            } else {
                // Scrolling up or at top
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Desktop Navbar */}
            <div className={`
                hidden lg:block w-full fixed top-0 left-0 right-0 z-50 p-6
                transition-transform duration-300 ease-in-out
                ${visible ? 'translate-y-0' : '-translate-y-full'}
            `}>
                <nav
                    className={`
                        w-full transition-all duration-300 ease-in-out
                        ${scrolled || activeMenu ? 'bg-white/95 shadow-lg border-gray-200/50' : 'bg-transparent shadow-none border-transparent'}
                        backdrop-blur-md rounded-2xl pl-4 pr-8 h-20 flex items-center justify-between
                        border
                    `}
                >
                    {/* Logo and Divider Group */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-0">
                            <Image
                                src="/logo/mergex-logo.png"
                                alt="Mergex Logo"
                                width={76}
                                height={76}
                                className="object-contain"
                            />
                            <Image
                                src="/logo/typo-mergex-black.png"
                                alt="Mergex"
                                width={172}
                                height={46}
                                className="object-contain -ml-8"
                            />
                        </Link>
                        <div className={`hidden lg:block h-20 w-[4px] bg-gray-200 ml-6 transition-opacity duration-300 ${scrolled || activeMenu ? 'opacity-100' : 'opacity-0'}`} />
                    </div>

                    {/* Center Menu */}
                    <div className="flex items-center gap-8 h-full">
                        <NavButton label="Products" active={activeMenu === 'products'} onEnter={() => setActiveMenu('products')} onLeave={() => setActiveMenu(null)} />
                        <NavButton label="Services" active={activeMenu === 'services'} onEnter={() => setActiveMenu('services')} onLeave={() => setActiveMenu(null)} />
                        <NavButton label="Explore" active={activeMenu === 'explore'} onEnter={() => setActiveMenu('explore')} onLeave={() => setActiveMenu(null)} />
                        <NavButton label="Resources" active={activeMenu === 'resources'} onEnter={() => setActiveMenu('resources')} onLeave={() => setActiveMenu(null)} />
                    </div>

                    {/* Right CTA */}
                    <Link
                        href="/contact"
                        className="
                            group relative px-6 py-2.5 rounded-xl overflow-hidden 
                            bg-gradient-to-b from-violet-400 to-violet-900
                            text-white font-medium text-sm
                            shadow-lg shadow-violet-900/30
                            transition-all duration-200 ease-out
                            hover:brightness-110 hover:-translate-y-0.5
                            active:scale-95
                            flex items-center gap-2
                        "
                    >
                        <lord-icon
                            src="https://cdn.lordicon.com/fpvaxfly.json"
                            trigger="loop-on-hover"
                            state="morph-phone-ring"
                            colors="primary:#ffffff"
                            style={{ width: '24px', height: '24px' }}
                        />
                        <span>Book a Call</span>
                    </Link>
                </nav>

                {/* Mega Menus Container */}
                <AnimatePresence>
                    {activeMenu && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            onMouseEnter={() => setActiveMenu(activeMenu)}
                            onMouseLeave={() => setActiveMenu(null)}
                            className="w-full mt-2 bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-2xl overflow-hidden p-8"
                        >
                            {activeMenu === 'products' && <ProductsMenu />}
                            {activeMenu === 'services' && <ServicesMenu />}
                            {activeMenu === 'explore' && <ExploreMenu />}
                            {activeMenu === 'resources' && <ResourcesMenu />}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Navbar */}
            < div className={`
                lg:hidden fixed top-0 left-0 right-0 z-50
                transition-transform duration-300 ease-in-out
                ${visible ? 'translate-y-0' : '-translate-y-full'}
            `} >
                <nav className={`
                    transition-all duration-300 ease-in-out
                    ${scrolled ? 'bg-white/95 shadow-md' : 'bg-transparent'}
                    backdrop-blur-md pl-2 pr-6 h-16 flex items-center justify-between
                `}>
                    {/* Logo and Divider Group */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-0">
                            <Image
                                src="/logo/mergex-logo.png"
                                alt="Mergex Logo"
                                width={50}
                                height={50}
                                className="object-contain"
                            />
                            <Image
                                src="/logo/typo-mergex-black.png"
                                alt="Mergex"
                                width={125}
                                height={31}
                                className="object-contain -ml-4"
                            />
                        </Link>
                        <div className={`h-16 w-[3px] bg-gray-200 ml-4 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 -mr-2 text-foreground/80"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </nav>
            </div >

            <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    );
}

function NavButton({ label, active, onEnter, onLeave }: { label: string; active: boolean; onEnter: () => void; onLeave: () => void }) {
    return (
        <button
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className={`
                relative h-full flex items-center px-1 text-base font-medium transition-colors
                ${active ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}
            `}
        >
            {label}
            {active && (
                <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"
                    transition={{ duration: 0.3 }}
                />
            )}
        </button>
    );
}

function ProductsMenu() {
    return (
        <MegaMenuContainer>
            {/* Left Column - Context */}
            <MegaMenuColumn
                type="context"
                heading="Products"
                subheading="SaaS products built from real operational problems."
            />

            {/* Center Column - Product Cards */}
            <MegaMenuColumn type="content">
                <div className="space-y-3">
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
            </MegaMenuColumn>

            {/* Right Column - Actions */}
            <MegaMenuColumn type="action">
                <div className="space-y-3">
                    <Link
                        href="/products"
                        className="block text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                    >
                        View all products →
                    </Link>
                    <Link
                        href="/products/waitlist"
                        className="block text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                    >
                        Join product waitlist →
                    </Link>
                </div>
            </MegaMenuColumn>
        </MegaMenuContainer>
    );
}

function ServicesMenu() {
    return (
        <MegaMenuContainer>
            {/* Left Column - Context */}
            <MegaMenuColumn
                type="context"
                heading="Services"
                subheading="We design, build, and automate systems for growing teams."
            />

            {/* Center Column - Division Cards */}
            <MegaMenuColumn type="content">
                <div className="space-y-4">
                    <DivisionCard
                        name="Mergex Systems"
                        tagline="Build & Automate"
                        features={[
                            'Software development',
                            'AI automation',
                            'Cloud & architecture'
                        ]}
                        ctaText="Enter Systems"
                        ctaHref="/services/systems"
                        accentColor="blue"
                    />
                    <DivisionCard
                        name="Mergex Labs"
                        tagline="Explore Innovation"
                        features={[
                            'AI content studio',
                            'Experiments & R&D',
                            'Process optimization'
                        ]}
                        ctaText="Enter Labs"
                        ctaHref="/services/labs"
                        accentColor="purple"
                    />
                </div>
            </MegaMenuColumn>

            {/* Right Column - Qualifier */}
            <MegaMenuColumn type="action">
                <div className="space-y-2.5">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                        Best suited for
                    </div>
                    <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Startups</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Scale-ups</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Enterprises</span>
                    </div>
                </div>
            </MegaMenuColumn>
        </MegaMenuContainer>
    );
}

function ExploreMenu() {
    return (
        <MegaMenuContainer>
            {/* Left Column - Context */}
            <MegaMenuColumn
                type="context"
                heading="Explore"
                subheading="See how we think, build, and evolve."
            />

            {/* Center Column - Grouped Links */}
            <MegaMenuColumn type="content">
                <div className="space-y-6">
                    {/* Group 1 - Proof */}
                    <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Proof</h4>
                        <div className="space-y-2">
                            <Link href="/explore/case-studies" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                Case Studies
                            </Link>
                            <Link href="/explore/portfolio" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                Selected Work
                            </Link>
                        </div>
                    </div>

                    {/* Group 2 - Knowledge */}
                    <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Knowledge</h4>
                        <div className="space-y-2">
                            <Link href="/explore/blog" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                Blog
                            </Link>
                            <Link href="/resources" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                Resources
                            </Link>
                        </div>
                    </div>

                    {/* Group 3 - Organization */}
                    <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Organization</h4>
                        <div className="space-y-2">
                            <Link href="/about" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                About Mergex
                            </Link>
                            <Link href="/academy" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                Academy
                            </Link>
                            <Link href="/careers" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                Careers
                            </Link>
                        </div>
                    </div>
                </div>
            </MegaMenuColumn>

            {/* Right Column - Highlight */}
            <MegaMenuColumn type="action">
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Featured
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                        Latest Case Study
                    </h4>
                    <p className="text-xs text-gray-600 mb-3">
                        How we helped transform operations
                    </p>
                    <Link
                        href="/explore/case-studies"
                        className="text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                    >
                        Read more →
                    </Link>
                </div>
            </MegaMenuColumn>
        </MegaMenuContainer>
    );
}

function ResourcesMenu() {
    return (
        <MegaMenuContainer>
            {/* Left Column - Context */}
            <MegaMenuColumn
                type="context"
                heading="Resources"
                subheading="Templates, guides, and tools to accelerate your growth."
            />

            {/* Center Column - Resource Categories */}
            <MegaMenuColumn type="content">
                <div className="space-y-6">
                    {/* Templates */}
                    <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Templates</h4>
                        <div className="space-y-2">
                            <Link href="/resources/templates/website" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                Website Templates
                            </Link>
                            <Link href="/resources/templates/ui" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                UI / UX Kits
                            </Link>
                            <Link href="/resources/templates/landing" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                Landing Pages
                            </Link>
                        </div>
                    </div>

                    {/* Free Resources */}
                    <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Free Resources</h4>
                        <div className="space-y-2">
                            <Link href="/resources/guides" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                Guides & Playbooks
                            </Link>
                            <Link href="/resources/checklists" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                Checklists
                            </Link>
                        </div>
                    </div>
                </div>
            </MegaMenuColumn>

            {/* Right Column - For Builders */}
            <MegaMenuColumn type="action">
                <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">For Builders</h4>
                    <div className="space-y-2 mb-4">
                        <Link href="/resources/open-source" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                            Open-source Tools
                        </Link>
                        <Link href="/resources/experiments" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                            Experiments
                        </Link>
                    </div>
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                    >
                        Browse All Resources →
                    </Link>
                </div>
            </MegaMenuColumn>
        </MegaMenuContainer>
    );
}
