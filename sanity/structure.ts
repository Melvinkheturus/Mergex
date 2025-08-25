import { createClient } from '@sanity/client'
import { StructureBuilder } from 'sanity/structure'

import { BsFillGearFill } from 'react-icons/bs'
import { MdOutlineWeb } from 'react-icons/md'
import { FaBlog, FaBriefcase, FaHandshake, FaFileAlt, FaGavel, FaSearch, FaGlobe } from 'react-icons/fa'

import { apiVersion, dataset, projectId } from './env'

// Standard client for normal content fetching
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// Helper function to create a singleton document list item
const singletonListItem = (S: StructureBuilder, schemaType: string, title: string, icon: React.ComponentType) =>
  S.listItem()
    .title(title)
    .icon(icon)
    .child(S.document().schemaType(schemaType).documentId(schemaType))

// Helper function to create a dynamic document type list item
const dynamicListItem = (S: StructureBuilder, schemaType: string, title: string, icon: React.ComponentType) =>
  S.listItem()
    .title(title)
    .icon(icon)
    .child(S.documentTypeList(schemaType).title(title))

import type { StructureResolver, StructureResolverContext } from 'sanity/structure'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      // 1. Pages (Singletons)
      S.listItem()
        .title('Pages')
        .icon(MdOutlineWeb)
        .child(
          S.list()
            .title('Pages')
            .items([
              singletonListItem(S, 'home', 'Home', MdOutlineWeb),
              singletonListItem(S, 'aboutPage', 'About', MdOutlineWeb),
              singletonListItem(S, 'servicePage', 'Service', MdOutlineWeb),
              singletonListItem(S, 'pricing', 'Pricing', MdOutlineWeb),
              singletonListItem(S, 'contact', 'Contact', MdOutlineWeb),
            ])
        ),

      S.divider(),

      // 2. Collections (Dynamic)
      S.listItem()
        .title('Collections')
        .icon(FaFileAlt)
        .child(
          S.list()
            .title('Collections')
            .items([
              dynamicListItem(S, 'faq', 'FAQ', FaFileAlt),
              dynamicListItem(S, 'newsletter', 'Newsletter Subscribers', FaFileAlt),
              dynamicListItem(S, 'service', 'Services', FaFileAlt),
              dynamicListItem(S, 'teamMember', 'Team Member', FaFileAlt),
              dynamicListItem(S, 'testimonial', 'Testimonial', FaFileAlt),
              dynamicListItem(S, 'author', 'Author', FaFileAlt),
            ])
        ),

      S.divider(),

      // 3. Blog
      S.listItem()
        .title('Blog')
        .icon(FaBlog)
        .child(
          S.list()
            .title('Blog')
            .items([
              singletonListItem(S, 'blogPageSettings', 'Blog Overview', FaBlog),
              dynamicListItem(S, 'post', 'Posts', FaBlog),
              dynamicListItem(S, 'postCategory', 'Post Category', FaBlog),
            ])
        ),

      S.divider(),

      // 4. Portfolio
      S.listItem()
        .title('Portfolio')
        .icon(FaBriefcase)
        .child(
          S.list()
            .title('Portfolio')
            .items([
              singletonListItem(S, 'portfolioOverview', 'Portfolio Overview', FaBriefcase),
              dynamicListItem(S, 'project', 'Projects', FaBriefcase),
              dynamicListItem(S, 'projectCategory', 'Project Category', FaBriefcase),
            ])
        ),

      S.divider(),

      // 5. Partner With Us
      S.listItem()
        .title('Partner With Us')
        .icon(FaHandshake)
        .child(
          S.list()
            .title('Partner With Us')
            .items([
              dynamicListItem(S, 'freelance', 'Freelance', FaHandshake),
              dynamicListItem(S, 'affiliate', 'Affiliate', FaHandshake),
              dynamicListItem(S, 'collaboration', 'Collaborations / Brand Partnerships', FaHandshake),
              singletonListItem(S, 'partnerOverview', 'Partner Overview', FaHandshake),
            ])
        ),

      S.divider(),

      // 6. Global Settings
      S.listItem()
        .title('Global Settings')
        .icon(BsFillGearFill)
        .child(
          S.list()
            .title('Global Settings')
            .items([
              S.listItem()
                .title('General')
                .icon(BsFillGearFill)
                .child(
                  S.list()
                    .title('General Settings')
                    .items([
                      singletonListItem(S, 'siteSettings', 'Site Settings', BsFillGearFill),
                      singletonListItem(S, 'navigation', 'Navbar', BsFillGearFill),
                      singletonListItem(S, 'footer', 'Footer', BsFillGearFill),
                    ])
                ),
              S.listItem()
                .title('Legal')
                .icon(FaGavel)
                .child(
                  S.list()
                    .title('Legal Settings')
                    .items([
                      singletonListItem(S, 'cookieDetails', 'Cookies Preference', FaGavel),
                      singletonListItem(S, 'termsOfUse', 'Terms of Use', FaGavel),
                      singletonListItem(S, 'privacyPolicy', 'Privacy Policy', FaGavel),
                    ])
                ),
              S.listItem()
                .title('SEO & Meta')
                .icon(FaSearch)
                .child(
                  S.list()
                    .title('SEO & Meta Settings')
                    .items([
                      singletonListItem(S, 'seoSettings', 'SEO', FaSearch),
                      singletonListItem(S, 'portfolioOverview', 'Portfolio Overview', FaBriefcase),
                      singletonListItem(S, 'faviconMetadata', 'Favicon & Metadata', FaSearch),
                    ])
                ),
              S.listItem()
                .title('Integration & Theme')
                .icon(FaGlobe)
                .child(
                  S.list()
                    .title('Integration & Theme Settings')
                    .items([
                      singletonListItem(S, 'apiIntegrations', 'APIs', FaGlobe),
                      singletonListItem(S, 'themeSettings', 'Theme', FaGlobe),
                    ])
                ),
            ])
        ),
    ])
