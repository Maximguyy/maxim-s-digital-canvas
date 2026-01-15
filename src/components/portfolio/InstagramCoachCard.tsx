import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, MessageCircle, Users, Bot, Clock } from "lucide-react";
import { SiN8n, SiOpenai, SiGooglesheets } from "@icons-pack/react-simple-icons";

const instagramCoachStack = [
  { icon: SiGooglesheets, name: "Google Workspace API (Sheets)", category: "Data" },
  { icon: MessageCircle, name: "Meta API (Instagram DM)", category: "Messaging" },
  { icon: SiOpenai, name: "OpenAI API", category: "IA" },
  { icon: SiN8n, name: "n8n (orchestration)", category: "Automation" },
];

interface InstagramCoachCardProps {
  index: number;
}

export function InstagramCoachCard({ index }: InstagramCoachCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isStackExpanded, setIsStackExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <div className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm overflow-hidden">
        {/* Header - Clickable to expand/collapse */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 text-left hover:bg-secondary/30 transition-colors"
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <h4 className="text-lg font-semibold text-foreground">Qualification Leads Instagram</h4>
              </div>
              <p className="text-muted-foreground text-sm">Automatisation IA pour coach sportif - Qualification prospects via DM</p>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="p-2"
            >
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </motion.div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {["Meta API", "Google Sheets", "OpenAI API", "n8n"].map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal rounded-full">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Stats */}
          <p className="text-primary text-sm font-medium">80% du temps de réponse automatisé</p>
        </button>

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
              <div className="px-6 pb-6 space-y-6">
                {/* Contexte / Problème */}
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Le problème
                  </h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Un ami coach sportif passait <span className="text-foreground font-medium">1 à 2 heures par jour</span> à répondre 
                    à ses DMs Instagram. Il voulait lancer des campagnes publicitaires, mais était incapable 
                    d'assumer un volume plus important vu le temps qu'il passait à qualifier les leads et 
                    répondre manuellement aux messages.
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Bot className="h-4 w-4 text-primary" />
                    La solution
                  </h5>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    J'ai développé une solution via n8n qui automatise entièrement le processus de qualification :
                  </p>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <span className="text-foreground font-medium text-sm">Stockage automatique</span>
                        <span className="text-muted-foreground text-sm"> : Toutes les infos des prospects sont notées sur Google Sheets</span>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <span className="text-foreground font-medium text-sm">Réponses IA contextuelles</span>
                        <span className="text-muted-foreground text-sm"> : L'IA répond en gardant le fil de conversation</span>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <span className="text-foreground font-medium text-sm">Handover intelligent</span>
                        <span className="text-muted-foreground text-sm"> : Si les questions sortent du scope de l'IA, notification pour intervention manuelle</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Résultat */}
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Résultat
                  </h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <span className="text-foreground font-medium">80% de son temps automatisé.</span> Il a enfin pu lancer ses 
                    campagnes publicitaires et gérer un volume de prospects bien supérieur sans augmenter 
                    sa charge de travail.
                  </p>
                </div>

                {/* Stack - Expandable */}
                <div className="border border-border/30 rounded-xl overflow-hidden">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsStackExpanded(!isStackExpanded);
                    }}
                    className="w-full flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors"
                  >
                    <span className="text-sm font-semibold text-foreground">Stack technique</span>
                    <motion.div
                      animate={{ rotate: isStackExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isStackExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 flex flex-wrap gap-3">
                          {instagramCoachStack.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <div
                                key={item.name}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50"
                              >
                                <IconComponent className="h-4 w-4 text-primary" />
                                <span className="text-sm text-foreground">{item.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
