import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, ArrowUpRight, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const links = [
  {
    label: "Email",
    href: "mailto:guymaxim@gmail.com",
    icon: Mail,
    description: "guymaxim@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/maximguy",
    icon: Github,
    description: "Voir mes projets",
  },
];

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse email valide",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Create mailto link with form data
    const mailtoBody = `Nom: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    const mailtoLink = `mailto:guymaxim@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(mailtoBody)}`;
    
    window.location.href = mailtoLink;

    toast({
      title: "Redirection vers votre client mail",
      description: "Votre client de messagerie va s'ouvrir avec le message pré-rempli.",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle>Contact</SectionTitle>

        <div className="space-y-6">
          {/* Contact Links - Side by side */}
          <div className="grid grid-cols-2 gap-4">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group block"
              >
                <GlassCard 
                  className="p-5 opacity-0 animate-fade-in h-full"
                  style={{ animationDelay: `${0.1 * index}s` } as React.CSSProperties}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      <link.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground mb-0.5 flex items-center gap-1">
                        {link.label}
                        <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="text-sm text-muted-foreground truncate">
                        {link.description}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </a>
            ))}
          </div>

          {/* Form */}
          <GlassCard className="p-6 md:p-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" } as React.CSSProperties}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength={255}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Objet</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Sujet de votre message"
                  value={formData.subject}
                  onChange={handleChange}
                  maxLength={200}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Votre message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  maxLength={2000}
                  className="resize-none"
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                <Send className="h-4 w-4 mr-2" />
                Envoyer le message
              </Button>
            </form>
          </GlassCard>
        </div>

        {/* Footer */}
        <p className="text-muted-foreground text-sm opacity-0 animate-fade-in pt-12" style={{ animationDelay: "0.5s" }}>
          © {new Date().getFullYear()} Maxim Guy. Tous droits réservés.
        </p>
      </div>
    </section>
  );
}
