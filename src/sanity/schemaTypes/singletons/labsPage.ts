import { defineField, defineType } from 'sanity'
import { RocketIcon } from '@sanity/icons'

/**
 * Labs Page Singleton
 * Maps to: src/modules/labs/content/labs.ts
 * Contains all section content for the Labs page
 */
export const labsPageType = defineType({
    name: 'labsPage',
    title: 'Labs Page',
    type: 'document',
    icon: RocketIcon,
    description: 'Manage all content sections for the Mergex Labs page',
    groups: [
        { name: 'hero', title: '🦸 Hero', default: true },
        { name: 'whatIsLabs', title: '🔬 What Is Labs' },
        { name: 'whatWeCreate', title: '🎨 What We Create' },
        { name: 'gallery', title: '🖼️ Gallery' },
        { name: 'scrollShowcase', title: '🎬 Scroll Showcase' },
        { name: 'howItWorks', title: '🔄 How It Works' },
        { name: 'whyExists', title: '💡 Why Labs Exists' },
        { name: 'cta', title: '📣 CTA' },
        { name: 'seo', title: '🔍 SEO' },
    ],
    fields: [
        // ── Hero ──
        defineField({
            name: 'heroEyebrow',
            title: 'Eyebrow Text',
            type: 'string',
            group: 'hero',
            description: 'Small text above headline, e.g. "Mergex Labs"',
        }),
        defineField({
            name: 'heroSubEyebrow',
            title: 'Sub-Eyebrow Text',
            type: 'string',
            group: 'hero',
            description: 'Small secondary text, e.g. "AI Creative Intelligence"',
        }),
        defineField({
            name: 'heroHeadline',
            title: 'Headline',
            type: 'string',
            group: 'hero',
            validation: (Rule) => Rule.max(80),
        }),
        defineField({
            name: 'heroSupportingLine',
            title: 'Supporting Line',
            type: 'text',
            rows: 2,
            group: 'hero',
        }),
        defineField({
            name: 'heroReinforcementLine',
            title: 'Reinforcement Line',
            type: 'string',
            group: 'hero',
        }),
        defineField({
            name: 'heroPrimaryCTA',
            title: 'Primary CTA',
            type: 'object',
            group: 'hero',
            fields: [
                { name: 'text', type: 'string', title: 'Button Text' },
                { name: 'href', type: 'string', title: 'Link' },
            ],
        }),
        defineField({
            name: 'heroSecondaryCTA',
            title: 'Secondary CTA',
            type: 'object',
            group: 'hero',
            fields: [
                { name: 'text', type: 'string', title: 'Button Text' },
                { name: 'href', type: 'string', title: 'Link' },
            ],
        }),
        defineField({
            name: 'heroMicrocopy',
            title: 'Microcopy',
            type: 'string',
            group: 'hero',
            description: 'Small reassurance text below buttons',
        }),

        // ── What Is Labs ──
        defineField({
            name: 'whatIsLabsHeadline',
            title: 'Headline',
            type: 'string',
            group: 'whatIsLabs',
        }),
        defineField({
            name: 'whatIsLabsDescription',
            title: 'Description',
            type: 'text',
            rows: 4,
            group: 'whatIsLabs',
        }),

        // ── What We Create ──
        defineField({
            name: 'whatWeCreateHeadline',
            title: 'Headline',
            type: 'string',
            group: 'whatWeCreate',
        }),
        defineField({
            name: 'whatWeCreateSubheadline',
            title: 'Subheadline',
            type: 'string',
            group: 'whatWeCreate',
        }),
        defineField({
            name: 'whatWeCreateCategories',
            title: 'Categories',
            type: 'array',
            group: 'whatWeCreate',
            description: 'Content creation categories (e.g., AI-Generated Visuals, Video & Reels)',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'capabilities', type: 'array', title: 'Capabilities', of: [{ type: 'string' }] },
                        { name: 'icon', type: 'string', title: 'Icon Key', description: 'Icon identifier (image, video, megaphone, palette, sparkles)' },
                    ],
                    preview: {
                        select: { title: 'title', subtitle: 'icon' },
                    },
                },
            ],
        }),

        // ── Gallery ──
        defineField({
            name: 'galleryHeadline',
            title: 'Headline',
            type: 'string',
            group: 'gallery',
        }),
        defineField({
            name: 'gallerySubheadline',
            title: 'Subheadline',
            type: 'string',
            group: 'gallery',
        }),
        defineField({
            name: 'galleryPlaceholderMessage',
            title: 'Placeholder Message',
            type: 'string',
            group: 'gallery',
            description: 'Shown when no gallery items exist yet',
        }),

        defineField({
            name: 'scrollShowcase',
            title: 'Scroll Showcase',
            type: 'object',
            group: 'scrollShowcase',
            fields: [
                { name: 'marqueeTexts', type: 'array', title: 'Background Marquee Texts', of: [{ type: 'string' }] },
                { name: 'badgeText', type: 'string', title: 'Badge Text' },
                { name: 'headlinePrefix', type: 'string', title: 'Headline Prefix (e.g. "Meet")' },
                { name: 'headlineImage', type: 'image', title: 'Headline Image (Calligraphy)' },
                { name: 'description', type: 'string', title: 'Description' },
                { name: 'socialLabel', type: 'string', title: 'Social Label' },
                { name: 'socialLinkText', type: 'string', title: 'Social Link Text' },
                { name: 'socialLinkUrl', type: 'url', title: 'Social Link URL' },
                { name: 'bodyText', type: 'text', title: 'Body Text' },
                {
                    name: 'metaItems',
                    title: 'Meta Items',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                { name: 'label', type: 'string', title: 'Label' },
                                { name: 'value', type: 'string', title: 'Value' }
                            ]
                        }
                    ]
                }
            ]
        }),

        defineField({
            name: 'workGallery',
            title: 'Work Gallery',
            type: 'object',
            group: 'gallery',
            fields: [
                { name: 'headline', type: 'string', title: 'Headline' },
                { name: 'images', type: 'array', title: 'Gallery Images', of: [{ type: 'image' }] }
            ]
        }),

        // ── How It Works ──
        defineField({
            name: 'howItWorksHeadline',
            title: 'Headline',
            type: 'string',
            group: 'howItWorks',
        }),
        defineField({
            name: 'howItWorksSubheadline',
            title: 'Subheadline',
            type: 'string',
            group: 'howItWorks',
        }),
        defineField({
            name: 'howItWorksSteps',
            title: 'Steps',
            type: 'array',
            group: 'howItWorks',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'number', type: 'string', title: 'Step Number' },
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'icon', type: 'string', title: 'Icon Key' },
                    ],
                    preview: {
                        select: { title: 'title', subtitle: 'number' },
                        prepare({ title, subtitle }) {
                            return { title, subtitle: `Step ${subtitle}` }
                        },
                    },
                },
            ],
        }),
        defineField({
            name: 'howItWorksKeyMessages',
            title: 'Key Messages',
            type: 'array',
            group: 'howItWorks',
            of: [{ type: 'string' }],
        }),

        // ── Why Labs Exists ──
        defineField({
            name: 'whyExistsHeadline',
            title: 'Headline',
            type: 'string',
            group: 'whyExists',
        }),
        defineField({
            name: 'whyExistsCards',
            title: 'Cards',
            type: 'array',
            group: 'whyExists',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'subtext', type: 'string', title: 'Subtext' },
                    ],
                    preview: {
                        select: { title: 'title' },
                    },
                },
            ],
        }),

        // ── CTA ──
        defineField({
            name: 'ctaHeadline',
            title: 'CTA Headline',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaSubheadline',
            title: 'CTA Subheadline',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaPrimaryCTA',
            title: 'Primary CTA Text',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaSecondaryCTA',
            title: 'Secondary CTA Text',
            type: 'string',
            group: 'cta',
        }),

        // ── SEO ──
        defineField({
            name: 'seo',
            title: 'SEO Settings',
            type: 'object',
            group: 'seo',
            fields: [
                { name: 'metaTitle', type: 'string', title: 'Meta Title', validation: (Rule) => Rule.max(60) },
                { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 3, validation: (Rule) => Rule.max(160) },
                { name: 'ogImage', type: 'image', title: 'Social Share Image' },
            ],
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Labs Page',
                subtitle: 'AI Content Studio sections & creative showcase',
            }
        },
    },
})
