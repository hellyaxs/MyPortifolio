"use client"
import About from "./components/about"; 
import Skins from "./components/skins";
import Github from "./components/github_projects";
import Header from "./components/header";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Qualification from "./components/qualification";
import Home from "./components/home";
import { useEffect, useState } from 'react';
import { IoIosArrowRoundUp } from 'react-icons/io';

export default function Page() {

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  
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
      {isVisible &&
      (
      <button
        className={`fixed bottom-0 right-0 bg-amber-500 rounded-lg  mr-8 mb-[71px] z-50 items-center text-xl flex gap-2`}
        onClick={scrollToTop}
      >
        <IoIosArrowRoundUp className="inline-block h-12 w-10" />
      </button>
      )}
    
  </>
  );

 
}
