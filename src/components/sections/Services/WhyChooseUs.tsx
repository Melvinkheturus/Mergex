"use client";

import { cn } from "@/lib/utils";
import SectionHeader from "@/components/ui/SectionHeader";
import { 
  IconRocket,
  IconSparkles,
  IconCurrencyDollar,
  IconCloudCheck,
  IconLink,
  IconUsers,
  IconShieldLock,
  IconBolt,
} from "@tabler/icons-react";

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseUsProps {
  title?: string;
  subtitle?: string;
  features?: Feature[] | null;
}

// Map of icon names to Tabler icon components
const iconMap: Record<string, React.ReactNode> = {
  IconRocket: <IconRocket />,
  IconSparkles: <IconSparkles />,
  IconCurrencyDollar: <IconCurrencyDollar />,
  IconCloudCheck: <IconCloudCheck />,
  IconLink: <IconLink />,
  IconUsers: <IconUsers />,
  IconShieldLock: <IconShieldLock />,
  IconBolt: <IconBolt />,
};

// Default features if none are provided
const defaultFeatures = [
  {
    title: "Built for Ambition",
    description:
      "Designed for entrepreneurs, creators, and businesses ready to grow. Whether your dream is big or just getting started.",
    icon: "IconRocket",
  },
  {
    title: "Effortless Experience",
    description:
      "Modern, intuitive interfaces that make managing your digital presence as easy as it should be. No tech headaches, no steep learning curve.",
    icon: "IconSparkles",
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear, honest “starting at” prices. No hidden fees, no surprises. Choose flexibility, only pay for what you need.",
    icon: "IconCurrencyDollar",
  },
  {
    title: "99.9% Uptime Reliability",
    description: "Your website is your business. Trust Mergex for stability that keeps you online, always.",
    icon: "IconCloudCheck",
  },
  {
    title: "Seamless Integrations",
    description: "All the tools you use, connected. Effortlessly plug into CRMs, payment gateways, email marketing, and more.",
    icon: "IconLink",
  },
  {
    title: "Expert Support",
    description:
      "You’re never alone. Our expert team is here when you need us before, during, and after launch.",
    icon: "IconUsers",
  },
    {
      title: "Secure & Future-Proof",
      description:
        "Best-in-class security and the foundation for future AI-powered business tools, so you’re prepared for what’s next.",
      icon: "IconShieldLock",
    },
    {
      title: "Fast Launch & Updates",
      description:
        "Get your website live quickly and enjoy hassle free updates anytime. Speed meets reliability. Your growth never waits.",
      icon: "IconBolt",
    },
  ];

export function WhyChooseUs({ features = defaultFeatures }: WhyChooseUsProps) {
  const featuresToMap = features || [];
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="text-center mb-12">
        <SectionHeader
          title="Why Choose Us?"
          subtitle="Discover the Mergex difference. We combine cutting-edge technology with unparalleled support to help your business thrive."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 mx-auto">
      {Array.isArray(featuresToMap) && featuresToMap.map((feature, index) => (
        <Feature 
          key={feature.title} 
          title={feature.title}
          description={feature.description}
          icon={iconMap[feature.icon] || iconMap.IconHeart}
          index={index} 
        />
      ))}
     </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
  <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-purple-500/20 to-transparent pointer-events-none" />
)}
{index >= 4 && (
  <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-purple-500/20 to-transparent pointer-events-none" />
)}

      <div className="mb-4 relative z-10 px-4 text-white">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-4">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-purple-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-white max-w-xs relative z-10 px-4">
        {description}
      </p>
    </div>
  );
};