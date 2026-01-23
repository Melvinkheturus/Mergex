'use client';

import { MessageCircle, Mail } from 'lucide-react';

export default function FinalCTA() {
    const handleBooking = () => {
        // TODO: Connect to booking system
        console.log('Book a call clicked');
    };

    const handleContact = () => {
        window.location.href = '/contact';
    };

    return (
        <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 md:px-10 text-center">
                <div className="max-w-3xl mx-auto">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                        Ready to Build Something Great?
                    </h2>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 font-body">
                        Let's discuss your project and explore how we can help you achieve your goals
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleBooking}
                            className="group h-14 px-8 rounded-lg bg-primary text-white text-base font-bold hover:bg-primary-hover transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Book a Call
                        </button>
                        <button
                            onClick={handleContact}
                            className="h-14 px-8 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            <Mail className="w-5 h-5" />
                            Contact Us
                        </button>
                    </div>

                    {/* Trust Signal */}
                    <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                        Response time: 24-48 hours  •  No pressure, just conversation
                    </p>
                </div>
            </div>
        </section>
    );
}
