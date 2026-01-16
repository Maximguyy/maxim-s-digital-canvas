import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Code, Cpu, Smartphone, TrendingUp, Globe, Users, Package, Mail, CreditCard, Target, Zap, Bot, ArrowRight, GraduationCap, MapPin, Calendar, ChevronDown, Star, AlertTriangle, Github, Store, ShoppingBag, X, Rocket, BarChart3, Settings, Ship, Navigation, Cog, TestTube, Wand2, Palette, MessageCircle, type LucideIcon } from "lucide-react";
import { SiReact, SiPython, SiShopify, SiSupabase, SiTypescript, SiGit, SiExpo, SiPostgresql, SiNodedotjs, SiGraphql, SiStripe, SiPaypal, SiFacebook, SiInstagram, SiGoogleads, SiPinterest, SiFastapi, SiRedis, SiWhatsapp, SiDocker, SiHetzner, SiN8n, SiJavascript, SiHtml5, SiGmail, SiOpenai, SiRemix, SiPrisma, SiSqlite, SiI18next, SiMeta, SiGooglesheets, type IconType } from "@icons-pack/react-simple-icons";
import { SectionTitle } from "./SectionTitle";
import { ScreenshotCarousel } from "./ScreenshotCarousel";
import { NoorAppCard } from "./NoorAppCard";
import { AIPhotoShootCard } from "./AIPhotoShootCard";
import { WorkspaceCard } from "./WorkspaceCard";
import { InstagramCoachCard } from "./InstagramCoachCard";
import { EcomStackSection } from "./EcomStackSection";
import { AcquisitionSection } from "./AcquisitionSection";
import { TableOfContents } from "./TableOfContents";
import { useCountUp } from "@/hooks/useCountUp";
import cpgeImage from "@/assets/cpge-eucalyptus.jpg";
import esilvImage from "@/assets/esilv.webp";
import ucaImage from "@/assets/uca.jpg";
import massenaImage from "@/assets/massena.jpg";

// ==================== DÉVELOPPEMENT ====================
const devProjects = [{
  id: "automations",
  title: "Automatisations IA E-commerce",
  tagline: "Workflows IA pour réponses clients automatiques",
  tags: ["Gmail API", "Shopify API", "Searates API", "OpenAI API", "n8n"],
  stats: "2 automatisations • ~10 mails/jour traités",
  content: "",
  subSections: [{
    title: "Réponse auto suivi colis",
    description: "Détection automatique des demandes de suivi et réponse avec infos tracking"
  }, {
    title: "Collecte d'avis intelligente",
    description: "L'IA identifie si le client est satisfait avant d'envoyer le lien d'avis"
  }],
  stack: [{
    name: "Gmail API",
    category: "Mail",
    icon: SiGmail
  }, {
    name: "Shopify API",
    category: "E-commerce",
    icon: SiShopify
  }, {
    name: "Searates API",
    category: "Tracking",
    icon: Ship
  }, {
    name: "OpenAI API",
    category: "IA",
    icon: SiOpenai
  }, {
    name: "n8n",
    category: "Automation",
    icon: SiN8n
  }]
}, {
  id: "shopify-sections",
  title: "Sections Shopify Custom",
  tagline: "Développement front Shopify personnalisé",
  tags: ["Liquid", "HTML/CSS", "JavaScript"],
  stats: "",
  content: "Création de sections custom pour boutiques Shopify : modules d'upsell, cross-sell, et sections visuelles pour mettre en avant les bénéfices produits.",
  stack: [{
    name: "Liquid",
    category: "Templating",
    icon: Code
  }, {
    name: "HTML/CSS",
    category: "Frontend",
    icon: SiHtml5
  }, {
    name: "JavaScript",
    category: "Frontend",
    icon: SiJavascript
  }, {
    name: "Shopify",
    category: "E-commerce",
    icon: SiShopify
  }]
}, {
  id: "flow-qualification",
  title: "Automatisation IA Qualification Leads",
  tagline: "Automatisation WhatsApp IA pour qualification prospects",
  tags: ["WhatsApp Business API", "Claude API", "Python", "n8n"],
  stats: "Conversion : 6% formulaire → RDV",
  content: "",
  subSections: [{
    title: "Lead Meta → WhatsApp IA",
    description: "Réception automatique des leads Meta Ads et engagement via WhatsApp"
  }, {
    title: "Questions qualifiantes",
    description: "Durée tabac, rythme, âge, disponibilité - qualification automatique par l'IA"
  }, {
    title: "Routage intelligent",
    description: "Lead qualifié → Calendly → RDV ✅ | Non qualifié → Nurturing"
  }],
  stack: [{
    name: "FastAPI (webhooks)",
    category: "Backend & API",
    icon: SiFastapi
  }, {
    name: "Python (automations)",
    category: "Backend & API",
    icon: SiPython
  }, {
    name: "Redis (cache conversations)",
    category: "Bases de données",
    icon: SiRedis
  }, {
    name: "PostgreSQL (leads persistants)",
    category: "Bases de données",
    icon: SiPostgresql
  }, {
    name: "Claude API (qualification)",
    category: "IA & Messaging",
    icon: Bot
  }, {
    name: "WhatsApp Business API",
    category: "IA & Messaging",
    icon: SiWhatsapp
  }, {
    name: "Docker + Compose",
    category: "Infra & Automation",
    icon: SiDocker
  }, {
    name: "VPS Hetzner (~5€/mois)",
    category: "Infra & Automation",
    icon: SiHetzner
  }, {
    name: "n8n (workflows)",
    category: "Infra & Automation",
    icon: SiN8n
  }]
}, {
  id: "flow-avis",
  title: "Automatisation IA Collecte d'avis",
  tagline: "Collecte automatisée d'avis Google post-RDV",
  tags: ["WhatsApp Business API", "Claude API", "n8n"],
  stats: "Taux réponse : 60%",
  content: "",
  subSections: [{
    title: "RDV réalisé → Attente 7 jours",
    description: "Déclenchement automatique après délai de suivi"
  }, {
    title: "Message WhatsApp IA",
    description: "\"Comment va l'arrêt ?\" - Évaluation de la satisfaction client"
  }, {
    title: "Routage selon réponse",
    description: "Client a repris → Nouvelle séance | Satisfait → Avis Google ⭐"
  }],
  stack: [{
    name: "FastAPI (webhooks)",
    category: "Backend & API",
    icon: SiFastapi
  }, {
    name: "Python (automations)",
    category: "Backend & API",
    icon: SiPython
  }, {
    name: "Redis (cache conversations)",
    category: "Bases de données",
    icon: SiRedis
  }, {
    name: "PostgreSQL (leads persistants)",
    category: "Bases de données",
    icon: SiPostgresql
  }, {
    name: "Claude API (qualification)",
    category: "IA & Messaging",
    icon: Bot
  }, {
    name: "WhatsApp Business API",
    category: "IA & Messaging",
    icon: SiWhatsapp
  }, {
    name: "Docker + Compose",
    category: "Infra & Automation",
    icon: SiDocker
  }, {
    name: "VPS Hetzner (~5€/mois)",
    category: "Infra & Automation",
    icon: SiHetzner
  }, {
    name: "n8n (workflows)",
    category: "Infra & Automation",
    icon: SiN8n
  }]
}];

