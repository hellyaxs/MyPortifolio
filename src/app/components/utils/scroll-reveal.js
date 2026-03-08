"use client"
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Scroll reveal animation extracted from tiobendev.vercel.app
 * Initial:  opacity:0  filter:blur(8px)  translateY(8px)
 * Revealed: opacity:1  filter:blur(0)    translateY(0)
 */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  blur = 8,
  y = 8,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn('transition-all', className)}
      style={{
        opacity: visible ? 1 : 0,
        filter: visible ? 'blur(0px)' : `blur(${blur}px)`,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transitionDuration: '500ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: visible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
}
