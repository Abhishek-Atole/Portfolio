import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      title: 'C Programming',
      issuer: 'LinkedIn Learning',
      image: 'images/c prog.jpg',
      link: 'https://www.linkedin.com/learning/certificates/8cbed9814a163b91f00feac525839739085741dd84c32f2e3e6565c290c2420e?trk=share_certificate'
    },
    {
      title: 'Master C++ Programming',
      issuer: 'Udemy',
      image: 'images/C++Program.jpg',
      link: 'https://www.udemy.com/certificate/UC-5f7e3c2a-9296-46a2-af0f-d3e7b7b2ccc1/'
    },
    {
      title: 'C Programming for Embedded Applications',
      issuer: 'Linkedin Learning',
      image: 'images/c Embed.jpg',
      link: 'https://www.linkedin.com/learning/certificates/446728be8710513dd52a7b731e6152e99033d17d30cdd82f2330ccf7a1344b9c?trk=share_certificate'
    },
    {
      title: 'Getting Started with Linux',
      issuer: 'Linkedin Learning',
      image: 'images/linux.jpg',
      link: 'https://www.linkedin.com/learning/paths/getting-started-with-linux'
    },
    {
      title: 'Heterogeneous Parallel Programming using CUDA and OpenCL',
      issuer: 'Cisco',
      image: 'images/HPP.jpg',
      link: 'https://astromedicomp.org/Certificate/StudentCertificate.php?cuid=HPP-2025-ILTOCF649M'
    },
    {
      title: 'Cybersecurity Foundation',
      issuer: 'Cisco Netacademy',
      image: 'images/cyber.png',
      link: 'https://www.credly.com/badges/c7ee13ea-2f69-4cae-815e-dd15b6e068ad/public_url'
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div key={index} className="bg-dark-light rounded-lg overflow-hidden shadow-lg">
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