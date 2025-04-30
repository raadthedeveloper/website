'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PageLayout from '../components/PageLayout';

export default function Home() {
  return (
    <PageLayout filePath="src/app/page.tsx">
      <div className="text-[#cccccc]">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-[#4ec9b0]">
            Hi, I'm Raad Fakhrian
          </h1>
          <p className="text-xl text-[#cccccc] max-w-2xl mx-auto">
            A passionate software developer specializing in web development and machine learning.
            I love building elegant solutions to complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#4ec9b0]">About Me</h2>
            <p className="text-[#cccccc] mb-4">
              I'm a software developer with expertise in full-stack web development
              and machine learning. I enjoy creating efficient, scalable, and
              user-friendly applications.
            </p>
            <p className="text-[#cccccc]">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              technical writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#4ec9b0]">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#252526] p-4 rounded-lg border border-[#3e3e42]">
                <h3 className="font-medium mb-2 text-[#9cdcfe]">Frontend</h3>
                <ul className="text-[#cccccc] space-y-1">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-[#252526] p-4 rounded-lg border border-[#3e3e42]">
                <h3 className="font-medium mb-2 text-[#9cdcfe]">Backend</h3>
                <ul className="text-[#cccccc] space-y-1">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div className="bg-[#252526] p-4 rounded-lg border border-[#3e3e42]">
                <h3 className="font-medium mb-2 text-[#9cdcfe]">ML/AI</h3>
                <ul className="text-[#cccccc] space-y-1">
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                  <li>Scikit-learn</li>
                </ul>
              </div>
              <div className="bg-[#252526] p-4 rounded-lg border border-[#3e3e42]">
                <h3 className="font-medium mb-2 text-[#9cdcfe]">Tools</h3>
                <ul className="text-[#cccccc] space-y-1">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6 text-[#4ec9b0]">Let's Connect</h2>
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
