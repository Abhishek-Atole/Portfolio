import React from 'react';

export default function About() {
  const skills = [
    { name: 'C', icon: '📜' },
    { name: 'C++', icon: '📜' },
    { name: 'Python', icon: '🐍' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Windows', icon: '🪟' },
    { name: 'Git', icon: '📚' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Gitpod', icon: '☁️' }
  ];

  const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '3+', label: 'Projects Completed' },
    { value: '1', label: 'Companies Worked' },
    { value: '30K+', label: 'People Assisted' }
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
                <span className="text-3xl mb-2">{skill.icon}</span>
                <span className="text-gray-300">{skill.name}</span>
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