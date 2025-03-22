import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaLinux, FaWindows, FaGit, FaDocker, FaGithub, FaGitlab, FaAws, FaMicrochip, FaRobot, FaLock, FaNetworkWired } from 'react-icons/fa';
import { SiC, SiCplusplus, SiGitpod, SiTestinglibrary, SiArduino, SiTensorflow, SiPytorch } from 'react-icons/si';

export default function About() {
  const skills = [
    { name: 'C', icon: <SiC color="#A8B9CC" /> },
    { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
    { name: 'Java', icon: <FaJava color="#007396" /> },
    { name: 'Python', icon: <FaPython color="#3776AB" /> },
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'Linux', icon: <FaLinux color="#FCC624" /> },
    { name: 'Windows', icon: <FaWindows color="#0078D6" /> },
    { name: 'Git', icon: <FaGit color="#F05032" /> },
    { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
    { name: 'Gitpod', icon: <SiGitpod color="#FFAE33" /> },
    { name: 'GitHub', icon: <FaGithub color="#ffffff" /> },
    { name: 'GitLab', icon: <FaGitlab color="#FC6D26" /> },
    { name: 'Embedded Systems', icon: <FaMicrochip color="#F7DF1E" /> },
    { name: 'GitHub Workspace', icon: <FaAws color="#FF9900" /> },
    { name: 'Software Testing (Unit Testing, Selenium, Postman API Testing)', icon: <SiTestinglibrary color="#E34F26" /> },
    { name: 'Microcontrollers (Arduino, ESP32, Raspberry Pi)', icon: <SiArduino color="#00979D" /> },
    { name: 'Machine Learning (CNNs, TensorFlow, PyTorch)', icon: <FaRobot color="#FF6F00" /> },
    { name: 'Cybersecurity Fundamentals', icon: <FaLock color="#007396" /> },
    { name: 'Networking (TCP/IP, Network Security, Firewalls)', icon: <FaNetworkWired color="#007396" /> }
  ];

  const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '2', label: 'Companies Worked' },
    { value: '10+', label: 'People Assisted' }
  ];

  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gradient">ABOUT ME</h2>
        
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">MY SKILLS</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-dark-light rounded-lg">
                <span className="text-5xl mb-2">{skill.icon}</span> {/* Increased icon size */}
                <span className="text-gray-300 text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">MY STATS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}