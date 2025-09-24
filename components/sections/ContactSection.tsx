"use client";
import { Col2, Col3, Grid } from "@/components/layout/grid";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/ui/sectionHeader";
import ContactForm from "@/components/forms/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact-me">
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
    </SectionWrapper>
  );
};

export default ContactSection;
