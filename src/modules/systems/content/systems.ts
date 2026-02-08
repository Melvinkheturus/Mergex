// Mergex Systems Content
// Solution Partner positioning and content

export const SYSTEMS_HERO = {
    headline: 'Building and Automating Systems\\nThat Help Businesses Scale',
    subheadline: 'Custom software · AI automation · Design & branding · Marketing systems',
    keyDifferentiator: 'MVPs in weeks, not months',
    primaryCTA: 'Book a Strategy Call',
    secondaryCTA: 'View Our Approach',
} as const;

export const WHAT_WE_SOLVE = {
    headline: 'Custom software for businesses that want predictable growth.',
    subheadline: 'We work with founders and small teams who want a clear plan, consistent execution, and measurable results from their tech investments.',
    primaryCTA: 'Book a discovery call',
    proofCards: [
        {
            type: 'metric',
            value: '2-4 weeks',
            label: 'Average time to MVP',
            description: 'From initial call to working product in your hands',
        },
        {
            type: 'testimonial',
            quote: 'Clear process and great communication.',
            author: 'Founder, DTC Brand',
            context: 'E-commerce automation project',
        },
        {
            type: 'metric',
            value: '98%',
            label: 'Uptime across all projects',
            description: 'Production-grade infrastructure from day one',
        },
        {
            type: 'metric',
            value: '20+',
            label: 'Projects delivered',
            description: 'From MVPs to full-scale platforms',
        },
    ],
} as const;

export const OUR_SOLUTIONS = {
    headline: 'Our Solutions',
    subheadline: 'Outcome-focused, not feature-dumping',
    pillars: [
        {
            navLabel: 'Development.',
            title: 'Software & App Development',
            description: 'From concept to launch, we build production-ready applications. Web platforms, mobile apps, SaaS products - engineered for scale, maintained for longevity, designed to evolve with your business.',
            capabilities: [
                'Web applications (Next.js, React, modern stacks)',
                'Mobile apps (iOS, Android, cross-platform)',
                'SaaS platforms & MVPs',
                'Enterprise dashboards & internal tools',
            ],
            outcomes: [
                'MVPs in 2-4 weeks',
                'Scalable from day one',
                'Maintainable, modern code',
            ],
        },
        {
            navLabel: 'Automation.',
            title: 'AI Automation & Integrations',
            description: 'Eliminate repetitive work and connect your tech stack. We build intelligent automation systems that save hours daily, reduce errors, and let your team focus on what actually moves the needle.',
            capabilities: [
                'Workflow automation (no-code + custom)',
                'AI-powered tools & assistants',
                'System integrations (APIs, webhooks)',
                'Data pipelines & intelligence layers',
            ],
            outcomes: [
                'Hours saved daily',
                'Errors eliminated',
                'Data-driven decisions',
            ],
        },
        {
            navLabel: 'Branding.',
            title: 'Brand Identity & Strategy',
            description: 'Build a brand that sticks. From visual identity to brand strategy, we create cohesive systems that resonate with your audience and differentiate you in crowded markets.',
            capabilities: [
                'Brand identity & visual systems',
                'Brand strategy & positioning',
                'Logo & visual design',
                'Brand guidelines & assets',
            ],
            outcomes: [
                'Memorable brand presence',
                'Clear market positioning',
                'Consistent visual language',
            ],
        },
        {
            navLabel: 'Designing.',
            title: 'UI/UX Design & Product',
            description: 'Design that converts. User-centered interfaces that feel intuitive, look professional, and drive measurable results. From wireframes to high-fidelity prototypes.',
            capabilities: [
                'UI/UX design for web & mobile',
                'Design systems & component libraries',
                'Product design & user research',
                'Prototyping & user testing',
            ],
            outcomes: [
                'Intuitive user experiences',
                'Higher conversion rates',
                'Streamlined workflows',
            ],
        },
        {
            navLabel: 'Marketing.',
            title: 'Digital Marketing Systems',
            description: 'Marketing infrastructure that runs on autopilot. From SEO to paid campaigns, we build systems that attract, convert, and retain customers while you focus on delivering value.',
            capabilities: [
                'Marketing automation setup',
                'SEO & content strategy',
                'Landing pages & conversion funnels',
                'Analytics & growth tracking',
            ],
            outcomes: [
                'Measurable ROI',
                'Automated lead generation',
                'Data-backed campaigns',
            ],
        },
    ],
} as const;

