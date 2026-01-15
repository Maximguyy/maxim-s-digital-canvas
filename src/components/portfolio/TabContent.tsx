import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Code, Cpu, Smartphone, TrendingUp, Globe, Users, Package, Mail, CreditCard, Target, Zap, Bot, ArrowRight, GraduationCap, MapPin, Calendar, ChevronDown, Star, AlertTriangle, Github } from "lucide-react";
import { SiReact, SiPython, SiShopify, SiSupabase, SiTypescript, SiGit, SiExpo, SiPostgresql, SiNodedotjs, SiGraphql, SiStripe, SiPaypal, SiFacebook, SiInstagram, SiGoogleads, SiPinterest } from "@icons-pack/react-simple-icons";
import { SectionTitle } from "./SectionTitle";
import { ScreenshotCarousel } from "./ScreenshotCarousel";
import { NoorAppCard } from "./NoorAppCard";
import cpgeImage from "@/assets/cpge-eucalyptus.jpg";
import esilvImage from "@/assets/esilv.webp";
import ucaImage from "@/assets/uca.jpg";
import massenaImage from "@/assets/massena.jpg";

// ==================== DÉVELOPPEMENT ====================
const devProjects = [{
  id: "workspace",
  title: "Workspace React Native Optimisé",
  tagline: "Configuration Claude Code pour dev mobile autonome",
  tags: ["MCP Servers", "Claude Code", "ADB", "Maestro", "Automatisation"],
  stats: "20k lignes • 6 serveurs MCP",
  content: "Environnement de développement configuré pour maximiser l'autonomie de Claude Code. Serveurs MCP intégrés : Figma, Supabase, ADB, Maestro, Mobile MCP, Sequential Thinking. Scripts permettant à l'IA de visualiser l'émulateur via screenshots automatiques et d'itérer jusqu'au résultat souhaité sans intervention humaine.",
  githubUrl: "https://github.com/Maximguyy/RN-Workspace"
}, {
  id: "outfit-bundle",
  title: "Outfit Bundle",
  tagline: "Génération de shootings photo IA pour e-commerce",
  tags: ["Python", "Node.js", "Telegram API", "IA Générative", "Shopify/Liquid"],
  stats: "MVP fonctionnel",
  secondaryBadge: "Marché trop early",
  content: "Bot Telegram permettant d'envoyer plusieurs produits e-commerce et de générer des shootings photos IA avec mannequin portant les articles. Objectif : permettre aux petits e-commerçants de créer des bundles visuels comme les grands sites (Asos, Levis). Coût par shooting : ~1€. Projet arrêté car la technologie IA n'était pas encore assez mature pour les détails vestimentaires.",
  githubUrl: "https://github.com/Maximguyy/OutfitBundle"
}, {
  id: "automations",
  title: "Automatisations IA E-commerce",
  tagline: "Workflows IA pour réponses clients et qualification leads",
  tags: ["Python", "n8n", "API Mail", "Instagram API"],
  stats: "3 automatisations • ~10 mails/jour traités",
  content: "",
  subSections: [{
    title: "Réponse auto suivi colis",
    description: "Détection automatique des demandes de suivi et réponse avec infos tracking"
  }, {
    title: "Collecte d'avis intelligente",
    description: "L'IA identifie si le client est satisfait avant d'envoyer le lien d'avis"
  }, {
    title: "Qualification leads Instagram",
    description: "Pour un coach sportif, l'IA qualifie les prospects via DM et envoie le lien de RDV si qualifié"
  }]
}, {
  id: "shopify-sections",
  title: "Sections Shopify Custom",
  tagline: "Développement front Shopify personnalisé",
  tags: ["Liquid", "HTML/CSS", "JavaScript"],
  stats: "",
  content: "Création de sections custom pour boutiques Shopify : modules d'upsell, cross-sell, et sections visuelles pour mettre en avant les bénéfices produits."
}];
const devStack = [{
  category: "Mobile",
  items: [{
    icon: SiReact,
    name: "React Native"
  }, {
    icon: SiExpo,
    name: "Expo"
  }, {
    icon: SiTypescript,
    name: "TypeScript"
  }]
}, {
  category: "Backend",
  items: [{
    icon: SiSupabase,
    name: "Supabase"
  }, {
    icon: SiPostgresql,
    name: "PostgreSQL"
  }, {
    icon: SiNodedotjs,
    name: "Node.js"
  }]
}, {
  category: "IA & Automatisation",
  items: [{
    icon: Bot,
    name: "Claude Code"
  }, {
    icon: Zap,
    name: "Perplexity API"
  }, {
    icon: Cpu,
    name: "n8n"
  }, {
    icon: SiPython,
    name: "Python"
  }]
}, {
  category: "DevOps IA",
  items: [{
    icon: Code,
    name: "MCP Servers"
  }]
}, {
  category: "E-commerce",
  items: [{
    icon: SiShopify,
    name: "Shopify"
  }, {
    icon: Code,
    name: "Liquid"
  }, {
    icon: SiGraphql,
    name: "GraphQL"
  }]
}, {
  category: "Autres",
  items: [{
    icon: Code,
    name: "SQL"
  }, {
    icon: SiGit,
    name: "Git"
  }]
}];
interface DevProject {
  id: string;
  title: string;
  tagline: string;
  tags: string[];
  stats: string;
  content: string;
  githubUrl?: string;
  secondaryBadge?: string;
  subSections?: { title: string; description: string }[];
}

