"use client";
import About from "./components/about"; 
import Skins from "./components/skins";
import Image from "next/image";
import Github from "./components/github_projects";
import Header from "./components/header";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Qualification from "./components/qualification";
import Home from "./components/home";
import ScrollUp from "./components/utils/scrollUp";
import Marquee from "react-fast-marquee";
import Projects from "./components/projetos";
import { imagens } from "./components/utils/icons-LP";

export default function Page() {

  return (
    <>
      <Header />
      <main className="flex flex-col w-full justify-center items-center main">
        <Home />
        <About />
        <Skins />
        <Marquee>
        {Object.entries(imagens).map(([name, url]) => (
          <Image className="mx-3 filter grayscale hover:filter-none"
           key={name} src={url} alt={name} width={54} height={54}  />
        ))}
        </Marquee>
        <div className="w-full h-1 relative -top-7 shadow-lg" />
        <Qualification />

        <Github />  
        {/* <Projects />  */}
        <Contact /> 
      </main>
      <Footer />
      <ScrollUp />
    
  </>
  );

 
}
