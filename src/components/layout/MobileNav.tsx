'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, FlaskConical, Compass, DollarSign, Layout, Palette, Rocket, Code2, ArrowUpRight, Check, Sparkles, ChevronDown } from 'lucide-react';

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
                        className="fixed inset-0 z-[61] p-2 flex flex-col pointer-events-none"
                    >
                        <div className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col pointer-events-auto shadow-2xl relative">

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
                                        {activeMenu === 'pricing' && <MobilePricingContent onClose={onClose} />}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Bottom Navigation */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-auto">
                                <div className="flex items-center gap-1 bg-gray-100/80 backdrop-blur-xl border border-white/50 p-1.5 rounded-full shadow-lg">
                                    {menuItems.map((item) => {
                                        const isActive = activeMenu === item.key;
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
    // Keep track of which accordion is open (null = none)
    const [openCard, setOpenCard] = useState<string | null>(null);

    const toggleCard = (title: string) => {
        setOpenCard(openCard === title ? null : title);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
                <h3 className="uppercase tracking-wider font-bold text-xs bg-gradient-to-b from-violet-400 to-violet-900 bg-clip-text text-transparent">
                    SYSTEMS
                </h3>
                <p className="text-2xl font-serif font-medium text-gray-900 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Build systems that actually scale.
                </p>
            </div>

            {/* Accordion Service Cards Grid */}
            <div className="flex flex-col gap-3">
                <AccordionServiceCard
                    icon={<Palette className="w-4 h-4" />}
                    title="Design & Brand Systems"
                    description="Design people trust and remember"
                    tags={['UI/UX design', 'Brand identity']}
                    href="/services/design"
                    isOpen={openCard === "Design & Brand Systems"}
                    onToggle={() => toggleCard("Design & Brand Systems")}
                    onClose={onClose}
                />
                <AccordionServiceCard
                    icon={<Layout className="w-4 h-4" />}
                    title="Web & Digital Experiences"
                    description="Websites that do more than exist"
                    tags={['Business websites', 'Web platforms']}
                    href="/services/web"
                    isOpen={openCard === "Web & Digital Experiences"}
                    onToggle={() => toggleCard("Web & Digital Experiences")}
                    onClose={onClose}
                />
                <AccordionServiceCard
                    icon={<Rocket className="w-4 h-4" />}
                    title="Product & Platform Building"
                    description="Turn ideas into real products"
                    tags={['MVP development', 'SaaS & Mobile']}
                    href="/services/mvp"
                    isOpen={openCard === "Product & Platform Building"}
                    onToggle={() => toggleCard("Product & Platform Building")}
                    onClose={onClose}
                />
                <AccordionServiceCard
                    icon={<Sparkles className="w-4 h-4" />}
                    title="Growth, Automation & Marketing"
                    description="Systems that support growth"
                    tags={['AI automation', 'Digital marketing']}
                    href="/services/growth"
                    isOpen={openCard === "Growth, Automation & Marketing"}
                    onToggle={() => toggleCard("Growth, Automation & Marketing")}
                    onClose={onClose}
                />
            </div>

            {/* CTA Section with Cedar Image */}
            <Link
                href="/contact"
                onClick={onClose}
                className="block bg-gradient-to-b from-white via-orange-50 to-orange-200/90 rounded-2xl p-6 pt-8 pb-32 relative overflow-hidden border border-gray-100 group min-h-[320px]"
            >
                <div className="relative z-10 space-y-3">
                    <h3 className="font-serif text-2xl font-medium text-gray-900 leading-tight max-w-[80%]">
                        Not sure where to start?
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-[90%]">
                        Tell us what you're trying to build. We'll help you find the right system — fast.
                    </p>

                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl text-sm font-medium shadow-md mt-2">
                        <span>Book a Discovery Call</span>
                        <ArrowUpRight size={14} />
                    </div>
                </div>

                {/* Cedar Mockup Image */}
                <div className="absolute bottom-[-5%] right-[-10%] w-[130%] h-[130%] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                    <Image
                        src="/assets/mockups/cedarwbg.png"
                        alt="Cedar Project Mockup"
                        fill
                        className="object-contain object-bottom"
                        sizes="400px"
                    />
                </div>
            </Link>

            {/* Explore Systems CTA */}
            <Link
                href="/systems"
                onClick={onClose}
                className="block w-full py-3.5 bg-gradient-to-b from-violet-400 to-violet-900 text-white text-center rounded-xl font-medium transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-violet-900/30"
            >
                Explore All Systems
            </Link>
        </div>
    );
}

// LABS TAB CONTENT
function MobileLabsContent({ onClose }: { onClose: () => void }) {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
                <h3 className="uppercase tracking-wider font-bold text-xs bg-gradient-to-b from-violet-400 to-violet-900 bg-clip-text text-transparent">
                    MERGEX LABS
                </h3>
                <p className="text-2xl font-serif font-medium text-gray-900 leading-tight">
                    Where creativity meets <span className="bg-gradient-to-b from-violet-400 to-violet-900 bg-clip-text text-transparent">intelligence</span>.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                    An AI-native content studio exploring visuals, motion, and storytelling with intent.
                </p>
            </div>

            {/* Labs Cards */}
            <div className="space-y-3">
                <MobileLabsCard
                    title="Generative AI"
                    hook="Human-directed AI workflows for creative generation."
                    href="/labs/ai-content"
                    color="bg-purple-50/50"
                    image="/assets/mockups/genai.jpg.jpeg"
                    onClose={onClose}
                />
                <MobileLabsCard
                    title="Commercial Visuals & Ads"
                    hook="Creating high-end brand narratives and advertising assets that scale across media."
                    href="/labs/visual-content"
                    color="bg-blue-50/50"
                    video="/assets/mockups/ad.mp4"
                    onClose={onClose}
                />
                <MobileLabsCard
                    title="Experiments & Explorations"
                    hook="Testing ideas, agents, and creative systems before they scale."
                    href="/labs/experiments"
                    color="bg-emerald-50/50"
                    onClose={onClose}
                />
            </div>

            {/* Explore Labs CTA */}
            <Link
                href="/labs"
                onClick={onClose}
                className="block w-full py-3.5 bg-gradient-to-b from-violet-400 to-violet-900 text-white text-center rounded-xl font-medium transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-violet-900/30"
            >
                Enter Labs
            </Link>
        </div>
    );
}

// EXPLORE TAB CONTENT
function MobileExploreContent({ onClose }: { onClose: () => void }) {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
                <h3 className="uppercase tracking-wider font-bold text-xs bg-gradient-to-b from-violet-400 to-violet-900 bg-clip-text text-transparent">
                    EXPLORE
                </h3>
                <p className="text-2xl font-serif font-medium text-gray-900 leading-tight">
                    See how we think, build, and evolve.
                </p>
            </div>

            {/* Quick Links */}
            <div className="flex gap-3 flex-wrap justify-center">
                <Link href="/explore" onClick={onClose} className="text-sm font-medium underline underline-offset-4 text-gray-700">Read Blog</Link>
                <Link href="/about" onClick={onClose} className="text-sm font-medium underline underline-offset-4 text-gray-700">About Us</Link>
            </div>

            {/* Menu Items Grid */}
            <div className="space-y-2">
                <MobileMenuItem href="/explore/case-studies" label="Case Studies" onClose={onClose} />
                <MobileMenuItem href="/explore/portfolio" label="Portfolio" onClose={onClose} />
                <MobileMenuItem href="/explore/blog" label="Blog" onClose={onClose} />
                <MobileMenuItem href="/resources" label="Resources" onClose={onClose} />
                <MobileMenuItem href="/about" label="About Us" onClose={onClose} />
                <MobileMenuItem href="/careers" label="Careers" onClose={onClose} />
            </div>

            {/* Download CTA */}
            <div className="bg-black text-white rounded-2xl p-6 space-y-4">
                <h3 className="font-serif text-xl font-medium">Download free templates</h3>
                <Link
                    href="/resources"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                    Download Now <ArrowUpRight size={14} />
                </Link>
            </div>

            {/* Explore More CTA */}
            <Link
                href="/explore"
                onClick={onClose}
                className="block w-full py-3.5 bg-gradient-to-b from-violet-400 to-violet-900 text-white text-center rounded-xl font-medium transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-violet-900/30"
            >
                Explore More
            </Link>
        </div>
    );
}

