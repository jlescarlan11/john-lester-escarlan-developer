import { CardData } from "@/types/card";

export function getCardInfo(data: CardData) {
  // Project
  if ("title" in data) {
    return {
      title: data.title,
      category: data.category,
      duration: data.year,
      links: [
        ...(data.github ? [{ url: data.github, label: "View Code" }] : []),
        ...(data.live ? [{ url: data.live, label: "Live Demo" }] : []),
      ],
    };
  }

  // Education
  if ("degree" in data) {
    return {
      title: data.degree,
      category: data.school,
      duration: data.duration,
      links: [],
    };
  }

  // Experience
  return {
    title: data.position,
    category: data.company,
    duration: data.duration,
    links: [],
  };
}
