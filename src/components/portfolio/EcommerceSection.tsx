import { GlassCard } from "./GlassCard";
import { SectionContainer } from "./SectionContainer";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Users, Package, Mail, CreditCard } from "lucide-react";

const stats = [
  { value: "700k€", label: "Chiffre d'affaires", icon: TrendingUp },
  { value: "200k€", label: "Investis en Meta Ads", icon: CreditCard },
  { value: "2", label: "Employés gérés", icon: Users },
];

const skills = [
  {
    icon: Globe,
    title: "Création de sites e-commerce",
    items: [
      "Sites Shopify optimisés conversion",
      "Landing pages data-driven",
      "Snippets & thèmes custom",
    ],
  },
  {
    icon: TrendingUp,
    title: "Publicité & Acquisition",
    items: [
      "Meta Ads (Facebook & Instagram)",
      "Optimisation LTV client",
      "Stratégies upsell, cross-sell, down-sell",
    ],
  },
  {
    icon: Package,
    title: "Supply Chain",
    items: [
      "Négociation avec usines",
      "Gestion de stocks internationale",
      "Entrepôts 3PL (Chine & Europe)",
    ],
  },
  {
    icon: Mail,
    title: "Automation Marketing",
    items: [
      "Emailing automatisé",
      "SMS & WhatsApp automation",
      "Séquences de relance",
    ],
  },
];

export function EcommerceSection() {
  return (
    <SectionContainer
      id="ecommerce"
      title="E-commerce"
      subtitle="Création et scaling de business e-commerce rentables"
    >
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, index) => (
          <GlassCard
            key={stat.label}
            className="p-6 text-center opacity-0 animate-fade-in"
            style={{ animationDelay: `${0.1 * index}s` } as React.CSSProperties}
          >
            <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {stat.value}
            </div>
            <div className="text-muted-foreground">{stat.label}</div>
          </GlassCard>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <GlassCard
            key={skill.title}
            className="p-6 opacity-0 animate-fade-in"
            style={{ animationDelay: `${0.2 + 0.1 * index}s` } as React.CSSProperties}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <skill.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {skill.title}
              </h3>
            </div>
            <ul className="space-y-2">
              {skill.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>

      {/* Additional info */}
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Badge variant="outline" className="py-2 px-4">Gestion de trésorerie</Badge>
        <Badge variant="outline" className="py-2 px-4">SAV & Support client</Badge>
        <Badge variant="outline" className="py-2 px-4">Product Research</Badge>
        <Badge variant="outline" className="py-2 px-4">Délégation & Management</Badge>
      </div>
    </SectionContainer>
  );
}
