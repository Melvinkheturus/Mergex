import PartnerLanding from "@/components/sections/Partner/PartnerLanding";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Partner With Us | Mergex",
  description: "Partner with Mergex as a freelancer or business. Let's merge strengths and build together.",
};

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-24"> {/* Add padding to prevent content from being hidden under navbar */}
        <PartnerLanding />
      </div>
      <Footer />
    </main>
  );
}