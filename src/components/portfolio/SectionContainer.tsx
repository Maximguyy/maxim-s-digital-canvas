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
  className
}: SectionContainerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return;
}