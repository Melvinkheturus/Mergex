// Case Studies Content
// Conversion-focused case study structure

export type CaseStudyType = 'systems' | 'labs-experiment';
export type BusinessType = 'startup' | 'ecommerce' | 'enterprise' | 'agency';
export type ProblemType = 'mvp-launch' | 'automation' | 'scaling' | 'content-creation' | 'system-integration';

// Tech stack item structure
export interface TechItem {
    name: string;
    version?: string;
    description?: string;
}

// Feature structure
export interface FeatureItem {
    title: string;
    description: string;
    subFeatures?: string[];
}

// Metric structure
export interface MetricItem {
    label: string;
    before?: string;
    after: string;
    improvement?: string;
}

// Detailed case study structure for comprehensive case studies
export interface DetailedCaseContent {
    // Hero & Overview
    heroImage: string;
    projectStatus: 'production' | 'development' | 'completed';
    version?: string;

    // Executive Summary
    executiveSummary: {
        projectAtGlance: {
            industry: string;
            projectType: string;
            timeline: string;
            deployment: string;
            scale: string;
        };
        keyAchievements: string[];
    };

    // Business Challenge
    businessChallenge: {
        problems: string[];
        objectives: string[];
    };

    // Solution Overview
    solutionOverview: {
        strategicApproach: string;
        coreComponents: {
            title: string;
            items: string[];
        }[];
    };

    // Technical Architecture
    techStack: {
        frontend: TechItem[];
        backend: TechItem[];
        devTools: TechItem[];
    };

    // Key Features
    features: FeatureItem[];

    // Security Implementation
    security?: {
        authMethod: string;
        securityMeasures: string[];
    };

    // Performance Metrics
    performance?: {
        coreWebVitals: MetricItem[];
        optimizations: string[];
    };

    // Results & Impact
    results: {
        quantitative: MetricItem[];
        qualitative: string[];
        technicalAchievements: string[];
    };

    // Lessons Learned
    lessonsLearned: {
        whatWorkedWell: string[];
        challengesOvercome: string[];
    };

    // Future Roadmap
    futureRoadmap?: {
        phase2Features: string[];
        technicalImprovements: string[];
    };
}

export interface CaseStudy {
    id: string;
    type: CaseStudyType;
    slug: string;

    // Card Display
    title: string;
    client: string; // Can be "A Growing X Business" if anonymous
    businessType: BusinessType;
    problemType: ProblemType;

    // Preview
    problemSummary: string; // 1-2 sentences for cards
    outcomeHint: string; // Short outcome for preview
    speedIndicator: string; // "MVP in 3 weeks"
    thumbnailImage?: string;

    // Full Case Study Content (for systems cases)
    fullCase?: {
        // 1. Context
        context: {
            industry: string;
            situation: string; // "A growing X business struggling with Y..."
        };

        // 2. The Real Problem
        realProblem: {
            headline: string;
            whatWasntWorking: string;
            whyVendorsFailed: string;
            complexity: string;
        };

        // 3. The Approach
        approach: {
            headline: string;
            simplification: string;
            whatWeDidntBuild: string;
            decisionProcess: string;
        };

        // 4. Speed & Execution
        execution: {
            mvpTimeline: string;
            iterations: number;
            whatShippedFirst: string;
        };

        // 5. Outcome
        outcome: {
            metrics?: string[];
            qualitativeResults: string[];
            direction: string; // If metrics are early
        };

        // 6. Reflection
        reflection: {
            headline: string;
            learnings: string[];
        };

        // 7. CTA
        cta: {
            headline: string;
            ctaText: string;
        };
    };

    // Detailed Case Study (extensive documentation)
    detailedCase?: DetailedCaseContent;

    // Labs Experiment (different format)
    experiment?: {
        concept: string;
        execution: string;
        beforeAfter?: {
            before: string;
            after: string;
        };
        tools: string[];
    };
}

