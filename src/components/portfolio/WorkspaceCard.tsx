import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Github, Cpu, TestTube, Terminal } from "lucide-react";
import { SiSupabase, SiTypescript, SiNodedotjs } from "@icons-pack/react-simple-icons";

interface WorkspaceCardProps {
  index: number;
}

const mcpServers = [
  "Supabase",
  "Playwright", 
  "Mobile MCP",
  "ADB",
  "Maestro",
  "Figma",
  "Sequential Thinking Continuous"
];

const techStack = [
  {
    category: "Core",
    items: [
      { name: "TypeScript 5.7.0", icon: SiTypescript },
      { name: "Node.js ≥18.0.0", icon: SiNodedotjs },
      { name: "ESNext Modules", icon: Terminal }
    ]
  },
  {
    category: "Testing & Automation",
    items: [
      { name: "Playwright 1.57.0", icon: TestTube },
      { name: "@playwright/test 1.57.0", icon: TestTube }
    ]
  },
  {
    category: "Execution",
    items: [
      { name: "ts-node 10.9.0", icon: Terminal },
      { name: "tsx 4.21.0", icon: Terminal }
    ]
  }
];

export function WorkspaceCard({ index }: WorkspaceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [stackExpanded, setStackExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <div className="border border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm hover:border-border transition-all duration-300 overflow-hidden">
        {/* Header - Clickable */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left p-6 group"
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <h4 className="text-lg font-semibold text-foreground">
                  Workspace React Native Optimisé
                </h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Configuration Claude Code pour dev mobile autonome
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Maximguyy/RN-Workspace"
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
                className="p-2 rounded-full bg-secondary/50 text-muted-foreground group-hover:bg-secondary group-hover:text-foreground transition-colors"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {["MCP Servers", "Claude Code", "ADB", "Maestro", "Automatisation"].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal rounded-full">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Stats */}
          <p className="text-primary text-sm font-medium">20k lignes • 7 serveurs MCP</p>
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
              <div className="px-6 pb-6 pt-2 border-t border-border/30 space-y-6">
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Environnement de développement configuré pour maximiser l'autonomie de Claude Code. 
                  Scripts permettant à l'IA de visualiser l'émulateur via screenshots automatiques 
                  et d'itérer jusqu'au résultat souhaité sans intervention humaine.
                </p>

                {/* MCP Servers */}
                <div>
                  <h5 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-primary" />
                    MCP Servers intégrés
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {mcpServers.map((server) => (
                      <Badge 
                        key={server} 
                        variant="outline" 
                        className="text-xs font-normal"
                      >
                        {server}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stack Technique - Expandable */}
                <div className="border border-border/30 rounded-xl overflow-hidden">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setStackExpanded(!stackExpanded);
                    }}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/30 transition-colors"
                  >
                    <span className="text-sm font-medium text-foreground">
                      Stack Technique
                    </span>
                    <motion.div
                      animate={{ rotate: stackExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {stackExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {techStack.map((category) => (
                            <div key={category.category} className="space-y-2">
                              <h6 className="text-xs uppercase tracking-wider text-primary font-medium">
                                {category.category}
                              </h6>
                              <div className="space-y-1.5">
                                {category.items.map((item) => {
                                  const IconComponent = item.icon;
                                  return (
                                    <div 
                                      key={item.name} 
                                      className="flex items-center gap-2 text-xs text-muted-foreground"
                                    >
                                      <IconComponent className="h-3 w-3" />
                                      {item.name}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
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
