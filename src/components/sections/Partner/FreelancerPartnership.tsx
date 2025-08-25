"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

const FreelancerPartnership = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string | null>(null);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSkillToggle = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
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
      setSelectedSkills([]);
      setFileName(null);
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 3000);
  };

  const skills = [
    "UI/UX Design", "Frontend", "Backend", "Full Stack", "Mobile", 
    "AI/ML", "DevOps", "Marketing", "Content", "Project Management"
  ];

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
            Become a Mergex Freelancer.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Join our growing network of innovators and contribute your skills to groundbreaking projects.
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
                <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                <p className="text-gray-300 text-center">We'll review your application and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300 mb-1">Portfolio Link / GitHub / Dribbble</label>
                  <input 
                    type="url" 
                    id="portfolio" 
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="https://"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Skills (select all that apply)</label>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => handleSkillToggle(skill)}
                        className={cn(
                          "px-3 py-1.5 text-sm rounded-full transition-colors",
                          selectedSkills.includes(skill)
                            ? "bg-purple-600 text-white"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        )}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-300 mb-1">Availability</label>
                    <select 
                      id="availability" 
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    >
                      <option value="">Select availability</option>
                      <option value="part-time">Part-time</option>
                      <option value="full-time">Full-time</option>
                      <option value="project-based">Project-based</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="rate" className="block text-sm font-medium text-gray-300 mb-1">Expected Rate (optional)</label>
                    <input 
                      type="text" 
                      id="rate" 
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="Your hourly or project rate"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-300 mb-1">Short Bio / Why Mergex?</label>
                  <textarea 
                    id="bio" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Tell us about yourself and why you want to work with Mergex"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-1">Resume / Portfolio PDF</label>
                  <div className="relative">
                    <input 
                      type="file" 
                      id="resume" 
                      accept=".pdf,.doc,.docx"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                    <label 
                      htmlFor="resume"
                      className="flex items-center justify-center w-full px-4 py-3 bg-black/50 border border-gray-700 border-dashed rounded-lg cursor-pointer hover:bg-gray-800/50 transition-colors"
                    >
                      <Upload className="w-5 h-5 mr-2 text-gray-400" />
                      <span className="text-gray-300">
                        {fileName ? fileName : "Upload your resume or portfolio"}
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
                  <span className="relative z-10">Apply Now</span>
                  <span className="absolute inset-0 overflow-hidden rounded-lg">
                    <span className="absolute inset-0 rounded-lg bg-linear-to-r from-purple-400/0 via-purple-400/40 to-purple-400/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" style={{ animationDuration: '2s' }} />
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Featured Freelancers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-white">Our Hiring Process</h3>
              
              <div className="space-y-4">
                {[
                  { step: 1, title: "Apply", description: "Fill form & share your portfolio" },
                  { step: 2, title: "Skill Review", description: "Our team evaluates your work" },
                  { step: 3, title: "Test Project", description: "For critical roles (optional)" },
                  { step: 4, title: "Onboarding", description: "You join the Mergex talent pool" },
                  { step: 5, title: "Get Matched", description: "We connect you with projects" }
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
              <h3 className="text-xl font-bold mb-4 text-white">Perks of Being a Mergex Freelancer</h3>
              
              <div className="space-y-3">
                {[
                  { icon: "🌍", title: "Work remotely, anywhere" },
                  { icon: "⏱️", title: "Flexible schedule" },
                  { icon: "💸", title: "Paid on time" },
                  { icon: "🧠", title: "Access to community + learning resources" },
                  { icon: "🤝", title: "Opportunity for long-term collaboration" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-xl mr-3">{item.icon}</span>
                    <span className="text-gray-300">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-white">FAQ</h3>
              
              <div className="space-y-4">
                {[
                  { 
                    question: "Do I need prior experience?", 
                    answer: "While experience is valuable, we also consider talent and potential. Show us your best work, even if it's personal projects." 
                  },
                  { 
                    question: "How do payments work?", 
                    answer: "We offer flexible payment options including hourly, fixed-price, and milestone-based payments, processed bi-weekly." 
                  },
                  { 
                    question: "Can I work part-time?", 
                    answer: "Absolutely! We welcome freelancers with various availability, from part-time to full-time commitments." 
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

export default FreelancerPartnership;