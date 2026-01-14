import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Code, Cpu, Smartphone, 
  TrendingUp, Globe, Users, Package, Mail, CreditCard,
  Target, Zap, Bot, ArrowRight,
  GraduationCap, MapPin, Calendar,
  ChevronDown, Star, AlertTriangle,
  Image as ImageIcon
} from "lucide-react";
import {
  SiReact,
  SiPython,
  SiShopify,
  SiSupabase,
  SiTypescript,
  SiGit,
  SiExpo,
  SiPostgresql,
  SiNodedotjs,
  SiGraphql,
} from "@icons-pack/react-simple-icons";

// ==================== DÉVELOPPEMENT ====================
const devProjects = [
  {
    id: "noor",
    title: "Noor App",
    badge: "Projet phare",
    tagline: "App mobile type Duolingo pour l'apprentissage du Coran",
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "IA/Perplexity"],
    stats: "15 screens • 80k lignes • 100+ contenus IA • 1 mois",
    content: "Application mobile complète d'apprentissage du Coran avec système de progression gamifié. Intégration de Perplexity API pour générer automatiquement des questions, récupérer des interprétations d'imams, et créer du contenu pédagogique. Stack : React Native 0.81, Expo 54, TypeScript 5.9, Supabase (auth + PostgreSQL), React Native Reanimated, i18next, support iOS/Android/Web.",
    hasScreenshots: true,
  },
  {
    id: "workspace",
    title: "Workspace React Native Optimisé",
    tagline: "Configuration Claude Code pour dev mobile autonome",
    tags: ["MCP Servers", "Claude Code", "ADB", "Maestro", "Automatisation"],
    stats: "20k lignes • 6 serveurs MCP",
    content: "Environnement de développement configuré pour maximiser l'autonomie de Claude Code. Serveurs MCP intégrés : Figma, Supabase, ADB, Maestro, Mobile MCP, Sequential Thinking. Scripts permettant à l'IA de visualiser l'émulateur via screenshots automatiques et d'itérer jusqu'au résultat souhaité sans intervention humaine.",
  },
  {
    id: "bot-shooting",
    title: "Bot Shooting IA",
    tagline: "Génération de shootings photo IA pour e-commerce",
    tags: ["Python", "Node.js", "Telegram API", "IA Générative", "Shopify/Liquid"],
    stats: "MVP fonctionnel",
    secondaryBadge: "Marché trop early",
    content: "Bot Telegram permettant d'envoyer plusieurs produits e-commerce et de générer des shootings photos IA avec mannequin portant les articles. Objectif : permettre aux petits e-commerçants de créer des bundles visuels comme les grands sites (Asos, Levis). Coût par shooting : ~1€. Projet arrêté car la technologie IA n'était pas encore assez mature pour les détails vestimentaires.",
  },
  {
    id: "automations",
    title: "Automatisations IA E-commerce",
    tagline: "Workflows IA pour réponses clients et qualification leads",
    tags: ["Python", "n8n", "API Mail", "Instagram API"],
    stats: "3 automatisations • ~10 mails/jour traités",
    content: "",
    subSections: [
      { title: "Réponse auto suivi colis", description: "Détection automatique des demandes de suivi et réponse avec infos tracking" },
      { title: "Collecte d'avis intelligente", description: "L'IA identifie si le client est satisfait avant d'envoyer le lien d'avis" },
      { title: "Qualification leads Instagram", description: "Pour un coach sportif, l'IA qualifie les prospects via DM et envoie le lien de RDV si qualifié" },
    ],
  },
  {
    id: "shopify-sections",
    title: "Sections Shopify Custom",
    tagline: "Développement front Shopify personnalisé",
    tags: ["Liquid", "HTML/CSS", "JavaScript"],
    stats: "",
    content: "Création de sections custom pour boutiques Shopify : modules d'upsell, cross-sell, et sections visuelles pour mettre en avant les bénéfices produits.",
  },
];

const devStack = [
  { category: "Mobile", items: [
    { icon: SiReact, name: "React Native" },
    { icon: SiExpo, name: "Expo" },
    { icon: SiTypescript, name: "TypeScript" },
  ]},
  { category: "Backend", items: [
    { icon: SiSupabase, name: "Supabase" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiNodedotjs, name: "Node.js" },
  ]},
  { category: "IA & Automatisation", items: [
    { icon: Bot, name: "Claude Code" },
    { icon: Zap, name: "Perplexity API" },
    { icon: Cpu, name: "n8n" },
    { icon: SiPython, name: "Python" },
  ]},
  { category: "DevOps IA", items: [
    { icon: Code, name: "MCP Servers" },
  ]},
  { category: "E-commerce", items: [
    { icon: SiShopify, name: "Shopify" },
    { icon: Code, name: "Liquid" },
    { icon: SiGraphql, name: "GraphQL" },
  ]},
  { category: "Autres", items: [
    { icon: Code, name: "SQL" },
    { icon: SiGit, name: "Git" },
  ]},
];