// Example Case Studies
export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'cedar-elevators-mvp',
        type: 'systems',
        slug: 'cedar-elevators-mvp',
        title: 'From Spreadsheets to Automated E-Commerce in 3 Weeks',
        client: 'Cedar Elevators',
        businessType: 'ecommerce',
        problemType: 'mvp-launch',
        problemSummary: 'A growing elevator parts distributor struggling with manual order processing, disconnected inventory, and zero online presence.',
        outcomeHint: 'Real-time inventory system, automated ordering, 60% faster fulfillment',
        speedIndicator: 'MVP in 3 weeks',
        fullCase: {
            context: {
                industry: 'Industrial Equipment Distribution',
                situation: 'A growing elevator parts distributor needed to modernize operations. Manual order processing through calls and emails was creating bottlenecks, inventory tracking lived in spreadsheets, and they had no online ordering system.',
            },
            realProblem: {
                headline: 'The Problem Wasn\'t "We Need a Website"',
                whatWasntWorking: 'Sales reps spent hours manually checking inventory across multiple spreadsheets. Orders were processed via email and phone calls. No real-time visibility into stock levels meant frequent overselling and customer disappointment.',
                whyVendorsFailed: 'Previous attempts involved hiring separate vendors for website design, database setup, and payment processing. Coordination overhead killed momentum. The tech stack didn\'t talk to each other.',
                complexity: 'The real complexity was syncing inventory across physical warehouses, managing bulk B2B pricing tiers, and maintaining backward compatibility with their existing accounting software.',
            },
            approach: {
                headline: 'We Simplified Before We Built',
                simplification: 'Instead of building every feature on day one, we focused on the critical path: real-time inventory → online ordering → automated fulfillment. Everything else could wait.',
                whatWeDidntBuild: 'We didn\'t build a custom CRM (they already had one). We didn\'t build complex warehouse management (their existing system worked). We integrated, not replaced.',
                decisionProcess: 'Every feature was evaluated with one question: Does this reduce manual work *this month*? If not, it was deferred to Phase 2.',
            },
            execution: {
                mvpTimeline: '3 weeks from kickoff to first live order',
                iterations: 2,
                whatShippedFirst: 'Week 1: Core product catalog with real-time inventory sync. Week 2: Customer accounts and bulk pricing engine. Week 3: Checkout, payment processing, and order automation.',
            },
            outcome: {
                metrics: [
                    '60% reduction in order processing time',
                    '45% of orders now placed online (vs. 0%)',
                    'Zero inventory overselling incidents since launch',
                ],
                qualitativeResults: [
                    'Sales reps now focus on relationships, not data entry',
                    'Customers can order 24/7 without phone calls',
                    'Accounting team reports cleaner, faster reconciliation',
                ],
                direction: 'Platform launched 2 months ago. Metrics improving monthly as adoption grows.',
            },
            reflection: {
                headline: 'What We Learned',
                learnings: [
                    'B2B buyers care more about speed and reliability than flashy UI. We optimized for fast page loads and clear pricing.',
                    'Integration beats replacement. Their existing tools worked—we just connected them.',
                    'Phased rollout was critical. Launching to a pilot group first caught edge cases before full launch.',
                ],
            },
            cta: {
                headline: 'Working on Inventory or Order Management?',
                ctaText: 'Let\'s Talk About Your System',
            },
        },
        thumbnailImage: '/assets/mockups/cedarwbg.png',
        detailedCase: {
            heroImage: '/assets/mockups/cedarwbg.png',
            projectStatus: 'production',
            version: '2.0.0',
            executiveSummary: {
                projectAtGlance: {
                    industry: 'Industrial Equipment & Elevator Parts',
                    projectType: 'Full-Stack E-Commerce Platform',
                    timeline: '6 Months (Phase 1 Complete)',
                    deployment: 'Production Live',
                    scale: '70+ Routes, 150+ Components, 18 Database Tables',
                },
                keyAchievements: [
                    '100% Feature Complete - All Phase 1 deliverables successfully implemented',
                    'Production Deployed - Live platform serving real customers',
                    'Mobile-First Design - Fully responsive across all device types',
                    'Enterprise Security - Industry-standard authentication and authorization',
                    'CMS Integration - Self-service content management for dynamic pages',
                ],
            },
            businessChallenge: {
                problems: [
                    'Manual Operations - Phone and email-based ordering led to inefficiencies and errors',
                    'Limited Reach - Geographic constraints limited customer acquisition',
                    'Quote Management - Time-consuming manual quote generation and tracking',
                    'Business Verification - No systematic approach to verify B2B customers',
                    'Inventory Visibility - Customers lacked real-time product availability information',
                    "Scalability Issues - Manual processes couldn't scale with business growth",
                ],
                objectives: [
                    'Digitize Sales Process - Enable online ordering with real-time inventory',
                    'Streamline Operations - Automate quote generation and order management',
                    'Verify B2B Customers - Systematic business verification workflow',
                    'Enhance Customer Experience - Self-service portal for order tracking',
                    'Enable Content Management - Non-technical team members to update policies',
                    'Scale Operations - Support business growth without proportional team expansion',
                ],
            },
            solutionOverview: {
                strategicApproach: 'Developed a comprehensive e-commerce platform addressing both B2C (individual customers) and B2B (business customers) requirements while maintaining operational efficiency through automation and intelligent workflows.',
                coreComponents: [
                    {
                        title: 'Multi-Tier User System',
                        items: [
                            'Guest Users - Browse catalog, request quotes, track orders',
                            'Individual Customers - Full e-commerce functionality, order history',
                            'Business Customers - Enhanced features, bulk ordering capabilities',
                            'Verified Businesses - Premium pricing, credit terms, dedicated support',
                            'Admin Team - Complete platform management and analytics',
                        ],
                    },
                    {
                        title: 'Intelligent Quote Management',
                        items: [
                            'Professional quote request interface with product selection',
                            'Bulk quote upload via CSV for large procurements',
                            'Automated quote-to-order conversion workflow',
                            'PDF generation for quotes and invoices',
                            'Real-time quote status tracking',
                        ],
                    },
                    {
                        title: 'Business Verification System',
                        items: [
                            'Multi-document upload capability (GST, PAN, Business License)',
                            'Admin verification dashboard with document review',
                            'Automated verification status tracking',
                            'Verification workflow with approval/rejection handling',
                        ],
                    },
                    {
                        title: 'Content Management System',
                        items: [
                            '7 managed content pages (About, Warranty, Policies, etc.)',
                            'Rich text editor with tables, lists, and formatting',
                            'Media management and embedding',
                            'SEO metadata management',
                        ],
                    },
                ],
            },
            techStack: {
                frontend: [
                    { name: 'Next.js', version: '16.1.1', description: 'App Router, React Server Components' },
                    { name: 'React', version: '19.2.3', description: 'Concurrent features, Automatic batching' },
                    { name: 'TypeScript', version: '5.9.3', description: 'Strict mode, Comprehensive type safety' },
                    { name: 'Tailwind CSS', version: '4.1.18', description: 'Utility-first, Custom design system' },
                    { name: 'TanStack Query', version: '5.90.12', description: 'Server state management' },
                    { name: 'React Hook Form', version: '7.69.0', description: 'Zero re-renders form handling' },
                ],
                backend: [
                    { name: 'Supabase', description: 'PostgreSQL 15, Row Level Security, Real-time subscriptions' },
                    { name: 'Clerk', version: '6.36.5', description: 'Authentication, OAuth, Session management' },
                    { name: 'Cloudinary', description: 'Image optimization, CDN delivery' },
                    { name: 'Razorpay', description: 'UPI, Cards, Net Banking, Wallets' },
                    { name: 'Resend', description: 'Transactional emails' },
                    { name: 'Upstash Redis', description: 'Session storage, Rate limiting, Cart persistence' },
                ],
                devTools: [
                    { name: 'pnpm', description: 'Fast, disk-efficient package manager' },
                    { name: 'Turbopack', description: 'Ultra-fast development builds' },
                    { name: 'ESLint 9', description: 'Code quality' },
                    { name: 'Vercel', description: 'Edge network, Automatic deployments' },
                ],
            },
            features: [
                {
                    title: 'Advanced Product Catalog',
                    description: 'Multi-level filtering system with three-tier product organization',
                    subFeatures: [
                        'Real-time Search with instant suggestions',
                        'Advanced Filters - Application, Category, Price range, Availability',
                        'Grid/List Views - User-selectable display modes',
                        'Product Cards with images, pricing, stock status',
                        'Quick View modal product previews',
                    ],
                },
                {
                    title: 'Professional Quote Management',
                    description: 'Complete quote lifecycle from request to order conversion',
                    subFeatures: [
                        'Product Selection from catalog',
                        'Bulk Upload via CSV for large quote requests',
                        'Professional PDF generation with company branding',
                        'Quote History with complete audit trail',
                        'One-click Quote-to-Order conversion',
                    ],
                },
                {
                    title: 'Comprehensive Admin Panel',
                    description: '17 management modules for complete platform control',
                    subFeatures: [
                        'Dashboard with revenue metrics and analytics',
                        'Product Management with bulk CSV import',
                        'Order Management with tracking',
                        'Customer Management and verification',
                        'CMS Pages with rich text editor',
                        'Banner Management',
                        'Inventory tracking with low stock alerts',
                    ],
                },
                {
                    title: 'Secure Checkout Process',
                    description: 'Multi-step checkout with Razorpay integration',
                    subFeatures: [
                        'Cart Review with quantity adjustments',
                        'Saved addresses dropdown',
                        'Multiple payment options (UPI, Cards, Net Banking, Wallets)',
                        'Order confirmation with invoice download',
                    ],
                },
            ],
            security: {
                authMethod: 'Clerk Authentication with Role-based Access Control',
                securityMeasures: [
                    'Row Level Security (RLS) - Automatic data isolation per user',
                    'Input Validation with Zod schema validation',
                    'Redis-based Rate Limiting - Max 100 requests per minute',
                    'JWT Token Validation middleware',
                    'CSRF Protection with SameSite cookies',
                    'XSS Prevention with Content Security Policy',
                    'SQL Injection Prevention with parameterized queries',
                ],
            },
            performance: {
                coreWebVitals: [
                    { label: 'First Contentful Paint (FCP)', after: '1.2s', improvement: '20% better than target' },
                    { label: 'Largest Contentful Paint (LCP)', after: '2.1s', improvement: '16% better than target' },
                    { label: 'Time to Interactive (TTI)', after: '3.0s', improvement: '14% better than target' },
                    { label: 'Cumulative Layout Shift (CLS)', after: '0.05', improvement: '50% better than target' },
                    { label: 'Total Blocking Time (TBT)', after: '150ms', improvement: '25% better than target' },
                ],
                optimizations: [
                    'Next.js Image component with Cloudinary optimization',
                    'Dynamic imports for code splitting',
                    'React Server Components - 40% reduced JS bundle',
                    'Database indexes on frequently accessed columns',
                    'Redis caching for frequently accessed data',
                ],
            },
            results: {
                quantitative: [
                    { label: 'Order Processing Time', before: '24-48 hours', after: '5-10 minutes', improvement: '98% faster' },
                    { label: 'Quote Generation', before: 'Manual (2-3 hours)', after: 'Automated (<5 min)', improvement: '97% faster' },
                    { label: 'Customer Reach', before: 'Local only', after: 'National', improvement: '10x expansion' },
                    { label: 'Order Accuracy', before: '85%', after: '99%', improvement: '16% improvement' },
                    { label: 'Operational Efficiency', before: 'Manual tracking', after: 'Automated', improvement: '80% time saved' },
                ],
                qualitative: [
                    'Self-service portal for 24/7 access',
                    'Real-time order tracking',
                    'Instant quote requests',
                    'Mobile-friendly shopping experience',
                    'Can handle 10x current volume without additional staff',
                ],
                technicalAchievements: [
                    'Page load times under 2 seconds',
                    '100/100 Lighthouse performance score',
                    'Zero downtime deployment',
                    'Horizontal scaling ready',
                    'Database optimized for millions of records',
                ],
            },
            lessonsLearned: {
                whatWorkedWell: [
                    'Modular Architecture - Strict module boundaries prevented technical debt',
                    'TypeScript Everywhere - Type safety caught bugs during development',
                    'Server Components - Reduced JavaScript bundle sizes by 40%',
                    'Supabase + Clerk - Enterprise-grade auth and database without infrastructure management',
                ],
                challengesOvercome: [
                    'Complex Business Logic - Implemented RBAC with TypeScript discriminated unions',
                    'Multi-Tier Categorization - Recursive PostgreSQL queries with cached category tree',
                    'Real-Time Inventory - Database-level stock reservation with pessimistic locking',
                    'Mobile Performance - Cloudinary optimization with lazy loading and blur-up technique',
                ],
            },
            futureRoadmap: {
                phase2Features: [
                    'Advanced Analytics - Customer lifetime value, recommendation engine',
                    'Mobile Applications - Native iOS and Android apps',
                    'Enhanced B2B Features - Credit management, purchase orders',
                    'Marketing Automation - Email campaigns, abandoned cart recovery',
                    'Loyalty Program - Points system, referral rewards',
                ],
                technicalImprovements: [
                    'GraphQL API for reduced over-fetching',
                    'Microservices Architecture',
                    'Advanced Edge Caching',
                    'Internationalization - Multi-language, multi-currency',
                ],
            },
        },
    },
    {
        id: 'ai-workflow-automation',
        type: 'systems',
        slug: 'ai-workflow-automation',
        title: 'Cutting Support Response Time from Hours to Minutes with AI',
        client: 'A Growing SaaS Startup',
        businessType: 'startup',
        problemType: 'automation',
        problemSummary: 'Support team drowning in repetitive questions, response times suffering, and customer satisfaction dropping despite team growth.',
        outcomeHint: 'AI-powered triage, 70% faster response time, happier team',
        speedIndicator: 'Deployed in 2 weeks',
        fullCase: {
            context: {
                industry: 'B2B SaaS',
                situation: 'A fast-growing SaaS company with 200+ customers was seeing support tickets triple every quarter. Despite hiring more support reps, response times kept climbing. The team was burning out answering the same questions repeatedly.',
            },
            realProblem: {
                headline: 'Hiring More People Wasn\'t the Answer',
                whatWasntWorking: '60% of tickets were variations of the same 10 questions. Support reps manually searched knowledge base articles, copy-pasted answers, and tagged tickets by hand. New hires took weeks to get up to speed.',
                whyVendorsFailed: 'Off-the-shelf chatbots gave robotic answers. Custom AI solutions quoted $50K+ and 3-month timelines. They needed something fast and affordable.',
                complexity: 'The real challenge was context. Support questions referenced specific user accounts, feature configurations, and billing states. Generic AI wouldn\'t work.',
            },
            approach: {
                headline: 'Smart Triage, Not Full Automation',
                simplification: 'Instead of trying to replace support reps, we built an AI assistant that handles triage, suggests responses, and auto-categorizes tickets. Reps review and send—saving hours of searching and typing.',
                whatWeDidntBuild: 'We didn\'t build a customer-facing chatbot (not ready). We didn\'t try to automate complex cases. We focused on the repetitive 60%.',
                decisionProcess: 'We analyzed 3 months of ticket data, identified the top 15 question types, and trained the AI on those patterns first. Everything else falls back to human review.',
            },
            execution: {
                mvpTimeline: '2 weeks from data analysis to first AI-suggested response',
                iterations: 3,
                whatShippedFirst: 'Week 1: AI trained on historical tickets, integrated with support platform. Week 2: Suggestion engine deployed, team testing internally. Week 3: Full rollout with monitoring.',
            },
            outcome: {
                metrics: [
                    '70% reduction in average response time (6 hours → 1.8 hours)',
                    '50% of tickets now auto-categorized and pre-drafted',
                    '85% accuracy on suggested responses',
                ],
                qualitativeResults: [
                    'Support team morale improved significantly',
                    'New hires get productive in days, not weeks',
                    'Reps now have time for complex, high-value conversations',
                ],
                direction: 'Deployed 1 month ago. Accuracy improving weekly as AI learns from approved responses.',
            },
            reflection: {
                headline: 'What We Learned',
                learnings: [
                    'Augmentation beats replacement. The team trusted the AI because they stayed in control.',
                    'Start narrow, expand later. Focusing on 15 question types first meant faster deployment and better accuracy.',
                    'Data quality matters more than model complexity. Clean ticket history was more valuable than fancy AI.',
                ],
            },
            cta: {
                headline: 'Dealing with Repetitive Workflows?',
                ctaText: 'Explore AI Automation',
            },
        },
    },
    {
        id: 'ai-product-renders',
        type: 'labs-experiment',
        slug: 'ai-product-renders',
        title: '500 Product Visuals in 3 Days',
        client: 'E-Commerce Fashion Brand',
        businessType: 'ecommerce',
        problemType: 'content-creation',
        problemSummary: 'Fashion brand needed product photography for 500 SKUs. Traditional shoot would take 2 weeks and $15K.',
        outcomeHint: 'AI-generated lifestyle shots, 3-day turnaround, <$2K cost',
        speedIndicator: '3 days',
        experiment: {
            concept: 'Use AI to generate lifestyle product photography instead of traditional photoshoots',
            execution: 'Trained custom model on brand aesthetic. Generated 500 product renders with lifestyle backgrounds. Human curation selected best variants.',
            beforeAfter: {
                before: 'Traditional photoshoot timeline: 2 weeks, $15K budget, coordination with models, locations, and photographers',
                after: 'AI generation: 3 days, <$2K cost, infinite variations, instant revisions',
            },
            tools: ['Midjourney', 'Stable Diffusion', 'Custom LoRA Training'],
        },
    },
];

// Hub Page Content
export const CASE_STUDY_HUB = {
    headline: 'Real Problems. Real Solutions. Real Outcomes.',
    subheadline: 'See how we help businesses build faster, automate smarter, and scale without friction.',
    filters: {
        businessType: [
            { value: 'all', label: 'All Types' },
            { value: 'startup', label: 'Startups' },
            { value: 'ecommerce', label: 'E-Commerce' },
            { value: 'enterprise', label: 'Enterprise' },
            { value: 'agency', label: 'Agencies' },
        ],
        problemType: [
            { value: 'all', label: 'All Problems' },
            { value: 'mvp-launch', label: 'MVP Launch' },
            { value: 'automation', label: 'Automation' },
            { value: 'scaling', label: 'Scaling' },
            { value: 'content-creation', label: 'Content Creation' },
            { value: 'system-integration', label: 'System Integration' },
        ],
    },
} as const;
