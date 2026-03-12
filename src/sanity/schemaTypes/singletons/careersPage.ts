import { defineField, defineType } from 'sanity'
import { UsersIcon } from '@sanity/icons'

/**
 * Careers Page Singleton
 * Maps to: src/modules/careers/content/careers.ts
 * Contains all section content for the Careers page
 */
export const careersPageType = defineType({
    name: 'careersPage',
    title: 'Careers Page',
    type: 'document',
    icon: UsersIcon,
    description: 'Manage all content sections for the Careers page',
    groups: [
        { name: 'hero', title: '🦸 Hero', default: true },
        { name: 'whatWorkingMeans', title: '🏢 What Working Here Means' },
        { name: 'howWeWork', title: '🔄 How We Work' },
        { name: 'careerPaths', title: '🛤️ Career Paths' },
        { name: 'learningGrowth', title: '📈 Learning & Growth' },
        { name: 'whatWeDontOffer', title: '🚫 What We Don\'t Offer' },
        { name: 'howToApply', title: '📝 How to Apply' },
        { name: 'finalNote', title: '💬 Final Note' },
        { name: 'seo', title: '🔍 SEO' },
    ],
    fields: [
        // ── Hero ──
        defineField({
            name: 'heroHeadline',
            title: 'Headline',
            type: 'string',
            group: 'hero',
            validation: (Rule) => Rule.max(100),
        }),
        defineField({
            name: 'heroSubheadline',
            title: 'Subheadline',
            type: 'text',
            rows: 2,
            group: 'hero',
        }),
        defineField({
            name: 'heroPrimaryCTA',
            title: 'Primary CTA Text',
            type: 'string',
            group: 'hero',
        }),
        defineField({
            name: 'heroSecondaryCTA',
            title: 'Secondary CTA Text',
            type: 'string',
            group: 'hero',
        }),

        // ── What Working Means ──
        defineField({
            name: 'whatWorkingMeansHeadline',
            title: 'Headline',
            type: 'string',
            group: 'whatWorkingMeans',
        }),
        defineField({
            name: 'whatWorkingMeansSubheadline',
            title: 'Subheadline',
            type: 'string',
            group: 'whatWorkingMeans',
        }),
        defineField({
            name: 'whatWorkingMeansPrinciples',
            title: 'Principles',
            type: 'array',
            group: 'whatWorkingMeans',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                    ],
                    preview: {
                        select: { title: 'title' },
                    },
                },
            ],
        }),

        // ── How We Work ──
        defineField({
            name: 'howWeWorkHeadline',
            title: 'Headline',
            type: 'string',
            group: 'howWeWork',
        }),
        defineField({
            name: 'howWeWorkSubheadline',
            title: 'Subheadline',
            type: 'string',
            group: 'howWeWork',
        }),
        defineField({
            name: 'howWeWorkPrinciples',
            title: 'Working Principles',
            type: 'array',
            group: 'howWeWork',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'icon', type: 'string', title: 'Icon Key' },
                    ],
                    preview: {
                        select: { title: 'title' },
                    },
                },
            ],
        }),

        // ── Career Paths ──
        defineField({
            name: 'careerPathsHeadline',
            title: 'Headline',
            type: 'string',
            group: 'careerPaths',
        }),
        defineField({
            name: 'careerPathsSubheadline',
            title: 'Subheadline',
            type: 'string',
            group: 'careerPaths',
        }),
        defineField({
            name: 'careerPaths',
            title: 'Career Paths',
            type: 'array',
            group: 'careerPaths',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'pathId', type: 'string', title: 'Path ID', description: 'e.g., full-time, internships, contributors, future' },
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'tagline', type: 'string', title: 'Tagline' },
                        { name: 'icon', type: 'string', title: 'Icon Key' },
                        { name: 'description', type: 'text', title: 'Description', rows: 3 },
                        { name: 'areas', type: 'array', title: 'Areas/Requirements', of: [{ type: 'string' }], description: 'Role areas or what we look for' },
                        { name: 'status', type: 'string', title: 'Status Message' },
                        { name: 'ctaText', type: 'string', title: 'CTA Text' },
                        { name: 'ctaLink', type: 'string', title: 'CTA Link' },
                        { name: 'note', type: 'text', title: 'Extra Note', description: 'Optional additional note' },
                    ],
                    preview: {
                        select: { title: 'title', subtitle: 'tagline' },
                    },
                },
            ],
        }),

        // ── Learning & Growth ──
        defineField({
            name: 'learningGrowthHeadline',
            title: 'Headline',
            type: 'string',
            group: 'learningGrowth',
        }),
        defineField({
            name: 'learningGrowthSubheadline',
            title: 'Subheadline',
            type: 'string',
            group: 'learningGrowth',
        }),
        defineField({
            name: 'learningGrowthBenefits',
            title: 'Benefits',
            type: 'array',
            group: 'learningGrowth',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                    ],
                    preview: {
                        select: { title: 'title' },
                    },
                },
            ],
        }),
        defineField({
            name: 'learningGrowthDisclaimer',
            title: 'Disclaimer',
            type: 'string',
            group: 'learningGrowth',
        }),

        // ── What We Don't Offer ──
        defineField({
            name: 'whatWeDontOfferHeadline',
            title: 'Headline',
            type: 'string',
            group: 'whatWeDontOffer',
        }),
        defineField({
            name: 'whatWeDontOfferSubheadline',
            title: 'Subheadline',
            type: 'string',
            group: 'whatWeDontOffer',
        }),
        defineField({
            name: 'whatWeDontOfferItems',
            title: 'Items',
            type: 'array',
            group: 'whatWeDontOffer',
            of: [{ type: 'string' }],
            description: 'List of things we honestly don\'t offer',
        }),

        // ── How to Apply ──
        defineField({
            name: 'howToApplyHeadline',
            title: 'Headline',
            type: 'string',
            group: 'howToApply',
        }),
        defineField({
            name: 'howToApplyTypes',
            title: 'Application Types',
            type: 'array',
            group: 'howToApply',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'ctaText', type: 'string', title: 'CTA Text' },
                        { name: 'ctaLink', type: 'string', title: 'CTA Link' },
                    ],
                    preview: {
                        select: { title: 'title' },
                    },
                },
            ],
        }),
        defineField({
            name: 'howToApplyNote',
            title: 'Application Note',
            type: 'text',
            rows: 2,
            group: 'howToApply',
        }),

        // ── Final Note ──
        defineField({
            name: 'finalNoteMessage',
            title: 'Final Message',
            type: 'text',
            rows: 3,
            group: 'finalNote',
            description: 'Closing message at the bottom of the careers page',
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
                title: 'Careers Page',
                subtitle: 'Culture, paths, and application info',
            }
        },
    },
})
