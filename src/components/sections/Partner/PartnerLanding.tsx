"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const PartnerLanding = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden py-10 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0B0B0F] to-[#1C0F2A] -z-10" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-white to-purple-300">
            Partner With Mergex.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're an independent creator or a business, let's merge strengths and build together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Freelancer Card */}
          <PartnerCard 
            title="Freelancer Partnership"
            icon="👩‍💻"
            description="Join Mergex projects as a designer, developer, or creative contributor."
            ctaText="Apply as Freelancer"
            href="/Partner/Freelancer"
          />
          
          {/* Collaboration Card */}
          <PartnerCard 
            title="Collaboration"
            icon="🤝"
            description="Let's explore collaborations, joint ventures, or strategic partnerships."
            ctaText="Collaborate With Us"
            href="/Partner/Collaboration"
          />
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Partner With Mergex?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Access to cutting-edge projects",
                description: "Work on innovative and challenging projects that push boundaries."
              },
              {
                title: "Work with global innovators",
                description: "Connect with talented professionals from around the world."
              },
              {
                title: "Fair compensation & transparency",
                description: "Clear terms, timely payments, and fair rates for your expertise."
              },
              {
                title: "Long-term growth opportunities",
                description: "Build lasting relationships that lead to continuous collaboration."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Partnership Process</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600/30 rounded-full" />
            
            {/* Timeline steps */}
            {[
              { step: 1, title: "Choose your path", description: "Freelancer or Collaboration" },
              { step: 2, title: "Submit application", description: "Tell us about yourself or your company" },
              { step: 3, title: "Review by Mergex team", description: "We'll evaluate your application" },
              { step: 4, title: "Get onboarded & start working", description: "Begin your journey with Mergex" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                className={cn(
                  "relative mb-12 flex",
                  index % 2 === 0 ? "justify-end md:justify-start" : "justify-end"
                )}
              >
                <div className={cn(
                  "w-full md:w-5/12 bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20",
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                )}>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full mr-3 text-sm font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-black" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PartnerCard = ({ title, icon, description, ctaText, href }: {
  title: string;
  icon: string;
  description: string;
  ctaText: string;
  href: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      
      <Link href={href}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white bg-linear-to-r from-purple-600 to-purple-800 rounded-lg group-hover:from-purple-500 group-hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/30"
        >
          <span className="relative flex items-center">
            {ctaText}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          
          {/* Glow effect */}
          <span className="absolute inset-0 overflow-hidden rounded-lg">
            <span className="absolute inset-0 rounded-lg bg-linear-to-r from-purple-400/0 via-purple-400/40 to-purple-400/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" style={{ animationDuration: '2s' }} />
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default PartnerLanding;