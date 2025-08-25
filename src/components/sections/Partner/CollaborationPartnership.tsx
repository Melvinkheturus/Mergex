"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const CollaborationPartnership = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission to your backend
    setIsSubmitted(true);
    
    // Reset form after submission (in a real app, you'd do this after successful API response)
    setTimeout(() => {
      setIsSubmitted(false);
      setFileName(null);
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 3000);
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0B0B0F] to-[#1C0F2A] -z-10" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-white to-purple-300">
            Let's Collaborate & Build Together.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We partner with startups, agencies, and enterprises to merge innovation with execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 shadow-xl shadow-purple-500/5 relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6"
                >
                  <Check className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Proposal Received!</h3>
                <p className="text-gray-300 text-center">We'll review your collaboration proposal and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                    <input 
                      type="text" 
                      id="companyName" 
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-300 mb-1">Contact Person</label>
                    <input 
                      type="text" 
                      id="contactPerson" 
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="Full name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="contact@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-1">Website / LinkedIn</label>
                    <input 
                      type="url" 
                      id="website" 
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="https://"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="collaborationType" className="block text-sm font-medium text-gray-300 mb-1">Type of Collaboration</label>
                  <select 
                    id="collaborationType" 
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  >
                    <option value="">Select collaboration type</option>
                    <option value="tech-partnership">Tech Partnership</option>
                    <option value="joint-venture">Joint Venture</option>
                    <option value="white-label">White-label</option>
                    <option value="investment">Investment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message / Proposal Details</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Tell us about your collaboration proposal and what you're looking to achieve"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="proposal" className="block text-sm font-medium text-gray-300 mb-1">File Upload (pitch deck, case study, proposal)</label>
                  <div className="relative">
                    <input 
                      type="file" 
                      id="proposal" 
                      accept=".pdf,.doc,.docx,.ppt,.pptx"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                    <label 
                      htmlFor="proposal"
                      className="flex items-center justify-center w-full px-4 py-3 bg-black/50 border border-gray-700 border-dashed rounded-lg cursor-pointer hover:bg-gray-800/50 transition-colors"
                    >
                      <Upload className="w-5 h-5 mr-2 text-gray-400" />
                      <span className="text-gray-300">
                        {fileName ? fileName : "Upload your proposal document"}
                      </span>
                    </label>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-linear-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 rounded-lg text-white font-medium shadow-lg shadow-purple-500/30 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Start Collaboration</span>
                  <span className="absolute inset-0 overflow-hidden rounded-lg">
                    <span className="absolute inset-0 rounded-lg bg-linear-to-r from-purple-400/0 via-purple-400/40 to-purple-400/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" style={{ animationDuration: '2s' }} />
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Sidebar Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-white">How Collaboration Works</h3>
              
              <div className="space-y-4">
                {[
                  { step: 1, title: "Submit Proposal", description: "Share your collaboration idea" },
                  { step: 2, title: "Discovery Call", description: "Discuss goals and possibilities" },
                  { step: 3, title: "Define Scope & Goals", description: "Create a collaboration roadmap" },
                  { step: 4, title: "Formal Agreement", description: "Finalize terms and paperwork" },
                  { step: 5, title: "Execute Together", description: "Begin the collaborative journey" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex items-center justify-center w-6 h-6 bg-purple-600 rounded-full mr-3 text-xs font-bold shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-white">Types of Partnerships We Welcome</h3>
              
              <div className="space-y-3">
                {[
                  { icon: "🤖", title: "Tech Integration", description: "Combine our technologies for innovative solutions" },
                  { icon: "🔧", title: "White-label Development", description: "Custom development under your brand" },
                  { icon: "🚀", title: "Joint Ventures", description: "Co-create new products or services" },
                  { icon: "💼", title: "Investment Partnerships", description: "Strategic funding and growth opportunities" },
                  { icon: "🎨", title: "Creative Collaborations", description: "Merge creative talents for unique projects" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-xl mr-3 mt-0.5">{item.icon}</span>
                    <div>
                      <h4 className="font-medium text-white">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-white">Current Partners</h3>
              <p className="text-gray-400 text-sm mb-4">Trusted by innovative teams across industries.</p>
              
              <div className="grid grid-cols-3 gap-4">
                {/* Placeholder for partner logos */}
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-gray-800/50 rounded-md h-12 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-700/50 rounded-full" />
                  </div>
                ))}
              </div>
              
              <div className="mt-4">
                <Link href="#" className="text-purple-400 hover:text-purple-300 text-sm font-medium inline-flex items-center">
                  See Partnership Stories
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-white">FAQ</h3>
              
              <div className="space-y-4">
                {[
                  { 
                    question: "What kind of companies do you work with?", 
                    answer: "We collaborate with businesses of all sizes, from startups to enterprises, across various industries." 
                  },
                  { 
                    question: "Is there a minimum commitment?", 
                    answer: "Collaboration terms are flexible and tailored to each partnership's unique needs and goals." 
                  },
                  { 
                    question: "Do you sign NDAs?", 
                    answer: "Yes, we prioritize confidentiality and are happy to sign NDAs before discussing sensitive details." 
                  }
                ].map((item, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="font-medium text-white">{item.question}</h4>
                    <p className="text-sm text-gray-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationPartnership;