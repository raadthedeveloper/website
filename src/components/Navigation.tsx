'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { VscFiles, VscSearch, VscSourceControl, VscDebugAlt, VscChevronDown, VscClose } from 'react-icons/vsc';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="h-8 bg-[#1e1e1e] flex items-center px-4">
        <span className="text-[#cccccc] text-sm">Raad Fakhrian</span>
      </div>

      {/* Tab Bar */}
      <div className="h-9 bg-[#252526] flex items-center border-b border-[#3e3e42]">
        {/* Side Icons with Dropdown */}
        <div className="flex h-full border-r border-[#3e3e42] items-center pr-1">
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

        {/* Tabs */}
        <div className="flex flex-1">
          {[
            { path: '/', label: 'page.tsx' },
            { path: '/about', label: 'page.tsx' },
            { path: '/work', label: 'page.tsx' },
            { path: '/contact', label: 'page.tsx' }
          ].map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`flex items-center h-9 px-4 border-t border-l border-r border-transparent min-w-[120px] ${
                isActive(item.path)
                  ? 'bg-[#1e1e1e] text-white border-[#3e3e42]'
                  : 'text-[#969696] hover:text-white'
              }`}
            >
              <span className="text-xs flex-1">
                {item.path === '/' ? 'home/' : item.path.slice(1) + '/'}{item.label}
              </span>
              {isActive(item.path) && (
                <button className="ml-2 p-1 hover:bg-[#3e3e42] rounded">
                  <VscClose size={14} />
                </button>
              )}
            </Link>
          ))}
        </div>

        {/* Terminal Panel */}
        <div className="h-full border-l border-[#3e3e42] flex items-center px-4">
          <span className="text-[#969696] text-xs">TERMINAL</span>
        </div>
      </div>
    </div>
  );
} 