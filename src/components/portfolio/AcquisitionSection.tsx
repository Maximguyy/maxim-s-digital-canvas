import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { SectionTitle } from "./SectionTitle";
import { Badge } from "@/components/ui/badge";
import { useCountUp } from "@/hooks/useCountUp";
import { Target, Zap, Bot, TrendingUp, ArrowDown, CheckCircle2, XCircle, Star, AlertTriangle, Video, Film, BarChart3, Server, Database, MessageSquare, HardDrive, ChevronDown } from "lucide-react";
import { SiPython, SiFastapi, SiRedis, SiPostgresql, SiDocker, SiWhatsapp } from "@icons-pack/react-simple-icons";
function CountUpKPI({
  end,
  suffix = "",
  prefix = ""
}: {
  end: number;
  suffix?: string;
  prefix?: string;
}) {
  const {
    formattedCount,
    ref
  } = useCountUp({
    end,
    suffix,
    prefix,
    duration: 2000
  });
  return <div ref={ref}>{formattedCount}</div>;
}
const kpis = [{
  label: "RDV générés",
  value: 280,
  suffix: "+"
}, {
  label: "CA généré",
  value: 40000,
  suffix: "€"
}, {
  label: "ROI moyen",
  value: 7.2,
  suffix: "x",
  isDecimal: true
}, {
  label: "CPA moyen",
  value: 25,
  suffix: "€"
}];
const strategies = ["Ciblage broad local (Le Havre, Rouen, Lens) — rayon 20-30km", "Lead forms natifs + Landing page custom optimisée", "5+ itérations A/B testées (headlines, CTA, formulaire, social proof)"];
const creativeStats = [{
  value: "160",
  label: "créatives testées sur 4 mois"
}, {
  value: "40",
  label: "vidéos (avis clients + motivationnels)"
}, {
  value: "80",
  label: "visuels statiques (carrousels + images)"
}, {
  value: "40",
  label: "variations copies/angles"
}];
const optimizationSteps = ["Lancement 2-3 créatives/jour", "24h d'apprentissage algo", "Analyse performance", "Kill si CPA > 30€ | Scale si CPA < 20€"];
const winnerFormats = [{
  icon: Video,
  label: "Vidéos avis clients",
  note: "best performer"
}, {
  icon: Film,
  label: "Contenus motivationnels",
  note: "famille, santé, économies"
}, {
  icon: BarChart3,
  label: "Carrousels social proof",
  note: ""
}];
const techStack = [{
  category: "Backend & API",
  items: [{
    icon: SiFastapi,
    name: "FastAPI (webhooks)"
  }, {
    icon: SiPython,
    name: "Python (automations)"
  }]
}, {
  category: "Bases de données",
  items: [{
    icon: SiRedis,
    name: "Redis (cache conversations)"
  }, {
    icon: SiPostgresql,
    name: "PostgreSQL (leads persistants)"
  }]
}, {
  category: "IA & Messaging",
  items: [{
    icon: Bot,
    name: "Claude API (qualification)"
  }, {
    icon: SiWhatsapp,
    name: "WhatsApp Business API"
  }]
}, {
  category: "Infra & Automation",
  items: [{
    icon: SiDocker,
    name: "Docker + Compose"
  }, {
    icon: Server,
    name: "VPS Hetzner (~5€/mois)"
  }, {
    icon: Zap,
    name: "n8n (workflows)"
  }]
}];
const learningsSuccess = ["Vidéos authentiques > Contenu scripté", "Broad targeting local > Micro-ciblage", "Volume créatif > Perfection d'une seule ad", "Formulaires natifs > Landing pages (moins de friction)"];
const learningsConstraints = ["Budgets limités (600€/centre) = créativité nécessaire", "Saturation audience locale rapide", "Méthode anti-tabac controversée (objections fréquentes)"];
export function AcquisitionSection() {
  const [flowsExpanded, setFlowsExpanded] = useState(false);
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
          Agence d'Acquisition
        </h2>
        <p className="text-muted-foreground text-lg">
          Lead Generation pour 3 centres anti-tabac
        </p>
      </motion.div>

      {/* Section 1: KPI's */}
      <div>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.1
      }}>
          <SectionTitle>KPI's</SectionTitle>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi, index) => <GlassCard key={kpi.label} className="p-4 md:p-6 opacity-0 animate-fade-in text-center" style={{
          animationDelay: `${0.1 * index}s`
        } as React.CSSProperties}>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {kpi.isDecimal ? <span>{kpi.value}{kpi.suffix}</span> : <CountUpKPI end={kpi.value} suffix={kpi.suffix} />}
              </div>
              <div className="text-muted-foreground text-sm">{kpi.label}</div>
            </GlassCard>)}
        </div>
      </div>

      {/* Section 2: Publicité Meta Ads */}
      <div>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.2
      }}>
          <SectionTitle>Publicité Meta Ads</SectionTitle>
        </motion.div>
        
        

        <div className="grid md:grid-cols-2 gap-6">
          {/* Stratégie */}
          <GlassCard className="p-6 opacity-0 animate-fade-in" style={{
          animationDelay: "0.2s"
        } as React.CSSProperties}>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Stratégie
            </h4>
            <ul className="space-y-3">
              {strategies.map((item, idx) => <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {item}
                </li>)}
            </ul>
          </GlassCard>

          {/* Production créative */}
          <GlassCard className="p-6 opacity-0 animate-fade-in" style={{
          animationDelay: "0.3s"
        } as React.CSSProperties}>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Film className="h-5 w-5 text-primary" />
              Production créative
            </h4>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {creativeStats.map((stat, idx) => <div key={idx} className="text-center p-3 rounded-lg bg-secondary/30">
                  <div className="text-xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>)}
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Rotation : ~10 nouvelles créatives/semaine
            </p>
          </GlassCard>
        </div>

        {/* Process d'optimisation */}
        <GlassCard className="p-6 mt-6 opacity-0 animate-fade-in" style={{
        animationDelay: "0.4s"
      } as React.CSSProperties}>
          <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Process d'optimisation
          </h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            {optimizationSteps.map((step, idx) => <div key={idx} className="flex flex-col md:flex-row items-center gap-2">
                <div className="px-4 py-2 rounded-lg bg-secondary/50 text-sm text-foreground text-center">
                  {step}
                </div>
                {idx < optimizationSteps.length - 1 && <ArrowDown className="h-4 w-4 text-primary md:rotate-[-90deg]" />}
              </div>)}
          </div>
        </GlassCard>

      </div>

      {/* Section 3: Automatisations IA */}
      <div>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.3
      }}>
          <SectionTitle>Automatisations IA</SectionTitle>
        </motion.div>
        
        

        {/* Stack Technique */}
        <GlassCard className="p-6 mb-6 opacity-0 animate-fade-in" style={{
        animationDelay: "0.3s"
      } as React.CSSProperties}>
          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Server className="h-5 w-5 text-primary" />
            Stack Technique
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map(category => <div key={category.category} className="p-3 rounded-lg bg-secondary/30">
                <h5 className="text-xs uppercase tracking-wider text-primary mb-2 font-medium">
                  {category.category}
                </h5>
                <div className="space-y-2">
                  {category.items.map(item => {
                const IconComponent = item.icon;
                return <div key={item.name} className="flex items-center gap-2 text-foreground text-xs">
                        <IconComponent className="h-3.5 w-3.5 text-muted-foreground" />
                        {item.name}
                      </div>;
              })}
                </div>
              </div>)}
          </div>
        </GlassCard>


        {/* Flows Automatisés - Expandable */}
        <GlassCard className="p-6 opacity-0 animate-fade-in cursor-pointer" style={{
        animationDelay: "0.5s"
      } as React.CSSProperties} onClick={() => setFlowsExpanded(!flowsExpanded)}>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              Flows Automatisés
            </h4>
            <motion.div animate={{
            rotate: flowsExpanded ? 180 : 0
          }} transition={{
            duration: 0.2
          }} className="p-2 rounded-full bg-primary/10 text-primary">
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </div>

          <AnimatePresence>
            {flowsExpanded && <motion.div initial={{
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
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* Flow 1 */}
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
                    <div className="flex items-center gap-2 mb-4">
                      <Bot className="h-4 w-4 text-primary" />
                      <h5 className="font-medium text-foreground">Flow 1 : Qualification de leads</h5>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 rounded bg-background/50 text-center text-foreground">Lead Meta → WhatsApp IA</div>
                      <ArrowDown className="h-4 w-4 text-primary mx-auto" />
                      <div className="p-2 rounded bg-background/50 text-center text-muted-foreground text-xs">Questions qualifiantes (durée tabac, rythme, âge, dispo)</div>
                      <ArrowDown className="h-4 w-4 text-primary mx-auto" />
                      <div className="p-2 rounded bg-background/50 text-center text-foreground">Lead qualifié ?</div>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="p-2 rounded bg-primary/10 text-center">
                          <CheckCircle2 className="h-4 w-4 text-primary mx-auto mb-1" />
                          <span className="text-xs text-foreground">OUI → Calendly → RDV ✅</span>
                        </div>
                        <div className="p-2 rounded bg-secondary/50 text-center">
                          <XCircle className="h-4 w-4 text-muted-foreground mx-auto mb-1" />
                          <span className="text-xs text-muted-foreground">NON → Nurturing</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/30 text-center">
                      <Badge variant="outline" className="text-primary border-primary/30">Conversion : 6% formulaire → RDV</Badge>
                    </div>
                  </div>

                  {/* Flow 2 */}
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="h-4 w-4 text-primary" />
                      <h5 className="font-medium text-foreground">Flow 2 : Demande d'avis</h5>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="p-2 rounded bg-background/50 text-center text-foreground">RDV réalisé → Attente 7 jours</div>
                      <ArrowDown className="h-4 w-4 text-primary mx-auto" />
                      <div className="p-2 rounded bg-background/50 text-center text-muted-foreground text-xs">Message WhatsApp IA : "Comment va l'arrêt ?"</div>
                      <ArrowDown className="h-4 w-4 text-primary mx-auto" />
                      <div className="p-2 rounded bg-background/50 text-center text-foreground">Client a repris ?</div>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="p-2 rounded bg-secondary/50 text-center">
                          <span className="text-xs text-muted-foreground">OUI → Nouvelle séance</span>
                        </div>
                        <div className="p-2 rounded bg-primary/10 text-center">
                          <Star className="h-4 w-4 text-primary mx-auto mb-1" />
                          <span className="text-xs text-foreground">NON → Avis Google ⭐</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/30 text-center">
                      <Badge variant="outline" className="text-primary border-primary/30">Taux réponse : 60%</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>}
          </AnimatePresence>
        </GlassCard>
      </div>

      {/* Section 4: Learnings */}
      <div>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.4
      }}>
          <SectionTitle>Learnings</SectionTitle>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Ce qui a marché */}
          <GlassCard className="p-6 opacity-0 animate-fade-in" style={{
          animationDelay: "0.4s"
        } as React.CSSProperties}>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Ce qui a marché
            </h4>
            <ul className="space-y-3">
              {learningsSuccess.map((item, idx) => <li key={idx} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>)}
            </ul>
          </GlassCard>

          {/* Contraintes gérées */}
          <GlassCard className="p-6 opacity-0 animate-fade-in" style={{
          animationDelay: "0.5s"
        } as React.CSSProperties}>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Contraintes gérées
            </h4>
            <ul className="space-y-3">
              {learningsConstraints.map((item, idx) => <li key={idx} className="flex items-start gap-3 text-sm">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>)}
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>;
}