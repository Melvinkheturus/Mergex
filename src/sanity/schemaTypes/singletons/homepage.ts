import { defineField, defineType } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const homepageType = defineType({
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    icon: HomeIcon,
    description: 'Control your homepage — hero copy, featured content, and section visibility',
    groups: [
        { name: 'hero', title: '🦸 Hero Section', default: true },
        { name: 'sections', title: '📐 Section Visibility' },
        { name: 'problemContext', title: '🧠 Problem Context' },
        { name: 'problemFragmentation', title: '🧩 Problem Fragmentation' },
        { name: 'ecosystem', title: '🌌 Ecosystem Snapshot' },
        { name: 'faq', title: '❓ FAQ Content' },
        { name: 'featured', title: '⭐ Featured Content' },
        { name: 'seo', title: '🔍 SEO' },
    ],
    fields: [
        // ── Hero Section ──
        defineField({
            name: 'heroTagline',
            title: 'Hero Tagline',
            type: 'string',
            group: 'hero',
            description: 'Small text above the headline (e.g., "From Chaos to Clarity . Mergex")',
            validation: (Rule) => Rule.max(60),
        }),
        defineField({
            name: 'heroHeadline',
            title: 'Hero Headline',
            type: 'string',
            group: 'hero',
            description: 'The main headline visitors see first. Make it powerful and concise.',
            validation: (Rule) => Rule.max(80),
        }),
        defineField({
            name: 'heroSubheadline',
            title: 'Hero Subheadline',
            type: 'text',
            rows: 2,
            group: 'hero',
            description: 'Supporting text under the headline. Explain your value in one sentence.',
            validation: (Rule) => Rule.max(200),
        }),
        defineField({
            name: 'heroCta',
            title: 'Hero CTA Button',
            type: 'object',
            group: 'hero',
            description: 'The main action button in the hero section',
            fields: [
                {
                    name: 'text',
                    type: 'string',
                    title: 'Button Text',
                    description: 'e.g., "Explore Solutions", "Get Started"',
                },
                {
                    name: 'link',
                    type: 'string',
                    title: 'Button Link',
                    description: 'URL or page path',
                },
            ],
        }),
        defineField({
            name: 'heroSecondaryCtaText',
            title: 'Secondary CTA Text',
            type: 'string',
            group: 'hero',
            description: 'Optional secondary action text (e.g., "View Case Studies")',
        }),
        defineField({
            name: 'heroSecondaryCtaLink',
            title: 'Secondary CTA Link',
            type: 'string',
            group: 'hero',
            description: 'Where the secondary CTA leads',
        }),

        // ── Section Visibility ──
        defineField({
            name: 'showProblemContext',
            title: 'Show "Why Mergex Exists" Section',
            type: 'boolean',
            group: 'sections',
            description: 'Toggle the Problem Context section on/off',
            initialValue: true,
        }),
        defineField({
            name: 'showProblemFragmentation',
            title: 'Show "Problem with Fragmentation" Section',
            type: 'boolean',
            group: 'sections',
            description: 'Toggle the fragmentation section on/off',
            initialValue: true,
        }),
        defineField({
            name: 'showEcosystem',
            title: 'Show Ecosystem Snapshot',
            type: 'boolean',
            group: 'sections',
            description: 'Toggle the divisions/ecosystem overview',
            initialValue: true,
        }),
        defineField({
            name: 'showTestimonials',
            title: 'Show Testimonials',
            type: 'boolean',
            group: 'sections',
            description: 'Toggle the social proof section',
            initialValue: true,
        }),
        defineField({
            name: 'showFAQ',
            title: 'Show FAQ Section',
            type: 'boolean',
            group: 'sections',
            description: 'Toggle the FAQ accordion',
            initialValue: true,
        }),

        // ── Problem Context (Why We Exist) ──
        defineField({
            name: 'problemContextHeadline',
            title: 'Headline',
            type: 'string',
            group: 'problemContext',
        }),
        defineField({
            name: 'problemContextSubheadline',
            title: 'Subheadline',
            type: 'text',
            rows: 2,
            group: 'problemContext',
        }),
        defineField({
            name: 'problemContextProblems',
            title: 'Problems List',
            type: 'array',
            group: 'problemContext',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description', rows: 2 },
                        {
                            name: 'icon',
                            type: 'string',
                            title: 'Icon Key',
                            options: { list: ['users', 'clock', 'brain', 'link'] }
                        },
                    ],
                }
            ],
            validation: (Rule) => Rule.max(4),
        }),
        defineField({
            name: 'problemContextClosing',
            title: 'Closing Statement',
            type: 'string',
            group: 'problemContext',
        }),

        // ── Problem Fragmentation ──
        defineField({
            name: 'problemFragmentationHeadline',
            title: 'Headline',
            type: 'string',
            group: 'problemFragmentation',
        }),
        defineField({
            name: 'problemFragmentationSubheadline',
            title: 'Subheadline',
            type: 'text',
            rows: 2,
            group: 'problemFragmentation',
        }),
        defineField({
            name: 'problemFragmentationProblems',
            title: 'Problems List',
            type: 'array',
            group: 'problemFragmentation',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description', rows: 2 },
                        {
                            name: 'icon',
                            type: 'string',
                            title: 'Icon Key',
                            options: { list: ['users', 'clock', 'brain', 'link'] }
                        },
                    ],
                }
            ],
            validation: (Rule) => Rule.max(4),
        }),
        defineField({
            name: 'problemFragmentationClosing',
            title: 'Closing Statement',
            type: 'string',
            group: 'problemFragmentation',
        }),

        // ── Ecosystem Snapshot ──
        defineField({
            name: 'ecosystemSystemsCard',
            title: 'Systems Card Content',
            type: 'object',
            group: 'ecosystem',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'tagline', type: 'string', title: 'Tagline' },
                { name: 'description', type: 'text', title: 'Description', rows: 2 },
                { name: 'image', type: 'image', title: 'Background Image' },
            ]
        }),
        defineField({
            name: 'ecosystemLabsCard',
            title: 'Labs Card Content',
            type: 'object',
            group: 'ecosystem',
            fields: [
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'tagline', type: 'string', title: 'Tagline' },
                { name: 'description', type: 'text', title: 'Description', rows: 2 },
                { name: 'image', type: 'image', title: 'Background Image' },
            ]
        }),

        // ── FAQ Content ──
        defineField({
            name: 'faqHeadline',
            title: 'FAQ Headline',
            type: 'string',
            group: 'faq',
        }),
        defineField({
            name: 'faqSubheadline',
            title: 'FAQ Subheadline',
            type: 'string',
            group: 'faq',
        }),
        defineField({
            name: 'faqDescription',
            title: 'Description',
            type: 'text',
            rows: 3,
            group: 'faq',
        }),
        defineField({
            name: 'faqQuestions',
            title: 'Questions & Answers',
            type: 'array',
            group: 'faq',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', type: 'string', title: 'Question' },
                        { name: 'answer', type: 'text', title: 'Answer', rows: 3 },
                    ],
                }
            ],
        }),
        defineField({
            name: 'faqCtaText',
            title: 'CTA Text',
            type: 'string',
            group: 'faq',
        }),
        defineField({
            name: 'faqCtaSubtext',
            title: 'CTA Subtext',
            type: 'string',
            group: 'faq',
        }),
        defineField({
            name: 'faqButtonText',
            title: 'Button Text',
            type: 'string',
            group: 'faq',
        }),

        // ── Featured Content ──
        defineField({
            name: 'featuredCaseStudies',
            title: 'Featured Case Studies',
            type: 'array',
            group: 'featured',
            description: 'Pick case studies to highlight on the homepage. Drag to reorder.',
            of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }],
            validation: (Rule) => Rule.max(3),
        }),
        defineField({
            name: 'featuredPosts',
            title: 'Featured Blog Posts',
            type: 'array',
            group: 'featured',
            description: 'Pick blog posts to feature on the homepage.',
            of: [{ type: 'reference', to: [{ type: 'post' }] }],
            validation: (Rule) => Rule.max(3),
        }),
        defineField({
            name: 'featuredTestimonials',
            title: 'Featured Testimonials',
            type: 'array',
            group: 'featured',
            description: 'Handpick testimonials for the homepage.',
            of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
            validation: (Rule) => Rule.max(5),
        }),

        // ── SEO ──
        defineField({
            name: 'seo',
            title: 'Homepage SEO',
            type: 'object',
            group: 'seo',
            description: 'Override the default SEO settings for the homepage specifically',
            fields: [
                {
                    name: 'metaTitle',
                    type: 'string',
                    title: 'Meta Title',
                    description: 'Keep it under 60 characters',
                    validation: (Rule) => Rule.max(60),
                },
                {
                    name: 'metaDescription',
                    type: 'text',
                    title: 'Meta Description',
                    rows: 3,
                    description: 'Keep it under 160 characters',
                    validation: (Rule) => Rule.max(160),
                },
                {
                    name: 'ogImage',
                    type: 'image',
                    title: 'Social Share Image',
                    description: 'Image shown when the homepage is shared (1200×630)',
                },
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Homepage',
                subtitle: 'Hero, sections, and featured content',
            }
        },
    },
})
