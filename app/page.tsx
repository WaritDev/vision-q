import Navbar from "../components/Navbar";
import Apis from "../components/Apis";
import Concept from "../components/Concept";
import Footer from "../components/Footer";
import Map from "../components/Map";
import Hero from "../components/Hero";
import Display from "../components/Display"
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