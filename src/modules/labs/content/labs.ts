// Mergex Labs Content
// AI Content Studio positioning and content

export const LABS_HERO = {
    headline: 'Where Creativity Meets\\nIntelligent Systems',
    subheadline: 'AI-powered content creation for brands that refuse to wait.',
    // Video will breathe for 2-3 seconds before showing content
} as const;

export const WHAT_IS_LABS = {
    headline: 'What Is Mergex Labs?',
    description: 'Mergex Labs is where generative AI meets human creativity. We help brands produce visuals, videos, campaigns, and brand assets at a pace traditional agencies can\'t match—without sacrificing quality. Think of us as your creative engine, powered by intelligence.',
} as const;

export const WHAT_WE_CREATE = {
    headline: 'What We Create',
    subheadline: 'From strategy to execution, powered by AI and refined by humans',
    categories: [
        {
            title: 'AI-Generated Visuals',
            description: 'Stunning imagery that would take weeks in days',
            capabilities: [
                'Product renders and lifestyle shots',
                'Brand imagery and hero visuals',
                'Marketing assets for every channel',
                'Social media graphics at scale',
            ],
            icon: 'image',
        },
        {
            title: 'Video & Reels',
            description: 'Content that stops the scroll and drives action',
            capabilities: [
                'Short-form videos for social',
                'Brand story videos',
                'Product demos that convert',
                'Instagram/TikTok reels',
            ],
            icon: 'video',
        },
        {
            title: 'Campaign Creatives',
            description: 'End-to-end asset generation for multi-channel campaigns',
            capabilities: [
                'Ad creatives for Meta, Google, LinkedIn',
                'Landing page visuals optimized for conversion',
                'Email campaign headers and assets',
                'Consistent multi-platform content',
            ],
            icon: 'megaphone',
        },
        {
            title: 'Brand Asset Systems',
            description: 'Visual identity kits that scale with your brand',
            capabilities: [
                'Logo variations for every use case',
                'Brand guidelines and style systems',
                'Component libraries and design systems',
                'Complete visual identity toolkits',
            ],
            icon: 'palette',
        },
        {
            title: 'Experimental Formats',
            description: 'Pushing the boundaries of what AI can create',
            capabilities: [
                'AI-driven motion graphics and animations',
                'Interactive and generative content',
                'Novel formats that don\'t exist yet',
                'Trend-responsive, real-time content',
            ],
            icon: 'sparkles',
        },
    ],
} as const;

export const WORK_GALLERY = {
    headline: 'Our Work',
    subheadline: 'Quality meets velocity',
    // Gallery items will be added as work is completed
    placeholderMessage: 'Real client work coming soon. In the meantime, let\'s create yours.',
} as const;

export const HOW_LABS_WORKS = {
    headline: 'How Labs Works',
    subheadline: 'AI accelerates. Humans curate. You win.',
    steps: [
        {
            number: '01',
            title: 'Brief',
            description: 'Share your vision, goals, brand assets, and constraints. The clearer the input, the better the output.',
            icon: 'clipboard',
        },
        {
            number: '02',
            title: 'Generate',
            description: 'Our AI tools create dozens of variations rapidly, exploring creative possibilities at machine speed.',
            icon: 'cpu',
        },
        {
            number: '03',
            title: 'Refine',
            description: 'This is where humans shine. We curate, edit, and polish until every asset is perfect.',
            icon: 'edit',
        },
        {
            number: '04',
            title: 'Deliver',
            description: 'Final assets in your preferred formats, ready to launch. No handoff hassle, just results.',
            icon: 'check',
        },
    ],
    keyMessages: [
        'Turnaround in days, not weeks',
        'AI speed meets creative judgment',
        'Unlimited refinements included',
    ],
} as const;

export const WHY_LABS_EXISTS = {
    headline: 'Why Labs Exists',
    statements: [
        {
            text: 'AI is a tool, not magic. The real power doesn\'t come from the software—it comes from knowing when to use it, how to prompt it, and what to do with the output.',
            emphasis: 'tool, not magic',
        },
        {
            text: 'Traditional agencies are slow because they rely on human bandwidth. Pure automation is soulless because it lacks judgment. Labs is the hybrid—AI speed with human taste.',
            emphasis: 'the hybrid',
        },
        {
            text: 'This isn\'t a side project. Labs feeds our other divisions. The content we create powers real businesses. The insights we gain build better products. It all connects.',
            emphasis: 'It all connects',
        },
    ],
    closingLine: 'We\'re not replacing creatives. We\'re making them 10x faster.',
} as const;

export const LABS_CTA = {
    headline: 'Have a Content Challenge?',
    subheadline: 'Let\'s see what AI can do for you',
    primaryCTA: 'Discuss Your Project',
    secondaryCTA: 'View Our Work',
} as const;
