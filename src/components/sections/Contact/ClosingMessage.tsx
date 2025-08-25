"use client";

import { motion } from "framer-motion";

const ClosingMessage = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-gray-400 text-sm md:text-base italic">
            Mergex is where ideas transform into digital realities. Let's start building together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingMessage;