"use client";

import { motion } from "framer-motion";

type ProjectOverviewProps = {
  client: string;
  industry: string;
  services: string[];
  timeline: string;
  deliverables: string[];
};

const ProjectOverview = ({
  client = "SaaS Growth Platform",
  industry = "SaaS / Technology",
  services = ["Branding", "Web Design", "AI Tool Integration"],
  timeline = "3 months",
  deliverables = ["Website", "Brand Strategy", "UX Design", "Custom Dashboard"],
}: ProjectOverviewProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mx-auto max-w-4xl rounded-2xl border border-gray-800 bg-black/40 p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-purple-400">Project Details</span>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Project Overview
            </h2>
          </div>
          
          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Client */}
            <motion.div variants={item} className="flex flex-col">
              <span className="mb-2 text-sm font-medium uppercase tracking-wider text-purple-400">
                Client
              </span>
              <span className="text-gray-300">{client}</span>
            </motion.div>
            
            {/* Industry */}
            <motion.div variants={item} className="flex flex-col">
              <span className="mb-2 text-sm font-medium uppercase tracking-wider text-purple-400">
                Industry
              </span>
              <span className="text-gray-300">{industry}</span>
            </motion.div>
            
            {/* Services */}
            <motion.div variants={item} className="flex flex-col">
              <span className="mb-2 text-sm font-medium uppercase tracking-wider text-purple-400">
                Services
              </span>
              <div className="flex flex-wrap gap-2">
                {services.map((service, index) => (
                  <span 
                    key={index} 
                    className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Timeline */}
            <motion.div variants={item} className="flex flex-col">
              <span className="mb-2 text-sm font-medium uppercase tracking-wider text-purple-400">
                Timeline
              </span>
              <span className="text-gray-300">{timeline}</span>
            </motion.div>
            
            {/* Deliverables */}
            <motion.div variants={item} className="flex flex-col">
              <span className="mb-2 text-sm font-medium uppercase tracking-wider text-purple-400">
                Deliverables
              </span>
              <div className="flex flex-col gap-1">
                {deliverables.map((deliverable, index) => (
                  <span key={index} className="text-gray-300">
                    • {deliverable}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectOverview;