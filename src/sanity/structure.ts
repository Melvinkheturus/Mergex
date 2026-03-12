import type { StructureResolver } from 'sanity/structure'

// ── Singleton document IDs ──
const SINGLETON_IDS = {
  siteSettings: 'siteSettings',
  navigation: 'navigation',
  homepage: 'homepage',
  systemsPage: 'systemsPage',
  labsPage: 'labsPage',
  pricingPage: 'pricingPage',
  careersPage: 'careersPage',
  partnerPage: 'partnerPage',
  aboutPage: 'aboutPage',
  productsPage: 'productsPage',
  blogPage: 'blogPage',
  resourcesPage: 'resourcesPage',
}

/**
 * Mergex Studio — Role-Based Sidebar Structure
 *
 * Organized by team function so each role sees only what they need:
 *   🏠 Website Settings   → Founders / Dev team
 *   ✍️ Content Studio     → Content writers / Editors
 *   🎬 Labs Creative      → Creative / Labs team
 *   📣 Marketing          → Marketing team
 *   👥 People & Careers   → HR / People ops
 *   🤝 Partnerships       → BD / Partnership team
 *   📊 Leads & Pipeline   → Sales / Founder
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Mergex Studio')
    .items([

      // ═══════════════════════════════════════
      // 🏠 WEBSITE SETTINGS (Founders / Devs)
      // ═══════════════════════════════════════
      S.listItem()
        .title('🏠 Website Settings')
        .child(
          S.list()
            .title('Website Settings')
            .items([
              // Site Settings singleton
              S.listItem()
                .title('⚙️ Site Settings')
                .id('siteSettings')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId(SINGLETON_IDS.siteSettings)
                    .title('Site Settings')
                ),

              // Navigation singleton
              S.listItem()
                .title('🧭 Navigation')
                .id('navigation')
                .child(
                  S.document()
                    .schemaType('navigation')
                    .documentId(SINGLETON_IDS.navigation)
                    .title('Navigation')
                ),

              S.divider(),

              // Nested "Page Content" list item
              S.listItem()
                .title('📄 Page Content')
                .child(
                  S.list()
                    .title('Page Content')
                    .items([
                      // ── Page Content Singletons ──
                      S.listItem()
                        .title('🏠 Homepage')
                        .id('homepage')
                        .child(
                          S.document()
                            .schemaType('homepage')
                            .documentId(SINGLETON_IDS.homepage)
                            .title('Homepage')
                        ),

                      S.listItem()
                        .title('⚙️ Systems Page')
                        .id('systemsPage')
                        .child(
                          S.document()
                            .schemaType('systemsPage')
                            .documentId(SINGLETON_IDS.systemsPage)
                            .title('Systems Page')
                        ),

                      S.listItem()
                        .title('🧪 Labs Page')
                        .id('labsPage')
                        .child(
                          S.document()
                            .schemaType('labsPage')
                            .documentId(SINGLETON_IDS.labsPage)
                            .title('Labs Page')
                        ),

                      S.listItem()
                        .title('💰 Pricing Page')
                        .id('pricingPage')
                        .child(
                          S.document()
                            .schemaType('pricingPage')
                            .documentId(SINGLETON_IDS.pricingPage)
                            .title('Pricing Page')
                        ),

                      S.listItem()
                        .title('👥 Careers Page')
                        .id('careersPage')
                        .child(
                          S.document()
                            .schemaType('careersPage')
                            .documentId(SINGLETON_IDS.careersPage)
                            .title('Careers Page')
                        ),

                      S.listItem()
                        .title('🤝 Partner Page')
                        .id('partnerPage')
                        .child(
                          S.document()
                            .schemaType('partnerPage')
                            .documentId(SINGLETON_IDS.partnerPage)
                            .title('Partner Page')
                        ),

                      S.listItem()
                        .title('ℹ️ About Page')
                        .id('aboutPage')
                        .child(
                          S.document()
                            .schemaType('aboutPage')
                            .documentId(SINGLETON_IDS.aboutPage)
                            .title('About Page')
                        ),

                      S.listItem()
                        .title('📦 Products Page')
                        .id('productsPage')
                        .child(
                          S.document()
                            .schemaType('productsPage')
                            .documentId(SINGLETON_IDS.productsPage)
                            .title('Products Page')
                        ),

                      S.listItem()
                        .title('📝 Blog Page')
                        .id('blogPage')
                        .child(
                          S.document()
                            .schemaType('blogPage')
                            .documentId(SINGLETON_IDS.blogPage)
                            .title('Blog Page')
                        ),

                      S.listItem()
                        .title('📚 Resources Page')
                        .id('resourcesPage')
                        .child(
                          S.document()
                            .schemaType('resourcesPage')
                            .documentId(SINGLETON_IDS.resourcesPage)
                            .title('Resources Page')
                        ),
                    ])
                ),
            ])
        ),

      S.divider(),

      // ═══════════════════════════════════════
      // ✍️ CONTENT STUDIO (Content Team)
      // ═══════════════════════════════════════
      S.listItem()
        .title('✍️ Content Studio')
        .child(
          S.list()
            .title('Content Studio')
            .items([
              // Blog Posts with status filters
              S.listItem()
                .title('📝 Blog Posts')
                .schemaType('post')
                .child(
                  S.list()
                    .title('Blog Posts')
                    .items([
                      S.listItem()
                        .title('All Posts')
                        .schemaType('post')
                        .child(
                          S.documentTypeList('post')
                            .title('All Blog Posts')
                            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                        ),
                      S.listItem()
                        .title('✅ Published')
                        .schemaType('post')
                        .child(
                          S.documentList()
                            .title('Published Posts')
                            .schemaType('post')
                            .filter('_type == "post" && status == "published"')
                            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                        ),
                      S.listItem()
                        .title('👀 In Review')
                        .schemaType('post')
                        .child(
                          S.documentList()
                            .title('Posts In Review')
                            .schemaType('post')
                            .filter('_type == "post" && status == "review"')
                        ),
                      S.listItem()
                        .title('📝 Drafts')
                        .schemaType('post')
                        .child(
                          S.documentList()
                            .title('Draft Posts')
                            .schemaType('post')
                            .filter('_type == "post" && status == "draft"')
                        ),
                    ])
                ),

              // Case Studies with division filter
              S.listItem()
                .title('💼 Case Studies')
                .schemaType('caseStudy')
                .child(
                  S.list()
                    .title('Case Studies')
                    .items([
                      S.listItem()
                        .title('All Case Studies')
                        .schemaType('caseStudy')
                        .child(
                          S.documentTypeList('caseStudy').title('All Case Studies')
                        ),
                      S.listItem()
                        .title('💻 Software Division')
                        .child(
                          S.documentList()
                            .title('Software Case Studies')
                            .schemaType('caseStudy')
                            .filter('_type == "caseStudy" && division == "software"')
                        ),
                      S.listItem()
                        .title('🧪 Labs Division')
                        .child(
                          S.documentList()
                            .title('Labs Case Studies')
                            .schemaType('caseStudy')
                            .filter('_type == "caseStudy" && division == "labs"')
                        ),
                      S.listItem()
                        .title('⚙️ Systems Division')
                        .child(
                          S.documentList()
                            .title('Systems Case Studies')
                            .schemaType('caseStudy')
                            .filter('_type == "caseStudy" && division == "systems"')
                        ),
                    ])
                ),

              // Resources
              S.listItem()
                .title('📚 Resources')
                .schemaType('resource')
                .child(S.documentTypeList('resource').title('Resources')),

              S.divider(),

              // Authors
              S.listItem()
                .title('👤 Authors')
                .schemaType('author')
                .child(S.documentTypeList('author').title('Authors')),

              // Categories (taxonomy)
              S.listItem()
                .title('🏷️ Categories')
                .schemaType('category')
                .child(S.documentTypeList('category').title('Categories')),
            ])
        ),

      // ═══════════════════════════════════════
      // 🎬 LABS CREATIVE (Creative Team)
      // ═══════════════════════════════════════
      S.listItem()
        .title('🎬 Labs Creative')
        .child(
          S.list()
            .title('Labs Creative')
            .items([
              S.listItem()
                .title('All Lab Work')
                .schemaType('labWork')
                .child(
                  S.documentTypeList('labWork')
                    .title('All Lab Work')
                    .defaultOrdering([{ field: 'displayOrder', direction: 'asc' }])
                ),
              S.divider(),
              S.listItem()
                .title('🧪 Experiments')
                .child(
                  S.documentList()
                    .title('Experiments')
                    .schemaType('labWork')
                    .filter('_type == "labWork" && category == "experiment"')
                ),
              S.listItem()
                .title('🎬 Content')
                .child(
                  S.documentList()
                    .title('Content Pieces')
                    .schemaType('labWork')
                    .filter('_type == "labWork" && category == "content"')
                ),
              S.listItem()
                .title('📢 Campaigns')
                .child(
                  S.documentList()
                    .title('Campaigns')
                    .schemaType('labWork')
                    .filter('_type == "labWork" && category == "campaign"')
                ),
              S.listItem()
                .title('🚀 Products')
                .child(
                  S.documentList()
                    .title('Products')
                    .schemaType('labWork')
                    .filter('_type == "labWork" && category == "product"')
                ),
            ])
        ),

      S.divider(),

      // ═══════════════════════════════════════
      // 📣 MARKETING & SOCIAL PROOF
      // ═══════════════════════════════════════
      S.listItem()
        .title('📣 Marketing')
        .child(
          S.list()
            .title('Marketing & Social Proof')
            .items([
              S.listItem()
                .title('💰 Pricing Blocks')
                .schemaType('pricingBlock')
                .child(
                  S.documentTypeList('pricingBlock')
                    .title('Pricing Blocks')
                    .defaultOrdering([{ field: 'position', direction: 'asc' }])
                ),
              S.listItem()
                .title('💬 Testimonials')
                .schemaType('testimonial')
                .child(
                  S.list()
                    .title('Testimonials')
                    .items([
                      S.listItem()
                        .title('All Testimonials')
                        .schemaType('testimonial')
                        .child(
                          S.documentTypeList('testimonial')
                            .title('All Testimonials')
                            .defaultOrdering([{ field: 'displayOrder', direction: 'asc' }])
                        ),
                      S.listItem()
                        .title('⭐ Featured Only')
                        .child(
                          S.documentList()
                            .title('Featured Testimonials')
                            .schemaType('testimonial')
                            .filter('_type == "testimonial" && featured == true')
                        ),
                      S.listItem()
                        .title('🔴 Hidden')
                        .child(
                          S.documentList()
                            .title('Hidden Testimonials')
                            .schemaType('testimonial')
                            .filter('_type == "testimonial" && visible != true')
                        ),
                    ])
                ),
              S.listItem()
                .title('❓ FAQs')
                .schemaType('faq')
                .child(
                  S.list()
                    .title('FAQs')
                    .items([
                      S.listItem()
                        .title('All FAQs')
                        .schemaType('faq')
                        .child(
                          S.documentTypeList('faq')
                            .title('All FAQs')
                            .defaultOrdering([{ field: 'displayOrder', direction: 'asc' }])
                        ),
                      S.listItem()
                        .title('🏠 Homepage FAQs')
                        .child(
                          S.documentList()
                            .title('Homepage FAQs')
                            .schemaType('faq')
                            .filter('_type == "faq" && "parent" in pageContext')
                        ),
                      S.listItem()
                        .title('💰 Pricing FAQs')
                        .child(
                          S.documentList()
                            .title('Pricing FAQs')
                            .schemaType('faq')
                            .filter('_type == "faq" && "pricing" in pageContext')
                        ),
                      S.listItem()
                        .title('🤝 Partner FAQs')
                        .child(
                          S.documentList()
                            .title('Partner FAQs')
                            .schemaType('faq')
                            .filter('_type == "faq" && "partner" in pageContext')
                        ),
                    ])
                ),
              S.divider(),
              S.listItem()
                .title('📢 Announcements')
                .schemaType('announcement')
                .child(
                  S.list()
                    .title('Announcements')
                    .items([
                      S.listItem()
                        .title('All Announcements')
                        .schemaType('announcement')
                        .child(S.documentTypeList('announcement').title('All Announcements')),
                      S.listItem()
                        .title('🟢 Active')
                        .child(
                          S.documentList()
                            .title('Active Announcements')
                            .schemaType('announcement')
                            .filter('_type == "announcement" && active == true')
                        ),
                    ])
                ),
            ])
        ),

      // ═══════════════════════════════════════
      // 👥 PEOPLE & CAREERS (HR Team)
      // ═══════════════════════════════════════
      S.listItem()
        .title('👥 People & Careers')
        .child(
          S.list()
            .title('People & Careers')
            .items([
              S.listItem()
                .title('🟢 Open Roles')
                .child(
                  S.documentList()
                    .title('Open Roles')
                    .schemaType('careerRole')
                    .filter('_type == "careerRole" && status == "open"')
                ),
              S.listItem()
                .title('🟡 On Hold')
                .child(
                  S.documentList()
                    .title('Roles On Hold')
                    .schemaType('careerRole')
                    .filter('_type == "careerRole" && status == "hold"')
                ),
              S.listItem()
                .title('🔴 Closed')
                .child(
                  S.documentList()
                    .title('Closed Roles')
                    .schemaType('careerRole')
                    .filter('_type == "careerRole" && status == "closed"')
                ),
              S.listItem()
                .title('All Roles')
                .schemaType('careerRole')
                .child(S.documentTypeList('careerRole').title('All Career Roles')),
              S.divider(),
              S.listItem()
                .title('👤 Team Authors')
                .schemaType('author')
                .child(S.documentTypeList('author').title('Team Authors')),
            ])
        ),

      S.divider(),

      // ═══════════════════════════════════════
      // 🤝 PARTNERSHIPS (BD Team)
      // ═══════════════════════════════════════
      S.listItem()
        .title('🤝 Partnerships')
        .child(
          S.list()
            .title('Partnerships')
            .items([
              S.listItem()
                .title('📋 Partner Types')
                .schemaType('partnerType')
                .child(S.documentTypeList('partnerType').title('Partner Types')),
              S.divider(),
              S.listItem()
                .title('📩 Applications')
                .schemaType('partner')
                .child(
                  S.list()
                    .title('Partner Applications')
                    .items([
                      S.listItem()
                        .title('🆕 New')
                        .child(
                          S.documentList()
                            .title('New Applications')
                            .schemaType('partner')
                            .filter('_type == "partner" && status == "new"')
                        ),
                      S.listItem()
                        .title('🔍 Reviewing')
                        .child(
                          S.documentList()
                            .title('Under Review')
                            .schemaType('partner')
                            .filter('_type == "partner" && status == "reviewing"')
                        ),
                      S.listItem()
                        .title('✅ Accepted')
                        .child(
                          S.documentList()
                            .title('Accepted Partners')
                            .schemaType('partner')
                            .filter('_type == "partner" && status == "accepted"')
                        ),
                      S.listItem()
                        .title('All Applications')
                        .schemaType('partner')
                        .child(S.documentTypeList('partner').title('All Applications')),
                    ])
                ),
              S.listItem()
                .title('🔗 Referrals')
                .schemaType('referral')
                .child(
                  S.list()
                    .title('Referral Submissions')
                    .items([
                      S.listItem()
                        .title('⏳ Pending')
                        .child(
                          S.documentList()
                            .title('Pending Referrals')
                            .schemaType('referral')
                            .filter('_type == "referral" && status == "pending"')
                        ),
                      S.listItem()
                        .title('🎉 Converted')
                        .child(
                          S.documentList()
                            .title('Converted Referrals')
                            .schemaType('referral')
                            .filter('_type == "referral" && status == "converted"')
                        ),
                      S.listItem()
                        .title('All Referrals')
                        .schemaType('referral')
                        .child(S.documentTypeList('referral').title('All Referrals')),
                    ])
                ),
            ])
        ),

      // ═══════════════════════════════════════
      // 📊 LEADS & PIPELINE (Sales)
      // ═══════════════════════════════════════
      S.listItem()
        .title('📊 Leads & Pipeline')
        .child(
          S.list()
            .title('Leads & Pipeline')
            .items([
              S.listItem()
                .title('🆕 New Leads')
                .child(
                  S.documentList()
                    .title('New Leads')
                    .schemaType('lead')
                    .filter('_type == "lead" && status == "new"')
                ),
              S.listItem()
                .title('📞 In Progress')
                .child(
                  S.documentList()
                    .title('In Progress')
                    .schemaType('lead')
                    .filter('_type == "lead" && status in ["contacted", "qualified", "proposal"]')
                ),
              S.listItem()
                .title('🎉 Won')
                .child(
                  S.documentList()
                    .title('Won Deals')
                    .schemaType('lead')
                    .filter('_type == "lead" && status == "won"')
                ),
              S.listItem()
                .title('❌ Lost')
                .child(
                  S.documentList()
                    .title('Lost Leads')
                    .schemaType('lead')
                    .filter('_type == "lead" && status == "lost"')
                ),
              S.divider(),
              S.listItem()
                .title('📋 All Leads')
                .schemaType('lead')
                .child(S.documentTypeList('lead').title('All Leads')),
            ])
        ),
    ])
