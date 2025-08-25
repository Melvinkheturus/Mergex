import FreelancerPartnership from "@/components/sections/Partner/FreelancerPartnership";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Freelancer Partnership | Mergex",
  description: "Join our growing network of innovators and contribute your skills to groundbreaking projects.",
};

export default function FreelancerPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <FreelancerPartnership />
      <Footer />
    </main>
  );
}