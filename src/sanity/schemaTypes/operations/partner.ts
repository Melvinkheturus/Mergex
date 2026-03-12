import { defineField, defineType } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export const partnerType = defineType({
    name: 'partner',
    title: 'Partner Application',
    type: 'document',
    icon: EnvelopeIcon,
    description: 'Incoming partner applications (Phase 1 — will move to Supabase later)',
    fields: [
        defineField({
            name: 'name',
            title: 'Applicant Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
        }),
        defineField({
            name: 'partnershipType',
            title: 'Partnership Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Strategic Partner', value: 'strategic' },
                    { title: 'Referral Partner', value: 'referral' },
                ],
                layout: 'radio',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'message',
            title: 'Message',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: '🆕 New', value: 'new' },
                    { title: '🔍 Reviewing', value: 'reviewing' },
                    { title: '✅ Accepted', value: 'accepted' },
                    { title: '❌ Declined', value: 'declined' },
                    { title: '⏸️ On Hold', value: 'hold' },
                ],
            },
            initialValue: 'new',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'notes',
            title: 'Internal Notes',
            type: 'text',
            rows: 3,
            description: '🔒 Only visible to your team, not on the site',
        }),
        defineField({
            name: 'dynamicData',
            title: 'Dynamic Form Data',
            type: 'string',
            description: 'JSON string of custom form fields submitted via dynamic forms',
        }),
        defineField({
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: 'name',
            company: 'company',
            status: 'status',
            type: 'partnershipType',
        },
        prepare({ title, company, status, type }) {
            const statusEmoji: Record<string, string> = {
                new: '🆕', reviewing: '🔍', accepted: '✅', declined: '❌', hold: '⏸️',
            }
            return {
                title: `${statusEmoji[status] || ''} ${title}`,
                subtitle: `${type || 'Unknown'} · ${company || 'No company'}`,
            }
        },
    },
})
