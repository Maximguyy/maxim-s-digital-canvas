import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  activeTab: string;
}

const tableOfContentsConfig: Record<string, { id: string; label: string }[]> = {
  developpement: [
    { id: "dev-stack", label: "Stack" },
    { id: "dev-projets", label: "Projets" },
    { id: "contact", label: "Contact" },
  ],
  ecommerce: [
    { id: "ecom-kpis", label: "KPI's" },
    { id: "ecom-boutiques", label: "Boutiques" },
    { id: "ecom-stack", label: "Stack" },
    { id: "ecom-expertise", label: "Expertise" },
    { id: "ecom-methodologie", label: "Méthodologie" },
    { id: "contact", label: "Contact" },
  ],
  acquisition: [
    { id: "acquisition-kpis", label: "KPI's" },
    { id: "acquisition-meta-ads", label: "Publicité Meta Ads" },
    { id: "acquisition-automatisations", label: "Automatisations IA" },
    { id: "acquisition-learnings", label: "Learnings" },
    { id: "contact", label: "Contact" },
  ],
  academique: [
    { id: "academique-timeline", label: "Timeline" },
    { id: "contact", label: "Contact" },
  ],
};

export function TableOfContents({ activeTab }: TableOfContentsProps) {
  const items = tableOfContentsConfig[activeTab] || [];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="hidden md:flex justify-center">
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="inline-flex h-auto p-1.5 bg-background/80 border border-border backdrop-blur-sm gap-2 rounded-xl">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "bg-secondary/60 hover:bg-secondary py-2.5 px-4 text-xs md:text-sm whitespace-nowrap rounded-lg transition-all text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
