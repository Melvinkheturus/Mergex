"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import dynamic from 'next/dynamic';

// Use dynamic import with ssr: false for components that use window
const DynamicServicesHero = dynamic(
  () => import('@/components/sections/Services/ServicesHero'),
  { ssr: false }
);

const DynamicCoreServices = dynamic(
  () => import('@/components/sections/Services/CoreServices'),
  { ssr: false }
);

const DynamicComingSoonTeaser = dynamic(
  () => import('@/components/sections/Services/ComingSoonTeaser'),
  { ssr: false }
);

const DynamicMaintenanceAddons = dynamic(
  () => import('@/components/sections/Services/MaintenanceAddons'),
  { ssr: false }
);

const DynamicWhyChooseUs = dynamic(
  () => import('@/components/sections/Services/WhyChooseUs').then(mod => mod.WhyChooseUs),
  { ssr: false }
);

const DynamicCallToAction = dynamic(
  () => import('@/components/sections/Services/CallToAction'),
  { ssr: false }
);

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen text-white" style={{
        background: "radial-gradient(circle at center, rgba(43, 11, 69, 0.3) 0%, rgba(26, 11, 46, 0.2) 30%, rgba(10, 10, 10, 1) 70%)"
      }}>
      <Navbar />
      <DynamicServicesHero />
      <DynamicCoreServices />
      <DynamicComingSoonTeaser />
      <DynamicMaintenanceAddons />
      <DynamicWhyChooseUs />
      <DynamicCallToAction />
      <Footer />
    </div>
  );
}