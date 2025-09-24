import { PropsWithChildren } from "react";
import Section from "./Section";

interface SectionWrapperProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

const SectionWrapper = ({
  children,
  id,
  className = "",
}: SectionWrapperProps) => {
  return (
    <Section>
      <div id={id} className={className}>
        {children}
      </div>
    </Section>
  );
};

export default SectionWrapper;
