import AboutMeSection from "./__about_me/AboutMe";
import ContactMeSection from "./__contact_me/ContactMe";
import EducationSection from "./__education/Education";
import ExperienceSection from "./__experience/Experience";
import FeaturedProjectSection from "./__featured_project/FeaturedProject";
import HeroSection from "./__hero/Hero";
import TechstackSection from "./__tech_stack/Techstack";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <EducationSection />
      <ExperienceSection />
      <TechstackSection />
      <FeaturedProjectSection />
      <ContactMeSection />
    </>
  );
}
