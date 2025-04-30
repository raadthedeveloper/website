'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface PageLayoutProps {
  children: ReactNode;
  filePath: string;
}

export default function PageLayout({ children, filePath }: PageLayoutProps) {
  const pathname = usePathname();
  const pathSegments = filePath.split('/');

  const navItems = [
    { path: '/', label: 'page.tsx', parent: 'src/app' },
    { path: '/about', label: 'page.tsx', parent: 'src/app/about' },
    { path: '/work', label: 'page.tsx', parent: 'src/app/work' },
    { path: '/contact', label: 'page.tsx', parent: 'src/app/contact' }
  ];

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex">
      {/* Left Navigation */}
      <div className="w-64 bg-[#252526] border-r border-[#3e3e42] text-[#cccccc] p-4">
        <div className="mb-4 text-[#858585] uppercase text-xs font-medium">Explorer</div>
        <div className="space-y-2">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;
            const folderName = item.parent.split('/').pop();
            return (
              <div key={index} className="pl-2">
                <div className={`text-[#858585] ${isActive ? 'text-[#cccccc]' : ''}`}>
                  {folderName}
                </div>
                <Link 
                  href={item.path}
                  className={`flex items-center gap-2 pl-4 py-1 rounded hover:bg-[#2a2d2e] ${
                    isActive ? 'bg-[#37373d]' : ''
                  }`}
                >
                  <span className="text-[#519aba]">⚛</span>
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex-1">
        {/* File path header */}
        <div className="bg-[#252526] border-b border-[#3e3e42] px-4 py-2 text-[#cccccc] flex items-center gap-2 text-sm">
          {pathSegments.map((segment, index) => {
            const pathUpToHere = pathSegments.slice(0, index + 1).join('/');
            return (
              <span key={index} className="flex items-center">
                {index > 0 && <span className="text-[#666666] mx-1">›</span>}
                <Link 
                  href={index === pathSegments.length - 1 ? pathname : `/${pathUpToHere}`}
                  className={`hover:text-[#cccccc] ${
                    index === pathSegments.length - 1 ? 'text-[#cccccc]' : 'text-[#858585]'
                  }`}
                >
                  {segment}
                </Link>
              </span>
            );
          })}
        </div>

        {/* Main content with line numbers */}
        <div className="flex">
          {/* Line numbers */}
          <div className="w-12 text-right pr-4 pt-20 text-[#858585] select-none bg-[#1e1e1e] border-r border-[#3e3e42]">
            {Array.from({ length: 50 }, (_, i) => (
              <div key={i} className="leading-7">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 p-4 pt-20">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 