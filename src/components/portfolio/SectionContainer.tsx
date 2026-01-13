import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef, useState } from "react";

interface SectionContainerProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function SectionContainer({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn("py-20 md:py-32", className)}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "mb-12 md:mb-16 opacity-0",
            isVisible && "animate-fade-in"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
        <div
          className={cn(
            "opacity-0",
            isVisible && "animate-fade-in-up"
          )}
          style={{ animationDelay: "0.2s" }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
