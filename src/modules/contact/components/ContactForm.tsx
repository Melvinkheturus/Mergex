"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";

export default function ContactForm() {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setSubmitting(false);
            alert("Form submitted! (Simulation)");
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full flex flex-col gap-8"
        >
            {/* Lead Qualification Tag */}
            <div className="inline-flex self-start">
                <div className="rounded-full border border-border/50 bg-background-subtle/50 backdrop-blur-sm px-4 py-1.5 text-xs font-medium tracking-wide text-primary shadow-sm ring-1 ring-inset ring-primary/10">
                    New Projects &bull; Partnerships &bull; Collaborations
                </div>
            </div>

            {/* The Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                            Full Name <span className="text-destructive">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            placeholder="John Doe"
                            className="w-full h-12 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all shadow-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email Address <span className="text-destructive">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="john@company.com"
                            className="w-full h-12 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all shadow-sm"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">
                        Company / Brand <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <input
                        type="text"
                        id="company"
                        placeholder="Your Company Ltd."
                        className="w-full h-12 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all shadow-sm"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-foreground">
                            What can we help you with? <span className="text-destructive">*</span>
                        </label>
                        <div className="relative">
                            <select
                                id="service"
                                required
                                defaultValue=""
                                className="w-full h-12 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all shadow-sm appearance-none cursor-pointer"
                            >
                                <option value="" disabled hidden>Select an option</option>
                                <option value="systems-automation">Business Systems & Automation</option>
                                <option value="ai-creative">AI Creative & Content (Mergex Labs)</option>
                                <option value="software-dev">Software / Platform Development</option>
                                <option value="branding-marketing">Branding & Marketing</option>
                                <option value="partnerships">Partnerships / Collaboration</option>
                                <option value="other">Something Else</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-foreground/50">
                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="source" className="text-sm font-medium text-foreground">
                            How did you hear about us?
                        </label>
                        <div className="relative">
                            <select
                                id="source"
                                defaultValue=""
                                className="w-full h-12 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all shadow-sm appearance-none cursor-pointer"
                            >
                                <option value="" disabled hidden>Select an option</option>
                                <option value="linkedin">LinkedIn</option>
                                <option value="instagram">Instagram</option>
                                <option value="referral">Referral</option>
                                <option value="google">Google Search</option>
                                <option value="event">Event / Workshop</option>
                                <option value="media">Media / Article</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-foreground/50">
                                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Project Details <span className="text-destructive">*</span>
                    </label>
                    <textarea
                        id="message"
                        required
                        placeholder="Tell us about your idea, project, or challenge..."
                        rows={4}
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all shadow-sm resize-y min-h-[120px]"
                    />
                </div>

                <div className="pt-2 flex flex-col items-start gap-3">
                    <button
                        type="submit"
                        disabled={submitting}
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-primary px-8 font-medium text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
                    >
                        <span className="mr-2">{submitting ? "Sending..." : "Start the Conversation"}</span>
                        {!submitting && (
                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        )}
                        {/* Hover subtle glow */}
                        <div className="absolute inset-0 -z-10 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100 mix-blend-overlay"></div>
                    </button>
                    <p className="text-xs text-muted-foreground ml-1">
                        We review every inquiry personally.
                    </p>
                </div>

                {/* Subtle trust line */}
                <div className="mt-4 pt-6 border-t border-border/50">
                    <p className="text-xs text-muted-foreground flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Trusted by founders building scalable systems.
                    </p>
                </div>
            </form>
        </motion.div>
    );
}
