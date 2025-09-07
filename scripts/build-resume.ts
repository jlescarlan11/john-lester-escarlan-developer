import fs from "fs";
import path from "path";
import latex from "node-latex";
import projectsData from "@/data/projects";
import { techStack } from "@/data/techStack";
import info from "@/data/info";

// Type definitions
interface ProjectData {
  title: string;
  description: string[];
  technologies: string[];
  date?: string;
  link?: {
    github?: string;
    preview?: string;
  };
  featured: boolean;
}

interface EducationData {
  degree: string;
  university: string;
  description: string[];
  skills: string[];
  duration: string;
  image?: string;
}

interface ExperienceData {
  position: string;
  company: string;
  description: string[];
  skills: string[];
  duration: string;
  image?: string;
}

// Technical Skills Categories - Comprehensive list of most used tech tools
const TECHNICAL_SKILLS_CATEGORIES = {
  languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C#",
    "CSharp",
    "C++",
    "C",
    "Go",
    "Rust",
    "PHP",
    "Ruby",
    "Swift",
    "Kotlin",
    "Dart",
    "Scala",
    "R",
    "MATLAB",
    "Shell/Bash",
    "PowerShell",
    "SQL",
    "GraphQL",
    "HTML",
    "CSS",
    "SCSS/Sass",
    "Less",
  ],
  frameworks: [
    // Frontend Frameworks/Libraries
    "React",
    "Angular",
    "Vue.js",
    "Svelte",
    "Next.js",
    "Nuxt.js",
    "Gatsby",
    "Remix",
    "SvelteKit",

    // Backend Frameworks
    "Node.js",
    "Express.js",
    "Nest.js",
    "Fastify",
    "Koa.js",
    "ASP.NET Core",
    ".NET",
    ".NET-core",
    "Spring Boot",
    "Django",
    "Flask",
    "FastAPI",
    "Laravel",
    "Symfony",
    "CodeIgniter",
    "Ruby on Rails",
    "Sinatra",
    "Gin",
    "Fiber",
    "Echo",

    // Mobile Frameworks
    "React Native",
    "Flutter",
    "Ionic",
    "Xamarin",
    "Cordova/PhoneGap",

    // CSS Frameworks/Libraries
    "Tailwind CSS",
    "Bootstrap",
    "Bootstap",
    "Material-UI",
    "Ant Design",
    "Chakra UI",
    "Bulma",
    "Foundation",
    "Semantic UI",
    "Radix UI",
    "Daisy UI",
    "Mantine",
    "Styled Components",
    "Emotion",

    // State Management
    "Redux",
    "MobX",
    "Zustand",
    "Recoil",
    "Vuex",
    "Pinia",

    // Testing Frameworks
    "Jest",
    "Mocha",
    "Cypress",
    "Playwright",
    "Selenium",
    "JUnit",
    "PyTest",
    "PHPUnit",
    "RSpec",
  ],
  tools: [
    // Version Control
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "SVN",

    // IDEs/Editors
    "Visual Studio Code",
    "Visual Studio",
    "IntelliJ IDEA",
    "WebStorm",
    "PyCharm",
    "Eclipse",
    "Xcode",
    "Android Studio",
    "Sublime Text",
    "Vim",
    "Emacs",
    "Atom",

    // Containerization & Orchestration
    "Docker",
    "Kubernetes",
    "Docker Compose",
    "Podman",

    // Cloud Platforms
    "AWS",
    "Azure",
    "Google Cloud Platform",
    "DigitalOcean",
    "Heroku",
    "Vercel",
    "Netlify",
    "Railway",
    "Render",

    // Databases
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "SQLite",
    "SQL Server",
    "Oracle",
    "Cassandra",
    "DynamoDB",
    "Firebase",
    "Supabase",
    "PlanetScale",
    "Neon",

    // Database Tools/ORMs
    "Prisma",
    "TypeORM",
    "Sequelize",
    "Mongoose",
    "Eloquent",
    "Hibernate",
    "SQLAlchemy",
    "Knex.js",
    "Drizzle",

    // API Testing & Development
    "Postman",
    "Insomnia",
    "Thunder Client",
    "Swagger/OpenAPI",
    "GraphQL Playground",
    "Apollo Studio",

    // Build Tools & Bundlers
    "Webpack",
    "Vite",
    "Parcel",
    "Rollup",
    "esbuild",
    "Turbopack",
    "Gulp",
    "Grunt",

    // Package Managers
    "npm",
    "Yarn",
    "pnpm",
    "pip",
    "Maven",
    "Gradle",
    "Composer",
    "NuGet",
    "Cargo",

    // CI/CD
    "GitHub Actions",
    "GitLab CI",
    "Jenkins",
    "CircleCI",
    "Travis CI",
    "Azure DevOps",
    "TeamCity",

    // Monitoring & Analytics
    "Sentry",
    "LogRocket",
    "New Relic",
    "Datadog",
    "Prometheus",
    "Grafana",
    "Google Analytics",
    "Mixpanel",

    // Design Tools
    "Figma",
    "Adobe XD",
    "Sketch",
    "InVision",
    "Canva",
    "Adobe Photoshop",
    "Adobe Illustrator",

    // Communication & Project Management
    "Slack",
    "Discord",
    "Microsoft Teams",
    "Jira",
    "Trello",
    "Asana",
    "Notion",
    "Linear",
    "Monday.com",

    // Development Environments
    "WSL",
    "VMware",
    "VirtualBox",
    "Vagrant",

    // Terminal/Command Line Tools
    "iTerm2",
    "Windows Terminal",
    "Hyper",
    "Oh My Zsh",
    "Powerlevel10k",

    // Authentication & Security
    "Auth0",
    "Firebase Auth",
    "Supabase Auth",
    "Okta",
    "Keycloak",
    "JWT",
    "OAuth",

    // CMS & Headless CMS
    "Strapi",
    "Contentful",
    "Sanity",
    "Ghost",
    "WordPress",
    "Drupal",
    "Directus",

    // E-commerce
    "Shopify",
    "WooCommerce",
    "Magento",
    "Stripe",
    "PayPal",

    // Real-time Communication
    "Socket.io",
    "WebRTC",
    "Pusher",
    "Ably",

    // Search Engines
    "Elasticsearch",
    "Solr",
    "Algolia",
    "MeiliSearch",

    // Message Queues
    "RabbitMQ",
    "Apache Kafka",
    "Amazon SQS",
    "Bull Queue",

    // Documentation
    "GitBook",
    "Notion",
    "Confluence",
    "Docusaurus",
    "VuePress",
    "Storybook",
  ],
};

