import pages from "@/data/navigationPages";
import React from "react";
import Button from "../common/Button";
import Link from "next/link";

const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
  closeNav: () => void
) => {
  e.preventDefault();

  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  closeNav();
};

const NavigationLinks = ({ closeNav }: { closeNav: () => void }) => {
  return (
    <>
      {pages.map(([id, label]) => (
        <Link
          key={id}
          onClick={(e) => handleNavClick(e, id, closeNav)}
          href={`#${id}`}
          className="group flex flex-col items-center gap-1 py-2"
        >
          <span className="label">{label}</span>
          <div className="w-0 group-hover:w-6 h-px bg-primary transition-all duration-300" />
        </Link>
      ))}
      <Button label="Resume" />
    </>
  );
};

export default NavigationLinks;
