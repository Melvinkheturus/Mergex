"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const FeaturedCaseStudy = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 text-white" style={{
        background: "radial-gradient(circle at center, rgba(43, 11, 69, 0.2) 0%, rgba(26, 11, 46, 0.1) 30%, rgba(10, 10, 10, 1) 80%)"
      }}>
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="CASE STUDY"
          title="Showcased Project with Before / After Comparison"
          subtitle="Demonstrate proof: social validation plus tangible outcomes. Converts skeptics to buyers."
        />

        <div ref={ref} className="mt-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 w-full max-w-3xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex-1 text-center">
                <h3 className="text-2xl font-bold mb-4">Before</h3>
                <div className="bg-gray-700 rounded-lg p-6 h-48 flex items-center justify-center">
                  <p className="text-xl font-semibold">Outdated Design</p>
                </div>
              </div>
              <div className="text-purple-400">
                <ArrowRight size={32} />
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-2xl font-bold mb-4">After</h3>
                <div className="bg-purple-700 rounded-lg p-6 h-48 flex items-center justify-center">
                  <p className="text-xl font-semibold">Modern Redesign</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <p className="text-3xl font-bold text-purple-400">85%</p>
                <p className="text-sm text-gray-300">Traffic Increase</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <p className="text-3xl font-bold text-purple-400">+120%</p>
                <p className="text-sm text-gray-300">Conversion Rate</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <p className="text-3xl font-bold text-purple-400">200%</p>
                <p className="text-sm text-gray-300">ROI Boost</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-2">Results Summary</h4>
              <p className="text-gray-300">
                The redesign led to a significant increase in website traffic, conversion rates, and overall ROI.
              </p>
            </div>

            <div className="mt-8 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-purple-600 text-white hover:bg-purple-700 h-10 px-4 py-2"
              >
                Explore the full story <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;