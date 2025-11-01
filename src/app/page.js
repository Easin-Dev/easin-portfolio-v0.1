import Image from "next/image";
import Navbar from "../components/Navbar.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import AboutSection from "@/components/About.jsx";
import SkillsSection from "@/components/Skill.jsx";
import ProjectsSection from "@/components/Projects.jsx";
import AgencyServicesSection from "@/components/AgencyServices.jsx";
import TestimonialsSection from "@/components/Testimonials.jsx";
import WorkflowSection from "@/components/WorkflowSection.jsx";
import ContactSection from "@/components/Contact.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AgencyServicesSection />
      <TestimonialsSection />
      <WorkflowSection />
      <ContactSection />
    </div>
  );
}
