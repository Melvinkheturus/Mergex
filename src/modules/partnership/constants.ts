import { PartnershipType, Benefit, TrustPrinciple } from './types';

// Partnership Types Configuration
export const PARTNERSHIP_TYPES: PartnershipType[] = [
    {
        id: 'strategic',
        title: 'Service Partners',
        tagline: 'Agencies, Dev Shops, Consultancies',
        description: 'Expand your capabilities without expanding your team. We act as your specialized technical arm for complex engineering.',
        targetAudience: [
            'Digital Agencies',
            'Development Shops',
            'Business Consultancies',
            'Marketing Firms'
        ],
        whatItLooks: [
            'White-Label Build: We build under your brand',
            'Co-Delivery: We partner openly with you',
            'Capability Extension: Specialized technical arm'
        ],
        valueProposition: 'Expand your capabilities without expanding your team',
        examples: [
            'Agency brings client, Mergex handles tech development',
            'Consultancy scales delivery without hiring engineers'
        ],
        ctaText: 'Apply as a Service Partner',
        accentColor: 'violet',
        icon: 'building',
    },
    {
        id: 'referral',
        title: 'Referral Partners',
        tagline: 'Professionals, Creators, Advisors',
        description: 'Connect your network with Mergex and earn a percentage. Simple, transparent revenue sharing for qualified introductions.',
        targetAudience: [
            'Industry Professionals',
            'Creators & Influencers',
            'Business Advisors',
            'Tech Community Leaders'
        ],
        whatItLooks: [
            'Simple referral commission model (5% base)',
            'Growth & Advisory Tiers for active partners',
            'We handle all execution and delivery',
            'Transparent milestone-based payments'
        ],
        valueProposition: 'Connect your network with Mergex and earn a percentage',
        examples: [
            'Refer a qualified lead',
            'Earn 5% base commission on closed projects',
            'Advisory partners stay involved for retaining models'
        ],
        ctaText: 'Join Referral Program',
        accentColor: 'purple',
        icon: 'users',
    },
    {
        id: 'collaborator',
        title: 'Brand Collaborators',
        tagline: 'Designers, Creators, Communities',
        description: 'Co-create digital products and campaigns with our team. We love building cool things with cool people.',
        targetAudience: [
            'Designers & Creatives',
            'Content Creators',
            'Tech Communities',
            'Open Source Builders'
        ],
        whatItLooks: [
            'Product Collabs: Joint digital product launches',
            'Open Source Tools: Building free public tools',
            'Tech Content & Media: Co-hosted events & content'
        ],
        valueProposition: 'We love building cool things with cool people',
        examples: [
            'Co-launch a niche software tool',
            'Build an open-source library together',
            'Create joint technical content'
        ],
        ctaText: 'Discuss Collaboration',
        accentColor: 'violet',
        icon: 'zap',
    }
];

// Benefits Section
export const PARTNERSHIP_BENEFITS: Benefit[] = [
    {
        title: 'Zero Vendor Friction',
        description: 'One team, one system. No more coordinating multiple disconnected vendors.',
        icon: 'shield',
    },
    {
        title: 'Production-Ready Fast',
        description: 'Get MVPs and production systems delivered in weeks, not months.',
        icon: 'zap',
    },
    {
        title: 'AI-Native Execution',
        description: 'Built for the future using cutting-edge AI engineering practices.',
        icon: 'target',
    },
    {
        title: 'Fair & Transparent',
        description: 'Complete clarity on project scope, timelines, and revenue sharing.',
        icon: 'trending-up',
    },
];

// Trust & Quality Principles
export const TRUST_PRINCIPLES: TrustPrinciple[] = [
    { text: 'We never solicit your clients. Your relationships are protected.' },
    { text: 'We don\'t overpromise scope. We build what works.' },
    { text: 'We communicate directly, professionally, and transparently.' },
    { text: 'We prioritize long-term wins over short-term revenue.' },
];

