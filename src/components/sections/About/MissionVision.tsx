"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const MissionVision = () => {
  return (
    <section className="py-20 w-full overflow-hidden bg-black/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Mission & Vision"
          subtitle="Guiding principles that drive everything we do at Mergex"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <motion.div 
            className="group relative rounded-xl overflow-hidden border border-purple-500/30 p-8 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-all duration-300"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Our Mission</h3>
              <p className="text-white text-lg mb-4">
                Empower businesses, creators, and freelancers to thrive by merging innovation with collaboration.
              </p>
            </div>
          </motion.div>
          
          {/* Vision Card */}
          <motion.div 
            className="group relative rounded-xl overflow-hidden border border-pink-500/30 p-8 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-all duration-300"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Our Vision</h3>
              <p className="text-white text-lg mb-4">
                To become the global hub where innovation happens every day, ideas transform into impact, and opportunities are limitless.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;