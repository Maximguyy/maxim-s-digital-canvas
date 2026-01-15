import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Code, Cpu, Smartphone, TrendingUp, Globe, Users, Package, Mail, CreditCard, Target, Zap, Bot, ArrowRight, GraduationCap, MapPin, Calendar, ChevronDown, Star, AlertTriangle, Github, Store, ShoppingBag, X, Rocket, BarChart3, Settings } from "lucide-react";
import { SiReact, SiPython, SiShopify, SiSupabase, SiTypescript, SiGit, SiExpo, SiPostgresql, SiNodedotjs, SiGraphql, SiStripe, SiPaypal, SiFacebook, SiInstagram, SiGoogleads, SiPinterest } from "@icons-pack/react-simple-icons";
import { SectionTitle } from "./SectionTitle";
import { ScreenshotCarousel } from "./ScreenshotCarousel";
import { NoorAppCard } from "./NoorAppCard";
import { EcomStackSection } from "./EcomStackSection";
import { useCountUp } from "@/hooks/useCountUp";
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
  subSections?: {
    title: string;
    description: string;
  }[];
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
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                  <Github className="h-4 w-4" />
                </a>}
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
// Boutiques data
const boutiques = [
  {
    year: 2023,
    shops: [
      {
        name: "Shors.fr",
        ca: 200000,
        niche: "Fashion streetwear",
        highlight: "Principale source de CA, scaling agressif (Nov 2023: 8k€ → Déc 2023: +100k€)"
      }
    ]
  },
  {
    year: 2024,
    shops: [
      {
        name: "Domozi.com",
        ca: 150000,
        niche: "Fashion mixte",
        highlight: "Deuxième plus grosse boutique"
      },
      {
        name: "Loumys.com",
        ca: 90000,
        niche: "Fashion mixte (homme/femme)",
        highlight: null
      },
      {
        name: "Hartic.fr",
        ca: 80000,
        niche: "Tech beauté féminine (lisseurs, boucleurs, épilateurs)",
        highlight: "Diversification de niche réussie"
      }
    ]
  },
  {
    year: 2025,
    shops: [
      {
        name: "Juliette-Toulouse.com",
        ca: 70000,
        niche: "Fashion féminine",
        highlight: "Brand positioning local"
      }
    ]
  }
];

function CountUpKPI({ end, suffix = "€" }: { end: number; suffix?: string }) {
  const { formattedCount, ref } = useCountUp({ end, suffix, duration: 2000 });
  return <div ref={ref}>{formattedCount}</div>;
}

