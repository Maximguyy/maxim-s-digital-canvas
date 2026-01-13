import { SectionContainer } from "./SectionContainer";
import { 
  SiReact, 
  SiPython, 
  SiShopify, 
  SiSupabase,
  SiGit,
  SiMeta
} from "@icons-pack/react-simple-icons";
import { Bot, Workflow, Zap, Mail, Layers } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "React Native", icon: SiReact },
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
    title: "Marketing",
    items: [
      { name: "Meta Ads", icon: SiMeta },
      { name: "Email/SMS", icon: Mail },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "MCP", icon: Layers },
      { name: "Workflow Auto", icon: Workflow },
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
      <div className="space-y-12 md:space-y-16">
        {categories.map((category, catIndex) => (
          <div 
            key={category.title}
            className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 opacity-0 animate-fade-in"
            style={{ animationDelay: `${0.1 * catIndex}s` } as React.CSSProperties}
          >
            <div className="sm:col-span-4 lg:col-span-3">
              <p className="text-3xl md:text-5xl font-bold leading-none text-muted-foreground uppercase tracking-tight">
                {category.title}
              </p>
            </div>
            <div className="sm:col-span-8 lg:col-span-9 flex gap-x-8 gap-y-6 flex-wrap items-center">
              {category.items.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex gap-3 items-center leading-none group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary/50 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-lg md:text-xl capitalize text-foreground">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
