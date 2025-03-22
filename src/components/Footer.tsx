import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Example subscription logic (replace with your actual subscription logic)
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Subscribed with email:', email);
      alert('Subscribed successfully!');
      setEmail('');
    } catch (error) {
      console.error('Subscription failed:', error);
      alert('Subscription failed. Please try again.');
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-2xl font-bold">Abhishek Atole</p>
            <p className="text-gray-400">Software Developer</p>
            <p className="text-gray-400 mt-2">Building innovative solutions and creating impactful software.</p>
          </div>
          <div className="flex gap-6 mb-6 md:mb-0">
            <a
              href="https://github.com/Abhishek-Atole"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/abhishekatole"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:abhiatole03@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
          <div className="text-center md:text-right">
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors duration-300 text-white font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>© {currentYear} Abhishek Atole. All rights reserved.</p>
        </div>
        <div className="mt-4 text-center">
          <a
            href="mailto:abhiatole03@gmail.com"
            className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 transition-colors duration-300 text-white font-semibold"
          >
            Hire Me
          </a>
        </div>
      </div>
    </footer>
  );
}