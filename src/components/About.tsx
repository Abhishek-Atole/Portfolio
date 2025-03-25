import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gradient">ABOUT ME</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/dist/assets/images/profilepic.jpg"
              alt="Profile"
              className="rounded-lg w-full h-auto object-cover shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-xl text-gray-400 mb-4 text-justify">
              I am a Software Developer passionate about building innovative solutions with C, C++, Python, IoT, and Embedded Systems. With hands-on experience in software development, automation testing, and debugging, I specialize in crafting efficient, high-performance applications that optimize processes and enhance system performance.
            </p>
            <p className="text-xl text-gray-400 mb-4 text-justify">
              My journey includes working on impactful projects like an AI-powered Prosthetic Hand Gesture Classification System and an Automatic Floor Cleaning Robot, integrating Machine Learning, IoT, and Embedded Systems to drive real-world innovation. I am also proficient in network security, Agile methodologies, Git version control, and DevOps, ensuring seamless collaboration and robust software solutions.
            </p>
            <p className="text-xl text-gray-400 mb-4 text-justify">
              Beyond coding, I thrive in team environments, project management, and leadership roles, always eager to learn and explore cutting-edge technologies. My mission is to develop scalable, efficient, and intelligent systems that make a difference.
            </p>
            <div className="flex gap-4 justify-center mb-8">
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