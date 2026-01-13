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
      <div className="max-w-2xl mx-auto">
        <GlassCard className="p-8 md:p-12 text-center opacity-0 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Travaillons ensemble
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Que vous ayez un projet e-commerce, une application à développer, 
            ou besoin d'automatisation IA — n'hésitez pas à me contacter.
          </p>

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
                  <link.icon className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                  <div className="font-medium text-foreground mb-1 flex items-center justify-center gap-1">
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {link.description}
                  </div>
                </GlassCard>
              </a>
            ))}
          </div>
        </GlassCard>

        {/* Footer */}
        <p className="text-center text-muted-foreground text-sm mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          © {new Date().getFullYear()} Maxim Guy. Tous droits réservés.
        </p>
      </div>
    </SectionContainer>
  );
}
