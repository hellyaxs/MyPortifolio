import Title from "./utils/title";
import { ArrowUpRight, MessageCircle, Mail, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(81) 99142 - 6794",
    href: "https://api.whatsapp.com/send?phone=+5581991426794&text=Olá Elias! te achei através de seu portfólio.",
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "eliasvitor.dev@gmail.com",
    href: "mailto:eliasvitor.dev@gmail.com",
    external: false,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Belo Jardim — PE, Brasil",
    href: null,
  },
];

export default function Contact() {
  return (
    <section className="py-10 bg-background" id="contact">
      <div className="max-w-2xl mx-auto px-6">
        <Title title="Contato" />

        {/* Headline */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Tem um projeto em mente?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Estou disponível para projetos freelance, oportunidades de emprego ou
            simplesmente uma conversa sobre tecnologia.
          </p>
        </div>

        {/* Contact list */}
        <div className="space-y-px">
          {contactItems.map((item) => {
            const inner = (
              <div className="group flex items-center justify-between py-3.5 border-b border-border/50 last:border-0 -mx-3 px-3 rounded-lg hover:bg-accent/30 transition-colors duration-150">
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
                {item.href && (
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 transition-colors" />
                )}
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {inner}
              </a>
            ) : (
              <div key={item.label}>{inner}</div>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-16 pt-8 border-t border-border">
          © {new Date().getFullYear()} Elias Vitor
        </p>
      </div>
    </section>
  );
}
