export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-gray-800">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Who I Am</h2>
            <p className="text-gray-700 mb-6">
              I'm Raad Fakhrian, a passionate developer with a keen interest in building innovative solutions. 
              My journey in technology has been driven by curiosity and a desire to create meaningful impact 
              through code.
            </p>
            <p className="text-gray-700">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge with the developer community.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Skills & Expertise</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 text-gray-800">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'TypeScript', 'Python', 'Java'].map((skill) => (
                    <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-800 font-medium shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 text-gray-800">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Node.js', 'Git', 'Docker'].map((skill) => (
                    <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-800 font-medium shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 text-gray-800">Other Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['UI/UX Design', 'Agile Development', 'Technical Writing'].map((skill) => (
                    <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-800 font-medium shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 