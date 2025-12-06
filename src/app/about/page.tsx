'use client';

import PageLayout from '../../components/PageLayout';
import Link from 'next/link';

export default function About() {
  return (
    <PageLayout filePath="src/app/about/page.tsx">
      <div className="text-[#cccccc] flex gap-8">
        <div className="flex-1">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-[#C678DD]">Experience</h2>
            <div className="space-y-8">

            <div className="bg-[#252526] p-6 rounded-lg shadow-sm border border-[#3e3e42]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#E06C75]">Data Scientist</h3>
                    <p className="text-[#61AFEF]">OMAP, Farm Mutual Re</p>
                  </div>
                  <span className="text-[#858585]">2025 - Present</span>
                </div>
                <p className="text-[#cccccc] mb-4">Apart of the data science & engineering team.</p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "SQL"].map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-[#2d2d2d] text-[#61AFEF] px-3 py-1 rounded-full text-sm border border-[#3e3e42]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#252526] p-6 rounded-lg shadow-sm border border-[#3e3e42]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#E06C75]">Associate Actuary</h3>
                    <p className="text-[#61AFEF]">PartnerRe</p>
                  </div>
                  <span className="text-[#858585]">2024 - 2025</span>
                </div>
                <p className="text-[#cccccc] mb-4">Apart of actuarial team.</p>
                <ul className="list-disc list-inside text-[#cccccc] space-y-2 mb-4">
                  <li>Modelled new treaty cells in AXIS from pricing to production by creating AXIS scripts in DataLink, batches, and rules tables</li>
                  <li>Took initiative by engineering .dll files using C++ in Visual Studio to explore options in making AXIS processes/batches more efficient</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["C++", "Moody's AXIS", "SQL"].map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-[#2d2d2d] text-[#61AFEF] px-3 py-1 rounded-full text-sm border border-[#3e3e42]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#252526] p-6 rounded-lg shadow-sm border border-[#3e3e42]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#E06C75]">Software Engineer</h3>
                    <p className="text-[#61AFEF]">Synaply</p>
                  </div>
                  <span className="text-[#858585]">2024 - 2024</span>
                </div>
                <p className="text-[#cccccc] mb-4">Apart of the engineering team.</p>
                <ul className="list-disc list-inside text-[#cccccc] space-y-2 mb-4">
                  <li>Contributed as a software engineer to the development of a sales intelligence web application that leverages AI to transform qualitative insights from sales representatives into actionable data.</li>
                  <li><a href="https://www.synaply.io" target="_blank" rel="noopener noreferrer" className="text-[#61AFEF] hover:text-white transition-colors">www.synaply.io</a></li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Express"].map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-[#2d2d2d] text-[#61AFEF] px-3 py-1 rounded-full text-sm border border-[#3e3e42]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#252526] p-6 rounded-lg shadow-sm border border-[#3e3e42]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#E06C75]">Actuarial Analyst</h3>
                    <p className="text-[#61AFEF]">Foresters</p>
                  </div>
                  <span className="text-[#858585]">2022 - 2024</span>
                </div>
                <p className="text-[#cccccc] mb-4">Apart of the actuarial team.</p>
                <ul className="list-disc list-inside text-[#cccccc] space-y-2 mb-4">
                  <li>Developed SQL stored procedures to solve complex problems</li>
                  <li>Created robust automation solutions using VBA, enabling the seamless execution of various tasks independently and achieving remarkable efficiency gains with manual process times reduced by up to 90%</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["SQL", "VBA", "Moody's AXIS"].map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-[#2d2d2d] text-[#61AFEF] px-3 py-1 rounded-full text-sm border border-[#3e3e42]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[#C678DD]">Education</h2>
                <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42]">
                  <h3 className="text-xl font-semibold mb-2 text-[#E06C75]">Honours Bachelor of Science in Pure Mathematics</h3>
                  <p className="text-[#858585]">2022</p>
                  <p className="text-[#cccccc]">University of Toronto</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[#C678DD]">Professional Exams</h2>
                <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42]">
                  <h3 className="text-xl font-semibold mb-2 text-[#E06C75]">Society of Actuaries</h3>
                  <p className="text-[#858585] mb-4">2022 - 2024</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#cccccc]">Exam P, Exam FM</span>
                      <span className="text-[#858585]">2022</span>
                    </div>
                    <div className="flex justify-between gap-x-2">
                      <span className="text-[#cccccc]">Exam SRM, Exam PA, Exam ATPA, Exam FAM</span>
                      <span className="text-[#858585]">2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#cccccc]">Exam ALTAM</span>
                      <span className="text-[#858585]">2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 