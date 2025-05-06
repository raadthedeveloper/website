'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PageLayout from '../components/PageLayout';

export default function Home() {
  return (
    <PageLayout filePath="src/app/page.tsx">
      <div className="text-[#cccccc] flex flex-col lg:flex-row gap-8 pt-2 sm:pt-0">
        <div className="flex-1">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-5xl font-bold mb-4 sm:mb-6 text-[#C678DD]">
              raad fakhrian
            </h1>
            <div className="bg-[#252526] p-4 sm:p-6 rounded-lg border border-[#3e3e42]">
              <p className="text-[#cccccc]">
                I'm an actuarial professional with a strong foundation in insurance analytics, complemented by my work as an independent software engineer focused on high-performance, cross-functional systems.<br /><br />
                My expertise spans full-stack application architecture, machine learning model deployment, and the automation of actuarial and financial workflows across diverse programming environments.<br /><br />
                I'm driven by the challenge of deconstructing complex problems and engineering elegant, data-informed solutions that integrate seamlessly across business and technology domains.
              </p>
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl font-semibold mb-2 sm:mb-4 text-[#C678DD]">Hobbies</h2>
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="bg-[#252526] p-4 sm:p-6 rounded-lg border border-[#3e3e42]">
                <h3 className="font-medium mb-1 sm:mb-2 text-[#E06C75]">Sports</h3>
                <ul className="text-[#cccccc] flex flex-wrap gap-2 sm:gap-4">
                  <li>Skiing</li>
                  <li>Golfing</li>
                  <li>Running</li>
                  <li>Cycling</li>
                  <li>Weightlifting</li>
                </ul>
              </div>
              <div className="bg-[#252526] p-4 sm:p-6 rounded-lg border border-[#3e3e42]">
                <h3 className="font-medium mb-1 sm:mb-2 text-[#E06C75]">Other Interests</h3>
                <ul className="text-[#cccccc] flex flex-wrap gap-2 sm:gap-4">
                  <li>LeetCode</li>
                  <li>Chess</li>
                  <li>Painting</li>
                  <li>Reading</li>
                  <li>Traveling</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 sm:mb-4 text-[#C678DD]">Skills</h2>
            <div className="bg-[#252526] p-4 sm:p-6 rounded-lg border border-[#3e3e42] mb-0 sm:mb-8 w-full">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <h3 className="font-medium mb-1 sm:mb-2 text-[#E06C75]">Frontend</h3>
                  <ul className="text-[#cccccc] space-y-1">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>HTML/CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-1 sm:mb-2 text-[#E06C75]">Backend</h3>
                  <ul className="text-[#cccccc] space-y-1">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>PostgreSQL</li>
                    <li>C++</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-1 sm:mb-2 text-[#E06C75]">ML/AI</h3>
                  <ul className="text-[#cccccc] space-y-1">
                    <li>TensorFlow</li>
                    <li>PyTorch</li>
                    <li>Scikit-learn</li>
                    <li>R</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-1 sm:mb-2 text-[#E06C75]">Tools</h3>
                  <ul className="text-[#cccccc] space-y-1">
                    <li>Moody's AXIS</li>
                    <li>Git</li>
                    <li>SQL</li>
                    <li>VBA</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center gap-3 sm:gap-6 pt-2 sm:pt-4 border-t border-[#3e3e42]">
                <a 
                  href="https://github.com/raadthedeveloper"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#cccccc] hover:text-white transition-colors"
                >
                  <FaGithub className="text-2xl" />
                  <span>check my git</span>
                </a>
                <a 
                  href="https://linkedin.com/in/raadfakhrian" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#cccccc] hover:text-white transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                  <span>let's link</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="block lg:hidden mt-2 sm:mt-8 w-full">
          <div className="w-full h-[340px] sm:h-[300px] rounded-lg overflow-hidden border border-[#3e3e42]">
            <img 
              src="/uhhpicofme3.jpg" 
              alt="Raad Fakhrian" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="hidden lg:block w-[800px] h-[832px] rounded-lg overflow-hidden border border-[#3e3e42] flex-shrink-0 sticky top-8">
          <img 
            src="/uhhpicofme3.jpg" 
            alt="Raad Fakhrian" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </PageLayout>
  );
}
