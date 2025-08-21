import { Education } from "@/interface/education";

const EducationData: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of the Cordilleras",
    description:
      "Graduated with a degree in Computer Science, focusing on software development and data structures.",
    image: "https://uc.edu.ph/wp-content/uploads/2022/08/uc-logo.png",
    technologies: ["JavaScript", "Python", "Java"],
    duration: "2015 - 2019",
    status: "Graduated",
  },
  {
    degree: "Master of Science in Information Technology",
    school: "University of the Cordilleras",
    description:
      "Pursuing a Master's degree with a focus on advanced software engineering and machine learning.",
    image: "https://uc.edu.ph/wp-content/uploads/2022/08/uc-logo.png",
    technologies: ["Python", "Machine Learning", "Data Science"],
    duration: "2020 - Present",
    status: "In Progress",
  },
];

export default EducationData;
