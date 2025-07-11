import React from "react";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React, Node.js, and MySQL. Features include user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MySQL", "Stripe API", "JWT"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/piquii365/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.example.com",
      date: "2024",
      featured: true
    },
    {
      title: "Task Management System",
      description: "Collaborative task management application with real-time updates, built using .NET MVC and SQL Server. Includes team collaboration features and progress tracking.",
      technologies: [".NET MVC", "SQL Server", "SignalR", "Bootstrap"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/piquii365/task-management",
      liveUrl: "https://taskmanager-demo.example.com",
      date: "2023",
      featured: true
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Python-based weather data analytics platform with interactive visualizations. Processes real-time weather data and provides insights through charts and graphs.",
      technologies: ["Python", "Django", "PostgreSQL", "Chart.js", "REST API"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/piquii365/weather-analytics",
      liveUrl: "https://weather-analytics.example.com",
      date: "2023",
      featured: false
    },
    {
      title: "Inventory Management System",
      description: "Java-based inventory management system for small businesses. Features include stock tracking, supplier management, and automated reorder alerts.",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "JPA"],
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/piquii365/inventory-system",
      liveUrl: null,
      date: "2023",
      featured: false
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat application with real-time messaging, file sharing, and group chat functionality. Built with React and Socket.io for seamless communication.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/piquii365/chat-app",
      liveUrl: "https://chat-demo.example.com",
      date: "2024",
      featured: true
    },
    {
      title: "Financial Dashboard",
      description: "Comprehensive financial tracking dashboard with expense categorization, budget planning, and financial goal tracking. Responsive design for all devices.",
      technologies: ["React", "TanStack Query", "Node.js", "PostgreSQL", "Chart.js"],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/piquii365/financial-dashboard",
      liveUrl: "https://finance-tracker.example.com",
      date: "2024",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#192A51] mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#967AA1] to-[#AAA1C8] mx-auto mb-8"></div>
          <p className="text-lg text-[#192A51]/80 max-w-2xl mx-auto">
            A showcase of my recent work demonstrating expertise across different technologies and domains. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#F5E6E8] to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-[#967AA1] to-[#AAA1C8] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-[#192A51]">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-[#967AA1] text-sm">
                    <Calendar size={16} className="mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-[#192A51]/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="flex items-center px-3 py-1 bg-[#D5C6E0]/50 text-[#192A51] rounded-full text-sm"
                    >
                      <Tag size={12} className="mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#192A51] text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-[#967AA1] to-[#AAA1C8] text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[#192A51] mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-[#192A51]">
                    {project.title}
                  </h4>
                  <div className="flex items-center text-[#967AA1] text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-[#192A51]/80 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-[#D5C6E0]/30 text-[#192A51] rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-[#967AA1]/20 text-[#967AA1] rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-1 bg-[#192A51] text-white rounded text-sm hover:bg-opacity-90 transition-all duration-300"
                  >
                    <Github size={14} className="mr-1" />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-1 bg-gradient-to-r from-[#967AA1] to-[#AAA1C8] text-white rounded text-sm hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Projects */}
        <div className="text-center">
          <a
            href="https://github.com/piquii365"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#192A51] to-[#967AA1] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;