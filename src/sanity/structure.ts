import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Mergex Studio')
    .items([
      // Content Section
      S.listItem()
        .title('📄 Content')
        .child(
          S.list()
            .title('Content')
            .items([
              S.listItem()
                .title('Blog Posts')
                .schemaType('post')
                .child(S.documentTypeList('post').title('Blog Posts')),
              S.listItem()
                .title('Case Studies')
                .schemaType('caseStudy')
                .child(S.documentTypeList('caseStudy').title('Case Studies')),
              S.listItem()
                .title('Labs Work')
                .schemaType('labWork')
                .child(S.documentTypeList('labWork').title('Labs Work')),
              S.listItem()
                .title('Resources')
                .schemaType('resource')
                .child(S.documentTypeList('resource').title('Resources')),
              S.listItem()
                .title('Testimonials')
                .schemaType('testimonial')
                .child(S.documentTypeList('testimonial').title('Testimonials')),
              S.listItem()
                .title('FAQs')
                .schemaType('faq')
                .child(S.documentTypeList('faq').title('FAQs')),
            ])
        ),

      // Marketing Section
      S.listItem()
        .title('💼 Marketing')
        .child(
          S.list()
            .title('Marketing')
            .items([
              S.listItem()
                .title('Pricing Blocks')
                .schemaType('pricingBlock')
                .child(S.documentTypeList('pricingBlock').title('Pricing Blocks')),
              S.listItem()
                .title('Partner Types')
                .schemaType('partnerType')
                .child(S.documentTypeList('partnerType').title('Partner Types')),
              S.listItem()
                .title('Career Roles')
                .schemaType('careerRole')
                .child(S.documentTypeList('careerRole').title('Career Roles')),
            ])
        ),

      // Operations Section
      S.listItem()
        .title('⚙️ Operations')
        .child(
          S.list()
            .title('Operations')
            .items([
              S.listItem()
                .title('Partners')
                .schemaType('partner')
                .child(S.documentTypeList('partner').title('Partners')),
              S.listItem()
                .title('Referrals')
                .schemaType('referral')
                .child(S.documentTypeList('referral').title('Referrals')),
              S.listItem()
                .title('Leads')
                .schemaType('lead')
                .child(S.documentTypeList('lead').title('Leads')),
            ])
        ),

      // Divider
      S.divider(),

      // Settings or other items can go here
    ])
