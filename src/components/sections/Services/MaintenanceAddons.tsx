"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartPulse, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import { CardHoverEffect as PulseCard } from "@/components/ui/pulse-card";

interface AddonItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant?: "emerald" | "blue" | "purple" | "amber" | "rose";
  showGridLines: boolean;
}

const addons: AddonItem[] = [
  {
    title: "Regular Updates",
    description: "Essential software updates to keep your site secure and current.",
    icon: <ShieldCheck className="h-6 w-6" />,
    variant: "emerald",
    showGridLines: true,
  },
  {
    title: "Performance Monitoring",
    description: "Continuous monitoring of your site's speed and uptime.",
    icon: <HeartPulse className="h-6 w-6" />,
    variant: "blue",
    showGridLines: true,
  },
  {
    title: "Security Scans",
    description: "Automated security checks and vulnerability fixes.",
    icon: <Search className="h-6 w-6" />,
    variant: "purple",
    showGridLines: true,
  },
  {
    title: "Domain & Hosting Support",
    description: "Assistance with domain management and hosting services.",
    icon: <Globe className="h-6 w-6" />,
    variant: "amber",
    showGridLines: true,
  },
];

function MaintenanceAddons() {
  return (
    <section className="py-20 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <SectionHeader
          title="Beyond the Launch We've Got You Covered"
          subtitle="Our support doesn't end when your site goes live. We provide ongoing services to keep your digital presence running smoothly."
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {addons.map((card: AddonItem, i: number) => (
          <PulseCard
            key={i}
            title={card.title}
            description={card.description}
            icon={card.icon}
            variant={card.variant}
            glowEffect={true}
            size={"lg"}
            showGridLines={card.showGridLines}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button 
          className="w-full sm:w-auto py-3 px-6 text-base rounded-xl bg-linear-to-tl from-purple-400 to-purple-600 text-white font-semibold hover:scale-105 hover:translate-y-[-2px] transition-all duration-300"
        >
          See Plans & Pricing <ArrowRight className="ml-2 inline" size={16} />
        </Button>
      </motion.div>
    </section>
  );
}

export default MaintenanceAddons;