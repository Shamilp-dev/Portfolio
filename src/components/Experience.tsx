import React from 'react';
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Intern (AI/ML)',
      company: 'Prinston Smart',
      location: 'Bangalore, Karnataka',
      period: 'January 2025 — February 2025',
      description: 'Developed real-time AI/ML systems focusing on computer vision and fire detection. Worked with YOLOv8 model fine-tuning, data preprocessing pipelines, and dynamic dashboard development for model performance visualization.',
      achievements: [
        'Developed a real-time fire detection system by fine-tuning YOLOv8 model, improving accuracy by 15%',
        'Engineered data preprocessing pipelines and statistical analyses to improve model stability',
        'Built dynamic dashboards to visualize model performance metrics',
        'Reduced evaluation time through data-driven iteration and optimization'
      ],
      type: 'work'
    },
    {
      title: 'Bachelor of Computer Applications (BCA)',
      company: 'Krupanidhi Degree College, Bangalore, Karnataka',
      location: 'Bangalore, Karnataka',
      period: '2022 — 2025',
      description: 'Completed Bachelor of Computer Applications with CGPA: 7.62/10, focusing on advanced programming concepts, data structures, algorithms, and software engineering principles.',
      achievements: [
        'Relevant Coursework: Data Structures and Algorithms, OOP Concepts',
        'Database Management Systems, Operating Systems',
        'Cybersecurity and software engineering principles',
        'Strong foundation in computer science fundamentals'
      ],
      type: 'education'
    },
    {
      title: 'Diploma in Instrumentation Engineering',
      company: 'Government Polytechnic College, Mattannur, Kerala',
      location: 'Mattannur, Kerala',
      period: '2019 — 2022',
      description: 'Completed Diploma in Instrumentation Engineering, building strong foundation in engineering principles, electronics systems, and instrumentation technologies.',
      achievements: [
        'Specialization in Instrumentation and Electronics',
        'Strong foundation in engineering principles',
        'Electronics systems and circuit design',
        'Instrumentation and control systems'
      ],
      type: 'education'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Experience & Education
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                
                {/* Timeline Dot */}
                <div className={`absolute left-2 top-8 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                  exp.type === 'work' ? 'bg-blue-600' : 'bg-green-600'
                }`}></div>
                
                <div className="ml-12 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <div className={`flex items-center gap-2 font-semibold mt-1 ${
                        exp.type === 'work' ? 'text-blue-600' : 'text-green-600'
                      }`}>
                        {exp.type === 'work' ? <Building size={16} /> : <GraduationCap size={16} />}
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mt-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Key Highlights:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-gray-600">
                          <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
                            exp.type === 'work' ? 'bg-blue-600' : 'bg-green-600'
                          }`}></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;