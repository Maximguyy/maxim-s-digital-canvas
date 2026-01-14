import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { Navigation } from "@/components/portfolio/Navigation";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
