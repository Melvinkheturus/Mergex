'use client';

import { HOW_WE_WORK_SYSTEMS } from '../content/systems';

/**
 * HowWeWorkSystems - Premium Process Visualization
 * 
 * Distinctive design with DM Sans typography and horizontal card layout.
 * Features timeframes, deliverables, and sophisticated visual details.
 */
export function HowWeWorkSystems() {
    return (
        <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#fafafa] via-white to-[#f5f5f5] overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/40 to-pink-200/40 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl" />
            </div>

            {/* Diagonal Accent Line */}
            <div className="absolute top-0 right-0 w-1 h-64 bg-gradient-to-b from-orange-500/60 to-transparent transform rotate-12 origin-top" />

            <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-20 animate-fadeIn">
                    {/* Eyebrow */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-orange-500" />
                        <span className="text-orange-600 font-bold text-xs uppercase tracking-[0.25em]"
                            style={{ fontFamily: "var(--font-manrope)" }}>
                            Our Process
                        </span>
                        <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-orange-500" />
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight tracking-tight"
                        style={{ fontFamily: "var(--font-playfair)" }}>
                        {HOW_WE_WORK_SYSTEMS.headline}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        style={{ fontFamily: "var(--font-manrope)" }}>
                        {HOW_WE_WORK_SYSTEMS.subheadline}
                    </p>
                </div>

                {/* Phases Grid - Horizontal Layout with Alternating Sizes */}
                <div className="space-y-8">
                    {HOW_WE_WORK_SYSTEMS.phases.map((phase, index) => {
                        // Alternate between left-heavy and right-heavy layouts
                        const isLeftHeavy = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className="group animate-fadeIn"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-start`}>
                                    {/* Phase Number & Timeframe - Side Badge */}
                                    <div className={`lg:col-span-3 ${!isLeftHeavy ? 'lg:order-2' : ''}`}>
                                        <div className="sticky top-24">
                                            {/* Phase Number */}
                                            <div className="inline-flex flex-col items-start gap-3 p-6 rounded-2xl 
                                                          bg-gradient-to-br from-white to-gray-50 
                                                          border-2 border-gray-200 
                                                          group-hover:border-orange-300 
                                                          group-hover:shadow-lg 
                                                          transition-all duration-500">
                                                <div className="text-7xl font-black bg-gradient-to-br from-orange-500 to-pink-500 bg-clip-text text-transparent"
                                                    style={{ fontFamily: "var(--font-manrope)" }}>
                                                    {phase.number}
                                                </div>
                                                <div className="flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
                                                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="text-sm font-bold text-orange-700"
                                                        style={{ fontFamily: "var(--font-manrope)" }}>
                                                        {phase.timeframe}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Main Content Card */}
                                    <div className={`lg:col-span-9 ${!isLeftHeavy ? 'lg:order-1' : ''}`}>
                                        <div className="relative overflow-hidden rounded-3xl 
                                                      bg-white border-2 border-gray-200 
                                                      p-8 lg:p-10
                                                      group-hover:border-orange-300 
                                                      group-hover:shadow-2xl 
                                                      transition-all duration-500">
                                            {/* Gradient Overlay on Hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-pink-50/0 
                                                          group-hover:from-orange-50/50 group-hover:to-pink-50/30 
                                                          transition-all duration-500 pointer-events-none" />

                                            {/* Phase Title */}
                                            <h3 className="relative text-3xl lg:text-4xl font-bold mb-4 text-gray-900 
                                                         group-hover:text-orange-600 transition-colors duration-300"
                                                style={{ fontFamily: "var(--font-manrope)" }}>
                                                {phase.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="relative text-lg text-gray-700 mb-6 leading-relaxed"
                                                style={{ fontFamily: "var(--font-manrope)" }}>
                                                {phase.description}
                                            </p>

                                            {/* Outcome Badge */}
                                            <div className="relative inline-flex items-start gap-3 px-5 py-3 
                                                          bg-gradient-to-r from-green-50 to-emerald-50 
                                                          border border-green-200 rounded-xl mb-6">
                                                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <div>
                                                    <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1"
                                                        style={{ fontFamily: "var(--font-manrope)" }}>
                                                        Outcome
                                                    </div>
                                                    <div className="text-sm font-semibold text-green-900"
                                                        style={{ fontFamily: "var(--font-manrope)" }}>
                                                        {phase.outcome}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Deliverables List */}
                                            <div className="relative">
                                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3"
                                                    style={{ fontFamily: "var(--font-manrope)" }}>
                                                    Key Deliverables
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                    {phase.deliverables.map((deliverable, idx) => (
                                                        <div key={idx}
                                                            className="flex items-start gap-2 text-sm text-gray-700"
                                                            style={{ fontFamily: "var(--font-manrope)" }}>
                                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                                            <span>{deliverable}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA or Note */}
                <div className="mt-20 text-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                    <div className="inline-flex items-center gap-3 px-8 py-4 
                                  bg-gradient-to-r from-orange-50 to-pink-50 
                                  border-2 border-orange-200 rounded-full">
                        <span className="text-orange-600 text-lg font-semibold"
                            style={{ fontFamily: "var(--font-manrope)" }}>
                            Ready to start? Let's map your project timeline.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
