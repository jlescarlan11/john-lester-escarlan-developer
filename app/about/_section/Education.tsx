import Card from "@/app/_components/card/Card";
import SectionHeader from "@/app/_components/common/SectionHeader";
import EducationData from "@/data/education";

const Education = () => {
  return (
    <section className="layout">
      <SectionHeader label="Where I gained my foundation" />

      <div className="space-y-24">
        {EducationData.map((education, index) => (
          <Card key={index} data={education} />
        ))}
      </div>
    </section>
  );
};

export default Education;
