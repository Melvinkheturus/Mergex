// Pricing Page Content
// Strategic pricing focused on pre-qualification and trust-building

export const PRICING_HERO = {
    headline: 'Pricing Framework: Rules Over Numbers',
    subheadline: 'We don\'t use fixed price lists. We use a structured but flexible system that adapts to your impact, complexity, and scale.',
} as const;

export const ENGAGEMENT_TIERS = {
    headline: 'Choose Your Engagement Model',
    subheadline: 'Transparent models designed for different stages of growth and ambition.',
    tiers: [
        {
            name: 'Project Model',
            tagline: 'Defined scope, strategic delivery',
            bestFor: 'Launching MVPs, specific system builds, or one-time strategic upgrades.',
            includes: [
                'Scoped deliverables & milestones',
                'End-to-end implementation',
                'Clear handoff & documentation',
                'Focused 2-8 week delivery cycles',
                'Business-impact focused architecture',
            ],
            priceFraming: 'Pricing depends on scope, features, and business impact. Fixed-scope delivery for high-impact projects.',
            icon: 'rocket',
            recommended: false,
        },
        {
            name: 'Retainer Model',
            tagline: 'Execution intensity on demand',
            bestFor: 'Scaling teams that need consistent momentum and reliable execution.',
            includes: [
                'Monthly engagement based on scope',
                'Continuous development & iteration',
                'Priority execution bandwidth',
                'Active project management',
                'Strategic systems refinement',
            ],
            priceFraming: 'Monthly engagement based on scope and execution intensity. We adjust based on your workload requirements.',
            icon: 'trending-up',
            recommended: true,
        },
        {
            name: 'Growth Partnership',
            tagline: 'Aligned growth and contribution',
            bestFor: 'Deep integration where our success is tied directly to your impact.',
            includes: [
                'Aligned growth objectives',
                'Deep system & team integration',
                'Revenue & impact-driven contribution',
                'Continuous strategic evolution',
                'Base support + impact-based scaling',
            ],
            priceFraming: 'Aligned growth partnership based on contribution and impact. Aligned incentives for long-term scale.',
            icon: 'users',
            recommended: false,
        },
    ],
} as const;

export const PRICING_FACTORS = {
    headline: 'Our Pricing Variables',
    subheadline: 'We define every quote using three core variables to ensure fairness and consistency.',
    factors: [
        {
            title: 'Value (Impact)',
            description: 'Does this generate revenue, improve your brand equity, or save significant operational costs?',
        },
        {
            title: 'Complexity (Depth)',
            description: 'From simple web systems to advanced AI automation and full-scale architectural infrastructure.',
        },
        {
            title: 'Involvement (Team)',
            description: 'The team required and the duration of commitment-from single architects to full execution teams.',
        },
    ],
    closingStatement: 'Pricing = Value × Complexity × Involvement. This framework ensures you pay for impact, not just hours.',
    labsClarification: 'Mergex Labs experiments are scoped separately based on the depth of research and creative exploration required.',
} as const;

export const WHAT_YOU_DONT_PAY_FOR = {
    headline: 'What You Don\'t Pay For',
    subheadline: 'Premium results without the traditional agency bloat.',
    items: [
        {
            title: 'No Fixed Menu Bias',
            description: 'You aren\'t forced into a package that doesn\'t fit. Every project is designed for its specific context.',
        },
        {
            title: 'No Bloated Retainers',
            description: 'We don\'t believe in "billable hours" for the sake of it. You pay for execution and impact.',
        },
        {
            title: 'No Hidden Complexity Fees',
            description: 'Transparency is our default. We scope the difficulty upfront, so there are no "surprise" variations.',
        },
        {
            title: 'No Paying for Waste',
            description: 'If a feature doesn\'t move your needle, we\'ll tell you. We optimize for your results, not our output.',
        },
    ],
} as const;

export const PRICING_FAQ = {
    headline: 'Pricing Questions',
    questions: [
        {
            question: 'Why doesn\'t Mergex have fixed price menus?',
            answer: 'We aren\'t a restaurant; we\'re architects. Fixed numbers hurt both the client and the builder because scope, maturity, and value vary wildly. We use a Pricing Framework that ensures you pay fairly for the specific impact and complexity of your project.',
            chatPrompt: "Want to understand the logic behind your specific project? Let's talk about the variables."
        },
        {
            question: 'How do you calculate a quote?',
            answer: 'We look at three variables: Value (revenue/brand impact), Complexity (technical depth), and Involvement (team and time). By focusing on rules rather than random numbers, we provide quotes that are consistent, fair, and aligned with your goals.',
            chatPrompt: "Curious about which variable impacts your budget the most? We can break it down."
        },
        {
            question: 'Which engagement model is right for me?',
            answer: 'It depends on your goal. Projects are for defined builds (MVPs, migrations). Retainers are for companies needing consistent execution bandwidth. Partnerships are for deep, long-term alignment where we share the responsibility for growth.',
            chatPrompt: "Tell me about your current scale, and I'll recommend the most efficient model."
        },
        {
            question: 'Is the ₹299 priority access credited toward the project?',
            answer: 'Yes. The ₹299 priority access fee is a project credit. If you move forward with a Mergex engagement, the full amount is deducted from the first project payment. It exists to ensure focused, genuine conversations - not to generate revenue.',
            chatPrompt: "Ready to book your priority access? I can clarify how the credit works toward your first payment."
        },
        {
            question: 'Do you offer revenue-share or equity models?',
            answer: 'Yes, through our Partnership Model. This is reserved for projects where we have significant influence over the revenue outcome and deep integration with the core team. It involves a base support level plus an impact-based contribution.',
            chatPrompt: "Interested in a partnership model? Let's discuss how we can align our incentives."
        },
    ],
} as const;


export const PRICING_CTA = {
    headline: 'Let\'s Define the Framework Before the Quote',
    subheadline: 'Pricing is the last step. Understanding the impact is the first.',
    primaryCTA: 'Book a Strategy Call',
    secondaryCTA: 'Email Us',
    reassurance: 'No sales pitch. Just an honest conversation about what you\'re building and how we can help.',
    finalReassurance: 'We\'ll always recommend the most efficient model for your current stage.',
} as const;
