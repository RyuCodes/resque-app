import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import BasicSSForm from './Helpers/BasicSSForm';

let contactUsUrl = "http://go.resqueapp.com.pages.services/resqueapp-contact-us/?ts=1557495262811"

let ssBaseUri = "https://app-3QNI9C2954.marketingautomation.services/webforms/receivePostback/MzawMDE3MTE2AQA/"
let ssEndpoint = '4233c999-3ccf-48e0-b96b-aa0eb1829720'
let redirectTo = "/contact/thanks"
let title = ""

class ContactSection extends Component{

  render(){
    return(
      <Container>
        <Row className="align-items-center navbarPadding contactRow">
          <Col sm={12} lg={5} className="align-self-center">
            <h1 className="text-uppercase">Have a Question?</h1>
            <br />
            <div className="text-muted">
              <h3>Give us a shout!</h3>
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
          <Col sm={12} lg={7} className="align-self-center">
            <BasicSSForm
              ssBaseUri={ssBaseUri}
              ssEndpoint={ssEndpoint}
              redirectTo={redirectTo}
              title={title}
            />
          </Col>
        </Row>
      </Container>

    )
  }

}

export default ContactSection;
