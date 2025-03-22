import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-gradient">ABHISHEK ATOLE</a>
            <div className="flex gap-6">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#education" className="text-gray-400 hover:text-white transition-colors">Education</a>
              <a href="#certificates" className="text-gray-400 hover:text-white transition-colors">Certificates</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;