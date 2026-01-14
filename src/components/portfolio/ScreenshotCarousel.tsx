import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import noorScreen1 from "@/assets/noor-screen-1.png";
import noorScreen2 from "@/assets/noor-screen-2.png";
import noorScreen3 from "@/assets/noor-screen-3.png";
import noorScreen4 from "@/assets/noor-screen-4.png";
import noorScreen5 from "@/assets/noor-screen-5.png";
import noorScreen6 from "@/assets/noor-screen-6.png";
import noorScreen7 from "@/assets/noor-screen-7.png";
import noorScreen8 from "@/assets/noor-screen-8.png";
import noorScreen9 from "@/assets/noor-screen-9.png";
import noorScreen10 from "@/assets/noor-screen-10.png";

const screenshots = [
  { src: noorScreen1, alt: "Noor App - Écran 1" },
  { src: noorScreen2, alt: "Noor App - Écran 2" },
  { src: noorScreen3, alt: "Noor App - Écran 3" },
  { src: noorScreen4, alt: "Noor App - Écran 4" },
  { src: noorScreen5, alt: "Noor App - Écran 5" },
  { src: noorScreen6, alt: "Noor App - Écran 6" },
  { src: noorScreen7, alt: "Noor App - Écran 7" },
  { src: noorScreen8, alt: "Noor App - Écran 8" },
  { src: noorScreen9, alt: "Noor App - Écran 9" },
  { src: noorScreen10, alt: "Noor App - Écran 10" },
];

export function ScreenshotCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollWidth = container.scrollWidth / screenshots.length;
      container.scrollTo({
        left: scrollWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (containerRef.current && !isDragging) {
      const container = containerRef.current;
      const scrollWidth = container.scrollWidth / screenshots.length;
      const newIndex = Math.round(container.scrollLeft / scrollWidth);
      setCurrentIndex(Math.min(newIndex, screenshots.length - 1));
    }
  };

  const goToPrevious = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = Math.min(screenshots.length - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <div className="mt-4">
      <p className="text-muted-foreground text-xs mb-3">Screenshots</p>
      
      {/* Desktop Grid - visible on md+ */}
      <div className="hidden md:grid md:grid-cols-5 gap-2">
        {screenshots.map((screenshot, i) => (
          <div 
            key={i} 
            className="aspect-[9/16] rounded-lg bg-secondary/50 border border-border/30 overflow-hidden"
          >
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Mobile Carousel - visible on small screens */}
      <div className="md:hidden relative">
        {/* Carousel Container */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {screenshots.map((screenshot, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[45%] aspect-[9/16] rounded-lg bg-secondary/50 border border-border/30 overflow-hidden snap-center"
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-1.5 mt-3">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentIndex(i);
                scrollToIndex(i);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentIndex ? "bg-primary" : "bg-border"
              }`}
              aria-label={`Go to screenshot ${i + 1}`}
            />
          ))}
        </div>

        {/* Swipe Hint */}
        <p className="text-center text-muted-foreground text-xs mt-2">
          Glissez pour voir plus →
        </p>
      </div>
    </div>
  );
}
