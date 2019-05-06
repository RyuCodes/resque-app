import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const resqueRegister = "https://beta.resqueapp.com/register"

class HeroSection extends Component {
  render() {
    return (
      <div id="heroSection">
        <Container className="h-100">
            <Row className="h-100">
              <Col xs={12} md={4} className="align-self-center">
              <h1 className="text-light text-center">Free Your Time</h1>
                <p className="text-secondary text-center text-uppercase">
                  Optimize your social media scheduling and never worry about
                  stepping away
                </p>
                <div className="text-center">
                  <Button variant="success" href={resqueRegister}>
                    Get Started
                  </Button>
                </div>
              </Col>
            </Row>
        </Container>
      </div>
    )
  }
}
export default HeroSection;
