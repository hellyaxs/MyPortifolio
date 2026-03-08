"use client"
import { useEffect, useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      variant="gradient"
      aria-label="Voltar ao topo"
      className={cn(
        'fixed bottom-6 right-6 z-50 rounded-xl shadow-lg transition-all duration-300',
        isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-4 opacity-0 scale-90 pointer-events-none'
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
