import CardInterface from "@/interfaces/cardInterface";
import React from "react";
import { Col2, Col3, Grid } from "./grid";
import StyledImage from "../ui/image";
import { Badge } from "../ui/badge";
import Link from "next/link";

interface CardProps {
  data: CardInterface;
}

const Card = ({ data }: CardProps) => {
  return (
    <Grid>
      <Col2>
        <StyledImage imageLink={data.image} label={data.mainInfo} />
      </Col2>
      <Col3>
        <div className="space-y-4 sm:space-y-6 p-3 sm:p-4 lg:p-6">
          <header className="space-y-2 sm:space-y-3">
            <span className="info-text block">
              {data.subInfo}
            </span>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-light leading-tight tracking-tight text-foreground">
              {data.mainInfo}
            </h3>
            <span className="info-text block opacity-70">
              {data.duration}
            </span>
          </header>

          <div className="flex gap-1.5 sm:gap-2 flex-wrap">
            {data.skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs font-light border-border/50 hover:border-border transition-colors duration-200 px-2 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>

          <div className="space-y-3 sm:space-y-4">
            {/* Japanese-inspired minimal bullet points */}
            <ul className="space-y-2 sm:space-y-3">
              {data.descriptions.map((description, index) => (
                <li key={index} className="text-sm sm:text-base leading-relaxed text-foreground relative pl-4">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-foreground/40 rounded-full"></span>
                  <p className="text-pretty leading-relaxed text-justify">{description.trim()}</p>
                </li>
              ))}
            </ul>

            {/* Refined link styling */}
            {data.links && (
              <nav className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-border/20">
                {Object.entries(data.links)
                  .filter(([, href]) => href !== undefined)
                  .map(([label, href]) => (
                    <Link
                      key={href}
                      href={href!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-text group hover:text-foreground transition-colors duration-200"
                    >
                      <span>{label}</span>
                      <div className="w-0 h-px bg-foreground transition-all duration-300 ease-out group-hover:w-full" />
                    </Link>
                  ))}
              </nav>
            )}
          </div>
        </div>
      </Col3>
    </Grid>
  );
};

export default Card;
