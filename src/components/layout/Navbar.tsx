'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileNav } from '@/components/layout/MobileNav'; // Restored
import { MegaMenuContainer, MegaMenuColumn } from '@/components/layout/megaMenu';
import { Layout, Palette, Rocket, Code2, ArrowUpRight, Check, Sparkles, FileText, Download, DollarSign } from 'lucide-react';


type MegaMenuKey = 'services' | 'labs' | 'explore' | 'pricing' | null;

export function Navbar() {
    const [activeMenu, setActiveMenu] = useState<MegaMenuKey>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Restored
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [forceHidden, setForceHidden] = useState(false);
    const [showMobileCallButton, setShowMobileCallButton] = useState(false);
    const lastScrollY = useRef(0);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

    // Listen for custom event to hide/show navbar from other components (e.g. ScrollZoomShowcase)
    useEffect(() => {
        const handleToggleNavbar = (e: CustomEvent<{ hidden: boolean }>) => {
            setForceHidden(e.detail.hidden);
        };

        window.addEventListener('mergex:toggle-navbar', handleToggleNavbar as EventListener);
        return () => {
            window.removeEventListener('mergex:toggle-navbar', handleToggleNavbar as EventListener);
        };
    }, []);

    // Handle scroll effect for transparency and hide/show
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Set scrolled state for transparency
            setScrolled(currentScrollY > 50);

            // Show mobile call button on scroll
            if (window.innerWidth < 1024) {
                setShowMobileCallButton(true);
                if (scrollTimeout.current) {
                    clearTimeout(scrollTimeout.current);
                }
                scrollTimeout.current = setTimeout(() => {
                    setShowMobileCallButton(false);
                }, 2000);
            }

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
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);

    return (
        <>
            {/* Backdrop Blur Overlay */}
            <AnimatePresence>
                {activeMenu && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-white/40 backdrop-blur-md z-40"
                        onClick={() => setActiveMenu(null)}
                    />
                )}
            </AnimatePresence>

            {/* Desktop Navbar */}
            <motion.div
                className="hidden lg:block w-full fixed top-0 left-0 right-0 z-50 p-2"
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: (visible && !forceHidden) ? 0 : "-100%",
                    opacity: 1
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <nav
                    className={`
                        w-full transition-all duration-300 ease-in-out
                        ${scrolled || activeMenu ? 'bg-white/95 shadow-lg border-gray-200/50' : 'bg-transparent shadow-none border-transparent'}
                        backdrop-blur-md pl-4 pr-8 h-20 flex items-center justify-between
                        border
                        ${activeMenu ? 'rounded-t-xl' : 'rounded-xl'}
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
                            <span className="font-clash font-bold text-3xl tracking-wide ml-3 text-neutral-900 mt-1" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                                MERGEX
                            </span>
                        </Link>
                        <div className={`hidden lg:block h-20 w-[4px] bg-gray-200 ml-6 transition-opacity duration-300 ${scrolled || activeMenu ? 'opacity-100' : 'opacity-0'}`} />
                    </div>

                    {/* Center Menu */}
                    <div className="flex items-center gap-8 h-full">
                        <NavButton label="Systems" active={activeMenu === 'services'} onEnter={() => setActiveMenu('services')} onLeave={() => setActiveMenu(null)} />
                        <NavButton label="Labs" active={activeMenu === 'labs'} onEnter={() => setActiveMenu('labs')} onLeave={() => setActiveMenu(null)} />
                        <NavButton label="Explore" active={activeMenu === 'explore'} onEnter={() => setActiveMenu('explore')} onLeave={() => setActiveMenu(null)} />
                        {/* Direct Link for Pricing */}
                        <Link href="/pricing" className="relative h-full flex items-center gap-1.5 px-1 text-base font-medium transition-colors text-black/80 hover:text-black">
                            Pricing
                        </Link>
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

                {/* Mega Menus Container - Merged with Navbar */}
                <AnimatePresence>
                    {activeMenu && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            onMouseEnter={() => setActiveMenu(activeMenu)}
                            onMouseLeave={() => setActiveMenu(null)}
                            className="w-full bg-white/95 backdrop-blur-xl border-x border-b border-gray-200/50 shadow-2xl rounded-b-xl overflow-hidden p-5 -mt-px"
                        >
                            {activeMenu === 'services' && <ServicesMenu closeMenu={() => setActiveMenu(null)} />}
                            {activeMenu === 'labs' && <LabsMenu closeMenu={() => setActiveMenu(null)} />}
                            {activeMenu === 'explore' && <ExploreMenu closeMenu={() => setActiveMenu(null)} />}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Mobile Navbar Header - Minimal */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: (visible && !isMobileMenuOpen && !forceHidden) ? 0 : -100 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="lg:hidden fixed top-0 left-0 right-0 z-50 p-2 pointer-events-none"
            >
                <div className={`
                    w-full transition-all duration-300 ease-in-out pointer-events-auto
                    ${scrolled ? 'bg-white/90 shadow-lg border-gray-200/50' : 'bg-transparent border-transparent'}
                    backdrop-blur-xl rounded-xl px-5 h-16 flex items-center justify-between border relative
                `}>
                    {/* Left: Logo Icon */}
                    <Link href="/" className="flex-shrink-0 z-10">
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
                        <span className="font-clash font-bold text-2xl tracking-wide text-neutral-900" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                            MERGEX
                        </span>
                    </div>

                    {/* Right: Hamburger Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 -mr-2 text-foreground/80 focus:outline-none z-10"
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
                </div>
            </motion.div>

            <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

            {/* Mobile Floating Book Call Button - Centered Bottom */}
            <AnimatePresence>
                {showMobileCallButton && !isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-auto"
                    >
                        <Link
                            href="/contact"
                            className="
                                group relative flex items-center gap-2 px-6 py-3 rounded-full overflow-hidden
                                bg-gradient-to-b from-violet-400 to-violet-900
                                text-white font-medium text-base
                                shadow-xl shadow-violet-900/40
                                transition-all duration-200 ease-out
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
            </AnimatePresence>
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

function ServicesMenu({ closeMenu }: { closeMenu: () => void }) {
    return (
        <motion.div
            className="grid grid-cols-12 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
                }
            }}
        >
            {/* Left Column - Positioning (Col-Span-3) */}
            <motion.div
                className="col-span-3 flex flex-col"
                variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
            >
                <h3 className="uppercase tracking-wider font-bold text-xs bg-gradient-to-b from-violet-400 to-violet-900 bg-clip-text text-transparent mb-2">
                    SYSTEMS
                </h3>
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 !leading-[1.1] max-w-[300px]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Build systems that actually scale.
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mt-8 pt-4">
                    Production-ready software without managing multiple vendors or timelines.
                </p>

                <div className="mt-8">
                    <Link
                        href="/systems"
                        onClick={closeMenu}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-all shadow-md group"
                    >
                        Explore Systems <ArrowUpRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>

                {/* Tagline moved to bottom */}
                <p className="text-[11px] italic text-gray-500 mt-auto">
                    From MVPs to full-scale platforms. Built fast. Built right.
                </p>
            </motion.div>

            {/* Center Column - Service Cards (Col-Span-6) */}
            <motion.div
                className="col-span-6 grid grid-cols-2 gap-4"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
            >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="h-full">
                    <ServiceCard
                        icon={<Palette className="w-6 h-6" />}
                        title="Design & Brand Systems"
                        description="Design people trust and remember"
                        tags={['UI/UX design', 'Brand identity']}
                        href="/services/design"
                        closeMenu={closeMenu}
                    />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="h-full">
                    <ServiceCard
                        icon={<Layout className="w-6 h-6" />}
                        title="Web & Digital Experiences"
                        description="Websites that do more than exist"
                        tags={['Business websites', 'Web platforms']}
                        href="/services/web"
                        closeMenu={closeMenu}
                    />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="h-full">
                    <ServiceCard
                        icon={<Rocket className="w-6 h-6" />}
                        title="Product & Platform Building"
                        description="Turn ideas into real products"
                        tags={['MVP development', 'SaaS & Mobile']}
                        href="/services/mvp"
                        closeMenu={closeMenu}
                    />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="h-full">
                    <ServiceCard
                        icon={<Sparkles className="w-6 h-6" />}
                        title="Growth, Automation & Marketing"
                        description="Systems that support growth"
                        tags={['AI automation', 'Digital marketing']}
                        href="/services/growth"
                        closeMenu={closeMenu}
                    />
                </motion.div>
            </motion.div>

            {/* Right Column - CTA (Col-Span-3) */}
            <motion.div
                className="col-span-3 bg-gradient-to-b from-white via-orange-50 to-orange-200/90 rounded-2xl p-6 flex flex-col h-full border border-gray-100 relative overflow-hidden text-center md:text-left group"
                variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
                <div className="relative z-10">
                    <h3 className="font-serif text-2xl font-medium mb-3 text-gray-900">
                        Not sure where to start?
                    </h3>
                    <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                        Tell us what you’re trying to build.<br />
                        We’ll help you find the right system — fast.
                    </p>

                    <Link href="/contact" onClick={closeMenu} className="w-full inline-flex items-center justify-between px-5 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all shadow-md group/btn ring-1 ring-white/10">
                        <span className="font-bold text-sm">Book a Discovery Call</span>
                        <ArrowUpRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Image at bottom */}
                <div className="absolute bottom-[-5%] right-[-10%] w-[120%] h-[120%] translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none opacity-50 md:opacity-100">
                    <Image
                        src="/assets/mockups/cedarwbg.png"
                        alt="Cedar Project Mockup"
                        fill
                        className="object-contain object-bottom"
                        sizes="(max-width: 768px) 100vw, 400px"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

function ServiceCard({ icon, title, description, tags, href, closeMenu }: { icon: React.ReactNode, title: string, description: string, tags: string[], href: string, closeMenu: () => void }) {
    return (
        <Link href={href} onClick={closeMenu} className="group block h-full bg-gray-100 rounded-2xl p-6 hover:bg-gray-200 transition-all duration-300 relative">
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

function LabsMenu({ closeMenu }: { closeMenu: () => void }) {
    return (
        <div className="grid grid-cols-12 gap-8 md:gap-12 p-2">
            {/* Left Side - Positioning & Invitation */}
            <div className="col-span-12 md:col-span-4 flex flex-col justify-between">
                <div>
                    <h3 className="uppercase tracking-wider font-bold text-xs bg-gradient-to-b from-violet-400 to-violet-900 bg-clip-text text-transparent mb-3">
                        MERGEX LABS
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 leading-tight mb-4">
                        Where creativity meets <span className="bg-gradient-to-b from-violet-400 to-violet-900 bg-clip-text text-transparent">intelligence</span>.
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                        An AI-native content studio exploring visuals, motion, and storytelling with intent.
                    </p>
                </div>

                <div className="mt-8 md:mt-0">

                    <div className="flex flex-col items-start gap-3">
                        <Link
                            href="/labs"
                            onClick={closeMenu}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-all shadow-md group"
                        >
                            Explore Labs <ArrowUpRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Side - 3 Focused Exploration Cards */}
            <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <LabsCard
                    title="Generative AI"
                    hook="Human-directed AI workflows for creative generation."
                    href="/labs/ai-content"
                    color="bg-purple-50/50"
                    image="/assets/mockups/genai.jpg.jpeg"
                    closeMenu={closeMenu}
                />
                <LabsCard
                    title="Commercial Visuals & Ads"
                    hook="Creating high-end brand narratives and advertising assets that scale across media."
                    href="/labs/visual-content"
                    color="bg-blue-50/50"
                    video="/assets/mockups/ad.mp4"
                    closeMenu={closeMenu}
                />
                <LabsCard
                    title="Experiments & Explorations"
                    hook="Testing ideas, agents, and creative systems before they scale."
                    href="/labs/experiments"
                    color="bg-emerald-50/50"
                    closeMenu={closeMenu}
                />
            </div>
        </div>
    );
}

function LabsCard({ title, hook, href, color, image, video, closeMenu }: { title: string, hook: string, href: string, color: string, image?: string, video?: string, closeMenu: () => void }) {
    const hasMedia = image || video;

    return (
        <Link href={href} onClick={closeMenu} className={`group ${color} rounded-2xl p-6 flex flex-col min-h-[400px] hover:bg-opacity-100 transition-all duration-300 border border-transparent hover:border-gray-100 relative overflow-hidden`}>

            {/* Background Media - Full Card */}
            {hasMedia && (
                <>
                    <div className="absolute inset-0 z-0">
                        {video ? (
                            <video
                                src={video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        ) : (
                            <Image
                                src={image!}
                                alt={title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        )}
                    </div>
                    {/* Gradient Overlay for text readability - Bottom Up */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </>
            )}

            <div className="relative z-20 h-full flex flex-col justify-between">
                <div className={`w-8 h-8 rounded-full ${hasMedia ? 'bg-white/20 text-white backdrop-blur-md' : 'bg-white/80 text-gray-900 backdrop-blur-sm'} mb-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-sm`}>
                    <ArrowUpRight size={14} />
                </div>

                <div className="mt-auto">
                    <h4 className={`font-serif text-xl font-bold mb-2 leading-tight ${hasMedia ? 'text-white' : 'text-gray-900'}`}>
                        {title}
                    </h4>

                    <p className={`text-xs leading-relaxed font-medium mt-2 ${hasMedia ? 'text-gray-200' : 'text-gray-600'}`}>
                        {hook}
                    </p>
                </div>
            </div>
        </Link>
    );
}

function PricingMenu({ closeMenu }: { closeMenu: () => void }) {
    return (
        <div className="grid grid-cols-12 gap-6">
            {/* Left Side - Positioning + Reassurance */}
            <div className="col-span-3 flex flex-col">
                <h3 className="uppercase tracking-wider font-bold text-xs text-primary mb-2">PRICING</h3>
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 !leading-[1.1] max-w-[300px] mb-3">
                    Transparent pricing. Scoped to your needs.
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    We price based on scope, speed, and complexity — not fixed packages or hourly guesswork.
                </p>
                <p className="text-xs italic text-gray-500">
                    No hidden fees. No bloated retainers.
                </p>
            </div>

            {/* Right Side - 3 Engagement Snapshots */}
            <div className="col-span-9 grid grid-cols-3 gap-4">
                <EngagementSnapshot
                    title="Launch / MVP"
                    subtitle="For early ideas & first launches"
                    description="Fast validation, focused builds, and launch-ready systems."
                    href="/pricing"
                    closeMenu={closeMenu}
                />
                <EngagementSnapshot
                    title="Growth Systems"
                    subtitle="For scaling teams & complex workflows"
                    description="Custom software, automation, and systems that evolve with your business."
                    highlighted
                    href="/pricing"
                    closeMenu={closeMenu}
                />
                <EngagementSnapshot
                    title="Ongoing Partnership"
                    subtitle="For long-term execution & evolution"
                    description="Continuous development, optimization, and strategic collaboration."
                    href="/pricing"
                    closeMenu={closeMenu}
                />
            </div>

            {/* Bottom - Optional Secondary Action */}
            <div className="col-span-12 flex justify-center pt-4 border-t border-gray-200">
                <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="text-sm font-medium text-gray-600 hover:text-black transition-colors inline-flex items-center gap-1.5"
                >
                    Not sure what fits? <span className="font-semibold">Get a scoped estimate →</span>
                </Link>
            </div>
        </div>
    );
}

function EngagementSnapshot({ title, subtitle, description, highlighted, href, closeMenu }: {
    title: string;
    subtitle: string;
    description: string;
    highlighted?: boolean;
    href: string;
    closeMenu: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={closeMenu}
            className={`group block rounded-2xl p-6 transition-all duration-300 relative ${highlighted
                ? 'bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200'
                : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                }`}
        >
            {highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                    Most Popular
                </div>
            )}
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </div>
            <h4 className="font-serif text-xl font-bold mb-1 text-foreground">{title}</h4>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">{subtitle}</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
            <div className="inline-flex items-center gap-1 text-sm font-medium text-black">
                View Pricing
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
        </Link>
    );
}

function ExploreMenu({ closeMenu }: { closeMenu: () => void }) {
    return (
        <div className="grid grid-cols-12 gap-6">
            {/* Left Side - Positioning */}
            <div className="col-span-3 flex flex-col">
                <h3 className="uppercase tracking-wider font-bold text-xs text-primary mb-2">EXPLORE</h3>
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 !leading-[1.1] max-w-[300px] mb-3">
                    How we think, build, and refine systems.
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Our thinking, our work, and the ways people collaborate with us.
                </p>
            </div>

            {/* Right Side - 4 Core Cards */}
            <div className="col-span-9 grid grid-cols-2 gap-4">
                <ExploreCard
                    title="Case Studies"
                    description="Real problems. Real systems. Real outcomes."
                    href="/case-studies"
                    closeMenu={closeMenu}
                />
                <ExploreCard
                    title="About Mergex"
                    description="Who we are, how we think, and why we're structured this way."
                    href="/about"
                    closeMenu={closeMenu}
                />
                <ExploreCard
                    title="Partner With Us"
                    description="Collaborate, refer, or build alongside Mergex."
                    href="/partner"
                    closeMenu={closeMenu}
                />
                <ExploreCard
                    title="Blog & Insights"
                    description="Thoughts from building AI-driven systems and creative work."
                    href="/blog"
                    closeMenu={closeMenu}
                />
            </div>

            {/* Bottom - Simple Links (positioned in left column bottom) */}
            <div className="col-span-3 mt-auto pt-4 border-t border-gray-200">
                <div className="flex flex-col gap-2">
                    <Link href="/contact" onClick={closeMenu} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                        Contact Us
                    </Link>
                    <Link href="/careers" onClick={closeMenu} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                        Careers
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ExploreCard({ title, description, href, closeMenu }: { title: string; description: string; href: string; closeMenu: () => void }) {
    return (
        <Link
            href={href}
            onClick={closeMenu}
            className="group block bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 relative"
        >
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-gray-400" />
            </div>
            <h4 className="font-serif text-xl font-bold mb-2 text-foreground">{title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
            <div className="inline-flex items-center gap-1 text-sm font-medium text-black">
                {title === "Case Studies" && "View Case Studies"}
                {title === "About Mergex" && "About Mergex"}
                {title === "Partner With Us" && "Explore Partnerships"}
                {title === "Blog & Insights" && "Read Insights"}
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
        </Link>
    );
}

