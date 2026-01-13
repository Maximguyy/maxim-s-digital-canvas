import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

export function GlassCard({ children, className, hover = true, style }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl",
        "shadow-lg shadow-glass-shadow",
        hover && "transition-all duration-300 hover:border-primary/30 hover:shadow-primary/10 hover:shadow-xl hover:-translate-y-1",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
