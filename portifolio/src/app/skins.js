import Image from "next/image";

export default function Skins() {
    const skills = [{ 
        "title":"HTML",
        "experiencia":"2 anos",
        "src":"/assets/images/html-card.webp",
        "alt":"html",
        "class":"circle",
        "descrition":"HTML é uma linguagem de marcação utilizada na construção de páginas na Web."
      },
      { 
        "title":"CSS",
        "experiencia":"2 anos",
        "src":"/assets/images/css-card.webp",
        "alt":"css",
        "class":"circle circle1",
        "descrition":"O CSS é uma linguagem de folhas de estilos, criada com o propósito de estilizar as páginas HTML."
      },
      { 
        "title":"JavaScript",
        "experiencia":"2 anos",
        "src":"/assets/images/js-card.webp",
        "alt":"js",
        "class":"circle circle2",
        "descrition":"JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
      },
      { 
        "title":"Angular",
        "experiencia":"1 ano",
        "src":"/assets/images/angular.svg",
        "alt":"ts",
        "class":"circle circle5",
        "descrition":"FrameWork JavaScript desenvolvido pelo Google para construir SPAs organizada em Compomentes."
      },
      { 
        "title":"Spring Boot",
        "experiencia":"6 meses",
        "src":"/assets/images/spring-boot.svg",
        "alt":"react",
        "class":"circle circle4",
        "descrition":"FrameWork java para construir APIs REST, faz parte do ecossistema Spring  que possui um conjunto de ferramentas para desenvolver aplicações Web."
      },
      { 
        "title":"Git",
        "experiencia":"2 anos",
        "src":"/assets/images/git-card.webp",
        "alt":"git",
        "class":"circle circle3",
        "descrition":"Um sistema de controle de versão de arquivos. Através deles podemos desenvolver projetos na qual diversas pessoas podem contribuir."
      },
    ]

    return (
        <div className="skills_container container grid">
          {skills.map((skill, index) => (
            <div className="skills_card delaySmallReveal" id="card" key={index}>
              <span className={`${skill.alt} card-border`}></span>
              <div className={skill.class}>
                <Image className="skills_img" width={300} height={300} src={skill.src} alt={skill.alt} />
              </div>
              <h3 className="card_title">{skill.title}</h3>  
              <h4 className="card_subtitle">{skill.experiencia}</h4>
              <p className="card_description">{skill.descrition}</p>
            </div>
          ))}
        </div>
      );
}