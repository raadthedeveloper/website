'use client';

import Navigation from "@/components/Navigation";
import { useViewportHeight } from "@/hooks/useViewportHeight";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const viewportHeight = useViewportHeight();

  return (
    <div className="h-full overflow-hidden" style={{ height: viewportHeight }}>
      <div className="flex flex-col h-full bg-[#1e1e1e] text-[#cccccc] scaled-fill overflow-hidden">
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
    </div>
  );
} 