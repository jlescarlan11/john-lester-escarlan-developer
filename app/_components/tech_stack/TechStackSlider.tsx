import { techStack } from "@/data/techStack";
import TechStackItem from "./TechStackItem";
import InfoText from "../common/InfoText";
import StyledLink from "../common/StyledLink";

export const ANIMATION_CONFIG = {
  DUPLICATION_COUNT: 4,
  SLIDE_DURATION: 15,
  HOVER_TRANSITION: 300,
} as const;

const TechStackSlider = () => {
  const duplicatedTechStack = Array(ANIMATION_CONFIG.DUPLICATION_COUNT)
    .fill(techStack)
    .flat();

  return (
    <div className="layout !px-0">
      <div
        className="relative overflow-hidden"
        role="region"
        aria-label="Technology stack showcase"
      >
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex space-x-8 animate-tech-slide">
          {duplicatedTechStack.map((tech, index) => (
            <TechStackItem
              key={`${tech.name}-${index}`}
              tech={tech}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="mt-16 flex gap-12 justify-between flex-col sm:flex-row items-start">
        <InfoText>
          Now, {techStack.length} technologies for versatility.
        </InfoText>
        <StyledLink label="View All Technologies" href="/tech-stack" />
      </div>
    </div>
  );
};

export default TechStackSlider;
