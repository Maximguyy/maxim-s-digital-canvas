import profilePhoto from "@/assets/profile-photo.png";
import { TabContent } from "./TabContent";
import { Mail, Phone } from "lucide-react";

interface HeroSectionProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function HeroSection({ activeTab, onTabChange }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex flex-col pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="relative flex flex-col items-center text-center mb-10">
          {/* Background circle with low opacity */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/5 blur-3xl" />
          
          {/* Profile Photo */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 animate-fade-in ring-4 ring-border/50">
            <img 
              src={profilePhoto} 
              alt="Maxim Guy" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Age */}
          <h1 
            className="text-2xl md:text-3xl font-bold text-foreground mb-2 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Maxim Guy, 23 ans
          </h1>

          {/* Contact Info */}
          <div 
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mt-3 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            <a 
              href="mailto:guymaxim@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">guymaxim@gmail.com</span>
            </a>
            <a 
              href="tel:+33651767750" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">+33 6 51 76 77 50</span>
            </a>
          </div>
        </div>

        {/* Tab Content */}
        <div 
          className="max-w-4xl mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <TabContent activeTab={activeTab} onTabChange={onTabChange} />
        </div>
      </div>
    </section>
  );
}
