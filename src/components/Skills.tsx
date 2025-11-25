import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C++', 'SQL']
    },
    {
      title: 'Frontend Technologies',
      skills: ['React', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend Technologies',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'MySQL']
    },
    {
      title: 'AI & Machine Learning',
      skills: ['OpenCV', 'PyTorch', 'YOLOv8', 'OpenAI Vision API', 'TensorFlow']
    },
    {
      title: 'Tools & Platforms',
      skills: ['AWS (EC2, S3)', 'Git', 'Docker', 'Linux', 'Netlify', 'CI/CD']
    },
    {
      title: 'Mobile Development',
      skills: ['React Native', 'Cross-platform', 'JWT Authentication', 'Real-time Features']
    },
    {
      title: 'UI/UX Design',
      skills: ['Figma', 'Adobe Creative Suite', 'Responsive Design', 'Prototyping']
    },
    {
      title: 'Certifications',
      skills: ['React JS (Scaler)', 'Generative AI (Microsoft)', 'Cybersecurity (KEONICS)']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-grayLight">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-blackDeep mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-grayMid max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks for building scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30 group"
              >
                <h3 className="text-lg font-bold text-blackDeep mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-grayLight px-3 py-1.5 rounded-full text-sm text-grayMid hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
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