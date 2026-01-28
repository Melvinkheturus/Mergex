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
        description: 'Where creativity meets intelligent systems',
        videoSrc: '/assets/ecosystem/videos/labs-portal.mp4',
        videoPoster: '/assets/ecosystem/labs-portal-still.png',
        colorTone: 'purple' as const,
        color: '#8B5CF6',
        features: ['AI visual generation', 'Content automation', 'Creative workflows'],
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
    platform: {
        title: 'Mergex Platform',
        tagline: 'Products We Build',
        description: 'Solutions born from real problems',
        videoSrc: '/assets/ecosystem/videos/platform-portal.mp4',
        videoPoster: '/assets/ecosystem/platform-portal-still.png',
        colorTone: 'green' as const,
        color: '#10B981',
        features: ['Scalable SaaS', 'Unified tools', 'Enterprise ready'],
        href: '/products',
    },
} as const;



export const WHAT_WE_BUILD = {
    headline: 'Built for Makers Who Move Fast',
    subheadline: 'Your ideas deserve momentum. We clear the path.',
    problems: [
        {
            challenge: 'Content that takes forever',
            solution: 'AI-powered visual generation at scale',
            division: 'Labs',
            icon: 'spark',
        },
        {
            challenge: 'Tech that holds you back',
            solution: 'Custom apps & AI automation that work',
            division: 'Systems',
            icon: 'build',
        },
        {
            challenge: 'Operations that drain time',
            solution: 'SaaS tools built for efficiency',
            division: 'Platform',
            icon: 'rocket_launch',
        },

    ],
} as const;

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
            title: 'Unisynk',
            description: 'SaaS platform for unified communication',
            division: 'Platform',
            tags: ['React', 'Node.js', 'MongoDB'],
            image: '/projects/unisynk.jpg',
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

export const SAAS_PRODUCTS = {
    headline: 'Built on Open Innovation',
    subheadline: "We don't just build for clients. We build for the world.",
    products: [
        {
            name: 'Unisynk',
            tagline: 'Unified communication platform',
            status: 'live' as const,
            description: 'Connect all your business communications in one place',
            features: ['Multi-channel', 'Real-time sync', 'Team collaboration'],
            href: '/platform/unisynk',
        },
        {
            name: 'Kuthakai',
            tagline: 'Smart automation toolkit',
            status: 'beta' as const,
            description: 'Automate repetitive tasks with AI-powered workflows',
            features: ['No-code builder', 'AI triggers', 'Integration hub'],
            href: '/platform/kuthakai',
        },
        {
            name: 'CHR',
            tagline: 'Customer relationship hub',
            status: 'beta' as const,
            description: 'Manage customer relationships with intelligence',
            features: ['Smart CRM', 'AI insights', 'Pipeline automation'],
            href: '/platform/chr',
        },
        {
            name: 'Retail Connect',
            tagline: 'Retail management system',
            status: 'live' as const,
            description: 'Complete retail operations platform',
            features: ['Inventory', 'POS', 'Analytics'],
            href: '/platform/retail-connect',
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
    headline: 'You Shouldn\'t Have to Choose Between Speed and Quality',
    subheadline: 'But most businesses are stuck with one or the other',
    problems: [
        {
            title: 'Vendor Coordination Hell',
            description: 'One designer. Another developer. A separate content team. Endless meetings, misaligned timelines, finger-pointing delays.',
            icon: 'users',
        },
        {
            title: 'Months Lost to "Process"',
            description: 'By the time your MVP launches, your competitor already pivoted twice. Speed matters.',
            icon: 'clock',
        },
        {
            title: 'AI Tools Without Strategy',
            description: 'You have access to ChatGPT, Midjourney, and dozens of automation tools. But who ties it all together?',
            icon: 'brain',
        },
        {
            title: 'Disconnected Systems',
            description: 'Your CRM doesn\'t talk to your marketing tools. Your app doesn\'t sync with your database. Nothing works together.',
            icon: 'link',
        },
    ],
    closingStatement: 'Mergex exists to end the chaos. You\'re building the future—your tools should empower, not slow you down.',
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
    headline: 'Built with Modern, Proven Tools',
    subheadline: 'No legacy tech. No shortcuts. Just scalable, maintainable solutions.',
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
    trustStatement: 'Every line of code is written for scale. Every design decision is made with users in mind. Every partnership is built to last.',
} as const;

// Products Glimpse Section
export const PRODUCTS_GLIMPSE = {
    headline: 'Products We\'re Building',
    subheadline: 'Solutions born from real problems we\'ve solved',
    // Will reference SAAS_PRODUCTS for actual product data
} as const;

