import React, { Component } from 'react';

import BasicSSForm from '../Helpers/BasicSSForm';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

let ssBaseUri = 'https://app-3QNI9C2954.marketingautomation.services/webforms/receivePostback/MzawMDE3MTE2AQA/'
let ssEndpoint = 'a9da7a26-f44e-4d9d-91ad-e9e8528a6524'
let redirectTo = "/ebooks/thanks"
let title = "Get Your E-Book"

// BasicSS Form requires the following props: ssBaseUri, ssEndpoint,
// redirectTo, title

// Signup form to receive E-Book; will send request to Sharpspring automation

class EBookSignup extends Component {
  render(){
    return(
      <div ClassName="navbarPadding">
      <Container>
        <Row className="formSignup">
          <Col md={6}>
            <BasicSSForm
              ssBaseUri={ssBaseUri}
              ssEndpoint={ssEndpoint}
              redirectTo={redirectTo}
              title={title}
            />
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

export default EBookSignup;
