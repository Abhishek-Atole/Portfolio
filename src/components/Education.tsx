import React from 'react';

export default function Education() {
  const education = [
    {
      period: '2020 - 2024',
      degree: 'Bachelor of Engineering in Electronics & Telecommunication',
      institution: 'Shri Sant Gajanan Maharaj College of Engineering, Shegaon',
      description: 'CGPA: 6.79'
    },
    {
      period: '2019 - 2020',
      degree: 'HSC (12th)',
      institution: 'The New Era Junior Science and Arts College, Jalgaon (Ja.)',
      description: 'Percentage: 66.62'
    }
  ];

  const experience = [
    {
      period: 'August 2024 - November 2024',
      role: 'Field Officer | Excel Data Operator',
      company: 'Adarsh Gramin Vikas Sevabhavi Sanstha (Jalgaon, Shegaon, Sangrampur)',
      description: 'Processed and structured large datasets in Excel with 99% accuracy. Led 200+ village-wide awareness campaigns, increasing public participation by 65%. Successfully assisted 30000+ individuals in completing government benefit applications.'
    }
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gradient">EDUCATION & EXPERIENCE</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gradient">Education</h3>
          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                <div className="text-blue-500 font-semibold">{item.period}</div>
                <h4 className="text-xl font-bold mt-2">{item.degree}</h4>
                <div className="text-gray-400 mt-1">{item.institution}</div>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-gradient">Professional Experience</h3>
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-500">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
                <div className="text-blue-500 font-semibold">{item.period}</div>
                <h4 className="text-xl font-bold mt-2">{item.role}</h4>
                <div className="text-gray-400 mt-1">{item.company}</div>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}