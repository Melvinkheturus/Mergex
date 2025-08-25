import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'feature',
  title: 'Feature',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name from Tabler Icons (e.g., "IconTerminal2", "IconEaseInOut")',
      options: {
        list: [
          { title: 'Terminal', value: 'IconTerminal2' },
          { title: 'Ease In Out', value: 'IconEaseInOut' },
          { title: 'Currency Dollar', value: 'IconCurrencyDollar' },
          { title: 'Cloud', value: 'IconCloud' },
          { title: 'Route Alt Left', value: 'IconRouteAltLeft' },
          { title: 'Help', value: 'IconHelp' },
          { title: 'Adjustments Bolt', value: 'IconAdjustmentsBolt' },
          { title: 'Heart', value: 'IconHeart' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})