interface ProjectCardProps {
  project: DevProject;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}
function ProjectCard({
  project,
  isExpanded,
  onToggle,
  index
}: ProjectCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    delay: index * 0.1,
    duration: 0.4
  }}>
      <div onClick={onToggle} className="group cursor-pointer border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm hover:border-border transition-all duration-300 overflow-hidden">
        {/* Header */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                {project.secondaryBadge && <Badge variant="outline" className="text-xs text-muted-foreground border-muted-foreground/30">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    {project.secondaryBadge}
                  </Badge>}
              </div>
              <p className="text-muted-foreground text-sm">{project.tagline}</p>
            </div>
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              <motion.div animate={{
              rotate: isExpanded ? 180 : 0
            }} transition={{
              duration: 0.2
            }} className="p-2 rounded-full bg-secondary/50 text-muted-foreground group-hover:bg-secondary group-hover:text-foreground transition-colors">
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => <Badge key={tag} variant="secondary" className="text-xs font-normal rounded-full">
                {tag}
              </Badge>)}
          </div>

          {/* Stats */}
          {project.stats && <p className="text-primary text-sm font-medium">{project.stats}</p>}
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: "auto",
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="overflow-hidden">
              <div className="px-6 pb-6 pt-2 border-t border-border/30">
                {project.content && <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.content}
                  </p>}

                {/* Sub-sections for automations project */}
                {project.subSections && <div className="space-y-3">
                    {project.subSections.map((section, idx) => <div key={idx} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>
                          <span className="text-foreground font-medium text-sm">{section.title}</span>
                          <span className="text-muted-foreground text-sm"> : {section.description}</span>
                        </div>
                      </div>)}
                  </div>}
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </motion.div>;
}
function DeveloppementContent() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  return <div className="space-y-16">
      {/* Hero Section */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          AI Engineer
        </h2>
      </motion.div>

      {/* Stack Section */}
      <div>
        <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2
        }}>
          <SectionTitle>Stack</SectionTitle>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {devStack.map((category, catIndex) => <motion.div key={category.category} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2 + catIndex * 0.1
        }} className="p-4 rounded-xl border border-border/50 bg-card/30">
              <h4 className="text-xs uppercase tracking-wider text-primary mb-3 font-medium">
                {category.category}
              </h4>
              <div className="space-y-2">
                {category.items.map(item => {
              const IconComponent = item.icon;
              return <div key={item.name} className="flex items-center gap-2 text-foreground text-sm">
                      <IconComponent className="h-4 w-4 text-muted-foreground" />
                      {item.name}
                    </div>;
            })}
              </div>
            </motion.div>)}
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.3
      }}>
          <SectionTitle>Projets</SectionTitle>
        </motion.div>
        <div className="space-y-4">
          {/* Noor App - Special Card */}
          <NoorAppCard index={0} />
          
          {/* Other Projects */}
          {devProjects.map((project, index) => <ProjectCard key={project.id} project={project} isExpanded={expandedId === project.id} onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)} index={index + 1} />)}
        </div>
      </div>
    </div>;
}

