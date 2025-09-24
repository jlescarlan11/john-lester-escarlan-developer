"use client";
import { Col2, Col3, Grid } from "@/components/layout/grid";
import SectionWrapper from "@/components/common/SectionWrapper";
import Info from "@/components/ui/info";
import SectionHeader from "@/components/ui/sectionHeader";
import AnimatedSection from "@/components/common/AnimatedSection";
import info from "@/data/info";

const AboutSection = () => {
  return (
    <SectionWrapper id="about-me">
      <AnimatedSection>
        <SectionHeader title="About Me" subtitle="Who is John Lester?" />
        <Grid>
          <Col3>
            <div className="space-y-6">
              {info.personal.aboutMe.map((about, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-justify">
                  {about}
                </p>
              ))}
            </div>
          </Col3>
          <Col2>
            <div className="space-y-8">
              <div className="relative group">
                <div className="space-y-3 transition-all duration-300 group-hover:border-foreground/20 bg-background/50">
                  <Info>Summary</Info>
                  <ul
                    className="space-y-4"
                    aria-label="Professional credentials"
                  >
                    {info.personal.summaries.map((summary, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground font-light border-l-2 border-foreground/20 pl-4 text-justify"
                      >
                        {summary}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Col2>
        </Grid>
      </AnimatedSection>
    </SectionWrapper>
  );
};

export default AboutSection;
