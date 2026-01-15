import { SectionContainer } from "./SectionContainer";
import { 
  SiShopify, 
  SiGoogleanalytics,
  SiHotjar,
  SiMeta,
  SiReact,
  SiGraphql,
  SiJavascript,
  SiHtml5
} from "@icons-pack/react-simple-icons";
import { MessageSquare, Package, BarChart3, TrendingUp, Send, Mail } from "lucide-react";

const categories = [
  {
    title: "Platforms",
    items: [
      { name: "Shopify", icon: SiShopify },
    ],
  },
  {
    title: "Analytics",
    items: [
      { name: "Triple Whale", icon: BarChart3 },
      { name: "True Profit", icon: TrendingUp },
      { name: "Meta Pixel", icon: SiMeta },
      { name: "Google Analytics 4", icon: SiGoogleanalytics },
      { name: "Hotjar", icon: SiHotjar },
    ],
  },
  {
    title: "Marketing",
    items: [
      { name: "Meta Ads", icon: SiMeta },
      { name: "Klaviyo", icon: Mail },
      { name: "SMS Automation", icon: Send },
    ],
  },
  {
    title: "Development",
    items: [
      { name: "Liquid", icon: SiShopify },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML/CSS", icon: SiHtml5 },
      { name: "React", icon: SiReact },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    title: "Fulfillment",
    items: [
      { name: "Infinite Fulfillment", icon: Package },
    ],
  },
  {
    title: "Support",
    items: [
      { name: "Gorgias", icon: MessageSquare },
    ],
  },
];

export function EcomStackSection() {
  return (
    <SectionContainer
      id="ecom-stack"
      title="Stack E-commerce"
      subtitle="Outils et technologies maîtrisés pour le e-commerce"
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
