"use client"
import { useState } from 'react';
import Title from './utils/title';
import CarroselCertificados from './utils/certificados';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/app/components/ui/tabs';
import { Progress } from '@/app/components/ui/progress';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const education = [
  {
    initials: 'UP',
    degree: 'Engenharia da Computação',
    institution: 'UFRPE — Universidade Federal Rural de Pernambuco',
    period: '2020 – 2025',
    type: 'Graduação',
    progress: 95,
    description:
      'Curso de nível superior com foco em algoritmos, estruturas de dados, sistemas operacionais, redes, banco de dados e desenvolvimento de software. Experiência prática em projetos acadêmicos com Java, Python e C. Conclusão prevista para 2025.',
    tags: ['Java', 'Python', 'C', 'Linux', 'Banco de Dados'],
  },
  {
    initials: 'ET',
    degree: 'Análise e Desenvolvimento de Sistemas',
    institution: 'ETE Edson Mororó Moura',
    period: '2017 – 2019',
    type: 'Técnico',
    progress: 100,
    description:
      'Curso técnico integrado ao ensino médio com ênfase em lógica de programação, desenvolvimento web, banco de dados relacional e fundamentos de redes. Base sólida para a carreira em tecnologia.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SQL', 'PHP'],
  },
];

const workExperience = [
  {
    initials: 'AD',
    degree: 'Adasi Software',
    institution: 'Engenheiro de Software JR · Caruaru, PE',
    period: 'Jan 2025 – Presente',
    type: 'PJ',
    progress: null,
    tags: ['Node.js', 'TypeScript', 'AWS S3', 'Firebase', 'Redis', 'TypeORM', 'SQL'],
    description:
      'Desenvolvimento e manutenção de aplicações backend com Node.js & TypeScript, APIs RESTful e integrações com AWS S3 e Firebase. Processamento assíncrono com Redis, otimização de consultas SQL com TypeORM, code reviews e apoio ao time de produto no refinamento de requisitos de negócio.',
  },
  {
    initials: 'A19',
    degree: 'Agência19',
    institution: 'Engenheiro de Software JR · Belo Jardim, PE',
    period: '2023 – 2025',
    type: 'Autônomo',
    progress: null,
    tags: ['NestJS', 'PHP', 'Flutter', 'Docker', 'GitHub Actions', 'Linux'],
    description:
      'Backend com Node.js (NestJS) e PHP, além de desenvolvimento mobile com Flutter. Containers Docker, pipelines CI/CD com GitHub Actions e infraestrutura em nuvem. Deploys, integrações entre sistemas e manutenção de aplicações em produção.',
  },
];

function EducationCard({ edu }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn(
      'rounded-xl border border-border bg-card transition-shadow duration-300',
      open ? 'shadow-card' : 'hover:shadow-card'
    )}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start gap-3 p-4 text-left"
      >
        {/* Initials avatar */}
        <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
          <span className="text-xs font-bold text-primary">{edu.initials}</span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-foreground leading-tight">{edu.degree}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{edu.institution}</p>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="text-[10px] text-muted-foreground">{edu.period}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground border border-border">
                {edu.type}
              </span>
            </div>
          </div>

          {/* Progress bar — só para educação */}
          {edu.progress !== null && (
            <div className="flex items-center gap-3 mt-3">
              <Progress value={edu.progress} className="flex-1 h-1" />
              <span className="text-xs font-medium text-primary w-8 text-right shrink-0">{edu.progress}%</span>
            </div>
          )}

          <div className="flex items-center justify-between mt-2.5">
            <div className="flex flex-wrap gap-1">
              {edu.tags.map((tag) => (
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
              {edu.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Qualification() {
  return (
    <section className="py-10 bg-background">
      <div className="max-w-2xl mx-auto px-6">
        <Title title="Formação" />

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="bg-secondary/50 border border-border h-9 p-0.5 mb-6">
            <TabsTrigger
              value="education"
              className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4"
            >
              Graduação
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4"
            >
              Experiência
            </TabsTrigger>
            <TabsTrigger
              value="certs"
              className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4"
            >
              Certificados
            </TabsTrigger>
          </TabsList>

          {/* Education */}
          <TabsContent value="education" className="space-y-3">
            {education.map((edu, i) => (
              <EducationCard key={i} edu={edu} />
            ))}
          </TabsContent>

          {/* Experience */}
          <TabsContent value="experience" className="space-y-3">
            {workExperience.map((exp, i) => (
              <EducationCard key={i} edu={exp} />
            ))}
          </TabsContent>

          {/* Certificates */}
          <TabsContent value="certs">
            <div className="flex justify-center">
              <CarroselCertificados />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
