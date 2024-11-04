"use client"
import About from "./components/about"; 
import Skins from "./components/skins";
import Github from "./components/github_projects";
import Header from "./components/header";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Qualification from "./components/qualification";
import Home from "./components/home";

export default function Page() {
  
  return (
    <>
      <Header />
      <main className="flex flex-col w-full justify-center items-center main">
        <Home />
        <About />
        <Skins />
        <Qualification />
        <Github />    
        <Contact /> 
      </main>
      <Footer />
  </>
  );

 
}
