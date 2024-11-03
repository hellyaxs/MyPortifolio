import Image from 'next/image';

export default function About() {

    return ( 
        <section className="about section delaySmallReveal" id="about">
        <h2 className="section_title">Sobre</h2>
  
        <div className="about_container container grid">
         <div className="about-content">
          <Image src="/assets/images/profile.jpeg" width={300} height={300} alt="minha foto de perfil" id="about-img" className="about_img" />
  
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
          
          <div className="about_data">
           
           <p className="about_description">Sou Desenvolvedor Full Stack com especialidades em Java, Python, javascript. Ajudo empresas a Transformar sonhos em codigo. Vamos conversar?</p>
          
  
           <div className="about_buttons">
              <a download="" href="assets/pdf/Curriculo.pdf" className="button_main about_button-delay"> <b> Download CV</b><i className="uil uil-import button_icon"></i></a>
            </div>
  
          </div>
        </div>
  
      </section>
  
    );
}