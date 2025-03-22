import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Automatic Floor Cleaning Robot',
    description: 'Engineered an autonomous floor-cleaning robot with optimized path planning, enhancing cleaning efficiency by 30%. Implemented intelligent obstacle avoidance system with 98% accuracy.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/Abhishek-Atole/cleaning-robot',
    demo: '#',
    tags: ['Embedded Systems', 'IoT', 'Arduino']
  },
  {
    title: 'Prosthetic Hand Gestures Classification',
    description: 'Developed an AI-powered prosthetic hand gesture classification system using CNNs, achieving 94% precision rate. Integrated IoT for real-time signal processing.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/Abhishek-Atole/prosthetic-hand',
    demo: '#',
    tags: ['Machine Learning', 'IoT', 'Python', 'CNNs']
  },
  {
    title: 'School Management System',
    description: 'Designed and deployed a role-based school management system, streamlining student enrollment, attendance tracking, and grade management.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/Abhishek-Atole/school-management',
    demo: '#',
    tags: ['C', 'C++', 'Database']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient">FEATURED PROJECTS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}