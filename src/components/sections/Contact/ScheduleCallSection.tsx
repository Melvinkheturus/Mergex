import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const ScheduleCallSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-black/30 backdrop-blur-sm rounded-xl p-3 border border-purple-500/20 shadow-lg mt-10"
    >
      <SectionHeader
        title="Schedule a Call"
        subtitle="Book a meeting with us to discuss your project."
      />
      <iframe 
        width="100%" 
        height="750px" 
        src="https://mergex.zohobookings.in/portal-embed#/mergex" 
        frameBorder="0" 
        allowFullScreen
      />
    </motion.div>
  );
};

export default ScheduleCallSection;