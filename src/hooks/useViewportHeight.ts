'use client';

import { useEffect, useState } from 'react';

export function useViewportHeight() {
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      setViewportHeight('calc(var(--vh, 1vh) * 100)');
    };

    // Initial update
    updateHeight();

    // Update on resize and orientation change
    window.addEventListener('resize', updateHeight);
    window.addEventListener('orientationchange', updateHeight);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('orientationchange', updateHeight);
    };
  }, []);

  return viewportHeight;
} 