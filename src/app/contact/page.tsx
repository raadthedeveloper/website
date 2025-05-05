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
      <div className="text-[#cccccc] flex flex-col lg:flex-row gap-8">
        <div className="flex-1 w-full">
          <div className="bg-[#252526] p-4 sm:p-8 rounded-lg border border-[#3e3e42] mb-6 sm:mb-8 w-full">
            <div className="grid grid-cols-1 gap-6 sm:gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-2 sm:mb-4 text-[#C678DD]">Contact Information</h2>
                <p className="text-[#cccccc] mb-4 sm:mb-8">
                  I'm always interested in hearing about new projects and opportunities. 
                  Feel free to reach out through the form or via social media.
                </p>
                <div className="space-y-2 sm:space-y-4 mb-4 sm:mb-8">
                  <div>
                    <h3 className="font-medium mb-1 sm:mb-2 text-[#E06C75]">Social Media</h3>
                    <div className="flex flex-row gap-2 sm:gap-6">
                      <a 
                        href="https://github.com/raadthedeveloper"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#cccccc] hover:text-white transition-colors"
                      >
                        <FaGithub className="text-2xl" />
                        <span>check my git</span>
                      </a>
                      <a 
                        href="https://linkedin.com/in/raadfakhrian" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#cccccc] hover:text-white transition-colors"
                      >
                        <FaLinkedin className="text-2xl" />
                        <span>let's link</span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 sm:mb-2 text-[#E06C75]">Email</h3>
                    <a href="mailto:raad.fakhrian@gmail.com" className="text-[#cccccc] hover:text-white transition-colors">
                      raad.fakhrian@gmail.com
                    </a>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#E06C75] mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#3e3e42] rounded-lg focus:ring-2 focus:ring-[#264f78] focus:border-transparent text-[#cccccc] placeholder-[#858585] [&:-webkit-autofill]:bg-[#1e1e1e] [&:-webkit-autofill]:text-[#cccccc] [&:-webkit-autofill]:[-webkit-text-fill-color:#cccccc] [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s]"
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
                      className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#3e3e42] rounded-lg focus:ring-2 focus:ring-[#264f78] focus:border-transparent text-[#cccccc] placeholder-[#858585] [&:-webkit-autofill]:bg-[#1e1e1e] [&:-webkit-autofill]:text-[#cccccc] [&:-webkit-autofill]:[-webkit-text-fill-color:#cccccc] [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s]"
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
                      className="w-full px-4 py-2 bg-[#1e1e1e] border border-[#3e3e42] rounded-lg focus:ring-2 focus:ring-[#264f78] focus:border-transparent text-[#cccccc] placeholder-[#858585] [&:-webkit-autofill]:bg-[#1e1e1e] [&:-webkit-autofill]:text-[#cccccc] [&:-webkit-autofill]:[-webkit-text-fill-color:#cccccc] [&:-webkit-autofill]:[transition:background-color_9999s_ease-in-out_0s]"
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
        {/* On mobile, image is at the bottom and full width; on desktop, side-by-side */}
        <div className="block lg:hidden mt-2 sm:mt-8 w-full order-last">
          <div className="w-full h-[340px] sm:h-[300px] rounded-lg overflow-hidden border border-[#3e3e42]">
            <img 
              src="/uhhpicofme5.jpg" 
              alt="Raad Fakhrian" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="hidden lg:block w-[800px] h-[1000px] rounded-lg overflow-hidden border border-[#3e3e42] flex-shrink-0 sticky top-8">
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