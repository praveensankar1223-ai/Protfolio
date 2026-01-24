import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h3>Who Am I?</h3>
            <p>
              I'm Praveen S, a passionate <strong>Full Stack Developer</strong> from Madurai, 
              specializing in building exceptional digital experiences. With expertise in 
              modern web technologies like React.js, Node.js, and MongoDB, I create 
              responsive and user-friendly applications.
            </p>
            <p>
              Currently working as a <strong>React JS Developer at Cyberbunk</strong>, I focus on 
              developing reusable UI components, connecting Figma designs with production-ready 
              interfaces, and integrating seamless APIs. I'm passionate about clean code, 
              performance optimization, and delivering solutions that make a difference.
            </p>
            <div className="contact-info">
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">praveensharma2523@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="label">Phone:</span>
                <span className="value">+91 9004747232</span>
              </div>
              <div className="info-item">
                <span className="label">Location:</span>
                <span className="value">Madurai, Tamil Nadu</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-info" variants={itemVariants}>
            <div className="info-card">
              <div className="icon-wrapper">
                <FaGraduationCap />
              </div>
              <h4>Education</h4>
              <div className="education-item">
                <h5>Master of Computer Application (MCA)</h5>
                <p>Kalasalingam Academy of Research and Education</p>
                <span className="year">2023 - 2025</span>
              </div>
              <div className="education-item">
                <h5>Bachelor of Commerce in Computer Applications</h5>
                <p>Yellore College</p>
                <span className="year">2021 - 2023</span>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <FaBriefcase />
              </div>
              <h4>Professional Training</h4>
              <div className="training-item">
                <h5>Innovel IT Training Institute, Madurai</h5>
                <ul>
                  <li>Full Stack Development</li>
                  <li>UX/UI Design</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
