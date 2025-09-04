import Card from "@/components/layout/card";
import Section from "@/components/layout/section";
import SectionHeader from "@/components/ui/sectionHeader";
import projectsData from "@/data/projects";

const FeaturedProjectSection = () => {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <Section>
      <div id="featured-project">
        <SectionHeader title="Featued Project" subtitle="What did I do?" />
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              data={{
                subInfo: project.category,
                mainInfo: project.title,
                descriptions: project.description,
                image: project.image,
                skills: project.technologies,
                duration: project.date,
                links: project.link,
              }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProjectSection;
