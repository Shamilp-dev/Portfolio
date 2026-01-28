import React from 'react';
import { Calendar, MapPin, Building, GraduationCap, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Intern (ML)',
      company: 'Prinston Smart Technologies',
      location: 'Bangalore, Karnataka',
      period: 'Jan 2025 — Feb 2025',
      description: 'Developed and optimized machine learning models for real-time fire detection systems, with focus on improving model accuracy and creating visualization tools for performance monitoring.',
      achievements: [
        'Optimized a real-time fire alarm model by applying targeted data augmentation, achieving up to a 15% improvement in prediction accuracy',
        'Built interactive dashboards to visualize performance metrics, enabling faster model evaluation'
      ],
      type: 'work',
      icon: Building
    },
    {
      title: 'Bachelor of Computer Applications (BCA)',
      company: 'Krupanidhi Degree College',
      location: 'Bangalore, Karnataka',
      period: '2022 — 2025',
      cgpa: 'CGPA: 7.63/10',
      description: 'Comprehensive study in computer science fundamentals, software development, and emerging technologies with strong emphasis on practical application and problem-solving.',
      achievements: [
        'Core Subjects: Data Structures & Algorithms, OOP Concepts, DBMS',
        'Software Engineering, Web Development, and System Design',
        'Strong foundation in programming and software development',
        'Active participation in coding competitions and technical events'
      ],
      type: 'education',
      icon: GraduationCap
    },
    {
      title: 'Diploma in Instrumentation Engineering',
      company: 'Government Polytechnic College Mattannur',
      location: 'Mattannur, Kerala',
      period: '2019 — 2022',
      description: 'Specialized technical education in instrumentation and control systems, building a strong foundation in engineering principles and electronics.',
      achievements: [
        'Specialization in Instrumentation & Control Systems',
        'Electronics circuits and embedded systems design',
        'Industrial automation and process control',
        'Hands-on experience with instrumentation equipment'
      ],
      type: 'education',
      icon: GraduationCap
    }
  ];

  return (
    <section id="experience" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-[#f5a623]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-[#3d4f3d]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="text-[#f5a623] font-semibold text-base sm:text-lg tracking-wider uppercase">
                Journey & Growth
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d2d2d] mb-4 sm:mb-6">
              Experience & Education
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
              My professional journey and academic achievements that shaped my expertise
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line - Responsive positioning */}
            <div className="absolute left-4 sm:left-6 md:left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f5a623] via-[#3d4f3d] to-[#f5a623] transform lg:-translate-x-1/2"></div>

            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div
                  key={index}
                  className={`relative mb-8 sm:mb-12 md:mb-16 ${
                    index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:ml-auto'
                  }`}
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {/* Timeline dot - Responsive */}
                  <div className="absolute left-4 sm:left-6 md:left-8 lg:left-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transform lg:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className={`w-full h-full rounded-full ${
                      exp.type === 'work' 
                        ? 'bg-gradient-to-br from-[#f5a623] to-[#ff8c00]' 
                        : 'bg-gradient-to-br from-[#3d4f3d] to-[#5a7a5a]'
                    } shadow-xl flex items-center justify-center border-2 sm:border-4 border-white transform hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={20} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </div>
                  </div>

                  {/* Content card - Wider on mobile, full width */}
                  <div className="ml-16 sm:ml-20 md:ml-24 lg:ml-0 pr-2 sm:pr-4">
                    <div className={`${index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'}`}>
                      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                        {/* Header */}
                        <div className="mb-4 sm:mb-6">
                          <div className="flex items-center gap-2 sm:gap-3 mb-3 flex-wrap">
                            <span className={`inline-flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold ${
                              exp.type === 'work'
                                ? 'bg-[#f5a623]/10 text-[#f5a623]'
                                : 'bg-[#3d4f3d]/10 text-[#3d4f3d]'
                            }`}>
                              <Calendar size={14} className="sm:w-4 sm:h-4" />
                              <span className="text-xs sm:text-sm">{exp.period}</span>
                            </span>
                            <span className="inline-flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm font-medium text-gray-600">
                              <MapPin size={14} className="sm:w-4 sm:h-4" />
                              <span className="text-xs sm:text-sm">{exp.location}</span>
                            </span>
                          </div>
                          
                          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#2d2d2d] mb-2 group-hover:text-[#f5a623] transition-colors duration-300">
                            {exp.title}
                          </h3>
                          
                          <p className={`text-base sm:text-lg md:text-xl font-semibold mb-2 ${
                            exp.type === 'work' ? 'text-[#f5a623]' : 'text-[#3d4f3d]'
                          }`}>
                            {exp.company}
                          </p>
                          
                          {exp.cgpa && (
                            <div className="inline-flex items-center gap-1 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-[#3d4f3d] to-[#5a7a5a] text-white rounded-full font-bold text-xs sm:text-sm">
                              <Award size={14} className="sm:w-4 sm:h-4" />
                              {exp.cgpa}
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div>
                          <div className="flex items-center gap-2 mb-3 sm:mb-4">
                            <TrendingUp size={18} className={`${exp.type === 'work' ? 'text-[#f5a623]' : 'text-[#3d4f3d]'} sm:w-5 sm:h-5`} />
                            <h4 className="font-bold text-[#2d2d2d] text-base sm:text-lg">
                              {exp.type === 'work' ? 'Key Achievements' : 'Key Highlights'}
                            </h4>
                          </div>
                          
                          <div className="space-y-2 sm:space-y-3">
                            {exp.achievements.map((achievement, achIndex) => (
                              <div
                                key={achIndex}
                                className="flex items-start gap-2 sm:gap-3"
                              >
                                <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 ${
                                  exp.type === 'work' ? 'bg-[#f5a623]' : 'bg-[#3d4f3d]'
                                }`}></div>
                                <p className="text-gray-600 leading-relaxed flex-1 text-xs sm:text-sm md:text-base">
                                  {achievement}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Decorative corner accent */}
                        <div className={`absolute ${
                          index % 2 === 0 ? 'top-0 right-0' : 'top-0 left-0'
                        } w-16 h-16 sm:w-20 sm:h-20 ${
                          exp.type === 'work'
                            ? 'bg-gradient-to-br from-[#f5a623]/10'
                            : 'bg-gradient-to-br from-[#3d4f3d]/10'
                        } rounded-xl sm:rounded-2xl -z-10 group-hover:scale-150 transition-transform duration-500`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (min-width: 1024px) {
          .relative > div:nth-child(odd) {
            animation: slideInLeft 0.8s ease-out backwards;
          }

          .relative > div:nth-child(even) {
            animation: slideInRight 0.8s ease-out backwards;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
