
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/sections/Homepage/HomeHero";
import CoreServices from "@/components/sections/Homepage/CoreServices";
import FeaturedProject from "@/components/sections/Homepage/FeaturedProject";
import Testimonials from "@/components/sections/Homepage/Testimonials";
import { defineQuery, sanityFetch } from "@sanity/lib/live";

// Define types for the home data
// Import the Feature type from WhyChooseUs component
import { Feature } from "@/components/sections/Services/WhyChooseUs";
// Import the Stat type from FeaturedProject component
// import { Stat } from "@/components/sections/Homepage/FeaturedProject"; // Stat is not used in the new component

interface HomeData {
  _id?: string;
  heroBadgeText?: string;
  heroTitle?: string;
  heroDescription?: string;
  primaryCTAText?: string;
  primaryCTALink?: string;
  secondaryCTAText?: string;
  secondaryCTALink?: string;
  coreServicesTitle?: string;
  coreServicesSubtitle?: string;
  whyChooseUsTitle?: string;
  whyChooseUsSubtitle?: string;
  whyChooseUsFeatures?: Feature[];
  featuredProjectTitle?: string;
featuredProjectSubtitle?: string;
featuredProject?: {
    beforeImage: string;
    beforeLabel: string;
    afterImage: string;
    afterLabel: string;
    resultsSummary: string;
    ctaText: string;
    ctaLink: string;
  };
  testimonialsTitle?: string;
  testimonialsSubtitle?: string;
  callToActionTitle?: string;
  callToActionDescription?: string;
  callToActionButtonText?: string;
  callToActionButtonLink?: string;
}

// Enable ISR with a revalidation period of 60 seconds
// This allows for caching while still keeping content fresh
export const revalidate = 60;

// Define the home query using the type-safe defineQuery function
const homeQuery = defineQuery(`*[_type == "home"][0]{
  _id,
  heroBadgeText,
  heroTitle,
  heroDescription,
  primaryCTAText,
  primaryCTALink,
  secondaryCTAText,
  secondaryCTALink,
  coreServicesTitle,
  coreServicesSubtitle,
  whyChooseUsTitle,
  whyChooseUsSubtitle,
  "whyChooseUsFeatures": whyChooseUsFeatures[]->{\n    title,
    description,
    icon
  },
  featuredProjectTitle,
featuredProjectSubtitle,
"featuredProject": featuredProject->{\n    beforeImage,
    beforeLabel,
    afterImage,
    afterLabel,
    stats[]{
      value,
      label
    },
    resultsSummary,
    ctaText,
    ctaLink
  },
  testimonialsTitle,
  testimonialsSubtitle,
  callToActionTitle,
  callToActionDescription,
  callToActionButtonText,
  callToActionButtonLink
}`);

// Fetch home data using the sanityFetch function
async function getHomeData() {
  try {
    // sanityFetch automatically handles draft mode
    return await sanityFetch<HomeData>({
      query: homeQuery,
      tags: ['home'],
      revalidate: 60 // Cache for 60 seconds
    });
  } catch (error) {
    console.error('Error fetching home data:', error);
    return { data: {} as HomeData };
  }
}

// Add support for preview mode
// Using a type that's compatible with Next.js 15's expectations
type SearchParamsInput = { [key: string]: string | string[] | undefined };

export default async function Home({ searchParams }: { searchParams?: SearchParamsInput }) {
  // Get data with preview mode automatically handled by sanityFetch
  const { data: homeData = {} as HomeData } = await getHomeData();
  
  return (
    <div className="relative min-h-screen text-white" style={{
        background: "radial-gradient(circle at center, rgba(43, 11, 69, 0.3) 0%, rgba(26, 11, 46, 0.2) 30%, rgba(10, 10, 10, 1) 70%)"
      }}>
      <Navbar />
      <HomeHero 
        badgeText={homeData?.heroBadgeText}
        title={homeData?.heroTitle}
        description={homeData?.heroDescription}
        primaryCTAText={homeData?.primaryCTAText}
        primaryCTALink={homeData?.primaryCTALink || ''}
        secondaryCTAText={homeData?.secondaryCTAText}
        secondaryCTALink={homeData?.secondaryCTALink || ''}
      />
      <CoreServices 
        title={homeData?.coreServicesTitle}
        subtitle={homeData?.coreServicesSubtitle}
      />
      <FeaturedProject
      />
      <Testimonials 
        title={homeData?.testimonialsTitle}
        subtitle={homeData?.testimonialsSubtitle}
      />
      <Footer />
    </div>
  );
}
