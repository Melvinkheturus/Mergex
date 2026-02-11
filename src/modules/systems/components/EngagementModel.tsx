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
        <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-purple-50/20 to-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-300/30 to-violet-300/30 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-indigo-300/30 to-blue-300/30 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-20 animate-fadeIn">
                    {/* Eyebrow */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-purple-600 font-bold text-sm uppercase tracking-[0.2em]"
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
                                className={`group relative animate-fadeIn ${isFeatured ? 'md:-mt-4 md:mb-4' : ''
                                    }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Featured Badge */}
                                {isFeatured && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                        <div className="px-6 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg"
                                            style={{ fontFamily: "var(--font-manrope)" }}>
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                {/* Pricing Card */}
                                <div className={`relative h-full rounded-3xl p-8 lg:p-10
                                              ${isFeatured
                                        ? 'bg-gradient-to-br from-purple-600 to-violet-600 text-white border-2 border-purple-400 shadow-2xl shadow-purple-500/20'
                                        : 'bg-white border-2 border-gray-200 group-hover:border-purple-300'
                                    }
                                              transition-all duration-500
                                              group-hover:shadow-2xl
                                              ${isFeatured ? 'scale-105' : 'group-hover:scale-105'}`}>

                                    {/* Title */}
                                    <h3 className={`text-3xl lg:text-4xl font-bold mb-2 ${isFeatured ? 'text-white' : 'text-gray-900'}`}
                                        style={{ fontFamily: "var(--font-manrope)" }}>
                                        {model.title}
                                    </h3>

                                    {/* Tagline */}
                                    <p className={`text-sm font-medium mb-6 ${isFeatured ? 'text-purple-100' : 'text-gray-500'}`}
                                        style={{ fontFamily: "var(--font-manrope)" }}>
                                        {model.tagline}
                                    </p>

                                    {/* Price Badge */}
                                    <div className="mb-6">
                                        <div className={`text-4xl lg:text-5xl font-black mb-2 ${isFeatured ? 'text-white' : 'text-purple-600'}`}
                                            style={{ fontFamily: "var(--font-manrope)" }}>
                                            {model.priceRange}
                                        </div>
                                        <div className={`flex items-center gap-2 text-sm ${isFeatured ? 'text-purple-100' : 'text-gray-600'}`}
                                            style={{ fontFamily: "var(--font-manrope)" }}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-medium">{model.duration}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className={`text-base leading-relaxed mb-8 ${isFeatured ? 'text-purple-50' : 'text-gray-700'}`}
                                        style={{ fontFamily: "var(--font-manrope)" }}>
                                        {model.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="space-y-3 mb-8">
                                        {model.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isFeatured ? 'text-purple-200' : 'text-purple-600'}`}
                                                    fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className={`text-sm ${isFeatured ? 'text-white' : 'text-gray-700'}`}
                                                    style={{ fontFamily: "var(--font-manrope)" }}>
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Divider Line */}
                                    <div className={`h-px mb-6 ${isFeatured ? 'bg-white/20' : 'bg-gray-200'}`} />

                                    {/* Ideal For */}
                                    <div className="mb-4">
                                        <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${isFeatured ? 'text-purple-200' : 'text-gray-500'}`}
                                            style={{ fontFamily: "var(--font-manrope)" }}>
                                            Ideal For
                                        </div>
                                        <p className={`text-sm ${isFeatured ? 'text-white' : 'text-gray-700'}`}
                                            style={{ fontFamily: "var(--font-manrope)" }}>
                                            {model.idealFor}
                                        </p>
                                    </div>

                                    {/* Best For Badge */}
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold
                                                  ${isFeatured ? 'bg-white/10 text-white' : 'bg-purple-50 text-purple-700'}`}
                                        style={{ fontFamily: "var(--font-manrope)" }}>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        {model.bestFor}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Philosophy & CTA */}
                <div className="text-center max-w-4xl mx-auto space-y-6 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    <p className="text-xl text-gray-700 leading-relaxed font-medium"
                        style={{ fontFamily: "var(--font-manrope)" }}>
                        {ENGAGEMENT_MODEL.philosophy}
                    </p>
                    <div className="inline-flex items-center gap-3 px-8 py-4 
                                  bg-gradient-to-r from-purple-50 to-violet-50 
                                  border-2 border-purple-200 rounded-full">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="text-purple-700 text-lg font-semibold"
                            style={{ fontFamily: "var(--font-manrope)" }}>
                            {ENGAGEMENT_MODEL.cta}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
