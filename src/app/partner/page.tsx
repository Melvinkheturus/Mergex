'use client';

import { useState } from 'react';
import {
    PartnershipHero,
    WhyPartner,
    PartnershipTypes,
    ReferralExplainer,
    TrustSection,
    PartnerCTA,
} from '@/modules/partnership';

export default function PartnerPage() {
    const [selectedType, setSelectedType] = useState<'strategic' | 'referral' | null>(null);

    const handlePartnershipTypeClick = (typeId: 'strategic' | 'referral') => {
        setSelectedType(typeId);
        // Scroll to CTA section
        setTimeout(() => {
            const ctaSection = document.querySelector('section:last-of-type');
            ctaSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    };

    return (
        <main className="min-h-screen bg-white">
            <PartnershipHero />
            <WhyPartner />
            <PartnershipTypes onApplyClick={handlePartnershipTypeClick} />
            <ReferralExplainer />
            <TrustSection />
            <PartnerCTA />
        </main>
    );
}
