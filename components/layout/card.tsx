import CardInterface from "@/interfaces/cardInterface";
import React from "react";
import { Col2, Col3, Grid } from "./grid";
import StyledImage from "../ui/image";
import { Badge } from "../ui/badge";

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
        <div className="space-y-4">
          <header className="space-y-1">
            <span className="text-xs flex flex-wrap gap-x-4 uppercase tracking-[0.2em] text-foreground/80 font-light">
              {data.subInfo}
            </span>
            <h3 className="text-2xl lg:text-3xl font-extralight leading-tight tracking-tight">
              {data.mainInfo}
            </h3>
            <span className="text-xs flex flex-wrap gap-x-4 uppercase tracking-[0.2em] text-foreground/80 font-light">
              ({data.duration})
            </span>
          </header>

          <div className="flex gap-2 flex-wrap">
            {data.skills.map((skill, index) => (
              <Badge key={index} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="space-y-4">
            {/* Description as bullet points */}
            <ul className="text-sm mt-1 leading-relaxed opacity-90 list-disc list-outside pl-6">
              {data.descriptions.map((description, index) => (
                <li key={index} className="text-pretty">
                  <p className="flex-1">{description.trim()}</p>
                </li>
              ))}
            </ul>

            {/* Links */}
            {data.links && (
              <nav className="flex items-center space-x-6 pt-4">
                {/* {data.links.map((link, index) => (
                //   <StyledLink
                //     key={index}
                //     href={link.url}
                //     target="_blank"
                //     rel="noopener noreferrer"
                //   >
                //     <span>{link.label}</span>
                //   </StyledLink>
                ))} */}
                hello
              </nav>
            )}
          </div>
        </div>
      </Col3>
    </Grid>
  );
};

export default Card;
