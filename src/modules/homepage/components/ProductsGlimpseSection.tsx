'use client';

import { motion } from 'framer-motion';
import { PRODUCTS_GLIMPSE, SAAS_PRODUCTS } from '../content';
import { ArrowRight } from 'lucide-react';

/**
 * ProductsGlimpseSection - Subtle products showcase (10% visibility)
 * Shows ambition without aggressive selling
 */
export function ProductsGlimpseSection() {
    // Show only first 3 products
    const featuredProducts = SAAS_PRODUCTS.products.slice(0, 3);

    const statusColors = {
        live: 'bg-green-100 text-green-700 border-green-200',
        beta: 'bg-blue-100 text-blue-700 border-blue-200',
        'coming-soon': 'bg-gray-100 text-gray-700 border-gray-200',
    };

    return (
        <section className="py-20 md:py-28 bg-gradient-to-b from-purple-50/30 to-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 text-foreground">
                        {PRODUCTS_GLIMPSE.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
                        {PRODUCTS_GLIMPSE.subheadline}
                    </p>
                </motion.div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                        >
                            {/* Status Badge */}
                            <div className="mb-6">
                                <span
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[product.status as keyof typeof statusColors]
                                        }`}
                                >
                                    {product.status === 'live'
                                        ? 'Live'
                                        : product.status === 'beta'
                                            ? 'Beta'
                                            : 'Coming Soon'}
                                </span>
                            </div>

                            {/* Product Info */}
                            <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-sm text-primary font-medium mb-4">
                                {product.tagline}
                            </p>
                            <p className="text-foreground-muted mb-6 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-2 mb-6">
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-foreground-muted">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Link */}
                            {(product.status === 'live' || product.status === 'beta') && (
                                <a
                                    href={product.href}
                                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                                >
                                    Learn More
                                    <ArrowRight size={16} />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Subtle CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href="/products"
                        className="inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors font-medium"
                    >
                        View All Products
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
