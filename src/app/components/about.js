import Image from 'next/image';

export default function About() {

 return ( 
    <section className="-translate-x-20 pt-10 pb-16 px-0 mb-12 flex flex-col items-center text-center" id="about">
        <h2 className="section_title">Sobre</h2>
  
        <div className="sm:grid grid-cols-1 max-w-[1268px] shadow-2xl p-4 xl:grid-cols-2">
         <div className="about-content ">
          <Image src="/assets/images/profile.jpeg" width={320} height={320} alt="minha foto de perfil" id="about-img" className="about_img" />
  
          <div className="about_social">
            <a href="https://www.linkedin.com/in/elias-vitordev" target="_blank" className="about_social-icon">
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+5511995085916&text=Olá Elias! te achei através de seu portfólio." target="_blank" className="about_social-icon"> 
              <i className="uil uil-whatsapp"></i>
            </a>
            <a href="https://github.com/hellyaxs" target="_blank"  className="about_social-icon">
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
         </div>
          
        <div className="w-full sm:text-center xl:text-start mt-2">
           <span className="font-bold text-first-color text-2xl">Deixe-me apresentar</span>
           <p className="about_description mt-4 font-medium">
            Desenvolvedor Full Stack apaixonado por transformar ideias em experiências digitais inovadoras.
            Minha jornada no mundo da tecnologia é guiada pela curiosidade e pela busca constante de aprendizado.
            Como Full Stack Developer, domino Java, Python e JavaScript, o que me permite ter uma visão abrangente de todo o ciclo de desenvolvimento, 
            desde a concepção até a entrega de soluções completas.
          </p>
          <p className="about_description font-medium ">
            Acredito que cada projeto é uma oportunidade de contar uma história.<br />
            Minha missão é colaborar com empresas para transformar seus sonhos em código, criando produtos que fazem a diferença e geram impacto real.
            Estou sempre aberto a novas colaborações e ideias, então, se você está pronto para levar seu projeto ao próximo nível ou deseja compartilhar experiências,
            <a className="font-semibold text-amber-600 underline" href='#contact'>Vamos conversar!</a>

            </p>
          
  
           <div className="about_buttons">
              <a download="" href="assets/pdf/Curriculo.pdf" className="button_main about_button-delay"> <b> Download CV</b><i className="uil uil-import button_icon"></i></a>
            </div>
  
          </div>
        </div>
  
      </section>
  
    );
}