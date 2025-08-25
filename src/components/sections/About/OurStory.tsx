"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const OurStory = () => {
  return (
    <section className="py-20 w-full overflow-hidden" style={{ background: "black" }}>
      <section className="container px-4">
        <motion.div 
          className="grid gap-12  items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >         
           <div className="text-left">
            <SectionHeader title="Where Mergex Began" className="!text-left !mb-6" />
            <p className="text-gray-400 mb-4">
              Mergex started with a simple idea: to empower Innovative minds and innovative businesses with digital solutions that push boundaries. We’re passionate about turning big ideas into smarter, faster growth.
            </p>
            <p className="text-gray-400 mb-6">
              From day one, our focus has been on collaboration, creativity, and cutting-edge technology. We believe every great solution begins with a strong partnership and a clear vision.
            </p>
            <p className="text-gray-400 mb-6">
              Though we’re a fresh startup, we’re driven by experience, curiosity, and the thrill of building something new. Our journey is just beginning, and we invite you to be part of what comes next.
            </p>
            <h3 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-500 sm:text-3xl mb-4">
              What’s Next for Mergex
            </h3>
            <ul className="list-disc list-inside text-gray-400 mb-6 inline-block text-left">
              <li>Launching breakthrough products tailored to your needs</li>
              <li>Growing our community of creators and collaborators</li>
              <li>Continually innovating with the latest tech trends</li>
            </ul>
            <p className="text-gray-400">
              Join us as we turn ideas into reality and make digital futures brighter and bolder.
            </p>
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default OurStory;