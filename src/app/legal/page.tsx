import React from 'react';
import Image from 'next/image';
import { LegalContent } from '@/modules/legal';

export const metadata = {
    title: 'Legal | Mergex',
    description: 'Privacy Policy, Terms of Use, Cookie Policy, and Disclaimer for Mergex.',
};

export default function LegalPage() {
    return (
        <div className="flex flex-col w-full bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-white pt-20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/background/parent/policy.png"
                        alt="Mergex Legal Policies"
                        fill
                        className="object-cover opacity-100"
                        priority
                    />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 text-center">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight font-(family-name:--font-playfair)">
                        Policies & Governance
                    </h1>
                </div>
            </section>

            {/* Legal Content Section (Tabbed) */}
            <div className="relative z-20 -mt-10">
                <LegalContent />
            </div>
        </div>
    );
}
