import { Container, Row, Col } from "react-bootstrap";
import { Github, Linkedin, Telephone } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col size={12}>
            <div className="footer-content">
              <a href="/" className="footer-logo">Arbaaz Yaseen</a>
              <div className="social-links">
                <a href="mailto:arbaazyaseenemail@example.com" target="_blank" rel="noopener noreferrer">Email</a>
                <a href="https://www.linkedin.com/in/arbaazyaseen/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/Arbaazyaseen15" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <p>© 2024 Arbaaz Yaseen. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
