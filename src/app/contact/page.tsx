'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PageLayout from '../../components/PageLayout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <PageLayout filePath="src/app/contact/page.tsx">
      <div className="text-[#cccccc] flex gap-8">
        <div className="flex-1">
          <div className="bg-[#252526] p-8 rounded-lg border border-[#3e3e42]">
            <div className="grid grid-cols-1 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-[#C678DD]">Contact Information</h2>
                <p className="text-[#cccccc] mb-8">
                  I'm always interested in hearing about new projects and opportunities. 
                  Feel free to reach out through the form or via social media.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h3 className="font-medium mb-2 text-[#E06C75]">Social Media</h3>
                    <div className="flex gap-6">
                      <a 
                        href="https://github.com/raadthedeveloper"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#cccccc] hover:text-white transition-colors"
                      >
                        <FaGithub className="text-2xl" />
                        <span>GitHub</span>
                      </a>
                      <a 
                        href="https://linkedin.com/in/raadfakhrian" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#cccccc] hover:text-white transition-colors"
                      >
                        <FaLinkedin className="text-2xl" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 text-[#E06C75]">Email</h3>
                    <a href="mailto:raad.fakhrian@gmail.com" className="text-[#cccccc] hover:text-white transition-colors">
                      raad.fakhrian@gmail.com
                    </a>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#E06C75] mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#3e3e42] rounded-lg focus:ring-2 focus:ring-[#264f78] focus:border-transparent text-[#cccccc] placeholder-[#858585]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#E06C75] mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#3e3e42] rounded-lg focus:ring-2 focus:ring-[#264f78] focus:border-transparent text-[#cccccc] placeholder-[#858585]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#E06C75] mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#3e3e42] rounded-lg focus:ring-2 focus:ring-[#264f78] focus:border-transparent text-[#cccccc] placeholder-[#858585]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#E06C75] mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#3e3e42] rounded-lg focus:ring-2 focus:ring-[#264f78] focus:border-transparent text-[#cccccc] placeholder-[#858585]"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#264f78] text-[#cccccc] py-3 rounded-lg hover:bg-[#365373] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[800px] h-[885px] rounded-lg overflow-hidden border border-[#3e3e42] flex-shrink-0 sticky top-8">
          <img 
            src="/uhhpicofme5.jpg" 
            alt="Raad Fakhrian" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </PageLayout>
  );
} 