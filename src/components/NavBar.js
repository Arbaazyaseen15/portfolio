import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Github, Linkedin, Telephone } from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [navbarExpanded, setNavbarExpanded] = useState(false); // State to track navbar expansion

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleToggle = () => {
    setNavbarExpanded(prev => !prev); // Toggle navbar expansion
  };

  return (
    <Router>
      <Navbar expand="lg" className={`${scrolled || navbarExpanded ? "scrolled" : ""}`}>
        <Container>
          <Navbar.Brand href="/">
            <span className="logo-name">Arbaaz Yaseen</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                href="#home" 
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/arbaazyaseen/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={30} />
                </a>
                <a href="https://github.com/Arbaazyaseen15" target="_blank" rel="noopener noreferrer">
                  <Github size={30} />
                </a>
                <a href="tel:+917250727447" target="_blank" rel="noopener noreferrer">
                  <Telephone size={30} />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}
