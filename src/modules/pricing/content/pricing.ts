// Pricing Page Content
// Strategic pricing focused on pre-qualification and trust-building

export const PRICING_HERO = {
    headline: 'Pricing That Adapts to Your Scope, Speed, and Scale',
    subheadline: 'Every business problem is different. Our pricing reflects the complexity, urgency, and level of collaboration required—not a fixed checklist of services.',
} as const;

export const ENGAGEMENT_TIERS = {
    headline: 'Choose Your Engagement Model',
    subheadline: 'Whether you\'re launching an MVP or scaling operations, we have a model that fits.',
    tiers: [
        {
            name: 'Launch / MVP',
            tagline: 'Fast validation and first launch',
            bestFor: 'Early-stage ideas, validation, fast builds',
            includes: [
                'MVP development (2-4 week delivery)',
                'Core automation setup',
                'Core design systems & brand foundations',
                'Fast turnaround with weekly demos',
                'Launch-ready product',
            ],
            priceFraming: 'Typical engagements start in the low five-figure range, depending on scope and complexity.',
            icon: 'rocket',
            recommended: false,
        },
        {
            name: 'Growth Systems',
            tagline: 'Scale your operations and team',
            bestFor: 'Scaling teams, operational complexity, custom solutions',
            includes: [
                'Custom software & integrations',
                'AI automation workflows',
                'Branding & digital systems',
                'Iterative delivery with continuous refinement',
                'Dedicated project management',
            ],
            priceFraming: 'Most engagements fall in the mid five-figure range.',
            icon: 'trending-up',
            recommended: true,
        },
        {
            name: 'Ongoing Partnership',
            tagline: 'Long-term execution partner',
            bestFor: 'Continuous development, evolution, and optimization',
            includes: [
                'Continuous development & feature releases',
                'AI & automation optimization',
                'Content, marketing & systems alignment',
                'Dedicated collaboration & strategic planning',
                'Priority support and rapid iteration',
            ],
            priceFraming: 'Structured as monthly or phased engagements, based on your ongoing needs.',
            icon: 'users',
            recommended: false,
        },
    ],
} as const;

export const PRICING_FACTORS = {
    headline: 'What Affects Pricing',
    subheadline: 'Transparent factors that shape every engagement',
    factors: [
        {
            title: 'Scope & Complexity',
            description: 'The number of features, integrations, and technical requirements directly impacts timeline and resources.',
        },
        {
            title: 'Speed of Delivery',
            description: 'Need it in 2 weeks vs. 8 weeks? Faster timelines require focused sprints and prioritization.',
        },
        {
            title: 'Level of Automation & AI',
            description: 'Advanced AI integrations, custom models, and intelligent workflows require specialized expertise.',
        },
        {
            title: 'Depth of Involvement',
            description: 'Are we building, iterating, and managing long-term? Or delivering a defined scope and handing off?',
        },
        {
            title: 'Ongoing vs. One-Time',
            description: 'Monthly partnerships are structured differently than project-based engagements.',
        },
    ],
    closingStatement: 'We\'ll always recommend the most efficient approach—not the most expensive one.',
    labsClarification: 'Labs engagements (AI content, visuals, experiments) are scoped separately based on creative depth and exploration goals.',
} as const;

export const WHAT_YOU_DONT_PAY_FOR = {
    headline: 'What You Don\'t Pay For',
    subheadline: 'No hidden fees. No bloat. Just what you need.',
    items: [
        {
            title: 'No Unnecessary Tools',
            description: 'We don\'t pad budgets with expensive tools you don\'t need. Modern, efficient stacks only.',
        },
        {
            title: 'No Bloated Retainers',
            description: 'You pay for work delivered, not arbitrary monthly minimums that don\'t match your pace.',
        },
        {
            title: 'No Handoff Confusion',
            description: 'Clean documentation, training, and support are included—not separate "knowledge transfer" fees.',
        },
        {
            title: 'No Paying for Things You Don\'t Need',
            description: 'We scope honestly. If a feature won\'t move the needle, we\'ll tell you before building it.',
        },
    ],
} as const;

export const PRICING_FAQ = {
    headline: 'Pricing Questions',
    questions: [
        {
            question: 'What actually determines the final project cost?',
            answer: 'Cost is driven by two main factors: Technical complexity (what we are building) and Velocity (how fast you need it). After our strategy call, we provide a transparent quote that breaks down exactly where your investment is going.',
        },
        {
            question: 'Do you offer fixed pricing?',
            answer: 'For clearly defined projects like MVPs or brand foundations, we offer fixed pricing. For more complex, evolving systems, we often use a monthly or phased model that allows for agility and pivots without constant contract renegotiation.',
        },
        {
            question: 'Do you work on monthly retainers?',
            answer: 'We prefer the term "Partnerships." Unlike traditional agencies that charge for "access," our monthly models are focused on continuous delivery — meaning you pay for a dedicated amount of execution and progress every month.',
        },
        {
            question: 'Can we scale the project in phases to manage investment?',
            answer: 'Absolutely. We highly recommend a phased approach. Start with the core system (Phase 1), validate it, and then unlock more advanced features (Phase 2) once the foundation is solid. This reduces risk and manages cash flow.',
        },
        {
            question: 'How do you handle scope changes after a price is set?',
            answer: 'We build flexibility into our agreements. Minor changes are usually absorbed. If a significant pivot is required, we simply re-evaluate the priority list together. You remain in control of the budget at all times.',
        },
    ],
} as const;

export const PRICING_CTA = {
    headline: 'Let\'s Define the Right Scope Before We Define the Price',
    subheadline: 'Most calls end with clear next steps—not pressure.',
    primaryCTA: 'Book a Strategy Call',
    secondaryCTA: 'Email Us',
    reassurance: 'No sales pitch. Just an honest conversation about what you\'re building and how we can help.',
    finalReassurance: 'We\'ll always recommend the simplest, most effective approach — even if that means building less.',
} as const;