// Stack technique consolidé - 5 catégories au lieu de 9
const devStack = [{
  category: "Mobile & Apps",
  items: [
    { icon: SiReact, name: "React Native" },
    { icon: SiExpo, name: "Expo" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: Navigation, name: "Expo Router" },
    { icon: Palette, name: "Unistyles" },
    { icon: Zap, name: "Reanimated + Lottie" },
    { icon: SiI18next, name: "i18next" },
    { icon: Cog, name: "Expo SDK" },
  ]
}, {
  category: "Frontend & Web",
  items: [
    { icon: SiReact, name: "React" },
    { icon: SiRemix, name: "Remix" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiHtml5, name: "HTML/CSS" },
    { icon: SiShopify, name: "Shopify (Liquid + Polaris)" },
    { icon: SiGraphql, name: "GraphQL" },
  ]
}, {
  category: "Backend & Database",
  items: [
    { icon: SiSupabase, name: "Supabase" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiFastapi, name: "FastAPI" },
    { icon: SiPython, name: "Python" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiSqlite, name: "SQLite" },
    { icon: SiPrisma, name: "Prisma ORM" },
    { icon: SiRedis, name: "Redis" },
  ]
}, {
  category: "IA & APIs",
  items: [
    { icon: Bot, name: "Claude API" },
    { icon: SiOpenai, name: "OpenAI API" },
    { icon: Zap, name: "Perplexity API" },
    { icon: Wand2, name: "Fashn Tryon IA" },
    { icon: SiWhatsapp, name: "WhatsApp Business API" },
    { icon: SiMeta, name: "Meta API (Instagram)" },
    { icon: SiGmail, name: "Gmail API" },
    { icon: SiGooglesheets, name: "Google Sheets API" },
    { icon: Ship, name: "Searates API" },
  ]
}, {
  category: "Infrastructure",
  items: [
    { icon: SiDocker, name: "Docker + Compose" },
    { icon: SiHetzner, name: "VPS Hetzner" },
    { icon: SiN8n, name: "n8n" },
    { icon: TestTube, name: "Playwright" },
    { icon: Cpu, name: "MCP Servers" },
    { icon: SiGit, name: "Git" },
  ]
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
  stack?: {
    name: string;
    category: string;
    icon?: IconType | LucideIcon;
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
  const [stackExpanded, setStackExpanded] = useState(false);
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
      <div className="group border border-border rounded-2xl bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden">
        {/* Header - Clickable */}
        <div onClick={onToggle} className="cursor-pointer p-6">
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
              <div className="px-6 pb-6 pt-2 border-t border-border/30 space-y-4">
                {project.content && <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.content}
                  </p>}

                {/* Sub-sections */}
                {project.subSections && <div className="space-y-3">
                    {project.subSections.map((section, idx) => <div key={idx} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>
                          <span className="text-foreground font-medium text-sm">{section.title}</span>
                          <span className="text-muted-foreground text-sm"> : {section.description}</span>
                        </div>
                      </div>)}
                  </div>}

                {/* Stack - Expandable */}
                {project.stack && project.stack.length > 0 && <div className="border border-border/30 rounded-xl overflow-hidden mt-4">
                    <button onClick={e => {
                e.stopPropagation();
                setStackExpanded(!stackExpanded);
              }} className="w-full flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors">
                      <span className="text-sm font-semibold text-foreground">Stack technique</span>
                      <motion.div animate={{
                  rotate: stackExpanded ? 180 : 0
                }} transition={{
                  duration: 0.2
                }}>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {stackExpanded && <motion.div initial={{
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
                          <div className="px-4 pb-4 flex flex-wrap gap-2">
                            {project.stack.map(item => {
                      const IconComponent = item.icon;
                      return <div key={item.name} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50">
                                  {IconComponent && <IconComponent className="h-4 w-4 text-primary" />}
                                  <span className="text-sm text-foreground">{item.name}</span>
                                </div>;
                    })}
                          </div>
                        </motion.div>}
                    </AnimatePresence>
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
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          AI Engineer
        </h2>
        <p className="text-muted-foreground text-lg">
          Automatisations IA & Apps React Native
        </p>
      </motion.div>

      {/* Stack Section */}
      <div id="dev-stack">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }}>
          <SectionTitle>Stack</SectionTitle>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4">
          {devStack.map((category, catIndex) => <motion.div key={category.category} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2 + catIndex * 0.1
        }} className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] p-4 rounded-xl border border-border bg-card/30">
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
      <div id="dev-projets">
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
          
          {/* AI Photo Shoot - Special Card */}
          <AIPhotoShootCard index={1} />

          {/* Workspace - Special Card */}
          <WorkspaceCard index={2} />

          {/* Instagram Coach - Special Card */}
          <InstagramCoachCard index={3} />
          
          {/* Other Projects */}
          {devProjects.map((project, index) => <ProjectCard key={project.id} project={project} isExpanded={expandedId === project.id} onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)} index={index + 4} />)}
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
const boutiques = [{
  year: 2023,
  shops: [{
    name: "Shors.fr",
    ca: 200000,
    niche: "Fashion streetwear",
    highlight: "Principale source de CA, scaling agressif (Nov 2023: 8k€ → Déc 2023: +100k€)"
  }]
}, {
  year: 2024,
  shops: [{
    name: "Domozi.com",
    ca: 150000,
    niche: "Fashion mixte",
    highlight: "Deuxième plus grosse boutique"
  }, {
    name: "Loumys.com",
    ca: 90000,
    niche: "Fashion mixte (homme/femme)",
    highlight: null
  }, {
    name: "Hartic.fr",
    ca: 80000,
    niche: "Tech beauté féminine (lisseurs, boucleurs, épilateurs)",
    highlight: "Diversification de niche réussie"
  }]
}, {
  year: 2025,
  shops: [{
    name: "Juliette-Toulouse.com",
    ca: 70000,
    niche: "Fashion féminine",
    highlight: "Brand positioning local"
  }]
}];
function CountUpKPI({
  end,
  suffix = "€"
}: {
  end: number;
  suffix?: string;
}) {
  const {
    formattedCount,
    ref
  } = useCountUp({
    end,
    suffix,
    duration: 2000
  });
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
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          E-commerce
        </h2>
        <p className="text-muted-foreground text-lg">
          450k€ de CA & +10 boutiques Shopify lancée          
        </p>
      </motion.div>

      {/* KPI's Title */}
      <div id="ecom-kpis">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.1
      }}>
          <SectionTitle>KPI's</SectionTitle>
        </motion.div>
      </div>

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
            <CountUpKPI end={450000} />
          </div>
          <div className="text-muted-foreground text-xs md:text-sm md:whitespace-nowrap">Chiffre d'affaires généré</div>
        </GlassCard>

        {/* Investissement Ads - Clickable */}
        <GlassCard className={`p-4 md:p-6 opacity-0 animate-fade-in cursor-pointer transition-all duration-300 hover:border-primary/50 ${adsExpanded ? 'ring-2 ring-primary/30' : ''}`} style={{
        animationDelay: "0.2s"
      } as React.CSSProperties} onClick={handleAdsClick}>
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
            <motion.div animate={{
            rotate: adsExpanded ? 180 : 0
          }} transition={{
            duration: 0.2
          }} className="p-1.5 rounded-full bg-primary/10 text-primary">
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
        {adsExpanded && <motion.div ref={adsBreakdownRef} initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.3
      }} className="overflow-hidden -mt-8">
            <GlassCard className="p-4 md:p-6" hover={false}>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-foreground">Répartition du budget publicitaire</h4>
                <button onClick={() => setAdsExpanded(false)} className="p-1 rounded-full hover:bg-muted transition-colors">
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
          </motion.div>}
      </AnimatePresence>


      {/* Boutiques Section */}
      <div id="ecom-boutiques" className="mt-12">
        <SectionTitle>Boutiques</SectionTitle>
        
        {/* Info about closed shops */}
        <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="mb-8 p-4 rounded-xl bg-muted/50 border border-border/50">
          <p className="text-muted-foreground text-sm">
            <span className="text-foreground font-medium">Note :</span> Toutes les boutiques sont fermées. Elles fonctionnaient uniquement via la publicité payante — sans ads, pas de traffic. Il était donc inutile de les maintenir actives.
          </p>
        </motion.div>

        {/* Mobile: Liste - Desktop: Tableau */}
        
        {/* VERSION MOBILE - Liste */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} className="md:hidden space-y-3">
          {boutiques.flatMap(yearGroup => yearGroup.shops.map((shop, index) => <motion.div key={shop.name} initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: index * 0.05
        }}>
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
              </motion.div>))}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.3
        }}>
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
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} className="hidden md:block rounded-2xl border border-border dark:border-border/50 overflow-hidden">
          <div className="bg-muted/30 px-4 py-3 border-b border-border dark:border-border/50 grid grid-cols-12 gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            <div className="col-span-4">Boutique</div>
            <div className="col-span-4">Niche</div>
            <div className="col-span-2 text-center">Année</div>
            <div className="col-span-2 text-right">CA</div>
          </div>
          {boutiques.flatMap(yearGroup => yearGroup.shops.map((shop, index) => <motion.div key={shop.name} initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: index * 0.05
        }} className="px-4 py-4 border-b border-border dark:border-border/30 grid grid-cols-12 gap-4 items-center hover:bg-muted/20 transition-colors">
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
              </motion.div>))}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }} className="px-4 py-4 grid grid-cols-12 gap-4 items-center bg-muted/10">
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
      <div id="ecom-stack">
        <EcomStackSection />
      </div>

      {/* Expertise Section - 3 Pillars */}
      <div id="ecom-expertise">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }}>
          <SectionTitle>Expertise</SectionTitle>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Acquisition */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }}>
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
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }}>
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
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }}>
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
      <div id="ecom-methodologie">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }}>
          <SectionTitle>Méthodologie</SectionTitle>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Étape 1 - Test */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }}>
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
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }}>
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
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }}>
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
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }}>
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
// Now using imported AcquisitionSection component

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
      <div id="academique-timeline">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <SectionTitle>Parcours</SectionTitle>
        </motion.div>
      </div>

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
        {/* Mobile: Main Tabs */}
        <div className="md:hidden overflow-x-auto mb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <TabsList className="inline-flex w-max min-w-full h-auto p-1.5 bg-background/80 border border-border backdrop-blur-sm gap-2 rounded-xl">
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
              Agence d'acquisition
            </TabsTrigger>
            <TabsTrigger value="academique" className="bg-secondary/60 hover:bg-secondary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-2.5 px-4 text-xs md:text-sm flex items-center gap-2 whitespace-nowrap rounded-lg transition-all">
              <GraduationCap className="h-4 w-4" />
              Parcours académique
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Desktop/Tablet: Table of Contents */}
        <div className="mb-8">
          <TableOfContents activeTab={activeTab} />
        </div>

        <TabsContent value="developpement" className="mt-0">
          <DeveloppementContent />
        </TabsContent>
        
        <TabsContent value="ecommerce" className="mt-0">
          <EcommerceContent />
        </TabsContent>
        
        <TabsContent value="acquisition" className="mt-0">
          <AcquisitionSection />
        </TabsContent>
        
        <TabsContent value="academique" className="mt-0">
          <AcademiqueContent />
        </TabsContent>
      </Tabs>
    </div>;
}