'use client';

import { useEffect } from 'react';
import Navigation from "@/components/Navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
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

  return (
    <div className="flex flex-col h-[calc(var(--vh,1vh)*100)] bg-[#1e1e1e] text-[#cccccc] scaled-fill overflow-hidden">
      <div className="h-[env(safe-area-inset-top)]" />
      <Navigation />
      <div className="flex flex-1 h-full overflow-hidden">
        <div className="flex flex-col flex-1 h-full">
          <main className="flex-1 h-full overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
} 