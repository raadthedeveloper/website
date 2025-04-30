'use client';

import PageLayout from '../../components/PageLayout';

export default function Work() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment processing.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#'
    },
    {
      title: 'Machine Learning Dashboard',
      description: 'A dashboard for visualizing and analyzing machine learning model performance. Built with React, Python, and TensorFlow.',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates. Features include task assignment, progress tracking, and team collaboration.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      link: '#'
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
    <PageLayout filePath="src/app/work/page.tsx">
      <div className="text-[#cccccc]">
        <h1 className="text-4xl font-bold mb-12 text-[#C678DD]">My Work</h1>
        
        <div className="space-y-16">
          {/* Projects Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#C678DD]">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-[#252526] rounded-lg overflow-hidden shadow-lg border border-[#3e3e42]">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#E06C75]">{project.title}</h3>
                    <p className="text-[#cccccc] mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-[#2d2d2d] text-[#61AFEF] px-3 py-1 rounded-full text-sm border border-[#3e3e42]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link}
                      className="inline-block bg-[#454545] text-[#cccccc] px-4 py-2 rounded-lg hover:bg-[#505050] transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#C678DD]">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-[#252526] p-6 rounded-lg shadow-sm border border-[#3e3e42]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#E06C75]">{exp.title}</h3>
                      <p className="text-[#61AFEF]">{exp.company}</p>
                    </div>
                    <span className="text-[#858585]">{exp.period}</span>
                  </div>
                  <p className="text-[#cccccc] mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside text-[#cccccc] space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-[#2d2d2d] text-[#61AFEF] px-3 py-1 rounded-full text-sm border border-[#3e3e42]"
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
      </div>
    </PageLayout>
  );
} 