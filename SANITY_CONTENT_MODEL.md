# Sanity CMS Content Model Documentation

## Overview

This document explains the content models in the Mergex Sanity Studio and how to use them effectively.

## Content Philosophy

> **Sanity manages *what you say*, not *how the site looks*.**

- Layouts and navigation remain code-controlled for design consistency
- Content fills predefined, well-designed templates
- Editors write content, not design pages

---

## Core Content Types

### 📝 Blog Post (`post`)

**Purpose**: Articles, thought leadership, and educational content

**Key Fields**:
- Title, slug, publish date
- Rich text body with images
- Categories (Software, Labs, Systems, Media, Academy)
- Tags for organization
- Author information
- SEO metadata

**Usage Pattern**:
- Create posts in Studio
- Featured posts appear on homepage
- Categorize by division for filtering
- Add SEO fields for better discoverability

---

### 💼 Case Study (`caseStudy`)

**Purpose**: Client success stories and project showcases

**Key Fields**:
- Client name & industry
- Problem → Approach → Outcome structure
- Division (Software/Labs/Systems)
- Timeline and metrics
- Gallery of project images

**Reuse Pattern**:
One case study can appear:
- As preview on homepage
- Full page on /case-studies
- Referenced on pricing page
- Linked from blog posts

---

### 🧪 Labs Work (`labWork`)

**Purpose**: Experiments, reels, and creative work from Labs

**Key Fields**:
- Title and short description
- Media type (video/image/external link)
- Category (experiment/content/campaign)
- Display order for manual sorting

**Best Practice**:
- Use display order (0-100) for featured carousel
- Keep descriptions under 150 characters
- Upload high-quality thumbnails

---

### 📚 Resource (`resource`)

**Purpose**: Downloadable guides, templates, and tools

**Key Fields**:
- Resource type (guide/template/PDF)
- File upload or external URL
- Preview content (shown before download)
- Gating toggle (for email capture)

**Future-Proofing**:
- Start ungated, enable gating later
- Link related resources
- Version control through publishing workflow

---

### 💬 Testimonial (`testimonial`)

**Purpose**: Social proof from clients

**Key Fields**:
- Quote and author details
- Division context (where to show)
- Display order
- Visibility toggle

**Usage**:
- Filter by division: `divisionContext`
- Show only visible testimonials
- Order by `displayOrder` field

---

### ❓ FAQ (`faq`)

**Purpose**: Frequently asked questions

**Key Fields**:
- Question and rich text answer
- Page context (which pages to show on)
- Category for grouping
- Display order

**Smart Feature**:
Use page context to show relevant FAQs:
- Homepage: `parent`
- Pricing: `pricing`
- Partner page: `partner`
- All pages: `all`

---

## Marketing Content Types

### 💰 Pricing Block (`pricingBlock`)

**What It Stores**: Tier descriptions, NOT actual prices

**Key Fields**:
- Tier name and description
- Engagement model explanation
- Feature highlights (bullet points)
- "Ideal for" description

**Why This Way**:
- Prices change → update code/config
- Positioning changes → update CMS
- Clean separation of concerns

---

### 🤝 Partner Type (`partnerType`)

**Purpose**: Partnership offerings (Strategic/Referral)

**Key Fields**:
- Type name and description
- Benefits and requirements lists
- Application process
- CTA text

**Current Setup**:
- Strategic Partners: agencies, brands, companies
- Referral Partners: individuals driving growth

---

### 👔 Career Role (`careerRole`)

**Purpose**: Job postings and internships

**Key Fields**:
- Role title, type, division
- Responsibilities and requirements
- Application instructions
- Status (open/closed)

**Workflow**:
- Status = "open" → shows on careers page
- Link to external form (Notion/Tally)
- Close when filled

---

## Operational Content Types (Phase 1)

### Partners, Referrals, Leads

**Purpose**: Simple tracking for early-stage operations

**Key Pattern**:
- Manual status updates (enums)
- Internal notes field
- Basic metadata

**Migration Path**:
When volume increases → move to Supabase
Schema designed for easy export

---

## Editor Best Practices

### 1. Use Drafts
- Save draft while working
- Publish when ready
- Unpublish to hide content

### 2. SEO Fields
- Meta title: 50-60 characters
- Meta description: 150-160 characters
- Always add alt text to images

### 3. Content Reuse
- Link related content
- Tag consistently
- Use references, not duplication

### 4. Image Guidelines
- Upload high-res originals
- Use hotspot for cropping control
- Add descriptive alt text

---

## Future Migration Notes

When moving operations to Supabase:

1. Export partner/referral/lead data
2. Keep content types in Sanity
3. Update forms to submit to Supabase
4. Archive operational schemas

**Content stays in Sanity forever.**
**Operations move when automation is needed.**

---

## Getting Help

Questions about:
- **Content structure**: Check this doc
- **Technical issues**: Contact dev team
- **Content strategy**: Review with marketing

---

## Technical Implementation Notes

### Configuration

The Mergex Sanity integration uses the following architecture:

- **Studio**: Mounted at `/studio` route
- **API Version**: `2026-01-29` (pinned for stability)
- **Image CDN**: `cdn.sanity.io` (configured in `next.config.ts`)

### Query System

All content fetching uses the centralized query system in `@/sanity/lib/queries`:

```typescript
import { fetchWithFallback, getHomepage, getAllPosts } from '@/sanity/lib/queries';
```

For custom queries, use `fetchWithFallback` with your GROQ query:

```typescript
const content = await fetchWithFallback<MyType>(
  `*[_type == "myType"][0]`,
  fallbackData,
  'myTypeLabel'
);
```

### Type Safety

All Sanity types are defined in `@/sanity/lib/types.ts`. Import them for type-safe queries:

```typescript
import type { Post, CaseStudy, Testimonial } from '@/sanity/lib/types';
```

### Fallback Pattern

Every query supports automatic fallback to hardcoded content:

```typescript
const posts = await fetchWithFallback(
  POSTS_QUERY,
  [{ title: "Fallback Post", slug: { current: "fallback" } }], // fallback data
  'posts'
);
```

This ensures 100% uptime even if Sanity is unavailable.

### Live Preview

The `<SanityLive />` component is mounted in `layout.tsx` for real-time preview in Studio.

### Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-29
```

---

### Known Limitations

1. **No Draft Mode in Production**: Currently, live preview only works in Studio. Public site shows published content only.
2. **CDN Caching**: Images are served through Sanity CDN. Allow up to 5 minutes for cache invalidation.

Last updated: March 2026
