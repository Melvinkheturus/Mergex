"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/sections/Contact/ContactHero";
import ContactForm from "@/components/sections/Contact/ContactForm";
import ContactInfo from "@/components/sections/Contact/ContactInfo";
import PartnershipCTA from "@/components/sections/Contact/PartnershipCTA";
import ContactFAQ from "@/components/sections/Contact/ContactFAQ";
import ScheduleCallSection from "@/components/sections/Contact/ScheduleCallSection";
import SocialConnections from "@/components/sections/Contact/SocialConnections";
import ClosingMessage from "@/components/sections/Contact/ClosingMessage";

export default function Contact() {
  return (
    <div className="relative min-h-screen text-white" style={{
        background: "radial-gradient(circle at center, rgba(43, 11, 69, 0.3) 0%, rgba(26, 11, 46, 0.2) 30%, rgba(10, 10, 10, 1) 70%)"
      }}>
      <Navbar />
      <ContactHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
        </div>
      </div>
      <ScheduleCallSection />
      <PartnershipCTA />
      <ContactFAQ />

      <ClosingMessage />
      <Footer />
    </div>
  );
}