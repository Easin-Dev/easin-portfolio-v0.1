import AboutSection from "@/components/About";
import AgencyServicesSection from "@/components/AgencyServices.jsx";
import ContactSection from "@/components/Contact.jsx";
import EducationSection from "@/components/Education";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import SkillsSection from "@/components/Skill";
import TestimonialsSection from "@/components/Testimonials.jsx";
import WorkflowSection from "@/components/WorkflowSection.jsx";

export default function Home() {
  return (
    <div className="relative">
      
      <HeroSection />
      <AboutSection />
       <EducationSection/>
      <SkillsSection />
      <ProjectsSection />
      <AgencyServicesSection />
      <TestimonialsSection />
      <WorkflowSection />
        <ContactSection />
    </div>
  );
}
