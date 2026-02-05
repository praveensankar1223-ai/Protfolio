import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaGlobe, FaUserGraduate, FaCamera, FaHome } from 'react-icons/fa';
import { MdSportsSoccer } from 'react-icons/md';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Student Portal',
      description: 'A full-stack student management web application built with React and Vite, featuring comprehensive academic tracking, profile management, and interactive mapping capabilities for campus navigation.',
      technologies: ['React 19', 'Vite', 'React Router', 'Bootstrap', 'Mapbox GL', 'Leaflet', 'Axios', 'React Toastify'],
      features: [
        'User authentication and dashboard',
        'Profile management with edit capabilities',
        'Class schedule and timetable management',
        'Course materials repository',
        'Attendance tracking and assessment records',
        'Interactive campus maps with Mapbox & Leaflet'
      ],
      icon: FaUserGraduate,
      color: '#4A90E2'
    },
    {
      title: 'Turf Booking System',
      description: 'A web application used by customers to check, reserve, and issue user availability, book tickets, and manage schedules and pricing efficiently.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Ant Design', 'Bootstrap'],
      features: [
        'User authentication and authorization',
        'Real-time ticket availability',
        'Secure payment integration',
        'Admin dashboard for management'
      ],
      icon: MdSportsSoccer,
      color: '#E74C3C'
    },
    {
      title: 'Social Media Platform Design',
      description: 'A comprehensive UI/UX design project for a modern social media platform created in Figma, with design inspiration from Canva and Pinterest. Focused on user engagement, intuitive navigation, and seamless user experience across all devices.',
      technologies: ['Figma'],
      features: [
        'Complete wireframes and user flow diagrams',
        'High-fidelity interactive prototypes',
        'Modern and clean UI design system',
        'Fully responsive mobile and desktop layouts'
      ],
      icon: FaGlobe,
      color: '#FF6B6B',
      demoLink: 'https://www.figma.com/proto/myZyHFbUtMEeUXJrle2IEw/Untitled?node-id=88-3&p=f&t=fG8J1LePjfJwyXze-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=88%3A3'
    },
    {
      title: 'Photography Website',
      description: 'A stunning UI/UX design for a professional photography portfolio website created in Figma for a client. Features an elegant and minimalist design that showcases photography work beautifully with seamless user experience.',
      technologies: ['Figma'],
      features: [
        'Interactive prototype with smooth transitions',
        'Gallery showcase with image filtering',
        'Elegant and minimalist design aesthetic',
        'Mobile-responsive layouts',
        'Client booking and contact forms'
      ],
      icon: FaCamera,
      color: '#8b5cf6',
      demoLink: 'https://www.figma.com/proto/Fc3IxR45OCvtW0rzbT3KKK/Untitled?node-id=3-2&t=Xs177eGaq395CQ0a-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2'
    },
    {
      title: 'Real Estate Platform',
      description: 'A modern UI/UX design for a real estate platform created in Figma. Features property listings, search functionality, and detailed property views with an intuitive and user-friendly interface for buyers and sellers.',
      technologies: ['Figma'],
      features: [
        'Property listing with advanced filters',
        'Interactive map integration design',
        'Property detail pages with galleries',
        'User-friendly search and navigation',
        'Responsive design for all devices'
      ],
      icon: FaHome,
      color: '#10b981',
      demoLink: 'https://www.figma.com/proto/0e3I1OYy1Jrq9pJk1y3VhR/Untitled?node-id=112-126&t=R1jaSKMi1kYmtbSb-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1'
    }
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image" style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)` }}>
                <project.icon className="project-icon" />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.demoLink || "#"} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                  {project.title !== 'Social Media Platform Design' && project.title !== 'Photography Website' && project.title !== 'Real Estate Platform' && (
                    <a href="https://www.figma.com/proto/Fc3IxR45OCvtW0rzbT3KKK/Untitled?node-id=3-2&t=Xs177eGaq395CQ0a-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A2" className="project-link">
                      <FaGithub />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

};

export default Projects;
