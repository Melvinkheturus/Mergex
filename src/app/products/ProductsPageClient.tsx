'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Rocket, CheckCircle } from 'lucide-react';

// ── Hardcoded fallback data ──
const DEFAULT_PRODUCTS = [
    {
        name: 'Unisynk',
        tagline: 'Event & Operations Platform',
        description: 'Streamline event management and operations with intelligent automation and real-time coordination.',
        status: 'Alpha',
        features: ['Event Management', 'Team Coordination', 'Analytics Dashboard']
    },
    {
        name: 'Kuthakai',
        tagline: 'Rental Management SaaS',
        description: 'Complete rental ecosystem for peer-to-peer sharing, inventory management, and transactions.',
        status: 'Beta',
        features: ['P2P Rentals', 'Inventory Management', 'Payment Processing']
    },
    {
        name: 'CHR',
        tagline: 'HR & Compliance System',
        description: 'Automated HR workflows and compliance management for growing teams.',
        status: 'Coming Soon',
        features: ['HR Automation', 'Compliance Tracking', 'Employee Management']
    },
    {
        name: 'Retail Connect',
        tagline: 'Retail Operations Platform',
        description: 'End-to-end retail management with inventory, POS, and customer engagement tools.',
        status: 'Coming Soon',
        features: ['POS System', 'Inventory Control', 'Customer Analytics']
    }
];

const DEFAULTS = {
    heroHeadlinePart1: 'Building Tools from',
    heroHeadlinePart2: 'Real Problems',
    heroSubheadline: 'We solve operational challenges for our clients. Sometimes, those solutions deserve to become products.',
    heroSupportText: "Our products aren't built in a vacuum—they're refined through real-world use before we launch them.",
    whyHeadline: 'Why We Build Products',
    whyParagraphs: [
        'Every product in our pipeline was born from a real client need. We build systems for businesses, and when we spot patterns—problems that multiple clients face—we ask: "Should this be a product?"',
        "We don't rush. Our products go through real-world testing with clients before launch. This means they're built for actual use cases, not imagined ones.",
        "Right now, our focus is on service delivery. Products are our long-term play—signals of where we're heading, not where we are today.",
    ],
    waitlistHeadline: 'Want Early Access?',
    waitlistSubheadline: 'Join our waitlist to get notified when products launch and receive exclusive early access.',
    waitlistButtonText: 'Join Waitlist',
    serviceCtaHeadline: 'Need a Solution Today?',
    serviceCtaSubheadline: "Our services are ready now. Let's build something custom for your business.",
    serviceCtaButtonText: 'Book a Call',
};

interface ProductsPageContent {
    heroHeadlinePart1?: string;
    heroHeadlinePart2?: string;
    heroSubheadline?: string;
    heroSupportText?: string;
    products?: {
        name: string;
        tagline: string;
        description: string;
        status: string;
        features: string[];
    }[];
    whyHeadline?: string;
    whyParagraphs?: string[];
    waitlistHeadline?: string;
    waitlistSubheadline?: string;
    waitlistButtonText?: string;
    serviceCtaHeadline?: string;
    serviceCtaSubheadline?: string;
    serviceCtaButtonText?: string;
}

interface ProductsPageClientProps {
    content?: ProductsPageContent | null;
}

export default function ProductsPageClient({ content }: ProductsPageClientProps) {
    const d = content || {};
    const heroP1 = d.heroHeadlinePart1 || DEFAULTS.heroHeadlinePart1;
    const heroP2 = d.heroHeadlinePart2 || DEFAULTS.heroHeadlinePart2;
    const heroSub = d.heroSubheadline || DEFAULTS.heroSubheadline;
    const heroSupport = d.heroSupportText || DEFAULTS.heroSupportText;
    const products = d.products?.length ? d.products : DEFAULT_PRODUCTS;
    const whyHead = d.whyHeadline || DEFAULTS.whyHeadline;
    const whyParas = d.whyParagraphs?.length ? d.whyParagraphs : DEFAULTS.whyParagraphs;
    const wlHead = d.waitlistHeadline || DEFAULTS.waitlistHeadline;
    const wlSub = d.waitlistSubheadline || DEFAULTS.waitlistSubheadline;
    const wlBtn = d.waitlistButtonText || DEFAULTS.waitlistButtonText;
    const sHead = d.serviceCtaHeadline || DEFAULTS.serviceCtaHeadline;
    const sSub = d.serviceCtaSubheadline || DEFAULTS.serviceCtaSubheadline;
    const sBtn = d.serviceCtaButtonText || DEFAULTS.serviceCtaButtonText;

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            {heroP1} <br />
                            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                                {heroP2}
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mb-4">{heroSub}</p>
                        <p className="text-lg text-gray-500 max-w-2xl">{heroSupport}</p>
                    </motion.div>
                </div>
            </section>

            {/* Product Cards */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
                            >
                                {/* Status Badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                                    <StatusBadge status={product.status} />
                                </div>

                                <p className="text-sm font-medium text-primary mb-3">{product.tagline}</p>
                                <p className="text-gray-600 mb-6">{product.description}</p>

                                {/* Features */}
                                <div className="space-y-2 mb-6">
                                    {product.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA based on status */}
                                {product.status === 'Beta' || product.status === 'Alpha' ? (
                                    <Link
                                        href={`/products/${product.name.toLowerCase()}`}
                                        className="inline-block text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                                    >
                                        Learn more →
                                    </Link>
                                ) : (
                                    <span className="text-sm text-gray-500">Available soon</span>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why We Build */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">{whyHead}</h2>
                        <div className="space-y-4 text-gray-600">
                            {whyParas.map((para, i) => (
                                <p key={i} className="text-lg">{para}</p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Waitlist CTA */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl border border-violet-200 p-12 text-center"
                    >
                        <Rocket className="w-12 h-12 text-violet-600 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{wlHead}</h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{wlSub}</p>
                        <Link
                            href="/contact?reason=product-waitlist"
                            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-b from-violet-400 to-violet-900 text-white font-medium shadow-lg hover:brightness-110 transition-all"
                        >
                            {wlBtn}
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services CTA */}
            <section className="py-16 px-6 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">{sHead}</h2>
                    <p className="text-lg text-gray-300 mb-8">{sSub}</p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 rounded-xl bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors"
                    >
                        {sBtn}
                    </Link>
                </div>
            </section>
        </main>
    );
}

function StatusBadge({ status }: { status: string }) {
    const configs = {
        'Alpha': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: Clock },
        'Beta': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', icon: Rocket },
        'Coming Soon': { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200', icon: Clock }
    };

    const config = configs[status as keyof typeof configs] || configs['Coming Soon'];
    const Icon = config.icon;

    return (
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${config.bg} ${config.text} ${config.border}`}>
            <Icon className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{status}</span>
        </div>
    );
}
