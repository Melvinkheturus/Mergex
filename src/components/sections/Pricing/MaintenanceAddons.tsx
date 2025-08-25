import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Check, Shield, Gauge, Infinity, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MaintenanceAddonCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  ctaText: string;
  isHighlighted?: boolean;
  delay?: number;
  discount?: string;
}

const MaintenanceAddonCard: React.FC<MaintenanceAddonCardProps> = ({
  title,
  description,
  price,
  features,
  ctaText,
  isHighlighted = false,
  delay = 0,
  discount,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
      }}
      className={`relative flex flex-col rounded-2xl ${isHighlighted ? "border-2 border-purple-500 bg-linear-to-b from-purple-950/30 to-background/80" : "border border-border/40 bg-background/30"} p-6 backdrop-blur-sm transition-all duration-300 sm:p-8`}
    >
      {isHighlighted && (
        <motion.div 
          className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-purple-500 to-purple-700 px-4 py-1 text-xs font-medium text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: delay + 0.3, duration: 0.3 }}
        >
          Most Popular
        </motion.div>
      )}
      {discount && (
        <motion.div
          className="absolute top-2 right-2 rounded-full bg-purple-300 px-2 py-0.5 text-xs font-medium text-purple-900"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: delay + 0.3, duration: 0.3 }}
        >
          {discount}
        </motion.div>
      )}
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-xs font-normal text-gray-400">{description}</p>
      </div>
      <div className="mb-6">
        <motion.div 
          className="mt-1 text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
        >
          {price.includes('Enquiry') ? <span>{price}</span> : (
            <>
              <span>{price.replace('/mo', '')}</span><span className="text-base font-normal">/mo</span>
            </>
          )}
        </motion.div>
        {price.includes('Enquiry') ? null : <p className="mt-2 text-sm font-medium text-purple-400">+2 months free</p>}
      </div>
      
      <div className="mt-6 mb-8">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full ${isHighlighted ? "shadow-lg shadow-purple-500/20" : ""}`}
        >
          <Button
              color={isHighlighted ? "primary" : "secondary"}
              className={`group w-full justify-center rounded-xl ${isHighlighted ? "bg-linear-to-r from-purple-500 to-purple-700 text-white" : "bg-white text-gray-900"}`}
            >
            <span className="flex items-center">
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </motion.div>
      </div>

      <ul className="space-y-3 text-sm">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.1 * index + 0.3, duration: 0.3 }}
          >
            {feature.includes('✔') ? null : <Check className="mr-2 h-4 w-4 flex-shrink-0 text-purple-400" />}
            <span className="text-gray-300">
              {feature.includes('✔') ? feature.replace('✔', '') : feature.includes('-') ? <span className="line-through">{feature.replace('-', '')}</span> : feature}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};




const MaintenanceAddons = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="relative py-16 lg:py-24" ref={ref}>
      <div className="mx-auto px-2 sm:px-4 lg:px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >

        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <MaintenanceAddonCard
              title="Basic Care"
              description="Essential updates for small businesses."
              price="₹89/mo"
              ctaText="Get Basic Care"
              features={[
                "Free Domain & SSL (1st year)",
                "Free Business Email (1 account, 1 year)",
                "Hosting available as add-on",
                "Security updates & quarterly uptime checks",
                "Manual backup & restore",
                "Up to 2 content updates/mo"
              ]}
              delay={0.1}
              discount="78% OFF"
            />

            <MaintenanceAddonCard
              title="Growth Care"
              description="Advanced support for growing businesses."
              price="₹199/mo"
              ctaText="Choose Standard"
              isHighlighted={true}
              features={[
                "Free Domain & SSL (1st year)",
                "Free Business Email (3 accounts, 1 year)",
                "Hosting available as add-on",
                "Enhanced AI features included",
                "Security updates & quarterly uptime checks",
                "Automatic backup & restore",
                "Up to 5 content updates/mo",
                "Basic design tweaks"
              ]}
              delay={0.2}
              discount="50% OFF"
            />

            <MaintenanceAddonCard
              title="Premium Care"
              description="Comprehensive management for fast-scaling companies."
              price="₹349/mo"
              ctaText="Go Premium"
              features={[
                "Free Domain & SSL (1st year)",
                "Free Business Email (5 accounts, 1 year)",
                "Hosting included (fast, managed)",
                "Advanced AI features included",
                "Security updates & monthly uptime monitoring",
                "Auto + cloud backup & restore",
                "Up to 10 content updates/mo",
                "Advanced design tweaks",
                "SEO, keyword tracking, detailed analytics",
                "Priority email + WhatsApp support"
              ]}
              delay={0.3}
              discount="30% OFF"
            />

            <MaintenanceAddonCard
              title="Custom Care"
              description="Fully tailored solutions for unique needs."
              price="Enquiry"
              ctaText="Request Custom Plan"
              features={[
                "Custom domain, SSL, email, hosting, AI",
                "Dedicated cloud resources, custom performance",
                "Custom security & uptime monitoring",
                "Custom backup & restore",
                "Unlimited content & design support",
                "Custom SEO & analytics",
                "Dedicated support",
                "Custom feature development",
                "All integrations tailored",
                "Contact for full details"
              ]}
              delay={0.4}
            />
        </div>
      </div>
    </section>
  );
};


export default MaintenanceAddons;