'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PageLayout from '../components/PageLayout';

export default function Home() {
  return (
    <PageLayout filePath="src/app/page.tsx">
      <div className="text-[#cccccc]">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6 text-[#C678DD]">
            Hi, I'm Raad Fakhrian
          </h1>
          <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42] w-[800px]">
            <p className="text-xl text-[#cccccc]">
              A passionate associate actuary and software developer specializing in improving processes in any languages, web development and machine learning.
              I love building elegant solutions to complex problems.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#C678DD]">About Me</h2>
            <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42] w-[800px]">
              <p className="text-[#cccccc] mb-4">
                I'm an actuary with expertise in improving processes in any languages, full-stack web development,
                and machine learning. I enjoy creating efficient and scalable solutions to problems.
              </p>
              <p className="text-[#cccccc]">
                When I'm not working as an actuary, you can find me exploring new technologies,
                contributing to open-source projects.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#C678DD]">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#252526] p-4 rounded-lg border border-[#3e3e42]">
                <h3 className="font-medium mb-2 text-[#E06C75]">Frontend</h3>
                <ul className="text-[#cccccc] space-y-1">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-[#252526] p-4 rounded-lg border border-[#3e3e42]">
                <h3 className="font-medium mb-2 text-[#E06C75]">Backend</h3>
                <ul className="text-[#cccccc] space-y-1">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div className="bg-[#252526] p-4 rounded-lg border border-[#3e3e42]">
                <h3 className="font-medium mb-2 text-[#E06C75]">ML/AI</h3>
                <ul className="text-[#cccccc] space-y-1">
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                  <li>Scikit-learn</li>
                </ul>
              </div>
              <div className="bg-[#252526] p-4 rounded-lg border border-[#3e3e42]">
                <h3 className="font-medium mb-2 text-[#E06C75]">Tools</h3>
                <ul className="text-[#cccccc] space-y-1">
                  <li>Moody's AXIS</li>
                  <li>Git</li>
                  <li>SQL</li>
                  <li>VBA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/raadthedeveloper"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#cccccc] hover:text-white transition-colors"
            >
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/raadfakhrian" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#cccccc] hover:text-white transition-colors"
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
