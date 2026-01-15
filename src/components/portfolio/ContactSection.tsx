import { GlassCard } from "./GlassCard";
import { SectionContainer } from "./SectionContainer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "Email",
    href: "mailto:contact@maximguy.com",
    icon: Mail,
    description: "Contactez-moi directement",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/maximguy",
    icon: Linkedin,
    description: "Connectons-nous",
  },
  {
    label: "GitHub",
    href: "https://github.com/maximguy",
    icon: Github,
    description: "Voir mes projets",
  },
];

export function ContactSection() {
  return (
    <SectionContainer
      id="contact"
      title="Contact"
      subtitle="Disponible pour échanger sur vos projets"
    >
      <div className="space-y-8">
        {/* Intro Text */}
        <p className="text-muted-foreground leading-relaxed max-w-2xl opacity-0 animate-fade-in">
          Que vous ayez un projet e-commerce, une application à développer, 
          ou besoin d'automatisation IA — n'hésitez pas à me contacter.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group"
            >
              <GlassCard 
                className="p-6 h-full opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` } as React.CSSProperties}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <link.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground mb-1 flex items-center gap-1">
                      {link.label}
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {link.description}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="text-muted-foreground text-sm opacity-0 animate-fade-in pt-8" style={{ animationDelay: "0.5s" }}>
          © {new Date().getFullYear()} Maxim Guy. Tous droits réservés.
        </p>
      </div>
    </SectionContainer>
  );
}
