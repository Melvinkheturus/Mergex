'use client';

import { motion } from 'framer-motion';
import { WHAT_IS_LABS } from '../content/labs';

/**
 * WhatIsLabs - Clear definition section
 */
export function WhatIsLabs() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 text-foreground">
                        {WHAT_IS_LABS.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
                        {WHAT_IS_LABS.description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
