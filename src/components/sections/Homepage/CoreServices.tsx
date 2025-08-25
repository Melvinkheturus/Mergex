"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Globe, Lightbulb, TrendingUp, Code, BarChart, Zap, Search, Shield, Star } from "lucide-react";
import CardSwap, { Card } from "@/components/ui/CardSwap";

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface CoreServicesProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

// Map of icon names to Lucide icon components
const iconMap: Record<string, React.FC<{ size: number }>> = {
  Globe,
  Lightbulb,
  TrendingUp,
  Code,
  BarChart,
  Zap,
  Search,
  Shield,
  Star,
};

// Default services if none are provided
const defaultServices = [
  {
    icon: "Lightbulb",
    title: "AI Tools & Automation",
    description: "Turn bottlenecks into breakthroughs with tailored AI solutions and workflow automation.",
  },
  {
    icon: "Code",
    title: "Website Development",
    description: "Build dynamic, scalable, and visually stunning websites optimized for both users and results.",
  },
  {
    icon: "Zap",
    title: "Smart Integration",
    description: "Effortlessly connect your systems for smoother, unified operations and better data flow.",
  },
];

const CoreServices = ({
  title = "Our Core Services",
  subtitle = "Make it crystal-clear what MergeX offers. Give visitors a \"menu\" of your strengths so they know you're a fit for them.",
  services = defaultServices,
}: CoreServicesProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-10 pb-24 lg:pb-32 text-white" style={{
        background: "radial-gradient(circle at center, rgba(43, 11, 69, 0.2) 0%, rgba(26, 11, 46, 0.1) 30%, rgba(10, 10, 10, 1) 80%)"
      }}>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side (Text Content) */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <SectionHeader
            title="Reimagine Growth With AI & Web Excellence"
            subtitle="Unlock your business’s full potential with custom AI tools, seamless automation, and next level website development all designed for smarter operations and standout digital presence."
            className="text-left [&>h2]:text-2xl lg:[&>h2]:text-3xl [&>p]:text-sm lg:[&>p]:text-lg"
          />
        </div>

        {/* Right Side (CardSwap) */}
        <div ref={ref} className="lg:w-1/2 relative h-[500px] flex justify-center items-center">
          <div className="relative w-full max-w-[500px] h-auto lg:h-[350px] lg:translate-y-0">
            <CardSwap
              width={400}
              height={300}
              cardDistance={40}
              verticalDistance={30}
              delay={4000}
              pauseOnHover={true}
              skewAmount={4}
              easing="elastic"
            >
            {services.map((service, index) => {
              // Get the icon component from the map or default to Globe
              const IconComponent = iconMap[service.icon] || Globe;
              
              return (
                <Card 
                  key={index}
                  className="bg-gray-800/80 backdrop-blur-sm p-8 border border-gray-700 flex flex-col items-center text-center overflow-hidden"
                >
                  <div className="mb-6 text-purple-400">
                    <IconComponent size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {service.description}
                  </p>
                </Card>
              );
            })}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;