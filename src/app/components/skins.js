import Image from "next/image";
import Title from "./utils/title";

const skills = [
  { title: "Java",        src: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/java/java-original.svg",        level: "Avançado" },
  { title: "Spring Boot", src: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/spring/spring-original.svg",      level: "Avançado" },
  { title: "TypeScript",  src: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg", level: "Avançado" },
  { title: "NestJS",      src: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nestjs/nestjs-original.svg",       level: "Avançado" },
  { title: "Next.js",     src: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nextjs/nextjs-original.svg",       level: "Avançado" },
  { title: "JavaScript",  src: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg", level: "Avançado" },
  { title: "Python",      src: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg",       level: "Avançado" },
  { title: "Flutter",     src: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/flutter/flutter-original.svg",     level: "Intermediário" },
  { title: "Docker",      src: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/docker/docker-original.svg",       level: "Intermediário" },
  { title: "Git",         src: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/git/git-original.svg",             level: "Avançado" },
  { title: "Linux",       src: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/linux/linux-original.svg",         level: "Avançado" },
  { title: "Kubernetes",  src: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/kubernetes/kubernetes-original.svg", level: "Básico" },
];

const levelDot = {
  Avançado:     "bg-primary",
  Intermediário: "bg-muted-foreground",
  Básico:       "bg-border",
};

export default function Skins() {
  return (
    <section className="py-10 bg-background" id="skills">
      <div className="max-w-2xl mx-auto px-6">
        <Title title="Habilidades" />

        <div className="space-y-1">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3 border-b border-border/50 last:border-0 group"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={skill.src}
                  width={24}
                  height={24}
                  alt={skill.title}
                  className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-sm font-medium text-foreground">{skill.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{skill.level}</span>
                <span className={`w-1.5 h-1.5 rounded-full ${levelDot[skill.level]}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
