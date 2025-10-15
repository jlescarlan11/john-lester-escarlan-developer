export interface TechStackItem {
  name: string;
  href: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export const techStackData: TechStackItem[] = [
  { name: "TypeScript", href: "https://icon.icepanel.io/Technology/svg/TypeScript.svg", category: 'frontend' },
  { name: "React", href: "https://icon.icepanel.io/Technology/svg/React.svg", category: 'frontend' },
  { name: "Next.js", href: "https://icon.icepanel.io/Technology/svg/Next.js.svg", category: 'frontend' },
  { name: "Java", href: "https://icon.icepanel.io/Technology/svg/Java.svg", category: 'backend' },
  { name: "Spring Boot", href: "https://icon.icepanel.io/Technology/svg/Spring.svg", category: 'backend' },
  { name: "PostgreSQL", href: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg", category: 'database' },
  { name: "AWS", href: "https://icon.icepanel.io/Technology/svg/AWS.svg", category: 'tools' },
  { name: "Docker", href: "https://icon.icepanel.io/Technology/svg/Docker.svg", category: 'tools' },
];

export const getTechStackByCategory = (category: TechStackItem['category']) => 
  techStackData.filter(tech => tech.category === category);

export const getCuratedTechStack = () => techStackData;