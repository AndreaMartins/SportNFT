import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Hero = () => {
  return (
    <section className="hero image" id="hero">
      <Container fluid="lg">
        <Row className="content">
          <Col className="data">
            <h1 className="title-hero">
              SPORT NFT
              <br />
              Validation and Credentials in competition world
              <br />
            </h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
