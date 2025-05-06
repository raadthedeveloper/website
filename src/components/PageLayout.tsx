'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
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
  const [lineCount, setLineCount] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateLines = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        const lineHeight = 21; // matches the leading-[21px] we use for line numbers
        const calculatedLines = Math.ceil(contentHeight / lineHeight);
        setLineCount(Math.max(calculatedLines, 1)); // ensure at least 1 line
      }
    };

    calculateLines();
    window.addEventListener('resize', calculateLines);
    
    return () => window.removeEventListener('resize', calculateLines);
  }, [children]);

  const navItems = [
    { path: '/', label: 'page.tsx', parent: 'src/app/home' },
    { path: '/about', label: 'page.tsx', parent: 'src/app/about' },
    { path: '/projects', label: 'page.tsx', parent: 'src/app/projects' },
    { path: '/contact', label: 'page.tsx', parent: 'src/app/contact' },
    { path: '/game', label: 'page.tsx', parent: 'src/app/game' }
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
    <div className="min-h-screen bg-[#1e1e1e] flex flex-col pt-10 sm:pt-[72px]">
      <div className="flex-1 flex pb-0 sm:pb-64">
        {/* Left Navigation - hidden on mobile */}
        <div className="hidden sm:block fixed left-0 top-[72px] bottom-0 w-64 bg-[#252526] border-r border-[#3e3e42] text-[#cccccc] overflow-y-auto">
          <div className="p-2">
            <div className="uppercase text-[11px] text-[#858585] font-medium px-2 py-1 border-b border-[#3e3e42]">
              Website
            </div>
            <div className="mt-2 space-y-[2px]">
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
                            className={`flex items-center gap-2 px-2 py-[2px] text-[13px] rounded cursor-pointer ${
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

        {/* Main content area with fixed left margin for explorer */}
        <div className="flex-1 sm:ml-64 overflow-auto h-full">
          {/* File path breadcrumb bar - horizontal, above content, desktop only */}
          <div className="hidden sm:flex items-center gap-2 px-6 pt-4 pb-2 text-[#cccccc] text-sm whitespace-nowrap">
            {pathSegments.map((segment, index) => (
              <span key={index} className="flex items-center">
                {index > 0 && <span className="mx-1 text-[#666666]">›</span>}
                <span className={index === pathSegments.length - 1 ? 'font-semibold text-white' : 'text-[#858585]'}>{segment}</span>
              </span>
            ))}
          </div>
          {/* Content area */}
          <div className="pt-0 sm:pt-2">
            {/* Main content with line numbers */}
            <div className="flex relative min-h-full">
              {/* Line numbers */}
              <div className="hidden sm:block sticky left-0 w-12 text-right pr-4 text-[#858585] select-none bg-[#1e1e1e] border-r border-[#3e3e42] text-xs">
                {Array.from({ length: lineCount }, (_, i) => (
                  <div key={i} className="leading-[21px] text-right w-full pr-2 tabular-nums">
                    {i + 1}
                  </div>
                ))}
              </div>
              {/* Content */}
              <div ref={contentRef} className="flex-1 p-4 min-w-0 text-sm sm:text-base">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal */}
      <div className="hidden sm:block fixed bottom-0 left-64 right-0 h-64 bg-[#1e1e1e] border-t border-[#3e3e42] z-50">
        {/* Terminal Top Bar */}
        <div className="flex items-center border-b border-[#3e3e42] bg-[#252526] text-[#cccccc] text-xs">
          <div className="flex items-center">
            <div className="px-4 py-1 bg-[#37373d] text-[#cccccc]">Problems</div>
            <div className="px-4 py-1 text-[#cccccc]">Output</div>
            <div className="px-4 py-1 text-[#cccccc]">Debug Console</div>
            <div className="px-4 py-1 bg-[#1e1e1e] text-[#cccccc]">Terminal</div>
            <div className="px-4 py-1 text-[#cccccc]">Ports</div>
          </div>
          <div className="ml-auto flex items-center pr-4">
            <span className="px-2 py-1 bg-[#37373d] text-[#cccccc] rounded mr-2">node</span>
            <span className="text-[#cccccc]">+</span>
            <span className="mx-2 text-[#cccccc]">⊟</span>
            <span className="text-[#cccccc]">🗑</span>
            <span className="ml-2 text-[#cccccc]">⋯</span>
            <span className="ml-2 text-[#cccccc]">^</span>
            <span className="ml-2 text-[#cccccc]">×</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 text-xs font-mono">
          <div className="text-[#cccccc]">Specify configs in the ini-formatted file:</div>
          <div className="pl-8 text-[#cccccc]">/Users/raad/.npmrc</div>
          <div className="text-[#cccccc]">or on the command line via: npm &lt;command&gt; --key=value</div>
          <div className="text-[#cccccc]"></div>
          <div className="text-[#cccccc]">More configuration info: npm help config</div>
          <div className="text-[#cccccc]">Configuration fields: npm help 7 config</div>
          <div className="text-[#cccccc]"></div>
          <div className="text-[#cccccc]">npm@10.2.3 /usr/local/lib/node_modules/npm</div>
          <div className="text-[#cccccc]">(base) raad@raads-MBP website % npm run dev</div>
          <div className="text-[#cccccc]"></div>
          <div className="pl-2 text-[#cccccc]">&gt; website@0.1.0 dev</div>
          <div className="pl-2 text-[#cccccc]">&gt; next dev --turbopack</div>
          <div className="text-[#cccccc]"></div>
          <div className="text-[#C678DD]">▲ Next.js 15.3.1 (Turbopack)</div>
          <div className="pl-4 text-[#cccccc]">- Local:        http://localhost:3000</div>
        </div>
      </div>
    </div>
  );
} 