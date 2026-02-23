// Homepage Content Constants
// Centralized content for marketing copy and CTAs

export const HERO_CONTENT = {
    tagline: 'Your Solution Partner',
    headline: 'Build Faster. Scale Smarter.\\nGrow Without Limits.',
    subheadline: 'One partner for AI-powered content, custom development, and intelligent automation. Stop juggling vendors. Start building momentum.',
    cta: {
        primary: 'Book a Strategy Call',
        secondary: 'Explore the Ecosystem',
    },
    stats: [
        { label: 'Projects Delivered', value: '50+' },
        { label: 'Average MVP Timeline', value: '2-4 weeks' },
        { label: 'Countries Served', value: '5+' },
    ],
} as const;

export const PORTAL_CARDS = {
    labs: {
        title: 'Mergex Labs',
        tagline: 'AI Content Studio',
        description: 'Where Creativity Meets Intelligence',
        videoSrc: '/assets/ecosystem/videos/labs-portal.mp4',
        videoPoster: '/assets/ecosystem/labs-portal-still.png',
        colorTone: 'purple' as const,
        color: '#8B5CF6',
        features: ['AI Visual Generation', 'Content Automation', 'Creative Workflows'],
        href: '/labs',
    },
    systems: {
        title: 'Mergex Systems',
        tagline: 'Solution Partner',
        description: 'Building and automating systems that scale',
        videoSrc: '/assets/ecosystem/videos/systems-portal.mp4',
        videoPoster: '/assets/ecosystem/systems-portal-still.png',
        colorTone: 'blue' as const,
        color: '#3B82F6',
        features: ['Custom software', 'Cloud architecture', 'Process automation'],
        href: '/systems',
    },
} as const;




// export const WHAT_WE_BUILD = {
//     headline: 'Built for Makers Who Move Fast',
//     subheadline: 'Your ideas deserve momentum. We clear the path.',
//     problems: [
//         {
//             challenge: 'Content that takes forever',
//             solution: 'AI-powered visual generation at scale',
//             division: 'Labs',
//             icon: 'spark',
//         },
//         {
//             challenge: 'Tech that holds you back',
//             solution: 'Custom apps & AI automation that work',
//             division: 'Systems',
//             icon: 'build',
//         },
//         {
//             challenge: 'Branding that feels generic',
//             solution: 'Design systems that stand out',
//             division: 'Labs',
//             icon: 'palette',
//         },
//         {
//             challenge: 'Slow, manual workflows',
//             solution: 'Marketing automation that scales',
//             division: 'Systems',
//             icon: 'flow',
//         },
//         {
//             challenge: 'Ideas stuck in planning',
//             solution: 'MVPs shipped in weeks, not months',
//             division: 'Systems',
//             icon: 'rocket',
//         },
//         {
//             challenge: 'Disconnected tools',
//             solution: 'Integrated systems that talk to each other',
//             division: 'Systems',
//             icon: 'link',
//         },
//     ],
// } as const;

export const PORTFOLIO_PREVIEW = {
    headline: 'Featured Work',
    subheadline: 'Building the future, one project at a time',
    cta: 'View All Work',
    projects: [
        {
            title: 'Cedar Elevators',
            description: 'Enterprise e-commerce platform with real-time inventory',
            division: 'Systems',
            tags: ['Next.js', 'Supabase', 'Stripe'],
            image: '/projects/cedar.jpg',
        },

        {
            title: 'AI Product Photography',
            description: 'Generated 500+ product visuals for e-commerce brand',
            division: 'Labs',
            tags: ['Midjourney', 'DALL-E', 'Runway'],
            image: '/projects/ai-photography.jpg',
        },
    ],
} as const;



export const TRUST_SIGNALS = {
    headline: 'Trusted by Ambitious Makers',
    clients: [
        'Cedar Elevators',
        'Local Business Partners',
        'Startup Founders',
        'Growing Teams',
    ],
    stats: [
        { label: 'Projects Delivered', value: '50+' },
        { label: 'SaaS Clients', value: '15+' },
        { label: 'Countries Served', value: '5' },
        { label: 'Team Specialists', value: '8+' },
    ],
} as const;

export const BLOG_PREVIEW = {
    headline: 'Latest Insights',
    subheadline: 'Thoughts on AI, development, and building the future',
    cta: 'Read All Articles',
    articles: [
        {
            title: 'How AI is Transforming Content Creation',
            category: 'AI & Automation',
            readTime: '5 min',
            excerpt: 'Exploring how AI tools are revolutionizing the creative process for brands and creators.',
            href: '/blog/ai-content-creation',
            date: '2026-01-20',
        },
        {
            title: 'Building SaaS Products: Lessons from Unisynk',
            category: 'Product Development',
            readTime: '8 min',
            excerpt: 'Key insights from building and launching our flagship SaaS product.',
            href: '/blog/building-unisynk',
            date: '2026-01-15',
        },
        {
            title: 'Why Every Business Needs AI Automation',
            category: 'Business Strategy',
            readTime: '6 min',
            excerpt: 'The competitive advantage of integrating AI into your operations.',
            href: '/blog/ai-automation-business',
            date: '2026-01-10',
        },
    ],
} as const;

