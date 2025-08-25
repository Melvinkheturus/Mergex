"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type TestimonialProps = {
  quote: string;
  clientName: string;
  clientRole: string;
  clientImage?: string;
};

const Testimonial = ({
  quote = "Mergex transformed our digital presence. The process was smooth, the team was creative, and the results exceeded expectations.",
  clientName = "John Smith",
  clientRole = "CEO, SaaS Company",
  clientImage = "/placeholder-avatar.jpg"
}: TestimonialProps) => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-purple-400">Client Feedback</span>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Testimonial
            </h2>
          </div>
          <div className="relative rounded-2xl border border-gray-800 bg-black/40 p-8 backdrop-blur-sm md:p-12">
            {/* Quote marks */}
            <div className="absolute -left-3 -top-3 text-4xl text-purple-500 opacity-50">❝</div>
            <div className="absolute -bottom-3 -right-3 text-4xl text-purple-500 opacity-50">❞</div>
            
            <motion.blockquote
              className="mb-8 text-center text-xl font-medium italic text-gray-200 md:text-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {quote}
            </motion.blockquote>
            
            <motion.div 
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {clientImage && (
                <div className="mb-3 h-16 w-16 overflow-hidden rounded-full border-2 border-purple-500/30">
                  {/* Placeholder for actual client image */}
                  <div className="flex h-full w-full items-center justify-center bg-gray-800 text-xs text-gray-400">
                    Photo
                  </div>
                </div>
              )}
              
              <div className="text-center">
                <div className="font-semibold text-white">{clientName}</div>
                <div className="text-sm text-purple-400">{clientRole}</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;