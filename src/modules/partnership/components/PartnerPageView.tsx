'use client';

import { useState } from 'react';
import {
    PartnershipHero,
    WhyPartner,
    PartnershipTypes,
    ServicePartners,
    ReferralExplainer,
    TrustSection,
    PartnerFAQ,
    OurPartners,
} from '@/modules/partnership';

export function PartnerPageView() {
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const handlePartnershipTypeClick = (typeId: string) => {
        setSelectedType(typeId);
        // Scroll to CTA section
        setTimeout(() => {
            const ctaSection = document.querySelector('section:last-of-type');
            ctaSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    };

    return (
        <main className="min-h-screen bg-[#fafafa]">
            <PartnershipHero />
            <PartnershipTypes onApplyClick={handlePartnershipTypeClick} />
            <ServicePartners />
            <ReferralExplainer />
            <WhyPartner />
            <OurPartners />
            <TrustSection />
            <PartnerFAQ />
        </main>
    );
}
