import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import info from "./info";

const socialLinks = [
  {
    href: `mailto:${info.contact.email}`,
    icon: SiGmail,
    label: "Email",
  },
  {
    href: info.contact.github,
    icon: SiGithub,
    label: "GitHub",
  },
  {
    href: info.contact.linkedin,
    icon: SiLinkedin,
    label: "LinkedIn",
  },
];

export default socialLinks;
