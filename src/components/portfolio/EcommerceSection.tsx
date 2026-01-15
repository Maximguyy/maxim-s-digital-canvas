import { GlassCard } from "./GlassCard";
import { SectionContainer } from "./SectionContainer";
import { SectionTitle } from "./SectionTitle";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Users, Package, Mail, CreditCard } from "lucide-react";
import { SiStripe, SiPaypal, SiShopify, SiFacebook, SiInstagram, SiGoogleads, SiPinterest } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

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
    >
      {/* KPI's Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <SectionTitle>KPI's</SectionTitle>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        {/* Chiffre d'affaires */}
        <GlassCard className="p-4 md:p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" } as React.CSSProperties}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center -space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#635BFF] flex items-center justify-center ring-2 ring-background z-30">
                <SiStripe className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#003087] flex items-center justify-center ring-2 ring-background z-20">
                <SiPaypal className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#96BF48] flex items-center justify-center ring-2 ring-background z-10">
                <SiShopify className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
          </div>
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
            700k€
          </div>
          <div className="text-sm md:text-base text-muted-foreground">Chiffre d'affaires généré</div>
        </GlassCard>

        {/* Investissement Ads */}
        <GlassCard className="p-4 md:p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" } as React.CSSProperties}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center -space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1877F2] flex items-center justify-center ring-2 ring-background z-40">
                <SiFacebook className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center ring-2 ring-background z-30">
                <SiInstagram className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#4285F4] flex items-center justify-center ring-2 ring-background z-20">
                <SiGoogleads className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#E60023] flex items-center justify-center ring-2 ring-background z-10">
                <SiPinterest className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
          </div>
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
            200k€
          </div>
          <div className="text-sm md:text-base text-muted-foreground">Investis en publicité</div>
        </GlassCard>

        {/* Commandes traitées */}
        <GlassCard className="p-4 md:p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" } as React.CSSProperties}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Package className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </div>
          </div>
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
            11,000+
          </div>
          <div className="text-sm md:text-base text-muted-foreground">Commandes traitées</div>
        </GlassCard>

        {/* Meilleur mois */}
        <GlassCard className="p-4 md:p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" } as React.CSSProperties}>
          <div className="flex items-center justify-between mb-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </div>
          </div>
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
            100k€
          </div>
          <div className="text-sm md:text-base text-muted-foreground">Meilleur mois (Décembre 2023)</div>
        </GlassCard>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <GlassCard
            key={skill.title}
            className="p-6 opacity-0 animate-fade-in"
            style={{ animationDelay: `${0.3 + 0.1 * index}s` } as React.CSSProperties}
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
