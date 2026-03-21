import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const BlogPagination = ({ currentPage, totalPages, onPageChange }: BlogPaginationProps) => {
    if (totalPages <= 1) return null;

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={cn(
                        "size-10 rounded-lg text-sm font-medium transition-all",
                        currentPage === i
                            ? "bg-gray-900 text-white shadow-md"
                            : "text-gray-600 hover:bg-gray-100"
                    )}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-2 py-12 border-t border-gray-100 mt-8">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
            >
                <ChevronLeft className="size-4" />
                <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex items-center gap-1 mx-4">
                {renderPageNumbers()}
            </div>

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent"
            >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="size-4" />
            </button>
        </div>
    );
};
