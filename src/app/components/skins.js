import Image from "next/image";
import Title from "./utils/title";
import { RevealWrapper }from  'next-reveal'

export default function Skins() {
    const skills = [{ 
        "title":"Java",
        "src":"https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/java/java-original.svg",
        "alt":"html",
    
      },
      { 
        "title":"nestjs",
        "src":"https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nestjs/nestjs-original.svg",
        "alt":"html",
    
      },
      { 
        "title":"flutter",
        "src":"https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/flutter/flutter-original.svg",
        "alt":"css",
      },
      { 
        "title":"python",
        "src":"https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/python/python-original.svg",
        "alt":"ts",
      },
      { 
        "title":"JavaScript",
        "src":"https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg",
        "alt":"js",
      },
      { 
        "title":"Linux",
        "src":"https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/linux/linux-original.svg",
        "alt":"js",
      },
      { 
        "title":"typescript",
        "src":"https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg",
        "alt":"ts",
      },
      { 
        "title":"Spring Boot",
        "src":"https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/spring/spring-original.svg",
        "alt":"spring",
      },
      { 
        "title":"Git",
        "src":"https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/git/git-original.svg",
        "alt":"git",
      },
      { 
        "title":"docker",
        "src":"https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/docker/docker-original.svg",
        "alt":"css",
      },
      { 
        "title":"Nextjs",
        "src":"https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nextjs/nextjs-original.svg",
        "alt":"spring",
      },
      { 
        "title":"kubernetes",
        "src":"https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/kubernetes/kubernetes-original.svg",
        "alt":"css",
      },
    ]

    return (
      <RevealWrapper>
      <section className="skills section" id="skills">
        <Title subtitle={"skills"} title="Habilidades" icon="journal-bookmark-fill" />
  
        <div className="skills_container container grid">
          {skills.map((skill, index) => (
            <div className="skills_card" key={index}>
              <span className={`${skill.alt} card-border`}></span>
              <div className="circle">
                <Image  width={60} height={60} src={skill.src} alt={skill.alt} />
                <p className="mt-1 font-medium">{skill.title}</p>
               </div>
            </div>
          ))}
        </div>
        </section>
        </RevealWrapper>
      );
}