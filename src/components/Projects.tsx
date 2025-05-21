import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'game dev';
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Getko Online Ordering Platform",
      description: "An e-commerce platform with wishlist, shopping cart, and role-based access control developed using Laravel, MySQL, and AJAX.",
      image: "image/getko.jpg",
      tags: ["Laravel", "MySQL", "AJAX", "Tailwind CSS", "Docker", "RESTful API", "Authentication"],
      link: "https://getko.ph/",
      // github: "#",
      category: 'fullstack'
    },
    {
      id: 2,
      title: "PetChecker",
      description: "A sleek, responsive React Native portfolio with dark mode, showcasing projects and skills with a clean modern design.",
      image: "image/petchecker.jpg",
      tags: ["React Native", "TypeScript", "Mobile App", "Dark Mode"],
      link: "https://app.petcheckr.eu/login",
      // github: "#",
      category: 'frontend'
    },
    {
      id: 3,
      title: "DreadLight",
      description: "A chilling horror co-op game currently in development using Unity and C#, featuring dark atmospheric visuals and intense multiplayer gameplay.",
      image: "image/dreadlight.jpg",
      tags: ["Unity", "C#", "Game Development", "3D", "Dark Theme"],
      // github: "#",
      category: 'game dev'
    },
    {
      id: 4,
      title: "Digital-Contract-Signing-Approval-Workflow",
      description: "A digital contract app with e-signatures, approval workflows, version control, and secure storage, using Zustand for state management.",
      image: "image/digital.png",
      tags: ["PHP", "TypeScript", "JavaScript", "Tailwind CSS"],
      // link: "#",
      github: "https://github.com/fdgatoc03/Digital-Contract-Signing-Approval-Workflow",
      category: 'frontend'
    },
    {
      id: 5,
      title: "Real Estate",
      description: "A modernreal estate website with interactive listings, agent profiles, blog, social media integration, and responsive design for seamless marketing and sales.",
      image: "image/real-estate.png",
      tags: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/fdgatoc03/Real-Estate-new",
      category: 'backend'
    },
    {
      id: 6,
      title: "CareLink",
      description: "CareLink is a healthcare app built with React and TypeScript that connects patients with nearby pharmacies, featuring secure login, inventory tracking, and a responsive Tailwind CSS design..",
      image: "image/carelink.png",
      tags: ["React", "TypeScript", "API Integration", "Responsive Design"],
      github: "https://github.com/fdgatoc03/CareLink",
      category: 'fullstack'
    }
  ];

  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack' | 'game dev'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of my work, personal projects, and coding experiments.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('frontend')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                filter === 'frontend' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Frontend
            </button>
            <button 
              onClick={() => setFilter('backend')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                filter === 'backend' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Backend
            </button>
            <button 
              onClick={() => setFilter('fullstack')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                filter === 'fullstack' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Full Stack
            </button>
            <button 
              onClick={() => setFilter('game dev')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                filter === 'game dev' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Game Dev
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github size={18} className="mr-1" />
                      Code
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/fdgatoc03" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300 shadow-md hover:shadow-lg"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
