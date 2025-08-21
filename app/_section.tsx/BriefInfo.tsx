"use client";
import AboutSection from "../_components/about/AboutSection";
import CredentialCard from "../_components/about/CredentialCard";
import SectionHeader from "../_components/common/SectionHeader";
import TechStackSlider from "../_components/tech_stack/TechStackSlider";

const BriefInfo = () => {
  return (
    <section className="layout">
      <SectionHeader label="Let's Collaborate" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-start">
        <article className="lg:col-span-3">
          <AboutSection />
        </article>
        <aside className="lg:col-span-2 space-y-8">
          <CredentialCard />
        </aside>
      </div>

      <TechStackSlider />
    </section>
  );
};

export default BriefInfo;
