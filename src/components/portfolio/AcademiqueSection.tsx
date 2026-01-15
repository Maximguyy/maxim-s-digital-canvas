import { GlassCard } from "./GlassCard";
import { SectionContainer } from "./SectionContainer";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? 50 : -50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

export function AcademiqueSection() {
  return (
    <SectionContainer
      id="academique"
      title="Parcours Académique"
      subtitle="Formation scientifique et ingénierie informatique"
    >
      <div className="relative">
        {/* Timeline line */}
        <motion.div
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px origin-top"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={lineVariants}
        />

        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1.5 translate-y-8 md:translate-y-10"
                variants={dotVariants}
              >
                {item.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </motion.div>

              {/* Content */}
              <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <GlassCard className={`p-6 inline-block w-full md:max-w-md transition-shadow hover:shadow-lg hover:shadow-primary/10 ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <div className={`flex items-center gap-2 text-primary text-sm font-medium mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <motion.div
                        initial={{ rotate: -10 }}
                        whileInView={{ rotate: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <Calendar className="h-4 w-4" />
                      </motion.div>
                      {item.period}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-3">
                      {item.subtitle}
                    </p>
                    
                    <div className={`flex items-center gap-4 text-sm ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </span>
                      {item.note && (
                        <span className="text-primary/70">• {item.note}</span>
                      )}
                    </div>
                  </GlassCard>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
