"use client";

import { Col2, Col3, Grid } from "@/components/layout/grid";
import Section from "@/components/layout/section";
import SectionHeader from "@/components/ui/sectionHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

// Main component
const ContactMeSection = () => {
  return (
    <Section>
      <div id="contact-me">
        <SectionHeader
          title="Get in Touch with Me"
          subtitle="Want to Connect?"
        />
        <Grid>
          <Col3>
            <ContactForm />
          </Col3>
          <Col2>
            <ContactInfo />
          </Col2>
        </Grid>
      </div>
    </Section>
  );
};

export default ContactMeSection;
