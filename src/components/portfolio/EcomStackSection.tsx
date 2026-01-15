import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
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
import { MessageSquare, Package, BarChart3, TrendingUp, Send, Mail, Users } from "lucide-react";

const ecomStack = [
  {
    category: "Platforms",
    items: [
      { icon: SiShopify, name: "Shopify" },
    ],
  },
  {
    category: "Analytics",
    items: [
      { icon: BarChart3, name: "Triple Whale" },
      { icon: TrendingUp, name: "True Profit" },
      { icon: SiMeta, name: "Meta Pixel" },
      { icon: SiGoogleanalytics, name: "Google Analytics 4" },
      { icon: SiHotjar, name: "Hotjar" },
    ],
  },
  {
    category: "Marketing",
    items: [
      { icon: SiMeta, name: "Meta Ads" },
      { icon: Mail, name: "Klaviyo" },
      { icon: Send, name: "SMS Automation" },
    ],
  },
  {
    category: "Development",
    items: [
      { icon: SiShopify, name: "Liquid" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiHtml5, name: "HTML/CSS" },
      { icon: SiReact, name: "React" },
      { icon: SiGraphql, name: "GraphQL" },
    ],
  },
  {
    category: "Fulfillment",
    items: [
      { icon: Package, name: "Infinite Fulfillment" },
      { icon: Users, name: "Chinese Suppliers" },
    ],
  },
  {
    category: "Support",
    items: [
      { icon: MessageSquare, name: "Gorgias" },
    ],
  },
];

export function EcomStackSection() {
  return (
    <div>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2 }}
      >
        <SectionTitle>Stack</SectionTitle>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {ecomStack.map((category, catIndex) => (
          <motion.div 
            key={category.category} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 + catIndex * 0.1 }} 
            className="p-4 rounded-xl border border-border bg-card/30"
          >
            <h4 className="text-xs uppercase tracking-wider text-primary mb-3 font-medium">
              {category.category}
            </h4>
            <div className="space-y-2">
              {category.items.map(item => {
                const IconComponent = item.icon;
                return (
                  <div key={item.name} className="flex items-center gap-2 text-foreground text-sm">
                    <IconComponent className="h-4 w-4 text-muted-foreground" />
                    {item.name}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
