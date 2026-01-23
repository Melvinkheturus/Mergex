'use client';

import { Code, FlaskConical, Package, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServiceCards() {
    const services = [
        {
            id: 'software',
            icon: Code,
            title: 'Mergex Software',
            subtitle: 'AI + Software Development',
            description: 'Custom web apps, mobile solutions, and AI integrations built fast and built right',
            href: '/services/software',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            id: 'labs',
            icon: FlaskConical,
            title: 'Mergex Labs',
            subtitle: 'Innovation & Experimentation',
            description: 'Cutting-edge research, AI experimentation, and proof-of-concept development',
            href: '/services/labs',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            id: 'products',
            icon: Package,
            title: 'Products',
            subtitle: 'Platform Solutions',
            description: 'Purpose-built platforms and tools that solve real problems at scale',
            href: '/products',
            gradient: 'from-orange-500 to-red-500',
        },
    ];

    return (
        <section className="py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 md:px-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">What We Build</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-body">
                        Three divisions, one mission: Build the future of tech
                    </p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={service.id}
                                href={service.href}
                                className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                            >
                                {/* Gradient overlay on hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className={`w-14 h-14 mb-6 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-2 font-display group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p className="text-sm font-bold text-primary mb-3">{service.subtitle}</p>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-body">
                                        {service.description}
                                    </p>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                                        Learn more
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
