"use client"
import { useEffect, useState } from 'react';
export default function Header() {
    const [theme, setTheme] = useState('light');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('selected-theme');
        if (savedTheme) {
          setTheme(savedTheme);
          if (savedTheme === 'light') {
            document.body.classList.add('sun-theme');
          } else {
            document.body.classList.remove('sun-theme');
          }
        }
      }, []);

    const toggleMenu = () => {
        document.getElementById('nav-menu').classList.toggle('show-menu');
        setIsMenuOpen(!isMenuOpen);
      };
    
      const closeMenu = () => {
        document.getElementById('nav-menu').classList.toggle('show-menu');
        setIsMenuOpen(false);
      };

      
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    
        if (newTheme === 'light') {
          document.body.classList.add('sun-theme');
        } else {
          document.body.classList.remove('sun-theme');
        }
    
        localStorage.setItem('selected-theme', newTheme);
      };

    return (
        <header className="header bg-black" id="header">
        <nav className="nav container relative -left-4 sm:-left-0">
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
          <i className="uil uil-times nav_close" onClick={closeMenu} id="nav-close"></i>
        </div>
        
        <div className="nav_btns"> 
          {/* <!-- Theme change button --> */} 
          <i className={`uil ${theme === 'light' ? 'uil-moon' : 'uil-sun'} change-theme`}  style={{ fontSize: '24px' }} onClick={toggleTheme}></i>
          <div className="nav_toggle" onClick={toggleMenu} id="nav-toggle">
            <i className="uil uil-bars"></i>
          </div>
        </div>   
        </nav>
      </header>
    );
}