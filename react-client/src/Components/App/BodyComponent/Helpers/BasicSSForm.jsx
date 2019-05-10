import React, { Component } from 'react';
import {Redirect} from 'react-router';

import { Formik } from 'formik';
import { object, string, required, email } from 'yup';

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// Requires the following props: ssBaseUri, ssEndpoint, redirectTo, title

// Yup helps with validation schema
let yup = require('yup');

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required()
})

class BasicSSForm extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      redirect: false
    }
  }


  // handleSubmit event in format from Formik output
  handleSubmit(event){
    let uri = this.props.ssBaseUri + this.props.ssEndpoint + '/jsonp/?';
    let dataArray = [];

    Object.keys(event).forEach((key) => {
      dataArray.push(`${key}=${event[key]}`);
    });

    let ssRequest = uri + dataArray.join('&');
    // Sharpspring does not have CORS headers.  Sending as fetch because the
    // request will still reach their endpoint
    fetch(ssRequest, {
      mode: 'no-cors',
    })
      .then(() => {
        //this.props.history.push(this.props.redirectTo);
        this.setState({redirect:true})
      })
      .catch((error) => {console.log(error)})
  }

  render(){
    if (this.state.redirect){
      return(
        <Redirect to={this.props.redirectTo} />
      )
    }

    return(
        <Col ClassName="align-self-center formSignup">

        <h1>{this.props.title}</h1>
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
                <Form.Group as={Col} md="12" controlId="validationFormik01">
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
                <Form.Group as={Col} md="12" controlId="validationFormik02">
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
                <Form.Group as={Col} md="12" controlId="validationFormik03">
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
                {isSubmitting ? 'Submitting' : 'Submit'}
              </Button>
            </Form>
          )}
        </Formik>
      </Col>
    )
  }
}

export default BasicSSForm;
