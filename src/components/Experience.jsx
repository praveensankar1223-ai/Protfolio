import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const internships = [
    {
      title: 'UX/UI Designer Intern',
      company: 'DUHZINE IT Solutions',
      duration: 'Aug 2025 - Oct 2025',
      description: 'Worked on designing user-friendly and responsive interfaces using Figma, creating wireframes and high-fidelity prototypes with a focus on usability and clean visual design.',
      technologies: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping']
    },
    {
      title: 'Full Stack Web Development Intern',
      company: 'EDU Tantr',
      duration: 'Sep 2025 - Dec 2025',
      description: 'Gained hands-on experience in building full-stack web applications using HTML, CSS, JavaScript, and the MERN stack, including REST API integration and database handling.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MERN Stack', 'REST API', 'MongoDB']
    }
  ];

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Internships
        </motion.h2>

        <motion.div
          className="experience-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="timeline">
            {internships.map((internship, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="timeline-icon">
                  <FaBriefcase />
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{internship.title}</h3>
                    <div className="company">
                      <span className="company-name">{internship.company}</span>
                    </div>
                    <div className="date">
                      <FaCalendar />
                      <span>{internship.duration}</span>
                    </div>
                  </div>
                  <div className="timeline-description">
                    <p>{internship.description}</p>
                    <div className="technologies">
                      {internship.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="stats-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="stat-card">
              <motion.h4
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                2
              </motion.h4>
              <p>Internships Completed</p>
            </div>
            <div className="stat-card">
              <motion.h4
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                6+
              </motion.h4>
              <p>Months Experience</p>
            </div>
            <div className="stat-card">
              <motion.h4
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                10+
              </motion.h4>
              <p>Skills Acquired</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
