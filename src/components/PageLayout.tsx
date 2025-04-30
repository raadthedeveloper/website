'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronRight, FaChevronDown, FaReact } from 'react-icons/fa';
import { VscJson, VscFile, VscFileCode, VscMarkdown } from 'react-icons/vsc';

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

  const nonInteractiveItems = [
    { label: '.next', icon: <FaChevronRight className="text-[#cccccc]" size={10} /> },
    { label: 'node_modules', icon: <FaChevronRight className="text-[#cccccc]" size={10} /> },
    { label: 'public', icon: <FaChevronRight className="text-[#cccccc]" size={10} /> }
  ];

  const bottomFiles = [
    { label: '.gitignore', icon: <VscFile className="text-[#cccccc]" /> },
    { label: 'eslint.config.mjs', icon: <VscFileCode className="text-[#E6DB74]" /> },
    { label: 'next-env.d.ts', icon: <VscFileCode className="text-[#519ABA]" /> },
    { label: 'next.config.ts', icon: <VscFileCode className="text-[#519ABA]" /> },
    { label: 'package-lock.json', icon: <VscJson className="text-[#F69D50]" /> },
    { label: 'package.json', icon: <VscJson className="text-[#F69D50]" /> },
    { label: 'postcss.config.mjs', icon: <VscFileCode className="text-[#E6DB74]" /> },
    { label: 'README.md', icon: <VscMarkdown className="text-[#519ABA]" /> },
    { label: 'tsconfig.json', icon: <VscJson className="text-[#519ABA]" /> }
  ];

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex flex-col">
      <div className="flex-1 flex">
        {/* Left Navigation */}
        <div className="w-64 bg-[#252526] border-r border-[#3e3e42] text-[#cccccc]">
          <div className="p-2">
            <div className="uppercase text-[11px] text-[#858585] font-medium px-2 py-1">
              Explorer
            </div>
            <div className="space-y-[2px]">
              {/* Non-interactive items */}
              {nonInteractiveItems.map((item, index) => (
                <div key={index} className="flex items-center gap-1 px-2 py-[2px] text-[13px] text-[#858585]">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}

              {/* src folder structure */}
              <div className="flex items-center gap-1 px-2 py-[2px] text-[13px]">
                <FaChevronDown className="text-[#cccccc]" size={10} />
                <span className="text-[#E06C75]">src</span>
              </div>
              <div className="pl-4">
                <div className="flex items-center gap-1 px-2 py-[2px] text-[13px]">
                  <FaChevronDown className="text-[#cccccc]" size={10} />
                  <span className="text-[#E06C75]">app</span>
                </div>
                <div className="pl-4">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.path;
                    const folderName = item.parent.split('/').pop();
                    return (
                      <div key={index}>
                        <div className="flex items-center gap-1 px-2 py-[2px] text-[13px]">
                          <FaChevronDown className="text-[#cccccc]" size={10} />
                          <span className="text-[#E06C75]">{folderName}</span>
                        </div>
                        <div className="pl-4">
                          <Link 
                            href={item.path}
                            className={`flex items-center gap-2 px-2 py-[2px] text-[13px] rounded ${
                              isActive ? 'bg-[#37373d]' : 'hover:bg-[#2a2d2e]'
                            }`}
                          >
                            <FaReact className="text-[#519ABA]" />
                            <span className="text-[#cccccc]">{item.label}</span>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom files */}
              {bottomFiles.map((file, index) => (
                <div key={index} className="flex items-center gap-2 px-2 py-[2px] text-[13px] text-[#cccccc]">
                  {file.icon}
                  <span>{file.label}</span>
                </div>
              ))}
            </div>
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
            <div className="w-12 text-right pr-4 pt-20 text-[#858585] select-none bg-[#1e1e1e] border-r border-[#3e3e42] text-xs">
              {Array.from({ length: 50 }, (_, i) => (
                <div key={i} className="leading-[21px]">
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

      {/* Terminal */}
      <div className="h-64 bg-[#1e1e1e] border-t border-[#3e3e42]">
        <div className="bg-[#252526] text-[#cccccc] text-xs px-4 py-1 border-b border-[#3e3e42]">
          Terminal
        </div>
        <div className="p-4 text-xs font-mono">
          <div className="text-[#cccccc]">zsh: command not found: run</div>
          <div className="text-[#cccccc]">(base) raad@raads-MBP website % npm run main</div>
          <div className="text-[#F44747]">npm ERR! Missing script: "main"</div>
          <div className="text-[#F44747]">npm ERR! To see a list of scripts, run:</div>
          <div className="text-[#F44747]">npm ERR!   npm run</div>
          <div className="text-[#F44747]">npm ERR! A complete log of this run can be found in: /Users/raad/.npm/_logs/2025-04-29T23_34_12_018Z-debug-0.log</div>
          <div className="text-[#cccccc]">(base) raad@raads-MBP website % npm &lt;command&gt;</div>
          <div className="text-[#cccccc]">Usage:</div>
          <div className="text-[#cccccc]">npm install        install all the dependencies in your project</div>
          <div className="text-[#cccccc]">npm install &lt;foo&gt;  add the &lt;foo&gt; dependency to your project</div>
          <div className="text-[#cccccc]">npm test          run this project's tests</div>
        </div>
      </div>
    </div>
  );
} 