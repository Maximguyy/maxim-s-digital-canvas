import { Button } from "@/components/ui/button";
import { GlassCard } from "./GlassCard";
import { Code, ShoppingCart, Target, GraduationCap, ChevronDown } from "lucide-react";

const navButtons = [
  { label: "Développement", href: "#developpement", icon: Code },
  { label: "E-commerce", href: "#ecommerce", icon: ShoppingCart },
  { label: "Acquisition", href: "#acquisition", icon: Target },
  { label: "Académique", href: "#academique", icon: GraduationCap },
];

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile Photo Placeholder */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mb-8 animate-fade-in ring-4 ring-primary/20">
            <span className="text-4xl md:text-5xl font-bold text-primary-foreground">MG</span>
          </div>

          {/* Name and Age */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Maxim Guy
          </h1>

          {/* Tagline */}
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-primary font-medium mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Entrepreneur & Développeur
          </p>
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            De 700k€ de CA e-commerce aux solutions IA
          </p>

          {/* Navigation Buttons */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 w-full max-w-3xl opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {navButtons.map((button) => (
              <GlassCard key={button.href} className="p-0" hover>
                <Button
                  variant="ghost"
                  className="w-full h-full flex flex-col items-center gap-2 py-6 px-4 text-foreground hover:text-primary hover:bg-transparent"
                  onClick={() => scrollToSection(button.href)}
                >
                  <button.icon className="h-6 w-6 md:h-8 md:w-8" />
                  <span className="text-sm md:text-base font-medium">{button.label}</span>
                </Button>
              </GlassCard>
            ))}
          </div>

          {/* Introduction */}
          <p 
            className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Builder passionné par la création de solutions techniques rentables. 
            Parcours atypique de l'e-commerce (700k€ CA) au développement full-stack 
            avec spécialisation IA/automation.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "0.8s" }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce"
          onClick={() => scrollToSection("#developpement")}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </Button>
      </div>
    </section>
  );
}
