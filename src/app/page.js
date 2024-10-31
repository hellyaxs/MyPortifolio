"use client"
import Image from "next/image";
import Skins from "./skins";
import Header from "./components/Header";
import Github from "./github_projects";
import { useEffect, useState } from 'react';

export default function Home() {
  
 
  const [open, setOpen] = useState(false);

 
 function openTab(openTab) {
     setOpen(openTab)
 }

  return (
    <>
    <header className="header" id="header">
    <nav className="nav container">
      <a href="#" className="nav_logo"><span className="logo_cor">[</span>Elias<span className="logo_cor">]</span></a>
      <div className="nav_menu" id="nav-menu">
          <ul className="nav_list grid">

            <li className="nav_item"> 
              <a href="#home" className="nav_link active-link"> Home </a>
            </li>

              <li className="nav_item"> 
                <a href="#about" className="nav_link">Sobre </a>
              </li>

          <li className="nav_item"> 
            <a href="#skills" className="nav_link">Conhecimentos </a>
          </li>
                  
        <li className="nav_item"> 
            <a href="#portfolio" className="nav_link">Projetos </a>
        </li>
                 
        <li className="nav_item"> 
          <a href="#contact" className="nav_link"> Contato </a> 
        </li>
      </ul>
      <i className="uil uil-times nav_close" id="nav-close"></i>
    </div>
    
    <div className="nav_btns"> 
      {/* <!-- Theme change button --> */}
      <i className="uil uil-moon change-theme uil-sun" id="theme-button"></i>
      
      <div className="nav_toggle" id="nav-toggle">
        <i className="uil uil-bars"></i>
      </div>
    </div>   
    </nav>
  </header>
    <main className="main">

    {/* <!--================== HOME ========================--> */}
    <section className="home section home_section" id="home">
        <div className="home_container container grid">
          <div className="home_content grid">

            <div className="home_effect-wrap">
              <div className="effect effect-1"></div>
              <div className="effect effect-3">
                <div className="square"></div>
                <div className="ball"></div>
              </div>
            </div>

           <div className="home_desktop">
              <div className="home_people">
                <Image src="/assets/images/people-home.webp" width={300} height={300} alt="pessoa no computador" />
              
              <div className="home_icon">
                <Image src="/assets/images/home_html.webp" className="icon-one" width={50} height={50} alt="icone html" />
                <Image src="/assets/images/home_css.webp" className="icon-two" width={50} height={50}  alt="icone css" />
                <Image src="/assets/images/home_js.webp" className="icon-three" width={50} height={50} alt="icone js" />
              </div>
            </div>
            </div>
            
            <div className="home_data">
              <h1 className="home_title">Olá, sou <br />Elias Vitor</h1>
              <h3 className="home_subtitle home_animation">Engenherio da Computação</h3>
              
              <a href="#portfolio" className="button_main">
                <b>Conheça meu portfólio</b> <i className="uil uil-message button_icon"></i>
              </a>

            </div>
          </div>
        </div>
    </section>

    {/* <!--================== ABOUT ========================--> */}
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
         <p className="about_description"> Meu nome é Elias Vitor, tenho 22 anos e moro em Belo jardim - PE. Sou Desenvolvedor Full Stack, formado em Análise e desenvolvimento de sistemas.</p>
         <p className="about_description"> Atualmente estou graduando Engenharia da Computação pela UFRPE</p>
        

         <div className="about_buttons">
            <a download="" href="assets/pdf/Curriculo.pdf" className="button_main about_button-delay"> <b> Download CV</b><i className="uil uil-import button_icon"></i></a>
          </div>

        </div>
      </div>

    </section>

    <section className="skills section" id="skills">
      <h2 className="section_title delaySmallReveal">Habilidades</h2>
      <Skins className="skills_container container grid" />
    </section>
   


    <section className="app-section qualification section">
        <div className="qualification_container container"> 
          <h2 className="section_title">Qualificações</h2>
  
          <div className="tab-wrap">
            <div className="tab">
              <button className="tab_button" onClick={() => setOpen(true)} >Graduação</button>
              <button className="tab_button" onClick={() => setOpen(false)} >Experiência</button>
            </div>
            {open ? (<>
              <div id="Formacao" className="tabcontent">
              <div className="qualification_titles">
                <h3 className="qualification_name">Engenharia da Computação</h3>
                <p className="qualification_description">Universidade Federal Rural de Pernambuco</p>
  
                    <div className="status">
                      <span className="qualification_number"><span className="pont-red">80%</span></span>
                      </div>
  
                    <div className="qualification_calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2020 - 2025
                    </div>
                  </div>

                  <div className="qualification_bar">
                    <div className="qualification_percentage qualification_ufrpe">
                    </div>
                  </div>
                <div className="qualification_titles">
                    <h3 className="qualification_name">Analise de Desenvolvimento de Sistemas</h3>
                    <p className="qualification_description">Escola Técnica Estadual - Edson Mororó Moura</p>
      
                        <div className="status">
                          <span className="qualification_number"><span className="pont-green">100%</span></span>
                          </div>
      
                        <div className="qualification_calendar">
                          <i className="uil uil-calendar-alt"></i>
                          2017 - 2019
                        </div>
                      </div>
    
                      <div className="qualification_bar">
                        <div className="qualification_percentage qualification_ete">
                        </div>
                      </div> 
            </div>

            </>):(<>
            
              <div id="Experiência" className="tabcontent">            
                <div className="qualification_titles">
               <h3 className="qualification_name">Oportunidade</h3>
                  <p className="qualification_description qualification_exp">Buscando uma oportunidade no mercado de trabalho.</p>
                  <p className="qualification_description qualification_exp">Entre em contato:  <a className="qualification_exp-a" href="mailto:eliasvitor.dev@gmail.com">
                    <span className="exp-text">Email:</span> eliasvitor.dev@gmail.com</a>
                  <a className="qualification_exp-a" href="https://api.whatsapp.com/send?phone=+5581991426794&text=Olá elias!" target="_blank"><span className="exp-text">Whatsapp:</span> (81) 99142 - 6794</a> </p>
                </div>
                </div>
            </>)
             }
            
            
    
  
          </div>
          </div>
    </section>

    <section className="section_portfolio" id="portfolio">
      <h2 className="section_title">Projetos</h2>
  
      <div className="flex"> 
    <Github />
        
      </div>
    </section>

    

    <section className="contact section" id="contact">
      <h2 className="section_title ">Contato</h2>
      
      <div className="contact_container container grid">
        <div className="div_contact">

          <div className="contact_information">
            <i className="uil uil-whatsapp contact_icon"></i>
            <div>
              <h3 className="contact_title">Whatsapp</h3>
              <span className="contact_subtitle"><a href="https://api.whatsapp.com/send?phone=+5581991426794&text=Olá Elias! te achei através de seu portfólio." target="_blank">(81) 99142 - 6794</a></span>
              </div>
              </div>
   
              <div className="contact_information">
                <i className="bi bi-at contact_icon"></i>
               <div>
                 <h3 className="contact_title">Mande um E-Mail</h3>
                 <span className="contact_subtitle"> <a href="mailto:eliasvitor.dev@gmail.com">eliasvitor.dev@gmail.com</a> </span>
               </div>
              </div>
   
              <div className="contact_information">
                <i className="bi bi-geo-alt contact_icon"></i>
               <div>
                 <h3 className="contact_title">Localização</h3>
                 <span className="contact_subtitle"> Belo Jardim - PE</span>
               </div>
              </div>
          </div>
        
         
        </div>
    </section>
     
  </main>

  <div className="footer_divider"></div>
  {/* <!--================== FOOTER ========================--> */}
  <footer className="footer">
          <p className="footer_copy">&#169; 2022 Elias Vitor <i className="uil bi-laptop pont"></i></p>
  </footer>

  {/* <!--================== SCROLL TOP ====================--> */}
  <a href="#" className="scrollup" id="scroll-up">
    <i className="uil uil-arrow-up scroll_icon"></i>
  </a>

  {/* <!--============= Swipper js ===================--> */}
  {/* <script src="/assets/js/swiper-bundle.min.js"></script> */}

  {/* <!--============= Scroll Reveal ===================--> */}
  {/* <script src="https://unpkg.com/scrollreveal"></script> */}

  {/* <!--============= Main js ===================--> */}
  {/* <script src="/assets/js/main.js"></script>
  <script src="/assets/js/api-git.js"></script>
  <script src="/assets/js/moment.js"></script> */}
  </>
  );

 
}
