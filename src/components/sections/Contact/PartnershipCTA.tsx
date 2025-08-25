"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Ripple } from "@/components/ui/ripple";

const PartnershipCTA = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Ripple moved to card background */}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-purple-500/20 shadow-lg relative z-10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Ripple />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Looking to Partner With Us?</h2>
              <p className="text-gray-300 max-w-2xl">Join our network of innovators and creators to build the next generation of digital experiences.</p>
            </div>
            
            <Link href="/Partner" className="group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
               className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-linear-to-r from-purple-600 to-purple-800 rounded-lg group-hover:from-purple-500 group-hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/30">
                <span className="relative flex items-center whitespace-nowrap">
                  Join as Partner
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                
                {/* Glow effect */}
                <span className="absolute inset-0 overflow-hidden rounded-lg">
                  <span className="absolute inset-0 rounded-lg bg-linear-to-r from-purple-400/0 via-purple-400/40 to-purple-400/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" style={{ animationDuration: '2s' }} />
                </span>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PartnershipCTA;