'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Hi, I'm Raad Fakhrian
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A passionate software developer specializing in web development and machine learning.
            I love building elegant solutions to complex problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">About Me</h2>
            <p className="text-gray-300 mb-4">
              I'm a software developer with expertise in full-stack web development
              and machine learning. I enjoy creating efficient, scalable, and
              user-friendly applications.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              technical writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-medium mb-2 text-white">Frontend</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-medium mb-2 text-white">Backend</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-medium mb-2 text-white">ML/AI</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                  <li>Scikit-learn</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-medium mb-2 text-white">Tools</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h2>
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/raadthedeveloper"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/raadfakhrian" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
