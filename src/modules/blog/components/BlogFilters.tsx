import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogFiltersProps {
    tabs: { id: string; label: string }[];
    activeTab: string;
    onTabChange: (id: string) => void;
    sortBy: string;
    onSortChange: (id: string) => void;
    sortByOptions: { id: string; label: string }[];
}

export const BlogFilters = ({
    tabs,
    activeTab,
    onTabChange,
    sortBy,
    onSortChange,
    sortByOptions,
}: BlogFiltersProps) => {
    return (
        <div className="flex flex-col items-center justify-between gap-8 py-8 border-b border-gray-100 md:flex-row">
            <div className="flex w-full overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                <nav className="flex gap-8 border-b border-gray-100 md:border-none">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={cn(
                                "relative pb-4 text-sm font-semibold transition-colors duration-200 whitespace-nowrap",
                                activeTab === tab.id
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-500 hover:text-gray-900"
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="relative w-full md:w-auto min-w-[180px]">
                <div className="group relative">
                    <select
                        value={sortBy}
                        onChange={(e) => onSortChange(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-sm font-medium text-gray-900 shadow-sm transition-all hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    >
                        {sortByOptions.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-gray-400 group-hover:text-blue-600" />
                </div>
            </div>
        </div>
    );
};
