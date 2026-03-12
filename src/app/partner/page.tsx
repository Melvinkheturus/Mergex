import type { Metadata } from 'next';
import { fetchWithFallback } from '@/sanity/lib/contentFetcher';
import PartnerPageClient from './PartnerPageClient';

export const metadata: Metadata = {
    title: 'Partner with Mergex | Build Together, Not Compete',
    description: 'Partner with Mergex to expand your service offering. Strategic partnerships for agencies and referral programs for professionals.',
};

// ── GROQ Query ──
const PARTNER_PAGE_QUERY = `
    *[_type == "partnerPage"][0]{
        "hero": {
            "headline": heroHeadline,
            "subheadline": heroSubheadline,
            "ctaText": heroCtaText
        },
        "whyPartner": {
            "headline": whyPartnerHeadline,
            "subheadline": whyPartnerSubheadline
        },
        "benefits": benefits,
        "partnershipTypes": {
            "headline": partnershipTypesHeadline,
            "subheadline": partnershipTypesSubheadline,
            "types": partnershipTypes
        },
        "referral": {
            "headline": referralHeadline,
            "steps": referralSteps,
            "commissionNote": referralCommissionNote
        },
        "trust": {
            "headline": trustHeadline,
            "subheadline": trustSubheadline,
            "principles": trustPrinciples
        },
        "cta": {
            "headline": ctaHeadline,
            "subheadline": ctaSubheadline,
            "partnerButtonText": ctaPartnerButtonText,
            "referralButtonText": ctaReferralButtonText
        }
    }
`;

export default async function PartnerPage() {
    const pageConfig = await fetchWithFallback<any>(
        PARTNER_PAGE_QUERY,
        null,
        'Partner Page Config'
    );

    return <PartnerPageClient pageConfig={pageConfig} />;
}
