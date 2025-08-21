import Button from "../common/Button";
import InfoText from "../common/InfoText";
import SectionHeader from "../common/SectionHeader";

const HeroIntroduction = () => {
  return (
    <>
      <SectionHeader label="Hello, I am" classname="!mb-6" />
      <div className="space-y-8">
        <h1 className="">John Lester Escarlan</h1>
        <p className="border-l-2 border-foreground/20 pl-4 text-1">
          A passionate developer with strong foundation in mathematics and
          computer science, building web applications with focus on clean,
          maintainable code.
        </p>
      </div>
      <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4">
        <Button label="Resume" />
        <Button label="Contact Me" />
        <InfoText>Available for collaboration</InfoText>
      </div>
    </>
  );
};

export default HeroIntroduction;
