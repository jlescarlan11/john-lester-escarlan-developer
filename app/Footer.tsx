import { contactData } from "@/data/contact";
import Link from "next/link";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const socialLinks = [
  {
    href: `mailto:${contactData.contactInfo.email}`,
    icon: SiGmail,
    label: "Email",
  },
  {
    href: contactData.contactInfo.github,
    icon: SiGithub,
    label: "GitHub",
  },
  {
    href: contactData.contactInfo.linkedin,
    icon: SiLinkedin,
    label: "LinkedIn",
  },
];

interface FooterProps {
  className?: string;
  variant?: "default" | "mobile";
}

const Footer = ({ className, variant = "default" }: FooterProps = {}) => {
  const baseClasses = "h-28 flex items-center flex-col sm:flex-row";
  const layoutClasses = variant === "mobile" ? "px-8" : "layout";
  const justifyClasses = className || "justify-center sm:justify-between";

  return (
    <footer className={`${layoutClasses} ${baseClasses} ${justifyClasses}`}>
      <p className="text-center text-xs text-foreground/60">
        © {new Date().getFullYear()} John Lester Escarlan. All Rights Reserved.
      </p>

      <nav className="flex gap-4" aria-label="Social media links">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="p-2 rounded-md hover:bg-foreground/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <Icon
              size={18}
              className="text-foreground/40 hover:text-foreground transition-colors"
            />
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
