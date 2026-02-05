import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">PRAVEEN</span>
          <span className="logo-dot">.</span>
        </div>
        
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              SKILLS
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              INTERNSHIPS
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
          </li>
          <li>
            <a href="/Praveen-resume.pdf" download="Praveen-Resume.pdf" className="resume-btn">
              <FaDownload /> RESUME
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
