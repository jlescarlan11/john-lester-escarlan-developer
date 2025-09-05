import Card from "@/components/layout/card";
import Section from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import Info from "@/components/ui/info";
import SectionHeader from "@/components/ui/sectionHeader";
import projectsData from "@/data/projects";
import Link from "next/link";

const FeaturedProjectSection = () => {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <Section>
      <div id="featured-projects">
        <SectionHeader title="Featured Project" subtitle="What did I do?" />
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
        <div className="section-spacing space-y-8">
          <Info>More Projects</Info>

          <Button variant="outline" size="lg">
            <Link href={"/projects"}>View All Projects</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProjectSection;