// Hero Section Content
export const HERO_CONTENT = {
    headline: "Build Together. Grow Together.",
    subheadline: 'Whether you’re an agency looking to expand your capabilities, a consultant connecting businesses with solutions, or a creator building alongside us—Mergex is built for collaboration.',
    ctaText: 'Explore Partnership Models',
};

// Why Partner Section
export const WHY_PARTNER_CONTENT = {
    headline: 'Why Build With Mergex',
    subheadline: 'Everything you need to scale delivery and revenue.',
};

// Referral Explainer Section
export const REFERRAL_EXPLAINER = {
    headline: 'Simple, Transparent Revenue Sharing.',
    steps: [
        {
            number: '01',
            title: 'The Base Tier',
            description: 'Earn 5% on any qualified project that closes from a simple introduction.',
        },
        {
            number: '02',
            title: 'The Growth Tier',
            description: 'For active partners referring multiple projects. Enjoy custom percentage structures and priority support.',
        },
        {
            number: '03',
            title: 'The Advisory Tier',
            description: 'For partners who stay involved in product strategy while we execute. Custom percentage plus a retainer model.',
        },
    ],
};

// Trust Section
export const TRUST_SECTION = {
    headline: 'Our Partnership Philosophy',
    subheadline: 'Partnerships built on transparency and execution.',
};

// CTA Section
export const CTA_SECTION = {
    headline: 'Ready to collaborate?',
    subheadline: 'Choose the path that best aligns with your goals.',
    partnerButtonText: 'Apply as a Partner',
    referralButtonText: 'Join Referral Program',
    collaboratorButtonText: 'Discuss a Collaboration'
};

export const PARTNER_FAQ_DATA = {
    headline: "Partner FAQ",
    subheadline: "Your Questions,",
    subheadlineItalic: "Answered.",
    description: "Everything you need to know about working together as strategic or referral partners.",
    ctaText: "Still have questions?",
    ctaSubtext: "We're here to help you navigate our partnership ecosystem.",
    buttonText: "Connect with us",
    email: "hello@mergex.in",
    microcopy: "Looking forward to building together.",
    questions: [
        {
            question: "What types of businesses make the best Service Partners?",
            answer: "Agencies and consultancies (marketing, branding, dev shops) that need to fill specialized technical gaps for their clients.",
            chatPrompt: "Which types of agencies usually partner with Mergex?"
        },
        {
            question: "How exactly does the 5% referral fee work?",
            answer: "Earn 5% of the total project value for qualified introductions, paid once delivery is complete and final payment is received.",
            chatPrompt: "How do the referral commissions work and when are they paid?"
        },
        {
            question: "What's the difference between a Registered Affiliate and a one-time referral?",
            answer: "Registered Affiliates get an official ID and automated tracking for faster introductions, while one-time referrals require manual verification each time.",
            chatPrompt: "What are the benefits of becoming a Registered Affiliate?"
        },
        {
            question: "What happens if the business I referred doesn't convert into a project?",
            answer: "Nothing changes. There are no penalties or impact on your standing as a partner if a referral doesn't transform into a project.",
            chatPrompt: "Is there any penalty if my referral doesn't convert?"
        },
        {
            question: "Can a Service Partner also participate in the referral program?",
            answer: "Yes, the models are independent and fully compatible. You can be a Service Partner and still refer projects that don't fit your delivery model.",
            chatPrompt: "Can I be a referral partner and a service partner?"
        },
        {
            question: "How do Brand Collaborations typically work in practice?",
            answer: "Based on genuine alignment and audience overlap, ranging from co-created content and joint campaigns to shared digital products.",
            chatPrompt: "How do you decide on brand collaborations?"
        }
    ],

    aiSuggestions: [
        "How do I become a Registered Affiliate?",
        "What is the referral commission percentage?",
        "Can agencies white-label Mergex services?",
        "How do you handle branding in collaborations?"
    ]
};
