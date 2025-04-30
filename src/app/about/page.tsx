'use client';

import PageLayout from '../../components/PageLayout';
import Link from 'next/link';

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
            <p className="text-[#cccccc] mb-4">
              Here's a brief overview of my professional journey. For more details, check out my{' '}
              <Link href="/work" className="text-[#61AFEF] hover:underline">
                work page
              </Link>
              .
            </p>
            <div className="space-y-6">
              <div className="bg-[#252526] p-6 rounded-lg shadow-sm border border-[#3e3e42]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#E06C75]">Associate Actuary</h3>
                    <p className="text-[#61AFEF]">PartnerRe</p>
                  </div>
                  <span className="text-[#858585]">2024 - Present</span>
                </div>
                <p className="text-[#cccccc]">
                  Apart of the modelling team, creating solutions for diverse problems.
                </p>
              </div>
              
              <div className="bg-[#252526] p-6 rounded-lg shadow-sm border border-[#3e3e42]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#E06C75]">Actuarial Analyst</h3>
                    <p className="text-[#61AFEF]">Foresters Financial</p>
                  </div>
                  <span className="text-[#858585]">2022 - 2024</span>
                </div>
                <p className="text-[#cccccc]">
                  Apart of the capital management team, problem solving for capital adequacy and solvency requirements.
                </p>
              </div>
            </div>
          </div>
        
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-[#C678DD]">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42]">
                <h3 className="text-xl font-semibold mb-2 text-[#E06C75]">Honours Bachelor of Science in Pure Mathematics</h3>
                <p className="text-[#858585]">2022</p>
                <p className="text-[#cccccc]">University of Toronto</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-[#C678DD]">Professional Exams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42]">
                <h3 className="text-xl font-semibold mb-2 text-[#E06C75]">Society of Actuaries</h3>
                <p className="text-[#858585] mb-4">2022 - 2024</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#cccccc]">Exam P, Exam FM</span>
                    <span className="text-[#858585]">2022</span>
                  </div>
                  <div className="flex justify-between">
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
    </PageLayout>
  );
} 