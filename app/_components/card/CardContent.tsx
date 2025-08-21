import { CardData } from "@/types/card";
import React from "react";
import RenderTechStackList from "../common/TechStack";
import Link from "next/link";

const CardContent = ({
  data,
  title,
  category,
  links,
}: {
  data: CardData;
  title: string;
  category: string;
  links: { url: string; label: string }[];
}) => {
  return (
    <>
      <header>
        <span className="text-xs uppercase tracking-[0.2em] text-foreground/80 font-light">
          {category}
        </span>
        <h3 className="text-3xl lg:text-4xl font-extralight leading-tight tracking-tight mt-2">
          {title}
        </h3>
      </header>

      <RenderTechStackList technologies={data.technologies} />

      <div className="space-y-4">
        <p className="text-1">{data.description}</p>

        {/* Links */}
        {links.length > 0 && (
          <nav className="flex items-center space-x-6 pt-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-foreground/80 font-light hover:text-foreground transition-colors"
              >
                <span>{link.label}</span>
                <div className="h-px bg-foreground/40 w-4 group-hover:bg-foreground/60 transition-colors" />
              </Link>
            ))}
          </nav>
        )}
      </div>
    </>
  );
};

export default CardContent;
