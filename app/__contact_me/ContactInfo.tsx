import Info from "@/components/ui/info";
import info from "@/data/info";
import Link from "next/link";
import {
  SiGithub,
  SiGmail,
  SiGooglemessages,
  SiLinkedin,
  SiMapbox,
} from "react-icons/si";

// Contact info component
const ContactInfo = () => {
  const contactItems = [
    {
      icon: SiGmail,
      label: "Email",
      value: info.contact.email,
      href: `mailto:${info.contact.email}`,
    },
    {
      icon: SiGooglemessages,
      label: "Phone",
      value: info.contact.phone,
      href: `tel:${info.contact.phone}`,
    },
    {
      icon: SiMapbox,
      label: "Location",
      value: `${info.contact.address}`,
    },
    {
      icon: SiGithub,
      label: "GitHub",
      value: "View Profile",
      href: info.contact.github,
    },
    {
      icon: SiLinkedin,
      label: "LinkedIn",
      value: "Connect",
      href: info.contact.linkedin,
    },
  ];

  return (
    <div>
      <Info>Get in Touch</Info>

      <div className="space-y-6 mt-6">
        {contactItems.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="flex-shrink-0 p-2 rounded-md bg-foreground/5 border border-foreground/10">
              <Icon className="w-8 h-8 text-foreground/60" />
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/80 font-light">
                {label}
              </span>
              {href ? (
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-light focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                >
                  {value}
                </Link>
              ) : (
                <span className="block text-sm text-muted-foreground hover:text-foreground font-light">
                  {value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
