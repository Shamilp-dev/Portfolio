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
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-blackDeep mb-4">
              Experience & Education
            </h2>
            <p className="text-xl text-grayMid">
              Timeline of my professional journey and educational achievements
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-primary/20"></div>

                <div className={`absolute left-0 top-6 w-10 h-10 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${
                  exp.type === 'work' ? 'bg-primary' : 'bg-primaryLight'
                }`}>
                  {exp.type === 'work' ? (
                    <Building size={20} className="text-white" />
                  ) : (
                    <GraduationCap size={20} className="text-white" />
                  )}
                </div>

                <div className="ml-20 bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blackDeep">{exp.title}</h3>
                      <p className={`flex items-center gap-2 font-semibold mt-2 ${
                        exp.type === 'work' ? 'text-primary' : 'text-primaryLight'
                      }`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end mt-4 md:mt-0 text-grayMid">
                      <div className="flex items-center gap-2 font-medium">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 font-medium mt-2">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-grayMid leading-relaxed mb-6">{exp.description}</p>

                  <div>
                    <h4 className="font-bold text-blackDeep mb-3">Key Highlights:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3 text-grayMid">
                          <span className={`mt-1.5 w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                            exp.type === 'work' ? 'bg-primary' : 'bg-primaryLight'
                          }`}></span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
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
