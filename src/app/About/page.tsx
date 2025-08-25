"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/About/AboutHero";
import OurStory from "@/components/sections/About/OurStory";
import MissionVision from "@/components/sections/About/MissionVision";
import OurProcess from "@/components/sections/About/OurProcess";
import JoinUsCTA from "@/components/sections/About/JoinUsCTA";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen text-white" style={{
        background: "black"
      }}>
      <Navbar />
      <AboutHero />
      <TracingBeam className="px-6">
        <OurStory />
        <MissionVision />
        <OurProcess />
      </TracingBeam>
      <JoinUsCTA />
      <Footer />
    </div>
  );
}