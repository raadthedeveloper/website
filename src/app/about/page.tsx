'use client';

import PageLayout from '../../components/PageLayout';

export default function About() {
  return (
    <PageLayout filePath="src/app/about/page.tsx">
      <div className="text-[#cccccc]">
        <h1 className="text-4xl font-bold mb-12 text-[#C678DD]">About Me</h1>
        
        <div>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-[#C678DD]">Background</h2>
            <p className="text-[#cccccc] mb-4">
              I'm a software developer with a passion for creating elegant solutions
              to complex problems. My journey in technology began with web development,
              and I've since expanded my expertise to include machine learning and
              artificial intelligence.
            </p>
            <p className="text-[#cccccc] mb-4">
              I believe in writing clean, maintainable code and staying up-to-date
              with the latest technologies and best practices. I'm always eager to
              learn new things and take on challenging projects that push my
              boundaries.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-[#C678DD]">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42]">
                <h3 className="text-xl font-semibold mb-2 text-[#E06C75]">Software Developer</h3>
                <p className="text-[#858585] mb-2">2020 - Present</p>
                <p className="text-[#cccccc]">
                  Working on full-stack web applications, focusing on creating
                  efficient and scalable solutions. Experienced in React, Node.js,
                  and various cloud technologies.
                </p>
              </div>
              
              <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42]">
                <h3 className="text-xl font-semibold mb-2 text-[#E06C75]">Machine Learning Engineer</h3>
                <p className="text-[#858585] mb-2">2018 - 2020</p>
                <p className="text-[#cccccc]">
                  Developed and deployed machine learning models for various
                  applications. Worked with TensorFlow, PyTorch, and other ML
                  frameworks.
                </p>
              </div>
            </div>
          </div>
        
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#C678DD]">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42]">
                <h3 className="text-xl font-semibold mb-2 text-[#E06C75]">Bachelor of Science in Computer Science</h3>
                <p className="text-[#858585]">University Name</p>
                <p className="text-[#cccccc]">2014 - 2018</p>
              </div>
              
              <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42]">
                <h3 className="text-xl font-semibold mb-2 text-[#E06C75]">Master of Science in Artificial Intelligence</h3>
                <p className="text-[#858585]">University Name</p>
                <p className="text-[#cccccc]">2018 - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 