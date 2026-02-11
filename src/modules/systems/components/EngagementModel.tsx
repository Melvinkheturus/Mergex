'use client';

import { ENGAGEMENT_MODEL } from '../content/systems';

/**
 * EngagementModel - Premium Pricing Cards
 * 
 * Distinctive design with Outfit typography and pricing card layout.
 * Features pricing badges, feature lists, and purple/violet gradient theme.
 */
export function EngagementModel() {
    return (
        <section className="relative py-24 lg:py-32 bg-slate-50/50 overflow-hidden">
            <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-20 animate-fadeIn">
                    {/* Eyebrow */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="text-gray-500 font-semibold text-xs uppercase tracking-[0.2em]"
                            style={{ fontFamily: "var(--font-manrope)" }}>
                            Pricing Models
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 tracking-tight"
                        style={{ fontFamily: "var(--font-manrope)" }}>
                        {ENGAGEMENT_MODEL.headline}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        style={{ fontFamily: "var(--font-manrope)" }}>
                        {ENGAGEMENT_MODEL.subheadline}
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {ENGAGEMENT_MODEL.models.map((model, index) => {
                        const isFeatured = 'featured' in model && model.featured === true;

                        return (
                            <div
                                key={index}
                                className={`group relative animate-fadeIn h-full`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Pricing Card */}
                                <div className={`relative h-full rounded-2xl p-8 lg:p-10 bg-white border border-gray-200 
                                              transition-all duration-300 hover:shadow-lg hover:border-gray-300
                                              flex flex-col`}>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900"
                                        style={{ fontFamily: "var(--font-manrope)" }}>
                                        {model.title}
                                    </h3>

                                    {/* Tagline */}
                                    <p className="text-sm font-medium mb-8 text-gray-500"
                                        style={{ fontFamily: "var(--font-manrope)" }}>
                                        {model.tagline}
                                    </p>

                                    {/* Description */}
                                    <p className="text-base text-gray-600 leading-relaxed mb-8 flex-grow"
                                        style={{ fontFamily: "var(--font-manrope)" }}>
                                        {model.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="space-y-4 mb-8">
                                        {model.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400"
                                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-sm text-gray-600"
                                                    style={{ fontFamily: "var(--font-manrope)" }}>
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Divider Line */}
                                    <div className="h-px bg-gray-100 mb-6" />

                                    {/* Ideal For */}
                                    <div className="mb-4">
                                        <div className="text-xs font-bold uppercase tracking-wider mb-2 text-gray-400"
                                            style={{ fontFamily: "var(--font-manrope)" }}>
                                            Ideal For
                                        </div>
                                        <p className="text-sm text-gray-700"
                                            style={{ fontFamily: "var(--font-manrope)" }}>
                                            {model.idealFor}
                                        </p>
                                    </div>

                                    {/* Best For Badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold bg-gray-50 text-gray-600 border border-gray-100 mt-auto w-fit"
                                        style={{ fontFamily: "var(--font-manrope)" }}>
                                        {model.bestFor}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Philosophy & CTA */}
                <div className="text-center max-w-4xl mx-auto space-y-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto"
                        style={{ fontFamily: "var(--font-manrope)" }}>
                        {ENGAGEMENT_MODEL.philosophy}
                    </p>
                    <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
                        <span className="text-base font-semibold"
                            style={{ fontFamily: "var(--font-manrope)" }}>
                            {ENGAGEMENT_MODEL.cta}
                        </span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

