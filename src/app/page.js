import Image from "next/image";
import Navbar from "../components/Navbar.jsx";
import HeroSection from "@/components/HeroSection.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}
