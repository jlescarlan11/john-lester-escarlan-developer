import { Project } from "@/interface/project";
import Image from "next/image";
import InfoText from "../common/InfoText";
import { CardProps } from "@/interface/card";
import { CardData } from "@/types/card";

const CardImage = ({
  data,
  title,
  duration,
}: {
  data: CardData;
  title: string;
  duration: string;
}) => {
  return (
    <figure className="relative group">
      <div className="absolute -top-0 -left-0 w-8 h-8 border-l border-t border-primary/30" />
      <div className="absolute -bottom-0 -right-0 w-8 h-8 border-r border-b border-primary/30" />

      <Image
        src={data.image}
        width={400}
        height={300}
        alt={`Screenshot of ${title}`}
        className="w-full max-h-48 sm:max-h-80 lg:max-h-64 object-cover grayscale scale-95 group-hover:grayscale-0 transition-all duration-500"
        priority={false}
      />

      <figcaption className="absolute -bottom-8 left-0">
        <InfoText>
          {duration} • {data.status}
        </InfoText>
      </figcaption>
    </figure>
  );
};

export default CardImage;
