"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";

const testimonials = [
  {
    quote: "MergeX didn’t just deliver a website—they gave us an innovation engine. Fast, seamless, and genuinely invested in our results.",
    name: "Elise Tran",
    title: "CTO, FutureTech Corp",
    avatar: "/placeholder-avatar.jpg", // Replace with actual image paths
    logo: "/placeholder-logo.png", // Replace with actual image paths
  },
  {
    quote: "Their AI tools automated hours of manual reporting. The time and cost savings went straight to our bottom line.",
    name: "Joel Bryant",
    title: "CEO, FinEdge Labs",
    avatar: "/placeholder-avatar.jpg",
    logo: "/placeholder-logo.png",
  },
  {
    quote: "Working with this team has been a game changer for our business. Their innovative solutions and attention to detail are unparalleled.",
    name: "Samantha Lee",
    title: "Marketing Director, Global Solutions",
    avatar: "/placeholder-avatar.jpg",
    logo: "/placeholder-logo.png",
  },
];

const Testimonials = () => {
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
          title="What Our Clients Say"
          subtitle="Build trust. Overcome doubts. Let real customers sell for you."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 flex flex-col"
            >
              <p className="text-lg italic text-gray-300 mb-6">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center mt-auto">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;