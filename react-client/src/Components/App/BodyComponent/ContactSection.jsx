import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

let contactUsUrl = "http://go.resqueapp.com.pages.services/resqueapp-contact-us/?ts=1557495262811"

class ContactSection extends Component{

  render(){
    return(
      <Container>
        <Row className="align-items-center navbarPadding contactRow">
          <Col sm={12} lg={5} className="align-self-center">
            <h1 className="text-uppercase">Have a Question?</h1>
            <br />
            <div className="text-muted">
              <Button variant="success" href={contactUsUrl}>Give us a shout!</Button>
              <hr />
              <p>408 N Cedar Bluff Rd #140 <br/>
              Knoxville, TN 37923</p>
              <hr />
              <p><strong>E:</strong><a href="mailto:michael@resqueapp.com">
                michael@resqueapp.com
              </a></p>
              <p><strong>P:</strong> (865) 385-9725</p>
            </div>
          </Col>
        </Row>
      </Container>

    )
  }

}

export default ContactSection;
