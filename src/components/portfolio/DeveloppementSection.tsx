import { GlassCard } from "./GlassCard";
import { SectionContainer } from "./SectionContainer";
import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Smartphone, Palette, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: Cpu,
    title: "Workspace Claude Code",
    subtitle: "20k lignes de code",
    description: "Workspace IA optimisé pour le développement React Native avec sous-agents spécialisés.",
    features: [
      "Sous-agents spécialisés (UI, Backend...)",
      "Validation auto par screenshots",
      "MCP custom pour autonomie",
      "Interface visuelle de pilotage",
    ],
    tags: ["Claude Code", "Python", "MCP", "IA"],
  },
  {
    icon: Code,
    title: "App Shopify - Outfit Bundle",
    subtitle: "En développement",
    description: "Application IA pour créer des shootings photo virtuels et proposer des bundles produits.",
    features: [
      "Shootings photo IA multi-produits",
      "Bundles automatisés",
      "Intégration Fashn Tryon",
      "Workflows IA personnalisés",
    ],
    tags: ["Shopify", "IA", "React", "Node.js"],
  },
  {
    icon: Smartphone,
    title: "Application Mobile React Native",
    subtitle: "80k lignes de code",
    description: "Application mobile complète dans la niche Muslim avec backend Supabase.",
    features: [
      "Architecture scalable",
      "Backend Supabase optimisé",
      "Gestion utilisateurs avancée",
      "Performance native",
    ],
    tags: ["React Native", "Supabase", "TypeScript"],
  },
  {
    icon: Palette,
    title: "Customisation Thèmes Shopify",
    subtitle: "Optimisation UI/UX",
    description: "Personnalisation avancée de thèmes pour optimiser les conversions e-commerce.",
    features: [
      "Snippets Shopify custom",
      "Optimisation UX basée data",
      "Landing pages performantes",
      "A/B testing intégré",
    ],
    tags: ["Shopify", "Liquid", "CSS", "JavaScript"],
  },
];

export function DeveloppementSection() {
  return (
    <SectionContainer
      id="developpement"
      title="Développement"
      subtitle="Projets techniques alliant innovation et performance"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <GlassCard
            key={project.title}
            className="p-6 md:p-8 opacity-0 animate-fade-in"
            style={{ animationDelay: `${0.1 * index}s` } as React.CSSProperties}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <project.icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-primary font-medium text-sm">
                  {project.subtitle}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>

            <ul className="space-y-2 mb-6">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionContainer>
  );
}
