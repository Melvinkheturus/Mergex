'use client';

import { motion } from 'framer-motion';
import { ENGAGEMENT_MODEL } from '../content/systems';

/**
 * EngagementModel - Pricing philosophy and flexibility
 */
export function EngagementModel() {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/30">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-foreground">
                        {ENGAGEMENT_MODEL.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
                        {ENGAGEMENT_MODEL.subheadline}
                    </p>
                </motion.div>

                {/* Models Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {ENGAGEMENT_MODEL.models.map((model, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-3 text-foreground">
                                {model.title}
                            </h3>
                            <p className="text-foreground-muted mb-4 leading-relaxed">
                                {model.description}
                            </p>
                            <div className="text-sm text-blue-600 font-medium">
                                Ideal for: {model.idealFor}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Philosophy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <p className="text-xl text-blue-600 font-semibold">
                        {ENGAGEMENT_MODEL.philosophy}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
