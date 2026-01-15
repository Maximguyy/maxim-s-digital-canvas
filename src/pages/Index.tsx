import { useState } from "react";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { Navigation } from "@/components/portfolio/Navigation";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("developpement");

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main>
          <HeroSection activeTab={activeTab} onTabChange={setActiveTab} />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
