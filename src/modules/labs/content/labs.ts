// Mergex Labs Content
// AI Content Studio positioning and content

import { cloudinaryImage, cloudinaryVideo } from '@/lib/cloudinary';


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
            image: cloudinaryImage('mockups/labs/Gallery/sara_digital_persona_6'),
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
            image: cloudinaryImage('mockups/labs/Gallery/sara_digital_persona_10'),
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
            image: cloudinaryVideo('mockups/labs/Portfolio/park_avenue_campaign'),
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
            image: cloudinaryImage('mockups/labs/Gallery/sara_digital_persona_4'),
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
            image: cloudinaryImage('mockups/labs/Gallery/sara_digital_persona_11'),
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
    label: 'PROCESS_v2.0',
    headline: 'From Experiment to Impact',
    subheadline: 'How we turn emerging intelligence into your competitive edge.',
    steps: [
        {
            number: '01',
            title: 'Experiment',
            description: 'We explore emerging AI tools, visual languages, and generative techniques to find the edge.',
            icon: 'beaker',
            microcopy: '[EXPLORATION_PHASE]'
        },
        {
            number: '02',
            title: 'Prototype',
            description: 'Promising ideas are shaped into usable creative assets and systems refined for your brand.',
            icon: 'layers',
            microcopy: '[SYSTEMS_DEVELOPMENT]'
        },
        {
            number: '03',
            title: 'Deploy',
            description: 'The best explorations evolve into real campaigns, visuals, and experiences that drive results.',
            icon: 'rocket',
            microcopy: '[IMPACT_DEPLOYMENT]'
        },
    ],
    intelligenceAction: {
        headline: 'Creative Intelligence in Action',
        description: 'Watch an idea evolve from a simple prompt to a production-grade asset.',
        phases: [
            { label: 'Prompt', content: 'Cinematic portrait of a brand persona, neon lighting, hyper-realistic, 8k.' },
            { label: 'Generation', content: 'AI generates diverse visual directions based on core identity.' },
            { label: 'Refinement', content: 'Human curation & technical polishing for brand consistency.' },
            { label: 'Impact', content: 'Final asset deployed across all marketing touchpoints.' }
        ]
    }
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
    tag: 'The Lab Process',
    headline: 'Let’s Turn Imagination Into Visual Reality',
    subheadline: 'Let\'s see what AI can do for you',
    primaryCTA: 'Let’s see what AI can do for you',
} as const;
