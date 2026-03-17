# Mergex Insights & Intelligence Page

**File:** `docs/insights-page.md`  
**Last Updated:** March 2026  
**Status:** Live

---

## Philosophy

The Insights page is not a blog. It is a **public intelligence layer** - a knowledge interface designed for two audiences simultaneously: human readers and LLM crawlers (ChatGPT, Gemini, Perplexity).

> "Written for humans. Structured for machines."

The goal is **intellectual authority**, not traffic or SEO.

---

## Page Structure

```
/blog

Hero                   ← InsightsHero
  Eyebrow: Mergex Intelligence
  H1: Ideas Behind Engineered Scale
  Category filter pills (All / Systems / AI / Automation / Creative / Scaling)

Featured Thinking      ← FeaturedThinking
  3 cornerstone insight cards

All Insights Grid      ← InsightGrid
  Format tabs (All / Frameworks / Case Insights / Experiments / Strategic Notes)
  Falls back to placeholder content when Sanity has no posts

Quick Takes            ← QuickTakes
  6 expandable bold one-liner ideas

Ask Mergex             ← AskMergex
  AI chat powered by Groq (Llama 3 70B) + Sanity context (RAG)

CTA                    ← InsightsCTA
  "Start a Conversation" → /contact
```

---

## 4 Insight Formats

| Format | Sanity Value | Purpose | Badge Color |
|---|---|---|---|
| Framework | `framework` | Evergreen "how we think" pieces | Purple |
| Case Insight | `case-insight` | Tactical lessons from real work | Orange |
| Experiment | `experiment` | Lab results, A/B tests, data | Green |
| Strategic Note | `strategic-note` | Bold opinion/take | Blue |

---

## Sanity Schema Fields

Each `post` document now supports these insight-specific fields:

| Field | Type | Purpose |
|---|---|---|
| `insightFormat` | string enum | Determines display category |
| `tldr` | string (max 160) | One-line summary for LLMs + quick scanning |
| `keyTakeaway` | text | Single most important lesson |
| `keyConcepts` | string[] | Concept tags for LLM indexing |
| `relatedTopics` | string[] | Knowledge graph connections |
| `categories` | string[] | Topic cluster: systems, ai, automation, creative, scaling |

---

## AI Chat Architecture (Ask Mergex)

```
User message
    ↓
POST /api/chat
    ↓
Fetch 4 recent Sanity posts (title, tldr, excerpt, keyTakeaway)
    ↓
Build prompt: System + Sanity context + User question
    ↓
Groq API → llama3-70b-8192 (free tier)
    ↓
Return answer to chat UI
```

**Environment Variables:**
```env
GROQ_API_KEY=gsk_...          # Required for AI chat
NEXT_PUBLIC_SANITY_PROJECT_ID= # Already set
NEXT_PUBLIC_SANITY_DATASET=    # Already set
```

**Groq Model:** `llama3-70b-8192` - fast, free tier, excellent reasoning  
**Max tokens:** 600 per response  
**Temperature:** 0.65 (balanced creativity + accuracy)

---

## Individual Post Page

**Route:** `/blog/[slug]`

**Layout:**
- Left (2/3): PortableText body (H2, H3, blockquote, code, links)
- Right sidebar (1/3): LLM-friendly structured sections
  - Key Takeaway (violet highlight box)
  - Key Concepts (tag pills)
  - Related Topics (arrow list)
  - Tags

**Footer CTA:** "If this idea resonates, let's discuss it." → /contact

---

## Writing Guide - LLM-Optimized Format

Every insight should follow this structure in Sanity:

```
Title
TL;DR (1 sentence, max 160 chars)
Excerpt (2–3 sentences for previews)
Body:
  → Core idea (1–2 paragraphs)
  → Framework or steps
  → Real example or data point
  → Key lesson
Key Takeaway (1–2 sentences)
Key Concepts (3–6 tags)
Related Topics (2–4 related ideas)
```

This structure helps LLMs understand your content without reading the entire body.

---

## Content Clusters (Categories)

| Category | Value | Description |
|---|---|---|
| Systems | `systems` | Business OS, architecture, processes |
| AI | `ai` | Generative AI, workflows, tools |
| Automation | `automation` | When/how to automate |
| Creative | `creative` | AI content, brand, media |
| Scaling | `scaling` | 0→1→N growth, leverage |
| Software | `software` | Technical builds, SaaS |
| Labs | `labs` | Experiments from Mergex Labs |
| Media | `media` | Video, film, productions |

---

## Module Files

```
src/
├── app/
│   ├── blog/
│   │   ├── page.tsx               ← Server component, fetches Sanity
│   │   ├── InsightsPageClient.tsx ← Client shell (state for category filter)
│   │   └── [slug]/
│   │       └── page.tsx           ← Individual post reader
│   └── api/
│       └── chat/
│           └── route.ts           ← Groq + Sanity RAG endpoint
└── modules/
    └── insights/
        ├── index.ts
        ├── content/
        │   └── insights.ts        ← All static copy + placeholder posts
        └── components/
            ├── InsightsHero.tsx
            ├── FeaturedThinking.tsx
            ├── InsightGrid.tsx
            ├── InsightCard.tsx
            ├── QuickTakes.tsx
            ├── AskMergex.tsx
            └── InsightsCTA.tsx
```

---

## Future Upgrades

### Phase 2 - Vector Search
Replace Sanity keyword fetch with **Supabase Vector** or **Pinecone** embeddings for semantic search in the chat context.

### Phase 3 - Knowledge Graph
Replace category tags with visual idea connections (e.g., "AI Avatars → Digital Identity → Marketing Systems"). Build as a D3.js or React Flow visualization.

### Phase 4 - "Ask Mergex" Mode
Add a toggle on the page: **Read Insights | Ask Mergex** - full-width chat interface as an alternative to browsing.

### Phase 5 - Newsletter Integration
"Notify me" in Quick Takes connects to an email capture → notified when the full insight publishes.

---

## First 5 Insights to Write

1. **The Architecture of Engineered Scale** (Framework / Systems)
2. **The Business DNA Audit Framework** (Framework / Systems)
3. **What We Learned Building an AI Ad System** (Case Insight / AI)
4. **AI Avatars vs Human Influencers** (Experiment / AI, Creative)
5. **Agencies Are Dying. Systems Are Winning.** (Strategic Note / Scaling)