interface ProjectCardProps {
  project: typeof devProjects[0];
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

function ProjectCard({ project, isExpanded, onToggle, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <div
        onClick={onToggle}
        className="group cursor-pointer border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm hover:border-border transition-all duration-300 overflow-hidden"
      >
        {/* Header */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                {project.badge && (
                  <Badge className="bg-primary/10 text-primary border-0 text-xs">
                    <Star className="h-3 w-3 mr-1" />
                    {project.badge}
                  </Badge>
                )}
                {project.secondaryBadge && (
                  <Badge variant="outline" className="text-xs text-muted-foreground border-muted-foreground/30">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    {project.secondaryBadge}
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground text-sm">{project.tagline}</p>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="p-2 rounded-full bg-secondary/50 text-muted-foreground group-hover:bg-secondary group-hover:text-foreground transition-colors"
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal rounded-full">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Stats */}
          {project.stats && (
            <p className="text-primary text-sm font-medium">{project.stats}</p>
          )}
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-2 border-t border-border/30">
                {project.content && (
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.content}
                  </p>
                )}

                {/* Sub-sections for automations project */}
                {project.subSections && (
                  <div className="space-y-3">
                    {project.subSections.map((section, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>
                          <span className="text-foreground font-medium text-sm">{section.title}</span>
                          <span className="text-muted-foreground text-sm"> : {section.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Screenshots placeholder */}
                {project.hasScreenshots && (
                  <div className="mt-4">
                    <p className="text-muted-foreground text-xs mb-3">Screenshots</p>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-[9/16] rounded-lg bg-secondary/50 border border-border/30 flex items-center justify-center">
                          <ImageIcon className="h-6 w-6 text-muted-foreground/50" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function DeveloppementContent() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          AI Engineer & Problem Solver
        </h2>
        <p className="text-muted-foreground italic text-lg mb-8">
          "Je conçois l'architecture, l'IA exécute."
        </p>

        {/* Metrics */}
        <div className="flex justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground">80k</div>
            <div className="text-muted-foreground text-sm">lignes de code</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground">20k</div>
            <div className="text-muted-foreground text-sm">lignes (workspace)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground">1 mois</div>
            <div className="text-muted-foreground text-sm">→ app complète</div>
          </div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <div>
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-foreground mb-6"
        >
          Projets
        </motion.h3>
        <div className="space-y-4">
          {devProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Stack Section */}
      <div>
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-foreground mb-6"
        >
          Stack
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {devStack.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + catIndex * 0.1 }}
              className="p-4 rounded-xl border border-border/50 bg-card/30"
            >
              <h4 className="text-xs uppercase tracking-wider text-primary mb-3 font-medium">
                {category.category}
              </h4>
              <div className="space-y-2">
                {category.items.map((item) => {
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

      {/* Philosophy Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <GlassCard className="p-8 text-center">
          <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
            "Je n'avais aucune connaissance technique en React Native. Mais je maîtrise l'architecture, la logique métier, et j'utilise l'IA pour exécuter. Résultat : une app de 80k lignes en 1 mois."
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}

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
        <div className="overflow-x-auto mb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <TabsList className="inline-flex w-max min-w-full h-auto p-1.5 bg-background/80 border border-border/50 backdrop-blur-sm gap-2 rounded-xl">
            <TabsTrigger 
              value="developpement" 
              className="bg-secondary/60 hover:bg-secondary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-4 text-xs md:text-sm flex items-center gap-2 whitespace-nowrap rounded-lg transition-all"
            >
              <Code className="h-4 w-4" />
              Développement
            </TabsTrigger>
            <TabsTrigger 
              value="ecommerce"
              className="bg-secondary/60 hover:bg-secondary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-4 text-xs md:text-sm flex items-center gap-2 whitespace-nowrap rounded-lg transition-all"
            >
              <TrendingUp className="h-4 w-4" />
              Ecommerce
            </TabsTrigger>
            <TabsTrigger 
              value="acquisition"
              className="bg-secondary/60 hover:bg-secondary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-4 text-xs md:text-sm flex items-center gap-2 whitespace-nowrap rounded-lg transition-all"
            >
              <Target className="h-4 w-4" />
              Acquisition
            </TabsTrigger>
            <TabsTrigger 
              value="academique"
              className="bg-secondary/60 hover:bg-secondary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-4 text-xs md:text-sm flex items-center gap-2 whitespace-nowrap rounded-lg transition-all"
            >
              <GraduationCap className="h-4 w-4" />
              Parcours académique
            </TabsTrigger>
          </TabsList>
        </div>

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
