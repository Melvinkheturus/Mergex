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

interface PartnerPageClientProps {
    pageConfig?: any;
}

export default function PartnerPageClient({ pageConfig }: PartnerPageClientProps) {
    const [selectedType, setSelectedType] = useState<'strategic' | 'referral' | null>(null);

    const handlePartnershipTypeClick = (typeId: 'strategic' | 'referral') => {
        setSelectedType(typeId);
        setTimeout(() => {
            const ctaSection = document.querySelector('section:last-of-type');
            ctaSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    };

    return (
        <main className="min-h-screen bg-white">
            <PartnershipHero content={pageConfig?.hero} />
            <WhyPartner content={pageConfig?.whyPartner} benefits={pageConfig?.benefits} />
            <PartnershipTypes content={pageConfig?.partnershipTypes?.types} typesHeadline={pageConfig?.partnershipTypes?.headline} typesSubheadline={pageConfig?.partnershipTypes?.subheadline} onApplyClick={handlePartnershipTypeClick} />
            <ReferralExplainer content={pageConfig?.referral} />
            <TrustSection content={pageConfig?.trust} />
            <PartnerCTA content={pageConfig?.cta} />
        </main>
    );
}
