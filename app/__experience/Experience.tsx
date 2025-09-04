import Card from "@/components/layout/card";
import Section from "@/components/layout/section";
import SectionHeader from "@/components/ui/sectionHeader";
import info from "@/data/info";
import React from "react";

const ExperienceSection = () => {
  return (
    <Section>
      <div id="about-me">
        <SectionHeader
          title="Experience"
          subtitle="Where I gained my expertise?"
        />
        <div className="space-y-24">
          {info.experiences.map((experience, index) => (
            <Card
              key={index}
              data={{
                subInfo: experience.company,
                mainInfo: experience.position,
                descriptions: experience.description,
                image: experience.image,
                skills: experience.skills,
                duration: experience.duration,
              }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
