"use client"
import { useState } from 'react';
import Image from 'next/image';
import Title from './utils/title';
import { Button } from '@/app/components/ui/button';
import { Download, Linkedin, Github, MessageCircle, ChevronDown, MapPin } from 'lucide-react';
import { workExperience } from '@/app/data/experience';
import ScrollReveal from './utils/scroll-reveal';
import { cn } from '@/lib/utils';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/elias-vitordev', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://api.whatsapp.com/send?phone=+5511995085916', label: 'WhatsApp', icon: MessageCircle },
  { href: 'https://github.com/hellyaxs', label: 'GitHub', icon: Github },
];

const stats = [
  { value: new Date().getFullYear() - 2023 + '+', label: 'Anos de experiência' },
  { value: '10+', label: 'Projetos' },
  { value: '12+', label: 'Tecnologias' },
];


function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn(
      'rounded-xl border border-border bg-card transition-shadow duration-300',
      open ? 'shadow-card' : 'hover:shadow-card'
    )}>
      {/* Header — clicável */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start gap-3 p-4 text-left"
      >
        {/* Company avatar */}
        <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
          <span className="text-xs font-bold text-primary">{exp.initials}</span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-foreground leading-tight">{exp.company}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{exp.role}</p>
              {exp.location && (
                <p className="flex items-center gap-1 text-[10px] text-muted-foreground/70 mt-0.5">
                  <MapPin className="w-2.5 h-2.5 shrink-0" />{exp.location}
                </p>
              )}
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="text-[10px] text-muted-foreground">{exp.period}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground border border-border">
                {exp.type}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-2.5">
            <div className="flex flex-wrap gap-1">
              {exp.tags.map((tag) => (
                <span key={tag} className="tech-label text-[10px] px-1.5 py-0.5 rounded bg-secondary/50 text-muted-foreground border border-border/50">
                  {tag}
                </span>
              ))}
            </div>
            <ChevronDown className={cn(
              'w-3.5 h-3.5 text-muted-foreground shrink-0 transition-transform duration-300 ml-2',
              open && 'rotate-180'
            )} />
          </div>
        </div>
      </button>

      {/* Expandable description */}
      <div className={cn(
        'overflow-hidden transition-all duration-300 ease-in-out',
        open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="px-4 pb-4 pt-0">
          <div className="border-t border-border/60 pt-3">
            <p className="text-xs text-muted-foreground leading-relaxed">
              {exp.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="py-10 bg-background" id="about">
      <div className="max-w-2xl mx-auto px-6">
        <Title title="Sobre" />

        {/* Profile row */}
        <ScrollReveal delay={0}>
          <div className="flex items-start gap-4 mb-8">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-border shrink-0">
              <Image src="/assets/images/profile.png" fill className="object-cover" alt="Elias Vitor" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-foreground">Elias Vitor</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Engenheiro de Software Full Stack · Engenheiro da Computação · Belo Jardim, PE
              </p>
              <div className="flex items-center gap-3 mt-2">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                     aria-label={label} className="text-muted-foreground hover:text-primary transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal delay={60}>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed mb-8">
            <p>
              Engenheiro de software apaixonado por transformar ideias em produtos digitais que geram
              impacto real. Minha jornada é guiada pela curiosidade e pela busca constante de
              aprendizado — cada projeto é uma oportunidade de contar uma história através do código.
            </p>
            <p>
              Com <span className="text-foreground font-medium">{new Date().getFullYear() - 2023} anos de experiência</span> focados
              em backend, trabalho com{' '}
              <span className="text-foreground font-medium">Node.js, TypeScript</span>, APIs RESTful,
              sistemas assíncronos e integrações com serviços externos. Vivência em ambientes de
              nuvem, CI/CD e colaboração com times de produto — priorizando boas práticas, código
              limpo e entrega de valor.
            </p>
            <p>
              Minha missão é colaborar com empresas para transformar seus objetivos em soluções
              concretas. Se você quer levar seu projeto ao próximo nível,{' '}
              <button
                onClick={() => document.dispatchEvent(new CustomEvent('tab-change', { detail: 'contact' }))}
                className="text-primary hover:underline underline-offset-2 font-medium cursor-pointer"
              >
                vamos conversar →
              </button>
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-3 gap-px bg-border rounded-xl overflow-hidden mb-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-card text-center py-4 px-2">
                <p className="text-xl font-bold text-primary">{value}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Experience — dropdown expansível */}
        <ScrollReveal delay={140}>
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Experiência
            </h3>
            <div className="space-y-3">
              {workExperience.map((exp, i) => (
                <ExperienceCard key={i} exp={exp} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <Button asChild variant="gradient" size="sm" className="gap-2">
            <a href="/assets/pdf/Curriculo.pdf" download>
              <Download className="w-3.5 h-3.5" /> Download CV
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
