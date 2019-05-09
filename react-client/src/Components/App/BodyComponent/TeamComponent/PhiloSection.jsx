import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class PhiloSection extends Component {
  render(){
      return(
          <div id="ourPhilosophy" className="text-light">
            <Container>
              <Row>
                <Col sm={12} lg={4} className = "align-self-center text-center">
                  <h1>Our Philosophy</h1>
                  <br />
                  <p><i>"Be Human"</i></p>
                </Col>
                <Col className="align-self-center">
                <p>At Resque, we strive to help our users create meaningful
                connections by encouraging our clients to <i>“Be Human.”</i></p>

                <p>Over time, social networking has become much more of a chore
                than it has been a way to connect people. Because of this, people
                are drifting further away from each other. We are trying to
                change that... <i>one post at a time.</i></p>


                </Col>
              </Row>
            </Container>
          </div>

      )
  }
}

export default PhiloSection;
