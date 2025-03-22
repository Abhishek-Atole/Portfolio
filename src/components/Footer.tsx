import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-bold">Abhishek Atole</p>
            <p className="text-gray-400">Software Developer</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/Abhishek-Atole"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/abhishekatole"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:abhiatole03@gmail.com"
              className="text-gray-400 hover:text-white"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Abhishek Atole. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}