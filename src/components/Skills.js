import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFigma } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React JS', icon: <FaReact />, level: 90 },
    { name: 'Node JS', icon: <FaNodeJs />, level: 85 },
    { name: 'JavaScript', icon: <FaJs />, level: 90 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
    { name: 'Express JS', icon: <SiExpress />, level: 85 },
    { name: 'SQL', icon: <FaDatabase />, level: 75 },
    { name: 'UI/UX Design', icon: <SiFigma />, level: 80 },
  ];

  const softSkills = [
    'Problem Solving',
    'Time Management',
    'Critical Thinking',
    'Communication',
    'Quick Learning',
    'Team Collaboration'
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="skills-content">
          <motion.div 
            className="technical-skills"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                    ></motion.div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="soft-skills"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Soft Skills</h3>
            <div className="soft-skills-list">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="soft-skill-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                >
                  <span className="bullet"></span>
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
