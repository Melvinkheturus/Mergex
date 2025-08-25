"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";

type SocialLink = {
  name: string;
  icon: React.ReactElement;
  url: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="h-6 w-6" />,
    url: "https://linkedin.com"
  },
  {
    name: "Twitter",
    icon: <FaTwitter className="h-6 w-6" />,
    url: "https://twitter.com"
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="h-6 w-6" />,
    url: "https://www.instagram.com/mergextech?igsh=bzlvYmNiOTEwZDhs"
  }
];

const SocialConnections = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <SectionHeader
            title="Connect With Us"
            subtitle="Follow us on social media to stay updated."
          />
          
          <div className="flex items-center justify-center space-x-6 md:space-x-8">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center h-12 w-12 rounded-full bg-black/40 border border-purple-500/30 transition-all duration-300 hover:bg-black/60 hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
                    {social.icon}
                  </span>
                  
                  {/* Glow ring effect on hover */}
                  <span className="absolute inset-0 rounded-full ring-2 ring-purple-500/0 group-hover:ring-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialConnections;