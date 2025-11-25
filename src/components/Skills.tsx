import React from 'react';
import { Code, Database, Globe, Zap, Layers, Server, Shield, Palette, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: 'Python', level: 88 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'C', level: 80 },
        { name: 'C++', level: 78 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'Frontend Technologies',
      icon: <Layers className="text-green-600" size={24} />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'React Native', level: 88 },
        { name: 'Bootstrap', level: 88 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 92 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      title: 'Backend Technologies',
      icon: <Database className="text-purple-600" size={24} />,
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <Globe className="text-indigo-600" size={24} />,
      skills: [
        { name: 'AWS (EC2, S3)', level: 82 },
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'Linux', level: 85 },
        { name: 'Netlify', level: 88 },
        { name: 'CI/CD', level: 78 }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="text-cyan-600" size={24} />,
      skills: [
        { name: 'OpenCV', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'YOLOv8', level: 82 },
        { name: 'OpenAI Vision API', level: 85 }
      ]
    },
    {
      title: 'Certifications',
      icon: <Shield className="text-red-600" size={24} />,
      skills: [
        { name: 'React JS (Scaler)', level: 95 },
        { name: 'Career Essentials in Generative AI (Microsoft)', level: 90 },
        { name: 'Cybersecurity & Ethical Hacking (KEONICS)', level: 88 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: <Zap className="text-yellow-600" size={24} />,
      skills: [
        { name: 'React Native', level: 88 },
        { name: 'Cross-platform Development', level: 85 },
        { name: 'JWT Authentication', level: 82 },
        { name: 'Real-time Features', level: 80 }
      ]
    },
    {
      title: 'DevOps & Deployment',
      icon: <Palette className="text-orange-600" size={24} />,
      skills: [
        { name: 'Docker Containerization', level: 80 },
        { name: 'AWS Deployment', level: 78 },
        { name: 'Netlify Hosting', level: 88 },
        { name: 'WebSocket Communication', level: 82 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;