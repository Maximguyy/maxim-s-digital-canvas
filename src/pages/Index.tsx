import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { Navigation } from "@/components/portfolio/Navigation";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { DeveloppementSection } from "@/components/portfolio/DeveloppementSection";
import { EcommerceSection } from "@/components/portfolio/EcommerceSection";
import { AcquisitionSection } from "@/components/portfolio/AcquisitionSection";
import { AcademiqueSection } from "@/components/portfolio/AcademiqueSection";
import { StackSection } from "@/components/portfolio/StackSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <DeveloppementSection />
          <EcommerceSection />
          <AcquisitionSection />
          <AcademiqueSection />
          <StackSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
