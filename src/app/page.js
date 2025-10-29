import Image from "next/image";
import Navbar from "../components/Navbar.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import AboutSection from "@/components/About.jsx";
import SkillsSection from "@/components/Skill.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
}
