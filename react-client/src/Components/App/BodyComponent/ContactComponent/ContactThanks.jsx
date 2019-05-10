import React, { Component } from 'react';
import {Redirect} from 'react-router'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { LinkContainer } from 'react-router-bootstrap';

let redirectLink = '/'

class ContactThanks extends Component {
  render(){
    return(
        <Container className="navbarPadding">
          <Row className="align-items-center">
            <Col sm={12} lg={12}>
              <h1>Thank You</h1>
              <p>We will get back to you shortly</p>
              <br />
              <LinkContainer to={redirectLink}>
                <Button variant="success">
                   Click to Return to Home Page
                </Button>
              </LinkContainer>
            </Col>
          </Row>
        </Container>

    )
  }

}

export default ContactThanks;
