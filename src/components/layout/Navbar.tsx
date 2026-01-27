'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileNav } from '@/components/layout/MobileNav';
import { MegaMenuContainer, MegaMenuColumn, ProductCard, DivisionCard } from '@/components/layout/megaMenu';


type MegaMenuKey = 'services' | 'labs' | 'explore' | 'pricing' | null;

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
                        <NavButton label="Services" active={activeMenu === 'services'} onEnter={() => setActiveMenu('services')} onLeave={() => setActiveMenu(null)} />
                        <NavButton label="Labs" active={activeMenu === 'labs'} onEnter={() => setActiveMenu('labs')} onLeave={() => setActiveMenu(null)} />
                        <NavButton label="Explore" active={activeMenu === 'explore'} onEnter={() => setActiveMenu('explore')} onLeave={() => setActiveMenu(null)} />
                        <NavButton label="Pricing" active={activeMenu === 'pricing'} onEnter={() => setActiveMenu('pricing')} onLeave={() => setActiveMenu(null)} />
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
                            {activeMenu === 'services' && <ServicesMenu />}
                            {activeMenu === 'labs' && <LabsMenu />}
                            {activeMenu === 'explore' && <ExploreMenu />}
                            {activeMenu === 'pricing' && <PricingMenu />}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Navbar */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: visible ? 0 : -100 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="lg:hidden fixed top-0 left-0 right-0 z-50 p-4"
            >
                <nav className={`
                    w-full transition-all duration-300 ease-in-out
                    ${scrolled ? 'bg-white/90 shadow-lg border-gray-200/50' : 'bg-transparent border-transparent'}
                    backdrop-blur-xl rounded-2xl px-5 h-16 flex items-center justify-between border
                `}>
                    {/* Logo and Divider Group */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-0">
                            <Image
                                src="/logo/mergex-logo.png"
                                alt="Mergex Logo"
                                width={42}
                                height={42}
                                className="object-contain"
                            />
                            <Image
                                src="/logo/typo-mergex-black.png"
                                alt="Mergex"
                                width={110}
                                height={28}
                                className="object-contain -ml-3"
                            />
                        </Link>
                        <div className={`h-8 w-[2px] bg-gray-200 ml-4 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 -mr-2 text-foreground/80 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16h16" />
                                </>
                            )}
                        </svg>
                    </button>
                </nav>
            </motion.div>

            <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

            {/* Mobile Fixed Bottom CTA - Hidden when menu is open */}
            {!isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
                >
                    <Link
                        href="/contact"
                        className="
                            group relative flex items-center gap-2 px-6 py-3 rounded-full overflow-hidden
                            bg-gradient-to-b from-violet-400 to-violet-900
                            text-white font-medium text-base
                            shadow-xl shadow-violet-900/40
                            transition-all duration-200 ease-out
                            hover:brightness-110 hover:-translate-y-0.5
                            active:scale-95
                            whitespace-nowrap
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
                </motion.div>
            )}
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

function ServicesMenu() {
    return (
        <MegaMenuContainer>
            {/* Left Column - Context */}
            <MegaMenuColumn
                type="context"
                heading="Services"
                subheading="Designing, building, and automating production-ready systems."
            />

            {/* Center Column - Service Divisions */}
            <MegaMenuColumn type="content">
                <div className="space-y-4">
                    <DivisionCard
                        name="Mergex Systems"
                        tagline="Build & Automate"
                        features={[
                            'Software Development',
                            'UI/UX & Design',
                            'AI Automation',
                            'Cloud & Architecture'
                        ]}
                        ctaText="Explore Systems"
                        ctaHref="/services/systems"
                        accentColor="blue"
                    />
                    <DivisionCard
                        name="Digital Marketing"
                        tagline="Grow & Scale"
                        features={[
                            'Content Strategy',
                            'SEO & Growth Marketing',
                            'Brand Development'
                        ]}
                        ctaText="Explore Marketing"
                        ctaHref="/services/marketing"
                        accentColor="purple"
                    />
                </div>
            </MegaMenuColumn>

            {/* Right Column - CTA */}
            <MegaMenuColumn type="action">
                <div className="space-y-3">
                    <p className="text-sm text-gray-600 mb-4">
                        Ready to build something?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-5 py-2.5 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary-hover transition-colors"
                    >
                        Book a Strategy Call
                    </Link>
                </div>
            </MegaMenuColumn>
        </MegaMenuContainer>
    );
}

function LabsMenu() {
    return (
        <MegaMenuContainer>
            {/* Left Column - Context */}
            <MegaMenuColumn
                type="context"
                heading="Labs"
                subheading="Our AI-native content and experimentation division."
            />

            {/* Center Column - Labs Services */}
            <MegaMenuColumn type="content">
                <div className="space-y-6">
                    {/* AI Content Studio */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">AI Content Studio</h4>
                        <div className="space-y-2">
                            <Link href="/labs/ai-content" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                Generative AI
                            </Link>
                            <Link href="/labs/visual-content" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                Visual Content Creation
                            </Link>
                            <Link href="/labs/automation" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                Process Optimization
                            </Link>
                        </div>
                    </div>

                    {/* Experiments */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Experiments & R&D</h4>
                        <div className="space-y-2">
                            <Link href="/labs/experiments" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                Latest Experiments
                            </Link>
                            <Link href="/labs/reels" className="block text-sm text-gray-700 hover:text-primary transition-colors">
                                Work & Reels
                            </Link>
                        </div>
                    </div>
                </div>
            </MegaMenuColumn>

            {/* Right Column - CTA */}
            <MegaMenuColumn type="action">
                <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Innovation
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                        Explore What's Possible
                    </h4>
                    <p className="text-xs text-gray-600 mb-3">
                        See how AI is transforming content creation
                    </p>
                    <Link
                        href="/labs"
                        className="text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                    >
                        Enter Labs →
                    </Link>
                </div>
            </MegaMenuColumn>
        </MegaMenuContainer>
    );
}

function PricingMenu() {
    return (
        <MegaMenuContainer>
            {/* Left Column - Context */}
            <MegaMenuColumn
                type="context"
                heading="Pricing"
                subheading="Transparent pricing for projects and partnerships."
            />

            {/* Center Column - Engagement Models */}
            <MegaMenuColumn type="content">
                <div className="space-y-6">
                    {/* Models */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Engagement Models</h4>
                        <div className="space-y-2">
                            <div className="text-sm text-gray-700">
                                <span className="font-medium">Project-Based</span> — Fixed scope, clear timeline
                            </div>
                            <div className="text-sm text-gray-700">
                                <span className="font-medium">Monthly Retainer</span> — Ongoing support & development
                            </div>
                            <div className="text-sm text-gray-700">
                                <span className="font-medium">Build-Operate-Transfer</span> — We build, you own
                            </div>
                        </div>
                    </div>

                </div>
            </MegaMenuColumn>

            {/* Right Column - CTA */}
            <MegaMenuColumn type="action">
                <div>
                    <p className="text-sm text-gray-600 mb-4">
                        Every project is unique. Let's discuss your needs.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-5 py-2.5 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary-hover transition-colors"
                    >
                        Get a Quote
                    </Link>
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

                    {/* Group 4 - Products (Subtle) */}
                    <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Future</h4>
                        <div className="space-y-2">
                            <Link href="/products" className="block text-sm text-gray-500 hover:text-primary transition-colors">
                                Products (Coming Soon)
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


