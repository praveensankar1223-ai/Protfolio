import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>PRAVEEN<span>.</span></h3>
            <p>Full Stack Developer passionate about creating amazing web experiences.</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>praveensankar1223@gmail.com</li>
                <li>+91 9003473232</li>
                <li>Madurai, Tamil Nadu</li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            <h4>Follow Me</h4>
            <div className="social-icons">
              <a href="https://github.com/praveensankar1223-ai" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/praveensankar-mdu" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/prav_eez___/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="mailto:praveensankar1223@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Praveen Sankar. Crafted with passion and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
