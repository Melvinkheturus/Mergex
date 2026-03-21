import React from "react";
import BlogClient from "@/modules/blog/BlogClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Mergex",
    description: "The latest industry news, interviews, technologies, and resources.",
};

export default function BlogPage() {
    return <BlogClient />;
}
