'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
    const router = useRouter();

    useEffect(() => {
        if ((window as any).lenis) {
            (window as any).lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    const handlePartnershipTypeClick = (typeId: 'strategic' | 'referral') => {
        router.push(typeId === 'strategic' ? '/partner/apply' : '/partner/refer');
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
