// Organization constants
export const ORGANIZATIONS = {
  UNIVERSITY_PHILIPPINES: "University of the Philippines",
  WINDS_GATE: "Wind's Gate Philippines",
  ALLIANCE_SOFTWARE: "Alliance Software Inc.",
  BAYOA_ANALYTICS: "Bayoa Analytics",
} as const;

// URL constants
export const URLS = {
  WINDS_GATE_LOGO: "https://windsgate.com/img/windsgate-logo2.png",
  ALLIANCE_LOGO: "https://alliance.com.ph/assets/img/logo.svg",
  BAYOA_LOGO: "https://media.licdn.com/dms/image/v2/D560BAQF67sEYS3jNFQ/company-logo_200_200/company-logo_200_200/0/1728289592575?e=1759968000&v=beta&t=4bODcbr8mYYtVzw_InALd7ddD4ewBOzvEwGW2vs57Rc",
  UP_CS_LOGO: "https://cs.upcebu.edu.ph/wp-content/uploads/2020/12/DCS-Logo-Full.png",
  UP_MATH_LOGO: "https://cs.upcebu.edu.ph/wp-content/uploads/2024/12/math-program.jpg",
} as const;

// Skill categories
export const SKILL_CATEGORIES = {
  PROGRAMMING: ['java', 'c#', 'typeScript', 'javascript', 'c/c++', 'python', 'r'],
  FRAMEWORKS: ['asp.net', 'react'],
  DATABASE: ['sql'],
  SOFT_SKILLS: ['problem solving', 'code review', 'project management', 'team collaboration'],
  TECHNICAL: ['system monitoring', 'log analysis', 'troubleshooting', 'full-stack development', 'software engineering', 'data structures', 'statistical analysis', 'mathematical modeling'],
  TOOLS: ['slack'],
} as const;

// Date formatting helper
export const formatDuration = (startDate: string, endDate?: string, isCurrent: boolean = false): string => {
  if (isCurrent) return `${startDate} - Present`;
  if (endDate) return `${startDate} - ${endDate}`;
  return startDate;
};
