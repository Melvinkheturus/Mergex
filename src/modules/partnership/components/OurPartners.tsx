'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const PARTNERS = [
    { name: 'Cinn Astra', logo: '/logo/brand logo/Cinn Astra.png' },
    { name: 'MicandMac', logo: '/logo/brand logo/MicandMac.png' },
    { name: 'Cedar Elevators', logo: '/logo/brand logo/cedarelevators.png' },
    { name: 'Partner', logo: '/logo/brand logo/Logo 2-02.png' },
];

export function OurPartners() {
    return (
        <section className="py-24 bg-[#fafafa] border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-(family-name:--font-playfair) font-bold text-gray-900 leading-tight mb-6">
                            Our Partners
                        </h2>
                        <p className="text-lg text-gray-600">
                            Meet the innovators and leaders who are building the future with Mergex.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link 
                            href="#connect" 
                            className="group flex items-center gap-2 text-lg font-medium text-gray-900 pb-2 border-b-2 border-gray-900 hover:text-violet-600 hover:border-violet-600 transition-colors"
                        >
                            Want in? Connect with us.
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Grid Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-200"
                >
                    {PARTNERS.map((partner, index) => (
                        <div 
                            key={index} 
                            className="h-32 md:h-48 border-r border-b border-gray-200 flex items-center justify-center p-8 group relative overflow-hidden bg-[#fafafa] hover:bg-gray-50 transition-colors"
                        >
                            <div className="relative w-full h-full flex items-center justify-center opacity-50 grayscale contrast-125 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300">
                                <img 
                                    src={partner.logo} 
                                    alt={partner.name} 
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                    
                </motion.div>

            </div>
        </section>
    );
}
