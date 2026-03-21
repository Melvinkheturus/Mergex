import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q") || "";

    if (!query) {
        return NextResponse.json({ error: "Missing query" }, { status: 400 });
    }

    const lowerQuery = query.toLowerCase();
    let summary = "Exploring the landscape of your search reveals significant opportunities for growth and optimization. Our data indicates that implementing structured systems around this topic can reduce operational friction by up to 30%.";
    let keyPoints = [
        "Leveraging digital infrastructure is no longer optional; it's a core competitive advantage.",
        "Intentional design choices lead to higher user retention and long-term brand equity.",
        "Scalability must be built into the foundation layer to avoid technical debt during growth spurts."
    ];
    let intent = "general";
    let cta = { label: "Explore Systems", link: "/systems" };

    if (lowerQuery.includes("automation")) {
        summary = "Automation is the single greatest lever for scaling business operations without linear cost increases. By offloading repetitive cognitive tasks to intelligent systems, teams can refocus on high-value creative and strategic work.";
        keyPoints = [
            "Process-First Automation: Map your manual workflows before applying technology.",
            "Cognitive Offloading: Use AI to handle data synthesis and boilerplate decision making.",
            "Feedback Loops: Implement real-time monitoring to ensure automated steps stay accurate."
        ];
        intent = "automation";
    } else if (lowerQuery.includes("design")) {
        summary = "Design at Mergex isn't just about aesthetics; it's about building trust through functional excellence. A polished unit of design serves as proof of quality and attention to detail, directly influencing user behavior.";
        keyPoints = [
            "First Principles: Start with the user's primary goal and build outward.",
            "Consistency: A unified design language reduces cognitive load and reinforces brand identity.",
            "Micro-Interactions: Small moments of delight increase engagement and emotional connection."
        ];
        intent = "design";
        cta = { label: "Explore Labs", link: "/labs" };
    } else if (lowerQuery.includes("ai")) {
        intent = "ai";
    }

    return NextResponse.json({
        summary,
        keyPoints,
        intent,
        cta
    });
}
