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
              I am Praveen Sankar, a passionate <strong>UI/UX Designer and Full Stack Developer</strong> who enjoys building user-friendly and visually appealing web applications. I focus on creating seamless digital experiences by combining creative design thinking with strong technical skills.
            </p>
            <p>
              I have hands-on experience in developing responsive and scalable web applications using modern technologies like <strong>MongoDB, Express.js, React.js, and Node.js</strong>. I recently completed a Full Stack Web Development internship where I worked on real-time projects and gained practical industry exposure.
            </p>
            <p>
              I am always eager to learn new technologies, improve my problem-solving skills. My goal is to grow as a developer and contribute to meaningful and challenging projects.
            </p>
            <div className="contact-info">
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">praveensankar1223@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="label">Phone:</span>
                <span className="value">+91 90034747232</span>
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
