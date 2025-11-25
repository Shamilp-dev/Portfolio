import React from 'react';
import { ExternalLink, Github, Globe, Smartphone, ShoppingCart, Flame, Shield, Droplets, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Homeli Food Delivery Application',
      description: 'A cross-platform mobile app built with React Native featuring real-time order tracking and secure JWT authentication. Designed and integrated RESTful APIs with MongoDB hosted on AWS, improving API response time by 25% for menu and cart operations.',
      image: 'https://i.postimg.cc/pVD6KRX5/Screenshot-2025-10-14-at-4-10-38-PM.png?auto=compress&cs=tinysrgb&w=600',
      tech: ['React Native', 'Node.js', 'Express', 'MongoDB', 'AWS', 'JWT'],
      category: 'Mobile App',
      icon: <Smartphone className="text-blue-600" size={20} />,
      github: 'https://github.com/candycanekl78/Homeli-Food-Delivery-Website.git',
      live: '#',
      highlights: [
        'Cross-platform mobile app with real-time order tracking',
        'Improved API response time by 25% for menu and cart operations',
        'Optimized client-side state management enhancing UI responsiveness',
        'Boosted user engagement by 40% through enhanced UX'
      ]
    },
    {
      title: 'Real-time Fire Detection System',
      description: 'A full-stack web app for real-time video inference, cutting end-to-end latency by 30% via optimized WebSocket communication. Fine-tuned YOLOv8 model with PyTorch & OpenCV, achieving 25+ FPS and 15% increase in accuracy.',
      image: 'https://i.postimg.cc/BbkTd8Jk/Screenshot-2025-10-14-at-4-16-31-PM.png?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'WebSockets', 'Python', 'Docker', 'YOLOv8', 'PyTorch'],
      category: 'AI/ML',
      icon: <Flame className="text-red-600" size={20} />,
      github: 'https://github.com/candycanekl78/Fire-Detection-ML.git',
      live: 'https://fire-detection-system.netlify.app/',
      highlights: [
        'Built full-stack web app cutting end-to-end latency by 30%',
        'Fine-tuned YOLOv8 model achieving 25+ FPS and 15% accuracy increase',
        'Containerized with Docker and deployed demonstrating CI/CD proficiency',
        'Real-time video inference with optimized WebSocket communication'
      ]
    },
    {
      title: 'Image Captioner',
      description: 'A full-stack application that generates descriptive captions for images by integrating the OpenAI Vision API. Deployed frontend on Netlify and backend on Render, maintaining 99% uptime and successfully processing 100+ user uploads.',
      image: 'https://i.postimg.cc/7ZcVpWZC/Screenshot-2025-10-14-at-4-11-43-PM.png?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'OpenAI Vision API', 'Netlify', 'Render'],
      category: 'AI/ML',
      icon: <Brain className="text-purple-600" size={20} />,
      github: 'https://github.com/candycanekl78/AI-Image-Captioner.git',
      live: 'https://ai-image-captioner.netlify.app/',
      highlights: [
        'Full-stack application with OpenAI Vision API integration',
        'Deployed with 99% uptime processing 100+ user uploads',
        'Frontend deployed on Netlify, backend on Render',
        'Generates descriptive captions improving accessibility'
      ]
    },
    {
      title: 'Responsive To-Do List Website',
      description: 'A modern, responsive to-do list application built with HTML, CSS, and JavaScript. Features task management, local storage persistence, priority levels, and an intuitive user interface optimized for all devices.',
      image: 'https://i.postimg.cc/bwWrXKSk/Screenshot-2025-10-14-at-4-19-03-PM.png?auto=compress&cs=tinysrgb&w=600',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage', 'Responsive Design'],
      category: 'Frontend',
      icon: <Smartphone className="text-blue-600" size={20} />,
      github: 'https://github.com/candycanekl78/ToDolist-Website.git',
      live: '#',
      highlights: [
        'Fully responsive design for all devices',
        'Local storage for data persistence',
        'Task priority and category management',
        'Clean and intuitive user interface'
      ]
    },
    {
      title: 'Smart Irrigation System IoT',
      description: 'An IoT-based smart irrigation system that automates watering based on soil moisture levels, weather conditions, and plant requirements. Built using Arduino, sensors, and cloud connectivity for remote monitoring and control.',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Arduino', 'IoT', 'Sensors', 'Cloud Computing', 'Automation'],
      category: 'IoT',
      icon: <Droplets className="text-green-600" size={20} />,
      github: 'https://github.com/candycanekl78/smart-Irrigation-system-IoT.git',
      live: '#',
      highlights: [
        'Automated irrigation based on soil moisture',
        'Remote monitoring and control capabilities',
        'Weather-based irrigation scheduling',
        'Water conservation through smart automation'
      ]
    },
    {
      title: 'Real-Time Phishing Detection & Awareness System',
      description: 'A comprehensive cybersecurity solution that detects phishing attempts in real-time and educates users about online threats. Features machine learning algorithms for URL analysis and user awareness modules.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'Machine Learning', 'Cybersecurity', 'Web Scraping', 'Flask'],
      category: 'Cybersecurity',
      icon: <Shield className="text-purple-600" size={20} />,
      github: 'https://github.com/candycanekl78/Real-Time-Phishing-Detection-Awareness-System.git',
      live: '#',
      highlights: [
        'Real-time phishing URL detection',
        'Machine learning-based threat analysis',
        'User education and awareness modules',
        'Comprehensive security reporting dashboard'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    {project.icon}
                    <span className="text-sm font-medium text-gray-700">{project.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
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