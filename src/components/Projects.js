import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import projImg1 from '../assets/img/project-img1.png'; // Example project images
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Multilingual Education Through OCR and AI',
      description: 'A web application built with Streamlit and Python that provides educational content in multiple languages using OCR and AI technologies. This project has supported over 1000 students in accessing tailored educational resources.',
      imgUrl: projImg1,
      githubUrl: 'https://github.com/Arbaazyaseen15/MEdu_OCR_AI',
    },
    {
      title: 'Calculator',
      description: 'A simple calculaator made with HTML, CSS, JS',
      imgUrl: projImg2,
      githubUrl: 'https://github.com/Arbaazyaseen15/calculator/tree/gh-pages',
    },
    {
      title: 'Portfolio Website',
      description: 'Showcase Your Work',
      imgUrl: projImg3,
      githubUrl: 'https://github.com/Arbaazyaseen15/portfolio',
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 770 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 769, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <Carousel responsive={responsive} infinite={true} className="project-carousel">
                    {projects.map((project, index) => (
                      <div className="proj-card" key={index}>
                        <img src={project.imgUrl} alt={project.title} />
                        <div className="proj-txt">
                          <h4>{project.title}</h4>
                          
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
