import profilePhoto from "@/assets/profile-photo.png";
import { TabContent } from "./TabContent";
import { useState } from "react";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("developpement");

  return (
    <section className="min-h-screen flex flex-col pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center mb-10">
          {/* Profile Photo */}
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 animate-fade-in ring-4 ring-border/50">
            <img 
              src={profilePhoto} 
              alt="Maxim Guy" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Age */}
          <h1 
            className="text-2xl md:text-3xl font-bold text-foreground mb-2 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Maxim Guy, 23 ans
          </h1>
        </div>

        {/* Tab Content */}
        <div 
          className="max-w-4xl mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <TabContent activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>
    </section>
  );
}
