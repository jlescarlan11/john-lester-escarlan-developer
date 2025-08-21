import { CardProps } from "@/interface/card";
import { getCardInfo } from "@/utils/getCardInfo";
import CardContent from "./CardContent";
import CardImage from "./CardImage";

const Card = ({ data, className = "" }: CardProps) => {
  const { title, category, duration, links } = getCardInfo(data);

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-5 gap-20 items-start ${className}`}
    >
      {/* Image Section */}
      <div className="lg:col-span-2 space-y-6">
        <CardImage data={data} title={title} duration={duration} />
      </div>

      {/* Content Section */}
      <div className="lg:col-span-3 space-y-6">
        <CardContent
          data={data}
          title={title}
          category={category}
          links={links}
        />
      </div>
    </div>
  );
};

export default Card;
