// Mergex Labs Content
// AI Content Studio positioning and content

export const LABS_HERO = {
    eyebrow: 'MERGEX LABS',
    subEyebrow: 'AI Creative Intelligence',
    headline: 'Create at the Speed of Imagination.',
    supportingLine: 'Mergex Labs turns generative AI into high-impact ads, visuals, motion, and brand content engineered for teams that want to move faster than the market.',
    reinforcementLine: 'Human strategy. AI acceleration.\nRefined through experimentation.',
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
            title: 'AI Avatars & Digital Personas',
            description: 'Human presence. Infinite scalability.\n\nLong-term vision alignment: Foundation for cinematic AI characters.',
            capabilities: [
                'AI Brand Ambassador Creation',
                'AI Influencer & Spokesperson Systems',
                'AI Multilingual Video Avatars',
                'AI Sales & Explainer Personas',
                'Digital Character Development for Campaigns',
                'Persistent AI Identity Systems (for brands & creators)',
            ],
            icon: 'image',
            image: '/assets/mockups/Gemini_Generated_Image_7mmyde7mmyde7mmy.png',
        },
        {
            title: 'AI Motion & Storytelling Systems',
            description: 'Cinema-grade experimentation. Structured execution.\n\nThis is where your cinema ambition lives.',
            capabilities: [
                'AI-Driven Cinematic Visual Development',
                'AI Storyboarding & Pre-Visualization',
                'AI-Based Short Film Concepts',
                'AI Reel & Short-Form Video Systems',
                'AI Motion Graphics & Dynamic Scenes',
                'Narrative Prototyping for Film & Digital Media',
            ],
            icon: 'video',
            image: '/assets/mockups/Gemini_Generated_Image_9ashti9ashti9ash.png',
        },
        {
            title: 'AI Creative Production (Ads & Campaign Assets)',
            description: 'High-speed, high-volume creative.\n\nThis connects Labs to measurable marketing results.',
            capabilities: [
                'AI Advertisement Visuals (Static & Motion)',
                'AI Product Campaign Creatives',
                'AI Ad Variant Generation at Scale',
                'AI Social Media Creative Systems',
                'AI Performance Creative Optimization',
                'AI Banner & Display Asset Production',
            ],
            icon: 'megaphone',
            image: '/assets/labs portfolio/WhatsApp Video 2026-02-28 at 2.16.34 PM.mp4',
        },
        {
            title: 'AI UGC & Social Content Systems',
            description: 'Scalable authenticity.\n\nThis is extremely valuable for DTC & e-commerce brands.',
            capabilities: [
                'AI UGC-Style Video Generation',
                'AI Review & Testimonial Simulations',
                'AI Influencer-Style Product Content',
                'AI Script-to-Reel Automation',
                'AI Content Repurposing Systems',
                'Platform-Specific Video Optimization (Reels, Shorts, TikTok)',
            ],
            icon: 'palette',
            image: '/assets/mockups/Gemini_Generated_Image_rh4aggrh4aggrh4a.png',
        },
        {
            title: 'AI-Powered Visual Optimization for E-commerce',
            description: 'Conversion-focused AI assets.\n\nThis ties directly into Systems.',
            capabilities: [
                'AI Product Visualization & Mockups',
                'AI Lifestyle Product Scenes',
                'AI-Based Website Hero Videos',
                'AI Conversion-Focused Image Variations',
                'AI Automated Creative Testing Assets',
                'AI Visual Enhancement for CRO (Conversion Rate Optimization)',
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
    label: 'Why Labs Exists',
    headline: 'Where Do You Need Creative Acceleration?',
    cards: [
        {
            title: 'Because Creative Can’t Wait.',
            description: "Modern brands move in real time. Traditional production cycles slow growth. Labs exists to compress creative timelines — turning ideas into deployable assets in days, not months.",
            subtext: 'Velocity without compromise.',
            gradient: 'from-[#E5E5E5] to-[#D4D4D4]',
            textColor: 'text-black',
            icon: 'TrendingUp'
        },
        {
            title: 'Because Volume Wins.',
            description: 'Scaling requires creative output at scale — variations, formats, iterations. Labs builds AI-driven systems that generate high-volume content without losing strategic direction.',
            subtext: 'Structured creativity at scale.',
            gradient: 'from-[#8B5CF6] to-[#6D28D9]',
            textColor: 'text-white',
            highlight: true,
            icon: 'Layers'
        },
        {
            title: 'Because The Future Is AI-Driven.',
            description: 'Generative AI is redefining storytelling, motion, and digital identity. Labs exists to explore, refine, and deploy these technologies before they become standard.',
            subtext: 'Experiment today. Lead tomorrow.',
            gradient: 'from-[#262626] to-[#121212]',
            textColor: 'text-white',
            icon: 'Sparkles'
        }
    ]
} as const;

export const LABS_CTA = {
    headline: 'Have a Content Challenge?',
    subheadline: 'Let\'s see what AI can do for you',
    primaryCTA: 'Discuss Your Project',
    secondaryCTA: 'View Our Work',
} as const;
