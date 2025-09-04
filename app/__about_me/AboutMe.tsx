import { Col2, Col3, Grid } from "@/components/layout/grid";
import Section from "@/components/layout/section";
import Info from "@/components/ui/info";
import SectionHeader from "@/components/ui/sectionHeader";
import info from "@/data/info";
import React from "react";

const AboutMeSection = () => {
  return (
    <Section>
      <div id="about-me">
        <SectionHeader title="About Me" subtitle="Who is John Lester?" />
        <Grid>
          <Col3>
            <div className="flex flex-col gap-4">
              {info.aboutMe.map((about, i) => (
                <p key={i}>{about}</p>
              ))}
            </div>
          </Col3>
          <Col2>
            <div className="space-y-8">
              <div className="relative group">
                <div className="space-y-3 transition-all duration-300 group-hover:border-foreground/20 bg-background/50">
                  <Info>Credentials</Info>
                  <ul
                    className="space-y-4"
                    aria-label="Professional credentials"
                  >
                    {info.credentials.map((credential, index) => (
                      <li
                        key={index}
                        className="text-sm text-muted-foreground font-light border-l-2 border-foreground/20 pl-4"
                      >
                        {credential}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Col2>
        </Grid>
      </div>
    </Section>
  );
};

export default AboutMeSection;
