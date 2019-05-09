import React, { Component } from 'react';
import {Redirect} from 'react-router'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { LinkContainer } from 'react-router-bootstrap';

let imgUrl = 'https://firebasestorage.googleapis.com/v0/b/rcd-static.appspot.com/o/images%2Fimg-1557322611888-SocialMediaMarketingCover.png?alt=media&token=b4068baf-24cc-4768-88c6-47642dc872c1'
let imgAlt = 'A Definitive Guide to Social Media Marketing'
let title = 'Resque\'s Definitive Guide to Social Media'
let email = 'michael@resqueapp.com'

let redirectLink = '/'

class EBookThanks extends Component {
  render(){
    return(
        <Container className="navbarPadding">
          <Row className="align-items-center">
            <Col sm={12} lg={7}>
              <h1>Thank You</h1>
              <p>Your copy of {title} will be sent to you shortly by email.</p>
              <p>If you have not yet recieved your copy please check your
              "Spam" folder. If you find our email there,
              click "This is Not Spam." This will help future
              messages to get through</p>
              <br />
              <LinkContainer to={redirectLink}>
                <Button variant="success">
                   Click to Return to Home Page
                </Button>
              </LinkContainer>
            </Col>
            <Col sm={12} lg={5}>
              <img src={imgUrl} alt={imgAlt} className="eBookPictureSm" />
            </Col>
          </Row>
        </Container>

    )
  }

}

export default EBookThanks;
