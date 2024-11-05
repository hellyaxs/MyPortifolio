"use client"
import { useEffect, useState } from 'react';
import { IoIosArrowRoundUp } from 'react-icons/io';

export default function ScrollUp() {
    const isBrowser = () => typeof window !== 'undefined'; 

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); 


    return (
        <>
        {isVisible &&
            (
            <button
              className={`
              fixed bottom-0 right-0 bg-amber-500 rounded-lg mr-8 mb-[71px] z-50 
              items-center text-xl flex gap-2 
              transition-transform transform 
              duration-300 ease-in-out
              scale-0 translate-y-5
              animate-[fadeInUp_0.5s_ease-in-out] 
              ${isVisible ? 'scale-100 translate-y-0' : 'scale-0'}
              hover:scale-110
          `}
              onClick={scrollToTop}
            >
              <IoIosArrowRoundUp className="inline-block h-12 w-10" />
            </button>
            )
}
        </>    
    )
   
}