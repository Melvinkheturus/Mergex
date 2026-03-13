"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { TextReveal } from "@/modules/shared/components/TextReveal";

export default function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full card p-8 sm:p-10 border border-border shadow-sm flex flex-col gap-8 bg-white"
        >
            <TextReveal>
                <h3 className="text-xl font-display font-medium text-foreground tracking-tight">
                    Other Ways to Reach Us
                </h3>
            </TextReveal>

            <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Email</span>
                        <a href="mailto:hello@mergex.in" className="text-base text-foreground hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/30">
                            hello@mergex.in
                        </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Phone / WhatsApp</span>
                        <a href="tel:+919042172025" className="text-base text-foreground hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary/30">
                            +91 90421 72025
                        </a>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Location</span>
                        <span className="text-base text-foreground">
                            Chennai, India
                        </span>
                    </div>
                </div>
            </div>

            {/* Expectation / Trust Section */}
            <div className="mt-4 pt-6 border-t border-border/60">
                <TextReveal delay={0.2}>
                    <h4 className="text-sm font-medium text-foreground mb-4">What Happens Next?</h4>
                </TextReveal>
                <ol className="relative border-l border-border/60 ml-3 space-y-5">
                    <li className="mb-0 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-background rounded-full -left-3 ring-4 ring-white border border-border text-xs font-medium">1</span>
                        <p className="text-sm text-muted-foreground leading-relaxed -mt-1 tracking-tight">We review your inquiry.</p>
                    </li>
                    <li className="mb-0 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-background rounded-full -left-3 ring-4 ring-white border border-border text-xs font-medium">2</span>
                        <p className="text-sm text-muted-foreground leading-relaxed -mt-1 tracking-tight">If there&apos;s a fit, we reach out for a short discovery conversation.</p>
                    </li>
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-background rounded-full -left-3 ring-4 ring-white border border-border text-xs font-medium">3</span>
                        <p className="text-sm text-muted-foreground leading-relaxed -mt-1 tracking-tight">We define the next steps together.</p>
                    </li>
                </ol>
            </div>
        </motion.div>
    );
}
