import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Menu Button (Mobile) */}
          <Button
            variant="ghost"
            size="icon"
            className="md:opacity-0 md:pointer-events-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Center - Empty for balance on mobile */}
          <div className="flex-1" />

          {/* Right side - Theme toggle & Contact */}
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
            isOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-1">
            <Button
              variant="ghost"
              className="justify-start text-muted-foreground hover:text-foreground"
              onClick={scrollToContact}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
