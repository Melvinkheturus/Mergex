"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Code, Rocket } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

type ProcessStepProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
  isLast?: boolean;
};

const ProcessStep = ({ icon, title, description, step, isLast = false }: ProcessStepProps) => {
  return (
    <div className="relative flex flex-col items-center md:items-start md:flex-row gap-4">
      {/* Step number with icon */}
      <motion.div 
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-800 text-white z-10 transform transition-transform duration-300 hover:scale-110"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: step * 0.1 }}
        whileHover={{ scale: 1.1 }}
      >
        {icon}
      </motion.div>
      
      {/* Connecting line */}
      {!isLast && (
        <div className="absolute top-16 left-8 h-full w-0.5 bg-gradient-to-b from-purple-600 to-transparent md:hidden"></div>
      )}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-16 h-0.5 w-full bg-gradient-to-r from-purple-600 to-transparent"></div>
      )}
      
      {/* Content */}
      <motion.div 
        className="flex flex-col md:pt-0 pb-8 md:pb-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: step * 0.1 + 0.2 }}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </motion.div>
    </div>
  );
};

const OurProcess = () => {
  const processSteps = [
    {
      icon: <Search size={24} />,
      title: "Discover",
      description: "We learn your goals and challenges.",
      step: 1,
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Ideate",
      description: "Merge creativity with cutting-edge tech.",
      step: 2,
    },
    {
      icon: <Code size={24} />,
      title: "Build",
      description: "Execute with speed and precision.",
      step: 3,
    },
    {
      icon: <Rocket size={24} />,
      title: "Launch & Scale",
      description: "Deliver solutions that grow with you.",
      step: 4,
      isLast: true,
    },
  ];

  return (
    <section className="py-20 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Process – How We Work"
          subtitle="We believe innovation thrives in clarity. Here's our simple 4-step process:"
        />

        {/* Mobile timeline (vertical) */}
        <div className="md:hidden flex flex-col space-y-6 max-w-md mx-auto">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={index}
              isLast={step.isLast}
            />
          ))}
        </div>

        {/* Desktop timeline (horizontal) */}
        <div className="hidden md:grid grid-cols-4 gap-6 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={index}
              isLast={step.isLast}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;