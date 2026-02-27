// Mergex Labs Content
// AI Content Studio positioning and content

export const LABS_HERO = {
    eyebrow: 'MERGEX LABS',
    subEyebrow: 'AI Creative Intelligence',
    headline: 'Create at the Speed of Imagination.',
    supportingLine: 'Mergex Labs turns generative AI into high-impact ads, visuals, motion, and brand content engineered for teams that want to move faster than the market.',
    reinforcementLine: 'Human strategy. AI acceleration. Refined through experimentation.',
    primaryCTA: {
        text: 'Launch With AI →',
        href: '#launch'
    },
    secondaryCTA: {
        text: 'View AI Portfolio →',
        href: '#portfolio'
    },
    microcopy: 'Refined by humans. Powered by intelligence.',
} as const;

export const WHAT_IS_LABS = {
    headline: 'What Is Mergex Labs?',
    description: 'Mergex Labs is where generative AI meets human creativity. We help brands produce visuals, videos, campaigns, and brand assets at a pace traditional agencies can\'t match without sacrificing quality. Think of us as your creative engine, powered by intelligence.',
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
            image: '/assets/mockups/Gemini_Generated_Image_7mmyde7mmyde7mmy.png',
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
            image: '/assets/mockups/Gemini_Generated_Image_9ashti9ashti9ash.png',
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
            image: '/assets/mockups/Gemini_Generated_Image_m6ev2fm6ev2fm6ev.png',
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
            image: '/assets/mockups/Gemini_Generated_Image_rh4aggrh4aggrh4a.png',
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
            image: '/assets/mockups/Gemini_Generated_Image_qx4kj5qx4kj5qx4k.png',
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
            microcopy: '[DATA_INPUT]'
        },
        {
            number: '02',
            title: 'Generate',
            description: 'Our AI tools create dozens of variations rapidly, exploring creative possibilities at machine speed.',
            icon: 'cpu',
            microcopy: '[PROCESS_0x4F]'
        },
        {
            number: '03',
            title: 'Refine',
            description: 'This is where humans shine. We curate, edit, and polish until every asset is perfect.',
            icon: 'edit',
            microcopy: '[STRATEGY_SYNC]'
        },
        {
            number: '04',
            title: 'Deliver',
            description: 'Final assets in your preferred formats, ready to launch. No handoff hassle, just results.',
            icon: 'check',
            microcopy: '[OUTPUT_FINAL]'
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
            text: 'AI is a tool, not magic. The real power doesn\'t come from the software—it comes from knowing how to prompt it, curate it, and refine it into a brand asset.',
            emphasis: 'tool, not magic',
        },
        {
            text: 'Traditional agencies are restricted by manual bandwidth. Pure automation is restricted by lack of judgment. Labs is the engineered hybrid that brings both.',
            emphasis: 'engineered hybrid',
        },
        {
            text: 'This isn\'t just experimentation. Labs content powers real visual systems for real businesses. The speed we gain here builds the foundation for everything else.',
            emphasis: 'visual systems',
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
