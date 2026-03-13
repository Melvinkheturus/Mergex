'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TextRevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

/**
 * TextReveal - A premium "Slide-Up Mask Reveal" component.
 * Wraps content in an overflow-hidden container and slides it up.
 */
export function TextReveal({ 
    children, 
    delay = 0, 
    duration = 1.4, 
    className = "", 
    once = true 
}: TextRevealProps) {
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once }}
                transition={{ 
                    duration, 
                    ease: [0.16, 1, 0.3, 1], 
                    delay 
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

/**
 * StaggeredReveal - Wraps multiple elements in a staggered reveal pattern.
 */
export function StaggeredReveal({ 
    children, 
    baseDelay = 0, 
    staggerAmount = 0.1,
    duration = 1.4,
    className = ""
}: { 
    children: ReactNode[]; 
    baseDelay?: number; 
    staggerAmount?: number;
    duration?: number;
    className?: string;
}) {
    return (
        <div className={className}>
            {children.map((child, i) => (
                <TextReveal 
                    key={i} 
                    delay={baseDelay + (i * staggerAmount)} 
                    duration={duration}
                >
                    {child}
                </TextReveal>
            ))}
        </div>
    );
}
