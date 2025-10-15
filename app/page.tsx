import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import JourneySection from "@/components/sections/JourneySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import HeroSection from "@/components/sections/HeroSection";
import TechStackSection from "@/components/sections/TechStackSection";
import TrustSection from "@/components/sections/TrustSection";

export default function Home() {
  return (
    <>
      <section aria-label="Hero section" role="banner">
        <HeroSection />
      </section>
      <section aria-label="About section" role="region">
        <AboutSection />
      </section>
      <section aria-label="Journey section" role="region">
        <JourneySection />
      </section>
      <section aria-label="Tech stack section" role="region">
        <TechStackSection />
      </section>
      <section aria-label="Projects section" role="region">
        <ProjectsSection />
      </section>
      <section aria-label="Contact section" role="region">
        <ContactSection />
      </section>
    </>
  );
}
