
"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/sections/HomeHero";
import CoreServices from "@/components/sections/CoreServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedCaseStudy from "@/components/sections/FeaturedCaseStudy";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white" style={{
        background: "radial-gradient(circle at center, rgba(43, 11, 69, 0.3) 0%, rgba(26, 11, 46, 0.2) 30%, rgba(10, 10, 10, 1) 70%)"
      }}>
      <Navbar />
      <HomeHero />
      <CoreServices />
      <WhyChooseUs />
      <FeaturedCaseStudy />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
