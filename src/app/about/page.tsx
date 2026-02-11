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
                    <h3 className="text-xl font-bold text-[#E06C75]">Data Scientist, Machine Learning</h3>
                    <p className="text-[#61AFEF]">Farm Mutual Re · Cambridge, ON</p>
                  </div>
                  <span className="text-[#858585]">Jul 2025 – Present</span>
                </div>
                <ul className="list-disc list-inside text-[#cccccc] space-y-2 mb-4">
                  <li>Sole technical hire owning end-to-end data + ML stack: built production pipelines from internal and vendor sources, delivering retention/frequency/severity/pure-premium models and analytics for 30+ member companies and acting as the technical point of contact with external partners</li>
                  <li>Established the Azure DevOps SDLC from zero (repos, branching/PR governance, standards), and shipped reusable, modular Python data/analytics frameworks including competitor rate reverse-engineering (premium reconstruction) with scenario and stress testing.</li>
                  <li>Delivered a Microsoft Fabric production platform for 100+ users (KQL + SQL stored procedures, orchestrated refresh/subscriptions), presenting to member-company CEOs and running enablement/training across vendors, Risk, IT, and Data teams.</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Python", "SQL", "KQL", "Fabric", "PowerBI", "Azure DevOps"].map((tech, techIndex) => (
                    <span key={techIndex} className="bg-[#2d2d2d] text-[#61AFEF] px-3 py-1 rounded-full text-sm border border-[#3e3e42]">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-[#252526] p-6 rounded-lg shadow-sm border border-[#3e3e42]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#E06C75]">Machine Learning Engineer</h3>
                    <p className="text-[#61AFEF]">Rexelle · Toronto, ON</p>
                  </div>
                  <span className="text-[#858585]">Apr 2025 – Present</span>
                </div>
                <ul className="list-disc list-inside text-[#cccccc] space-y-2 mb-4">
                  <li>Reverse engineered HTTPS request/response payloads using Fiddler to extract real estate data, then implemented cleaning/normalization and persisted curated datasets in MongoDB for ML training/inference</li>
                  <li>Implemented a full ML pipeline: flattened nested JSON to normalized schemas with validation/error handling, designed MongoDB indexes for feature retrieval performance, trained Python house price models, and integrated regulator feeds/APIs into ingestion services</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Python", "MongoDB", "Fiddler", "scikit-learn"].map((tech, techIndex) => (
                    <span key={techIndex} className="bg-[#2d2d2d] text-[#61AFEF] px-3 py-1 rounded-full text-sm border border-[#3e3e42]">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-[#252526] p-6 rounded-lg shadow-sm border border-[#3e3e42]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#E06C75]">Associate Actuary, Developer</h3>
                    <p className="text-[#61AFEF]">PartnerRe · Toronto, ON</p>
                  </div>
                  <span className="text-[#858585]">Aug 2024 – Jun 2025</span>
                </div>
                <ul className="list-disc list-inside text-[#cccccc] space-y-2 mb-4">
                  <li>Re-engineered Moody&apos;s AXIS VB.NET scripting framework with consistent patterns, shared utilities, and cleaner control flow to improve interpretability, testing, and execution efficiency</li>
                  <li>Streamlined AXIS workflow by developing and integrating native C++ DLL in Visual Studio, achieving 96% reduction in runtime, leading to being tasked with engineering DLL solutions to accelerate data and policy information table (PIT) pipelines within AXIS</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["C++", "VB.NET", "Moody's AXIS", "Visual Studio"].map((tech, techIndex) => (
                    <span key={techIndex} className="bg-[#2d2d2d] text-[#61AFEF] px-3 py-1 rounded-full text-sm border border-[#3e3e42]">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-[#252526] p-6 rounded-lg shadow-sm border border-[#3e3e42]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#E06C75]">Software Engineer</h3>
                    <p className="text-[#61AFEF]">Synaply · Toronto, ON</p>
                  </div>
                  <span className="text-[#858585]">Apr 2024 – Apr 2025</span>
                </div>
                <ul className="list-disc list-inside text-[#cccccc] space-y-2 mb-4">
                  <li>Shipped full-stack features in TypeScript (React + Express/Node), owning end-to-end delivery from requirements and API/data-contract design through testing, code reviews, and production validation</li>
                  <li>Designed and performance-tuned PostgreSQL for high-ingestion, low-latency workloads, optimizing indexes and query plans (EXPLAIN/ANALYZE) to improve hot-path filter/search performance</li>
                  <li>Built a Python RAG-based LLM pipeline for summarization and theme extraction, iterating on retrieval + model behavior with the R&D team and supporting production reliability via vulnerability remediation and runtime security controls</li>
                  <li><a href="https://www.synaply.io" target="_blank" rel="noopener noreferrer" className="text-[#61AFEF] hover:text-white transition-colors">www.synaply.io</a></li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "React", "Express", "PostgreSQL", "Python"].map((tech, techIndex) => (
                    <span key={techIndex} className="bg-[#2d2d2d] text-[#61AFEF] px-3 py-1 rounded-full text-sm border border-[#3e3e42]">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-[#252526] p-6 rounded-lg shadow-sm border border-[#3e3e42]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#E06C75]">Actuarial Analyst, Business Planning and Capital Management</h3>
                    <p className="text-[#61AFEF]">Foresters Financial · Toronto, ON</p>
                  </div>
                  <span className="text-[#858585]">Sep 2022 – Apr 2024</span>
                </div>
                <ul className="list-disc list-inside text-[#cccccc] space-y-2 mb-4">
                  <li>Built a Python-based automated IFRS 17 LRC calculator, implementing balance-sheet bucketing and classification logic to produce standardized outputs with faster run-time</li>
                  <li>Engineered SQL stored procedures to (1) auto-prune unused segmentation and line items to streamline roll-ups and (2) persist new raw outputs as terminal-node records as data sources evolved</li>
                  <li>Led the IFRS 4 to IFRS 17 migration of a VBA analytics library by refactoring node routing and dependency chains, and delivered VBA automation tooling that cut manual processing time by up to 90%.</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Python", "SQL", "VBA"].map((tech, techIndex) => (
                    <span key={techIndex} className="bg-[#2d2d2d] text-[#61AFEF] px-3 py-1 rounded-full text-sm border border-[#3e3e42]">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-[#C678DD]">Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42]">
                <h3 className="text-lg font-semibold mb-3 text-[#E06C75]">Programming Languages</h3>
                <p className="text-[#cccccc]">Python (pandas, scikit-learn), R (tidyverse, caret), C++, DataLink/VB.NET, VBA, TypeScript, Java, SQL, KQL</p>
              </div>
              <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42]">
                <h3 className="text-lg font-semibold mb-3 text-[#E06C75]">DBs & Tools</h3>
                <p className="text-[#cccccc]">SSMS, PostgreSQL, MongoDB, AXIS, Docker, Git, MS Office, OracleDB, PowerBI/Fabric</p>
              </div>
            </div>
          </div>
        
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[#C678DD]">Education</h2>
                <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42]">
                  <h3 className="text-xl font-semibold mb-2 text-[#E06C75]">Honours Bachelor of Science in Pure Mathematics</h3>
                  <p className="text-[#858585]">Conferred 2022</p>
                  <p className="text-[#cccccc]">University of Toronto</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6 text-[#C678DD]">Professional Exams</h2>
                <div className="bg-[#252526] p-6 rounded-lg border border-[#3e3e42]">
                  <h3 className="text-xl font-semibold mb-2 text-[#E06C75]">Society of Actuaries</h3>
                  <p className="text-[#858585] mb-4">2022 - 2025</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#cccccc]">Associate of the Society of Actuaries</span>
                      <span className="text-[#858585]">2025</span>
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