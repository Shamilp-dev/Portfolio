import React from 'react';
import { Code, Database, Smartphone, Shield, Palette, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Full-Stack Development',
      description: 'Building modern web applications with React.js, Node.js, and TypeScript. Creating scalable architectures with clean code and best practices.'
    },
    {
      icon: <Brain size={32} />,
      title: 'AI/ML Integration',
      description: 'Implementing machine learning models and AI-powered features. Experience with TensorFlow, PyTorch, and OpenAI APIs for intelligent applications.'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native. Building responsive, performant apps with seamless user experiences.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Cybersecurity',
      description: 'Security-focused development with ethical hacking knowledge. Implementing secure authentication, data protection, and vulnerability assessments.'
    },
    {
      icon: <Database size={32} />,
      title: 'Database Design',
      description: 'Designing and optimizing databases with MySQL and MongoDB. Creating efficient data models and query optimization strategies.'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Crafting beautiful, intuitive interfaces with Figma and Adobe Creative Suite. Focus on user-centered design and modern aesthetics.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-graySoft relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Comprehensive solutions combining technical expertise with creative problem-solving to build innovative digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-grayMid/30 backdrop-blur-sm rounded-3xl p-8 hover:bg-grayMid/50 transition-all duration-300 border border-white/5 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
