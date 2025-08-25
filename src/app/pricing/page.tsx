"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import dynamic from 'next/dynamic';

// Use dynamic import with ssr: false for components that use window
const DynamicPricingHero = dynamic(
  () => import('@/components/sections/Pricing/PricingHero'),
  { ssr: false }
);

const DynamicWebsitePricing = dynamic(
  () => import('@/components/sections/Pricing/WebsitePricing'),
  { ssr: false }
);

const DynamicMaintenanceAddons = dynamic(
  () => import('@/components/sections/Pricing/MaintenanceAddons'),
  { ssr: false }
);

const DynamicFAQ = dynamic(
  () => import('@/components/sections/Pricing/FAQ'),
  { ssr: false }
);

export default function Pricing() {
  return (
    <div className="relative min-h-screen text-white" style={{
        background: "radial-gradient(circle at center, rgba(43, 11, 69, 0.3) 0%, rgba(26, 11, 46, 0.2) 30%, rgba(10, 10, 10, 1) 70%)"
      }}>
      <Navbar />
      <DynamicPricingHero />
      <DynamicWebsitePricing />
      <DynamicMaintenanceAddons />
      <DynamicFAQ />
      <Footer />
    </div>
  );
}