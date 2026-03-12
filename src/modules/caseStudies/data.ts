import { CaseStudy } from './types';

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: '1',
        slug: 'e-commerce-platform',
        title: 'E-Commerce AI Evolution',
        subtitle: 'Scaling a retail giant with predictive intelligence',
        heroImage: '/assets/mockups/Gemini_Generated_Image_7mmyde7mmyde7mmy.png',
        heroImageAlt: 'E-Commerce Platform Dashboard',
        outcome: 'From stagnant growth to 150% revenue increase in 6 months',

        client: {
            industry: 'Retail & Fashion',
            location: 'New York, USA',
            companySize: '200-500 employees',
            service: 'Full-Stack Development & AI Integration'
        },

        problem: {
            narrative: 'The brand had a loyal following but their legacy platform was crashing during peak traffic. Manual inventory management was causing stockouts, and customers were bouncing due to generic experiences.',
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
                image: '/assets/mockups/Gemini_Generated_Image_7mmyde7mmyde7mmy.png',
                imageAlt: 'Product Discovery UI'
            },
            {
                title: 'Smart Cart',
                description: 'The new cart dynamically suggests complementary products, increasing average order value.',
                image: '/assets/mockups/Gemini_Generated_Image_7mmyde7mmyde7mmy.png',
                imageAlt: 'Smart Cart UI'
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
            company: 'FashionForward',
        },

        categories: ['E-Commerce', 'AI', 'Cloud'],
        techStack: ['Next.js', 'Node.js', 'AWS', 'Python'],
        publishDate: '2025-10-15',

        fitCriteria: {
            idealFor: [
                'High-volume retailers',
                'Brands needing custom AI solutions',
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
        slug: 'healthcare-management-system',
        title: 'Healthcare Unity System',
        subtitle: 'Streamlining patient care with secure data integration',
        heroImage: '/assets/mockups/Gemini_Generated_Image_9ashti9ashti9ash.png',
        heroImageAlt: 'Healthcare Management Dashboard',
        outcome: 'From fragmented records to unified patient insights in 90 days',

        client: {
            industry: 'Healthcare',
            location: 'London, UK',
            companySize: '1000+ employees',
            service: 'Enterprise Software Development'
        },

        problem: {
            narrative: 'Medical staff were spending 40% of their time on data entry across 5 disconnected systems. Patient history was scattered, leading to delays in treatment and high administrative burnout.',
            painPoints: [
                'Data siloed across legacy systems',
                'High risk of manual entry errors',
                'Slow patient onboarding process'
            ]
        },

        stakes: [
            'Compromised patient care quality',
            'Compliance violations and fines',
            'Increasing staff turnover due to burnout'
        ],

        strategy: [
            {
                title: 'Unified Data Layer',
                description: 'Created a central secure data warehouse that syncs with all legacy systems in real-time.'
            },
            {
                title: 'Clinician-First UX',
                description: 'Designed interfaces based on doctor and nurse workflows, not database structures.'
            },
            {
                title: 'Automated Compliance',
                description: 'Built-in HIPAA and GDPR safeguards that handle regulatory requirements automatically.'
            }
        ],

        execution: [
            {
                title: 'Patient 360 View',
                description: 'A single dashboard showing all vital patient data, history, and upcoming appointments.',
                image: '/assets/mockups/Gemini_Generated_Image_9ashti9ashti9ash.png',
                imageAlt: 'Patient Dashboard UI'
            },
            {
                title: 'Smart Scheduling',
                description: 'AI-assisted scheduling that optimizes doctor availability and reduces wait times.',
                image: '/assets/mockups/Gemini_Generated_Image_9ashti9ashti9ash.png',
                imageAlt: 'Scheduling Interface'
            }
        ],

        results: [
            { label: 'Admin Time', value: '-60', suffix: '%' },
            { label: 'Data Accuracy', value: '99.9', suffix: '%' },
            { label: 'Patient Satisfaction', value: '+40', suffix: '%' }
        ],

        testimonial: {
            quote: "Our doctors can finally focus on patients instead of paperwork. The system is intuitive, fast, and secure.",
            author: 'Dr. James Wilson',
            role: 'Chief of Medicine',
            company: 'MediCare Hub',
        },

        categories: ['Healthcare', 'Enterprise', 'Security'],
        techStack: ['React', 'Java', 'PostgreSQL', 'Azure'],
        publishDate: '2025-11-20',

        fitCriteria: {
            idealFor: [
                'Hospitals and clinics',
                'Health-tech startups',
                'Regulated industries'
            ],
            notIdealFor: [
                'Unregulated wellness apps',
                'Single-practitioner offices',
                'Marketing-only sites'
            ]
        }
    },
    {
        id: '3',
        slug: 'financial-dashboard',
        title: 'FinTech Analytics Core',
        subtitle: 'Real-time financial intelligence for modern visionaries',
        heroImage: '/assets/mockups/Gemini_Generated_Image_q305hxq305hxq305.png',
        heroImageAlt: 'Financial Analytics Dashboard',
        outcome: 'From spreadsheet chaos to clear financial command in 30 days',

        client: {
            industry: 'FinTech',
            location: 'Singapore',
            companySize: '50-200 employees',
            service: 'Product Design & Development'
        },

        problem: {
            narrative: 'Investment managers needed to make split-second decisions but were relying on daily CSV exports. The data lag was costing millions in missed opportunities.',
            painPoints: [
                '24-hour data latency',
                'Cluttered, non-responsive interfaces',
                'Inability to visualize complex trends'
            ]
        },

        stakes: [
            'Loss of competitive trading edge',
            'User churn to faster platforms',
            'Inaccurate reporting leading to compliance risks'
        ],

        strategy: [
            {
                title: 'Real-Time WebSocket Grid',
                description: 'Implemented direct market data feeds with sub-100ms latency updates.'
            },
            {
                title: 'Data Visualization Grammar',
                description: 'Created a custom charting library designed specifically for financial time-series data.'
            },
            {
                title: 'Modular Widget Architecture',
                description: 'Allowed users to customize their dashboard layout to match their specific trading strategies.'
            }
        ],

        execution: [
            {
                title: 'Live Market Watch',
                description: 'A high-performance grid component handling thousands of concurrent updates without lag.',
                image: '/assets/mockups/Gemini_Generated_Image_q305hxq305hxq305.png',
                imageAlt: 'Market Watch UI'
            },
            {
                title: 'Portfolio Analysis',
                description: 'Deep-dive analytics into portfolio performance, risk distribution, and attribution.',
                image: '/assets/mockups/Gemini_Generated_Image_q305hxq305hxq305.png',
                imageAlt: 'Portfolio Analytics UI'
            }
        ],

        results: [
            { label: 'Data Latency', value: '<50', suffix: 'ms' },
            { label: 'User Retention', value: '+25', suffix: '%' },
            { label: 'Trade Volume', value: '+200', suffix: '%' }
        ],

        testimonial: {
            quote: "Speed is everything in our business. Mergex delivered a platform that is not only fast but incredibly beautiful.",
            author: 'Elena Rodriguez',
            role: 'Product Director',
            company: 'WealthFlow',
        },

        categories: ['FinTech', 'Real-time', 'Analytics'],
        techStack: ['Vue.js', 'D3.js', 'Go', 'Redis'],
        publishDate: '2025-12-05',

        fitCriteria: {
            idealFor: [
                'Trading platforms',
                'Investment firms',
                'Data-heavy SaaS'
            ],
            notIdealFor: [
                'Simple bookkeeping apps',
                'Static informational sites',
                'Low-frequency data needs'
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
