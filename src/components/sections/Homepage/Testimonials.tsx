"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  image?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials = [
  {
    quote: "MergeX didn't just deliver a website—they gave us an innovation engine. Fast, seamless, and genuinely invested in our results.",
    name: "Elise Tran",
    designation: "CTO, FutureTech Corp",
    src: "/download (2).jpeg", // Replace with actual image paths
  },
  {
    quote: "Their AI tools automated hours of manual reporting. The time and cost savings went straight to our bottom line.",
    name: "Joel Bryant",
    designation: "CEO, FinEdge Labs",
    src: "/images.jpeg",
  },
  {
    quote: "Working with this team has been a game changer for our business. Their innovative solutions and attention to detail are unparalleled.",
    name: "Samantha Lee",
    designation: "Marketing Director, Global Solutions",
    src: "/sam.jpg",
  },
];

const Testimonials = ({ 
  title = "What Our Clients Say", 
  subtitle = "Build trust. Overcome doubts. Let real customers sell for you.",
  testimonials = []
}: TestimonialsProps) => {
  // Map Sanity testimonials to the format expected by AnimatedTestimonials
  const formattedTestimonials = testimonials.length > 0 
    ? testimonials.map(t => ({
        quote: t.quote,
        name: t.name,
        designation: t.designation,
        src: t.image || ""
      }))
    : defaultTestimonials;

  return (
    <section className="py-20 text-white" style={{
        background: "radial-gradient(circle at center, rgba(43, 11, 69, 0.2) 0%, rgba(26, 11, 46, 0.1) 30%, rgba(10, 10, 10, 1) 80%)"
      }}>
      <div className="container mx-auto px-4">
        <SectionHeader
          title={title}
          subtitle={subtitle}
        />
        <AnimatedTestimonials testimonials={formattedTestimonials} autoplay={true} />
      </div>
    </section>
  );
};

export default Testimonials;