"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {

    return (
        <section className="section mt-24 " id="home">
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
                <Image src="/assets/images/spring-original.svg" className="icon-one" width={40} height={40} alt="icone spring boot" />
                <Image src="/assets/images/typescript-plain.svg" className="icon-two" width={40} height={40}  alt="icone typescript" />
                <Image src="/assets/images/flutter-original.svg" className="icon-three" width={40} height={40} alt="icone flutter" />
              </div>
            </div>
            </div>
            
            <div className="home_data">
              <div className="block mb-1">
               <span className="text-4xl font-medium">
                Eleve seu Negócio <br /> digital a outro nível
                </span>
                <h1 className="text-4xl font-semi-bold title-gradient">com um Full Stack de qualidade!!</h1>
              </div>
             
              
              <TypeAnimation
                    sequence={[
                      '👋🏻 Olá sou, Elias Vitor',
                      1000,
                      'Engenherio da Computação',
                      1000, 
                      '' 
                    ]}
                    speed={{type: 'keyStrokeDelayInMs', value: 250}}
                    className="font-semibold text-xl"
                    repeat={Infinity}
                  />
              <br />
              <a href="#portfolio" className="button_main mt-5">
                <b>Conheça meu portfólio</b> <i className="uil uil-message button_icon"></i>
              </a>

            </div>
          </div>
        </div>
    </section>
    );
}