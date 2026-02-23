// Mergex Systems Content
// Solution Partner positioning and content

export const SYSTEMS_HERO = {
    headline: 'Building and Automating Systems That Help Businesses Scale',
    subheadline: 'Custom software · AI automation · Design & branding · Marketing systems',
    keyDifferentiator: 'MVPs in weeks, not months',
    primaryCTA: 'Book a Strategy Call',
    secondaryCTA: 'View Our Approach',
} as const;

export const WHAT_WE_SOLVE = {
    headline: 'The Revenue Architecture Engine of Mergex.',
    subheadline: 'Mergex Systems designs and deploys the full growth infrastructure behind modern businesses from positioning and automation to scalable software and AI-powered workflows. We don’t just build products. We architect structured systems that generate predictable revenue.',
    primaryCTA: 'Book a Strategy Call',
    proofCards: [
        {
            type: 'metric',
            value: 'Build in Weeks. Scale for Years.',
            label: 'Speed & Scalability',
            description: 'We deliver production-ready MVPs in 2-4 weeks engineered with the infrastructure required for long-term growth.',
            dark: false,
        },
        {
            type: 'statement',
            value: 'From Chaos',
            valueAccent: 'To Predictable Growth',
            label: 'Our Promise',
            description: 'We design integrated business systems that align strategy, automation, and execution engineered for scale.',
            dark: true,
        },
        {
            type: 'metric',
            value: 'Structured, Not Fragmented.',
            label: 'Unified Architecture',
            description: 'No juggling agencies. No disconnected tools. No chaos. Strategy, branding, automation, AI, and technology unified under one architecture.',
            dark: false,
        },
        {
            type: 'metric',
            value: '8+ growth systems engineered.',
            label: 'Track Record',
            description: 'From MVP launches to scalable revenue infrastructure each build engineered for long-term expansion, not short-term deployment.',
            dark: false,
        }
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
    headline: 'From Idea to Launch',
    subheadline: 'A proven 5-phase system designed to ship fast without cutting corners.',
    phases: [
        {
            number: '01',
            title: 'Discovery & Strategy',
            timeframe: '2-3 Days',
            description: 'We map your business goals, technical requirements, and success metrics. No assumptions—just direct questions that surface what actually matters.',
            outcome: 'Detailed project roadmap with scope, timeline, and milestones',
            deliverables: ['Technical specification document', 'Project timeline & budget', 'Success metrics defined'],
        },
        {
            number: '02',
            title: 'Design & Planning',
            timeframe: 'Week 1',
            description: 'Wireframes, user flows, and system architecture—all mapped before we write code. You\'ll see exactly what you\'re getting before development starts.',
            outcome: 'Approved designs and technical blueprint ready for build',
            deliverables: ['UI/UX wireframes & prototypes', 'Database schema & API design', 'Tech stack finalized'],
        },
        {
            number: '03',
            title: 'Rapid Development',
            timeframe: 'Weeks 2-4',
            description: 'This is where velocity kicks in. We ship working features every week so you see real progress, not just status updates.',
            outcome: 'Functional MVP deployed to staging environment',
            deliverables: ['Weekly demo calls', 'Continuous staging deployments', 'Feature-by-feature rollout'],
        },
        {
            number: '04',
            title: 'Launch & Deploy',
            timeframe: '2-4 Days',
            description: 'Production deployment, final QA, performance testing, and go-live support. We don\'t just hand it off—we make sure it works.',
            outcome: 'Live product accessible to your users',
            deliverables: ['Production environment setup', 'Domain & SSL configuration', 'Launch day support'],
        },
        {
            number: '05',
            title: 'Iterate & Scale',
            timeframe: 'Ongoing',
            description: 'Launch is the beginning, not the end. We monitor performance, gather user feedback, and continuously refine based on real data.',
            outcome: 'Data-driven improvements and feature expansion',
            deliverables: ['Analytics dashboard access', 'Monthly performance reports', 'Prioritized feature backlog'],
        },
    ],
} as const;

export const PROOF_SYSTEMS = {
    headline: 'The Tech Stack Built for Speed & Scale',
    subheadline: 'Modern tools that ship faster, scale effortlessly, and never hold you back.',
    techStack: [
        { name: 'Next.js', category: 'Frontend', descriptor: 'Instant page loads' },
        { name: 'React', category: 'Frontend', descriptor: 'Component reusability' },
        { name: 'TypeScript', category: 'Language', descriptor: 'Fewer bugs, better DX' },
        { name: 'Tailwind CSS', category: 'Styling', descriptor: 'Rapid UI development' },
        { name: 'Supabase', category: 'Backend', descriptor: 'Postgres + Auth in one' },
        { name: 'Node.js', category: 'Backend', descriptor: 'JavaScript everywhere' },
        { name: 'OpenAI', category: 'AI', descriptor: 'Intelligent features' },
        { name: 'Vercel', category: 'Deployment', descriptor: 'Zero-config hosting' },
        { name: 'Prisma', category: 'Database', descriptor: 'Type-safe queries' },
        { name: 'PostgreSQL', category: 'Database', descriptor: 'Battle-tested reliability' },
        { name: 'Stripe', category: 'Payments', descriptor: 'Secure transactions' },
        { name: 'Resend', category: 'Email', descriptor: 'Transactional emails' },
        { name: 'AWS', category: 'Cloud', descriptor: 'Global infrastructure' },
        { name: 'Docker', category: 'DevOps', descriptor: 'Consistent environments' },
        { name: 'GitHub Actions', category: 'CI/CD', descriptor: 'Automated deployments' },
        { name: 'Sentry', category: 'Monitoring', descriptor: 'Real-time error tracking' },
    ],
    trustStatement: 'We choose tools that let us move fast without breaking things. Every technology in our stack is proven, actively maintained, and built to scale from MVP to millions of users.',
} as const;

export const ENGAGEMENT_MODEL = {
    headline: 'Work With Us Your Way',
    subheadline: 'Three partnership models designed around outcomes, not hours. Choose what fits your goals and budget.',
    models: [
        {
            title: 'Project Sprint',
            tagline: 'Fixed scope, fixed price, fixed timeline',
            priceRange: 'Starting at $15k',
            duration: '2-6 weeks',
            description: 'Perfect for founders with a clear vision who need a specific feature, MVP, or product launched fast. We scope it, price it, build it, ship it.',
            features: [
                'Detailed project roadmap & timeline',
                'Fixed pricing with no surprise costs',
                'Weekly progress demos',
                'Full code ownership & documentation',
            ],
            idealFor: 'MVPs, landing pages, feature additions, or well-defined rebuild projects',
            bestFor: 'You know exactly what you need built',
        },
        {
            title: 'Growth Partner',
            tagline: 'Ongoing development, monthly commitment',
            priceRange: 'From $8k/month',
            duration: '3-12+ months',
            description: 'Think of us as your extended engineering team. Continuous development, iterative improvements, and long-term partnership for scaling products.',
            features: [
                'Dedicated team allocation',
                'Monthly sprint planning & reviews',
                'Flexible scope adjustments',
                'Priority support & rapid turnaround',
            ],
            idealFor: 'Growing startups needing continuous product development and iteration',
            bestFor: 'You want a reliable tech partner for the long haul',
            featured: true,
        },
        {
            title: 'Equity Build',
            tagline: 'We invest sweat equity for ownership',
            priceRange: 'Equity-based',
            duration: '3-6 months initial',
            description: 'For the right early-stage startups, we build your MVP in exchange for equity. Selective partnerships where we believe in the vision and want to be part of the journey.',
            features: [
                'Reduced or zero cash investment',
                'Full MVP development & launch',
                'Strategic product guidance',
                'Long-term aligned partnership',
            ],
            idealFor: 'Pre-seed and seed startups with strong vision and growth potential',
            bestFor: 'You have a compelling vision but limited runway',
        },
    ],
    philosophy: 'We price based on the value we deliver, not hours logged. Every engagement is custom-tailored to your goals, timeline, and budget.',
    cta: 'Not sure which model fits? Let\'s talk through your project and find the right approach.',
} as const;

export const SYSTEMS_CTA = {
    headline: 'Ready to Build Something That Scales?',
    subheadline: 'Let\'s start with a conversation about your goals',
    primaryCTA: 'Book a Strategy Call',
    secondaryCTA: 'Email Us',
} as const;
