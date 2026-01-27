import {
  HeroSection,
  EcosystemSnapshot,
  WhatWeBuildSection,
  TrustStrip,
  FinalCTA,
} from '@/modules/homepage';

export default function Home() {
  return (
    <main className="">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="ecosystem">
        <EcosystemSnapshot />
      </div>
      <div id="what-we-build">
        <WhatWeBuildSection />
      </div>
      <div id="trust">
        <TrustStrip />
      </div>
      <div id="cta">
        <FinalCTA />
      </div>
    </main>
  );
}
