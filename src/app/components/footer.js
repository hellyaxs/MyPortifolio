import { Separator } from "@/app/components/ui/separator";
import { Github, Linkedin, MessageCircle, Heart } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/hellyaxs",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/elias-vitordev",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://api.whatsapp.com/send?phone=+5581991426794",
    icon: MessageCircle,
    label: "WhatsApp",
  },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
            <span className="text-green-400">{`{`}</span>
            Elias
            <span className="text-green-400">{`}`}</span>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-6 bg-border" />

        <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Elias Vitor · Feito com{' '}
          <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> e muito café
        </p>
      </div>
    </footer>
  );
}
