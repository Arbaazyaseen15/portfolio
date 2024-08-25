import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center justify-content-center"> 
          <Col xs={12} md={8} xl={7}> 
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to My Portfolio</span>
                  <h1>{`Hi! I'm Arbaaz Yaseen`}</h1>
                  <p>A Front-End Web Developer with a passion for creating sleek, responsive web applications. Computer Engineering graduate from Bharati Vidyapeeth College of Engineering.</p>
                  <div className="button-container">
                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
