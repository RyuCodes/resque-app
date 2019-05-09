import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class AboutSection extends Component {
  render(){
      return(
          <div id="aboutUs" className="text-light">
            <Row className="h-100">
              <Col className="align-self-center">
                <h1>About Us</h1>
                <p>Resque is the premier platform for ad agencies, small business owners, and
                influencers to manage their social media. Resque allows you to leverage Buffer
                to maximize the impact of your social channels.</p>
              </Col>
            </Row>
          </div>
      )
  }
}

export default AboutSection;
