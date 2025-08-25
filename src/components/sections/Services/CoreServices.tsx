"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Palette, BriefcaseBusiness, ShoppingCart, Puzzle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from '@/lib/utils';
import { CardSpotlight } from "@/components/ui/card-spotlight";

interface ServiceCardProps {
  title: string;
  description: string;
  delay: number;
  ctaText: string;
  ctaLink: string;
  idealFor: string[];
  tierLabel: string;
  isPopular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, delay, ctaText, ctaLink, idealFor, tierLabel, isPopular }) => {
  const cardColorClass = {
    "General Websites": "from-purple-500/20 to-transparent",
    "Business Websites": "from-blue-500/20 to-transparent",
    "E-Commerce & Web Applications": "from-teal-500/20 to-transparent",
    "Custom Solutions": "from-orange-500/20 to-transparent",
  }[title] || "from-gray-500/20 to-transparent";

  const iconColorClass = {
    "General Websites": "text-purple-400",
    "Business Websites": "text-blue-400",
    "E-Commerce & Web Applications": "text-teal-400",
    "Custom Solutions": "text-orange-400",
  }[title] || "text-gray-400";



  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      className="w-full"
    >
      <CardSpotlight className={cn("p-0 overflow-hidden rounded-xl border-none shadow-lg h-full flex flex-col", "bg-black")} color={"#262626"}>
        <div className={cn("px-6 py-8 flex flex-col h-full relative", isPopular && "p-8")}>

          {/* Tier Label */}
          <div className="text-sm font-semibold text-gray-400 mb-4 text-center uppercase tracking-wider">
            {tierLabel}
          </div>

          {/* Icon */}
          <div className="flex items-center justify-center mx-auto mb-2 w-60 h-60">
            <div className="text-white text-5xl drop-shadow-lg">
              {title === "General Websites" && <img src="/SVG/General.png" alt="General Websites Icon" className="object-contain" />}
              {title === "Business Websites" && <img src="/SVG/Business Websites.png" alt="Business Websites Icon" className="object-contain" />}
              {title === "E-Commerce & Web Applications" && <img src="/SVG/E-Commerce.png" alt="E-Commerce Icon" className="object-contain" />}
              {title === "Custom Solutions" && <img src="/SVG/Custom Solutions.png" alt="Custom Solutions Icon" className="object-contain" />}
            </div>
          </div>
          
          <div className="text-center mb-6 flex-grow">
            <h2 className='text-3xl font-bold tracking-tight text-white mb-2'>
              {title}
            </h2>
            <p className='text-base text-gray-300'>
              {description}
            </p>
          </div>
          
          {/* Micro Features / Tags */}
          <div className="bg-[#ffffff0f] p-4 rounded-lg mb-6">
            <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Perfect for:</h4>
            <div className="flex flex-col gap-1 text-white text-sm">
              {idealFor.map((item, i) => (
                <div key={i} className="flex items-center">
                  <Check size={16} className="text-green-400 mr-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Button className="w-full py-3 text-base rounded-xl bg-linear-to-tl from-purple-400 to-purple-600 text-white font-semibold hover:scale-105 hover:translate-y-[-2px] transition-all duration-300 mt-auto">
            <a href={ctaLink} className="flex items-center justify-center w-full h-full">
              {ctaText} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </Button>
        </div>
      </CardSpotlight>
    </motion.div>
  );
};

const CoreServices = () => {
  const services = [
    {
      title: "General Websites",
      description: "Beautiful online spaces for personal brands, blogs, or communities.",
      delay: 0.1,
      ctaText: "Explore Websites",
      ctaLink: "/general-websites",
      idealFor: [
        "Freelancers",
        "Bloggers",
        "Creatives",
      ],
      tierLabel: "Starter Level",
    },
    {
      title: "Business Websites",
      description: "Professional sites designed to build your brand and drive business growth.",
      delay: 0.2,
      ctaText: "See Business Solutions",
      ctaLink: "/business-websites",
      idealFor: [
        "Startups",
        "Agencies",
        "Service Providers",
      ],
      tierLabel: "Growth Focused",
      isPopular: true,
    },
    {
      title: "E-Commerce & Web Applications",
      description: "Sell products, manage bookings, or offer memberships all in one place.",
      delay: 0.3,
      ctaText: "Launch E-Commerce",
      ctaLink: "/ecommerce-web-apps",
      idealFor: [
        "Retailers",
        "Online Service Providers",
        "SaaS Founders",
      ],
      tierLabel: "Scale Ready",
    },
    {
      title: "Custom Solutions",
      description: "Not seeing the perfect fit? We'll build exactly what your business needs.",
      delay: 0.4,
      ctaText: "Get Custom Quote",
      ctaLink: "/custom-solutions",
      idealFor: [
        "Enterprises",
        "Startups with unique needs",
        "Teams needing something special",
      ],
      tierLabel: "Tailored Experience",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">

  {/* Background Glow Layers */}
  <div className="absolute inset-0 -z-10">
    {/* Base gradient (dark fade) */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black"></div>

    {/* Soft purple glow in center */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,64,255,0.15),transparent_70%)]"></div>

    {/* Subtle concentric rings */}
    <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_center,rgba(127,64,255,0.08)_1px,transparent_200px)]"></div>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-center mb-16 container mx-auto px-4 md:px-8"
  >
    <SectionHeader
      title="What We Build"
      subtitle="Find the Website That Fits You — Expertly crafted digital experiences for every need"
    />
  </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 md:px-8">
    {services.map((service, index) => (
      <ServiceCard
        key={index}
        title={service.title}
        description={service.description}
        delay={service.delay}
        ctaText={service.ctaText}
        ctaLink={service.ctaLink}
        idealFor={service.idealFor}
        tierLabel={service.tierLabel}
        isPopular={service.isPopular}
      />
    ))}
  </div>
</section>

  );
};

export default CoreServices;