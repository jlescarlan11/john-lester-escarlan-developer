"use client";
import { motion } from "framer-motion";
import CornerLogo from "@/components/ui/corner-logo";
import { JourneyEntry } from "@/interfaces/personalInfo";
import { getCardStyles } from "@/components/ui/card-variants";

interface JourneyCardProps {
  entry: JourneyEntry;
  badges: { text: string; variant: string }[];
}

const JourneyCard = ({ entry, badges }: JourneyCardProps) => {
  return (
    <div className={getCardStyles({ size: "horizontal" })}>
      <CornerLogo 
        src={entry.image} 
        alt={`${entry.organization} Logo`} 
        size="md"
        parentHover={true}
      />
      
      <div className="flex flex-col h-full relative z-10 justify-center">
        <div className="space-y-2">
          <h3>{entry.title}</h3>
          <h4>{entry.organization}</h4>
          <div className="flex items-center gap-2">
            {badges.map((badge, index) => (
              <span 
                key={index}
                className={`text-xs px-2 py-1 rounded-full font-medium ${badge.variant}`}
              >
                {badge.text}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default JourneyCard;
