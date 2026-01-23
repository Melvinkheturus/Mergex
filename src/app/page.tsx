import {
  HeroSection,
  TrustStrip,
  ClaritySection,
  EcosystemSnapshot,
  SolutionsComparison,
  FeaturedWork,
  CaseStudySection,
  ProductSpotlight,
  FinalCTA,
} from '@/modules/homepage';

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection />
      <TrustStrip />
      <ClaritySection />
      <ProductSpotlight />
      <SolutionsComparison />
      <EcosystemSnapshot />
      <FeaturedWork />
      <CaseStudySection />
      <FinalCTA />
    </main>
  );
}
