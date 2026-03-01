import { defineField, defineType } from 'sanity'
import { UserIcon } from '@sanity/icons'

/**
 * Partner Page Singleton
 * Maps to: src/modules/partnership/constants.ts
 * Contains all section content for the Partnership page
 */
export const partnerPageType = defineType({
    name: 'partnerPage',
    title: 'Partner Page',
    type: 'document',
    icon: UserIcon,
    description: 'Manage all content sections for the Partnership page',
    groups: [
        { name: 'hero', title: '🦸 Hero', default: true },
        { name: 'whyPartner', title: '🤝 Why Partner' },
        { name: 'benefits', title: '✨ Benefits' },
        { name: 'referral', title: '🔗 Referral Explainer' },
        { name: 'trust', title: '🛡️ Trust & Quality' },
        { name: 'cta', title: '📣 CTA' },
        { name: 'seo', title: '🔍 SEO' },
    ],
    fields: [
        // ── Hero ──
        defineField({
            name: 'heroHeadline',
            title: 'Headline',
            type: 'string',
            group: 'hero',
            validation: (Rule) => Rule.max(80),
        }),
        defineField({
            name: 'heroSubheadline',
            title: 'Subheadline',
            type: 'text',
            rows: 2,
            group: 'hero',
        }),
        defineField({
            name: 'heroCtaText',
            title: 'CTA Text',
            type: 'string',
            group: 'hero',
        }),

        // ── Why Partner ──
        defineField({
            name: 'whyPartnerHeadline',
            title: 'Headline',
            type: 'string',
            group: 'whyPartner',
        }),
        defineField({
            name: 'whyPartnerSubheadline',
            title: 'Subheadline',
            type: 'string',
            group: 'whyPartner',
        }),

        // ── Benefits ──
        defineField({
            name: 'benefits',
            title: 'Partnership Benefits',
            type: 'array',
            group: 'benefits',
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

        // ── Partnership Types ──
        defineField({
            name: 'partnershipTypesHeadline',
            title: 'Partnership Types Headline',
            type: 'string',
            group: 'benefits',
        }),
        defineField({
            name: 'partnershipTypesSubheadline',
            title: 'Partnership Types Subheadline',
            type: 'string',
            group: 'benefits',
        }),
        defineField({
            name: 'partnershipTypes',
            title: 'Partnership Types',
            type: 'array',
            group: 'benefits',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'typeId', type: 'string', title: 'Type ID', description: 'strategic or referral' },
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'tagline', type: 'string', title: 'Tagline' },
                        { name: 'description', type: 'text', title: 'Description' },
                        { name: 'targetAudience', type: 'array', title: 'Target Audience', of: [{ type: 'string' }] },
                        { name: 'whatItLooks', type: 'array', title: 'What It Looks Like', of: [{ type: 'string' }] },
                        { name: 'valueProposition', type: 'string', title: 'Value Proposition' },
                        { name: 'ctaText', type: 'string', title: 'CTA Text' },
                        { name: 'icon', type: 'string', title: 'Icon Key' },
                        { name: 'accentColor', type: 'string', title: 'Accent Color' },
                    ],
                    preview: {
                        select: { title: 'title', subtitle: 'tagline' },
                    },
                },
            ],
        }),

        // ── Referral Explainer ──
        defineField({
            name: 'referralHeadline',
            title: 'Headline',
            type: 'string',
            group: 'referral',
        }),
        defineField({
            name: 'referralSteps',
            title: 'Steps',
            type: 'array',
            group: 'referral',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'number', type: 'string', title: 'Step Number' },
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
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
            name: 'referralCommissionNote',
            title: 'Commission Note',
            type: 'text',
            rows: 2,
            group: 'referral',
        }),

        // ── Trust & Quality ──
        defineField({
            name: 'trustHeadline',
            title: 'Headline',
            type: 'string',
            group: 'trust',
        }),
        defineField({
            name: 'trustSubheadline',
            title: 'Subheadline',
            type: 'string',
            group: 'trust',
        }),
        defineField({
            name: 'trustPrinciples',
            title: 'Trust Principles',
            type: 'array',
            group: 'trust',
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
            name: 'ctaPartnerButtonText',
            title: 'Partner Button Text',
            type: 'string',
            group: 'cta',
        }),
        defineField({
            name: 'ctaReferralButtonText',
            title: 'Referral Button Text',
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
                title: 'Partner Page',
                subtitle: 'Partnership models, benefits & referrals',
            }
        },
    },
})
