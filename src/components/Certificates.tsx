import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      title: 'C Programming',
      issuer: 'LinkedIn Learning',
      image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      link: '#'
    },
    {
      title: 'Master C++ Programming',
      issuer: 'Udemy',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      link: '#'
    },
    {
      title: 'Networking Basics',
      issuer: 'Cisco',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      link: '#'
    }
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gradient">FEATURED CERTIFICATES</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div key={index} className="bg-dark-light rounded-lg overflow-hidden">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                <p className="text-gray-400 mb-4">{certificate.issuer}</p>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400"
                >
                  View Certificate <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}