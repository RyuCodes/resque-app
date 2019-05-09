import React, { Component } from 'react';
import {Redirect} from 'react-router'

import { Formik } from 'formik';
import { object, string, required, email } from 'yup';

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

let yup = require('yup');

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required()
})

let ssBaseUri = 'https://app-3QNI9C2954.marketingautomation.services/webforms/receivePostback/MzawMDE3MTE2AQA/'
let ssEndpoint = 'a9da7a26-f44e-4d9d-91ad-e9e8528a6524'

class EBookSignup extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    let uri = ssBaseUri + ssEndpoint + '/jsonp/?';
    let dataArray = [];

    Object.keys(event).forEach((key) => {
      dataArray.push(`${key}=${event[key]}`);
    });

    let ssRequest = uri + dataArray.join('&');

    fetch(ssRequest, {
      mode: 'no-cors',
    })
      .then(() => {
        this.props.history.push("/ebooks/thanks");
      })
      .catch((error) => {console.log(error)})
  }

  render(){

    return(

      <div className="navbarPadding">
        <Container>
          <Row ClassName="eBooksSignup">
            <Col ClassName="align-self-center">
        <Formik
          validationSchema={schema}
          onSubmit={this.handleSubmit}
          initialValues={{
            firstName: '',
            lastName: '',
            email: ''
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            isInvalid,
            isSubmitting,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {!!errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {!!errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik03">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {!!errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Button type="submit" variant="success" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting' : 'Get the E-Book'}
              </Button>
            </Form>
          )}
        </Formik>
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}

export default EBookSignup;
