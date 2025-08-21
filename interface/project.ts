export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  year: string;
  status: string;
  github?: string;
  live?: string;
  featured: boolean;
}
