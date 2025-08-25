import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Ripple } from "@/components/ui/ripple";


const PricingCard = ({
  title,
  price,
  features,
  ctaText,
  isHighlighted = false,
  delay = 0,
}: {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
  isHighlighted?: boolean;
  delay?: number;
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
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-sm text-purple-300">Starting from</span>
        </div>
        <motion.div 
          className="mt-1 text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
        >
          {price}
        </motion.div>
      </div>
      <p className="mt-2 text-sm text-gray-400">{features[0]}</p>
      <div className="mt-6 mb-8">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full ${isHighlighted ? "shadow-lg shadow-purple-500/20" : ""}`}
        >
          <Button
              color={isHighlighted ? "primary" : "secondary"}
              className={`group w-full justify-center rounded-xl ${isHighlighted ? "bg-linear-to-r from-purple-500 to-purple-700 text-white" : "bg-background/80 text-white hover:bg-purple-900/30"}`}
            >
            <span className="flex items-center">
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </motion.div>
      </div>
      <ul className="mb-4 space-y-3 text-sm">
        {features.slice(1, features.length - 1).map((feature, index) => ( 
          <motion.li
            key={index}
            className="flex items-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.1 * index + 0.3, duration: 0.3 }}
          >
            <Check className="mr-2 h-4 w-4 flex-shrink-0 text-purple-400" />
            <span className="text-gray-300">{feature}</span>
          </motion.li>
        ))}
      </ul>
      <motion.p
        className="mt-auto text-center text-sm font-medium text-purple-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.5, duration: 0.5 }}
      >
        {features[features.length - 1]}
      </motion.p>
    </motion.div>
  );
};

const WebsitePricing = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section id="website-pricing-section" className="relative py-16 lg:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Flexible Plans for Every Stage of Your Business
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Whether you’re just starting out, growing your brand, or scaling into e-commerce, our website packages are designed to fit your goals. choose the right starting point and build from there.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3 mb-8">           <PricingCard
            title="Starter Website"
            price="₹10,000"
            features={[
              "Best for freelancers, portfolios, local shops & SMEs getting online.",
              "Upto 5 Pages (Home, About, Services, Contact, Gallery/Portfolio)",
              "Contact Form with Email Notification",
              "Social Media Integration (FB, Insta, LinkedIn)",
              "Responsive Design (Mobile + Tablet + Desktop)",
              "Optimized for Speed & SEO basics",
              "Free SSL Setup",
              "Lifetime Validity",
              "Perfect entry-level solution for businesses who just need an online presence."
            ]}
            ctaText="Get Started"
            delay={0.1}
          />

          <PricingCard
            title="Business Website"
            price="₹14,999"
            features={[
              "Best for SMEs, startups, consultancies & service providers.",
              "Everything in Starter Website +",
              "Upto 10 Pages",
              "Blog / CMS Integration (WordPress, Sanity)",
              "WhatsApp Chat Integration",
              "Google Maps Integration",
              "Admin Panel",
              "Admin Dashboard",
              "Advanced Lead Capture Forms",
              "Performance Optimization & Analytics",
              "Lifetime Validity",
              "Best value for businesses that need to generate leads & grow digitally."
            ]}
            ctaText="Build My Website"
            isHighlighted={true}
            delay={0.2}
          />

          <PricingCard
            title="E-Commerce / Web App"
            price="₹25,000"
            features={[
              "Best for online stores, SaaS ideas, and scalable platforms.",
              "Everything in Business Website +",
              "Multi-Page Design (Shop, Product, Checkout, Account, etc.)",
              "Upto 50 Products (expandable later)",
              "Payment Gateway Integration",
              "Order Management Dashboard",
              "Customer Accounts & Profiles",
              "Inventory Management",
              "Speed & Security Optimization",
              "15 Days Backend Support",
              "Lifetime Validity",
              "Sell online with a professional e-commerce system that grows with your business."
            ]}
            ctaText="Launch My Store"
            delay={0.3}
          />





        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-purple-500/20 shadow-lg relative z-10 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Ripple />
        </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Need Something Unique? Mergex Custom solution</h2>
                <p className="text-gray-300 max-w-2xl">Every business is different. If our standard packages don't fit your vision, let's craft something custom together.</p>
              </div>
              
              <Link href="/Contact" className="group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-linear-to-r from-purple-600 to-purple-800 rounded-lg group-hover:from-purple-500 group-hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/30">
                  <span className="relative flex items-center whitespace-nowrap">
                    Get a Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  
                  {/* Glow effect */}
                  <span className="absolute inset-0 overflow-hidden rounded-lg">
                    <span className="absolute inset-0 rounded-lg bg-linear-to-r from-purple-400/0 via-purple-400/40 to-purple-400/0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" style={{ animationDuration: '2s' }} />
                  </span>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsitePricing;