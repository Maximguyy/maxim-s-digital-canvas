import { GlassCard } from "./GlassCard";
import { SectionContainer } from "./SectionContainer";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

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

export function AcademiqueSection() {
  return (
    <SectionContainer
      id="academique"
      title="Parcours Académique"
      subtitle="Formation scientifique et ingénierie informatique"
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div
              key={item.title}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 opacity-0 animate-fade-in ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${0.15 * index}s` } as React.CSSProperties}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1.5 translate-y-8 md:translate-y-10">
                {item.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <GlassCard className={`p-6 inline-block w-full md:max-w-md ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                  <div className={`flex items-center gap-2 text-primary text-sm font-medium mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar className="h-4 w-4" />
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
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
