import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 flex items-center transition-all duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 mb-8 relative">
            <img
              src="/dist/assets/images/profilepic.jpg"
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
            <p className="text-xl text-gray-400 mb-8 text-justify">
              Software Developer with expertise in C, C++, and web development. Experienced in IoT, embedded systems, and automation. 
              Proficient in developing and optimizing software solutions with hands-on project experience. Certified in C and C++ programming 
              and networking, with a strong foundation in system architecture and application development.
            </p>
            <div className="flex gap-4 justify-center mb-8">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-blue-600/30 cursor-pointer"
              >
                CONNECT
              </Link>
              <a
                href="dist/assets/files/Abhishek Himmatrao Atole.pdf"
                className="px-8 py-3 border-2 border-blue-600 text-white rounded-full hover:bg-blue-600/10 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
              >
                <Download size={20} />
                RESUME
              </a>
              <a
                href="mailto:abhiatole03@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-400 text-white rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-green-600/30 cursor-pointer"
              >
                HIRE ME
              </a>
            </div>
            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/Abhishek-Atole"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
              >
                <Github size={24} color="#4078c0" />
              </a>
              <a
                href="https://linkedin.com/in/abhishekatole"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
              >
                <Linkedin size={24} color="#0077b5" />
              </a>
              <a
                href="mailto:abhiatole03@gmail.com"
                className="p-3 text-gray-400 hover:text-white transition-colors hover:scale-110 transform"
              >
                <Mail size={24} color="#d44638" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}