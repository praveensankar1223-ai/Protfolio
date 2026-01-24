import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
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
          Experience
        </motion.h2>

        <motion.div 
          className="experience-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="timeline">
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>React JS Developer</h3>
                  <div className="company">
                    <span className="company-name">Cyberbunk Engineering Solutions Pvt Ltd</span>
                    <span className="location">Madurai, India</span>
                  </div>
                  <div className="date">
                    <FaCalendar />
                    <span>August 2024 - Present</span>
                  </div>
                </div>
                <div className="timeline-description">
                  <p>
                    Working as a Frontend Developer specializing in React.js, 
                    focusing on user engagement and intuitive navigation.
                  </p>
                  <ul className="responsibilities">
                    <li>
                      Developing reusable UI components, connecting Figma designs with 
                      production-ready interfaces, and integrating seamless APIs.
                    </li>
                    <li>
                      Building responsive and scalable web applications using React.js, 
                      Bootstrap, Ant Design.
                    </li>
                    <li>
                      Creating dynamic, user-friendly mobile designs, resulting in a 
                      modern and professional prototype.
                    </li>
                    <li>
                      Following industry best practices for performance, code quality, 
                      and maintainability.
                    </li>
                  </ul>
                  <div className="technologies">
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">Figma</span>
                    <span className="tech-tag">REST APIs</span>
                    <span className="tech-tag">Bootstrap</span>
                    <span className="tech-tag">Ant Design</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
                6+
              </motion.h4>
              <p>Months Experience</p>
            </div>
            <div className="stat-card">
              <motion.h4
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                5+
              </motion.h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <motion.h4
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                100%
              </motion.h4>
              <p>Client Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
