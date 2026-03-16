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
            question: 'How does Mergex price its projects?',
            answer: 'Pricing depends on the complexity and scope of the system being built. Every engagement is scoped honestly — Mergex recommends the most efficient approach, not the most expensive one. After a strategy conversation, you receive a transparent quote that breaks down exactly where your investment is going.',
            chatPrompt: "What's the scope of your project? I'll help you understand the pricing factors."
        },
        {
            question: 'What factors affect the cost of a system build?',
            answer: 'The main factors are technical complexity — what is actually being built — and velocity — how fast it needs to be delivered. Other variables include the number of integrations, AI and automation components, and whether the engagement is a one-time build or an ongoing partnership. Mergex will always tell you what is worth building and what is not.',
            chatPrompt: "Is your project a one-time build or an ongoing partnership? Let's discuss what impacts the cost."
        },
        {
            question: 'Do you offer fixed pricing or flexible engagement models?',
            answer: 'Both. Launch and MVP projects are structured as fixed builds with defined scope and milestones. Growth and infrastructure engagements are scoped iteratively. Ongoing partnerships are structured as monthly or phased engagements based on what the business actually needs. Mergex recommends the model that best fits the project — not the one that maximizes revenue.',
            chatPrompt: "Are you looking for a fixed MVP build or an iterative growth partnership? I'll explain the best model for you."
        },
        {
            question: 'Is the ₹299 priority access credited toward the project?',
            answer: 'Yes. The ₹299 priority access fee is a project credit. If you move forward with a Mergex engagement, the full amount is deducted from the first project payment. It exists to ensure focused, genuine conversations — not to generate revenue.',
            chatPrompt: "Ready to book your priority access? I can clarify how the credit works toward your first payment."
        },
        {
            question: 'What happens after the system is built?',
            answer: 'After launch, businesses can continue working with Mergex to expand and optimize their systems. This may include new automation workflows, AI integrations, system upgrades, and infrastructure improvements as the business grows. The initial build is the foundation — the partnership is ongoing.',
            chatPrompt: "What is your long-term goal for this system? I'll share how we support growth after launch."
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