// PRICING TAB CONTENT
function MobilePricingContent({ onClose }: { onClose: () => void }) {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
                <h3 className="uppercase tracking-wider font-bold text-xs bg-gradient-to-b from-violet-400 to-violet-900 bg-clip-text text-transparent">
                    PRICING
                </h3>
                <p className="text-2xl font-serif font-medium text-gray-900 leading-tight">
                    Transparent pricing for projects and partnerships.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="space-y-4">
                <MobilePricingCard
                    title="Founders & early teams"
                    price="From $4,999"
                    features={['High-converting website', 'Investor-ready pitch deck', 'Brand identity', 'MVP Product']}
                    href="/pricing/startups"
                    onClose={onClose}
                />
                <MobilePricingCard
                    title="Scale-ups & enterprise"
                    price="Custom"
                    features={['Pod-based engagement', 'Multiple pods', 'Design systems', 'Dedicated Support']}
                    href="/contact"
                    dark
                    onClose={onClose}
                />
            </div>

            {/* Book Call CTA */}
            <Link
                href="/contact"
                onClick={onClose}
                className="block w-full py-3.5 bg-gradient-to-b from-violet-400 to-violet-900 text-white text-center rounded-xl font-medium transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-violet-900/30"
            >
                Book a Discovery Call
            </Link>
        </div>
    );
}

