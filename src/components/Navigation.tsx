'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { VscFiles, VscSearch, VscSourceControl, VscDebugAlt, VscChevronDown, VscClose } from 'react-icons/vsc';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - hidden on mobile */}
      <div className="h-8 bg-[#1e1e1e] flex items-center px-4 hidden sm:flex">
        <span className="text-[#cccccc] text-base font-medium">raad's env</span>
      </div>

      {/* Tab Bar */}
      <div className="h-10 bg-[#252526] flex items-center border-b border-[#3e3e42] mobile-safe-top">
        {/* Side Icons with Dropdown - hidden on mobile */}
        <div className="hidden sm:flex h-full border-r border-[#3e3e42] items-center pr-1">
          <div className="flex items-center">
            <button className="px-3 text-[#cccccc] hover:text-white">
              <VscFiles size={16} />
            </button>
            <button className="px-3 text-[#cccccc] hover:text-white">
              <VscSearch size={16} />
            </button>
            <button className="px-3 text-[#cccccc] hover:text-white">
              <VscSourceControl size={16} />
            </button>
            <button className="px-3 text-[#cccccc] hover:text-white">
              <VscDebugAlt size={16} />
            </button>
          </div>
          <button className="text-[#cccccc] hover:text-white px-1">
            <VscChevronDown size={16} />
          </button>
        </div>

        {/* Tabs - always visible, horizontally scrollable on mobile */}
        <div className="flex flex-1 flex-wrap sm:flex-nowrap overflow-x-auto no-scrollbar">
          {[
            { path: '/', label: 'page.tsx' },
            { path: '/about', label: 'page.tsx' },
            { path: '/projects', label: 'page.tsx' },
            { path: '/contact', label: 'page.tsx' },
            { path: '/game', label: 'page.tsx' }
          ].map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`flex items-center h-10 px-2 sm:px-4 border-t border-l border-r border-transparent group whitespace-nowrap text-[11px] sm:text-sm ${
                isActive(item.path)
                  ? 'bg-[#1e1e1e] text-white border-[#3e3e42]'
                  : 'text-[#969696] hover:text-white'
              }`}
            >
              <span>
                {item.path === '/' ? 'home' : item.path.slice(1)}.tsx
              </span>
              {isActive(item.path) && (
                <button className="ml-2 p-1 hover:bg-[#3e3e42] rounded">
                  <VscClose size={14} />
                </button>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 