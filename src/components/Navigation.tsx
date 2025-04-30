'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800/95 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-xl font-bold text-white hover:text-gray-200 transition-colors"
          >
            Raad Fakhrian
          </Link>
          
          <div className="flex gap-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link 
              href="/work" 
              className={`text-sm font-medium transition-colors ${
                isActive('/work') 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Work
            </Link>
            <Link 
              href="/blog" 
              className={`text-sm font-medium transition-colors ${
                isActive('/blog') 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 