'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { VscFiles, VscSearch, VscSourceControl, VscDebugAlt } from 'react-icons/vsc';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 h-8 bg-[#1e1e1e] flex items-center px-4 z-50">
        <span className="text-[#cccccc] text-sm">Raad Fakhrian</span>
      </div>

      {/* Side Icons */}
      <div className="fixed top-8 left-0 bottom-0 w-12 bg-[#333333] flex flex-col items-center py-2 z-50">
        <button className="p-2 text-[#cccccc] hover:text-white">
          <VscFiles size={24} />
        </button>
        <button className="p-2 text-[#cccccc] hover:text-white">
          <VscSearch size={24} />
        </button>
        <button className="p-2 text-[#cccccc] hover:text-white">
          <VscSourceControl size={24} />
        </button>
        <button className="p-2 text-[#cccccc] hover:text-white">
          <VscDebugAlt size={24} />
        </button>
      </div>

      {/* Tab Bar */}
      <div className="fixed top-8 left-12 right-0 h-9 bg-[#252526] flex items-center px-2 border-b border-[#3e3e42] z-40">
        <div className="flex">
          {[
            { path: '/', label: 'page.tsx' },
            { path: '/about', label: 'page.tsx' },
            { path: '/work', label: 'page.tsx' },
            { path: '/contact', label: 'page.tsx' }
          ].map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`flex items-center h-9 px-4 border-t border-l border-r border-transparent ${
                isActive(item.path)
                  ? 'bg-[#1e1e1e] text-white border-[#3e3e42]'
                  : 'text-[#969696] hover:text-white'
              }`}
            >
              <span className="text-xs">
                {item.path === '/' ? 'home/' : item.path.slice(1) + '/'}{item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content Padding */}
      <div className="h-[41px]"></div>
    </>
  );
} 