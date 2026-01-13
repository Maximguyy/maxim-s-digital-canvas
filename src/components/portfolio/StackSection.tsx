import { GlassCard } from "./GlassCard";
import { SectionContainer } from "./SectionContainer";
import { 
  SiReact, 
  SiTypescript, 
  SiPython, 
  SiShopify, 
  SiSupabase,
  
  SiGit
} from "@icons-pack/react-simple-icons";
import { Bot, Workflow, Zap } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "React Native", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Shopify Liquid", icon: SiShopify },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Supabase", icon: SiSupabase },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "IA & Automation",
    items: [
      { name: "Claude Code", icon: Bot },
      { name: "n8n", icon: Workflow },
      { name: "APIs IA", icon: Zap },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "MCP", icon: Workflow },
    ],
  },
];

export function StackSection() {
  return (
    <SectionContainer
      id="stack"
      title="Stack Technique"
      subtitle="Technologies et outils maîtrisés"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category, catIndex) => (
          <GlassCard
            key={category.title}
            className="p-5 opacity-0 animate-fade-in"
            style={{ animationDelay: `${0.1 * catIndex}s` } as React.CSSProperties}
          >
            <h3 className="text-sm font-medium text-primary mb-4">{category.title}</h3>
            <div className="space-y-3">
              {category.items.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <IconComponent className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionContainer>
  );
}
