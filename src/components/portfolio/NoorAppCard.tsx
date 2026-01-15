import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Github, Smartphone, Bell, BookOpen, MessageSquare, Gamepad2, PenLine, Mic, BookMarked, HelpCircle, Database, Navigation, Palette, Sparkles, Globe, Cog } from "lucide-react";
import { SiReact, SiExpo, SiTypescript, SiSupabase, SiPostgresql, SiI18next } from "@icons-pack/react-simple-icons";
import { ScreenshotCarousel } from "./ScreenshotCarousel";

const noorStack = [
  { icon: SiReact, name: "React Native 0.81", category: "Framework" },
  { icon: SiExpo, name: "Expo 54", category: "Framework" },
  { icon: SiTypescript, name: "TypeScript 5.9", category: "Framework" },
  { icon: Navigation, name: "Expo Router", category: "Navigation" },
  { icon: SiSupabase, name: "Supabase (Auth + DB)", category: "Backend" },
  { icon: SiPostgresql, name: "PostgreSQL", category: "Backend" },
  { icon: Palette, name: "Unistyles", category: "UI" },
  { icon: Sparkles, name: "Reanimated + Lottie", category: "Animations" },
  { icon: SiI18next, name: "i18next", category: "i18n" },
  { icon: Cog, name: "Expo SDK (AV, Haptics, SecureStore)", category: "Features" },
];

const noorFeatures = [
  {
    icon: Smartphone,
    title: "Authentification",
    description: "Google Sign-In & Apple Sign-In intégrés"
  },
  {
    icon: Bell,
    title: "Suivi des prières",
    description: "Enregistrement en DB, gamification, notifications de rappel et algorithme de calcul des heures selon localisation (5 méthodes de calcul)"
  },
  {
    icon: BookOpen,
    title: "Lecture du Coran",
    description: "Intégralité du Coran lisible et écoutable avec 5 récitateurs différents"
  },
  {
    icon: MessageSquare,
    title: "Chatbot IA",
    description: "IA entraînée sur le Coran pour répondre aux questions et approfondir la connaissance"
  },
  {
    icon: Gamepad2,
    title: "Exercices quotidiens gamifiés",
    description: "Système de streak type Duolingo en 4 étapes pour créer une habitude d'apprentissage"
  },
  {
    icon: PenLine,
    title: "Journaling",
    description: "Journal intime de prière sauvegardé en DB, pratique courante chez les croyants"
  },
  {
    icon: Mic,
    title: "Récitation",
    description: "Lecture de versets pour s'entraîner à la récitation"
  },
  {
    icon: BookMarked,
    title: "Interprétations",
    description: "Accès aux interprétations des versets par des imams reconnus"
  },
  {
    icon: HelpCircle,
    title: "QCM",
    description: "Questions sur les versets et sur l'Islam en général"
  },
  {
    icon: Database,
    title: "Persistence complète",
    description: "Tout est enregistré en base de données pour créer une habitude et fidéliser les utilisateurs"
  },
];

interface NoorAppCardProps {
  index: number;
}

export function NoorAppCard({ index }: NoorAppCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isStackExpanded, setIsStackExpanded] = useState(false);
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <div className="border border-border rounded-2xl bg-card/50 backdrop-blur-sm overflow-hidden">
        {/* Header - Clickable to expand/collapse */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 text-left hover:bg-secondary/30 transition-colors"
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <h4 className="text-lg font-semibold text-foreground">Noor App</h4>
                <Badge variant="outline" className="text-xs text-green-500 border-green-500/30">
                  En production
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">App mobile type Duolingo pour l'apprentissage du Coran</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Maximguyy/Noor-App"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="p-2"
              >
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </motion.div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {["React Native", "Expo", "TypeScript", "Supabase", "IA/Perplexity"].map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal rounded-full">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Stats */}
          <p className="text-primary text-sm font-medium">15 screens • 80k lignes • 100+ contenus IA • 1 mois</p>
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
                {/* Présentation */}
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">Présentation</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Application mobile complète d'apprentissage du Coran avec système de progression gamifié. 
                    Intégration de Perplexity API pour générer automatiquement des questions, récupérer des 
                    interprétations d'imams, et créer du contenu pédagogique.
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
                          {noorStack.map((item) => {
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

                {/* Features - Expandable */}
                <div className="border border-border/30 rounded-xl overflow-hidden">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFeaturesExpanded(!isFeaturesExpanded);
                    }}
                    className="w-full flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors"
                  >
                    <span className="text-sm font-semibold text-foreground">Features</span>
                    <motion.div
                      animate={{ rotate: isFeaturesExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isFeaturesExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 grid gap-3">
                          {noorFeatures.map((feature) => {
                            const IconComponent = feature.icon;
                            return (
                              <div
                                key={feature.title}
                                className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30"
                              >
                                <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                                  <IconComponent className="h-4 w-4" />
                                </div>
                                <div>
                                  <h6 className="text-sm font-medium text-foreground">{feature.title}</h6>
                                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Screenshots - Always visible when expanded */}
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-4">Screenshots</h5>
                  <ScreenshotCarousel />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
