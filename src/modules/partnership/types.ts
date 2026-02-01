// Partnership Type Definitions
export type PartnershipTypeId = 'strategic' | 'referral';

export interface PartnershipType {
    id: PartnershipTypeId;
    title: string;
    tagline: string;
    description: string;
    targetAudience: string[];
    whatItLooks: string[];
    valueProposition: string;
    examples: string[];
    ctaText: string;
    accentColor: 'violet' | 'purple';
    icon: string;
}

export interface PartnerApplication {
    name: string;
    email: string;
    company: string;
    partnershipType: PartnershipTypeId;
    message: string;
}

export interface ReferralSubmission {
    referrerName: string;
    referrerEmail: string;
    clientName: string;
    clientCompany: string;
    problemDescription: string;
}

export interface Benefit {
    title: string;
    description: string;
    icon: string;
}

export interface TrustPrinciple {
    text: string;
}
