'use client';

import PageLayout from '../../components/PageLayout';

export default function Work() {
  const projects = [
    {
      title: 'housedrift',
      description: ["A private web-based platform designed for intelligent management and tracking of residential property transactions. Leverages machine learning algorithms to forecast home valuations and project future homeowner cash flows, enabling data-driven decision-making in real estate. Currently under private development in a secured repository."],
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', "React"],
      link: 'https://github.com/raadthedeveloper'
    },
    {
      title: 'planner',
      description: 'An AI-powered event planning platform engineered to autonomously manage and optimize end-to-end event logistics. Integrates intelligent scheduling, resource allocation, and personalized recommendations to streamline the planning process. Currently in private development with a secured codebase.',
      technologies: ['React', 'Next.js', 'Node.js', 'Stripe','React'],
      link: 'https://github.com/raadthedeveloper'
    },
    {
      title: 'Addy Canada',
      description: 'A location-based web platform that enabled users to discover local events and seamlessly purchase tickets, food, and beverages within a unified interface. Designed with integrated payment processing and geospatial event filtering. The project was sunset in 2019.',
      technologies: ['React', 'Next.js', 'Node.js', 'Stripe','React'],
      link: 'https://github.com/raadthedeveloper'
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
      technologies: ["C++", "Moody's AXIS", "SQL"]
    },
    {
      title: "Software Engineer",
      company: "Synaply",
      period: "2024 - 2024",
      description: "Contributed as a software engineer to the development of a sales intelligence web application that leverages AI to transform qualitative insights from sales representatives into actionable data. The platform empowers sales organizations to operationalize feedback loops and optimize performance through data-driven decision-making.",
      achievements: [
        "www.synaply.io"
      ],
      technologies: ["React", "Next.js", "Express"]
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
        <div className="space-y-16">
          {/* Projects Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#C678DD]">Featured Projects</h2>
            <div className="flex flex-col gap-8">
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
        </div>
      </div>
    </PageLayout>
  );
} 