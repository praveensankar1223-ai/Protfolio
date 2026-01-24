import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Tube Booking System',
      description: 'A web application used by customers to check, reserve, and issue user availability, book tickets, and manage schedules and pricing efficiently.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Ant Design', 'Bootstrap'],
      features: [
        'User authentication and authorization',
        'Real-time ticket availability',
        'Secure payment integration',
        'Admin dashboard for management'
      ],
      image: '📱',
      color: '#dc2626'
    },
    {
      title: 'Social Media Platform',
      description: 'A modern social media platform using Figma, focusing on user engagement and intuitive navigation. Created wireframes, high-fidelity prototypes, and responsive mobile designs.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Figma', 'REST APIs'],
      features: [
        'User profiles and authentication',
        'Real-time messaging',
        'Post creation and sharing',
        'Responsive design for all devices'
      ],
      image: '🌐',
      color: '#ef4444'
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
                <span className="project-emoji">{project.image}</span>
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
                  <a href="#" className="project-link">
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                  <a href="#" className="project-link">
                    <FaGithub />
                    <span>Source Code</span>
                  </a>
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