function EcommerceContent() {
  const [adsExpanded, setAdsExpanded] = useState(false);
  // Removed version selector - now responsive: table on desktop, list on mobile
  const adsBreakdownRef = useRef<HTMLDivElement>(null);

  const handleAdsClick = () => {
    const newExpanded = !adsExpanded;
    setAdsExpanded(newExpanded);
    if (newExpanded) {
      setTimeout(() => {
        adsBreakdownRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    }
  };

  return <div className="space-y-12">
      {/* KPI's Title */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.1
    }}>
        <SectionTitle>KPI's</SectionTitle>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Chiffre d'affaires */}
        <GlassCard className="p-4 md:p-6 opacity-0 animate-fade-in" style={{
        animationDelay: "0.1s"
      } as React.CSSProperties}>
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center -space-x-2">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#635BFF] flex items-center justify-center ring-2 ring-background z-30">
                <SiStripe className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#003087] flex items-center justify-center ring-2 ring-background z-20">
                <SiPaypal className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#96BF48] flex items-center justify-center ring-2 ring-background z-10">
                <SiShopify className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-primary mb-1 md:mb-2">
            <CountUpKPI end={700000} />
          </div>
          <div className="text-muted-foreground text-xs md:text-sm md:whitespace-nowrap">Chiffre d'affaires généré</div>
        </GlassCard>

        {/* Investissement Ads - Clickable */}
        <GlassCard 
          className={`p-4 md:p-6 opacity-0 animate-fade-in cursor-pointer transition-all duration-300 hover:border-primary/50 ${adsExpanded ? 'ring-2 ring-primary/30' : ''}`} 
          style={{ animationDelay: "0.2s" } as React.CSSProperties}
          onClick={handleAdsClick}
        >
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center -space-x-2">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#1877F2] flex items-center justify-center ring-2 ring-background z-40">
                <SiFacebook className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center ring-2 ring-background z-30">
                <SiInstagram className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#4285F4] flex items-center justify-center ring-2 ring-background z-20">
                <SiGoogleads className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#E60023] flex items-center justify-center ring-2 ring-background z-10">
                <SiPinterest className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </div>
            </div>
            <motion.div 
              animate={{ rotate: adsExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="p-1.5 rounded-full bg-primary/10 text-primary"
            >
              <ChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </motion.div>
          </div>
          <div className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-primary mb-1 md:mb-2">
            <CountUpKPI end={200000} />
          </div>
          <div className="text-muted-foreground text-xs md:text-sm md:whitespace-nowrap">Investis en publicité</div>
        </GlassCard>

        {/* Commandes traitées */}
        <GlassCard className="p-4 md:p-6 opacity-0 animate-fade-in" style={{
        animationDelay: "0.3s"
      } as React.CSSProperties}>
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Package className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            </div>
          </div>
          <div className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-primary mb-1 md:mb-2">
            <CountUpKPI end={11000} suffix="+" />
          </div>
          <div className="text-muted-foreground text-xs md:text-sm md:whitespace-nowrap">Commandes traitées</div>
        </GlassCard>

        {/* Meilleur mois */}
        <GlassCard className="p-4 md:p-6 opacity-0 animate-fade-in" style={{
        animationDelay: "0.4s"
      } as React.CSSProperties}>
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            </div>
          </div>
          <div className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-primary mb-1 md:mb-2">
            <CountUpKPI end={100000} />
          </div>
          <div className="text-muted-foreground text-xs md:text-sm md:whitespace-nowrap">Meilleur mois (Déc. 2023)</div>
        </GlassCard>
      </div>

      {/* Ads Breakdown - Expandable */}
      <AnimatePresence>
        {adsExpanded && (
          <motion.div
            ref={adsBreakdownRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden -mt-8"
          >
            <GlassCard className="p-4 md:p-6" hover={false}>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-foreground">Répartition du budget publicitaire</h4>
                <button 
                  onClick={() => setAdsExpanded(false)}
                  className="p-1 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <div className="space-y-3">
                {/* Meta (Facebook + Instagram) */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center ring-2 ring-background z-20">
                        <SiFacebook className="w-4 h-4 text-white" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center ring-2 ring-background z-10">
                        <SiInstagram className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <span className="text-foreground font-medium text-sm">Meta Ads</span>
                  </div>
                  <span className="text-primary font-bold">185 000€</span>
                </div>

                {/* Pinterest */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E60023] flex items-center justify-center">
                      <SiPinterest className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground font-medium text-sm">Pinterest Ads</span>
                  </div>
                  <span className="text-primary font-bold">9 000€</span>
                </div>

                {/* Google */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#4285F4] flex items-center justify-center">
                      <SiGoogleads className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-foreground font-medium text-sm">Google Ads</span>
                      <p className="text-muted-foreground text-xs">Campagnes de branding uniquement</p>
                    </div>
                  </div>
                  <span className="text-primary font-bold">6 000€</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Boutiques Section */}
      <div className="mt-12">
        <SectionTitle>Boutiques</SectionTitle>
        
        {/* Info about closed shops */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 p-4 rounded-xl bg-muted/50 border border-border/50"
        >
          <p className="text-muted-foreground text-sm">
            <span className="text-foreground font-medium">Note :</span> Toutes les boutiques sont fermées. Elles fonctionnaient uniquement via la publicité payante — sans ads, pas de traffic. Il était donc inutile de les maintenir actives.
          </p>
        </motion.div>

        {/* Mobile: Liste - Desktop: Tableau */}
        
        {/* VERSION MOBILE - Liste */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden space-y-3"
        >
          {boutiques.flatMap(yearGroup => 
            yearGroup.shops.map((shop, index) => (
              <motion.div
                key={shop.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border dark:border-border/50 border-l-4 border-l-primary hover:bg-card/80 transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground truncate">{shop.name}</h4>
                      <Badge variant="outline" className="text-xs shrink-0">{yearGroup.year}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm truncate">{shop.niche}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xl font-bold text-primary">{shop.ca.toLocaleString('fr-FR')}€</p>
                  </div>
                </div>
              </motion.div>
            ))
          )}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border dark:border-border/50 border-l-4 border-l-muted-foreground/50">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-foreground">6-7 boutiques test</h4>
                  <Badge variant="outline" className="text-xs">2023-2024</Badge>
                </div>
                <p className="text-muted-foreground text-sm">Test & learn</p>
              </div>
              <p className="text-xl font-bold text-primary">80 000€</p>
            </div>
          </motion.div>
        </motion.div>

        {/* VERSION DESKTOP - Tableau */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden md:block rounded-2xl border border-border dark:border-border/50 overflow-hidden"
        >
          <div className="bg-muted/30 px-4 py-3 border-b border-border dark:border-border/50 grid grid-cols-12 gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            <div className="col-span-4">Boutique</div>
            <div className="col-span-4">Niche</div>
            <div className="col-span-2 text-center">Année</div>
            <div className="col-span-2 text-right">CA</div>
          </div>
          {boutiques.flatMap(yearGroup => 
            yearGroup.shops.map((shop, index) => (
              <motion.div
                key={shop.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-4 border-b border-border dark:border-border/30 grid grid-cols-12 gap-4 items-center hover:bg-muted/20 transition-colors"
              >
                <div className="col-span-4">
                  <h4 className="font-semibold text-foreground">{shop.name}</h4>
                </div>
                <div className="col-span-4">
                  <p className="text-muted-foreground text-sm truncate">{shop.niche}</p>
                </div>
                <div className="col-span-2 text-center">
                  <Badge variant="outline" className="text-xs">{yearGroup.year}</Badge>
                </div>
                <div className="col-span-2 text-right">
                  <p className="font-bold text-primary">{shop.ca.toLocaleString('fr-FR')}€</p>
                </div>
              </motion.div>
            ))
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="px-4 py-4 grid grid-cols-12 gap-4 items-center bg-muted/10"
          >
            <div className="col-span-4">
              <h4 className="font-semibold text-foreground">6-7 boutiques test</h4>
            </div>
            <div className="col-span-4">
              <p className="text-muted-foreground text-sm">Test & learn</p>
            </div>
            <div className="col-span-2 text-center">
              <Badge variant="outline" className="text-xs">2023-24</Badge>
            </div>
            <div className="col-span-2 text-right">
              <p className="font-bold text-primary">80 000€</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stack E-commerce Section */}
      <EcomStackSection />

      {/* Expertise Section - 3 Pillars */}
      <div>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2 }}
        >
          <SectionTitle>Expertise</SectionTitle>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Acquisition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-5 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-foreground text-lg">Acquisition</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Meta Ads (FB/IG)
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Pinterest & Google Ads
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Creative testing massif
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  ROAS optimization at scale
                </li>
              </ul>
            </GlassCard>
          </motion.div>

          {/* Conversion */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="p-5 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-foreground text-lg">Conversion</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Shopify custom (Liquid/JS)
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Landing pages optimisées
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Email & SMS automation
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Upsell/Cross-sell strategies
                </li>
              </ul>
            </GlassCard>
          </motion.div>

          {/* Operations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4 }}
          >
            <GlassCard className="p-5 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Package className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-foreground text-lg">Operations</h4>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Dropshipping → Stock propre
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Supply chain (Chine/Europe)
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Sourcing et personnalisation de produits
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Analytics (Triple Whale, True Profit)
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Team building & SOPs
                </li>
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Méthodologie Section - Timeline horizontale */}
      <div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          <SectionTitle>Méthodologie</SectionTitle>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Étape 1 - Test */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="p-5 h-full relative overflow-hidden">
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">1</span>
              </div>
              <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                <Rocket className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-foreground text-lg mb-2">Test</h4>
              <p className="text-muted-foreground text-sm">
                Lancement multi-produits rapide (fail fast approach)
              </p>
            </GlassCard>
          </motion.div>

          {/* Étape 2 - Analyse */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-5 h-full relative overflow-hidden">
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">2</span>
              </div>
              <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-foreground text-lg mb-2">Analyse</h4>
              <p className="text-muted-foreground text-sm">
                Identification winners (data-driven)
              </p>
            </GlassCard>
          </motion.div>

          {/* Étape 3 - Scale */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="p-5 h-full relative overflow-hidden">
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">3</span>
              </div>
              <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-foreground text-lg mb-2">Scale</h4>
              <p className="text-muted-foreground text-sm">
                Stock propre + personnalisation produit (optimisation satisfaction client)
              </p>
            </GlassCard>
          </motion.div>

          {/* Étape 4 - Optimize */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4 }}
          >
            <GlassCard className="p-5 h-full relative overflow-hidden">
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">4</span>
              </div>
              <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                <Settings className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-foreground text-lg mb-2">Optimize</h4>
              <p className="text-muted-foreground text-sm">
                Team + Process + A/B testing continu + Mass test ads
              </p>
            </GlassCard>
          </motion.div>
        </div>
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
  
  current: false,
  image: massenaImage
}];
function AcademiqueContent() {
  return <div className="space-y-6">
      {/* Présentation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>Parcours</SectionTitle>
      </motion.div>

      {/* Timeline */}
      <div className="space-y-4">
        {timeline.map(item => <GlassCard key={item.title} className="overflow-hidden">
            <div className="flex items-stretch">
              {/* Image */}
              <div className="w-24 md:w-32 flex-shrink-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center p-4">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-primary text-sm">
                    <Calendar className="h-3 w-3" />
                    {item.period}
                    {item.current && <Badge variant="default" className="text-xs ml-2">En cours</Badge>}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs">
                    <MapPin className="h-3 w-3" />
                    {item.location}
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.subtitle}</p>
                
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