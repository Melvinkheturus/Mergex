// Case Studies Content
// Conversion-focused case study structure

export type CaseStudyType = 'systems' | 'labs-experiment';
export type BusinessType = 'startup' | 'ecommerce' | 'enterprise' | 'agency';
export type ProblemType = 'mvp-launch' | 'automation' | 'scaling' | 'content-creation' | 'system-integration';

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
