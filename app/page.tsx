import Navbar from "@/components/Navbar";
import Concept from "@/components/Concept";
import Hero from "@/components/Hero";
import RoleSelectionPopup from "@/components/RoleSelectionPopup";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-base-200 via-base-100 to-base-200">
      <Navbar />
      <Hero />
      <Concept />
      <RoleSelectionPopup />
    </div>
  );
}