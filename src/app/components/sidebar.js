"use client"
import { useEffect, useState } from 'react';
import {
  Home, User, BookOpen, FolderOpen, GraduationCap, Mail,
  Github, Linkedin, MessageCircle, Sun, Moon
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const navItems = [
  { id: 'home',      label: 'Home',     icon: Home },
  { id: 'about',     label: 'Sobre',    icon: User },
  { id: 'blog',      label: 'Blog',     icon: BookOpen },
  { id: 'projects',  label: 'Projetos', icon: FolderOpen },
  { id: 'education', label: 'Formação', icon: GraduationCap },
  { id: 'contact',   label: 'Contato',  icon: Mail },
];

const socialLinks = [
  { href: 'https://github.com/hellyaxs',                        icon: Github,        label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/elias-vitordev',         icon: Linkedin,      label: 'LinkedIn' },
  { href: 'https://api.whatsapp.com/send?phone=+5581991426794', icon: MessageCircle, label: 'WhatsApp' },
];

export default function Sidebar({ activeTab, onTabChange }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Lê preferência salva — useEffect roda só no client, sem mismatch
    const saved = localStorage.getItem('selected-theme') || 'dark';
    setTheme(saved);
    document.documentElement.classList.toggle('sun-theme', saved === 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.classList.toggle('sun-theme', next === 'light');
    localStorage.setItem('selected-theme', next);
  };

  return (
    <>
      {/* ── Top bar ────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 h-14 bg-background/95 backdrop-blur-sm border-b border-border">
        <button
          onClick={() => onTabChange('home')}
          className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
        >
          <span className="text-primary">{'{'}</span>
          Elias
          <span className="text-primary">{'}'}</span>
        </button>

        <div className="flex items-center gap-0.5">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          ))}
          <div className="w-px h-4 bg-border mx-2" />
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
          >
            {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
          </button>
        </div>
      </header>

      {/* ── Floating bottom nav ──────────────────────────────── */}
      <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-0.5 px-2 py-1.5 rounded-2xl bg-card/95 backdrop-blur-md border border-border shadow-xl shadow-black/20">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              title={label}
              className={cn(
                'flex flex-col items-center justify-center gap-0.5 w-12 h-10 sm:w-14 sm:h-11 rounded-xl transition-all duration-150',
                activeTab === id
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              )}
            >
              <Icon className={cn('w-4 h-4 shrink-0', activeTab === id && 'stroke-[2.5]')} />
              <span className="text-[9px] leading-none font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