// ==================== E-COMMERCE ====================
const ecomSkills = [{
  icon: Globe,
  title: "Création de sites e-commerce",
  items: ["Sites Shopify optimisés conversion", "Landing pages data-driven", "Snippets & thèmes custom"]
}, {
  icon: TrendingUp,
  title: "Publicité & Acquisition",
  items: ["Meta Ads (Facebook & Instagram)", "Optimisation LTV client", "Stratégies upsell, cross-sell"]
}, {
  icon: Package,
  title: "Supply Chain",
  items: ["Négociation avec usines", "Gestion stocks internationale", "Entrepôts 3PL (Chine & Europe)"]
}, {
  icon: Mail,
  title: "Automation Marketing",
  items: ["Emailing automatisé", "SMS & WhatsApp automation", "Séquences de relance"]
}];

function EcommerceContent() {
  return <div className="space-y-8">
      {/* KPI's Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <SectionTitle>KPI's</SectionTitle>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {/* Chiffre d'affaires */}
        <GlassCard className="p-4 md:p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" } as React.CSSProperties}>
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center -space-x-2 md:-space-x-3">
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#635BFF] flex items-center justify-center ring-2 ring-background z-30">
                <SiStripe className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#003087] flex items-center justify-center ring-2 ring-background z-20">
                <SiPaypal className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#96BF48] flex items-center justify-center ring-2 ring-background z-10">
                <SiShopify className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
              </div>
            </div>
          </div>
          <div className="text-2xl md:text-5xl font-bold text-primary mb-1 md:mb-2">
            700k€
          </div>
          <div className="text-muted-foreground text-xs md:text-base">Chiffre d'affaires généré</div>
        </GlassCard>

        {/* Investissement Ads */}
        <GlassCard className="p-4 md:p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" } as React.CSSProperties}>
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center -space-x-2 md:-space-x-3">
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#1877F2] flex items-center justify-center ring-2 ring-background z-40">
                <SiFacebook className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center ring-2 ring-background z-30">
                <SiInstagram className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#4285F4] flex items-center justify-center ring-2 ring-background z-20">
                <SiGoogleads className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
              </div>
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#E60023] flex items-center justify-center ring-2 ring-background z-10">
                <SiPinterest className="w-3.5 h-3.5 md:w-5 md:h-5 text-white" />
              </div>
            </div>
          </div>
          <div className="text-2xl md:text-5xl font-bold text-primary mb-1 md:mb-2">
            200k€
          </div>
          <div className="text-muted-foreground text-xs md:text-base">Investis en publicité</div>
        </GlassCard>
      </div>

      {/* Skills */}
      <div className="grid md:grid-cols-2 gap-4">
        {ecomSkills.map(skill => <GlassCard key={skill.title} className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <skill.icon className="h-4 w-4 text-primary" />
              <h4 className="font-semibold text-foreground text-sm">{skill.title}</h4>
            </div>
            <ul className="space-y-1">
              {skill.items.map(item => <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary/50" />
                  {item}
                </li>)}
            </ul>
          </GlassCard>)}
      </div>
    </div>;
}

