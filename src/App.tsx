import { Link, Element } from 'react-scroll';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50 border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-3xl font-bold text-gradient transform transition-transform duration-300 hover:scale-110">
              ABHISHEK ATOLE
            </a>
            <div className="flex gap-6">
              <Link to="about" smooth={true} duration={200} className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-y-1 cursor-pointer">
                About
              </Link>
              <Link to="skills" smooth={true} duration={200} className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-y-1 cursor-pointer">
                Skills
              </Link>
              <Link to="education" smooth={true} duration={200} className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-y-1 cursor-pointer">
                Education
              </Link>
              <Link to="projects" smooth={true} duration={200} className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-y-1 cursor-pointer">
                Projects
              </Link>
              <Link to="certificates" smooth={true} duration={200} className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-y-1 cursor-pointer">
                Certificates
              </Link>
              <Link to="contact" smooth={true} duration={200} className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-y-1 cursor-pointer">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Hero />
        <Element name="about" className="fade-in-up">
          <About />
        </Element>
        <Element name="skills" className="fade-in-up">
          <Skills />
        </Element>
        <Element name="education" className="fade-in-up">
          <Education />
        </Element>
        <Element name="projects" className="fade-in-up">
          <Projects />
        </Element>
        <Element name="certificates" className="fade-in-up">
          <Certificates />
        </Element>
        <Element name="contact" className="fade-in-up">
          <Contact />
        </Element>
      </main>

      <Footer />
    </div>
  );
}

export default App;