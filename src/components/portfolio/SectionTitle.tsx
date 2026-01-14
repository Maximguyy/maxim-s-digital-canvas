import { SectionFlower } from "./SectionFlower";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex items-center gap-4 mb-6 ${className}`}>
      <SectionFlower />
      <h3 className="text-xl uppercase leading-none font-semibold text-foreground">
        {children}
      </h3>
    </div>
  );
}
