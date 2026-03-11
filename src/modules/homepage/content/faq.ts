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
            question: "What does Mergex actually do?",
            answer: "Mergex is a unified technology partner. Instead of hiring three different agencies for AI, software development, and content, we provide a single system to build and scale your digital infrastructure. We architect growth, not just code."
        },
        {
            question: "Is this an agency or a production studio?",
            answer: "We are a hybrid. We function like an elite production team but think like strategic partners. We build the systems (software, tools, automation) and the content (AI visuals, brand assets) in one integrated roadmap."
        },
        {
            question: "Do you work with startups or established companies?",
            answer: "Both. Startups use us for speed and building zero-to-one. Established companies use us to modernize operations, add AI capabilities, or simplify a complex vendor ecosystem into one unified partner."
        },
        {
            question: "What's the difference between Labs and Systems?",
            answer: "Labs is our creative intelligence division — focused on AI-powered content, visuals, and brand assets. Systems is our execution and scale division — building software, automating processes, and creating digital infrastructure."
        },
        {
            question: "How is Mergex different from a traditional freelancer?",
            answer: "Freelancers are solo executors; Mergex is a team of specialists with a unified framework. We own the full outcome, ensure all parts of your tech stack talk to each other, and provide long-term continuity that solo contractors cannot."
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
            question: "How long does a typical system or MVP build take?",
            answer: "Core systems and MVPs usually launch in 2-4 weeks. We focus on 'speed-to-value' — building the critical 20% that delivers 80% of the impact first, then iterating based on real user data."
        },
        {
            question: "Can you integrate AI into our existing workflows?",
            answer: "Yes. Most our 'Systems' work involves automating manual processes using AI agents, custom LLM integrations, or intelligent database architectures that move data faster and smarter."
        },
        {
            question: "Do you offer ongoing support after a project ends?",
            answer: "Yes. Many partners move into an 'Ongoing Partnership' model where we continuously optimize, fix bugs, and release new features as your business scales."
        },
        {
            question: "Who owns the code and IP?",
            answer: "You do. Everything we build for you is your intellectual property. We provide clean documentation and technical handovers so you are never 'locked in' to our services."
        },
        {
            question: "What technical stacks do you specialize in?",
            answer: "We are specialists in modern, scalable stacks: Next.js, TypeScript, Supabase, Neon, and various AI frameworks. We choose tools that prioritize developer speed and long-term maintainability."
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
