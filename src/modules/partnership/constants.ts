import { PartnershipType, Benefit, TrustPrinciple } from './types';

// Partnership Types Configuration
export const PARTNERSHIP_TYPES: PartnershipType[] = [
    {
        id: 'strategic',
        title: 'Strategic Partners',
        tagline: 'Agencies, Brands & Companies',
        description: 'Collaborate with Mergex to expand your service offering without expanding your team. Perfect for agencies, brands, and companies looking for technical partnership.',
        targetAudience: [
            'Digital Agencies',
            'Marketing Firms',
            'Branding Studios',
            'SaaS Companies',
            'Consulting Businesses',
        ],
        whatItLooks: [
            'Joint delivery and white-label services',
            'Co-branded solutions and products',
            'Shared capability expansion',
            'Long-term collaborative projects',
        ],
        valueProposition: 'Expand your service offering without expanding your team',
        examples: [
            'Agency brings client, Mergex handles tech development',
            'Brand collaboration on joint product offerings',
            'Consulting firm partners for digital transformation projects',
        ],
        ctaText: 'Become a Strategic Partner',
        accentColor: 'violet',
        icon: 'building',
    },
    {
        id: 'referral',
        title: 'Referral Partners',
        tagline: 'Connect & Earn',
        description: 'Connect businesses to solutions and earn fairly for qualified introductions. Perfect for professionals who encounter businesses needing tech help.',
        targetAudience: [
            'Students & Professionals',
            'Creators & Consultants',
            'Business Development Professionals',
            'Tech Community Members',
        ],
        whatItLooks: [
            'Simple referral commission model',
            'No client management needed',
            'We handle all delivery and communication',
            'Transparent commission structure',
        ],
        valueProposition: 'Connect businesses to solutions, earn fairly for qualified introductions',
        examples: [
            'Refer a qualified lead',
            'Mergex handles the entire sales & delivery process',
            'You earn commission based on project value',
        ],
        ctaText: 'Join as Referral Partner',
        accentColor: 'purple',
        icon: 'users',
    },
];

// Benefits Section
export const PARTNERSHIP_BENEFITS: Benefit[] = [
    {
        title: 'Single Execution Partner',
        description: 'Work with one trusted partner instead of coordinating multiple vendors.',
        icon: 'target',
    },
    {
        title: 'Fast Delivery',
        description: 'Get MVPs and production systems delivered in weeks, not months.',
        icon: 'zap',
    },
    {
        title: 'Clear Ownership',
        description: 'Well-defined responsibilities, transparent processes, and no surprises.',
        icon: 'shield',
    },
    {
        title: 'Revenue Sharing',
        description: 'Fair commission structures and long-term collaborative opportunities.',
        icon: 'trending-up',
    },
];

// Trust & Quality Principles
export const TRUST_PRINCIPLES: TrustPrinciple[] = [
    { text: 'We qualify every referral and partnership opportunity' },
    { text: 'We never spam clients or burn relationships' },
    { text: 'We maintain professional communication standards' },
    { text: 'Long-term trust always wins over short-term deals' },
];

// Hero Section Content
export const HERO_CONTENT = {
    headline: "Let's Build Together, Not Compete",
    subheadline: 'We partner with teams, agencies, and individuals who want to deliver more value without building everything themselves.',
    ctaText: 'Explore Partnership Models',
};

// Why Partner Section
export const WHY_PARTNER_CONTENT = {
    headline: 'Why Partner with Mergex',
    subheadline: 'Build better, faster, together',
};

// Referral Explainer Section
export const REFERRAL_EXPLAINER = {
    headline: 'How Referrals Work',
    steps: [
        {
            number: '01',
            title: 'You Refer',
            description: 'Introduce us to a qualified business that needs technology, AI, or digital solutions.',
        },
        {
            number: '02',
            title: 'We Deliver',
            description: 'Mergex handles the conversation, execution, and delivery. You stay in the loop if needed.',
        },
        {
            number: '03',
            title: 'You Earn',
            description: 'Receive a fair commission based on the project value once delivered.',
        },
    ],
    commissionNote: 'Commissions are structured fairly based on project scope and engagement type. Details are shared once a referral is qualified.',
};

// Trust Section
export const TRUST_SECTION = {
    headline: 'How We Protect Quality & Relationships',
    subheadline: 'Partnership built on trust, not transactions',
};

// CTA Section
export const CTA_SECTION = {
    headline: 'Ready to Partner?',
    subheadline: 'Choose the partnership model that fits your needs',
    partnerButtonText: 'Apply as a Partner',
    referralButtonText: 'Refer a Client',
};
