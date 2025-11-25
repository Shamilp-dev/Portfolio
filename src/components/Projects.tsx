import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Homeli Food Delivery Application',
      description: 'Cross-platform mobile app built with React Native featuring real-time order tracking and secure JWT authentication. Designed and integrated RESTful APIs with MongoDB hosted on AWS.',
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      github: 'https://github.com/candycanekl78/Homeli-Food-Delivery-Website.git',
      live: '#'
    },
    {
      title: 'Real-time Fire Detection System',
      description: 'Full-stack web app for real-time video inference with YOLOv8 model fine-tuning. Achieved 25+ FPS and 15% accuracy increase with optimized WebSocket communication.',
      image: 'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'YOLOv8', 'Docker'],
      github: 'https://github.com/candycanekl78/Fire-Detection-ML.git',
      live: 'https://fire-detection-system.netlify.app/'
    },
    {
      title: 'AI Image Captioner',
      description: 'Full-stack application generating descriptive captions for images using OpenAI Vision API. Deployed with 99% uptime successfully processing 100+ user uploads.',
      image: 'https://images.pexels.com/photos/1714900/pexels-photo-1714900.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'OpenAI API', 'Netlify'],
      github: 'https://github.com/candycanekl78/AI-Image-Captioner.git',
      live: 'https://ai-image-captioner.netlify.app/'
    },
    {
      title: 'To-Do List Application',
      description: 'Modern, responsive to-do list with task management, local storage persistence, and priority levels. Fully optimized for all devices with intuitive user interface.',
      image: 'https://images.pexels.com/photos/3862624/pexels-photo-3862624.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/candycanekl78/ToDolist-Website.git',
      live: '#'
    },
    {
      title: 'Smart Irrigation System IoT',
      description: 'IoT-based smart irrigation system automating watering based on soil moisture levels and weather conditions. Built with Arduino sensors and cloud connectivity for remote monitoring.',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Arduino', 'IoT', 'Cloud Computing'],
      github: 'https://github.com/candycanekl78/smart-Irrigation-system-IoT.git',
      live: '#'
    },
    {
      title: 'Phishing Detection System',
      description: 'Comprehensive cybersecurity solution detecting phishing attempts in real-time. Features ML algorithms for URL analysis and user awareness modules with security dashboard.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'Machine Learning', 'Flask'],
      github: 'https://github.com/candycanekl78/Real-Time-Phishing-Detection-Awareness-System.git',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-graySoft relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              A selection of my recent work showcasing expertise across web, mobile, AI/ML, and cybersecurity domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-grayMid/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grayMid to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary/20 text-primaryLight px-2.5 py-1 rounded-lg text-xs font-medium border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
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

export default Projects;
