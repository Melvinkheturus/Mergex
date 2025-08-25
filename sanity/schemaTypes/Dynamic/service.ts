import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
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
      description: 'Icon name from Lucide Icons (e.g., "Globe", "Lightbulb", "TrendingUp")',
      options: {
        list: [
          { title: 'Globe', value: 'Globe' },
          { title: 'Lightbulb', value: 'Lightbulb' },
          { title: 'TrendingUp', value: 'TrendingUp' },
          { title: 'Code', value: 'Code' },
          { title: 'BarChart', value: 'BarChart' },
          { title: 'Zap', value: 'Zap' },
          { title: 'Search', value: 'Search' },
          { title: 'Shield', value: 'Shield' },
          { title: 'Star', value: 'Star' },
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