"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

type ProjectCategory = "All" | "SaaS" | "Branding" | "Websites" | "AI Tools";

const FilterCategory = ({
  onFilterChange
}: {
  onFilterChange: (category: ProjectCategory) => void;
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const categories: ProjectCategory[] = ["All", "SaaS", "Branding", "Websites", "AI Tools"];

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? "bg-purple-500/20 text-purple-400"
                  : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                  }`}
              >
                {activeCategory === category && (
                  <motion.span
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 rounded-full bg-purple-500/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>

          {/* Search Bar (Optional) */}
          <div className="relative w-full md:w-auto">
            <div className="flex items-center rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 focus-within:border-purple-500/50 focus-within:ring-1 focus-within:ring-purple-500/20">
              <Search className="mr-2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full bg-transparent text-sm text-white placeholder-gray-400 outline-none md:w-48"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterCategory;