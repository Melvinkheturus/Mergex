"use client";

import { motion } from "framer-motion";

type SolutionStep = {
  title: string;
  description: string;
};

type SolutionProps = {
  solutionSteps: SolutionStep[];
};

const defaultSolutionSteps: SolutionStep[] = [
  {
    title: "Research & Discovery",
    description: "We conducted in-depth market research, competitor analysis, and user interviews to understand pain points and opportunities."
  },
  {
    title: "Strategy Development",
    description: "Based on our findings, we created a comprehensive digital strategy focused on highlighting the client's unique value proposition."
  },
  {
    title: "Design & Development",
    description: "We designed and built a modern, conversion-focused website with intuitive navigation and clear call-to-actions."
  },
  {
    title: "Launch & Iteration",
    description: "After launch, we continuously monitored performance metrics and made data-driven improvements to optimize results."
  }
];

const Solution = ({
  solutionSteps = defaultSolutionSteps,
}: SolutionProps) => {
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
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-purple-400">Our Approach</span>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              The Solution
            </h2>
          </div>
          
          <div className="space-y-6">
            {solutionSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative rounded-2xl border border-gray-800 bg-black/40 p-6 backdrop-blur-sm"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {/* Step number */}
                <div className="absolute -left-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
                  {index + 1}
                </div>
                
                <div className="ml-2">
                  <h3 className="mb-2 text-xl font-semibold text-purple-400">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Connecting line between steps */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-purple-600/50 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;