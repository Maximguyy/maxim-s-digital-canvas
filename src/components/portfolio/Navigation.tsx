import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X, Mail, Phone, Code, TrendingUp, Target, GraduationCap, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "developpement", label: "Développement", shortLabel: "Développement", icon: Code },
  { id: "ecommerce", label: "Ecommerce", shortLabel: "Ecommerce", icon: TrendingUp },
  { id: "acquisition", label: "Agence d'acquisition", shortLabel: "Acquisition", icon: Target },
  { id: "academique", label: "Parcours académique", shortLabel: "Scolaire", icon: GraduationCap },
];

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleTabChange = (tabId: string) => {
    onTabChange(tabId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
      <div className="max-w-4xl mx-auto">
        <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl">
          <div className="flex h-14 items-center justify-between px-4">
            {/* Menu Button (Mobile only) */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {/* Desktop Navigation - Tabs */}
            <div className="hidden md:flex items-center gap-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Button
                    key={tab.id}
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "gap-2 text-muted-foreground hover:text-foreground",
                      activeTab === tab.id && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                    )}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden lg:hidden md:inline">{tab.shortLabel}</span>
                    <span className="hidden lg:inline">{tab.label}</span>
                  </Button>
                );
              })}
            </div>

            {/* Center spacer for mobile */}
            <div className="flex-1 md:hidden" />

            {/* Right side - Theme toggle, GitHub & Contact */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full"
              >
                <a
                  href="https://github.com/Maximguyy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToContact}
                className="rounded-full"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300",
              isOpen ? "max-h-96 pb-4" : "max-h-0"
            )}
          >
            <div className="flex flex-col gap-1 px-2">
              {/* Tab Navigation */}
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Button
                    key={tab.id}
                    variant="ghost"
                    className={cn(
                      "justify-start gap-3 text-muted-foreground hover:text-foreground",
                      activeTab === tab.id && "bg-secondary text-foreground"
                    )}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </Button>
                );
              })}

              {/* Separator */}
              <div className="my-2 border-t border-border/50" />

              {/* Contact Info */}
              <div className="px-3 py-2 space-y-2">
                <a
                  href="mailto:guymaxim@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  guymaxim@gmail.com
                </a>
                <a
                  href="tel:+33651767750"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  +33 6 51 76 77 50
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
