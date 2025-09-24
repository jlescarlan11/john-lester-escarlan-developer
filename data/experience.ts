import { ExperienceEntry } from '../interfaces/personalInfo';
import { ORGANIZATIONS, URLS, SKILL_CATEGORIES } from './constants';

export const experienceEntries: ExperienceEntry[] = [
  {
    type: "experience",
    title: "Software Monitoring Engineer",
    organization: ORGANIZATIONS.WINDS_GATE,
    description: [
      "Reduced system downtime by 30% through proactive monitoring and early issue detection across multiple enterprise applications.",
      "Resolved critical database failures and server crashes within 15 minutes average response time, minimizing business impact.",
    ],
    image: URLS.WINDS_GATE_LOGO,
    skills: [
      SKILL_CATEGORIES.PROGRAMMING[0], // java
      SKILL_CATEGORIES.TECHNICAL[0], // system monitoring
      SKILL_CATEGORIES.TECHNICAL[1], // log analysis
      SKILL_CATEGORIES.TECHNICAL[2], // troubleshooting
      SKILL_CATEGORIES.TOOLS[0], // slack
    ],
    duration: "June 2025 - Present",
    startDate: "2025-06-01",
    current: true,
  },
  {
    type: "experience",
    title: "Software Engineer Intern",
    organization: ORGANIZATIONS.ALLIANCE_SOFTWARE,
    description: [
      "Delivered 3 production-ready features using C# and ASP.NET, improving application functionality and user experience for enterprise clients",
      "Enhanced code quality by 40% through systematic code review processes and implementation of best practices across development teams",
    ],
    image: URLS.ALLIANCE_LOGO,
    skills: [
      SKILL_CATEGORIES.PROGRAMMING[1], // c#
      SKILL_CATEGORIES.FRAMEWORKS[0], // asp.net
      SKILL_CATEGORIES.SOFT_SKILLS[1], // code review
      SKILL_CATEGORIES.SOFT_SKILLS[2], // project management
      SKILL_CATEGORIES.SOFT_SKILLS[3], // team collaboration
    ],
    duration: "June - July 2025",
    startDate: "2025-06-01",
    current: false,
  },
  {
    type: "experience",
    title: "Full-Stack Developer Intern",
    organization: ORGANIZATIONS.BAYOA_ANALYTICS,
    description: [
      "Optimized database performance by 50% through strategic schema redesign and query optimization, reducing data retrieval time significantly",
      "Built 5 RESTful API endpoints for CRM functionality, improving data accessibility and system integration capabilities",
    ],
    image: URLS.BAYOA_LOGO,
    skills: [
      SKILL_CATEGORIES.PROGRAMMING[2], // typeScript
      SKILL_CATEGORIES.FRAMEWORKS[1], // react
      SKILL_CATEGORIES.TECHNICAL[3], // full-stack development
    ],
    duration: "September - November 2024",
    startDate: "2024-09-01",
    current: false,
  },
];