export const PARTNER_CTA = {
    headline: 'Build With Us. Not Against Us.',
    subheadline: 'Join our partner network and grow together',
    description: 'We believe in collaboration over competition. Partner with Mergex to co-create value, share resources, and build the future together.',
    benefits: [
        'Revenue share programs',
        'Co-marketing opportunities',
        'Priority technical support',
        'Early access to products',
    ],
    cta: {
        primary: 'Become a Partner',
        secondary: 'Learn More',
    },
} as const;

export const FINAL_CTA = {
    headline: "Let's Build Something That Lasts",
    subheadline: 'Your vision. Our execution. Unstoppable results.',
    cta: {
        primary: 'Book a Strategy Call',
        secondary: 'Explore Our Work',
    },
} as const;

// Problem Context Section
export const PROBLEM_CONTEXT = {
    headline: 'Why We Exist: To Kill the "Wait Time"',
    subheadline: 'Great ideas die in the waiting room of "development cycles". We destroy the gap between thought and deployment.',
    problems: [
        {
            title: 'Bloated Agency Models',
            description: 'Layers of management, endless meetings, and bills for "strategy" before a single line of code is written.',
            icon: 'users',
        },
        {
            title: 'Technical Stagnation',
            description: 'By the time your MVP launches (6 months later), your competitor has already pivoted twice. Speed is survival.',
            icon: 'clock',
        },
        {
            title: 'AI Without Strategy',
            description: 'Access to tools isn\'t enough. You need the engineering to weave them into a coherent system.',
            icon: 'brain',
        },
        {
            title: 'Disconnected Systems',
            description: 'Marketing tools that don\'t talk to CRM. Apps that don\'t sync. Data silos that throttle growth.',
            icon: 'link',
        },
    ],
    closingStatement: 'We believe software should be fluid, not frozen. If you\'re ready to sprint, we\'re ready to pave the road.',
} as const;

// Problem With Fragmentation Section
export const PROBLEM_FRAGMENTATION = {
    headline: 'The Problem With Fragmentation',
    subheadline: 'Most businesses are held back not by a lack of tools—but by too many disconnected ones.',
    problems: [
        {
            title: 'Multiple Vendors, One Headache',
            description: 'One agency for branding, another for dev, a freelancer for AI, and a consultant for strategy. You\'re not building—you\'re coordinating.',
            icon: 'users',
        },
        {
            title: 'Disconnected Tools',
            description: 'Your marketing platform doesn\'t talk to your CRM. Your analytics don\'t sync with your ads. Data lives in silos. Growth dies in the gaps.',
            icon: 'link',
        },
        {
            title: 'Slow Execution',
            description: 'Timelines stretch because no one owns the full picture. Approvals ping-pong between teams. Momentum dies in the handoffs.',
            icon: 'clock',
        },
        {
            title: 'AI Hype Without Systems',
            description: 'Access to ChatGPT doesn\'t make you automated. You need engineering, integration, and strategy—not just subscriptions.',
            icon: 'brain',
        },
    ],
    closingStatement: 'Mergex exists to eliminate the coordination tax. One partner. One system. Faster results.',
} as const;


// How We Work Section
export const HOW_WE_WORK = {
    headline: 'A Process Built for Speed, Not Bureaucracy',
    subheadline: 'Four phases. Zero wasted time.',
    steps: [
        {
            number: '01',
            title: 'Discover',
            description: 'We begin by understanding your goals, users, and constraints. No assumptions—just clarity.',
            icon: 'search',
        },
        {
            number: '02',
            title: 'Design',
            description: 'Strategy first, execution second. We map the roadmap before writing a single line of code.',
            icon: 'pencil',
        },
        {
            number: '03',
            title: 'Build',
            description: 'This is where speed matters. MVPs in 2-4 weeks. Weekly demos. Iterative progress.',
            icon: 'code',
        },
        {
            number: '04',
            title: 'Scale',
            description: 'Launch is the beginning, not the end. We optimize, refine, and grow based on real feedback.',
            icon: 'rocket',
        },
    ],
    keyMessages: [
        'MVPs in 2-4 weeks, not months',
        'One partner—no coordination overhead',
        'Ship fast, learn faster, improve continuously',
    ],
} as const;

// Proof/Trust Signals Section
export const PROOF_SIGNALS = {
    headline: 'We Are Builders, Not Just Billers',
    subheadline: 'Most agencies bill by the hour. We build for the outcome.',
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
    trustStatement: 'Mergex is a collective of product engineers, AI artists, and system architects who disbanded from traditional corporate structures to build faster, smarter systems for founders who refuse to wait.',
} as const;

export const ECOSYSTEM_CONTENT = {
    headline: 'What We Are: A Full-Stack Growth Engine',
    subheadline: 'The intersection of engineering and creativity. A single brain for your digital body.',
} as const;


