"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Zap, Check, Clock, Calendar, MessageSquare, BriefcaseBusiness } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { Ripple } from "@/components/ui/ripple";

const playfair = Playfair_Display({
    subsets: ["latin"],
    style: ["italic"],
    weight: ["400", "500", "600"],
});

// --- Links & Config ---
const PRIORITY_LINK = "https://rzp.io/l/mergex-priority";
const FREE_CALL_LINK = "https://cal.com/mergex/discovery";

export default function ContactPageContent() {
    const [selectedPath, setSelectedPath] = useState<'free' | 'priority' | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isSubmitted) {
        return <SuccessState name={name} />;
    }

    return (
        <div className="w-full py-4 md:py-6">
            {/* Section 1: Hero - Full Width Immersive */}
            <header className="relative mb-12 md:mb-20 pt-2 lg:pt-4 overflow-hidden md:overflow-visible px-4 sm:px-10 lg:px-16 xl:px-24">
                {/* Background Hero Image - Immersive */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute top-0 right-0 w-full h-full pointer-events-none z-0 overflow-hidden"
                >
                    <div className="relative w-full h-full">
                        <img
                            src="/background/parent/Contact hero.jpeg"
                            alt=""
                            className="w-full h-full object-contain object-right opacity-90"
                        />
                        {/* Blending Gradients - Kept separate as requested */}
                        {/* LEFT Overlay - Widened to overlap right-aligned image */}
                        <div className="absolute inset-y-0 left-0 w-3/4 bg-linear-to-r from-background to-transparent pointer-events-none" />

                        {/* BOTTOM Overlay */}
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-background to-transparent pointer-events-none" />
                    </div>
                </motion.div>

                <div className="relative z-10 max-w-4xl">
                    <div className="inline-block px-3 py-1 rounded-full bg-linear-to-b from-violet-400 to-violet-600 shadow-sm shadow-violet-500/20 text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                        Get in touch
                    </div>
                    <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-display font-medium text-foreground tracking-tight leading-[1.05] mb-8">
                        Tell us what <br />
                        <span className={`${playfair.className} text-foreground font-normal italic drop-shadow-sm`}>you&apos;re building.</span>
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
                        Every engagement starts with clarity.<br />
                        Share where you are, we&apos;ll help you see what&apos;s next.
                    </p>
                    <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground/80 font-medium">
                        <div className="flex items-center justify-center p-1 rounded-full bg-emerald-500/10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                        </div>
                        Real person responds within 24 hours. No automated replies.
                    </div>
                </div>
            </header>

            {/* Section 2: Path Selection */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <section className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-12 text-center">
                        Choose how you&apos;d like to connect
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Free Card */}
                        <div
                            onClick={() => setSelectedPath('free')}
                            className={`relative cursor-pointer transition-all duration-500 p-8 rounded-3xl border flex flex-col gap-6 group hover:-translate-y-2 shadow-[20px_20px_60px_rgba(139,92,246,0.08)] hover:shadow-[30px_30px_80px_rgba(139,92,246,0.15)] ${selectedPath === 'free'
                                ? 'border-primary bg-primary/4'
                                : 'border-neutral-100 bg-white hover:border-primary/30'
                                }`}
                        >
                            <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(139,92,246,0.02)]" />
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                                    <MessageSquare className="w-5 h-5 text-foreground" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-2xl font-bold">Free</span>
                                </div>
                                <h3 className="text-lg font-medium text-foreground mb-2">Discovery call</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    A focused conversation. No commitment, no pressure.
                                </p>
                            </div>
                            <ul className="space-y-3 mt-auto">
                                <li className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Check className="w-3 h-3 text-emerald-500" /> 30 min strategy conversation
                                </li>
                                <li className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Check className="w-3 h-3 text-emerald-500" /> Response within 24 hours
                                </li>
                                <li className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Check className="w-3 h-3 text-emerald-500" /> No obligation
                                </li>
                            </ul>
                        </div>

                        {/* Priority Card */}
                        <div
                            onClick={() => setSelectedPath('priority')}
                            className={`relative cursor-pointer transition-all duration-500 p-8 rounded-3xl border flex flex-col gap-6 group overflow-hidden hover:-translate-y-2 shadow-[20px_20px_60px_rgba(139,92,246,0.08)] hover:shadow-[30px_30px_80px_rgba(139,92,246,0.15)] ${selectedPath === 'priority'
                                ? 'border-violet-500 bg-violet-50/50'
                                : 'border-neutral-100 bg-white hover:border-violet-400/30'
                                }`}
                        >
                            <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(139,92,246,0.02)]" />
                            {/* Fastest Badge */}
                            <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-violet-600 text-[10px] font-bold text-white uppercase tracking-tighter">
                                Fastest
                            </div>

                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-violet-600 fill-violet-600" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-2xl font-bold text-violet-600">₹299</span>
                                </div>
                                <h3 className="text-lg font-medium text-foreground mb-2">Priority architect access</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Skip the queue. Direct access to a Mergex architect today.
                                </p>
                            </div>
                            <ul className="space-y-3 mt-auto">
                                <li className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Check className="w-3 h-3 text-violet-500" /> Immediate attention
                                </li>
                                <li className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Check className="w-3 h-3 text-violet-500" /> Direct architect access
                                </li>
                                <li className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Check className="w-3 h-3 text-violet-500" /> Same-day response
                                </li>
                            </ul>
                            <div className="mt-4 px-3 py-2 rounded-lg bg-emerald-50 border border-emerald-100 text-[10px] font-bold text-emerald-700 uppercase tracking-tight text-center">
                                ₹299 credited toward your project
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Section 3: Form - Immersive Full Width */}
            <AnimatePresence mode="wait">
                {selectedPath && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mb-20 relative w-full overflow-hidden"
                    >
                        {/* Form Section Background - Full Width Immersive */}
                        <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
                            <img
                                src="/background/parent/contact 2.png"
                                alt=""
                                className="w-full h-full object-cover object-left pointer-events-none"
                            />
                            {/* Top Fade Overlay */}
                            <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background to-transparent pointer-events-none" />
                            {/* Bottom Fade Overlay */}
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none" />
                        </div>

                        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 xl:px-24">
                            <div className="flex justify-end items-start md:pt-4">
                                <div className="w-full md:w-1/2 lg:w-[45%] pt-8 md:pt-14 pb-24 md:pb-40 -mt-2">
                                    <div className="mb-10 text-left">
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-amber-600/80 uppercase tracking-widest mb-4">
                                            <Clock className="w-3 h-3" />
                                            Limited project spots monthly &bull; Available now
                                        </div>
                                        <h2 className="text-2xl md:text-4xl font-display font-medium text-foreground tracking-tight mb-3">
                                            {selectedPath === 'priority'
                                                ? "Start priority access, we'll reach out today."
                                                : "Start the conversation"}
                                        </h2>
                                        <p className="text-muted-foreground text-sm md:text-base">
                                            {selectedPath === 'priority'
                                                ? "You're skipping the queue. Let's get your project moving."
                                                : "No pressure, just a starting point for something great."}
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <label htmlFor="name" className="text-[13px] font-medium text-foreground/80">
                                                    Your name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Arjun Mehta"
                                                    className="w-full h-12 bg-white/40 border border-gray-200 focus:bg-white focus:border-foreground/20 focus:ring-0 rounded-lg px-5 text-sm text-foreground transition-all duration-300"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label htmlFor="email" className="text-[13px] font-medium text-foreground/80">
                                                    Email address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="arjun@studio.com"
                                                    className="w-full h-12 bg-white/40 border border-gray-200 focus:bg-white focus:border-foreground/20 focus:ring-0 rounded-lg px-5 text-sm text-foreground transition-all duration-300"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label htmlFor="message" className="text-[13px] font-medium text-foreground/80">
                                                What are you building - and what&apos;s in the way?
                                            </label>
                                            <textarea
                                                id="message"
                                                required
                                                rows={4}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Tell us about your project, the challenge you're facing, or the system you want to build. No need to have it all figured out."
                                                className="w-full bg-white/40 border border-gray-200 focus:bg-white focus:border-foreground/20 focus:ring-0 rounded-lg p-5 text-sm text-foreground leading-relaxed transition-all duration-300 resize-y min-h-[120px]"
                                            />
                                        </div>

                                        <div className="flex flex-col items-start gap-4 -mt-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="group relative w-full md:w-auto min-w-[240px] h-14 bg-linear-to-b from-violet-400 to-violet-900 text-white font-bold text-base rounded-xl overflow-hidden shadow-lg shadow-violet-900/30 transition-all hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                                            >
                                                {!isSubmitting && (
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/fpvaxfly.json"
                                                        trigger="loop-on-hover"
                                                        state="morph-phone-ring"
                                                        colors="primary:#ffffff"
                                                        style={{ width: '24px', height: '24px' }}
                                                    />
                                                )}
                                                <span className="relative z-10">
                                                    {isSubmitting ? "Sending..." : "Start Conversation"}
                                                </span>
                                            </button>

                                            <div className="flex flex-col items-start gap-1">
                                                <p className="text-xs text-muted-foreground font-medium">
                                                    We read every message. Expect a human reply within 24 hours.
                                                </p>
                                                <div className="flex items-center gap-3 mt-1 text-[9px] font-bold text-muted-foreground/50 uppercase tracking-widest">
                                                    <span className="flex items-center gap-1.5">
                                                        <Check className="w-2.5 h-2.5 text-emerald-500" />
                                                        No automated replies
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <Check className="w-2.5 h-2.5 text-emerald-500" />
                                                        Direct access
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>


            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mt-20">
                {/* Section 4: What Happens Next */}
                <section className="mb-24 py-20 border-t border-border/60">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-4xl font-display font-medium text-foreground tracking-tight mb-16 text-center">
                            What happens after you send
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                            <div className="flex flex-col items-center text-center gap-5">
                                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-xl font-display font-medium">1</div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">Review</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        We read every message and assess the fit for Mergex.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center gap-5">
                                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-xl font-display font-medium">2</div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">Discovery</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        If there&apos;s a fit, we reach out for a focused strategy conversation.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center gap-5">
                                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-xl font-display font-medium">3</div>
                                <div>
                                    <h3 className="text-lg font-bold text-foreground mb-2">Proposal</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        You get a clear scope, roadmap, and quote. No ambiguity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: Other Ways to Reach Us */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-4xl font-display font-medium text-foreground tracking-tight mb-16 text-center">
                        Other ways to reach us
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <a href="mailto:hello@mergex.in" className="process-card p-8 rounded-3xl bg-linear-to-br from-violet-50/50 to-white transition-all duration-500 hover:-translate-y-2 border border-neutral-200 shadow-[20px_20px_60px_rgba(139,92,246,0.08)] hover:shadow-[30px_30px_80px_rgba(139,92,246,0.15)] group relative block">
                            <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2px_rgba(139,92,246,0.02)]" />
                            <span className="text-[10px] font-bold uppercase tracking-widest mb-4 block bg-linear-to-b from-violet-400 to-violet-900 bg-clip-text text-transparent">Email</span>
                            <span className="text-lg font-medium text-foreground block mb-1 group-hover:text-primary transition-colors">hello@mergex.in</span>
                            <p className="text-xs text-muted-foreground">For all enquiries</p>
                        </a>
                        <a href="https://wa.me/919042172025" target="_blank" rel="noopener noreferrer" className="process-card p-8 rounded-3xl bg-linear-to-br from-violet-50/50 to-white transition-all duration-500 hover:-translate-y-2 border border-neutral-200 shadow-[20px_20px_60px_rgba(139,92,246,0.08)] hover:shadow-[30px_30px_80px_rgba(139,92,246,0.15)] group relative block">
                            <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2_rgba(139,92,246,0.02)]" />
                            <span className="text-[10px] font-bold uppercase tracking-widest mb-4 block bg-linear-to-b from-violet-400 to-violet-900 bg-clip-text text-transparent">WhatsApp</span>
                            <span className="text-lg font-medium text-foreground block mb-1 group-hover:text-primary transition-colors">+91 90421 72025</span>
                            <p className="text-xs text-muted-foreground">Mon–Sat, 10am–7pm IST</p>
                        </a>
                        <a href="https://www.google.com/maps/search/Chennai,+India" target="_blank" rel="noopener noreferrer" className="process-card p-8 rounded-3xl bg-linear-to-br from-violet-50/50 to-white transition-all duration-500 hover:-translate-y-2 border border-neutral-200 shadow-[20px_20px_60px_rgba(139,92,246,0.08)] hover:shadow-[30px_30px_80px_rgba(139,92,246,0.15)] relative block">
                            <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2_rgba(139,92,246,0.02)]" />
                            <span className="text-[10px] font-bold uppercase tracking-widest mb-4 block bg-linear-to-b from-violet-400 to-violet-900 bg-clip-text text-transparent">Location</span>
                            <span className="text-lg font-medium text-foreground block mb-1">Chennai, India</span>
                            <p className="text-xs text-muted-foreground">Working globally</p>
                        </a>
                        <a href="#contact-form" className="process-card p-8 rounded-3xl bg-linear-to-br from-violet-50/50 to-white transition-all duration-500 hover:-translate-y-2 border border-neutral-200 shadow-[20px_20px_60px_rgba(139,92,246,0.08)] hover:shadow-[30px_30px_80px_rgba(139,92,246,0.15)] relative block">
                            <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),inset_-1px_-1px_2_rgba(139,92,246,0.02)]" />
                            <span className="text-[10px] font-bold uppercase tracking-widest mb-4 block bg-linear-to-b from-violet-400 to-violet-900 bg-clip-text text-transparent">Response time</span>
                            <span className="text-lg font-medium text-foreground block mb-1">Within 24 hours</span>
                            <p className="text-xs text-muted-foreground">On all channels</p>
                        </a>
                    </div>
                </section>

                {/* Section 6: Partnership Callout */}
                <section className="max-w-4xl mx-auto">
                    <div className="p-8 md:p-12 rounded-[2rem] border border-border/80 bg-white flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden">
                        <Ripple 
                            mainCircleSize={240}
                            numCircles={8}
                            className="absolute inset-0 translate-x-[33%] translate-y-[10%] opacity-90 select-none z-0"
                            circleClassName="border-violet-500/30 bg-violet-500/10"
                        />
                        <div className="max-w-xl text-center md:text-left relative z-10">
                            <h3 className="text-xl font-bold text-foreground mb-4">Looking to build together long-term?</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Mergex partners with founders, operators, and agencies who want to build
                                scalable systems and new ventures - not just buy services.
                            </p>
                        </div>
                        <a
                            href="/partner-with-us"
                            className="shrink-0 inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-linear-to-b from-violet-400 to-violet-600 text-white font-bold text-sm shadow-lg shadow-violet-500/20 transition-all hover:brightness-110 hover:-translate-y-0.5 active:scale-[0.98] relative z-20"
                        >
                            Explore partnerships <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

function SuccessState({ name }: { name: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="container mx-auto px-4 max-w-2xl py-24 md:py-40 text-center"
        >
            <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-10">
                <Check className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight mb-8">
                You&apos;re in, <span className="text-primary">{name.split(' ')[0]}</span>.
            </h1>
            <div className="space-y-6 max-w-sm mx-auto mb-16">
                <div className="flex items-center gap-4 text-left">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold shrink-0">1</div>
                    <p className="text-sm text-muted-foreground">We&apos;re reviewing your inquiry right now.</p>
                </div>
                <div className="flex items-center gap-4 text-left">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold shrink-0">2</div>
                    <p className="text-sm text-muted-foreground">Expect a personal response within 24 hours.</p>
                </div>
                <div className="flex items-center gap-4 text-left">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold shrink-0">3</div>
                    <p className="text-sm text-muted-foreground">We&apos;ll set up a time for your strategy call.</p>
                </div>
            </div>
            <div className="pt-10 border-t border-border/60 text-muted-foreground text-xs font-medium uppercase tracking-widest">
                Built to Scale &bull; Mergex
            </div>
        </motion.div>
    );
}
