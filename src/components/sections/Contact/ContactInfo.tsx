"use client";

import { motion } from "framer-motion";
import SocialConnections from "./SocialConnections";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col space-y-6"
    >

      {/* Contact Details */}
      <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-lg space-y-5">
        <h3 className="text-xl font-semibold text-white mb-4">Quick Contact</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="shrink-0 h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
              <MapPin className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-300">Office Address</p>
              <p className="text-sm text-gray-400 mt-1">123 Innovation Street, Tech District<br />Paris, France 75001</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="shrink-0 h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
              <Mail className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-300">Email</p>
              <a href="mailto:contact@mergex.com" className="text-sm text-purple-400 hover:text-purple-300 transition-colors mt-1 block">contact@mergex.com</a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="shrink-0 h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
              <Phone className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-300">Phone/WhatsApp</p>
              <a href="tel:+15551234567" className="text-sm text-purple-400 hover:text-purple-300 transition-colors mt-1 block">+1 (555) 123-4567</a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="shrink-0 h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center mr-4">
              <MessageSquare className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-300">Support Chat</p>
              <p className="text-sm text-gray-400 mt-1">AI assistant coming soon</p>
            </div>
          </div>
        </div>
      </div>


    </motion.div>
      <SocialConnections />
    </>
  );
};

export default ContactInfo;