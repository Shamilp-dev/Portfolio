import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Linkedin, Figma } from 'lucide-react';

const Projects = () => {
  const developmentProjects = [
    {
      id: 'docquest',
      title: 'Docquest.ai',
      category: 'Development',
      tech: ['Next.js', 'Node.js', 'Llama', 'Cohere', 'MongoDB'],
      description: 'LLM-powered document intelligence platform for insights of documents and images.',
      highlights: [
        'Built an LLM-powered platform with ~90% accuracy',
        'Integrated semantic search and LLM with Cohere embeddings, improving retrieval by 35%',
        'Designed scalable MongoDB architecture handling 500+ documents'
      ],
      images: [
        '/docquest_home_page.png',
        '/docquest main view.png'
      ],
      github: 'https://github.com/Shamilp-dev/docquest.ai.git',
      live: 'https://docquestai.vercel.app/'
    },
    {
      id: 'homeli',
      title: 'Homeli',
      subtitle: 'Food Delivery Application',
      category: 'Development',
      tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB'],
      description: 'Cross-platform mobile application with real-time order tracking and secure authentication.',
      highlights: [
        'Developed cross-platform mobile app with real-time tracking',
        'Implemented JWT-based secure authentication',
        'Designed REST APIs on AWS, improving response time by 25%',
        'Optimized state management, increasing engagement by 40%'
      ],
      images: [
        '/homeli.png',
        '/gulab.png'
      ],
      github: 'https://github.com/Shamilp-dev/homeli-foodDelivery-Application-MERN-',
      demo: 'https://linkedin.com'
    },
    {
      id: 'fire-detection',
      title: 'Real-time Fire Detection System',
      category: 'Development',
      tech: ['React.js', 'Node.js', 'Python', 'Docker'],
      description: 'AI-powered fire detection system using YOLOv8 with real-time video inference.',
      highlights: [
        'Fine-tuned YOLOv8 model with PyTorch and OpenCV',
        'Improved detection accuracy by 15%',
        'Implemented real-time detection workflow',
        'Containerized with Docker and deployed via CI/CD'
      ],
      images: [
        'fire.jpg',
        'fire1.png',
      ],
      github: 'https://github.com/Shamilp-dev/Fire-Detection-System.git',
      live: 'https://fire-detection-system.netlify.app/'
    }
  ];

  const uiuxProjects = [
    {
      id: 'homeli-uiux',
      title: 'Homeli UI/UX',
      subtitle: 'Food Delivery App Design',
      category: 'UI/UX Design',
      tech: ['Figma', 'Photoshop', 'UI Design', 'UX Research'],
      description: 'Modern food delivery app UI/UX with engaging color palettes and smooth user flows.',
      highlights: [
        'Designed modern UI/UX using Figma and Photoshop',
        'Applied consistent and engaging color palettes',
        'Focused on smooth user flows and improved UX',
        'Created responsive layouts for mobile platforms'
      ],
      images: [
        '/homeli.png',
        '/gulab.png'
      ],
      figma: 'https://www.figma.com/design/HS1eN12Ah4svncT2HQjbbo/Ui-Ux-Machine-Test--Shamil-P-?node-id=391-193&t=4p3MqKPOndAiIt2q-1'
    },
    {
      id: 'docquest-uiux',
      title: 'Docquest.ai UI/UX',
      subtitle: 'AI Document Platform Design',
      category: 'UI/UX Design',
      tech: ['Figma', 'Photoshop', 'UI Design', 'Gradient Design'],
      description: 'Modern AI-focused interface with dynamic gradients and unique color palette.',
      highlights: [
        'Designed modern AI-focused interface with Figma',
        'Created dynamic login page with mesh gradient background',
        'Designed AI search interface with dynamic colored borders',
        'Implemented unique UI components (chat, popups, sidebar)'
      ],
      images: [
        '/docquest_home_page.png',
        '/docquest main view.png',
        '/docquest_home_page.png'
      ],
      figma: 'https://www.figma.com/design/HS1eN12Ah4svncT2HQjbbo/Ui-Ux-Machine-Test--Shamil-P-?node-id=391-193&t=4p3MqKPOndAiIt2q-1'
    },
    {
      id: 'student-platform',
      title: 'Student Management Platform',
      subtitle: 'Educational Dashboard Design',
      category: 'UI/UX Design',
      tech: ['Figma', 'Dashboard Design', 'Data Visualization'],
      description: 'Comprehensive student management platform with dashboards, metrics, and responsive layouts.',
      highlights: [
        'Designed UI/UX for student management platform',
        'Included dashboards with metrics and graphs',
        'Designed responsive layouts for all devices',
        'Implemented sidebar and bottom navigation patterns'
      ],
      images: [
        '/student managemnt systsm main.png',
        '/sms1.png',
      ],
      figma: 'https://www.figma.com/design/HS1eN12Ah4svncT2HQjbbo/Ui-Ux-Machine-Test--Shamil-P-?node-id=0-1&t=FeKzJ5WhJRoc9zqW-1'
    }
  ];

  const graphicProjects = [
    {
      id: 'jewellery-logo',
      title: 'Jewellery Brand Logo',
      subtitle: 'International Client Project',
      category: 'Graphic Design',
      tech: ['Illustrator', 'Photoshop', 'Logo Design', 'Branding'],
      description: 'Logo design for a client combining traditional and modern concepts.',
      highlights: [
        'Designed logo for a jewellery brand',
        'Combined traditional and modern design concepts',
        'Created brand mockups using Photoshop and Ai',
        'Delivered complete brand identity package'
      ],
      images: [
        '/logo.png',
        'jwellerystore.jpg',
        'logoinjwellery.png'
      ],
      drive: '#'
    },
    {
      id: 'football-poster',
      title: 'Football Poster Design',
      subtitle: 'Sports Promotion Campaign',
      category: 'Graphic Design',
      tech: ['Photoshop', 'Illustrator', 'Poster Design'],
      description: 'Creative poster design for football-related promotions with dynamic composition.',
      highlights: [
        'Creative poster design for football promotions',
        'Bold typography and dynamic composition',
        'Vibrant color schemes and energy',
        'Print-ready high-resolution artwork'
      ],
      images: [
        '/posterdesign.png',
        '/poster2.jpg',
      ],
      drive: '#'
    },
    {
      id: 'marketing-poster',
      title: 'Brand Promotion Posters',
      subtitle: 'Promotional Campaign Design',
      category: 'Graphic Design',
      tech: ['Photoshop', 'Canva', 'Social Media Design'],
      description: 'Designed promotional posters for digital marketing campaigns across various platforms.',
      highlights: [
        'Designed promotional posters for marketing campaigns',
        'Created social media optimized graphics',
        'Consistent brand messaging across designs',
        'High engagement visual content'
      ],
      images: [
        '/suno.png',
        '/chair.png',
      ],
      drive: '#'
    }
  ];

  // Image component manages its own rotation state
  const ProjectImage = ({ images, projectId }: { images: string[]; projectId: string }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <>
        <img
          src={images[index]}
          alt={`Project ${projectId}`}
          className="w-full h-full object-cover"
        />
        
        {/* Image indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_: string, idx: number) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === idx ? 'bg-[#f5a623] w-6' : 'bg-white/50 w-2'
              }`}
            />
          ))}
        </div>
      </>
    );
  };

  const ProjectCard = ({ project }: any) => {
    return (
      <div className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#f5a623] hover:shadow-2xl">
        {/* Image section */}
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <ProjectImage images={project.images} projectId={project.id} />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-[#3d4f3d] text-white rounded-full text-xs font-bold">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-1 text-[#2d2d2d]">{project.title}</h3>
          {project.subtitle && (
            <p className="text-[#f5a623] font-medium mb-3 text-sm">{project.subtitle}</p>
          )}
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech: string, techIndex: number) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <ul className="space-y-2">
              {project.highlights.slice(0, 3).map((highlight: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-[#f5a623] mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#f5a623] text-sm"
              >
                <Github size={16} />
                <span className="font-medium">Code</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#f5a623] text-sm"
              >
                <ExternalLink size={16} />
                <span className="font-medium">Live Demo</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#f5a623] text-sm"
              >
                <Linkedin size={16} />
                <span className="font-medium">Demo</span>
              </a>
            )}
            {project.figma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#f5a623] text-sm"
              >
                <ExternalLink size={16} />
                <span className="font-medium">Figma</span>
              </a>
            )}
            {project.drive && (
              <a
                href={project.drive}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#f5a623] text-sm"
              >
                <ExternalLink size={16} />
                <span className="font-medium">View Files</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="relative py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#f5a623] font-semibold text-lg">PORTFOLIO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-6">
              My Projects
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore my work across development, UI/UX design, and graphic design
            </p>
          </div>

          {/* Development Section */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-[#f5a623] rounded-full"></div>
              <h3 className="text-3xl font-bold text-[#2d2d2d]">Development</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developmentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* UI/UX Design Section */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-[#f5a623] rounded-full"></div>
              <h3 className="text-3xl font-bold text-[#2d2d2d]">UI/UX Design</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uiuxProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Graphic Design Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-[#f5a623] rounded-full"></div>
              <h3 className="text-3xl font-bold text-[#2d2d2d]">Graphic Design</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {graphicProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
