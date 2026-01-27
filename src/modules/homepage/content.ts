// Homepage Content Constants
// Centralized content for marketing copy and CTAs

export const HERO_CONTENT = {
    tagline: 'Empower the Makers',
    headline: 'Build Faster.\nDream Bigger.',
    subheadline: 'AI-powered creativity meets enterprise development. One ecosystem for ambitious founders, creators, and teams.',
    cta: {
        primary: 'Explore Our Ecosystem',
        secondary: 'Book Strategy Call',
    },
    stats: [
        { label: 'Projects Delivered', value: '50+' },
        { label: 'SaaS Clients', value: '15+' },
        { label: 'Countries', value: '5' },
    ],
} as const;

export const PORTAL_CARDS = {
    labs: {
        title: 'Mergex Labs',
        tagline: 'Explore Innovation',
        description: "Where we explore what's possible",
        videoSrc: '/assets/ecosystem/videos/labs-portal.mp4',
        videoPoster: '/assets/ecosystem/labs-portal-still.png',
        colorTone: 'purple' as const,
        href: '/labs',
    },
    systems: {
        title: 'Mergex Systems',
        tagline: 'Build & Automate',
        description: 'Where ideas become real systems',
        videoSrc: '/assets/ecosystem/videos/systems-portal.mp4',
        videoPoster: '/assets/ecosystem/systems-portal-still.png',
        colorTone: 'blue' as const,
        href: '/systems',
    },
    platform: {
        title: 'Mergex Platform',
        tagline: 'Products & Scale',
        description: 'Where products live and grow',
        videoSrc: '/assets/ecosystem/videos/platform-portal.mp4',
        videoPoster: '/assets/ecosystem/platform-portal-still.png',
        colorTone: 'green' as const,
        href: '/platform',
    },
} as const;



export const WHAT_WE_BUILD = {
    headline: 'Built for Ambitious Makers',
    subheadline: 'We solve the problems that slow you down',
    problems: [
        {
            challenge: 'Slow content creation',
            solution: 'AI-powered visual generation',
            division: 'Labs',
            icon: 'spark',
        },
        {
            challenge: 'Weak digital infrastructure',
            solution: 'Custom web/mobile apps & AI automation',
            division: 'Systems',
            icon: 'build',
        },
        {
            challenge: 'Operational inefficiency',
            solution: 'SaaS tools that scale with you',
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
