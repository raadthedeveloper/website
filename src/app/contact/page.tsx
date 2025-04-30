'use client';

import { useState } from 'react';

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
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-gray-800">Get in Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h2>
            <p className="text-gray-700 mb-8">
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out through the form or via social media.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 text-gray-800">Email</h3>
                <a href="mailto:raad.fakhrian@gmail.com" className="text-gray-700 hover:text-gray-900 transition-colors">
                  raad.fakhrian@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 text-gray-800">Social Media</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/raadthedevloper"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com/in/raadfakhrian" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-700 focus:border-transparent bg-gray-50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-700 focus:border-transparent bg-gray-50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-700 focus:border-transparent bg-gray-50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-700 focus:border-transparent bg-gray-50"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 