import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

// Placeholder screenshots - will be replaced when real images are uploaded
const screenshots = [
  { id: 1, alt: "Suivi des prières" },
  { id: 2, alt: "Lecture du Coran" },
  { id: 3, alt: "Récitateurs" },
  { id: 4, alt: "Apprentissage gamifié" },
  { id: 5, alt: "Journaling quotidien" },
  { id: 6, alt: "Chatbot IA" },
  { id: 7, alt: "Système de streak" },
  { id: 8, alt: "Quizz Coran" },
  { id: 9, alt: "Dashboard" },
  { id: 10, alt: "Authentification" },
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
            key={screenshot.id} 
            className="aspect-[9/16] rounded-lg bg-secondary/50 border border-border/30 overflow-hidden flex flex-col items-center justify-center p-2"
          >
            <Smartphone className="h-6 w-6 text-muted-foreground/50 mb-2" />
            <span className="text-xs text-muted-foreground/70 text-center">{screenshot.alt}</span>
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
          {screenshots.map((screenshot) => (
            <motion.div
              key={screenshot.id}
              className="flex-shrink-0 w-[45%] aspect-[9/16] rounded-lg bg-secondary/50 border border-border/30 overflow-hidden snap-center flex flex-col items-center justify-center p-2"
            >
              <Smartphone className="h-6 w-6 text-muted-foreground/50 mb-2" />
              <span className="text-xs text-muted-foreground/70 text-center">{screenshot.alt}</span>
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
