// Parent FAQ - Orientation (High-level, Conceptual, Non-commercial)
export const PARENT_FAQ_DATA = {
    headline: "Start With What Matters.",
    subheadline: "",
    subheadlineItalic: "",
    description: "Start here. These answers will help you understand how Mergex works and where you might fit.",
    ctaText: "Need something more specific?",
    ctaSubtext: "Let’s have a quick conversation.",
    buttonText: "Start a Conversation",
    email: "hello@mergex.in",
    microcopy: "We typically respond within 24 hours.",

    questions: [
        {
            question: "What is Mergex?",
            answer: "Mergex builds the systems behind modern businesses. Instead of hiring separate agencies for development, AI, automation, and marketing, companies work with Mergex to build one unified system designed to scale. Mergex integrates software, workflow automation, AI, and growth infrastructure into a single operational foundation. The company currently operates through two active divisions — Mergex Systems and Mergex Labs.",
            chatPrompt: "What are you trying to build? I'll help you see how a unified system might work for you."
        },
        {
            question: "How is Mergex different from a typical agency?",
            answer: "Most agencies deliver isolated services — one for development, one for marketing, another for AI. Mergex takes a systems approach. Rather than handing over individual deliverables, Mergex designs the entire operational foundation behind a business: software, automation, AI, and growth working as one. The result is fewer vendors, faster execution, and a system built for long-term scale — not short-term output.",
            chatPrompt: "Are you looking to replace multiple vendors with one team? Tell me about your current setup."
        },
        {
            question: "What kinds of businesses work with Mergex?",
            answer: "Mergex works with founders, startups, and scaling businesses ready to replace fragmented tools and vendors with one structured system. Typical clients are launching new products, implementing AI and automation, or building scalable digital infrastructure. Mergex is especially valuable for teams that want to move faster without managing five different vendors.",
            chatPrompt: "What stage is your business at? I'll share how we've helped similar teams."
        },
        {
            question: "What do Mergex Systems and Mergex Labs do?",
            answer: "Mergex operates through two divisions. Mergex Systems builds the operational infrastructure of a business — software platforms, workflow automation, AI integrations, and digital systems. Mergex Labs produces AI-driven creative output such as ads, visual assets, video content, and digital media. Together, they cover both the infrastructure and creative layers of a modern business under one system.",
            chatPrompt: "Are you more interested in the infrastructure or the creative layer? Let's discuss your priorities."
        },
        {
            question: "How do I start working with Mergex?",
            answer: "Every engagement starts with a conversation. Mergex first understands your current systems, workflows, and the gaps holding you back. From there, the team recommends the clearest path forward — no pressure, no pitch. You can reach the team at hello@mergex.in or book a call directly through the website.",
            chatPrompt: "Ready to start a conversation? What’s the biggest gap in your current workflow?"
        }
    ],

    aiSuggestions: [
        "Explain the Mergex methodology",
        "Should I start with Labs or Systems?",
        "How do you handle project handovers?",
        "What industries do you specialize in?"
    ]
};

// Systems FAQ - Objection-Handling (Practical, Decision-oriented, Risk-reducing)
export const SYSTEMS_FAQ_DATA = {
    headline: "Questions Teams Usually Ask",
    subheadline: "Before Choosing a",
    subheadlineItalic: "Solution Partner",
    description: "Practical answers about how we work, what to expect, and how to move forward with confidence.",
    ctaText: "Still have questions?",
    ctaSubtext: "Book a discovery call and let's talk specifics.",
    buttonText: "Book a Call",
    email: "hello@mergex.in",
    microcopy: "We typically respond within 24 hours.",

    questions: [
        {
            question: "What is Mergex Systems?",
            answer: "Mergex Systems is the division that builds the operational infrastructure behind a business. This covers custom software platforms, workflow automation, AI integrations, and the digital systems that help companies operate efficiently and scale without adding complexity.",
            chatPrompt: "Tell me about your business. I'll explain how our systems division can support you."
        },
        {
            question: "What types of systems does Mergex build?",
            answer: "Mergex builds a wide range of business systems — including custom web platforms and applications, workflow automation, AI integrations and pipelines, internal business tools, and scalable digital infrastructure. Every system is designed specifically around the needs and growth stage of the business.",
            chatPrompt: "What kind of system do you have in mind? I'll show you what's possible."
        },
        {
            question: "Can Mergex replace multiple vendors or agencies?",
            answer: "Yes. Many companies work with separate vendors for development, automation, AI, marketing, and media — creating coordination problems and slow execution. Mergex replaces that fragmented ecosystem with one unified system and a single team responsible for the full infrastructure. One system. Zero friction.",
            chatPrompt: "Which vendors are currently slowing you down? Let's talk about simplifying."
        },
        {
            question: "Do you build custom software or use existing tools?",
            answer: "Both. Mergex builds custom software when a business needs a unique platform or application. In other cases, the team integrates existing tools — including automation platforms like n8n, Make, and Zapier — to create efficient, scalable workflows. The goal is always to build the simplest system that scales, not the most complex one.",
            chatPrompt: "Do you have a specific tech stack or tool in mind? I'll help you decide between custom vs. off-the-shelf."
        },
        {
            question: "How long does a typical system build take?",
            answer: "Core systems and MVPs typically launch within two to four weeks. Mergex works in focused sprints — delivering the critical foundation first, then iterating based on real usage. Larger infrastructure projects are scoped accordingly, with clear milestones at every phase.",
            chatPrompt: "What's your timeline? I'll help you map out a 4-week MVP roadmap."
        },
        {
            question: "Do you integrate AI and automation into the systems?",
            answer: "Yes. AI and automation are core to every system Mergex builds. This includes AI workflow integrations, intelligent automation pipelines, and AI-powered internal tools designed to reduce manual work and let teams focus on growth. Automation is not an add-on — it is part of the foundation.",
            chatPrompt: "What manual tasks take up most of your team's time? Let's automate them."
        },
        {
            question: "Do you provide ongoing support after the system is built?",
            answer: "Yes. Many clients continue working with Mergex after the initial build. Ongoing support includes system improvements, automation upgrades, AI integration updates, and infrastructure scaling as the business grows. The goal is to be a long-term systems partner, not a one-time vendor.",
            chatPrompt: "Are you looking for a long-term partner or a one-time build? Tell me about your vision."
        }
    ],

    aiSuggestions: [
        "Can you build a custom CRM?",
        "How do you handle data security?",
        "What is your process for AI integration?",
        "Do you provide technical documentation?"
    ]
};


// Legacy export for backward compatibility (default to Systems FAQ)
export const FAQ_DATA = SYSTEMS_FAQ_DATA;
