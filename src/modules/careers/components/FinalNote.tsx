'use client';

import { motion } from 'framer-motion';
import { FINAL_NOTE } from '../content/careers';

interface FinalNoteProps {
    content?: typeof FINAL_NOTE;
}

export function FinalNote({ content }: FinalNoteProps = {}) {
    const data = content || FINAL_NOTE;
    const message = data.message || FINAL_NOTE.message;
    return (
        <section className="bg-gradient-to-br from-purple-600 to-blue-600 py-16">
            <div className="container mx-auto max-w-4xl px-6">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xl leading-relaxed text-white md:text-2xl">
                        {message}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
