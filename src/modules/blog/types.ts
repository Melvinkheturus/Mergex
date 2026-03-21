export interface Category {
    name: string;
    href: string;
}

export interface Author {
    name: string;
    href: string;
    avatarUrl: string;
}

export interface Tag {
    name: string;
    color: string;
    href: string;
}

export interface Article {
    id: string;
    title: string;
    summary: string;
    href: string;
    category: Category;
    thumbnailUrl: string;
    publishedAt: string;
    readingTime: string;
    author: Author;
    tags: Tag[];
    isFeatured?: boolean;
}
