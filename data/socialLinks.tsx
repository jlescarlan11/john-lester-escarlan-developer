import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import contactInfo from "./contactInfo";

const socialLinks = [
  {
    href: `mailto:${contactInfo.email}`,
    icon: SiGmail,
    label: "Email",
  },
  {
    href: contactInfo.github,
    icon: SiGithub,
    label: "GitHub",
  },
  {
    href: contactInfo.linkedin,
    icon: SiLinkedin,
    label: "LinkedIn",
  },
];

export default socialLinks;
