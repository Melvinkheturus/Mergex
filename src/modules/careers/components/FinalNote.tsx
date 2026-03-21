'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CLOUDINARY_ASSETS } from '@/lib/cloudinary';
import { FINAL_NOTE } from '../content/careers';

export function FinalNote() {
    return (
        <section className="relative overflow-hidden py-16">
            {/* Desktop Background Image */}
            <div className="absolute inset-0 z-0 hidden lg:block">
                <Image
                    src={CLOUDINARY_ASSETS.footerDesktop}
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            {/* Mobile Background Image */}
            <div className="absolute inset-0 z-0 lg:hidden">
                <Image
                    src={CLOUDINARY_ASSETS.footerMobile}
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
            {/* No overlay as requested previously */}

            <div className="container relative z-10 mx-auto max-w-4xl px-6">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xl leading-relaxed text-white md:text-2xl">
                        {FINAL_NOTE.message}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
