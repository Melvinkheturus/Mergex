"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Globe, Lightbulb, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Modern Website Development",
    description: "Lightning-fast, secure, and strikingly beautiful web experiences—tailored for tomorrow’s brands.",
  },
  {
    icon: Lightbulb,
    title: "AI Tools & Automation",
    description: "We wield custom AI to turn bottlenecks into breakthroughs. Smart integration, smarter results.",
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy & Growth",
    description: "Cut through the noise. Our data-driven digital strategists unlock true ROI and scalable impact.",
  },
];

const CoreServices = () => {
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
          title="Our Core Services"
          subtitle="Make it crystal-clear what MergeX offers. Give visitors a “menu” of your strengths so they know you’re a fit for them."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(168,85,247,0.4)" }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 flex flex-col items-center text-center"
            >
              <div className="mb-6 text-purple-400">
                <service.icon size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;