// Utility functions
const escapeLatex = (str: string): string => {
  if (!str) return "";
  return str
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/&/g, "\\&")
    .replace(/%/g, "\\%")
    .replace(/\$/g, "\\$")
    .replace(/#/g, "\\#")
    .replace(/_/g, "\\_")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}")
    .replace(/"/g, "''")
    .replace(/'/g, "'");
};

const sortTechs = (techs: string[]): string[] =>
  techs.sort((a, b) => a.localeCompare(b));

// Get featured projects from your data
const getFeaturedProjects = (): ProjectData[] => {
  return projectsData.filter((project) => project.featured);
};

// Convert your tech stack to array of names
const getUserTechStack = (): string[] => {
  return techStack.map((tech) => tech.name);
};

const categorizeUserTechs = (userTechs: string[]) => {
  const categorized: Record<string, string[]> = {};

  Object.entries(TECHNICAL_SKILLS_CATEGORIES).forEach(([category, techs]) => {
    const matching = userTechs.filter((tech) => techs.includes(tech));
    if (matching.length > 0) {
      categorized[category] = sortTechs(matching);
    }
  });

  return categorized;
};

// Format professional summary
const formatSummary = (summary: string) => `
\\section{Summary}
\\begin{onecolentry}
    ${escapeLatex(summary)}
\\end{onecolentry}
\\vspace{0.15cm}`;

// Format education with new layout
const formatEducation = (edu: EducationData): string => {
  return `
    \\begin{twocolentry}{\\textbf{${escapeLatex(edu.duration)}}}
    \\textbf{${escapeLatex(edu.degree)}}\\end{twocolentry}
    \\vspace{0.05cm}
    \\begin{twocolentry}{}
    ${escapeLatex(edu.university)}\\end{twocolentry}
    \\vspace{0.10cm}
    \\begin{onecolentry}
        \\begin{highlights}
${edu.description
  .map((d: string) => `            \\item ${escapeLatex(d)}`)
  .join("\n")}
        \\end{highlights}
    \\end{onecolentry}
    \\vspace{0.15cm}`;
};

// Format experience with new layout
const formatExperience = (exp: ExperienceData): string => {
  return `
    \\begin{twocolentry}{\\textbf{${escapeLatex(exp.duration)}}}
    \\textbf{${escapeLatex(exp.position)}}\\end{twocolentry}
    \\vspace{0.05cm}
    \\begin{twocolentry}{}
    ${escapeLatex(exp.company)}\\end{twocolentry}
    \\vspace{0.10cm}
    \\begin{onecolentry}
        \\begin{highlights}
${exp.description
  .map((d: string) => `            \\item ${escapeLatex(d)}`)
  .join("\n")}
        \\end{highlights}
    \\end{onecolentry}
    \\vspace{0.15cm}`;
};

// Format projects with simplified layout
const formatProject = (proj: ProjectData): string => {
  let dateString = "";
  if (proj.date) {
    dateString = proj.date;
  }

  const techsString = proj.technologies
    ? proj.technologies.map(escapeLatex).join(", ")
    : "";

  // Make project title clickable if GitHub link exists
  let projectTitle: string;
  if (proj.link?.github) {
    projectTitle = `\\textbf{\\textcolor{blue}{\\underline{\\hrefWithoutArrow{${escapeLatex(
      proj.link.github
    )}}{${escapeLatex(proj.title)}}}}}`;
  } else {
    projectTitle = `\\textbf{${escapeLatex(proj.title)}}`;
  }

  // Enhanced description formatting with metric placeholders
  const descriptionBullets =
    proj.description && proj.description.length > 0
      ? proj.description
          .map((sentence: string) => {
            return `            \\item ${escapeLatex(sentence)}`;
          })
          .join("\n")
      : `            \\item ${escapeLatex(
          "Project description not available"
        )}`;

  return `    \\begin{twocolentry}{\\textbf{${escapeLatex(dateString)}}}
        ${projectTitle} | \\textit{${techsString}}\\end{twocolentry}
    \\vspace{0.10cm}
    \\begin{onecolentry}
        \\begin{highlights}
${descriptionBullets}
        \\end{highlights}
    \\end{onecolentry}
    \\vspace{0.15cm}`;
};

// Format tech categories - simplified to 3 categories only
const formatTechCategories = (categorized: Record<string, string[]>) => {
  const categoryLabels: Record<string, string> = {
    languages: "Languages",
    frameworks: "Frameworks/Libraries",
    tools: "Tools",
  };

  // Only use the 3 specified categories
  const orderedCategories = ["languages", "frameworks", "tools"];

  return (
    orderedCategories
      .filter(
        (category) => categorized[category] && categorized[category].length > 0
      )
      .map((category) => {
        const label = categoryLabels[category] || escapeLatex(category);
        return `    \\textbf{${label}:} ${categorized[category]
          .map(escapeLatex)
          .join(", ")} \\\\\n    \\vspace{0.05cm}\n`;
      })
      .join("") || "    No technical skills found.\\\\\n"
  );
};

// Extract name from contact info or use a default
const getFullName = (): string => {
  // You might need to add name to your contact info, or extract from somewhere else
  return "John Lester Escarlan"; // Update this based on your data structure
};

// Clean GitHub and LinkedIn URLs
const cleanUrl = (url: string): string => {
  return url.replace(/^https?:\/\//, "");
};

// Main LaTeX template with Harvard standard formatting
const generateLatexContent = (
  projects: ProjectData[],
  categorizedTechs: Record<string, string[]>,
  professionalSummary: string = info.introduction
): string => `
% Resume generated by build-resume.ts - Harvard Standard Format

\\documentclass[11pt, letterpaper]{article}

% Harvard Standard Margins and Page Setup
\\usepackage[top=1in, bottom=1in, left=1in, right=1in]{geometry}

% Essential packages
\\usepackage{titlesec}
\\usepackage{tabularx}
\\usepackage{array}
\\usepackage[dvipsnames]{xcolor}
\\definecolor{primaryColor}{RGB}{0, 0, 0}
\\usepackage{enumitem}
\\usepackage{fontawesome5}
\\usepackage{amsmath}
\\usepackage[pdftitle={${escapeLatex(
  getFullName()
)} - Software Developer},pdfauthor={${escapeLatex(
  getFullName()
)}},pdfcreator={LaTeX with ResumeBuilder},colorlinks=true,colorlinks=true,urlcolor=blue,linkcolor=blue]{hyperref}
\\usepackage[pscoord]{eso-pic}
\\usepackage{calc}
\\usepackage{bookmark}
\\usepackage{lastpage}
\\usepackage{changepage}
\\usepackage{paracol}
\\usepackage{ifthen}
\\usepackage{needspace}
\\usepackage{iftex}

% Font setup
\\ifPDFTeX
    \\input{glyphtounicode}
    \\pdfgentounicode=1
    \\usepackage[T1]{fontenc}
    \\usepackage[utf8]{inputenc}
    \\usepackage{lmodern}
\\fi

% Harvard standard font (Times Roman equivalent)
\\usepackage{times}

% Document formatting
\\raggedright
\\AtBeginEnvironment{adjustwidth}{\\partopsep0pt}
\\pagestyle{empty}
\\setcounter{secnumdepth}{0}
\\setlength{\\parindent}{0pt}
\\setlength{\\topskip}{0pt}
\\setlength{\\columnsep}{0.2cm}
\\pagenumbering{gobble}

% Harvard-style section formatting
\\titleformat{\\section}{\\needspace{4\\baselineskip}\\bfseries\\large\\scshape}{}{0pt}{}[\\vspace{2pt}\\titlerule\\vspace{4pt}]
\\titlespacing{\\section}{0pt}{0.4cm}{0.2cm}

% List formatting
\\renewcommand\\labelitemi{$\\vcenter{\\hbox{$\\bullet$}}$}
\\newenvironment{highlights}{\\begin{itemize}[topsep=0.10cm,parsep=0.10cm,partopsep=0pt,itemsep=0pt,leftmargin=0cm+12pt]}{\\end{itemize}}
\\newenvironment{highlightsforbulletentries}{\\begin{itemize}[topsep=0.10cm,parsep=0.10cm,partopsep=0pt,itemsep=0pt,leftmargin=12pt]}{\\end{itemize}}

% Column environments
\\newenvironment{onecolentry}{\\begin{adjustwidth}{0cm+0.00001cm}{0cm+0.00001cm}}{\\end{adjustwidth}}
\\newenvironment{twocolentry}[2][]{\\onecolentry\\def\\secondColumn{#2}\\setcolumnwidth{\\fill,5.5cm}\\begin{paracol}{2}}{\\switchcolumn \\raggedleft \\secondColumn\\end{paracol}\\endonecolentry}
\\newenvironment{threecolentry}[3][]{\\onecolentry\\def\\thirdColumn{#3}\\setcolumnwidth{,\\fill,5cm}\\begin{paracol}{3}{\\raggedright #2}\\switchcolumn}{\\switchcolumn \\raggedleft \\thirdColumn\\end{paracol}\\endonecolentry}

% Header environment
\\newenvironment{header}{\\setlength{\\topsep}{0pt}\\par\\kern\\topsep\\centering\\linespread{1.2}}{\\par\\kern\\topsep}

\\let\\hrefWithoutArrow\\href

\\begin{document}

% Harvard-style header
\\begin{header}
    
    % First line: Name on left, email and portfolio on right
    \\begin{tabularx}{\\textwidth}{@{}X r@{}}
        \\fontsize{20pt}{20pt}\\selectfont \\textbf{${escapeLatex(
          getFullName()
        )}} & 
        \\fontsize{10pt}{10pt}\\selectfont 
        \\textcolor{blue}{\\underline{\\hrefWithoutArrow{mailto:${escapeLatex(
          info.contact.email
        )}}{${escapeLatex(info.contact.email)}}}} \\quad
        \\textcolor{blue}{\\underline{\\hrefWithoutArrow{tel:${escapeLatex(
          info.contact.phone
        )}}{${escapeLatex(info.contact.phone)}}}}
    \\end{tabularx}
    
    \\vspace{2pt}
    
    % Second line: Address on left, github and linkedin on right
    \\begin{tabularx}{\\textwidth}{@{}X r@{}}
        \\fontsize{10pt}{10pt}\\selectfont ${escapeLatex(
          info.contact.address
        )} & 
        \\fontsize{10pt}{10pt}\\selectfont
        \\textcolor{blue}{\\underline{\\hrefWithoutArrow{${escapeLatex(
          info.contact.github
        )}}{${escapeLatex(cleanUrl(info.contact.github))}}}} \\quad
        \\textcolor{blue}{\\underline{\\hrefWithoutArrow{${escapeLatex(
          info.contact.linkedin
        )}}{${escapeLatex(cleanUrl(info.contact.linkedin))}}}}
    \\end{tabularx}
\\end{header}

\\vspace{8pt}

% Body text size
\\fontsize{11pt}{13pt}\\selectfont

${formatSummary(professionalSummary)}

\\section{Technical Skills}
\\begin{onecolentry}
${formatTechCategories(categorizedTechs)}
\\end{onecolentry}

\\section{Experience}
${info.experiences.map(formatExperience).join("\n")}

\\section{Projects}
${
  projects.length === 0
    ? "No featured projects found."
    : projects.map(formatProject).join("\n")
}

\\section{Education}
${info.educations.map(formatEducation).join("\n")}

\\end{document}
`;

// Main execution
(async () => {
  const projects = getFeaturedProjects();
  const userTechStack = getUserTechStack();
  const categorizedTechs = categorizeUserTechs(userTechStack);
  const latexContent = generateLatexContent(projects, categorizedTechs);

  const outputDir = path.join(__dirname, "../public");
  const texPath = path.join(outputDir, "resume.tex");
  const pdfPath = path.join(outputDir, "john_lester_escarlan_resume.pdf");

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(texPath, latexContent);

  const output = fs.createWriteStream(pdfPath);
  const pdf = latex(latexContent);

  pdf.pipe(output);
  pdf.on("error", (err: Error) => {
    console.error("LaTeX build error:", err);
    process.exit(1);
  });
  pdf.on("finish", () => {
    console.log(
      "Harvard standard resume PDF generated at public/john_lester_escarlan_resume.pdf"
    );
  });
})();
