import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import JourneySection from "@/components/sections/JourneySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import HeroSection from "@/components/sections/HeroSection";
import TechStackSection from "@/components/sections/TechStackSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
