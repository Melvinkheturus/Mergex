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
            question: 'Why don\'t you list exact prices?',
            answer: 'Because every project is different. An MVP for a solo founder looks very different from a enterprise automation system. We price based on your specific needs, not generic packages. After our first conversation, you\'ll have a clear, transparent proposal.',
        },
        {
            question: 'Can you work within a budget?',
            answer: 'Absolutely. If you have a budget in mind, share it upfront. We\'ll design a phased approach that delivers maximum value within your constraints—or let you know honestly if it\'s not feasible.',
        },
        {
            question: 'Do you offer phased pricing?',
            answer: 'Yes. Most projects can be broken into phases: Phase 1 (MVP/Core), Phase 2 (Expansion), Phase 3 (Optimization). This lets you validate early and scale investment based on results.',
        },
        {
            question: 'What happens after the first call?',
            answer: 'We\'ll send a clear proposal with scope, timeline, deliverables, and pricing. No pressure. You decide if it makes sense. Most calls end with clarity, not commitment.',
        },
        {
            question: 'Do you have equity-based partnerships?',
            answer: 'For select early-stage startups with high potential, yes. We invest sweat equity in exchange for ownership. This is evaluated case-by-case during our initial conversation.',
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
