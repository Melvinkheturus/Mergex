import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/modules/blog/constants";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q") || "";

    if (!query) {
        return NextResponse.json([]);
    }

    const lowerQuery = query.toLowerCase();
    const filtered = articles.filter(
        (a) => 
            a.title.toLowerCase().includes(lowerQuery) || 
            a.summary.toLowerCase().includes(lowerQuery) ||
            a.category.name.toLowerCase().includes(lowerQuery)
    );

    return NextResponse.json(filtered);
}
