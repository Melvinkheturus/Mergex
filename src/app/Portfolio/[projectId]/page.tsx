"use client";

'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectHero from "@/components/sections/Portfolio/Casestudy/ProjectHero";
import ProjectOverview from "@/components/sections/Portfolio/Casestudy/ProjectOverview";
import Challenge from "@/components/sections/Portfolio/Casestudy/Challenge";
import Solution from "@/components/sections/Portfolio/Casestudy/Solution";
import Results from "@/components/sections/Portfolio/Casestudy/Results";
import VisualShowcase from "@/components/sections/Portfolio/Casestudy/VisualShowcase";
import Testimonial from "@/components/sections/Portfolio/Casestudy/Testimonial";
import NextSteps from "@/components/sections/Portfolio/Casestudy/NextSteps";
import { BackgroundBeams } from "@/components/ui/background-beams";

// Mock project data - in a real app, this would come from an API or CMS
const mockProjects: any = {
  "01": {
    clientName: "Distrokings",
    clientLogo: "/client-logo.svg", // Placeholder, replace with actual logo if available
    headline: "Redefining Growth for a SaaS Startup – 3x Revenue in 6 Months",
    subtext: "A complete digital transformation that exceeded expectations",
    overview: {
      client: "Distrokings is a B2B software company specializing in workflow automation",
      industry: "SaaS / Technology",
      services: ["Branding", "Web Design", "UI/UX", "Development"],
      timeline: "6 months",
      deliverables: ["Brand Strategy", "Website", "Dashboard UI", "Marketing Assets"]
    },
    challenge: "The client needed to stand out in a competitive SaaS market but lacked a strong digital presence and conversion-focused website. Their existing platform had poor user experience, leading to high bounce rates and low conversion.",
    solution: [
      {
        title: "Research & Discovery",
        description: "Conducted comprehensive market analysis and user research to identify opportunities."
      },
      {
        title: "Strategy Development",
        description: "Created a data-driven strategy focused on conversion optimization and user engagement."
      },
      {
        title: "Design & Development",
        description: "Built a modern, responsive website with intuitive UI/UX and clear conversion paths."
      },
      {
        title: "Launch & Iteration",
        description: "Implemented A/B testing and continuous improvement based on user feedback and analytics."
      }
    ],
    results: {
      metrics: [
        { value: "300%", label: "Revenue Increase" },
        { value: "65%", label: "Conversion Rate" },
        { value: "40%", label: "User Engagement" }
      ],
      qualitative: "The new website and brand identity positioned Distrokings as a market leader, attracting enterprise clients and opening new partnership opportunities.",
      beforeAfter: true
    },
    visualShowcase: {
      featuredImage: "https://images.unsplash.com/photo-1615451210353-cbcf249f392a?q=80&w=1200&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1615451210353-cbcf249f392a?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1704677982215-a2248af6009b?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?q=80&w=800&auto=format&fit=crop"
      ]
    },
    testimonial: {
      quote: "Mergex transformed our digital presence. The process was smooth, the team was creative, and the results exceeded expectations. We've seen immediate impact on our bottom line.",
      clientName: "Sarah Johnson",
      clientRole: "CEO, Distrokings",
      clientImage: "/testimonial-avatar.jpg" // Placeholder, replace with actual avatar if available
    }
  },
  "project-1": {
    clientName: "SaaS Innovate",
    clientLogo: "/client-logo.svg",
    headline: "Redefining Growth for a SaaS Startup – 3x Revenue in 6 Months",
    subtext: "A complete digital transformation that exceeded expectations",
    overview: {
      client: "SaaS Innovate is a B2B software company specializing in workflow automation",
      industry: "SaaS / Technology",
      services: ["Branding", "Web Design", "UI/UX", "Development"],
      timeline: "6 months",
      deliverables: ["Brand Strategy", "Website", "Dashboard UI", "Marketing Assets"]
    },
    challenge: "The client needed to stand out in a competitive SaaS market but lacked a strong digital presence and conversion-focused website. Their existing platform had poor user experience, leading to high bounce rates and low conversion.",
    solution: [
      {
        title: "Research & Discovery",
        description: "Conducted comprehensive market analysis and user research to identify opportunities."
      },
      {
        title: "Strategy Development",
        description: "Created a data-driven strategy focused on conversion optimization and user engagement."
      },
      {
        title: "Design & Development",
        description: "Built a modern, responsive website with intuitive UI/UX and clear conversion paths."
      },
      {
        title: "Launch & Iteration",
        description: "Implemented A/B testing and continuous improvement based on user feedback and analytics."
      }
    ],
    results: {
      metrics: [
        { value: "300%", label: "Revenue Increase" },
        { value: "65%", label: "Conversion Rate" },
        { value: "40%", label: "User Engagement" }
      ],
      qualitative: "The new website and brand identity positioned SaaS Innovate as a market leader, attracting enterprise clients and opening new partnership opportunities.",
      beforeAfter: true
    },
    visualShowcase: {
      featuredImage: "/portfolio/featured-image.jpg",
      images: [
        "/portfolio/image-1.jpg",
        "/portfolio/image-2.jpg",
        "/portfolio/image-3.jpg",
        "/portfolio/image-4.jpg"
      ]
    },
    testimonial: {
      quote: "Mergex transformed our digital presence. The process was smooth, the team was creative, and the results exceeded expectations. We've seen immediate impact on our bottom line.",
      clientName: "Sarah Johnson",
      clientRole: "CEO, SaaS Innovate",
      clientImage: "/testimonial-avatar.jpg"
    }
  },
  // Additional projects would be added here
};

export default function CaseStudyPage() {
  const params = useParams();
  const projectId = params.projectId as string;
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll use our mock data
    setTimeout(() => {
      if (mockProjects[projectId]) {
        setProject(mockProjects[projectId]);
      }
      setLoading(false);
    }, 500); // Simulate loading
  }, [projectId]);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-xl text-white">Loading case study...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-xl text-white">Case study not found</div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen bg-black">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <BackgroundBeams />
      
      <Navbar />
      
      <div className="relative z-10">
        <ProjectHero 
          clientName={project.clientName}
          clientLogo={project.clientLogo}
          headline={project.headline}
          subtext={project.subtext}
        />
        
        <ProjectOverview 
          client={project.overview.client}
          industry={project.overview.industry}
          services={project.overview.services}
          timeline={project.overview.timeline}
          deliverables={project.overview.deliverables}
        />
        
        <Challenge text={project.challenge} />
        
        <Solution steps={project.solution} />
        
        <Results 
          metrics={project.results.metrics}
          qualitativeResults={project.results.qualitative}
          showBeforeAfter={project.results.beforeAfter}
        />
        
        <VisualShowcase 
          featuredImage={project.visualShowcase.featuredImage}
          images={project.visualShowcase.images}
        />
        
        <Testimonial 
          quote={project.testimonial.quote}
          clientName={project.testimonial.clientName}
          clientRole={project.testimonial.clientRole}
          clientImage={project.testimonial.clientImage}
        />
        
        <NextSteps />
      </div>
      
      <Footer />
    </main>
  );
}