import React from 'react';
import { CaseStudy } from '../../types';

interface ResultsAndTestimonialProps {
    study: CaseStudy;
}

export function ResultsAndTestimonial({ study }: ResultsAndTestimonialProps) {
    return (
        <>
            {/* Results */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="bg-violet-600 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-16 font-manrope">The Impact</h2>
                            <div className="grid md:grid-cols-3 gap-12">
                                {study.results.map((metric, index) => (
                                    <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                                        <div className="text-5xl md:text-6xl font-bold mb-2">
                                            {metric.prefix}{metric.value}{metric.suffix}
                                        </div>
                                        <div className="text-violet-200 font-medium text-lg uppercase tracking-wide">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Abstract BG Pattern */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] rounded-full bg-white blur-3xl animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Voice */}
            {study.testimonial && (
                <section className="py-24">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <blockquote className="text-2xl md:text-4xl font-medium text-gray-900 leading-normal font-manrope mb-8 relative">
                            <span className="text-8xl text-violet-200 absolute -top-8 -left-8 opacity-50 font-serif">&ldquo;</span>
                            {study.testimonial.quote}
                            <span className="text-8xl text-violet-200 absolute -bottom-12 -right-4 opacity-50 font-serif">&rdquo;</span>
                        </blockquote>
                        <div className="flex items-center justify-center gap-4 mt-12">
                            <div className="text-center">
                                <div className="font-bold text-gray-900 text-lg">{study.testimonial.author}</div>
                                <div className="text-gray-500">{study.testimonial.role}, {study.testimonial.company}</div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
