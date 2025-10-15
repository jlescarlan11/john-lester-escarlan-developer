import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "group h-full bg-background border border-border/30 rounded-lg transition-all duration-300 hover:border-border/60 relative overflow-hidden",
  {
    variants: {
      size: {
        base: "",
        large: "p-8 lg:p-12",
        horizontal: "p-6",
      },
      variant: {
        default: "",
        elevated: "shadow-sm hover:shadow-md",
        minimal: "border-border/20",
      },
    },
    defaultVariants: {
      size: "base",
      variant: "default",
    },
  }
);

export interface CardVariantsProps extends VariantProps<typeof cardVariants> {
  className?: string;
}

export const getCardStyles = (props: CardVariantsProps) => 
  cn(cardVariants(props), props.className);

export { cardVariants };
