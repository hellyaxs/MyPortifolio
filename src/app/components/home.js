"use client"
import Image from "next/image";

export default function Home() {

    return (
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
    );
}