import { CaseStudy } from './types';

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'magic-wall',
        slug: 'scaling-brand-awareness',
        layoutType: 1,
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
        results: [
            { label: 'Revenue Acceleration', value: '310', prefix: '+', suffix: '%', description: 'Monthly active leads increased within 90 days of launch.' },
            { label: 'Return on Ad Spend', value: '2.8', suffix: 'x', description: 'Sustained ROAS through optimized acquisition funnels.' },
            { label: 'Acquisition Cost', value: '24', prefix: '-', suffix: '%', description: 'Significant reduction in CAC via high-intent targeting.' },
            { label: 'Conversion Efficiency', value: '14.2', suffix: '%', description: 'Overall funnel conversion rate lift from legacy baseline.' }
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
        layoutType: 5,
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
        results: [
            { label: 'Production Velocity', value: '55', prefix: '-', suffix: '%', description: 'Reduction in manual commercial content creation time.' },
            { label: 'Engagement Lift', value: '3.2', suffix: 'x', description: 'Higher interaction rates compared to static product imagery.' },
            { label: 'Content Scalability', value: '21', suffix: '+', description: 'Unique digital assets automated for complex product catalogs.' },
            { label: 'Click-Through Rate', value: '42', prefix: '+', suffix: '%', description: 'Increase in paid social performance through AI variation.' }
        ],
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
        layoutType: 8,
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
        results: [
            { label: 'Interaction Depth', value: '85', prefix: '+', suffix: '%', description: 'Increase in average user session duration with AI avatars.' },
            { label: 'Lead Quality', value: '28', prefix: '+', suffix: '%', description: 'Higher qualification score from automated lead capture.' },
            { label: 'Interaction Volume', value: '10', suffix: 'k+', description: 'Automated humanoid conversations handled per month.' },
            { label: 'Brand Sentiment', value: '4.1', suffix: '/5', description: 'Positive perception index post-campaign deployment.' }
        ],
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
        layoutType: 5,
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
        results: [
            { label: 'Page Load Performance', value: '0.8', suffix: 's', description: 'Average LCP achieving premium Core Web Vitals targets.' },
            { label: 'Bounce Rate', value: '32', prefix: '-', suffix: '%', description: 'Reduction due to enhanced user experience and layout.' },
            { label: 'Search Visibility', value: '25', prefix: '+', suffix: '%', description: 'Increase in organic ranking during the launch quarter.' },
            { label: 'Lighthouse Score', value: '100', suffix: '/100', description: 'Perfect technical performance and accessibility index.' }
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
        layoutType: 3,
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
        results: [
            { label: 'Inquiry Volume', value: '22', prefix: '+', suffix: '%', description: 'Direct increase in digital lead conversions from launch.' },
            { label: 'Mobile Experience', value: '98', suffix: '%', description: 'Performance score in mobile-first responsiveness testing.' },
            { label: 'System Reliability', value: '99.9', suffix: '%', description: 'Guaranteed uptime through high-performance architecture.' },
            { label: 'User Onboarding', value: '16', suffix: 'h', description: 'Zero to fully functional industrial web presence.' }
        ],
        problem: {
            narrative: 'Required an immediate, professional web presence to represent their elevator solutions online without delays.',
        },
        transformationResult: {
            title: 'High-Velocity Presence',
            description: 'Engineered a professional, production-ready platform for industrial solutions in a record 16-hour sprint.'
        },
        categories: ['Web Dev', 'Industrial'],
        techStack: ['Next.js', 'Tailwind'],
        publishDate: '2025-01-05',
    },
    {
        id: 'grace-and-grow',
        slug: 'grace-and-grow-agency-site',
        layoutType: 4,
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
        results: [
            { label: 'Discovery Calls', value: '2.5', suffix: 'x', description: 'Increase in monthly qualified agency consultations.' },
            { label: 'Portfolio Engagement', value: '45', prefix: '+', suffix: '%', description: 'Higher view duration on creative service showcases.' },
            { label: 'Lead Friction', value: '18', prefix: '-', suffix: '%', description: 'Reduction in form abandonment via optimized UI paths.' },
            { label: 'Brand Unity Index', value: '96', suffix: '%', description: 'Consistency score across all digital touchpoints.' }
        ],
        problem: {
            narrative: 'A digital marketing agency needing a polished, immediate platform to showcase their own services and attract leads.',
        },
        transformationResult: {
            title: 'Agile Agency Solution',
            description: 'Launched a high-performance marketing platform to bridge the gap between service concept and client acquisition.'
        },
        categories: ['Web Dev', 'Marketing'],
        techStack: ['Next.js', 'Framer Motion'],
        publishDate: '2025-01-12',
    },
    {
        id: 'cedar-elevator',
        slug: 'e-commerce-platform',
        layoutType: 3,
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
        results: [
            { label: 'Quotation Speed', value: '42', prefix: '+', suffix: '%', description: 'Accelerated complex B2B component pricing workflows.' },
            { label: 'Order Accuracy', value: '20', prefix: '-', suffix: '%', description: 'Reduction in fulfillment errors via integrated systems.' },
            { label: 'Vendor Retention', value: '35', prefix: '+', suffix: '%', description: 'Improved partner loyalty through streamlined ordering.' },
            { label: 'Logistics Visibility', value: '100', suffix: '%', description: 'Real-time tracking integration for all global shipments.' }
        ],
        problem: {
            narrative: 'Struggled to manage complex elevator component sales across wholesale and retail channels without an integrated quotation system.',
        },
        transformationResult: {
            title: 'Unified B2B Commerce',
            description: 'Consolidated complex wholesale and retail flows into a single, high-performance e-commerce ecosystem.'
        },
        categories: ['E-commerce', 'Industrial'],
        techStack: ['Next.js', 'PostgreSQL'],
        publishDate: '2025-01-10',
    },
    {
        id: 'dude-mens-wear',
        slug: 'dude-mens-wear-ecommerce',
        layoutType: 1,
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
        results: [
            { label: 'Revenue Velocity', value: '65', prefix: '+', suffix: '%', description: 'Quarterly growth through unified digital sales channels.' },
            { label: 'Average Order Value', value: '18', prefix: '+', suffix: '%', description: 'Higher AOV via intelligent cross-sell recommendation.' },
            { label: 'Conversion Performance', value: '3.8', suffix: 'x', description: 'Marketing ROAS achieved in high-fashion categories.' },
            { label: 'Checkout Recovery', value: '30', prefix: '-', suffix: '%', description: 'Reduction in cart abandonment through UI optimization.' }
        ],
        problem: {
            narrative: 'Needed a dedicated online storefront to sell men\'s fashion and streetwear, coupled with marketing to drive steady traffic.',
        },
        transformationResult: {
            title: 'Fashion Growth Ecosystem',
            description: 'Transformed a traditional retailer into a digital-first brand with high-yield growth velocity.'
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
        layoutType: 4,
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
        results: [
            { label: 'Conversion Rate', value: '28', prefix: '+', suffix: '%', description: 'Direct lift in add-to-cart actions from launch.' },
            { label: 'Customer Retension', value: '40', prefix: '+', suffix: '%', description: 'Improved repeat purchase rate via seamless UI experience.' },
            { label: 'Latency Reduction', value: '15', prefix: '-', suffix: '%', description: 'Faster browsing through optimized data architecture.' },
            { label: 'Purchase Funnel', value: '4', suffix: ' Steps', description: 'Leaner checkout flow significantly reduced drop-off.' }
        ],
        problem: {
            narrative: 'Lacked a functional online store to facilitate digital transactions and effectively showcase their product inventory.',
        },
        transformationResult: {
            title: 'Digital Wholesale Hub',
            description: 'Successfully architected a seamless transaction layer for high-volume trading and inventory management.'
        },
        categories: ['E-commerce', 'Retail'],
        techStack: ['Next.js', 'PostgreSQL'],
        publishDate: '2025-01-15',
    },
    {
        id: 'mic-and-mac',
        slug: 'mic-and-mac-digital-overhaul',
        layoutType: 7,
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
        results: [
            { label: 'Digital Conversion', value: '50', prefix: '+', suffix: '%', description: 'Shift from walk-in reliance to a thriving digital-first experience within 90 days of launch.', tag: 'Growth' },
            { label: 'Brand Loyalty', value: '38', prefix: '+', suffix: '%', description: 'Sharp increase in customer sentiment driven by a coherent brand identity.', tag: 'Brand Sentiment' },
            { label: 'Operational Overhead', value: '25', prefix: '-', suffix: '%', description: 'Lower overhead through process automation and consolidated tooling.', tag: 'Automation' },
            { label: 'Consistency Index', value: '99', suffix: '%', description: 'Design fidelity maintained across all retail and digital customer touchpoints.', tag: 'Design fidelity' }
        ],
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
    const featuredSlugs = [
        'mic-and-mac-digital-overhaul',
        'e-commerce-platform',
        'tarus-motors-ai-marketing'
    ];

    return CASE_STUDIES
        .filter(study => study.slug !== slug && featuredSlugs.includes(study.slug))
        .sort(() => 0.5 - Math.random())
        .slice(0, limit);
};
