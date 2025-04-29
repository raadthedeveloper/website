export default function Work() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of the first project and its impact.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/project1.jpg",
      link: "#"
    },
    {
      title: "Project 2",
      description: "Description of the second project highlighting key features.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      image: "/project2.jpg",
      link: "#"
    },
    {
      title: "Project 3",
      description: "Overview of the third project and its technical challenges.",
      technologies: ["Python", "Django", "PostgreSQL"],
      image: "/project3.jpg",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12">My Work</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gray-200">
                {/* Add actual project images later */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="text-black font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Senior Developer</h3>
              <p className="text-gray-600 mb-2">Company Name • 2020 - Present</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Led development of key features resulting in 40% user growth</li>
                <li>Mentored junior developers and implemented best practices</li>
                <li>Architected scalable solutions for enterprise clients</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Full Stack Developer</h3>
              <p className="text-gray-600 mb-2">Previous Company • 2018 - 2020</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Developed and maintained multiple client applications</li>
                <li>Implemented responsive designs and optimized performance</li>
                <li>Collaborated with cross-functional teams to deliver projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 