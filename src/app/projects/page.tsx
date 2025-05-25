'use client';

import PageLayout from '../../components/PageLayout';

export default function Projects() {
  const projects = [
    {
      title: 'Actuarial Data Pipeline Acceleration',
      description: ["In progress engineering optimized C++ DLL components to accelerate data pipelines within actuarial modeling environments. This work focuses on optimizing ETL workflows and enhancing data integration throughput to support large-scale actuarial analytics with improved execution speed, scalability, and native system interoperability."],
      technologies: ['C++', 'DLL', 'ETL', 'Data Integration', 'Moody\'s AXIS'],
      link: 'https://github.com/raadthedeveloper'
    },
    {
      title: 'Modeling Platform - Compatible Rate DLL',
      description: ["A high-performance C++ DLL designed for actuarial modeling platforms, specifically compatible with external DLL workflows. This project demonstrates how custom logic can be embedded in external libraries for use in actuarial modeling platforms that support DLL integration."],
      technologies: ['C++', 'DLL', 'Visual Studio', 'Moody\'s AXIS'],
      link: 'https://github.com/raadthedeveloper/ModelingPlatform-CompatibleRateDLL'
    },
    {
      title: 'HouseDrift',
      description: ["A private web-based platform designed for intelligent management and tracking of residential property transactions. Leverages machine learning algorithms to forecast home valuations and project future homeowner cash flows, enabling data-driven decision-making in real estate. Currently under private development in a secured repository."],
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', "Mongodb", "React", "Python", "Scikit-learn"],
      link: 'https://github.com/raadthedeveloper'
    },
    {
      title: 'Planner',
      description: 'An AI-powered event planning platform engineered to autonomously manage and optimize end-to-end event logistics. Integrates intelligent scheduling, resource allocation, and personalized recommendations to streamline the planning process. Currently in private development with a secured codebase.',
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
    <PageLayout filePath="src/app/projects/page.tsx">
      <div className="text-[#cccccc] flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="space-y-8 sm:space-y-16">
            {/* Projects Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4 sm:mb-8 text-[#C678DD]">Featured Projects</h2>
              <div className="flex flex-col gap-4 sm:gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="bg-[#252526] rounded-lg overflow-hidden shadow-lg border border-[#3e3e42]">
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl font-semibold mb-2 text-[#E06C75]">{project.title}</h3>
                      <p className="text-[#cccccc] mb-2 sm:mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-2 sm:mb-4">
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

        {/* On mobile, image is below text and full width; on desktop, side-by-side */}
        <div className="block lg:hidden mt-2 sm:mt-8 w-full">
          <div className="w-full h-[340px] sm:h-[500px] rounded-lg overflow-hidden border border-[#3e3e42]">
            <img 
              src="/uhhpicofme6.jpg" 
              alt="Raad Fakhrian" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="hidden lg:block w-[800px] h-[865px] rounded-lg overflow-hidden border border-[#3e3e42] flex-shrink-0 sticky top-8">
          <img 
            src="/uhhpicofme6.jpg" 
            alt="Raad Fakhrian" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </PageLayout>
  );
} 