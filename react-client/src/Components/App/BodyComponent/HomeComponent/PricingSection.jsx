import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const resqueRegister = "https://beta.resqueapp.com/register"

class PricingSection extends Component {
  render(){
      return(
        <div className="pricingSection">
          <Container>
            <Row>
              <Col lg={8} className="text-light">
                <h3>All plans include a 14-day free trial</h3>
                <h4>Find time for everything else you need to accomplish, without
                worrying about scheduling</h4>
                <br />
                <div>
                  <p>No Contracts</p>
                  <p>Cancel Anytime</p>
                </div>
              </Col>
              <Col lg={4} className="align-self-center h-100">
                <div className="text-center" id="pricingCard">
                  <h1 className="text-light">$120 / Year</h1>
                  <br />
                  <Button href={resqueRegister}>Get Started</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )
  }
}

export default PricingSection;
