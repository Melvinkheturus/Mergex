import CollaborationPartnership from "@/components/sections/Partner/CollaborationPartnership";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Business Collaboration | Mergex",
  description: "We partner with startups, agencies, and enterprises to merge innovation with execution.",
};

export default function CollaborationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <CollaborationPartnership />
      <Footer />
    </main>
  );
}