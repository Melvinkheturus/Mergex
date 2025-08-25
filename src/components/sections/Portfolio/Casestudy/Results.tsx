"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

type ResultMetric = {
  value: string;
  label: string;
  icon: string;
};

type ResultsProps = {
  metrics: ResultMetric[];
  qualitativeResults?: string;
  showBeforeAfter?: boolean;
  beforeImage?: string;
  afterImage?: string;
};

const defaultMetrics: ResultMetric[] = [
  {
    value: "3x",
    label: "website traffic",
    icon: "📈"
  },
  {
    value: "40%",
    label: "increase in conversion",
    icon: "💰"
  },
  {
    value: "60%",
    label: "faster user onboarding",
    icon: "⏱️"
  }
];

const Results = ({
  metrics = defaultMetrics,
  qualitativeResults = "Beyond the numbers, the client reported significant improvements in brand perception, user satisfaction, and team productivity with the new digital tools we implemented.",
  showBeforeAfter = false,
  beforeImage = "/before-image.jpg",
  afterImage = "/after-image.jpg"
}: ResultsProps) => {
  const countersRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countersRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView && countersRef.current) {
      const counters = countersRef.current.querySelectorAll('.counter-value');
      
      counters.forEach(counter => {
        const target = counter.textContent;
        const countUp = () => {
          // This is a simplified version - in a real implementation,
          // you would use a proper counter animation library
          counter.classList.add('counting');
        };
        
        countUp();
      });
    }
  }, [isInView]);

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
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-purple-400">Project Outcomes</span>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              The Results <span className="text-purple-500">🚀</span>
            </h2>
          </div>
          
          {/* Metrics */}
          <div 
            ref={countersRef}
            className="mb-8 grid gap-6 md:grid-cols-3"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center rounded-2xl border border-gray-800 bg-black/40 p-6 text-center backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <span className="mb-2 text-3xl">{metric.icon}</span>
                <h3 className="counter-value mb-1 text-3xl font-bold text-purple-500 md:text-4xl">
                  {metric.value}
                </h3>
                <p className="text-gray-300">{metric.label}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Qualitative Results */}
          {qualitativeResults && (
            <motion.div
              className="mb-12 rounded-2xl border border-gray-800 bg-black/40 p-6 text-center backdrop-blur-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-lg text-gray-300">
                {qualitativeResults}
              </p>
            </motion.div>
          )}
          
          {/* Before/After Comparison (Optional) */}
          {showBeforeAfter && (
            <motion.div
              className="mt-12 grid gap-8 md:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="overflow-hidden rounded-lg border border-gray-800">
                <div className="bg-gray-800 p-2 text-center text-sm font-medium uppercase tracking-wider text-gray-400">
                  Before
                </div>
                <div className="aspect-video bg-gray-900">
                  {/* Replace with actual Image component when images are available */}
                  <div className="flex h-full w-full items-center justify-center text-gray-600">
                    [Before Image Placeholder]
                  </div>
                </div>
              </div>
              
              <div className="overflow-hidden rounded-lg border border-gray-800">
                <div className="bg-purple-900/30 p-2 text-center text-sm font-medium uppercase tracking-wider text-purple-300">
                  After
                </div>
                <div className="aspect-video bg-gray-900">
                  {/* Replace with actual Image component when images are available */}
                  <div className="flex h-full w-full items-center justify-center text-gray-600">
                    [After Image Placeholder]
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Add CSS for counter animation */}
      <style jsx global>{`
        .counter-value {
          position: relative;
        }
        .counter-value.counting {
          animation: pulse 1.5s ease-out;
        }
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Results;