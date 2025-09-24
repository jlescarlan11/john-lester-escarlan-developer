import { PropsWithChildren } from "react";

const Section = ({ children }: PropsWithChildren) => {
  return <section className="section-spacing">{children}</section>;
};

export default Section;
