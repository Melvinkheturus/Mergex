import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Homepage',
  type: 'document',
  // Make this a singleton

  groups: [
    {
      name: 'hero',
      title: 'Hero Section',
    },
    {
      name: 'coreServices',
      title: 'Core Services Section',
    },
    {
      name: 'whyChooseUs',
      title: 'Why Choose Us Section',
    },
    {
      name: 'featuredCaseStudy',
      title: 'Featured Case Study Section',
    },
    {
      name: 'testimonials',
      title: 'Testimonials Section',
    },
    {
      name: 'callToAction',
      title: 'Call To Action Section',
    },
    {
      name: 'seo',
      title: 'SEO & Metadata',
    },
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'heroBadgeText',
      title: 'Hero Badge Text',
      type: 'string',
      group: 'hero',
      initialValue: "Built for What's Next",
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
      initialValue: 'Where Ideas Merge with Innovation',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      group: 'hero',
      initialValue: "We craft websites, AI tools, and digital strategies that don't just look good, they perform. From concept to launch, we build with precision, creativity, and speed.",
    }),
    defineField({
      name: 'primaryCTAText',
      title: 'Primary CTA Text',
      type: 'string',
      group: 'hero',
      initialValue: 'Start Your Project',
    }),
    defineField({
      name: 'primaryCTALink',
      title: 'Primary CTA Link',
      type: 'string',
      group: 'hero',
      initialValue: '/contact',
    }),
    defineField({
      name: 'secondaryCTAText',
      title: 'Secondary CTA Text',
      type: 'string',
      group: 'hero',
      initialValue: 'View Our Work',
    }),
    defineField({
      name: 'secondaryCTALink',
      title: 'Secondary CTA Link',
      type: 'string',
      group: 'hero',
      initialValue: '/portfolio',
    }),

    // Core Services Section
    defineField({
      name: 'coreServicesTitle',
      title: 'Core Services Title',
      type: 'string',
      group: 'coreServices',
      initialValue: 'Our Core Services',
    }),
    defineField({
      name: 'coreServicesSubtitle',
      title: 'Core Services Subtitle',
      type: 'text',
      group: 'coreServices',
      initialValue: 'Make it crystal-clear what MergeX offers. Give visitors a "menu" of your strengths so they know you\'re a fit for them.',
    }),
    defineField({
      name: 'coreServices',
      title: 'Core Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      group: 'coreServices',
    }),

    // Why Choose Us Section
    defineField({
      name: 'whyChooseUsTitle',
      title: 'Why Choose Us Title',
      type: 'string',
      group: 'whyChooseUs',
      initialValue: 'Why Choose Us',
    }),
    defineField({
      name: 'whyChooseUsFeatures',
      title: 'Features',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'feature' }] }],
      group: 'whyChooseUs',
    }),

    // Featured Case Study Section
    defineField({
      name: 'featuredCaseStudyBadge',
      title: 'Featured Case Study Badge',
      type: 'string',
      group: 'featuredCaseStudy',
      initialValue: 'CASE STUDY',
    }),
    defineField({
      name: 'featuredCaseStudyTitle',
      title: 'Featured Case Study Title',
      type: 'string',
      group: 'featuredCaseStudy',
      initialValue: 'Showcased Project with Before / After Comparison',
    }),
    defineField({
      name: 'featuredCaseStudySubtitle',
      title: 'Featured Case Study Subtitle',
      type: 'text',
      group: 'featuredCaseStudy',
      initialValue: 'Demonstrate proof: social validation plus tangible outcomes. Converts skeptics to buyers.',
    }),
    defineField({
      name: 'featuredCaseStudy',
      title: 'Featured Case Study',
      type: 'reference',
      to: [{ type: 'caseStudy' }],
      group: 'featuredCaseStudy',
    }),

    // Testimonials Section
    defineField({
      name: 'testimonialsTitle',
      title: 'Testimonials Title',
      type: 'string',
      group: 'testimonials',
      initialValue: 'What Our Clients Say',
    }),
    defineField({
      name: 'testimonialsSubtitle',
      title: 'Testimonials Subtitle',
      type: 'text',
      group: 'testimonials',
      initialValue: 'Build trust. Overcome doubts. Let real customers sell for you.',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
      group: 'testimonials',
    }),

    // Call To Action Section
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      group: 'callToAction',
      initialValue: 'Ready to Merge Your Ideas with Real Innovation?',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      group: 'callToAction',
      initialValue: 'Book a free consultation or start your project today—let\'s shape the future together.',
    }),
    defineField({
      name: 'ctaPrimaryButtonText',
      title: 'CTA Primary Button Text',
      type: 'string',
      group: 'callToAction',
      initialValue: 'Start Your Project',
    }),
    defineField({
      name: 'ctaPrimaryButtonLink',
      title: 'CTA Primary Button Link',
      type: 'string',
      group: 'callToAction',
      initialValue: '/contact',
    }),
    defineField({
      name: 'ctaSecondaryButtonText',
      title: 'CTA Secondary Button Text',
      type: 'string',
      group: 'callToAction',
      initialValue: 'View Our Work',
    }),
    defineField({
      name: 'ctaSecondaryButtonLink',
      title: 'CTA Secondary Button Link',
      type: 'string',
      group: 'callToAction',
      initialValue: '/portfolio',
    }),

    // SEO & Metadata
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
      initialValue: 'MergeX - Where Ideas Merge with Innovation',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seo',
      initialValue: 'MergeX crafts websites, AI tools, and digital strategies that don\'t just look good, they perform. From concept to launch, we build with precision, creativity, and speed.',
    }),
    defineField({
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'seo',
      initialValue: ['web development', 'AI tools', 'digital strategy', 'innovation'],
    }),
  ],
  preview: {
    select: {
      title: 'heroTitle',
    },
    prepare({ title }) {
      return {
        title: 'Homepage',
        subtitle: title,
      }
    },
  },
})