"use client";
import { useState, useEffect, useCallback } from 'react';
import Sidebar from './components/sidebar';
import Home from './components/home';
import About from './components/about';
import Skins from './components/skins';
import Projects from './components/projetos';
import Qualification from './components/qualification';
import Contact from './components/contact';

const PAGE_LABELS = {
  home:      '~/inicio',
  about:     '~/sobre',
  skills:    '~/habilidades',
  projects:  '~/projetos',
  education: '~/formacao',
  contact:   '~/contato',
};

export default function Page() {
  const [activeTab, setActiveTab] = useState('home');
  const [animating, setAnimating] = useState(false);

  const handleTabChange = useCallback((tab) => {
    setActiveTab((current) => {
      if (tab === current) return current;
      setAnimating(true);
      setTimeout(() => {
        setActiveTab(tab);
        setAnimating(false);
      }, 180);
      return current;
    });
  }, []);

  useEffect(() => {
    const handler = (e) => handleTabChange(e.detail);
    document.addEventListener('tab-change', handler);
    return () => document.removeEventListener('tab-change', handler);
  }, [handleTabChange]);

  return (
    <div className="h-screen overflow-hidden bg-background">
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Scrollable content — padding: top 14 (topbar) + bottom 28 (floating nav) */}
      <div
        className="h-full overflow-y-auto pt-14 pb-32"
        style={{
          opacity: animating ? 0 : 1,
          transition: 'opacity 0.18s ease',
        }}
      >
        {activeTab === 'home' && <Home />}
        {activeTab === 'about'     && <About />}
        {activeTab === 'skills'    && <Skins />}
        {activeTab === 'projects'  && <Projects />}
        {activeTab === 'education' && <Qualification />}
        {activeTab === 'contact'   && <Contact />}
      </div>
    </div>
  );
}
