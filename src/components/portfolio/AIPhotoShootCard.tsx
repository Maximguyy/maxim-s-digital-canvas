import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Github, Camera, Wand2, Image } from "lucide-react";
import { SiRemix, SiReact, SiTypescript, SiShopify, SiPrisma, SiSqlite } from "@icons-pack/react-simple-icons";

import aiPhoto1 from "@/assets/ai-photo-1.png";
import aiPhoto2 from "@/assets/ai-photo-2.png";
import aiPhoto3 from "@/assets/ai-photo-3.png";
import aiPhoto4 from "@/assets/ai-photo-4.png";

const aiPhotoStack = [
  { icon: SiRemix, name: "Remix 2.16", category: "Framework" },
  { icon: SiReact, name: "React 18", category: "Framework" },
  { icon: SiTypescript, name: "TypeScript 5.2", category: "Framework" },
  { icon: SiShopify, name: "Shopify App SDK + Polaris", category: "Shopify" },
  { icon: SiPrisma, name: "Prisma ORM", category: "Database" },
  { icon: SiSqlite, name: "SQLite", category: "Database" },
  { icon: Wand2, name: "Fashn Tryon IA + Nano Banana", category: "IA" },
];

const screenshots = [aiPhoto1, aiPhoto2, aiPhoto3, aiPhoto4];

interface AIPhotoShootCardProps {
  index: number;
}

export function AIPhotoShootCard({ index }: AIPhotoShootCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isStackExpanded, setIsStackExpanded] = useState(false);

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
                <h4 className="text-lg font-semibold text-foreground">Outfit Bundle</h4>
                <Badge variant="outline" className="text-xs text-muted-foreground border-muted-foreground/30">
                  Marché trop early
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">Génération de shootings photo IA pour e-commerce</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Maximguyy/OutfitBundle"
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
            {["Remix", "React", "Shopify SDK", "Prisma", "Fashn IA"].map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal rounded-full">
                {tag}
              </Badge>
            ))}
          </div>

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
                {/* Contexte */}
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">Contexte</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Ce projet nécessitait un backend capable de générer des images IA (essayage virtuel sur mannequin), 
                    ainsi qu'une application Shopify connectée à ce backend pour permettre aux e-commerçants de créer 
                    facilement des bundles visuels comme les grands sites (Asos, Levis). Coût par shooting : ~1€.
                  </p>
                </div>

                {/* Partie 1 - Bot Telegram */}
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">Phase 1 : Bot Telegram <Badge variant="outline" className="ml-2 text-xs text-green-500 border-green-500/30">100% opérationnel</Badge></h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Pour rapidement tester la technologie d'IA générative, j'ai développé un bot Telegram entièrement fonctionnel. 
                    Il permet d'envoyer plusieurs produits e-commerce et de générer des shootings photos IA avec un mannequin 
                    portant les articles. Le bot a validé la faisabilité technique du concept.
                  </p>
                </div>

                {/* Partie 2 - App Shopify */}
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">Phase 2 : Application Shopify <Badge variant="outline" className="ml-2 text-xs text-amber-500 border-amber-500/30">En pause</Badge></h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Après avoir testé le bot de mon côté avec des résultats prometteurs, je l'ai partagé à mes confrères 
                    e-commerçants dans la niche fashion pour qu'ils le testent pendant que je développais l'app Shopify. 
                    Rapidement, de nombreux problèmes sont apparus sur les vêtements avec des détails spécifiques ou de 
                    l'écriture dessus. J'ai cherché des solutions alternatives, mais force est de constater que la technologie 
                    de génération d'images n'était pas encore assez mature pour ce cas d'usage.
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
                          {aiPhotoStack.map((item) => {
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

                {/* Screenshots - Always visible when expanded */}
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-4">Shooting photo 100% IA</h5>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {screenshots.map((src, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="aspect-[3/4] rounded-lg overflow-hidden border border-border/30"
                      >
                        <img
                          src={src}
                          alt={`AI Photo Shoot ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
