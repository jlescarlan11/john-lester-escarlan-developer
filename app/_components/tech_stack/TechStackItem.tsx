interface TechStackItemProps {
  tech: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  };
  index: number;
}
const TechStackItem = ({ tech }: TechStackItemProps) => {
  const IconComponent = tech.icon;

  return (
    <div
      className="flex-shrink-0 flex flex-col items-center group"
      aria-label={`Technology: ${tech.name}`}
    >
      <IconComponent
        className={`text-8xl lg:text-9xl ${tech.color} mb-4 grayscale group-hover:grayscale-0 transition-all duration-300`}
        aria-hidden="true"
      />
      <span className="text-xs text-foreground/70 group-hover:text-foreground transition-colors duration-300">
        {tech.name}
      </span>
    </div>
  );
};

export default TechStackItem;
