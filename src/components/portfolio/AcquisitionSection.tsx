import { GlassCard } from "./GlassCard";
import { SectionContainer } from "./SectionContainer";
import { Badge } from "@/components/ui/badge";
import { Target, Zap, Bot, TrendingUp, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Publicité Meta",
    description: "Création et optimisation de campagnes Facebook & Instagram pour l'acquisition de nouveaux clients.",
  },
  {
    icon: Bot,
    title: "Automatisation IA",
    description: "Développement de workflows d'automatisation avec n8n, puis migration vers Python pour plus de performance.",
  },
  {
    icon: Zap,
    title: "Suivi client",
    description: "Automatisation du suivi par SMS, upsell email et relance de leads potentiels.",
  },
];

const evolution = {
  before: {
    title: "n8n",
    items: ["Workflows visuels", "Setup rapide", "Limitations techniques"],
  },
  after: {
    title: "Python Custom",
    items: ["Rapidité accrue", "Coûts réduits", "Personnalisation totale"],
  },
};

export function AcquisitionSection() {
  return (
    <SectionContainer
      id="acquisition"
      title="Acquisition"
      subtitle="6 mois en agence — 3 clients accompagnés"
    >
      {/* Main highlights */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {highlights.map((item, index) => (
          <GlassCard
            key={item.title}
            className="p-6 opacity-0 animate-fade-in"
            style={{ animationDelay: `${0.1 * index}s` } as React.CSSProperties}
          >
            <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </GlassCard>
        ))}
      </div>

      {/* Evolution card */}
      <GlassCard className="p-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" } as React.CSSProperties}>
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">
            Évolution technique
          </h3>
        </div>
        
        <div className="grid md:grid-cols-[1fr,auto,1fr] gap-6 items-center">
          <div className="p-6 rounded-xl bg-secondary/50">
            <h4 className="font-medium text-foreground mb-3">{evolution.before.title}</h4>
            <ul className="space-y-2">
              {evolution.before.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="hidden md:flex">
            <ArrowRight className="h-8 w-8 text-primary" />
          </div>
          
          <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
            <h4 className="font-medium text-primary mb-3">{evolution.after.title}</h4>
            <ul className="space-y-2">
              {evolution.after.items.map((item) => (
                <li key={item} className="text-sm text-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GlassCard>
    </SectionContainer>
  );
}
