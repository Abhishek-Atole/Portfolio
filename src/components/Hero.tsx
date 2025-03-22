import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 flex items-center">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 mb-8 relative">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
              alt="Profile"
              className="rounded-full w-full h-full object-cover border-4 border-blue-500 shadow-lg shadow-blue-500/50"
            />
            <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-pulse"></div>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              I'm <span className="text-gradient">Abhishek Atole</span> a Software{' '}
              <span className="text-gradient">Developer</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Software Developer with expertise in C, C++, and web development. Experienced in IoT, embedded systems, and automation. 
              Proficient in developing and optimizing software solutions with hands-on project experience. Certified in C and C++ programming 
              and networking, with a strong foundation in system architecture and application development.
            </p>
            <div className="flex gap-4 justify-center mb-8">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-blue-600/30"
              >
                CONNECT
              </a>
              <a
                href="/resume.pdf"
                className="px-8 py-3 border-2 border-blue-600 text-white rounded-full hover:bg-blue-600/10 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
              >
                <Download size={20} />
                RESUME
              </a>
            </div>
            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/Abhishek-Atole"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/abhishekatole"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:abhiatole03@gmail.com"
                className="p-3 text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}