import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Code, Cpu, Smartphone, Palette, 
  TrendingUp, Globe, Users, Package, Mail, CreditCard,
  Target, Zap, Bot, ArrowRight,
  GraduationCap, MapPin, Calendar
} from "lucide-react";
import {
  SiReact,
  SiPython,
  SiShopify,
  SiSupabase,
  SiTypescript,
  SiGit,
  SiDocker,
} from "@icons-pack/react-simple-icons";

// ==================== DÉVELOPPEMENT ====================
const devProjects = [
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

const devStack = [
  { icon: SiReact, name: "React Native" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiPython, name: "Python" },
  { icon: SiSupabase, name: "Supabase" },
  { icon: SiShopify, name: "Shopify" },
  { icon: SiGit, name: "Git" },
];

// ==================== E-COMMERCE ====================
const ecomStats = [
  { value: "700k€", label: "Chiffre d'affaires", icon: TrendingUp },
  { value: "200k€", label: "Investis en Meta Ads", icon: CreditCard },
  { value: "2", label: "Employés gérés", icon: Users },
];

const ecomSkills = [
  {
    icon: Globe,
    title: "Création de sites e-commerce",
    items: ["Sites Shopify optimisés conversion", "Landing pages data-driven", "Snippets & thèmes custom"],
  },
  {
    icon: TrendingUp,
    title: "Publicité & Acquisition",
    items: ["Meta Ads (Facebook & Instagram)", "Optimisation LTV client", "Stratégies upsell, cross-sell"],
  },
  {
    icon: Package,
    title: "Supply Chain",
    items: ["Négociation avec usines", "Gestion stocks internationale", "Entrepôts 3PL (Chine & Europe)"],
  },
  {
    icon: Mail,
    title: "Automation Marketing",
    items: ["Emailing automatisé", "SMS & WhatsApp automation", "Séquences de relance"],
  },
];

// ==================== ACQUISITION ====================
const acquisitionHighlights = [
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

// ==================== ACADÉMIQUE ====================
const timeline = [
  {
    period: "2023 - Présent",
    title: "ESILV Paris",
    subtitle: "École d'ingénieur informatique",
    location: "Paris",
    current: true,
  },
  {
    period: "2021 - 2023",
    title: "Double Licence Maths/Physique",
    subtitle: "Université Nice Côte d'Azur",
    location: "Nice",
    current: false,
  },
  {
    period: "2020 - 2021",
    title: "CPGE PTSI",
    subtitle: "Lycée des Eucalyptus",
    location: "Nice",
    current: false,
  },
  {
    period: "2020",
    title: "Baccalauréat S",
    subtitle: "Mention Assez Bien • Lycée Masséna",
    location: "Nice",
    note: "Année COVID",
    current: false,
  },
];

function DeveloppementContent() {
  return (
    <div className="space-y-8">
      {/* Présentation */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">Présentation :</h3>
        <p className="text-muted-foreground leading-relaxed">
          Ma force : exploiter l'IA au maximum pour développer, peu importe le langage. Cette approche m'a permis de livrer des applications/sites complexes dans plusieurs langages différents qui auraient demandé des années d'expertise classique. Je me concentre sur l'architecture et la logique métier, tout en essayant de suivre toutes les nouveautés et best practices liées à l'IA.
        </p>
      </div>

      {/* Stack */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Stack</h3>
        <div className="flex flex-wrap gap-3">
          {devStack.map((tech) => (
            <div key={tech.name} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 text-foreground text-sm">
              <tech.icon className="h-4 w-4" />
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      {/* Projets */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Projets</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {devProjects.map((project) => (
            <GlassCard key={project.title} className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <project.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{project.title}</h4>
                  <p className="text-primary text-sm">{project.subtitle}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}

function EcommerceContent() {
  return (
    <div className="space-y-8">
      {/* Présentation */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">Présentation :</h3>
        <p className="text-muted-foreground leading-relaxed">
          +700k€ de chiffre d'affaires généré en e-commerce. Expérience complète de la création à la gestion : acquisition client, supply chain internationale, management d'équipe et automation marketing.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {ecomStats.map((stat) => (
          <GlassCard key={stat.label} className="p-4 text-center">
            <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-muted-foreground text-xs mt-1">{stat.label}</div>
          </GlassCard>
        ))}
      </div>

      {/* Skills */}
      <div className="grid md:grid-cols-2 gap-4">
        {ecomSkills.map((skill) => (
          <GlassCard key={skill.title} className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <skill.icon className="h-4 w-4 text-primary" />
              <h4 className="font-semibold text-foreground text-sm">{skill.title}</h4>
            </div>
            <ul className="space-y-1">
              {skill.items.map((item) => (
                <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary/50" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

function AcquisitionContent() {
  return (
    <div className="space-y-8">
      {/* Présentation */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">Présentation :</h3>
        <p className="text-muted-foreground leading-relaxed">
          6 mois en agence d'acquisition & automatisation IA, accompagnant 3 clients. Transition de n8n vers Python custom pour des gains en rapidité, efficacité, personnalisation et coût.
        </p>
      </div>

      {/* Highlights */}
      <div className="grid md:grid-cols-3 gap-4">
        {acquisitionHighlights.map((item) => (
          <GlassCard key={item.title} className="p-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-3">
              <item.icon className="h-5 w-5" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </GlassCard>
        ))}
      </div>

      {/* Evolution */}
      <GlassCard className="p-5">
        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          Évolution technique
        </h4>
        <div className="flex items-center gap-4">
          <div className="flex-1 p-4 rounded-lg bg-secondary/50">
            <p className="font-medium text-foreground text-sm mb-2">n8n</p>
            <p className="text-muted-foreground text-xs">Workflows visuels, setup rapide</p>
          </div>
          <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
          <div className="flex-1 p-4 rounded-lg bg-primary/10 border border-primary/20">
            <p className="font-medium text-primary text-sm mb-2">Python Custom</p>
            <p className="text-foreground text-xs">Rapidité, coûts réduits, personnalisation totale</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

function AcademiqueContent() {
  return (
    <div className="space-y-6">
      {/* Présentation */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">Parcours :</h3>
        <p className="text-muted-foreground leading-relaxed">
          Formation scientifique solide de Nice à Paris, du Bac S jusqu'à l'école d'ingénieur en informatique.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {timeline.map((item) => (
          <GlassCard key={item.title} className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-primary text-sm mb-1">
                  <Calendar className="h-3 w-3" />
                  {item.period}
                  {item.current && (
                    <Badge variant="default" className="text-xs ml-2">En cours</Badge>
                  )}
                </div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.subtitle}</p>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <MapPin className="h-3 w-3" />
                {item.location}
              </div>
            </div>
            {item.note && (
              <p className="text-primary/70 text-xs mt-2">• {item.note}</p>
            )}
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

interface TabContentProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabContent({ activeTab, onTabChange }: TabContentProps) {
  return (
    <div className="w-full">
      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        <TabsList className="w-full grid grid-cols-4 mb-8 h-auto p-1 bg-secondary/30">
          <TabsTrigger 
            value="developpement" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 text-xs md:text-sm"
          >
            Développement
          </TabsTrigger>
          <TabsTrigger 
            value="ecommerce"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 text-xs md:text-sm"
          >
            Ecommerce
          </TabsTrigger>
          <TabsTrigger 
            value="acquisition"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 text-xs md:text-sm"
          >
            Acquisition
          </TabsTrigger>
          <TabsTrigger 
            value="academique"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 text-xs md:text-sm"
          >
            Parcours académique
          </TabsTrigger>
        </TabsList>

        <TabsContent value="developpement" className="mt-0">
          <DeveloppementContent />
        </TabsContent>
        
        <TabsContent value="ecommerce" className="mt-0">
          <EcommerceContent />
        </TabsContent>
        
        <TabsContent value="acquisition" className="mt-0">
          <AcquisitionContent />
        </TabsContent>
        
        <TabsContent value="academique" className="mt-0">
          <AcademiqueContent />
        </TabsContent>
      </Tabs>
    </div>
  );
}
