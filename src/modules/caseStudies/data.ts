import { CaseStudy } from './types';

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'magic-wall',
        slug: 'scaling-brand-awareness',
        title: 'Magic Wall Decor: 20x Brand Scaling',
        subtitle: 'Aggressive customer acquisition for an ancient paint franchise.',
        heroImage: '/assets/mockups/Gemini_Generated_Image_9ashti9ashti9ash.png',
        heroImageAlt: 'Magic Wall Marketing',
        outcome: 'Executed a strategy that drove 20x business growth within a 5-month timeline.',
        client: {
            industry: 'Home Decor',
            location: 'Global',
            companySize: 'Franchise',
            service: 'Digital Marketing'
        },
        metrics: [
            { label: 'BUSINESS GROWTH', value: '20', suffix: 'x', trend: { value: 'In 5 months', isPositive: true }, progressBar: 100 },
        ],
        problem: {
            narrative: 'Needed to aggressively scale brand awareness and customer acquisition for an ancient paint franchise.',
        },
        transformationResult: {
            title: 'High-Impact Digital Strategy',
            description: 'Successfully drove 20x growth through a targeted digital marketing overhaul.'
        },
        categories: ['Marketing', 'Growth'],
        techStack: ['Meta Ads', 'Google Ads'],
        publishDate: '2025-02-15',
    },
    {
        id: 'dgaard-naturals',
        slug: 'dgaard-naturals-ai-ads',
        title: 'Dgaard Naturals: AI-Powered Campaigns',
        subtitle: 'High-quality promotional content for 21+ products using generative AI.',
        heroImage: '/assets/mockups/Gemini_Generated_Image_7mmyde7mmyde7mmy.png',
        heroImageAlt: 'Dgaard Naturals AI Content',
        outcome: 'Leveraged advanced AI generation to produce compelling commercial video and image advertisements.',
        client: {
            industry: 'Beauty & Health',
            location: 'Scandinavia',
            companySize: 'Enterprise',
            service: 'AI Commercial Advertisement'
        },
        problem: {
            narrative: 'Needed high-quality, engaging promotional content for a large catalog of 21+ products for a social media campaign.',
        },
        transformationResult: {
            title: 'AI Creative Suite',
            description: 'Automated the production of professional-grade advertisements for a complex product catalog.'
        },
        categories: ['AI', 'Marketing'],
        techStack: ['Midjourney', 'Runway', 'CapCut'],
        publishDate: '2025-02-10',
    },
    {
        id: 'tarus-motors',
        slug: 'tarus-motors-ai-marketing',
        title: 'Tarus Motors: AI Avatar Interactions',
        subtitle: 'Innovative marketing for the automotive industry using AI technology.',
        heroImage: '/assets/mockups/Gemini_Generated_Image_q305hxq305hxq305.png',
        heroImageAlt: 'Tarus Motors AI Avatar',
        outcome: 'Deployed a cutting-edge digital marketing campaign utilizing AI avatar technology for unique interactions.',
        client: {
            industry: 'Automotive',
            location: 'Global',
            companySize: 'Auto Group',
            service: 'Digital & AI Avatar Marketing'
        },
        problem: {
            narrative: 'Needed an innovative, highly engaging marketing approach to stand out in the automotive industry and capture audience attention.',
        },
        transformationResult: {
            title: 'AI Humanoid Integration',
            description: 'Utilized AI avatar technology to create modern, memorable brand interactions.'
        },
        categories: ['AI', 'Marketing', 'Automotive'],
        techStack: ['HeyGen', 'Synthesia'],
        publishDate: '2025-02-20',
    },
    {
        id: 'pixeldraft',
        slug: 'pixeldraft-media-launch',
        title: 'Pixeldraft Media: Digital Identity Launch',
        subtitle: 'Building credibility for a newcomer in the digital marketing space.',
        heroImage: '/assets/mockups/Gemini_Generated_Image_q305hxq305hxq305.png',
        heroImageAlt: 'Pixeldraft Website',
        outcome: 'Designed and developed a fully custom business website from scratch in 20 days.',
        client: {
            industry: 'Digital Marketing',
            location: 'UK',
            companySize: 'Startup',
            service: 'Custom Business Website'
        },
        metrics: [
            { label: 'DEVELOPMENT TIME', value: '20', suffix: ' Days', progressBar: 100 },
        ],
        problem: {
            narrative: 'As a newcomer to the digital marketing space, they lacked a professional, established online presence to build credibility.',
        },
        transformationResult: {
            title: 'Foundational Presence',
            description: 'Launched the brand effectively with a professional, custom-built storefront.'
        },
        categories: ['Web Dev', 'Branding'],
        techStack: ['Next.js', 'Framer Motion'],
        publishDate: '2025-01-20',
    },
    {
        id: 'jakson-elevators',
        slug: 'jakson-elevators-rapid-web',
        title: 'Jakson Elevators: 16-Hour Rapid Deployment',
        subtitle: 'Engineering an immediate professional web presence for elevator solutions.',
        heroImage: '/assets/mockups/Gemini_Generated_Image_7mmyde7mmyde7mmy.png',
        heroImageAlt: 'Jakson Elevators Site',
        outcome: 'Engineered a custom, functional business website with a turnaround time of just 16 hours.',
        client: {
            industry: 'Industrial',
            location: 'India',
            companySize: 'Mid-Market',
            service: 'Custom Business Website'
        },
        metrics: [
            { label: 'TURNAROUND TIME', value: '16', suffix: ' Hours', progressBar: 100 },
        ],
        problem: {
            narrative: 'Required an immediate, professional web presence to represent their elevator solutions online without delays.',
        },
        categories: ['Web Dev', 'Industrial'],
        techStack: ['Next.js', 'Tailwind'],
        publishDate: '2025-01-05',
    },
    {
        id: 'grace-and-grow',
        slug: 'grace-and-grow-agency-site',
        title: 'Grace and Grow: Marketing Agency Platform',
        subtitle: 'Showcasing services and attracting leads for a growing firm.',
        heroImage: '/assets/mockups/Gemini_Generated_Image_9ashti9ashti9ash.png',
        heroImageAlt: 'Grace and Grow Site',
        outcome: 'Delivered a complete, custom-built business website tailored for a marketing firm in just 1 day.',
        client: {
            industry: 'Digital Marketing',
            location: 'USA',
            companySize: 'Small Agency',
            service: 'Custom Business Website'
        },
        metrics: [
            { label: 'DELIVERY TIME', value: '1', suffix: ' Day', progressBar: 100 },
        ],
        problem: {
            narrative: 'A digital marketing agency needing a polished, immediate platform to showcase their own services and attract leads.',
        },
        categories: ['Web Dev', 'Marketing'],
        techStack: ['Next.js', 'Framer Motion'],
        publishDate: '2025-01-12',
    },
    {
        id: 'cedar-elevator',
        slug: 'e-commerce-platform',
        title: 'Cedar Elevator Industries: B2B E-commerce',
        subtitle: 'Streamlining complex elevator component sales with integrated quotation systems.',
        heroImage: '/assets/mockups/Gemini_Generated_Image_7mmyde7mmyde7mmy.png',
        heroImageAlt: 'Cedar Elevator E-commerce',
        outcome: 'Developed a robust custom e-commerce platform with specialized quotation management.',
        client: {
            industry: 'Industrial Manufacturing',
            location: 'UAE',
            companySize: 'Enterprise',
            service: 'Custom B2B/B2C E-commerce'
        },
        problem: {
            narrative: 'Struggled to manage complex elevator component sales across wholesale and retail channels without an integrated quotation system.',
        },
        categories: ['E-commerce', 'Industrial'],
        techStack: ['Next.js', 'PostgreSQL'],
        publishDate: '2025-01-10',
    },
    {
        id: 'dude-mens-wear',
        slug: 'dude-mens-wear-ecommerce',
        title: 'Dude Mens Wear: E-commerce & Growth',
        subtitle: 'Digital storefront and targeted marketing for men\'s fashion.',
        heroImage: '/assets/mockups/Gemini_Generated_Image_q305hxq305hxq305.png',
        heroImageAlt: 'Dude Mens Wear Store',
        outcome: 'Rolled out a multi-phase solution: custom e-commerce build and targeted growth strategy.',
        client: {
            industry: 'Fashion & Retail',
            location: 'India',
            companySize: 'Retailer',
            service: 'Custom E-commerce & Marketing'
        },
        problem: {
            narrative: 'Needed a dedicated online storefront to sell men\'s fashion and streetwear, coupled with marketing to drive steady traffic.',
        },
        growthVelocity: {
            title: 'Multi-Phase Growth',
            description: 'Phased rollout including a 1-month custom build followed by high-impact 7-day targeted growth sprints.',
            metrics: [
                { label: 'E-commerce Build', value: '1 Month', trend: 'Completed', progressBar: 100 },
                { label: 'Targeted Growth', value: '7 Days', trend: 'Launched', progressBar: 100 }
            ]
        },
        categories: ['E-commerce', 'Marketing', 'Fashion'],
        techStack: ['Shopify', 'Meta Ads'],
        publishDate: '2025-02-01',
    },
    {
        id: 'mks-agencies',
        slug: 'mks-agencies-ecommerce-store',
        title: 'MKS Agencies: E-commerce Refinement',
        subtitle: 'Facilitating digital transactions and effectively showcasing product inventory.',
        heroImage: '/assets/mockups/Gemini_Generated_Image_7mmyde7mmyde7mmy.png',
        heroImageAlt: 'MKS Agencies Storefront',
        outcome: 'Built and deployed a seamless e-commerce platform designed to optimize the online shopping experience.',
        client: {
            industry: 'Retail & Wholesale',
            location: 'India',
            companySize: 'Trading Agency',
            service: 'E-commerce Website'
        },
        problem: {
            narrative: 'Lacked a functional online store to facilitate digital transactions and effectively showcase their product inventory.',
        },
        categories: ['E-commerce', 'Retail'],
        techStack: ['Next.js', 'PostgreSQL'],
        publishDate: '2025-01-15',
    },
    {
        id: 'mic-and-mac',
        slug: 'mic-and-mac-digital-overhaul',
        title: 'Mic & Mac: Complete Business Transformation',
        subtitle: 'Fresh identity and rebranding for a healthcare and cosmetic store.',
        heroImage: '/assets/mockups/Gemini_Generated_Image_9ashti9ashti9ash.png',
        heroImageAlt: 'Mic and Mac Identity',
        outcome: 'Executing a rebranding, digital marketing overhaul, and complete website transformation.',
        client: {
            industry: 'Healthcare & Cosmetics',
            location: 'Middle East',
            companySize: 'Retail Store',
            service: 'Complete Business Transformation'
        },
        problem: {
            narrative: 'This healthcare and cosmetic store was experiencing conversion issues and needed a fresh identity beyond their previous setup.',
        },
        transformationResult: {
            title: 'Full-Scale Rebranding',
            description: 'Overhauling digital presence and brand identity to solve long-standing conversion bottlenecks.'
        },
        categories: ['Branding', 'Transformation'],
        techStack: ['Next.js', 'Sanity'],
        publishDate: '2025-02-28',
    }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
    return CASE_STUDIES.find(study => study.slug === slug);
};

export const getRelatedCaseStudies = (slug: string, limit: number = 2): CaseStudy[] => {
    return CASE_STUDIES
        .filter(study => study.slug !== slug)
        .sort(() => 0.5 - Math.random())
        .slice(0, limit);
};
