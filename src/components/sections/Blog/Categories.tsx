"use client";

import { motion } from "framer-motion";

type CategoriesProps = {
  categories?: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

const Categories = ({
  categories = ["All", "Startups", "Design", "AI", "Case Studies"],
  activeCategory,
  onCategoryChange,
}: CategoriesProps) => {
  return (
    <section className="w-full py-6">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 sm:text-base ${activeCategory === category
                ? 'bg-purple-600 text-white'
                : 'border border-gray-700 bg-black/40 text-gray-300 hover:border-purple-500 hover:text-white'
              }`}
              onClick={() => onCategoryChange(category)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;