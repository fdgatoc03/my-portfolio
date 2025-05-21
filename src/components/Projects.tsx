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
      tags: ["Laravel", "MySQL", "AJAX", "Tailwind CSS", "Docker"],
      link: "https://getko.ph/",
      // github: "#",
      category: 'fullstack'
    },
    {
      id: 2,
      title: "PetChecker",
      description: "A responsive personal portfolio website built with React and Tailwind CSS featuring dark mode support.",
      image: "image/petchecker.jpg",
      tags: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
      link: "https://app.petcheckr.eu/login",
       // github: "#",
      category: 'frontend'
    },
    // {
    //   id: 3,
    //   title: "Task Management Dashboard",
    //   description: "A full-featured task management application with user authentication, task assignment, and progress tracking.",
    //   image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   tags: ["Laravel", "React", "MySQL", "RESTful API"],
    //   github: "#",
    //   category: 'fullstack'
    // },
    // {
    //   id: 4,
    //   title: "Weather Forecast App",
    //   description: "A weather forecast application that uses a third-party API to display current and future weather conditions.",
    //   image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   tags: ["React", "API Integration", "CSS3", "JavaScript"],
    //   link: "#",
    //   github: "#",
    //   category: 'frontend'
    // },
    // {
    //   id: 5,
    //   title: "E-commerce API Service",
    //   description: "A backend RESTful API service built for e-commerce applications with product, order, and user management.",
    //   image: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   tags: ["Laravel", "MySQL", "RESTful API", "Authentication"],
    //   github: "#",
    //   category: 'backend'
    // },
    // {
    //   id: 6,
    //   title: "Social Media Dashboard",
    //   description: "A social media analytics dashboard that visualizes engagement metrics across multiple platforms.",
    //   image: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   tags: ["React", "Chart.js", "API Integration", "Responsive Design"],
    //   link: "#",
    //   category: 'frontend'
    // }
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