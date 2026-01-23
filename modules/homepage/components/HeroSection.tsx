'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
    const handleBooking = () => {
        // TODO: Connect to booking system
        console.log('Book a call clicked');
    };

    const handleExplore = () => {
        // Smooth scroll to next section
        document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
            {/* Gradient Orb Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] orb-gradient -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-10">
                <div className="text-center flex flex-col items-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider mb-8 animate-fade-in">
                        <Sparkles className="w-4 h-4" />
                        AI-Powered Tech Ecosystem
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight max-w-5xl mb-8 font-display">
                        AI-Powered Software &{' '}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Innovation
                        </span>{' '}
                        for Modern Businesses
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-12 leading-relaxed font-body">
                        From rapid software development to cutting-edge experimentation, we build the tech infrastructure
                        that powers your growth. No shortcuts, just results.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button
                            onClick={handleBooking}
                            className="group h-14 px-8 rounded-lg bg-primary text-white text-base font-bold hover:bg-primary-hover transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 flex items-center justify-center gap-2"
                        >
                            Book a Call
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={handleExplore}
                            className="h-14 px-8 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            Explore Services
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
