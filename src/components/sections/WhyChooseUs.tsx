"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Zap, Award, ShieldCheck, Handshake } from "lucide-react";

const usps = [
  {
    icon: Zap,
    title: "Speed & Precision",
    description: "From ideation to launch, we move at the pace of opportunity—without sacrificing detail.",
  },
  {
    icon: Award,
    title: "AI-Powered Everything",
    description: "Our proprietary tech means your business is always a step ahead of the competition.",
  },
  {
    icon: ShieldCheck,
    title: "Integrated, Not Isolated",
    description: "No digital silos. Websites, tools, and strategy—engineered to work together, not apart.",
  },
  {
    icon: Handshake,
    title: "Built for the Next Era",
    description: "We’re not chasing trends—we’re building what’s next, today.",
  },
];

const WhyChooseUs = () => {
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
          title="Why Choose Mergex?"
          subtitle="Show that MergeX isn’t “just another agency”—reveal your unique edge."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(168,85,247,0.4)" }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 flex flex-col items-center text-center"
            >
              <div className="mb-6 text-purple-400">
                <usp.icon size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                {usp.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;