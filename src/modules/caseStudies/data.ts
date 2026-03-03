import { CaseStudy } from './types';

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: '1',
        slug: 'dude-mens-wear',
        title: 'Dude Mens Wear',
        subtitle: 'Building a modern e-commerce platform for men\'s fashion',
        heroImage: '/assets/systems/case-studies/case-study-1.png',
        heroImageAlt: 'Dude Mens Wear E-Commerce Platform',
        outcome: 'From stagnant growth to 150% revenue increase in 6 months',

        client: {
            industry: 'E-Commerce & Fashion',
            location: 'New York, USA',
            companySize: '200-500 employees',
            service: 'Full-Stack E-Commerce Development'
        },

        problem: {
            narrative: 'Dude Mens Wear had a loyal following but their legacy platform was crashing during peak traffic. Manual inventory management was causing stockouts, and customers were bouncing due to generic experiences.',
            painPoints: [
                'High cart abandonment rate (75%)',
                'Frequent server downtime during sales',
                'Zero personalization for returning users'
            ]
        },

        stakes: [
            'Losing market share to tech-savvy competitors',
            'Wasting 40% of ad spend on non-converting traffic',
            'Risking brand reputation with every site crash'
        ],

        strategy: [
            {
                title: 'Cloud-Native Scalability',
                description: 'Migrated to a serverless architecture to handle infinite traffic spikes without manual intervention.'
            },
            {
                title: 'AI-Driven Personalization',
                description: 'Implemented a recommendation engine that adapts to user behavior in real-time.'
            },
            {
                title: 'Frictionless Checkout',
                description: 'Redesigned the payment flow to reduce steps and increase trust signals.'
            }
        ],

        execution: [
            {
                title: 'Visual Discovery',
                description: 'We completely overhauled the product browsing experience, focusing on high-fidelity imagery and intuitive filtering.',
                image: '/assets/systems/case-studies/case-study-1.png',
                imageAlt: 'Dude Mens Wear Product Discovery'
            },
            {
                title: 'Smart Cart',
                description: 'The new cart dynamically suggests complementary products, increasing average order value.',
                image: '/assets/systems/case-studies/case-study-1.png',
                imageAlt: 'Dude Mens Wear Smart Cart'
            }
        ],

        results: [
            { label: 'Revenue Growth', value: '150', suffix: '%' },
            { label: 'Cart Abandonment', value: '-35', suffix: '%' },
            { label: 'Uptime', value: '99.99', suffix: '%' }
        ],

        testimonial: {
            quote: "Mergex didn't just build a website; they built a sales engine that works while we sleep.",
            author: 'Sarah Jenkins',
            role: 'CTO',
            company: 'Dude Mens Wear',
        },

        categories: ['E-Commerce', 'Fashion', 'Cloud'],
        techStack: ['Next.js', 'Node.js', 'AWS', 'Python'],
        publishDate: '2025-10-15',

        fitCriteria: {
            idealFor: [
                'High-volume retailers',
                'Fashion & apparel brands',
                'Companies aiming for rapid scaling'
            ],
            notIdealFor: [
                'Small local boutiques',
                'Low-ticket dropshippers',
                'Teams without a marketing budget'
            ]
        }
    },
    {
        id: '2',
        slug: 'heyprodata',
        title: 'HeyProData',
        subtitle: 'MENA\'s crew infrastructure for film, media & events',
        heroImage: '/assets/systems/case-studies/case-study-2.png',
        heroImageAlt: 'HeyProData Creative Industry Marketplace',
        outcome: 'From scattered industry contacts to a unified crew ecosystem powering productions across MENA',

        client: {
            industry: 'Creative Industry & Media',
            location: 'MENA Region',
            companySize: '10-50 employees',
            service: 'Marketplace Platform Development'
        },

        problem: {
            narrative: 'The film, media, and events industry in MENA had no centralized platform to connect crew, freelancers, producers, and agencies. Finding the right professionals meant endless WhatsApp messages, outdated contact lists, and word-of-mouth — leaving talented crew invisible and productions understaffed.',
            painPoints: [
                'No centralized crew discovery or visibility',
                'Fragmented communication across WhatsApp and email',
                'No structured way to submit or receive project briefs'
            ]
        },

        stakes: [
            'Talented crew remaining invisible to decision makers',
            'Productions delayed due to slow crew sourcing',
            'Industry professionals lacking a trusted digital presence'
        ],

        strategy: [
            {
                title: 'Crew-First Profile System',
                description: 'Built professional profiles that let crew showcase their work, skills, and availability — letting their portfolio speak before they do.'
            },
            {
                title: 'Production Networking Engine',
                description: 'Created a powerful connection layer enabling seamless chat, collaboration, and brief submissions between crew, agencies, and brands.'
            },
            {
                title: 'Freemium Growth Model',
                description: 'Designed a freemium platform with core access open to all, with advanced features for founding members and decision makers.'
            }
        ],

        execution: [
            {
                title: 'Professional Profiles',
                description: 'A profile system where crew can showcase their work, connect with collaborators, and get discovered by producers and agencies across the MENA region.',
                image: '/assets/systems/case-studies/case-study-2.png',
                imageAlt: 'HeyProData Crew Profiles'
            },
            {
                title: 'Brief & Connect System',
                description: 'A structured workflow for brands and agencies to submit project briefs, automatically matching them with the right professionals in the network.',
                image: '/assets/systems/case-studies/case-study-2.png',
                imageAlt: 'HeyProData Brief System'
            }
        ],

        results: [
            { label: 'Crew Visibility', value: '+300', suffix: '%' },
            { label: 'Connection Speed', value: '-75', suffix: '% time' },
            { label: 'Network Growth', value: '+150', suffix: '%' }
        ],

        testimonial: {
            quote: "HeyProData gave our industry the structure it needed. Crew finally have visibility, and productions move faster than ever.",
            author: 'HeyProData Team',
            role: 'Founder',
            company: 'HeyProData',
        },

        categories: ['Marketplace', 'Creative Industry', 'Networking'],
        techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
        publishDate: '2025-11-20',

        fitCriteria: {
            idealFor: [
                'Creative industry platforms',
                'Crew & talent marketplaces',
                'Networking & community apps'
            ],
            notIdealFor: [
                'Generic job boards',
                'Single-company HR tools',
                'Non-industry platforms'
            ]
        }
    },
    {
        id: '3',
        slug: 'cedar-elevators',
        title: 'Cedar Elevators',
        subtitle: 'Powering a multi-vendor marketplace for the elevator industry',
        heroImage: '/assets/systems/case-studies/case-study-3.png',
        heroImageAlt: 'Cedar Elevators Multi-Vendor Marketplace',
        outcome: 'From fragmented vendor management to a unified marketplace in 30 days',

        client: {
            industry: 'Marketplace & Industrial',
            location: 'Singapore',
            companySize: '50-200 employees',
            service: 'Multi-Vendor Marketplace Development'
        },

        problem: {
            narrative: 'Cedar Elevators needed a centralized platform to connect elevator manufacturers, installers, and maintenance providers. Vendor management was scattered across emails and spreadsheets, causing delays and miscommunication.',
            painPoints: [
                'No unified vendor discovery or comparison',
                'Manual quoting and order tracking',
                'Inability to scale vendor onboarding'
            ]
        },

        stakes: [
            'Losing deals due to slow vendor matching',
            'Vendor churn from poor platform experience',
            'Inaccurate reporting leading to missed opportunities'
        ],

        strategy: [
            {
                title: 'Multi-Vendor Architecture',
                description: 'Built a scalable marketplace platform supporting multiple vendor storefronts, product catalogs, and independent order flows.'
            },
            {
                title: 'Smart Vendor Matching',
                description: 'Implemented intelligent search and filtering to connect buyers with the right vendors based on location, specialization, and ratings.'
            },
            {
                title: 'Automated Quoting & Orders',
                description: 'Streamlined the RFQ process with automated quoting, real-time order tracking, and vendor communication tools.'
            }
        ],

        execution: [
            {
                title: 'Vendor Marketplace',
                description: 'A multi-vendor storefront system with independent dashboards, inventory management, and analytics for each vendor.',
                image: '/assets/systems/case-studies/case-study-3.png',
                imageAlt: 'Cedar Elevators Vendor Marketplace'
            },
            {
                title: 'Order Management Hub',
                description: 'Centralized order tracking with real-time status updates, vendor communication, and automated notifications.',
                image: '/assets/systems/case-studies/case-study-3.png',
                imageAlt: 'Cedar Elevators Order Management'
            }
        ],

        results: [
            { label: 'Vendor Onboarding', value: '-70', suffix: '% time' },
            { label: 'Order Accuracy', value: '99.5', suffix: '%' },
            { label: 'Marketplace Growth', value: '+200', suffix: '%' }
        ],

        testimonial: {
            quote: "Mergex delivered a marketplace that connected our entire industry. Vendors love it, buyers trust it, and our business has never grown faster.",
            author: 'Elena Rodriguez',
            role: 'Product Director',
            company: 'Cedar Elevators',
        },

        categories: ['Marketplace', 'Multi-Vendor', 'Industrial'],
        techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
        publishDate: '2025-12-05',

        fitCriteria: {
            idealFor: [
                'Multi-vendor marketplaces',
                'B2B platforms',
                'Industry-specific marketplaces'
            ],
            notIdealFor: [
                'Simple single-vendor shops',
                'Static informational sites',
                'Low-volume niche stores'
            ]
        }
    }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
    return CASE_STUDIES.find(study => study.slug === slug);
};

export const getRelatedCaseStudies = (slug: string, limit: number = 2): CaseStudy[] => {
    return CASE_STUDIES
        .filter(study => study.slug !== slug)
        .slice(0, limit);
};
