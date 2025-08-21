import AboutSection from "../_components/about/AboutSection";
import CredentialCard from "../_components/about/CredentialCard";
import Header from "../_components/common/Header";
import Education from "./_section/Education";

const AboutPage = () => {
  return (
    <div>
      <Header label="About Me" />
      <section className="layout">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-start">
          <aside className="lg:col-span-2 space-y-8">
            <CredentialCard />
          </aside>
          <article className="lg:col-span-3">
            <AboutSection />
          </article>
        </div>
      </section>
      <Education />
    </div>
  );
};

export default AboutPage;
