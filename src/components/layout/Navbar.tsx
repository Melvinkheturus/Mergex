'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileNav } from '@/components/layout/MobileNav';
import { MegaMenuContainer, MegaMenuColumn } from '@/components/layout/megaMenu'; // Removed DivisionCard, ProductCard as likely unused in new layout or standard import
import { Layout, Palette, Rocket, Code2, ArrowUpRight, Check, Sparkles, FileText, Download } from 'lucide-react';


type MegaMenuKey = 'services' | 'labs' | 'explore' | 'pricing' | null;

export function Navbar() {
    const [activeMenu, setActiveMenu] = useState<MegaMenuKey>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);

    // Handle scroll effect for transparency and hide/show
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Set scrolled state for transparency
            setScrolled(currentScrollY > 50);

            // Show navbar when scrolling up, hide when scrolling down
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scrolling down & past threshold
                setVisible(false);
            } else {
                // Scrolling up or at top
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navbar */}
            <motion.div
                className="hidden lg:block w-full fixed top-0 left-0 right-0 z-50 p-2"
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: visible ? 0 : "-100%",
                    opacity: 1
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
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
            </motion.div>

            {/* Mobile Navbar */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: visible ? 0 : -100 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="lg:hidden fixed top-0 left-0 right-0 z-50 p-2"
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



function NavButton({ label, active, onEnter, onLeave, hasDropdown = true }: { label: string; active: boolean; onEnter: () => void; onLeave: () => void; hasDropdown?: boolean }) {
    return (
        <button
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className={`
                relative h-full flex items-center gap-1.5 px-1 text-base font-medium transition-colors group
                ${active ? 'text-black' : 'text-black/80 hover:text-black'}
            `}
        >
            {label}
            {hasDropdown && (
                <NavArrowIcon
                    className={`text-gray-400 transition-transform duration-300 group-hover:text-black ${active ? 'rotate-180' : ''}`}
                />
            )}
            {active && (
                <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 w-full h-1 bg-black rounded-t-full"
                    transition={{ duration: 0.3 }}
                />
            )}
        </button>
    );
}

function NavArrowIcon({ className }: { className?: string }) {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M15.0002 9.00005V15.0001M15.0002 15.0001H9.00019M15.0002 15.0001L9.00019 8.99994M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}



// ... (NavButton and Navbar logic remains same)

function ServicesMenu() {
    return (
        <div className="grid grid-cols-12 gap-8">
            {/* Left Column - Context (Col-Span-3) */}
            <div className="col-span-3 space-y-4">
                <h3 className="uppercase tracking-wider font-bold text-xs text-primary mb-2">
                    Services
                </h3>
                <p className="text-3xl md:text-4xl font-serif font-medium text-gray-900 !leading-[1.1] max-w-[300px]">
                    Designing, building, and automating production-ready systems.
                </p>
            </div>

            {/* Center Column - Service Divisions (Col-Span-6) */}
            <div className="col-span-6 grid grid-cols-2 gap-4">
                <ServiceCard
                    icon={<Layout className="w-6 h-6" />}
                    title="UI/UX Design"
                    description="Creating User friendly Digital Experiences"
                    tags={['UI/UX Consulting', 'Design System']}
                    href="/services/design"
                />
                <ServiceCard
                    icon={<Palette className="w-6 h-6" />}
                    title="Branding"
                    description="Shaping Brands People Trust and Remember"
                    tags={['Brand Identity', 'Strategy']}
                    href="/services/branding"
                />
                <ServiceCard
                    icon={<Rocket className="w-6 h-6" />}
                    title="MVP"
                    description="Turning Ideas into Market-Ready Products"
                    tags={['MVP for Startup', 'SaaS Design']}
                    href="/services/mvp"
                />
                <ServiceCard
                    icon={<Code2 className="w-6 h-6" />}
                    title="Full Stack"
                    description="From Frontend to Backend, Built to Scale"
                    tags={['Custom App', 'Webflow']}
                    href="/services/development"
                />
            </div>

            {/* Right Column - CTA (Col-Span-3) */}
            <div className="col-span-3 bg-gray-50 rounded-2xl p-6 flex flex-col h-full">
                <h3 className="font-serif text-2xl font-medium mb-6">Scale-ups & enterprise</h3>
                <ul className="space-y-3 mb-8 flex-1">
                    {['Pod-based engagement', 'Design system rollout', 'WCAG 2.2 AA Compliance'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
                <Link href="/contact" className="w-full flex items-center justify-between px-6 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors group">
                    <span className="font-medium">Book a Call</span>
                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                        <ArrowUpRight size={16} />
                    </div>
                </Link>
                <div className="mt-6 relative h-24 w-full rounded-xl overflow-hidden bg-gradient-to-br from-orange-100 to-rose-100 border border-orange-200/50">
                    <div className="absolute inset-x-8 bottom-[-20px] h-full bg-black rounded-t-xl opacity-80 shadow-2xl" />
                </div>
            </div>
        </div>
    );
}

function ServiceCard({ icon, title, description, tags, href }: { icon: React.ReactNode, title: string, description: string, tags: string[], href: string }) {
    return (
        <Link href={href} className="group block h-full bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 relative">
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 text-black shadow-sm group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h4 className="font-serif text-xl font-bold mb-2 text-foreground">{title}</h4>
            <p className="text-sm text-gray-500 mb-6 line-clamp-2">{description}</p>
            <div className="flex flex-wrap gap-2">
                {tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-gray-100 text-gray-600 text-[10px] uppercase tracking-wide font-semibold rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}

function LabsMenu() {
    return (
        <div className="grid grid-cols-12 gap-8">
            <div className="col-span-3 space-y-4">
                <h3 className="uppercase tracking-wider font-bold text-xs text-primary mb-2">Labs</h3>
                <p className="text-3xl md:text-4xl font-serif font-medium text-gray-900 !leading-[1.1] max-w-[300px]">
                    Our AI-native content and experimentation division.
                </p>
                <Link href="/labs" className="inline-flex items-center gap-2 text-sm font-medium mt-4 group">
                    View All Labs <ArrowUpRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="col-span-9 grid grid-cols-3 gap-6">
                <LabsCard
                    title="Generative AI"
                    description="AI-driven content production at scale."
                    color="bg-purple-100"
                    href="/labs/ai-content"
                />
                <LabsCard
                    title="Visual Content"
                    description="High-end motion and static visuals."
                    color="bg-blue-100"
                    href="/labs/visual-content"
                />
                <LabsCard
                    title="Experiments"
                    description="R&D in agents and automation."
                    color="bg-emerald-100"
                    href="/labs/experiments"
                />
            </div>
        </div>
    );
}

function LabsCard({ title, description, color, href }: { title: string, description: string, color: string, href: string }) {
    return (
        <Link href={href} className="group bg-gray-50 rounded-2xl p-6 flex flex-col h-full hover:bg-gray-100 transition-colors relative overflow-hidden">
            <h4 className="font-serif text-2xl font-bold mb-2">{title}</h4>
            <p className="text-sm text-gray-600 mb-8">{description}</p>
            <div className={`mt-auto w-full aspect-[4/5] rounded-xl ${color} relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                {/* Placeholder for "Phone" or "Visual" */}
                <div className="absolute inset-x-8 bottom-[-40px] top-12 bg-white rounded-t-2xl shadow-xl opacity-90" />
            </div>
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-gray-400" />
            </div>
        </Link>
    );
}

function PricingMenu() {
    return (
        <div className="grid grid-cols-12 gap-8">
            <div className="col-span-3 space-y-4">
                <h3 className="uppercase tracking-wider font-bold text-xs text-primary mb-2">Pricing</h3>
                <p className="text-3xl md:text-4xl font-serif font-medium text-gray-900 !leading-[1.1] max-w-[300px]">
                    Transparent pricing for projects and partnerships.
                </p>
            </div>

            <div className="col-span-9 grid grid-cols-2 gap-6">
                <PricingCard
                    title="Funder & early teams"
                    price="From $4,999"
                    features={['High-converting website', 'Investor-ready pitch deck', 'Brand identity', 'MVP Product']}
                    href="/pricing/startups"
                />
                <PricingCard
                    title="Scale-ups & enterprise"
                    price="Custom"
                    features={['Pod-based engagement', 'Multiple pods', 'Design systems', 'Dedicated Support']}
                    href="/contact"
                    dark
                />
            </div>
        </div>
    );
}

function PricingCard({ title, price, features, href, dark }: { title: string, price: string, features: string[], href: string, dark?: boolean }) {
    return (
        <div className={`rounded-2xl p-8 flex flex-col h-full ${dark ? 'bg-gradient-to-br from-gray-900 to-black text-white' : 'bg-gray-50 text-foreground'}`}>
            <h4 className="font-serif text-2xl font-bold mb-2">{title}</h4>
            <p className="text-lg font-medium opacity-80 mb-6">{price}</p>

            <ul className="space-y-3 mb-8 flex-1">
                {features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm opacity-80">
                        <Check size={16} className="mt-0.5 flex-shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>

            <Link href={href} className={`w-full flex items-center justify-between px-6 py-4 rounded-full transition-colors group ${dark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                <span className="font-medium">Book a Discovery Call</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transform group-hover:translate-x-1 transition-transform ${dark ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    <ArrowUpRight size={16} />
                </div>
            </Link>
        </div>
    );
}

function ExploreMenu() {
    return (
        <div className="grid grid-cols-12 gap-8">
            <div className="col-span-3 space-y-4">
                <h3 className="uppercase tracking-wider font-bold text-xs text-primary mb-2">Explore</h3>
                <p className="text-3xl md:text-4xl font-serif font-medium text-gray-900 !leading-[1.1] max-w-[300px]">
                    See how we think, build, and evolve.
                </p>
                <div className="flex gap-2 flex-wrap">
                    <Link href="/explore" className="text-sm font-medium underline underline-offset-4">Read Blog</Link>
                    <Link href="/about" className="text-sm font-medium underline underline-offset-4">About Us</Link>
                </div>
            </div>

            <div className="col-span-6 grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1 space-y-4">
                    <h4 className="font-serif text-xl font-medium">Resources & Blogs</h4>
                    <p className="text-sm text-gray-500">Explore ready-made templates and insights.</p>
                </div>
                {/* Blog Cards */}
                <BlogCard title="Top 10 Healthcare Website Design" category="Trends" href="/blog/healthcare-design" />
                <BlogCard title="Best Rebranding Agencies 2025" category="Guide" href="/blog/rebranding" />
            </div>

            <div className="col-span-3 bg-black text-white rounded-2xl p-6 flex flex-col justify-between h-full relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="font-serif text-2xl font-medium mb-4">Download free templates</h3>
                    <Link href="/resources" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                        Download Now <ArrowUpRight size={14} />
                    </Link>
                </div>
                {/* Abstract BG */}
                <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 bg-gray-800 rounded-full blur-2xl opacity-50" />
            </div>
        </div>
    );
}

function BlogCard({ title, category, href }: { title: string, category: string, href: string }) {
    return (
        <Link href={href} className="group block bg-gray-50 rounded-2xl p-5 hover:bg-gray-100 transition-colors">
            <div className="aspect-video bg-gray-200 rounded-lg mb-4 w-full" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">{category}</span>
            <h4 className="font-serif text-lg font-medium mt-2 group-hover:underline decoration-1 underline-offset-4">{title}</h4>
        </Link>
    );
}
