import Link from 'next/link';
import Image from 'next/image';
import { imagens } from './icons-LP';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { ExternalLink } from 'lucide-react';

const cubeIcons = [
  { src: imagens.angular, alt: 'Angular' },
  { src: imagens.nextjs, alt: 'Next.js' },
  { src: imagens.javascript, alt: 'JavaScript' },
  { src: imagens.docker, alt: 'Docker' },
  { src: imagens.typescript, alt: 'TypeScript' },
  { src: imagens.nestjs, alt: 'NestJS' },
];

export default function AllProjects({ title }) {
  return (
    <Card className="border-border bg-card w-full max-w-lg">
      <CardContent className="flex items-center justify-between p-6 sm:p-8 gap-6">
        <div className="flex flex-col gap-4">
          <h4 className="text-xl sm:text-2xl font-bold text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground">
            Veja todos os meus repositórios no GitHub
          </p>
          <Button asChild variant="gradient" className="gap-2 w-fit">
            <Link href="https://github.com/hellyaxs?tab=repositories" target="_blank" rel="noopener noreferrer">
              Ver Projetos
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* 3D Cube */}
        <div className="cubo shrink-0">
          <div className="stage-cube-cont">
            <div className="cubespinner">
              {cubeIcons.map((icon, i) => (
                <div key={i} className={`face${i + 1}`}>
                  <Image width={72} height={72} src={icon.src} alt={icon.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