// Helper Components
interface AccordionServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    tags: string[];
    href: string;
    isOpen: boolean;
    onToggle: () => void;
    onClose: () => void;
}

function AccordionServiceCard({ icon, title, description, tags, href, isOpen, onToggle, onClose }: AccordionServiceCardProps) {
    return (
        <div
            className={`
                bg-gray-100/80 rounded-xl overflow-hidden transition-all duration-300
                ${isOpen ? 'bg-white shadow-lg ring-1 ring-black/5' : 'hover:bg-gray-100'}
            `}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center gap-3 p-3 text-left"
            >
                <div className={`
                    w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300
                    ${isOpen ? 'bg-black text-white shadow-md scale-105' : 'bg-white text-black shadow-sm'}
                `}>
                    {icon}
                </div>
                <div className="flex-1 font-serif text-base font-bold text-gray-900">
                    {title}
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400"
                >
                    <ChevronDown size={18} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-3 pb-4 pt-0">
                            <p className="text-xs text-gray-600 mb-3 leading-relaxed ml-11">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-3 ml-11">
                                {tags.map((tag, i) => (
                                    <span key={i} className="px-2 py-0.5 bg-gray-50 border border-gray-100 text-gray-600 text-[9px] uppercase tracking-wide font-semibold rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href={href}
                                onClick={onClose}
                                className="w-full flex items-center justify-center gap-2 py-2.5 bg-black text-white rounded-lg text-xs font-medium hover:bg-gray-800 transition-colors ml-11 max-w-[calc(100%-2.75rem)]"
                            >
                                View Details <ArrowUpRight size={12} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function MobileLabsCard({ title, hook, href, color, image, video, onClose }: { title: string, hook: string, href: string, color: string, image?: string, video?: string, onClose: () => void }) {
    const hasMedia = image || video;

    return (
        <Link href={href} onClick={onClose} className={`group ${color} rounded-xl p-4 flex flex-col min-h-[160px] hover:bg-opacity-100 transition-all duration-300 border border-transparent hover:border-gray-100 relative overflow-hidden active:scale-[0.98]`}>

            {/* Background Media */}
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
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </>
            )}

            <div className="relative z-20 h-full flex flex-col justify-between">
                <div className={`w-8 h-8 rounded-full ${hasMedia ? 'bg-white/20 text-white backdrop-blur-md' : 'bg-white/80 text-gray-900 backdrop-blur-sm'} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-sm self-end`}>
                    <ArrowUpRight size={14} />
                </div>

                <div className="mt-auto">
                    <h4 className={`font-serif text-lg font-bold mb-2 leading-tight ${hasMedia ? 'text-white' : 'text-gray-900'}`}>
                        {title}
                    </h4>

                    <p className={`text-xs leading-relaxed font-medium ${hasMedia ? 'text-gray-200' : 'text-gray-600'}`}>
                        {hook}
                    </p>
                </div>
            </div>
        </Link>
    );
}

function MobilePricingCard({ title, price, features, href, dark, onClose }: { title: string, price: string, features: string[], href: string, dark?: boolean, onClose: () => void }) {
    return (
        <div className={`rounded-2xl p-6 flex flex-col ${dark ? 'bg-gradient-to-br from-gray-900 to-black text-white' : 'bg-gray-50 text-foreground'}`}>
            <h4 className="font-serif text-xl font-bold mb-2">{title}</h4>
            <p className="text-lg font-medium opacity-80 mb-6">{price}</p>

            <ul className="space-y-3 mb-6 flex-1">
                {features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm opacity-80">
                        <Check size={16} className="mt-0.5 flex-shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>

            <Link href={href} onClick={onClose} className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-colors group ${dark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                <span className="font-medium">Book a Discovery Call</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
        </div>
    );
}

function MobileMenuItem({ href, label, onClose }: { href: string; label: string; onClose: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClose}
            className="block py-3.5 px-4 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all font-medium"
        >
            {label}
        </Link>
    );
}
