import Card from "@/components/layout/card";
import Section from "@/components/layout/section";
import SectionHeader from "@/components/ui/sectionHeader";
import info from "@/data/info";

const EducationSection = () => {
  return (
    <Section>
      <div id="education">
        <SectionHeader
          title="Education"
          subtitle="Where I gained my foundation?"
        />
        <div className="space-y-24">
          {info.educations.map((education, index) => (
            <Card
              key={index}
              data={{
                subInfo: education.university,
                mainInfo: education.degree,
                descriptions: education.description,
                image: education.image,
                skills: education.skills,
                duration: education.duration,
              }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default EducationSection;
