import { projectsData } from "../../data/project";
import Card from "../_components/card/Card";
import SectionHeader from "../_components/common/SectionHeader";
import StyledLink from "../_components/common/StyledLink";

const FeaturedProject = () => {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <section className="layout">
      <SectionHeader label="What I have been doing" />

      <div className="space-y-24">
        {featuredProjects.map((project) => (
          <Card key={project.id} data={project} />
        ))}
      </div>

      <div className="mt-16">
        <StyledLink label="View all Projects" href="/projects" />
      </div>
    </section>
  );
};

export default FeaturedProject;
