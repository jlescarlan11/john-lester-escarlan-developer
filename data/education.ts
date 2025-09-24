import { EducationEntry } from '../interfaces/personalInfo';
import { ORGANIZATIONS, URLS, SKILL_CATEGORIES } from './constants';

export const educationEntries: EducationEntry[] = [
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: ORGANIZATIONS.UNIVERSITY_PHILIPPINES,
    description: [
      "Completed comprehensive coursework in software engineering, data structures, algorithms, and system design",
      "Gained practical experience in system analysis and software development methodologies",
    ],
    image: URLS.UP_CS_LOGO,
    skills: [
      SKILL_CATEGORIES.PROGRAMMING[0], // java
      SKILL_CATEGORIES.PROGRAMMING[3], // javascript
      SKILL_CATEGORIES.PROGRAMMING[4], // c/c++
      SKILL_CATEGORIES.DATABASE[0], // sql
      SKILL_CATEGORIES.TECHNICAL[4], // software engineering
      SKILL_CATEGORIES.TECHNICAL[5], // data structures
    ],
    duration: "August 2025 - Present",
    startDate: "2025-08-01",
    current: true,
  },
  {
    type: "education",
    title: "Bachelor of Science in Mathematics",
    organization: ORGANIZATIONS.UNIVERSITY_PHILIPPINES,
    description: [
      "Developed strong analytical thinking and systematic problem-solving approach through advanced mathematical concepts and statistical analysis",
      "Gained programming experience in Python and R for computational mathematics, providing strong technical foundation for software engineering transition",
    ],
    image: URLS.UP_MATH_LOGO,
    skills: [
      SKILL_CATEGORIES.SOFT_SKILLS[0], // problem solving
      SKILL_CATEGORIES.TECHNICAL[6], // statistical analysis
      SKILL_CATEGORIES.PROGRAMMING[5], // python
      SKILL_CATEGORIES.PROGRAMMING[6], // r
      SKILL_CATEGORIES.TECHNICAL[7], // mathematical modeling
    ],
    duration: "September 2022 - June 2025",
    startDate: "2022-09-01",
    current: false,
  },
];
