import AboutMeSection from "./__about_me/AboutMe";
import EducationSection from "./__education/Education";
import ExperienceSection from "./__experience/Experience";
import HeroSection from "./__hero/Hero";

export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutMeSection />
      <EducationSection />
      <ExperienceSection />
    </>
  );
}
