"use client";

'use client';

import { useState } from "react";
import { motion } from 'framer-motion';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioHero from "@/components/sections/Portfolio/PortfolioHero";
import FeauturedProject from "@/components/sections/Portfolio/FeauturedProject";
import FilterCategory from "@/components/sections/Portfolio/FilterCategory";
import PortfolioGrid from "@/components/sections/Portfolio/PortfolioGrid";
import PortfolioCTA from "@/components/sections/Portfolio/PortfolioCTA";
import { BackgroundBeams } from '@/components/ui/background-beams';

type ProjectCategory = "All" | "SaaS" | "Branding" | "Websites" | "AI Tools";

// Sample projects data (in a real app, this would come from an API or CMS)
const sampleProjects: any[] = [
  // Empty array for now to demonstrate the empty state
  // In a real implementation, you would populate this with actual projects
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const handleFilterChange = (category: ProjectCategory) => {
    setActiveCategory(category);
  };

  return (
    <div className="relative min-h-screen text-white" style={{
      background: "radial-gradient(circle at center, rgba(43, 11, 69, 0.3) 0%, rgba(26, 11, 46, 0.2) 30%, rgba(10, 10, 10, 1) 70%)"
    }}>
      <BackgroundBeams className="absolute inset-0 z-0" />
      <Navbar />
      <PortfolioHero />
      <FeauturedProject />
      <FilterCategory onFilterChange={handleFilterChange} />
      <PortfolioGrid projects={sampleProjects} activeCategory={activeCategory} />
      <PortfolioCTA />
      <Footer />
    </div>
  );
}