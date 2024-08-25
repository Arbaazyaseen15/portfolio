import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import html5Icon from '@iconify-icons/logos/html-5';
import css3Icon from '@iconify-icons/logos/css-3';
import jsIcon from '@iconify-icons/logos/javascript';
import reactIcon from '@iconify-icons/logos/react';
import nodeJsIcon from '@iconify-icons/logos/nodejs';
import graphqlIcon from '@iconify-icons/logos/graphql';
import nextJsIcon from '@iconify-icons/logos/nextjs';
import typescriptIcon from '@iconify-icons/logos/typescript';
import dockerIcon from '@iconify-icons/logos/docker';
import bootstrapIcon from '@iconify-icons/logos/bootstrap';
import tailwindIcon from '@iconify-icons/logos/tailwindcss';
import mongodbIcon from '@iconify-icons/logos/mongodb';
import figmaIcon from '@iconify-icons/logos/figma';
import hibernateIcon from '@iconify-icons/logos/hibernate';
import springIcon from '@iconify-icons/logos/spring';
import gradleIcon from '@iconify-icons/logos/gradle';
import reduxIcon from '@iconify-icons/logos/redux';

export const Skills = () => {
  const skills = [
    { name: 'HTML', icon: html5Icon },
    { name: 'CSS', icon: css3Icon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Node.js', icon: nodeJsIcon },
    { name: 'GraphQL', icon: graphqlIcon },
    { name: 'Next.js', icon: nextJsIcon },
    { name: 'TypeScript', icon: typescriptIcon },
    { name: 'Docker', icon: dockerIcon },
    { name: 'Bootstrap', icon: bootstrapIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    { name: 'MongoDB', icon: mongodbIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'Hibernate', icon: hibernateIcon },
    { name: 'Spring', icon: springIcon },
    { name: 'Gradle', icon: gradleIcon },
    { name: 'Redux', icon: reduxIcon },
  ];

  const responsive = {
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 3,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills and Experience</h2>
              {/* Carousel for mobile view */}
              <div className="d-md-none">
                <Carousel responsive={responsive} infinite={true} className="skill-carousel">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <Icon icon={skill.icon} className="skill-icon" width="100" height="50" />
                      <h5>{skill.name}</h5>
                    </div>
                  ))}
                </Carousel>
              </div>

              {/* Grid for larger screens */}
              <Row className="skills-grid d-none d-md-flex">
                {skills.map((skill, index) => (
                  <Col xs={6} sm={4} md={3} lg={2} key={index} className="skill-item">
                    <div className="skill-content">
                      <Icon icon={skill.icon} className="skill-icon" width="100" height="50" />
                      <h5>{skill.name}</h5>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
