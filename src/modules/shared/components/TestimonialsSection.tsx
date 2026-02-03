'use client';

import { motion } from 'framer-motion';
import type { Testimonial } from '../types/testimonial';

const TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        quote: 'Mergex helped us think more clearly about what we were building — not just how to build it.',
        author: {
            name: 'Sarah K.',
            role: 'Product Lead',
        }
    },
    {
        id: '2',
        quote: 'What stood out wasn\'t speed or tools, but how aligned everything felt.',
        author: {
            name: 'Michael R.',
            role: 'Founder',
        }
    },
    {
        id: '3',
        quote: 'Working with Mergex felt less like hiring a vendor and more like gaining a thinking partner.',
        author: {
            name: 'David T.',
            role: 'Engineering Manager',
        }
    },
    {
        id: '4',
        quote: 'They asked the questions we should have been asking ourselves.',
        author: {
            name: 'Emma L.',
            role: 'CTO',
        }
    },
    {
        id: '5',
        quote: 'Every decision felt connected to the bigger picture.',
        author: {
            name: 'James P.',
            role: 'Head of Product',
        }
    },
    {
        id: '6',
        quote: 'We knew they\'d follow through — not just on deliverables, but on understanding our goals.',
        author: {
            name: 'Lisa M.',
            role: 'CEO',
        }
    }
];

// Star Rating Component
function StarRating({ rating = 5 }: { rating?: number }) {
    return (
        <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

interface TestimonialCardProps {
    testimonial: Testimonial;
    index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] snap-center first:ml-6 last:mr-6 md:first:ml-0 md:last:mr-0"
        >
            <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full hover:border-violet-300 hover:shadow-lg transition-all duration-300">
                {/* Star Rating */}
                <StarRating rating={5} />

                {/* Quote */}
                <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                    "{testimonial.quote}"
                </blockquote>

                {/* Attribution */}
                <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">
                        {testimonial.author.name}
                    </p>
                    {testimonial.author.role && (
                        <p className="text-sm text-gray-500 mt-0.5">
                            {testimonial.author.role}
                            {testimonial.author.company && ` at ${testimonial.author.company}`}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export function TestimonialsSection() {
    return (
        <section className="relative bg-white py-20 md:py-28 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16 px-6"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Real results. Real stories.{' '}
                        <br className="hidden md:block" />
                        See why clients trust{' '}
                        <span className="italic font-serif">Mergex.</span>
                    </h2>
                </motion.div>

                {/* Horizontal Scroll Container */}
                <div className="relative">
                    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 px-6 md:px-12 lg:px-16 scrollbar-hide">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <TestimonialCard
                                key={testimonial.id}
                                testimonial={testimonial}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Scroll Indicators (Desktop Only) */}
                    <div className="hidden md:block absolute left-0 top-0 bottom-8 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                    <div className="hidden md:block absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Hide scrollbar globally for this section */}
            <style jsx global>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
