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

  const experiences = [
    {
      title: "Associate Actuary",
      company: "PartnerRe",
      period: "2024 - Present",
      description: "Apart of the modelling team, creating solutions for diverse problems.",
      achievements: [
        "Modelled new treaty cells in AXIS from pricing to production by creating AXIS scripts in DataLink, batches, and rules tables",
        "Took initiative by engineering .dll files using C++ in Visual Studio to explore options in making AXIS processes/batches more efficient"
      ],
      technologies: ["C++", "Moody's AXIS", "SQL", "Office 365"]
    },
    {
      title: "Actuarial Analyst",
      company: "Foresters Financial",
      period: "2022 - 2024",
      description: "Apart of the capital management team, problem solving for capital adequacy and solvency requirements.",
      achievements: [
        "Enhanced team efficiency by developing a SQL stored procedure, automating the removal of unused segmentation rows and line items from data tables, streamlining our roll-up procedure and expediting results delivery",
        "Created robust automation solutions using VBA, enabling the seamless execution of various tasks independently and achieving remarkable efficiency gains with manual process times reduced by up to 90%"
      ],
      technologies: ["SQL", "VBA", "Moody's AXIS"]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12">Projects & Experience</h1>
        
        <div className="space-y-16">
          {/* Projects Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
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
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 