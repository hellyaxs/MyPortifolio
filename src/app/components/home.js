"use client"
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import ScrollReveal from './utils/scroll-reveal';
import MarqueeDev from './utils/marquee-dev';
import Cube3D from './utils/cube3d';

const stack = ['Node.js', 'TypeScript', 'NestJS', 'Next.js', 'Flutter', 'Docker', 'PostgreSQL', 'Redis'];

export default function Home() {
  return (
    <section className="flex flex-col bg-background" id="home">
      <div className="max-w-5xl mx-auto w-full px-6 py-10 lg:py-14">

        {/* ── Hero grid: foto | texto | cubo ───────────────────── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

          {/* Coluna 1 — Foto + badge */}
          <ScrollReveal delay={0}>
            <div className="flex flex-col items-center gap-3 shrink-0">
              <div className="relative w-44 h-44 rounded-2xl overflow-hidden border border-border shadow-card">
                <Image
                  src="/assets/images/profile.png"
                  fill
                  className="object-cover"
                  alt="Elias Vitor"
                  priority
                />
              </div>
              <div className="flex items-center gap-1.5 bg-card px-3 py-1 rounded-full border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                <span className="text-[11px] text-muted-foreground whitespace-nowrap">Disponível para projetos</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Coluna 2 — Texto principal */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">

            {/* Identidade */}
            <ScrollReveal delay={60}>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Olá, sou</p>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-none mb-2">
                  Elias Vitor
                </h1>
                <p className="text-lg text-primary font-semibold leading-none mb-1">
                  Software Engineer
                </p>
                <p className="text-sm text-muted-foreground">
                  @ <span className="text-foreground font-medium">Adasi Software</span>
                </p>
              </div>
            </ScrollReveal>

            {/* Type animation */}
            <ScrollReveal delay={120}>
              <div className="h-5">
                <TypeAnimation
                  sequence={[
                    'Backend com Node.js & NestJS',
                    2000,
                    'Mobile com Flutter',
                    2000,
                    'APIs RESTful & Cloud Native',
                    2000,
                    'DevOps com Docker & Linux',
                    2000,
                  ]}
                  speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
                  className="text-xs font-mono text-muted-foreground"
                  repeat={Infinity}
                />
              </div>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={160}>
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                <Button
                  variant="gradient"
                  size="sm"
                  className="gap-2"
                  onClick={() => document.dispatchEvent(new CustomEvent('tab-change', { detail: 'projects' }))}
                >
                  Ver projetos <ArrowRight className="w-3.5 h-3.5" />
                </Button>
                <Button variant="outline" size="sm" className="gap-2 border-border hover:border-primary" asChild>
                  <a href="/assets/pdf/Curriculo.pdf" download>
                    <Download className="w-3.5 h-3.5" /> Baixar CV
                  </a>
                </Button>
              </div>
            </ScrollReveal>

            {/* Stack labels */}
            <ScrollReveal delay={200}>
              <div>
                <p className="text-[11px] text-muted-foreground uppercase tracking-widest mb-2 text-center lg:text-left">
                  Stack principal
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                  {stack.map((tech) => (
                    <span key={tech} className="tech-label text-[10px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Coluna 3 — Cubo 3D (só desktop) */}
          <ScrollReveal delay={80}>
            <Cube3D />
          </ScrollReveal>
        </div>

        {/* Bio — extraído do CV */}
        <ScrollReveal delay={240}>
          <p className="text-sm text-muted-foreground leading-relaxed mt-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            Engenheiro de software com foco em backend, atuando no desenvolvimento de soluções web
            escaláveis e orientadas ao negócio, com {new Date().getFullYear() - 2023} anos de experiência. Trabalho com{' '}
            <span className="text-foreground font-medium">Node.js, TypeScript</span>, APIs RESTful,
            sistemas assíncronos e integrações com serviços externos e bancos de dados SQL. Vivência
            em ambientes de nuvem, CI/CD e colaboração com times de produto — priorizando boas
            práticas, código limpo e entrega de valor.
          </p>
        </ScrollReveal>
      </div>

      {/* Marquee — overflow-hidden evita scroll horizontal */}
      <div className="overflow-hidden">
        <MarqueeDev />
      </div>
    </section>
  );
}
