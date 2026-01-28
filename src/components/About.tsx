import React from 'react';
import { Code2, Palette, LockKeyhole, Brush } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: 'Frontend Development',
      description: 'Building modern, responsive web applications using React, Next.js, TypeScript, and Tailwind CSS with focus on performance and user experience'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces with Figma, creating wireframes, prototypes, and ensuring seamless user experiences'
    },
    {
      icon: <Brush size={32} />,
      title: 'Graphic Design',
      description: 'Creating impactful visual content including logos, posters, and brand materials with Adobe Creative Suite for consistent brand identity'
    },
    {
      icon: <LockKeyhole size={32} />,
      title: 'Full Stack Development',
      description: 'Working with Node.js, MongoDB, and REST APIs to build complete web solutions with secure backend integrations'
    }
  ];

  return (
    <section id="about" className="relative py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#f5a623] font-semibold text-lg">SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-6">
              What I Do
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              I provide a full range of design and development services to help bring your digital vision to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#f5a623] transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#3d4f3d] to-[#2d3d2d] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-[#f5a623]">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2d2d2d]">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-5xl font-black text-[#f5a623] mb-2">10+</div>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-[#f5a623] mb-2">280+</div>
              <p className="text-gray-600 font-medium">Design Hours</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-[#f5a623] mb-2">50+</div>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-[#f5a623] mb-2">100%</div>
              <p className="text-gray-600 font-medium">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