// ==================== ACQUISITION ====================
const acquisitionHighlights = [{
  icon: Target,
  title: "Publicité Meta",
  description: "Création et optimisation de campagnes Facebook & Instagram pour l'acquisition de nouveaux clients."
}, {
  icon: Bot,
  title: "Automatisation IA",
  description: "Développement de workflows d'automatisation avec n8n, puis migration vers Python pour plus de performance."
}, {
  icon: Zap,
  title: "Suivi client",
  description: "Automatisation du suivi par SMS, upsell email et relance de leads potentiels."
}];
function AcquisitionContent() {
  return <div className="space-y-8">
      {/* Présentation */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">Présentation :</h3>
        <p className="text-muted-foreground leading-relaxed">
          6 mois en agence d'acquisition & automatisation IA, accompagnant 3 clients. Transition de n8n vers Python custom pour des gains en rapidité, efficacité, personnalisation et coût.
        </p>
      </div>

      {/* Highlights */}
      <div className="grid md:grid-cols-3 gap-4">
        {acquisitionHighlights.map(item => <GlassCard key={item.title} className="p-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-3">
              <item.icon className="h-5 w-5" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </GlassCard>)}
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
    </div>;
}

// ==================== ACADÉMIQUE ====================

const timeline = [{
  period: "2023 - 2024",
  title: "ESILV Paris",
  subtitle: "École d'ingénieur informatique",
  location: "Paris",
  current: false,
  image: esilvImage
}, {
  period: "2021 - 2023",
  title: "Double Licence Maths/Physique",
  subtitle: "Université Nice Côte d'Azur",
  location: "Nice",
  current: false,
  image: ucaImage
}, {
  period: "2020 - 2021",
  title: "CPGE PTSI",
  subtitle: "Lycée des Eucalyptus",
  location: "Nice",
  current: false,
  image: cpgeImage
}, {
  period: "2020",
  title: "Baccalauréat S",
  subtitle: "Mention Assez Bien • Lycée Masséna",
  location: "Nice",
  note: "Année COVID",
  current: false,
  image: massenaImage
}];
function AcademiqueContent() {
  return <div className="space-y-6">
      {/* Présentation */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">Parcours :</h3>
        <p className="text-muted-foreground leading-relaxed">
          Formation scientifique solide de Nice à Paris, du Bac S jusqu'à l'école d'ingénieur en informatique.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {timeline.map(item => <GlassCard key={item.title} className="p-4 overflow-hidden">
            <div className="flex items-stretch gap-4">
              {/* Image */}
              <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-primary text-sm mb-1">
                  <Calendar className="h-3 w-3" />
                  {item.period}
                  {item.current && <Badge variant="default" className="text-xs ml-2">En cours</Badge>}
                </div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.subtitle}</p>
                <div className="flex items-center gap-1 text-muted-foreground text-xs mt-1">
                  <MapPin className="h-3 w-3" />
                  {item.location}
                </div>
                {item.note && <p className="text-primary/70 text-xs mt-1">• {item.note}</p>}
              </div>
            </div>
          </GlassCard>)}
      </div>
    </div>;
}
interface TabContentProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}
export function TabContent({
  activeTab,
  onTabChange
}: TabContentProps) {
  return <div className="w-full">
      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        <div className="overflow-x-auto mb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <TabsList className="inline-flex w-max min-w-full h-auto p-1.5 bg-background/80 border border-border/50 backdrop-blur-sm gap-2 rounded-xl">
            <TabsTrigger value="developpement" className="bg-secondary/60 hover:bg-secondary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-4 text-xs md:text-sm flex items-center gap-2 whitespace-nowrap rounded-lg transition-all">
              <Code className="h-4 w-4" />
              Développement
            </TabsTrigger>
            <TabsTrigger value="ecommerce" className="bg-secondary/60 hover:bg-secondary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-4 text-xs md:text-sm flex items-center gap-2 whitespace-nowrap rounded-lg transition-all">
              <TrendingUp className="h-4 w-4" />
              Ecommerce
            </TabsTrigger>
            <TabsTrigger value="acquisition" className="bg-secondary/60 hover:bg-secondary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-4 text-xs md:text-sm flex items-center gap-2 whitespace-nowrap rounded-lg transition-all">
              <Target className="h-4 w-4" />
              Acquisition
            </TabsTrigger>
            <TabsTrigger value="academique" className="bg-secondary/60 hover:bg-secondary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-4 text-xs md:text-sm flex items-center gap-2 whitespace-nowrap rounded-lg transition-all">
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
    </div>;
}