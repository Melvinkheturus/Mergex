import { type Article } from "./types";

export const articles: Article[] = [];

export const tabs = [
    {
        id: "all",
        label: "View all",
    },
    {
        id: "design",
        label: "Design",
    },
    {
        id: "product",
        label: "Product",
    },
    {
        id: "software-engineering",
        label: "Software Engineering",
    },
    {
        id: "customer-success",
        label: "Customer Success",
    },
];

export const sortByOptions = [
    {
        id: "recent",
        label: "Most recent",
    },
    {
        id: "popular",
        label: "Most popular",
    },
    {
        id: "viewed",
        label: "Most viewed",
    },
];

export const featuredArticles: Article[] = [];
