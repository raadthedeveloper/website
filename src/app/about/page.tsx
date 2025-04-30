'use client';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-white">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Background</h2>
            <p className="text-gray-300 mb-4">
              I'm a software developer with a passion for creating elegant solutions
              to complex problems. My journey in technology began with web development,
              and I've since expanded my expertise to include machine learning and
              artificial intelligence.
            </p>
            <p className="text-gray-300 mb-4">
              I believe in writing clean, maintainable code and staying up-to-date
              with the latest technologies and best practices. I'm always eager to
              learn new things and take on challenging projects that push my
              boundaries.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Experience</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">Software Developer</h3>
                <p className="text-gray-400 mb-2">2020 - Present</p>
                <p className="text-gray-300">
                  Working on full-stack web applications, focusing on creating
                  efficient and scalable solutions. Experienced in React, Node.js,
                  and various cloud technologies.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">Machine Learning Engineer</h3>
                <p className="text-gray-400 mb-2">2018 - 2020</p>
                <p className="text-gray-300">
                  Developed and deployed machine learning models for various
                  applications. Worked with TensorFlow, PyTorch, and other ML
                  frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-white">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">Bachelor of Science in Computer Science</h3>
              <p className="text-gray-400">University Name</p>
              <p className="text-gray-300">2014 - 2018</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">Master of Science in Artificial Intelligence</h3>
              <p className="text-gray-400">University Name</p>
              <p className="text-gray-300">2018 - 2020</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 