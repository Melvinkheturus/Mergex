import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const PricingHero = () => {return (
    <div className="bg-background relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FlickeringGrid 
          className="relative inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          squareSize={8}
          gridGap={6}
          color="#A855F7" // Purple color
          maxOpacity={0.2}
          flickerChance={0.1}
          height={window.innerHeight}
          width={window.innerWidth}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:pt-24 lg:pb-32">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 flex justify-center"
          >
            <div className="border-border bg-background/80 inline-flex items-center rounded-full border px-3 py-1 text-sm backdrop-blur-sm">
              <span className="text-purple-300">
                Affordable | Scalable | Hassle-Free
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="from-primary/10 via-foreground/85 to-foreground/50 bg-linear-to-tl bg-clip-text text-center text-4xl tracking-tighter text-balance text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Transparent. Flexible. Transparent Pricing.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-purple-300 mx-auto mt-6 max-w-2xl text-center text-lg"
          >
            We believe great websites don&apos;t need complicated pricing. At Mergex, you&apos;ll always know where you stand no hidden costs, no confusion. Just clear packages to get started, and flexibility to grow.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="shadow-lg shadow-purple-500/20 transition-all duration-300"
            >
              <Link href="#website-pricing-section">
                <Button
                  size="lg"
                  className="group rounded-xl bg-linear-to-tl from-purple-400 to-purple-600 text-white font-semibold relative overflow-hidden px-6"
                >
                <span className="relative z-10 flex items-center">
                  Compare Plans
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;