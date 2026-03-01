import { defineField, defineType } from 'sanity'
import { UsersIcon } from '@sanity/icons'

/**
 * About Page Singleton
 * Maps to: src/modules/about/components/*
 * Contains all section content for the About page
 */
export const aboutPageType = defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    icon: UsersIcon,
    description: 'Manage all content sections for the About page',
    groups: [
        { name: 'hero', title: '🦸 Hero', default: true },
        { name: 'team', title: '👥 Team' },
        { name: 'ecosystem', title: '🌐 Ecosystem' },
        { name: 'principles', title: '📐 Principles' },
        { name: 'why', title: '💡 Why We Exist' },
        { name: 'cta', title: '📣 CTA' },
        { name: 'seo', title: '🔍 SEO' },
    ],
    fields: [
        // ── Hero ──
        defineField({
            name: 'heroHeadlineLine1',
            title: 'Headline Line 1',
            type: 'string',
            group: 'hero',
            validation: (Rule) => Rule.max(80),
        }),
        defineField({
            name: 'heroHeadlineLine2',
            title: 'Headline Line 2',
            type: 'string',
            group: 'hero',
            validation: (Rule) => Rule.max(80),
        }),
        defineField({
            name: 'heroSupportShort',
            title: 'Short Supporting Line',
            type: 'string',
            group: 'hero',
            description: 'e.g. "That\'s intentional."',
        }),
        defineField({
            name: 'heroSupportLong1',
            title: 'Supporting Paragraph 1',
            type: 'text',
            rows: 3,
            group: 'hero',
        }),
        defineField({
            name: 'heroSupportLong2',
            title: 'Supporting Paragraph 2',
            type: 'text',
            rows: 3,
            group: 'hero',
        }),

        // ── Team ──
        defineField({
            name: 'teamEyebrow',
            title: 'Section Eyebrow',
            type: 'string',
            group: 'team',
            description: 'e.g. "Mergex Minds"',
        }),
        defineField({
            name: 'teamHeadline',
            title: 'Team Headline',
            type: 'text',
            rows: 2,
            group: 'team',
        }),
        defineField({
            name: 'teamBody1',
            title: 'Body Paragraph 1',
            type: 'text',
            rows: 3,
            group: 'team',
        }),
        defineField({
            name: 'teamBody2',
            title: 'Body Paragraph 2',
            type: 'text',
            rows: 3,
            group: 'team',
        }),
        defineField({
            name: 'teamMembers',
            title: 'Team Members',
            type: 'array',
            group: 'team',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'image', type: 'image', title: 'Photo', options: { hotspot: true } },
                        { name: 'alt', type: 'string', title: 'Alt Text' },
                    ],
                    preview: {
                        select: { title: 'alt', media: 'image' },
                    },
                },
            ],
        }),

        // ── Ecosystem ──
        defineField({
            name: 'ecosystemHeadline',
            title: 'Headline',
            type: 'string',
            group: 'ecosystem',
        }),
        defineField({
            name: 'ecosystemCards',
            title: 'Ecosystem Cards',
            type: 'array',
            group: 'ecosystem',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'href', type: 'string', title: 'Link' },
                        { name: 'ctaText', type: 'string', title: 'CTA Text' },
                    ],
                    preview: {
                        select: { title: 'title' },
                    },
                },
            ],
        }),

        // ── Principles ──
        defineField({
            name: 'principlesHeadline',
            title: 'Headline',
            type: 'string',
            group: 'principles',
        }),
        defineField({
            name: 'principles',
            title: 'Principles List',
            type: 'array',
            group: 'principles',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'text', type: 'string', title: 'Principle Text' },
                    ],
                    preview: {
                        select: { title: 'text' },
                    },
                },
            ],
        }),

        // ── Why We Exist ──
        defineField({
            name: 'whyHeadline',
            title: 'Headline',
            type: 'string',
            group: 'why',
        }),
        defineField({
            name: 'whyLine1',
            title: 'Statement Line 1',
            type: 'string',
            group: 'why',
        }),
        defineField({
            name: 'whyLine2',
            title: 'Statement Line 2',
            type: 'string',
            group: 'why',
        }),
        defineField({
            name: 'whyClosing',
            title: 'Closing Statement',
            type: 'text',
            rows: 3,
            group: 'why',
        }),

        // ── CTA ──
        defineField({
            name: 'ctaHeadline',
            title: 'CTA Headline',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaGuidanceLine1',
            title: 'Guidance Line 1',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaGuidanceLine2',
            title: 'Guidance Line 2',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaPrimaryText',
            title: 'Primary CTA Text',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaSecondaryText',
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
                title: 'About Page',
                subtitle: 'Company story, team & ecosystem',
            }
        },
    },
})