export const SPEED_ADVANTAGE = {
    headline: 'MVPs in Weeks, Not Months',
    subheadline: 'Speed is our competitive edge—and yours',
    comparison: {
        traditional: '3-6 months for an MVP',
        systems: '2-4 weeks to first working version',
    },
    howWeDoIt: [
        'Modern tech stacks with zero legacy baggage',
        'Pre-built modular component libraries',
        'Iterative delivery: ship → learn → refine → repeat',
        'Small, focused teams. No bureaucracy. No wasted meetings.',
    ],
} as const;

export const HOW_WE_WORK_SYSTEMS = {
    headline: 'How We Work',
    subheadline: 'Predictable process. Exceptional outcomes.',
    phases: [
        {
            number: '01',
            title: 'Understand',
            description: 'Your goals, your users, your constraints. We start by listening, not assuming.',
            outcome: 'Crystal-clear project scope & roadmap',
            icon: 'search',
        },
        {
            number: '02',
            title: 'Design',
            description: 'Solution architecture, UI/UX, and technical planning—all mapped before we write a single line of code.',
            outcome: 'Approved designs & technical blueprint',
            icon: 'pencil',
        },
        {
            number: '03',
            title: 'Build',
            description: 'This is where we move fast. Rapid development with weekly demos so you see progress in real-time.',
            outcome: 'Working MVP or V1 in your hands',
            icon: 'code',
        },
        {
            number: '04',
            title: 'Launch',
            description: 'Deployment, testing, go-live support. We don\'t just hand it off—we make sure it works.',
            outcome: 'Live product in users\' hands',
            icon: 'rocket',
        },
        {
            number: '05',
            title: 'Optimize & Scale',
            description: 'Launch is just the beginning. We review analytics, gather feedback, iterate, and grow.',
            outcome: 'Continuous improvement and growth',
            icon: 'trending-up',
        },
    ],
} as const;

export const PROOF_SYSTEMS = {
    headline: 'Built with Modern, Proven Tools',
    subheadline: 'No legacy tech. No shortcuts. Just tools that scale.',
    techStack: [
        { name: 'Next.js', category: 'Frontend' },
        { name: 'React', category: 'Frontend' },
        { name: 'TypeScript', category: 'Language' },
        { name: 'Tailwind CSS', category: 'Styling' },
        { name: 'Supabase', category: 'Backend' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'OpenAI', category: 'AI' },
        { name: 'Vercel', category: 'Deployment' },
    ],
    trustStatement: 'Every line of code is written for scale. Every design decision is user-first. Every partnership is built to last.',
} as const;

export const ENGAGEMENT_MODEL = {
    headline: 'Flexible Engagement Models',
    subheadline: 'Outcome-driven pricing. No hourly billing. No one-size-fits-all packages.',
    models: [
        {
            title: 'Project-Based',
            description: 'Fixed scope, clear deliverables, transparent pricing. Start and finish with clarity.',
            idealFor: 'MVPs, specific features, or well-defined projects',
        },
        {
            title: 'Retainer Partnership',
            description: 'Ongoing partnership with monthly commitment. Think of us as your extended team.',
            idealFor: 'Continuous development and long-term growth',
        },
        {
            title: 'Equity Partnerships',
            description: 'For the right early-stage startups, we invest sweat equity in exchange for ownership.',
            idealFor: 'Pre-seed and seed startups with high potential',
        },
    ],
    philosophy: 'We price based on outcomes, not hours. Every engagement is custom-tailored to your goals, budget, and timeline.',
} as const;

export const SYSTEMS_CTA = {
    headline: 'Ready to Build Something That Scales?',
    subheadline: 'Let\'s start with a conversation about your goals',
    primaryCTA: 'Book a Strategy Call',
    secondaryCTA: 'Email Us',
} as const;
